import React from 'react'
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
  } from "../../Style/Table.styled";

const Trending = ({trendings}) => {
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
                {trendings.slice(0, 5).map((trending, i) => (
                  <TableRow key={i}>
                    <TableData>{trending.rank}</TableData>
                    <TableData>
                      <CollectionCell>
                        {trending.collections.map((collection, i) => (
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
                    <TableData>{trending.floorPrice}</TableData>
                    <TableData>{trending.volume}</TableData>
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
                {trendings.slice(5, 10).map((trending, i) => (
                  <TableRow key={i}>
                    <TableData>{trending.rank}</TableData>
                    <TableData>
                      <CollectionCell>
                        {trending.collections.map((collection, i) => (
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
                    <TableData>{trending.floorPrice}</TableData>
                    <TableData>{trending.volume}</TableData>
                  </TableRow>
                ))}
            </Table>
          </TableContainer>
        </TableWrapper>
  )
}

export default Trending