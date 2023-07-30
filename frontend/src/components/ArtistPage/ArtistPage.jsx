import styled from "styled-components";
import ButtonFollow from "../Button/ButtonFollow";
import StatsArtist from "./Stats";
import { ReactComponent as VideoGame } from "../../assets/videogame.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import useWallet from "../../store/wallet";
import { useParams } from "react-router-dom";
import useGetNFT from "../../store/useGetNFT";
import { useEffect } from "react";
import NFTCard from "../Card/NFTCard";

const ArtistPageStyled = styled.div`
  height: auto;
  flex-direction: column;
  display: flex;
  width: 100%;
  margin-bottom: 80px;
  .bio {
    width: 315px;
    height: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .line {
    height: 1px;
    min-width: 375px;
    margin: unset;
    background-color:#3B3B3B;
    box-sizing: border-box;
    @media screen and (min-width: 376px) {
      width: 1440px;
    }
  }
  .tab-bar {
    width: 100%;
    height: 70px;
    /* margin: 0 -16.63%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }
  .tabs {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: space-around;
  }
  .sub-tabs1 {
    display: flex;
    width: auto;
    height: auto;
  }
 
`;
const ImageBackground = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  .imgbackground {
      width: 375px;
      height: 250px;
      margin-left: -10.63%;
      object-fit: cover;
    @media screen and (min-width: 376px) {
      width: 834px;
      height: 280px;
      margin-left: -18.63%;
    }
    @media screen and (min-width: 835px) {
      min-width: 1440px;
      height: 320px;
      align-self: stretch;
    }
  }
`;
const ImageArtist = styled.img`
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  height: auto;
  justify-content: center;
  width: 120px;
    margin: 0 auto;
    margin-top: -70px;
  @media only screen and (min-width: 376px) {
 margin-left: 0px;
  }
`;
const ArtistInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  height: auto;
  gap: 30px;
  background: #2b2b2b;
  .bottom-links {
    width: 315px;
    height: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  svg {
        width: 20px;
        height: 20px;
        fill: #858584;
        color: white;
    }
    .icons {
        gap: 20px;
    display: flex;
    align-items: flex-start;
    }
`;
const WrapperArtistInfo = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: auto;
    padding: 30px 0px;
    @media screen and (min-width: 376px) {
      align-items: left;
    }
  .artist-name {
    //styleName: H4 - Work Sans;
    font-family: Work Sans;
    font-size: 28px;
    font-weight: 600;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
const StatsStyled = styled.div`
  width: 91.7px;
  /* height: 57px; */
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  .text-page-artist {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0px;
    line-height: 22.4px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  @media (min-width: 834px) {
  grid-template-columns: repeat(2, minmax(330px, 1fr));
  .child {
    height: 100px;
  }
  .best-product {
    width: 330px;
    height: 330px;
  }
}
  @media (min-width: 1024px) {
    grid-template-columns:repeat(3, minmax(330px, 1fr));
  }
`
const WrapperStats = styled.div`
  display: flex;
  width: 315px;
  gap: 20px;
`;
const SubTabStyled = styled.div`
   width: auto;
    height: auto;
    gap: 16px;
    display: flex;
`
const ArtistPage = () => {
  const {username} = useParams();
  const { hash } = useWallet();
  const { data, fetchData } = useGetNFT();

  useEffect(() => {
    const callApi = async () => {
      await fetchData(username, 1);
    }
    if (data.length === 0) {
      callApi();
    }
  }, [])

  return (
    <ArtistPageStyled>
      <ImageBackground>
        <img
          className="imgbackground"
          src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-13@2x.png"
          alt="Background"
        />
        <ImageArtist
          src={data.profilePicture}
          alt="user picture"
        ></ImageArtist>
      </ImageBackground>
      <WrapperArtistInfo>
        <ArtistInfo>
          <div>
            <h4 className="artist-name">{data.username}</h4>
          </div>
          <ButtonFollow hash={hash} />
          <WrapperStats>
            <StatsStyled>
              <StatsArtist volume={"250K+"}></StatsArtist>
              <p className="text-page-artist">Volume</p>
            </StatsStyled>
            <StatsStyled>
              <StatsArtist nft={"50K+"}></StatsArtist>
              <p className="text-page-artist">NFT Sold</p>
            </StatsStyled>
            <StatsStyled>
              <StatsArtist follower={"3000K+"}></StatsArtist>
              <p className="text-page-artist">Follower</p>
            </StatsStyled>
          </WrapperStats>

          <div className="bio">
            <p>Bio</p>
            <p>The internet&apos;s friendliest designer kid.</p>
          </div>
          <div className="bottom-links">
            <p>Links</p>
            <div className="icons">
              <VideoGame />
              <Youtube />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </ArtistInfo>
      </WrapperArtistInfo>
      <div className="tab-bar">
        <div className="line"></div>
        <div className="tabs">
          <SubTabStyled>
          <p>Created</p>
            <div className="sub-tabs1">302</div>
          </SubTabStyled>
          <SubTabStyled>
          <p>Owned</p>
            <div className="sub-tabs1">302</div>
          </SubTabStyled>
          <SubTabStyled>
          <p>Collection</p>
            <div className="sub-tabs1">302</div>
          </SubTabStyled>
          
         
        </div>
      </div>
      <Wrapper>
          {data.nft &&
            data.nft.map((item) =>
              <NFTCard
               key={item.id}
               item={item}
               username={data.username}
               profile = {data.profilePicture}/>
            )
          }
        </Wrapper>
    </ArtistPageStyled>
  );
};
export default ArtistPage;

