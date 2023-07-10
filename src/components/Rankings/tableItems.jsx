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
  @media only screen and (max-width: 376px) {
    display: flex;
  width: 315px;
  height: 50px;
  border-radius: 20px;
  padding: 12px 0px 12px 0px;
  gap: 10px;
  margin-bottom: 20px;
  background: #3b3b3b;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  }
  @media only screen and (min-width: 376px) and (max-width: 835px) {
    display: flex;
  width: 690px;
  height: 60px;
  border-radius: 20px;
  padding: 12px 0px 12px 0px;
  gap: 10px;
  margin-bottom: 20px;
  background: #3b3b3b;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  }
  .img-artist {
    width: 48px;
    height: 48px;
    @media only screen and (max-width: 895px) {
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
    width: 250px;
  }
  .right-table-Items-stats {
    display: flex;
    width: 50px;
    align-items: center;
   
  }
  .artist-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    /* width: 50px; */
  }

`;

const ChangeProps = styled.div`
 display: block;
 @media only screen and (max-width: 376px) {
      display: none;

    }
`;
const VolumeProps = styled.div`
display: block;
  /* @media screen and (max-width: 356px) {
      display: none;
    } */
`;
const SoldProps = styled.div`
display: block;
   @media screen and (max-width: 376px) {
      display: none;
    }
`;

// eslint-disable-next-line react/prop-types
const TableItems = ({ image, id, artist, volume, change, sold }) => {
  return (
    <StyledTableItemCard>
      <div className="table-items">
        <div className="left-table-Items-artist">
          <div className="ranking-artist">
            <p>{id} </p>
          </div>
          <div className="artist-card">
            <img className="img-artist" data-id="I1996:14823;1974:22003;1974:11637;1288:13009;1381:1139;1390:1114" src={image} alt="Avatar Placeholder"/>
            <p >{artist}</p>
          </div>
        </div>
        <div className="right-table-Items-stats">
          <ChangeProps>{change}</ChangeProps>
          <VolumeProps>{volume}</VolumeProps>
          <SoldProps>{sold}</SoldProps>
        </div>
      </div>
    </StyledTableItemCard>
  );
};
export default TableItems;
