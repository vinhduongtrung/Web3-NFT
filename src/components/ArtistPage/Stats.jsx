import styled from "styled-components";

const StatsDetailStyled = styled.button`
  width: 100%;
font-family: Space Mono;
font-size: 22px;
font-weight: 700;
line-height: 35px;
letter-spacing: 0em;
text-align: left;
background: transparent;
color: #FFFFFF;
 border: none;
 .stats-artist {
    align-self: stretch;
    background-color: transparent;
    letter-spacing: 0.00px;
    line-height: 35.2px;
    margin-top: -1.00px;
    mix-blend-mode: normal;
    position: relative;
    text-align: left;
    white-space: nowrap;
 }
`;
// eslint-disable-next-line react/prop-types
const StatsArtist = ({ volume, nft, follower }) => {
  return (
    <StatsDetailStyled>
      <p className="stats-artist">{volume} {nft} {follower} </p>
     
    </StatsDetailStyled>
  );
};
export default StatsArtist;
