import styled from "styled-components";

const ButtonArtist = styled.div`
    gap: 20px;
    width: 315px;
    height: 120px;
`
const ButtonInfo = styled.div`
    width: 315px;
height: 60px;
padding: 0px 50px 0px 50px;
border-radius: 20px;
gap: 12px;
color: red;
`
const ButtonFollow = styled.div`
     width: 315px;
height: 60px;
padding: 0px 50px 0px 50px;
border-radius: 20px;
gap: 12px;
`
const Button = () => {
    return (
        <ButtonArtist>
           <ButtonInfo>A</ButtonInfo>
            <ButtonFollow>B</ButtonFollow>
        </ButtonArtist>
    );
}
export default Button;