import styled from "styled-components";
const TabBarStyled = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
.tab-bar {
    /* display: flex;
    justify-content: space-around;
    width: 1280px;
    height: 60px; */
    justify-content: space-between;
    width: 100%;
height: 60px;
padding: 0px 10px 0px 10px;
gap: 10px;
display: flex;
background: #2B2B2B;
left: 20px;
}
`;

const TabBar = () => {
    return(
        <TabBarStyled>
            <div className="tab-bar">
                <p>Today</p>
                <p>This week</p>
                <p>This month</p>
                <p>All time</p>
            </div>
        </TabBarStyled>
    );
}
export default TabBar;