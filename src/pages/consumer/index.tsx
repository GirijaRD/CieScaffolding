import React, { ReactElement } from "react";
import MainHeader from "../../components/Header/MainHeader";
import SubHeader from "../../components/SubHeader";

import Maps from "components/Maps";
const Consumer: React.FunctionComponent<{}> = (props: {}): ReactElement => {
  return (
    <div>
      <MainHeader />
      <SubHeader></SubHeader>
      <Maps></Maps>
    </div>
  );
};

export default Consumer;
