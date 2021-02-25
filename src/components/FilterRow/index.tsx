import React from "react";
import Popover from "@material-ui/core/Popover";
import { StyledFilterRow, FilterButton, Ul, Li, NavItemArea } from "./style";
import { navdata } from "./navdata";

const FilterRow = () => {
  const [navigationItems, setNavigationItems] = React.useState(navdata);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  //handleFilterClick
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //handleLiClick
  const handleListItemClick = (name: string) => {
    const updatedNavigationItems = [...navigationItems];
    updatedNavigationItems.map(
      (item: { name: string; isSelected: boolean }) => {
        item.isSelected = false;
        if (item.name === name) {
          item.isSelected = true;
        }
      }
    );
    setNavigationItems([...updatedNavigationItems]);
  };

  //handlePopoverClose
  const handleClose = () => {
    setAnchorEl(null);
  };

  //openpopover
  const open = Boolean(anchorEl);

  const PopOverArea: React.FC = () => (
    <Ul>
      {navigationItems.map((item, i) => {
        return (
          <Li
            className={item.isSelected ? "activeLink" : ""}
            onClick={() => handleListItemClick(item.name)}
            key={i}
          >
            {item.name}
          </Li>
        );
      })}
    </Ul>
  );

  return (
    <StyledFilterRow>
      <FilterButton onClick={handleClick}>Filter</FilterButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ marginTop: "1%" }}
      >
        <NavItemArea>
          <PopOverArea />
        </NavItemArea>
      </Popover>
    </StyledFilterRow>
  );
};

export default FilterRow;
