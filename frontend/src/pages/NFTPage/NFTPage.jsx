import styled from "styled-components";
import PlaceHolder from "../../assets/ImageplaceHolder.svg";
import CountTimer from "./Countimer";
import RightArrow from "../../assets/right-arrow.svg";
import Global from "../../assets/global.svg";
const PageStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  .placeholder-img {
    width: 375px;
    height: 250px;
    margin-left: -10.63%;
    object-fit: cover;
    @media screen and (min-width: 376px) {
      width: 834px;
      height: 280px;
      /* margin-left: -18.63%; */
    }
    @media screen and (min-width: 835px) {
      min-width: 1423px;
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
    justify-content: space-around;
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
const ButtonFollowNFTPage = styled.div`
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
  .right-arrow {
    width: 40px;
    height: 20px;
    color: white;
    align-items: center;
  }
`;
const NFTPage = () => {
  return (
    <PageStyled>
      <div className="placeholder">
        <img className="placeholder-img" src={PlaceHolder} alt="Placeholder" />
      </div>
      <div className="layout-body">
        <NFTArtistInfoLayout>
          <div>
            <h2>The Orbitians</h2>
            <div>Minted on Sep 30, 2022</div>
          </div>
          <div>
            <div>Created By</div>
            <h5>Orbitian</h5>
          </div>
          <div>
            <div>Description</div>
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
          <div>
            <p>Details</p>
            <div>
              <img className="global-icon" src={Global} alt="" />
              View on Etherscan
            </div>
            <div>
              <img className="global-icon" src={Global} alt="" />
              View Original
            </div>
          </div>
          <div>
            <p>Tags</p>
            <div>ANIMATION</div>
            <div>ILLUSTRATION</div>
            <div>MOON</div>
            <div>DARK</div>
          </div>
        </NFTArtistInfoLayout>
        <RightButtonLayout>
          <CountTimer></CountTimer>
        </RightButtonLayout>
      </div>
      <div className="footer-nftpage">
        <h1>More From This Artist</h1>
        <ButtonFollowNFTPage>
          <img className="right-arrow" src={RightArrow} alt="" />
          Go to Artist Page
        </ButtonFollowNFTPage>
      </div>
    </PageStyled>
  );
};
export default NFTPage;
