import React, { ReactElement } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import { Divider } from "@material-ui/core";
import Maps from "components/Maps";
import FilterRow from "components/FilterRow";
const Consumer: React.FunctionComponent<{}> = (props: {}): ReactElement => {
  return (
    <div style={{ width: "100vw" }}>
      <Header />
      <SubHeader />
      <Divider style={{ margin: "5px 1px 15px" }} />
      <FilterRow />
      {/* <Maps></Maps> */}
    </div>
  );
};

export default Consumer;
