import styled from "styled-components";
import CountTimer from "./Countimer";
import RightArrow from "../../assets/right-arrow.svg";
import Global from "../../assets/global.svg";
import { useNavigate, useParams } from "react-router-dom";
const PageStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  .placeholder-img {
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
      min-width: 1523px;
      height: 540px;
      align-self: stretch;
      object-fit: cover;
    }
  }
  .layout-body {
    width: 100%;
    height: auto;
    position: relative;
  }
  .footer-nftpage {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const NFTArtistInfoLayout = styled.div`
  width: 60%;
  height: auto;
  gap: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 376px) {
    align-items: flex-start;
    width: 100%;
  }
  .global-icon {
    width: 20px;
    height: 20px;
  }
  .detail-nft-page {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: auto;
    height: auto;
  }
  .tags {
    width: fit-content;
    height: auto;
    border: 2px;
    border-radius: 20px;
    color: white;
    background-color: #3B3B3B;
    justify-content: space-around;
  }
  .text-header {
    font-family: monospace;
    color: #858584;
    line-height: 35px;
    font-weight: 700px;
    font-size: 22px;
  }
  .tag-names {
    display: flex;
    justify-content: space-between;
  }
`;
const RightButtonLayout = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
`;
const ButtonFollowNFTPage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 315px;
  height: 60px;
  padding: 0px 30px 0px 30px;
  border-radius: 20px;
  gap: 12px;
  color: white;
  border: 2px solid black;
  border-color: #a259ff;
  background-color: transparent;
  cursor: grab;
  .cursor:hover {
    color: red;
  }
  .right-arrow {
    width: 40px;
    height: 20px;
    color: white;
    align-items: center;
  }
`;
const NFTPage = () => {
    const navigate = useNavigate()
    const {username, id} = useParams();
  return (
    <PageStyled>
      <div className="placeholder">
        <img className="placeholder-img" src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-7@1x.png" alt="Placeholder" />
      </div>
      <div className="layout-body">
        <NFTArtistInfoLayout>
          <div>
            <h2>{username}</h2>
            <div className="text-header">Minted on Sep 30, 2022</div>
          </div>
          <div>
            <div className="text-header">Created By</div>
            <h5>{username}</h5>
          </div>
          <div>
            <div className="text-header">Description</div>
            <blockquote>
              The Orbitians <br></br>
              is a collection of 10,000 unique NFTs on the Ethereum blockchain.
              <br></br>There are all sorts of beings in the NFT Universe. The
              most advanced and friendly of the bunch are Orbitians. <br></br>{" "}
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth. <br />
              These Orbitians are a peaceful race, but they have been at war
              with a group of invaders for many generations. The invaders are
              called Upside-Downs, because of their inverted bodies that live on
              the ground, yet do not know any other way to be. Upside-Downs
              believe that they will be able to win this war if they could only
              get an eye into Orbitian territory, so they&apos;ve taken to make
              human beings their target. <br />
            </blockquote>
          </div>
          <div className="detail-nft-page">
            <p className="text-header">Details</p>
            <div>
              <img className="global-icon" src={Global} alt="" />
              View on Etherscan
            </div>
            <div>
              <img className="global-icon" src={Global} alt="" />
              View Original
            </div>
          </div>
          <p className="text-header">Tags</p>

          <div className="tag-names">
            {/* <button className="tags">ANIMATION</button>
            <button className="tags">ILLUSTRATION</button>
            <button className="tags">MOON</button>
            <button className="tags">DARK</button> */}
            <div className="tags">ANIMATION</div>
            <div className="tags">ILLUSTRATION</div>
            <div className="tags">MOON</div>
            <div className="tags">DARK</div>
          </div>
        </NFTArtistInfoLayout>
        <RightButtonLayout>
          <CountTimer></CountTimer>
        </RightButtonLayout>
      </div>
      <div className="footer-nftpage">
        <h1>More From This Artist</h1>
        <ButtonFollowNFTPage onClick={() => navigate(`/artist/${username}`)}>
          <img className="right-arrow" src={RightArrow} alt="" />
          Go to Artist Page
        </ButtonFollowNFTPage>
      </div>
    </PageStyled>
  );
};
export default NFTPage;
