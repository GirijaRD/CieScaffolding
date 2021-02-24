import { Grid } from "@material-ui/core";

import React from "react";
import EstimatedReach from "../EstimateReach";
import SearchBox from "../SearchBox";
import { ReactElement } from "react";
import useStyles from "./styles";

function SubHeader(): ReactElement {
  const styles = useStyles();
  return (
    <Grid
      container
      classes={{ root: styles.subHeaderContainer }}
      alignItems="center"
    >
      <Grid item classes={{ root: styles.Title }} lg={2} md={3} sm={4} xs={12}>
        Informative Map
      </Grid>

      <Grid container lg={4} md={3} sm={6} xs={12}>
        <Grid item lg={10} md={12} sm={11} xs={12}>
          <SearchBox />
        </Grid>
      </Grid>
      <Grid
        container
        lg={4}
        md={5}
        xs={12}
        classes={{ root: styles.AudienceStyles }}
        justify="flex-start"
      >
        <Grid item lg={1} style={{ flexShrink: 1 }} />
        <Grid item lg={10} md={8} sm={7} xs={6}>
          <EstimatedReach
            Audience={[
              {
                key: "audience",
                color: "#4F62AA",
                count: "23,073,310",
                title: "Audience Reach",
              },
              {
                key: "facebook",
                color: "#1877F2",
                count: "23,073,302",
                title: "Facebook",
              },
              {
                key: "youtube",
                color: "#FF0000",
                count: "23,073,342",
                title: "Youtube",
              },
              {
                key: "display",
                color: "#40A814",
                count: "23,703,316",
                title: "Display",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
export default SubHeader;
