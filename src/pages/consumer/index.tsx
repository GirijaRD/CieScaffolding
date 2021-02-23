import React, { ReactElement } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import {Divider} from '@material-ui/core'
import Maps from "components/Maps";
const Consumer: React.FunctionComponent<{}> = (props: {}): ReactElement => {
  return (
    <div style={{ minWidth: "fit-content" }}>
      <Header />
      <SubHeader/>
      <Divider/>
      <Maps></Maps>
    </div>
  );
};

export default Consumer;
