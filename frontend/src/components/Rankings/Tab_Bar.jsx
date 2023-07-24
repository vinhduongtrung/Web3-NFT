import styled from "styled-components";
const TabBarStyled = styled.div`
    width: 100%;
    height: auto;
.tab-bar-before {
  //styleName: H5 - Work Sans;
  color: #858584;
font-family: Work Sans;
font-size: 22px;
font-weight: 600;
line-height: 31px;
letter-spacing: 0em;
text-align: center;
    justify-content: space-between;
  align-items: center;
    display: flex;
  /* width: 100%; */
  /* Example width for desktop */
  height: auto;
padding: 0px 10px 0px 10px;
gap: 10px;
margin: 20px;
/* background: #2B2B2B; */
/* left: 20px; */
}
/* @media only screen and (max-width: 835px) {
    width: 100%;
    margin: 0 auto;
    max-width: 874px;
    
} */
.tab-bar-mobile {
    display: flex;
    height: auto;
}
.tab-bar-mobile-after {
    display: flex; /* Hide video by default */
    flex-direction: row;
width: 100%;
  height: auto;
  /* max-width: 375px; */
  padding: 0px 20px 0px 20px;
  justify-content: space-between;
  margin-bottom: 20px;
  @media only screen and (min-width: 376px) {
    display: none;
  }
  @media only screen and (min-width: 835px) {
    display: none;
  }
}
@media (max-width: 376px) { /* Media query for mobile devices */
  .tab-bar-before {
    display: none; /* Hide desktop image on mobile */
    flex-direction: row;
  }

}
`;
  // /* .tab-bar-mobile-after {
  //   display: flex; /* Show video on mobile */
  //   max-width: 375px;
  //   width:100%; /* Example width for mobile */
  //   height: auto;
  // justify-content: space-between;
  // color: #858584;
  //   margin-bottom: 20px;
  // } */

const TabBar = () => {
    return(
        <TabBarStyled>
            <div className="tab-bar-before">
                <p>Today</p>
                <p>This Week</p>
                <p>This Month</p>
                <p>All time</p>
            </div>
            <div className="tab-bar-mobile">
                <div className="tab-bar-mobile-after">
                <p>1d</p>
                <p>7d</p>
                <p>30d</p>
                <p>All Time</p>
                </div>
                
            </div>
        </TabBarStyled>
    );
}
export default TabBar;