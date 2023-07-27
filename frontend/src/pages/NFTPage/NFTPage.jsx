import styled from "styled-components";
import PlaceHolder from "../../assets/ImageplaceHolder.svg"
const PageStyled = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
.placeholder-img{
    width: 1440px;
    height: auto;
    margin: 0 -13.54%;
}
`
const NFTArtistInfoLayout =styled.div`
    width: 60%;
    height: auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
`
const RightButtonLayout = styled.div`
    width: 40%;
    height: auto;
`
const NFTPage = () => {
    return (
        <PageStyled>
            <div>
                <img className="placeholder-img" src={PlaceHolder} alt="Placeholder" />
            </div>
            <NFTArtistInfoLayout>
                <div>
                    <h2>
                    The Orbitians
                    </h2>
                    <div>
                    Minted on Sep 30, 2022
                    </div>
                </div>
                <div>
                    <div>
                    Created By
                    </div>
                    <h5>
                    Orbitian
                    </h5>
                </div>
                <div>
                    <div>
                    Description
                    </div>
                    <blockquote>
                    The Orbitians <br></br>
is a collection of 10,000 unique NFTs on the Ethereum blockchain.<br></br>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br></br> They live in a metal space machines, high up in the sky and only have one foot on Earth. <br/>
These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they&apos;ve taken to make human beings their target. <br/>
                    </blockquote>
                </div>
                <div>
                    <p>
                    Details
                    </p>
                    <div>
                    View on Etherscan
                    </div>
                    <div>
                    View Original
                    </div>
                </div>
                <div>
                    <p>
                    Tags
                    </p>
                    <div>

                    </div>
                </div>
            </NFTArtistInfoLayout>
            <RightButtonLayout></RightButtonLayout>
        </PageStyled>
    )
};
export default NFTPage;