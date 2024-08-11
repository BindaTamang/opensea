import React from "react";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  Tableth,
  TableContainer,
  TableWrapper,
  CollectionCell,
  CollectionInfo,
  CollectionImage,
  CollectionName,
  CollectionIcon,
  VolumeCell,
  VolumeInfo,
  VolumePrice,
  VolumeValue,
} from "../../Style/Table.styled";

const Top = ({ tops }) => {
    const getVolumeValueColor = (value) => {
        if (value.includes('+')) return "#9CFF23";
        if(value.includes('<')) return "#FF4C4C";
        return '#000';
    }
  return (
    <TableWrapper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <Tableth>Rank</Tableth>
              <Tableth>Collection</Tableth>
              <Tableth>Floor Price</Tableth>
              <Tableth>Volume</Tableth>
            </TableRow>
          </TableHead>
            {tops.slice(0, 5).map((top, i) => (
              <TableRow key={i}>
                <TableData>{top.rank}</TableData>
                <TableData>
                  <CollectionCell>
                    {top.collections.map((collection, i) => (
                      <CollectionInfo key={i}>
                        <CollectionImage
                          src={collection.image}
                          alt={collection.name}
                        />
                        <CollectionName>{collection.name}</CollectionName>
                        <CollectionIcon
                          src={collection.icon}
                          alt={`${collection.name} icon`}
                        />
                      </CollectionInfo>
                    ))}
                  </CollectionCell>
                </TableData>
                <TableData>{top.floorPrice}</TableData>
                <VolumeCell>
                  {top.volumes.map((volume, i) => (
                      <VolumeInfo key={i}>
                        <VolumePrice>{volume.price}</VolumePrice>
                        <VolumeValue color={getVolumeValueColor(volume.value)}>{volume.value}</VolumeValue>
                      </VolumeInfo>
                    )
                  )}
                </VolumeCell>
              </TableRow>
            ))}
        </Table>
      </TableContainer>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <Tableth>Rank</Tableth>
              <Tableth>Collection</Tableth>
              <Tableth>Floor Price</Tableth>
              <Tableth>Volume</Tableth>
            </TableRow>
          </TableHead>
            {tops.slice(5, 10).map((top, i) => (
              <TableRow key={i}>
                <TableData>{top.rank}</TableData>
                <TableData>
                  <CollectionCell>
                    {top.collections.map((collection, i) => (
                      <CollectionInfo key={i}>
                        <CollectionImage
                          src={collection.image}
                          alt={collection.name}
                        />
                        <CollectionName>{collection.name}</CollectionName>
                        <CollectionIcon
                          src={collection.icon}
                          alt={`${collection.name} icon`}
                        />
                      </CollectionInfo>
                    ))}
                  </CollectionCell>
                </TableData>
                <TableData>{top.floorPrice}</TableData>
                <volumeCell>
                  {
                    top.volumes.map((volume, i) => (
                      <VolumeInfo key={i}>
                        <VolumePrice>{volume.price}</VolumePrice>
                        <VolumeValue color={getVolumeValueColor(volume.value)}>{volume.value}</VolumeValue>
                      </VolumeInfo>
                    ))}
                </volumeCell>
              </TableRow>
            ))}
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default Top;
