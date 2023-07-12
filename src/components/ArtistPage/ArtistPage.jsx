import styled from "styled-components";
const ArtistPageStyled = styled.div`
    
`
const ImageBackground = styled.img`
    position: relative;
`
const ImageArtist = styled.img`
    position: absolute;
    bottom: 0;
    
`
const ArtistPage = () => {
    return (
        <ArtistPageStyled>
             <ImageBackground src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-13@2x.png" alt="Ảnh" />
             <ImageArtist src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-32@2x.png" alt="Ảnh Artist" />
        </ArtistPageStyled>
    )
};
export default ArtistPage;