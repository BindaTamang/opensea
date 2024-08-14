import React, { useState } from "react";
import {
  Details,
  HideOrShowButton,
  Iconpg,
  ImageContainer,
  ImageSection,
  Paragraph,
  ParagraphContainer,
  PgDetails,
  Stats,
} from "../../Style/Collection.styled";
import { SlGlobe } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import Items from "./Items";

const Collection = () => {
  const [isShowMore, setShowMore] = useState(false);
  const text = ` Polaris is a meditation on otherworldly encounters in the Circumpolar Northern landscape. 
    At once an inward and outward exploration, the images reflect my childhood perception of the 
    natural world: a realm of wonder, mystery, and sometimes magic.

    To me, nature is the source of spiritual well-being, and making photographs is a way to connect with that source. 
    These images reconstruct a childhood mythology in the boreal Alaskan landscape, where I was raised. 
    The series explores the affinities between Iceland and the Alaskan Arctic; distant regions connected 
    by climate, remoteness, and seismic activity. By traversing the landscape on foot in a receptive state of mind, 
    numinous experiences reveal themselves. Ice, weather, animals, and celestial phenomena take on significance, 
    and our human scale in geologic time becomes clearer.

    These images convey transcendent encounters, each imparting a sense of wonder in the presence of the unknown. 
    Polaris, the North Star, functions as a metaphor for the presence I feel emanating from these places, 
    the only constant in environments that are otherwise in constant flux.`;

    const truncatedText = text.slice(0, 100);
  return (
    <>
      <ImageSection>  
        <ImageContainer>
          <img src="/images/collection-img.png" alt="" />
        </ImageContainer>
        <Details>
          <div>
            <h2>Polaris by Acacia Johnson</h2>
            <img src="/images/check.png" alt="logo" />
          </div>
          <div>
            <p>Quantum-Art-Curator</p>
            <img src="/images/check.png" alt="logo" />
          </div>
        </Details>
        <Stats>
          <div>
            <h3>5 ETH</h3>
            <p>Total volume</p>
          </div>
          <div>
            <h3>0.2 ETH</h3>
            <p>Floor price</p>
          </div>
          <div>
            <h3>0.0154 WETH</h3>
            <p>Best offer</p>
          </div>
          <div>
            <h3>5%</h3>
            <p>Listed</p>
          </div>
          <div>
            <h3>37 (88%)</h3>
            <p>Owners (Unique)</p>
          </div>
        </Stats>
      </ImageSection>
      <ParagraphContainer>
        <Paragraph>
          <p>
          {isShowMore ? text : `${truncatedText}...`}
            <HideOrShowButton onClick={() => setShowMore(!isShowMore)}>
              {isShowMore ? "Show less" : "Show more"}
            </HideOrShowButton>
          </p>
          <PgDetails>
              <span>Items</span>42
              <span>Created</span>Jul 2022
              <span>Creator earnings</span>7.5%
              <span>Chain Ethereum</span>
            
          </PgDetails>
        </Paragraph>
        <Iconpg>
          <SlGlobe />
          <BsThreeDots />
        </Iconpg>
      </ParagraphContainer>
      <Items/>
    </>
  );
};

export default Collection;
