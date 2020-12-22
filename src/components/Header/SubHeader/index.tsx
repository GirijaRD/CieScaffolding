import React, { ReactElement } from "react";
import {
  CieSubHeader,
  InformativeMapTitle,
  SearchBoxInSubHeader,
} from "./style";

interface Props {}

export default function SubHeader({}: Props): ReactElement {
  return (
    <CieSubHeader style={{ overflow: "hidden" }}>
      <InformativeMapTitle>Informative Map</InformativeMapTitle>
      <SearchBoxInSubHeader />
    </CieSubHeader>
  );
}
