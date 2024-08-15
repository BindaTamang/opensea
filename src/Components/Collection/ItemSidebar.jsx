import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  ApplyButton,
  Button,
  ButtonSectionContent,
  CheckboxDetail,
  CheckboxWrapper,
  CurrencySearch,
  CurrencySearchInput,
  GridSection,
  InputCheckbox,
  MaxMinButton,
  MinMaxConatiner,
  PriceButton,
  Section,
  SectionContent,
  SectionIcon,
  SectionTitle,
  SidebarConatainer,
  SwitchContent,
  SwitchDescription,
  SwitchInput,
  SwitchLabel,
  ToggleSwitch,
} from "../../Style/Items.styled";
import { FaHandHoldingHeart, FaSearch} from "react-icons/fa";


const ItemSidebar = () => {
  //const [status, setStatus] = useState("Listed");
  const [supportCreators, setSupportCreators] = useState(false);
  const [checked, setChecked] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [tick, setTick] = useState(false)
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isCreatorEarningsOpen, setIsCreatorEarningsOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isArtistOpen, setIsArtistOpen] = useState(false);
  const [isCategoryOpen, setisCategoryOpen] = useState(false)
  const [isCollectionOpen, setIsCollectionOpen] = useState(false)
  const [isSeasonOpen, setIsSeasonOpen] = useState(false)
  const [isSelectionOpen, setIsSelectionOpen] = useState(false)

  return (
    <SidebarConatainer>
      <Section>
        <SectionTitle>Status</SectionTitle>
        <SectionIcon>
          {isStatusOpen ? (
            <IoIosArrowUp onClick={() => setIsStatusOpen(!isStatusOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsStatusOpen(!isStatusOpen)} />
          )}
        </SectionIcon>
        {!isStatusOpen && (
          <SectionContent>
          <ButtonSectionContent>
            <Button>All</Button>
            <Button>Listed</Button>
            <Button>On auctions</Button>
            <Button>New</Button>
            <Button>Has Offer</Button>
          </ButtonSectionContent>
        </SectionContent>
        )}
        
      </Section>
      <Section>
        <SectionTitle>Creator earning</SectionTitle>
        <SectionIcon>
          {isCreatorEarningsOpen ? (
            <IoIosArrowUp onClick={() => setIsCreatorEarningsOpen(!isCreatorEarningsOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsCreatorEarningsOpen(!isCreatorEarningsOpen)} />
          )}
        </SectionIcon>
        {!isCreatorEarningsOpen && (
          <SectionContent>
          <ToggleSwitch>
            <SectionIcon>
              <FaHandHoldingHeart color="red" />
            </SectionIcon>
            <SwitchContent>
              <SwitchLabel>Support creators</SwitchLabel>
              <SwitchDescription>
                Show listings which pay the creator their requested earnings of
                7.5%.
              </SwitchDescription>
            </SwitchContent>
            <SwitchInput
              checked={supportCreators}
              onChange={() => setSupportCreators(!supportCreators)}
            />
          </ToggleSwitch>
        </SectionContent>
        )}
      </Section>
      <Section>
        <SectionTitle>Price</SectionTitle>
        <SectionIcon>
          {isPriceOpen ? (
            <IoIosArrowUp onClick={() => setIsPriceOpen(!isPriceOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsPriceOpen(!isPriceOpen)} />
          )}
        </SectionIcon>
       {!isPriceOpen && (
         <SectionContent>
         <PriceButton>
           <h3>ETH</h3>
           <SectionIcon style={{paddingTop: "17px"}}><IoIosArrowDown/></SectionIcon>
         </PriceButton>
         <MinMaxConatiner>
           <MaxMinButton>Min</MaxMinButton>
           <h3>to</h3>
           <MaxMinButton>Max</MaxMinButton>
         </MinMaxConatiner>
         <ApplyButton>Apply</ApplyButton>
       </SectionContent>
       )}
      </Section>
      <Section>
        <SectionTitle>Currency</SectionTitle>
        <SectionIcon>
         {isCurrencyOpen ? (
            <IoIosArrowUp onClick={() => setIsCurrencyOpen(!isCurrencyOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsCurrencyOpen(!isCurrencyOpen)} />
          )}

        </SectionIcon>
       {!isCurrencyOpen && (
         <SectionContent>
         <CurrencySearch>
           <FaSearch/>
           <CurrencySearchInput type="text" placeholder="Search"/>
         </CurrencySearch>
        <CheckboxWrapper>
         <InputCheckbox checked={checked} onChange={() => setChecked(!checked)}/>
         <h3>ETH</h3>
        </CheckboxWrapper>
        <CheckboxWrapper>
         <InputCheckbox checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
         <h3>WETH</h3>
        </CheckboxWrapper>
       </SectionContent>
       )}
      </Section>
      <GridSection>
        <SectionTitle>Traits</SectionTitle>
        <Section>
          <SectionTitle>Artist</SectionTitle>
          <SectionIcon>
            1 {isArtistOpen ? (
            <IoIosArrowUp onClick={() => setIsArtistOpen(!isArtistOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsArtistOpen(!isArtistOpen)} />
          )}
          </SectionIcon>
          {!isArtistOpen && (
            <SectionContent>
            <CurrencySearch>
              <FaSearch/>
              <CurrencySearchInput type="text" placeholder="Search"/>
            </CurrencySearch>
            <CheckboxWrapper>
          <InputCheckbox checked={tick} onChange={() => setTick(!tick)}/>
          <CheckboxDetail>
          <span>Acacia Johnson</span>
          <p>42</p>
          </CheckboxDetail>
         </CheckboxWrapper>
          </SectionContent>
          )}
        </Section>
        <Section>
          <SectionTitle>Category</SectionTitle>
          <SectionIcon>
            1 {isCategoryOpen ? (
            <IoIosArrowUp onClick={() => setisCategoryOpen(!isCategoryOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setisCategoryOpen(!isCategoryOpen)} />
          )}
          </SectionIcon>
         {!isCategoryOpen && (
           <SectionContent>
           <CurrencySearch>
             <FaSearch/>
             <CurrencySearchInput type="text" placeholder="Search"/>
           </CurrencySearch>
           <CheckboxWrapper>
         <InputCheckbox checked={tick} onChange={() => setTick(!tick)}/>
         <CheckboxDetail>
         <span>Photography</span>
         <p>42</p>
         </CheckboxDetail>
        </CheckboxWrapper>
         </SectionContent>
         )}
        </Section>
        <Section>
          <SectionTitle>Collection</SectionTitle>
          <SectionIcon>
            1 {isCollectionOpen ? (
            <IoIosArrowUp onClick={() => setIsCollectionOpen(!isCollectionOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsCollectionOpen(!isCollectionOpen)} />
          )}
          </SectionIcon>
         {!isCollectionOpen && (
           <SectionContent>
           <CurrencySearch>
             <FaSearch/>
             <CurrencySearchInput type="text" placeholder="Search"/>
           </CurrencySearch>
           <CheckboxWrapper>
         <InputCheckbox checked={tick} onChange={() => setTick(!tick)}/>
         <CheckboxDetail>
         <span>Polaris</span>
         <p>42</p>
         </CheckboxDetail>
        </CheckboxWrapper>
         </SectionContent>
         )}
        </Section>
        <Section>
          <SectionTitle>Season</SectionTitle>
          <SectionIcon>
            1 {isSeasonOpen ? (
            <IoIosArrowUp onClick={() => setIsSeasonOpen(!isSeasonOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsSeasonOpen(!isSeasonOpen)} />
          )}
          </SectionIcon>
         {!isSeasonOpen && (
           <SectionContent>
           <CurrencySearch>
             <FaSearch/>
             <CurrencySearchInput type="text" placeholder="Search"/>
           </CurrencySearch>
           <CheckboxWrapper>
         <InputCheckbox checked={tick} onChange={() => setTick(!tick)}/>
         <CheckboxDetail>
         <span>Season 3</span>
         <p>42</p>
         </CheckboxDetail>
        </CheckboxWrapper>
         </SectionContent>
         )}
        </Section>
        <Section>
          <SectionTitle>Selection</SectionTitle>
          <SectionIcon>
            1 {isSelectionOpen ? (
            <IoIosArrowUp onClick={() => setIsSelectionOpen(!isSelectionOpen)} />
          ) : (
            <IoIosArrowDown onClick={() => setIsSelectionOpen(!isSelectionOpen)} />
          )}
          </SectionIcon>
          {!isSelectionOpen && (
            <SectionContent>
            <CurrencySearch>
              <FaSearch/>
              <CurrencySearchInput type="text" placeholder="Search"/>
            </CurrencySearch>
            <CheckboxWrapper>
          <InputCheckbox checked={tick} onChange={() => setTick(!tick)}/>
          <CheckboxDetail>
          <span>Community Curated</span>
          <p>42</p>
          </CheckboxDetail>
         </CheckboxWrapper>
          </SectionContent>
          )}
        </Section>
      </GridSection>
    </SidebarConatainer>
  );
};

export default ItemSidebar;
