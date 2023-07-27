import styled from "styled-components";
import Header from "./header_ranking";
import StyledTableItemCard from "./tableItems";
import TaskBar from "./Tab_Bar";
import { useEffect, useState } from "react";
import useTopCreator from "../../store/topCreator";

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
    width: auto;
    height: 46px;
    width: 100%;
    height: 46px;
    /* @media screen and (min-width: 376px) {
    width: auto;
   } */
  }

  .table-header-left-ranking {
    display: flex;
    height: auto;
    gap: 20px;
    width: 400px;
    align-items: center;
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
  width: 80px;
  align-self: stretch;
  color: #858584;
  letter-spacing: 0px;
  line-height: 13.2px;
  margin-top: -1px;
  mix-blend-mode: normal;
  text-align: left;
  white-space: nowrap;

  @media screen and (min-width: 376px) and (max-width: 835px) {
    line-height: 22.4px;
    width: 100px;
  }
  @media screen and (min-width: 835px) {
    width: 180px;
  }
`;
const Sold = styled.div`
  width: 80px;
  align-self: stretch;
  color: #858584;
  letter-spacing: 0px;
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
  /* gap:10px; */
  display: block;
  @media screen and (max-width: 835px) {
    display: none;
  }
  @media screen and (min-width: 375px) and (max-width: 835px) {
    width: 100px;
  }
  @media screen and (min-width: 835px) {
    width: 180px;
  }
`;
const Change = styled.div`
  width: 80px;
  align-self: stretch;
  color: #858584;
  letter-spacing: 0px;
  line-height: 22.4px;
  margin-top: -1px;
  mix-blend-mode: normal;
  position: relative;
  text-align: left;
  white-space: nowrap;
  display: block;
  @media screen and (max-width: 376px) {
    display: none;
  }
  @media screen and (min-width: 375px) and (max-width: 835px) {
    width: 100px;
  }
  @media screen and (min-width: 835px) {
    width: 180px;
  }
`;
const Artist = styled.div`
  display: flex;
  flex-direction: column;

  color: #858584;
  /* Caption - Space Mono */
  font-size: 12px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
`;
const Tag = styled.div`
  display: flex;
  flex-direction: column;

  color: #858584;
  /* Caption - Space Mono */
  font-size: 12px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
`;
const LayoutRanking = () => {
  const { data, fetchData } = useTopCreator();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  useEffect(() => {
    fetchData(page, limit);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page])
  
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
<<<<<<< HEAD

        <StyledTableItemCard
          id={"1"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artist={"Selena Gomez"}
          change={"1.51"}
          sold={"200"}
          volume={"10 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"2"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artist={"Jaydon Ekstrom Bothman"}
          change={"1.51"}
          sold={"190"}
          volume={"19 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"3"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artist={"Ruben Carder"}
          change={"1.1"}
          sold={"520"}
          volume={"15 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"4"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artist={"Alfredo Septimus"}
          change={"1.51"}
          sold={"102"}
          volume={"20 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"5"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artist={"Davis Franci"}
          change={"1.51"}
          sold={"821"}
          volume={"10 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"6"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artist={"Livia Rosser"}
          change={"1.51"}
          sold={"184"}
          volume={"20 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"7"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artits={"Kianna Donin"}
          change={"1.51"}
          sold={"391"}
          volume={"20 ETH"}
        ></StyledTableItemCard>
        <StyledTableItemCard
          id={"8"}
          image={
            "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-20@2x.png"
          }
          artits={"Phillip Lipshutz"}
          change={"4"} 
          sold={"200"}
          volume={"20 ETH"}
        ></StyledTableItemCard>
=======
        {
          data.map((item) =>
            <StyledTableItemCard
              key={item.id}
              id={item.id}
              image={item.profile}
              artist={item.username}
              change={"13.22"}
              sold={item.totalSales}
              volume={"20"}
            >
            </StyledTableItemCard>
          )
        }
>>>>>>> 51fda7f098de60fd21ab5573cfdc986437096d68
      </WrapperItemStyled>
    </LayoutStyled>
  );
};
export default LayoutRanking;
