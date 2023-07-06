import styled from "styled-components";
import Header from "./header_ranking";
import TableHeader from "./tableItems";
import TaskBar from "./Tab_Bar";

import artistProfile from "../../assets/ArtistAvatar.svg"

const LayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #2B2B2B;
  padding-bottom: 40px;
  `;
  const WrapperItemStyled = styled.div`
width:  100%;

  .list-products {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 46px;

  }
  .table-header {
    align-items: center;
    border: 1px solid;
    margin-bottom: 1px;
    border-color: #3b3b3b;
    border-radius: 20px;
    display: flex;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  }

 
  .text-content {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 59px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* Dark */

    color: #000000;
  }


  .table-header-left-ranking{
      display: flex;
  }
  .table-header-right-stats {
display: flex;
  }
  `;
const LayoutRanking = () => {
    return (
      <LayoutStyled>
        <Header/>
        <TaskBar/>
       
        <WrapperItemStyled>
            <div className="table-header">
              <div className="table-header-left-ranking">
              <div>#</div>
              <div>Artist</div>
              </div>
              <div className="table-header-right-stats">
              <div>Change</div>
              <div>NFTs Sold</div>
              <div>Volume</div>
              </div>
            </div>

        
        <TableHeader
         id={"1"}
            image={artistProfile}
            title={"Dress"}
            change={"13.22"}
          ></TableHeader>
          <TableHeader
            image={artistProfile}
            id={"1"}
            title={"Dress"}
            change={"13.22"}
          ></TableHeader>
          <TableHeader
          id={"1"}
            image={artistProfile}

            title={"Dress"}
            volume={"13.22"}
            change={"23"}

          ></TableHeader>
          <TableHeader
            div id={"1"}
            image={artistProfile}
            artits={"BieberBieberBieberBieber"}
            volume={"Dress"}
            change={"13.22"}
            sold={"200"}
          ></TableHeader>
          <TableHeader
          id={"1"}
            image={artistProfile}

            title={"Dress"}
            change={"13.22"}
          ></TableHeader>
          <TableHeader
          id={"1"}
            image={artistProfile}

            title={"Dress"}
            change={"13.22"}
          ></TableHeader>
          <TableHeader
          id={"1"}
            image={artistProfile}

            title={"Dress"}
            change={"13.22"}
          ></TableHeader>
          <TableHeader
          id={"1"}
            image={artistProfile}

            title={"Dress"}
            change={"13.22"}
          ></TableHeader>
      
       </WrapperItemStyled>
        </LayoutStyled>
    );
    };
    export default LayoutRanking;