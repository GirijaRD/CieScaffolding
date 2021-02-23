import { colors } from "components/Common/colors";
import React from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "react-router-dom";
import styled from "styled-components";

interface Props extends LinkProps {
  title: string;
}

const StyledLink = styled(Link)`
  color: ${colors.cieauthlinkcolor};
  font-family: "Roboto";
  text-decoration: none;
`;

const CieAuthLink: React.FC<Props> = ({ title, ...props }) => {
  return <StyledLink {...props}>{title}</StyledLink>;
};

export default CieAuthLink;
