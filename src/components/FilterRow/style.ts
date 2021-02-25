import {
  FILTER_BORDER_BLUE,
  WHITE_COLOR,
  FILTER_TEXT_BLUE,
  SUB_FILTER_BLUE,
  BORDER_GREY,
} from "constants/color";
import styled from "styled-components";

export const StyledFilterRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0% 2%;
`;

export const FilterButton = styled.button`
  border-radius: 24px;
  width: 164px;
  height: 48px;
  border: 1px solid ${FILTER_BORDER_BLUE};
  font-family: "Roboto", sans-serif;
  background-color: ${WHITE_COLOR};
  font-weight: 500;
  color: ${FILTER_TEXT_BLUE};
  :focus {
    outline: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 2% 0%;
  border-bottom: 1px solid ${BORDER_GREY};
  /* margin: 3% 0%; */
  .activeLink {
    background: rgba(79, 98, 170, 0.4);
    color: ${SUB_FILTER_BLUE};
  }
`;

export const Li = styled.li`
  font-family: "Roboto";
  padding: 10px 30px;
  border-radius: 25px;
  cursor: pointer;
`;

export const NavItemArea = styled.div`
  height: 60vh;
  width: 80vw;
`;
