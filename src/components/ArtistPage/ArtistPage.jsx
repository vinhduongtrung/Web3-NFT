import styled from "styled-components";
import Button from "../Button/Button";

const ArtistPageStyled = styled.div`
    position: relative;
    height: auto;
    flex-direction: column;
`
const ImageBackground = styled.div`
position: relative;
width: 375px;
height: auto;
.imgbackground {
    @media screen and (max-width: 376px) {
        width: 375px;
        height: 250px;
    }
    
}
`
const ImageArtist = styled.img`
    align-items: flex-start;
    background-color: transparent;
    display: flex;
    height: auto;
    justify-content: center;
    margin-top: -70px;
    position: relative;
    width: 375px;
    @media screen and (max-width: 376px) {
        width: 120px;
    height: 120px;
    bottom: 0px;
    max-width: 120px;
    left: 100px;
    }
`
const ArtistInfo = styled.div`
    width: 100%;
    height: auto;
    gap: 30px;
    background:#2B2B2B;
`
const WrapperArtistInfo = styled.div`
    
`
const ArtistPage = () => {
    return (
        <ArtistPageStyled>
            <ImageBackground>
                <img className="imgbackground" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-13@2x.png" alt="Background" />
                <ImageArtist
                src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-32@2x.png" alt="Ảnh Artist">
                 </ImageArtist>
            </ImageBackground>
            <ArtistInfo>
                <WrapperArtistInfo>
                    <p className="artist-name">AnimeKid</p>
                    <Button></Button>
                    <Button type="checkbox"></Button>
                </WrapperArtistInfo>
            </ArtistInfo>
        </ArtistPageStyled>
    )
};
export default ArtistPage;
