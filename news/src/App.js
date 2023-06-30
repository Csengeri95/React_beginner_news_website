import './App.css';
import { HashRouter as Router } from "react-router-dom";
import Header from './components/Navbar';
import Content from './components/Content';
import Home from './pages/Home';
import { UserContext, UserContextDefaults } from "./contexts/UserContext"
import { useEffect, useState } from 'react';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import LoginSnackBar from "./components/LoginSnackbar"
import LogoutSnackbar from './components/LogoutSnackbar';
import Politics from './pages/Politics';
import Culture from './pages/Culture';
import Search from './pages/Search';
import { BiSearch } from "react-icons/bi";
import { SnackbarContext, SnackbarContextDefaults } from "./contexts/SnackbarContext";
import CookieConsent from "react-cookie-consent";
import { UploadImageContext, UploadImageContextDefaults } from './contexts/UploadImageContext';
import { HelmetProvider } from 'react-helmet-async';
import Impressum from './pages/Impressum';



function App() {



  const [user, setUser] = useState(UserContextDefaults.value);
  const [login, setLogin] = useState(SnackbarContextDefaults.value);
  const [logout, setLogout] = useState(SnackbarContextDefaults.value);
  const [uploadImage, setUploadImage] = useState(UploadImageContextDefaults.value)




  const pages = [

    { name: <BiSearch alt="search" title="search" />, path: "/search", element: <Search />, status: true },
    { name: "Kezdőlap", path: `/`, element: <Home />, status: true },
    { name: "Politika", path: "/political", element: <Politics />, status: true },
    { name: "Kultúra", path: "/cultural", element: <Culture />, status: true },
    { name: "Impresszum", path: "/impressum", element: < Impressum />, status: true },
    { name: 'PageNotFound', path: '/*', element: < PageNotFound />, status: false }
  ]


  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("news") !== null) {
      setUser(JSON.parse(localStorage.getItem("news")))

    }
    setInitialized(true)


  }, [])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem("news", JSON.stringify(user))
    }
  })

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return
    }

    setLogin(false)
    setLogout(false)
  }


  return (
    <HelmetProvider>
      <UserContext.Provider value={{ user, setUser }} >
        <SnackbarContext.Provider value={{ login, logout, setLogin, setLogout }}>
          <UploadImageContext.Provider value={{ uploadImage, setUploadImage }} >
            <div className="App">
              <Router>

                <LoginSnackBar handleClose={handleClose} />
                <LogoutSnackbar handleClose={handleClose} />

                <Header pages={pages} />
                <Content pages={pages} />
                <Footer />

              </Router>

              <CookieConsent
                location="bottom"
                buttonText='X'
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", backgroundColor: "rgba(0,0,0,0.3)", fontSize: "16px", borderRadius: '50%' }}
                expires={150}


              >
                Azzal, hogy tovább böngészik elfogadja, hogy az oldal sütiket használ.
              </CookieConsent>

            </div>
          </UploadImageContext.Provider>
        </SnackbarContext.Provider>
      </UserContext.Provider>
    </HelmetProvider>
  );
}

export default App;
