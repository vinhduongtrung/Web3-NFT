import { styled } from 'styled-components'
import TextHead from './Text/TextHead'
import TextTitle from './Text/TextTitle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  .cover {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 100%;
    height: 315px;
    margin:0 auto;
    margin-bottom: 20px;
    border-radius: 20px;
  }
  @media (min-width: 834px) {
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }
`
const Card = styled.div`
`
const HowItWork = () => {
  return (
    <div className='howItWork'>
      <Container>
        <div>
          <TextHead text="How It Works" />
          <TextTitle text="Find Out How To Get Started" />
        </div>
        <Wrapper>
          <Card>
            <div className="cover" style={{ backgroundImage: `url(https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-3@2x.svg)`}}></div>
            <div className="content">
              <TextHead text="Setup Your Wallet" />
              <TextTitle text="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." />
            </div>
          </Card>
          <Card>
            <div className="cover" style={{ backgroundImage: `url(https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-4@2x.svg)`}}></div>
            <div className="content">
              <TextHead text="Create Collection" />
              <TextTitle text="Upload your work and setup your collection. Add a description, social links and floor price." />
            </div>
          </Card>
          <Card>
            <div className="cover" style={{ backgroundImage: `url(https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-5@2x.svg)`}}></div>
            <div className="content">
              <TextHead text="Start Earning" />
              <TextTitle text="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />
            </div>
          </Card>
        </Wrapper>
      </Container>
    </div>
  )
}

export default HowItWork