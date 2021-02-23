import React, { ReactElement } from "react";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import {Divider} from '@material-ui/core'
import Maps from "components/Maps";
const Consumer: React.FunctionComponent<{}> = (props: {}): ReactElement => {
  return (
    <div style={{width:"100vw"}}>
      <Header />
      <SubHeader/>
      <Divider style={{margin:"5px 1px 15px"}}/>
      <Maps></Maps>
    </div>
  );
};

export default Consumer;
