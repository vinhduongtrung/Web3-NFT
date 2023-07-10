import styled from "styled-components";
import Header from "./header_ranking";
import TableHeader from "./tableItems";
import TaskBar from "./Tab_Bar";

const LayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: #2b2b2b;
  padding-bottom: 40px;
`;
const WrapperItemStyled = styled.div`
  width: 100%;
  height: auto;
  .table-header {
    padding: 0px 20px 0px 20px;
    align-items: center;
    border: 1px solid;
    margin-top: -1px;
    margin-bottom: 1px;
    border-color: #3b3b3b;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    /* @media screen and (min-width: 376px) {
    width: 100%;
   } */
  }

  .table-header-left-ranking {
    display: flex;
    height: auto;
    gap: 20px;
    width: 400px;
   /* @media screen and (max-width: 375px) {
    width: 215px;
   } */
    @media (min-width: 375px) and (max-width: 835px) {
      width: auto;
      height: 22px;
    }
  }
  .table-header-right-stats {
    display: flex;
    width: auto;
  }
`;
const Volume = styled.div`
  width: 160px;
  align-self: stretch;
  color: #858584;
    letter-spacing: 0.00px;
    line-height: 22.4px;
    margin-top: -1.00px;
    mix-blend-mode: normal;
    text-align: left;
    white-space: nowrap;
  @media screen and (max-width: 376px) {
    align-self: stretch;
    width: 100%;
    line-height: 13.2px;
  }
`;
const Sold = styled.div`
   width: 160px;
  align-self: stretch;
  color: #858584;
    letter-spacing: 0.00px;
    line-height: 22.4px;
    margin-top: -1.00px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
  /* gap:10px; */
  display: block;
  @media screen and (max-width: 835px) {
    display: none;
  }
`;
const Change = styled.div`
width: 160px;
width: 160px;
  align-self: stretch;
  color: #858584;

    letter-spacing: 0.00px;
    line-height: 22.4px;
    margin-top: -1.00px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;

  display: block;
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Artist = styled.div`
 display: flex;
flex-direction: column;

color:  #858584;
/* Caption - Space Mono */
font-size: 12px;
font-family: Space Mono;
font-style: normal;
font-weight: 400;
line-height: 110%;
@media only screen and (max-width: 376px) {
 
}
`;
const Tag = styled.div`
   display: flex;
flex-direction: column;

color:  #858584;
/* Caption - Space Mono */
font-size: 12px;
font-family: Space Mono;
font-style: normal;
font-weight: 400;
line-height: 110%;
@media only screen and (max-width: 376px) {
 
}
`
const LayoutRanking = () => {
  return (
    <LayoutStyled>
      <Header />
      <TaskBar />

      <WrapperItemStyled>
        <div className="table-header">
          <div className="table-header-left-ranking">
            <Tag>#</Tag>
            <Artist>Artist</Artist>
          </div>
          <div className="table-header-right-stats">
            <Change>Change</Change>
            <Sold>NFTs Sold</Sold>
            <Volume>Volume</Volume>
          </div>
        </div>

        <TableHeader
           id={"1"}
           image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
           artist={"Selena Gomez"}
           change={"13.22"}
           sold={"20 ETH"}
           volume={"20"}
        ></TableHeader>
        <TableHeader
        id={"2"}
        image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
        artist={"Selena Gomez"}
        change={"13.22"}
        sold={"20 ETH"}
        volume={"20"}
        ></TableHeader>
        <TableHeader
            id={"3"}
            image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
            artist={"Selena Gomez"}
            change={"13.22"}
            sold={"20 ETH"}
            volume={"20"}
        ></TableHeader>
        <TableHeader
        id={"4"}
        image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
        artist={"Selena Gomez"}
        change={"13.22"}
        sold={"20 ETH"}
        volume={"20"}
        ></TableHeader>
        <TableHeader
             id={"5"}
             image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
             artist={"Selena Gomez"}
             change={"13.22"}
             sold={"20 ETH"}
             volume={"20"}
        ></TableHeader>
        <TableHeader
            id={"6"}
            image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
            artist={"Selena Gomez"}
            change={"13.22"}
            sold={"20 ETH"}
            volume={"20"}
        ></TableHeader>
        <TableHeader
             id={"7"}
             image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
             artits={"Selena Gomez"}
             change={"13.22"}
             sold={"20 ETH"}
             volume={"20"}
        ></TableHeader>
        <TableHeader
          id={"8"}
          image={"https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"}
          artits={"Selena Gomez"}
          change={"13.22"}
          sold={"20 ETH"}
          volume={"20"}
        ></TableHeader>
      </WrapperItemStyled>
    </LayoutStyled>
  );
};
export default LayoutRanking;
