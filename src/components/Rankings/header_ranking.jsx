import styled from "styled-components";
const HeaderSublineStyled = styled.div`
  align-items: center;
    align-self: stretch;
    /* background-color: var(--background); */
    flex-direction: column;
    gap: 40px;
    height: auto;
    mix-blend-mode: normal;
    padding: 80px 0px;
  .header-subline {
    width: 1050px;
    height: auto;
    align-items: flex-start;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media only screen and (max-width: 376px) {
      font-size: 22px;
      margin: 0 auto;
      width: 100%;
      max-width: 375px;
      /* display: block; */
      align-items: center;
      gap: 20px;
    }
    
    @media only screen and (min-width: 376px) and (max-width: 835px) {
      font-size: 24px;
      margin: 0 auto;
      width: 100%;
      /* display: block; */
      align-items: center;
      max-width: 835px;
      gap: 20px;
    }
  }
  .headline{
  
  align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    display: flex;
    gap: 10px;
    height: 56px;
    position: relative;
  }
  .top-creator {
    background-color: transparent;
    flex: 1;
    letter-spacing: 0.00px;
    line-height: 56.1px;
    margin-top: -1.00px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
    color: white;
    //styleName: H2 - Work Sans;
font-family: Work Sans;
font-size: 51px;
font-weight: 600;
line-height: 56px;
letter-spacing: 0em;
text-align: left;

  }
  .subhead {
        align-items: flex-start;
    align-self: stretch;
    background-color: transparent;
    display: flex;
    gap: 10px;

    /* @media only screen and (max-width: 376px){
font-size: 22px;
width: 100%;
max-width: 315px;
margin: 0 auto;
display: block;
} */

  }
    .check-out-top-ranking {
     
    font-family: Work Sans;
font-size: 22px;
font-weight: 400;
line-height: 35px;
letter-spacing: 0em;
text-align: left;
color: white;
height: auto;

}

`;
const Header = () => {
  return (
    <HeaderSublineStyled>
      <div className="header-subline">
        <div className="headline">
        <h2 className="top-creator">
          Top Creators
        </h2>
        </div>
        
        <div className="subhead">
        <p className="check-out-top-ranking">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
        </div>
        
      </div>
    </HeaderSublineStyled>
  );
};
export default Header;
