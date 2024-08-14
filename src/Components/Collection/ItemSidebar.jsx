import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Button, GridSection, Section, SectionContent, SectionIcon, SectionTitle, SidebarConatainer, SwitchInput, SwitchLabel, ToggleSwitch } from "../../Style/Items.styled";

const ItemSidebar = () => {
  //const [status, setStatus] = useState('Listed')
  const [supportCreators, setSupportCreators] = useState(false)
  return (
   <SidebarConatainer>
    <Section>
      <SectionTitle>Status</SectionTitle>
     <SectionIcon><IoIosArrowUp/></SectionIcon>
      {/* <SectionContent>
        <Button>All</Button>
        <Button>Listed</Button>
        <Button>On auctions</Button>
        <Button>New</Button>
        <Button>Has Offer</Button>
      </SectionContent> */}
    </Section>
    <Section>
      <SectionTitle>Creator earning</SectionTitle>
     <SectionIcon><IoIosArrowUp/></SectionIcon>
      <SectionContent>
       <ToggleSwitch>
        <SwitchLabel>Support creators</SwitchLabel>
        <SwitchInput checked={supportCreators} onChange={() => setSupportCreators(!supportCreators)}/>
       </ToggleSwitch>
       <small>Show listings which pay the creator their requested earnings of 7.5%.</small>
      </SectionContent>
    </Section>
    <Section>
      <SectionTitle>Price</SectionTitle>
     <SectionIcon><IoIosArrowUp/></SectionIcon>
      <SectionContent>

      </SectionContent>
    </Section>
    <Section>
      <SectionTitle>Currency</SectionTitle>
     <SectionIcon><IoIosArrowUp/></SectionIcon>
      <SectionContent>
        
      </SectionContent>
    </Section>
    <GridSection>
      <SectionTitle>Traits</SectionTitle>
     <Section>
      <SectionTitle>Artist</SectionTitle>
      <SectionIcon>1<IoIosArrowUp/></SectionIcon>
     </Section>
     <Section>
      <SectionTitle>Category</SectionTitle>
      <SectionIcon>1<IoIosArrowUp/></SectionIcon>
     </Section>
     <Section>
      <SectionTitle>Collection</SectionTitle>
      <SectionIcon>1<IoIosArrowUp/></SectionIcon>
     </Section>
     <Section>
      <SectionTitle>Season</SectionTitle>
      <SectionIcon>1<IoIosArrowUp/></SectionIcon>
     </Section>
     <Section>
      <SectionTitle>Section</SectionTitle>
      <SectionIcon>1<IoIosArrowUp/></SectionIcon>
     </Section>
    </GridSection>
   </SidebarConatainer>
  );
};

export default ItemSidebar;
