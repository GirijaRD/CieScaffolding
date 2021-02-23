import React, { ReactElement } from "react";
import Header from "../../components/Header";
//import SubHeader from "../../components/Header/SubHeader";

import Maps from "components/Maps";
const Consumer: React.FunctionComponent<{}> = (props: {}): ReactElement => {
  return (
    <div style={{ minWidth: "fit-content" }}>
      <Header />

      <Maps></Maps>
    </div>
  );
};

export default Consumer;
