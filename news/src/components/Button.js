import styled from "styled-components"

const StyleButton = styled.div`
width:2rem;
height:2rem;
display:flex;
justify-content:space-around;
flex-flow:column nowrap;
padding-right:1rem;
display:none;
margin-right:.4rem;

@media (max-width:992px){
    display:flex;
}

div{
    width:2rem;
    
    height:0.25rem;
    background-color:#333;
  border-radius:10px;
  transform-origin:1px;
  transition:all 0.2s linear;

  &:nth-child(1){
    transform:${({ navbar }) => navbar ? "rotate(45deg)" : "rotate(0)"}

}

&:nth-child(2){
    opacity:${({ navbar }) => navbar ? 0 : 1}
}

&:nth-child(3){
    transform:${({ navbar }) => navbar? "rotate(-45deg)" : "rotate(0)"}
}
  }






`;


export default function Button({navbar,onClick}) {

    return (
        <StyleButton navbar={navbar} onClick={onClick}  >
            <div />
            <div />
            <div />

        </StyleButton>
    )
}