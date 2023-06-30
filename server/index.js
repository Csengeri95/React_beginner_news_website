require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 8000;

const bcrypt = require('bcrypt');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())



app.post("/register", async (req, res) => {

    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)


    var user = {
        username,
        email,
        hashedPassword,
        profilePicture: ''
    }



    async function addUser(user) {
        try {
            await client.connect();
            const collection = client.db("News").collection('users');
            console.log('success connection to add');
            let result = await collection.insertOne(user);
            //console.log(result)

        }
        catch (error) {
            throw error;
        }

        finally {
            await client.close()
        }


    }




    async function read(query = {}, projections = {}) {
        try {
            await client.connect();
            const collection = client.db("News").collection('users');
            let result = await collection.find(query, projections).toArray();
            //  console.log(result);
            return result;

        } catch (e) {
            throw e;
        }

        finally {
            await client.close();
        }




    }


    read()
        .then(result => {
            if (result.length > 0) {
                read({ username: user.username })
                    .then(result => {
                        if (result.length > 0) {
                            res.json({ error: "The username is already in serve!" })
                        }
                        else {
                            read({ email: user.email })
                                .then(result => {
                                    if (result.length > 0) {
                                        res.json({ error: "The email is already in use!" })
                                    }
                                    else {
                                        if (user.username != "" && user.email != "" && user.password != "") {
                                            addUser(user)
                                            res.json({ message: "The user has been created!" })
                                        }
                                        else {
                                            res.json({ error: "Something is missing. Please try again." })
                                        }
                                    }
                                })
                        }

                    })
            }
            else {
                addUser(user)
                res.json({ message: "The user has been created!" })
            }
        })


})


app.post("/login", (req, res) => {
    var user = {
        email: req.body.email,
        password: req.body.password
    }

    async function read(query = {}, projections = {}) {
        try {
            await client.connect();
            const collection = client.db("News").collection('users');
            let result = await collection.find(query, projections).toArray();
            //   console.log(result);
            return result;


        } catch (e) {
            throw e;
        }
        finally {
            await client.close();
        }

    }



    read({ email: user.email })
        .then(result => {
            if (result.length > 0) {
                let findOne = result[0]
                bcrypt.compare(user.password, findOne.hashedPassword)
                    .then(match => {
                        if (match) {
                            res.json({
                                message: "Login was successful!",
                                data: {
                                    id: findOne._id,
                                    email: findOne.email
                                }
                            })
                        } else {
                            res.json({ error: "The password is incorrect!" })
                        }
                    })
            }
            else {
                res.json({ error: "The email is incorrect!" })
            }
        })



})


app.post('/upload-image/:userId', (req, res) => {

    const { profilePicture } = req.body;
    // console.log(profilePicture)
    const { userId } = req.params;


    async function update(query = {}, newvalues) {

        //hibakezelés
        try {
            const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
            await client.connect();
            const collection = client.db("News").collection('users');
            let result = await collection.updateOne(query, newvalues)
            // console.log(result);
            await client.close();
        } catch (e) {
            throw e;
        }


    };

    update({ _id: ObjectId(userId) }, { $set: { profilePicture: profilePicture } })
        .then(() => res.json({ message: "Profile picture updated" }))
        .catch((error) => {
            res.status(500).json({ error: error })
        })
})

app.get('/profile/:userId/profilePicture', (req, res) => {

    const { userId } = req.params;
    async function read(query = {}, projections = {}) {
        try {
            await client.connect();
            const collection = client.db("News").collection('users');
            let result = await collection.find(query, projections).toArray();
            //  console.log(result);
            return result;


        } catch (e) {
            throw e;
        }
        finally {
            await client.close();
        }
    }

    read({ _id: ObjectId(userId) })
        .then(result => {
            if (result.length > 0) {
                let findOne = result[0];
                res.json({
                    Message: "Succesfull",

                    data: {

                        image: findOne.profilePicture
                    }
                })
            } else {
                res.json({ Message: "There is not match" })
            }

        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })



})


app.listen(port, () => {
    console.log(`A szerver a ${port}-on fut`)
})