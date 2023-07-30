import styled from "styled-components";
import Header from "./header_ranking";
import StyledTableItemCard from "./tableItems";
import TaskBar from "./Tab_Bar";
import { useEffect, useRef, useState } from "react";

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
  }

  .table-header-left-ranking {
    display: flex;
    height: auto;
    gap: 20px;
    width: 400px;
    align-items: center;
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
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [userList, setUserList] = useState([]);
  const [wasLastList, setWasLastList] = useState(false);
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://danielaws.tk/group8/api/v1/user/getTopUser/${currPage}/${limit}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      console.log(data);
      if (!data.length) {
        setWasLastList(true);
        return;
      }
      setPrevPage(currPage);
      setUserList([...userList, ...data]);
    }

    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, [currPage, wasLastList, prevPage, userList])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
    ) {
      setCurrPage(currPage + 1);
    }
  };
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
          <div ref={listInnerRef}>
            {
            userList.map((item) =>
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
          </div>
        </WrapperItemStyled>
      </LayoutStyled>
  );
};
export default LayoutRanking;
