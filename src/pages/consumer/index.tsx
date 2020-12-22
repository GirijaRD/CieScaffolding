import React, { ReactElement } from "react";
import { container } from "./style";
import MainHeader from "../../components/Header/MainHeader";
import SubHeader from "../../components/Header/SubHeader";
const Consumer: React.FunctionComponent<{}> = (props: {}): ReactElement => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};

export default Consumer;
