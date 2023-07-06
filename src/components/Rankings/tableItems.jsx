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
    width: 400px;
  }
  .right-table-Items-stats {
    display: flex;
    width: 530px;
    align-items: center;
  }
  .artist-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

// eslint-disable-next-line react/prop-types
const TableItems = ({ image, id, artits, volume, change, sold }) => {
  return (
    <StyledTableItemCard>
      <div className="table-items">
        <div className="left-table-Items-artist">
          <div className="ranking-artist">
            <p>{id} </p>
          </div>
          <div className="artist-card">
            <img src={image} alt="" />
            <p>{artits}</p>
          </div>
        </div>
        <div className="right-table-Items-stats">
          <p>{change}</p>
          <p>{volume}</p>
          <p>{sold}</p>
        </div>
      </div>
    </StyledTableItemCard>
  );
};
export default TableItems;
