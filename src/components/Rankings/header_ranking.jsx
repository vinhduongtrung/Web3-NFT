import styled from "styled-components";
const HeaderSublineStyled = styled.div`
  align-items: center;
    align-self: stretch;
    background-color: var(--background);
    display: flex;
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
    position: relative;
  }
  .check-out-top-ranking {
    font-family: Work Sans;
font-size: 22px;
font-weight: 400;
line-height: 35px;
letter-spacing: 0em;
text-align: left;
width: 100%;
color: white;
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
