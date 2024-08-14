import React from "react";
import { Sidebar, SidebarIcon, SidebarItem } from "../../Style/Items.styled";
import { IoIosArrowDown } from "react-icons/io";

const ItemSidebar = () => {
  return (
    <Sidebar>
      <SidebarItem>
        <div>
          <h3>Status</h3>
          <SidebarIcon>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Creator earnings</h3>
          <SidebarIcon>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Price</h3>
          <SidebarIcon>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Currency</h3>
          <SidebarIcon>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Traits</h3>
        </div>
        <div>
          <h3>Artist</h3>
          <SidebarIcon>
          <p>1</p>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Category</h3>
          <SidebarIcon>
          <p>1</p>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Collection</h3>
          <SidebarIcon>
          <p>1</p>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Season</h3>
          <SidebarIcon>
          <p>1</p>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
        <div>
          <h3>Selection</h3>
          <SidebarIcon>
          <p>1</p>
            <IoIosArrowDown />
          </SidebarIcon>
        </div>
      </SidebarItem>
    </Sidebar>
  );
};

export default ItemSidebar;
