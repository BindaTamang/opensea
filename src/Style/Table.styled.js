import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const ItemCard = styled.div`
  width: 90%;
  background: #fff;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  background: #e6e4e3;
  padding: 5px;
  border-radius: 10px;

  h3 {
   // margin: 0 15px;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

export const LeftSideHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TimeFilter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background: #e6e4e3;
  padding: 10px;
  border-radius: 10px;

  p {
    margin: 0 10px;
    padding-right: 5px;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const ChainFilter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  background: #e6e4e3;
  padding: 10px;
  border-radius: 10px;

  h3 {
    margin: 0;
    font-size: 1rem;
    cursor: pointer;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f9f9f9;
`;

export const TableRow = styled.tr`
  border: none;
`;

export const Tableth = styled.th`
  text-align: left;
  padding: 20px;
  font-size: 1rem;
  font-family: "Gill Sans Extrabold", sans-serif;
  color: #555;
`;

export const TableData = styled.td`
  padding: 15px;
  font-family: "Gill Sans Extrabold", sans-serif;
  font-size: 0.75rem;
`;

export const CollectionCell = styled.div`
  display: flex;
  align-items: center;
`;

export const CollectionInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CollectionImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const CollectionName = styled.h3`
  font-size: 1rem;
  font-family: "Gill Sans Extrabold", sans-serif;
  margin: 0;
  margin-right: 5px;
`;

export const CollectionIcon = styled.img`
  width: 14px;
  height: 14px;
`;
export const TableBody = styled.tbody``;
export const TableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableContainer = styled.div`
  width: 48%;
`;
export const VolumeCell = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const VolumeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const VolumePrice = styled.p`
  font-size: 0.75rem;
  font-family: "Gill Sans Extrabold", sans-serif;
  margin: 0;
  padding-top: 25px;
  padding-left: 15px;
`;
export const VolumeValue = styled.p`
  font-size: 0.75rem;
  font-family: "Gill Sans Extrabold", sans-serif;
  margin: 0;
  padding-left: 24px;
  color: ${({ color }) => color || "#000"};
`;
export const ToggleWrapper = styled.div`
  position: relative;
  width: 170px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  h3 {
    z-index: 2;
    margin: 0 10px;
    width: 80px;
    text-align: center;
  }
`;

export const Slider = styled.div`
  position: absolute;
  top: 5px;
  left: ${(props) =>
    props.selected === "trending" ? "5px" : "calc(100% - 75px)"};
  width: ${(props) => (props.selected === "trending" ? "90px" : "70px")};
  height: 40px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1;
`;
export const TimeToggleWrapper = styled(ToggleWrapper)`
width: 150px;
 p {
    z-index: 4;
    margin: 0 10px;
    width: 10px;
    text-align: center;
  }
`;

export const TimeSlider = styled(Slider)`
  width: ${(props) => {
    if (props.selected === '1h') return '40px';
    if (props.selected === '6h') return '41px';
    if (props.selected === '24h') return '42.5px';
    return '43px'; // default size
  }};
  left: ${(props) => {
    if (props.selected === '1h') return '5px';
    if (props.selected === '6h') return 'calc(20% + 5px)';
    if (props.selected === '24h') return 'calc(45% + 5px)';
    return 'calc(70.5% + 5px)'; // default position
  }};
  transition: all 0.3s ease;
  z-index: 1;
`;
