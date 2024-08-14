import React from 'react'
import { ItemContainer, ItemHeader, ItemSearch, ItemSearchInput, ItemShortcutKeyIcon, SearchbarContainer, Div, Sidebar, SidebarItem, Body, ItemBody } from '../../Style/Items.styled'
import { FaSearch } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { MdGridOn } from 'react-icons/md'
import { BsGrid1X2 } from 'react-icons/bs'
import { TfiMenuAlt } from "react-icons/tfi";
import { RiLayoutGridLine } from "react-icons/ri";
import ItemCard from './ItemCard'
import ItemSidebar from './ItemSidebar'



const Items = () => {
  return (
   <ItemContainer>
    <ItemHeader style={{background: "none", color: "#A3A3A3", gap: "1rem"}}>
            <h3>Item</h3>
            <h3>Offers</h3>
            <h3>Analytics</h3>
            <h3>Activity</h3>       
    </ItemHeader>
    <SearchbarContainer>
    <div>
      <img src='/images/menu.svg' alt='icon'/>
    
     <span>Live</span>
     <p>42 results</p>
     </div>
      <ItemSearch>
        <FaSearch />
        <ItemSearchInput type="text" placeholder="Search by name or trait" />
        {/* <ItemShortcutKeyIcon>/</ItemShortcutKeyIcon> */}
      </ItemSearch>
      <Div>
      <span>Price low to high</span>
      <IoIosArrowDown />
    </Div>
    <Div style={{width: "180px"}}>
    <TfiMenuAlt style={{ paddingLeft: '5px', marginRight: '10px' }} />
  <MdGridOn style={{ marginRight: '10px' }} />
  <RiLayoutGridLine style={{ marginRight: '10px' }} />
  <BsGrid1X2 />
    </Div>
    </SearchbarContainer>
    <ItemBody>
    {/* <Sidebar>
      <SidebarItem>
      <div>
        <h3>Status</h3>
        <IoIosArrowDown />
      </div>
      <div>
        <h3>Creator earnings</h3>
        <IoIosArrowDown />
      </div>
      <div>
        <h3>Price</h3>
        <IoIosArrowDown />
      </div>
      <div>
        <h3>Currency</h3>
        <IoIosArrowDown />
      </div>
      </SidebarItem>
      <SidebarItem>
        <div>
          <h3>Traits</h3>
        </div>
        <div>
          <h3>Artist</h3>
          <p>1</p><IoIosArrowDown />
        </div>
      </SidebarItem>
     
    </Sidebar> */}
    <ItemSidebar/>
    <Body>
    <ItemCard/>
    </Body>
    </ItemBody>
   
    
   </ItemContainer>
  )
}

export default Items