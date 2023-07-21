import styled from "styled-components";
import Follow from "../../assets/plus.svg"

const ButtonArtist = styled.div`
display: flex;
flex-direction: column;
    gap: 20px;
    width: 315px;
    height: auto;
    @media screen and (min-width: 376px) {
        display: flex;
       
    }
`
const ButtonInfo = styled.div`
         width: 315px;
height: 60px;
padding: 0px 30px 0px 30px;
border-radius: 20px;
gap: 12px;
border: 2px solid black;
 border-color: #A259FF;
 background-color: #A259FF;

`

const ButtonFollow = styled.div`
display: flex;
justify-content: center;
align-items: center;
     width: 315px;
height: 60px;
padding: 0px 30px 0px 30px;
border-radius: 20px;
gap: 12px;
border: 2px solid black;
 border-color: #A259FF;
 background-color: transparent;
.plus-button {
    width: 20px;
    height: 20px;
    color:red;
    align-items: center;
}
;
`
const Button = () => {
    return (
        <ButtonArtist>
           <ButtonInfo>
            <div></div>
           </ButtonInfo>
            <ButtonFollow>
            <img className="plus-button" src={Follow} alt="" />
            <div>Follow</div>
            </ButtonFollow>
        </ButtonArtist>
    );
}
export default Button;