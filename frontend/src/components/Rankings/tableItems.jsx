import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyledTableItemCard = styled.div`
  display: flex;
  width: 100%;
  height: 84px;
  border-radius: 20px;
  padding: 12px 0px 12px 0px;
  gap: 10px;
  margin-bottom: 20px;
  background: #3b3b3b;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  @media only screen and (max-width: 376px) {
  width: 315px;
  height: 50px;
  justify-content: center;
  }
  @media only screen and (min-width: 376px) and (max-width: 835px) {
  width: auto;
  height: 60px;
  justify-content: center;
  }
  .img-artist {
    width: 48px;
    height: 48px;
    @media only screen and (max-width: 835px) {
      height: 24px;
      width: 24px;
    }
  }
  .table-items {
    align-items: center;
    width: 100%;
    height: auto;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    display: flex;
  }
  .left-table-Items-artist {
    gap:20px;
    display: flex;
    background-color: transparent;
    align-items: center;
    width: 100%;
  }
  .right-table-Items-stats {
    display: flex;
    width: auto;
    align-items: center;
   
  }
  .artist-card {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

`;

const ChangeProps = styled.div`
 display: block;
 width: 80px;
 color: green;
 @media only screen and (max-width: 376px) {
      display: none;
    }
    @media only screen and (min-width: 376px) and (max-width: 835px) {
     width: 100px;
    }
    @media screen and (min-width: 835px) {
      width: 180px;
    }
`;
const VolumeProps = styled.div`
display: block;
width: 80px;
  /* @media screen and (max-width: 356px) {
      display: none;
    } */
    @media only screen and (min-width: 376px) and (max-width: 835px) {
     width: 100px;
    }
    @media screen and (min-width: 835px) {
      width: 180px;
    }
`;
const ChangeProps2 = styled.div`
 display: block;
 width: 80px;
 color: red;
 @media only screen and (max-width: 376px) {
      display: none;
    }
    @media only screen and (min-width: 376px) and (max-width: 835px) {
     width: 100px;
    }
    @media screen and (min-width: 835px) {
      width: 180px;
    }
`;
const SoldProps = styled.div`
display: block;
width: 80px;
   @media screen and (max-width: 835px) {
      display: none;
    }
    @media screen and (min-width: 835px) {
      width: 180px;
    }
`;

const TableItems = ({ image, id, artist, volume, change, sold }) => {
  const navigate = useNavigate();
  return (
    <StyledTableItemCard>
      <div className="table-items">
        <div className="left-table-Items-artist">
          <div className="ranking-artist">
            <p>{id} </p>
          </div>
          <div className="artist-card" onClick = {()=>navigate(`/artist/${artist}`)}>
            <img className="img-artist" data-id="I1996:14823;1974:22003;1974:11637;1288:13009;1381:1139;1390:1114"
             src={image} alt="Avatar Placeholder"/>
            <p>{artist}</p>
          </div>
        </div>
        <div className="right-table-Items-stats">
         { change > 1 ? (<ChangeProps>+{change}%</ChangeProps>): (<ChangeProps2>-{change } %</ChangeProps2>)}
          <VolumeProps>{volume}</VolumeProps>
          <SoldProps>{sold}</SoldProps>
        </div>
      </div>
    </StyledTableItemCard>
  );
};
export default TableItems;
