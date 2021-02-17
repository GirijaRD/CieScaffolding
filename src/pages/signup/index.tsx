import { Box } from "@material-ui/core";
import React, { ReactElement } from "react";
import { connect } from "react-redux";
import {
  SignUpPageContainer,
  SignUpPageDiv,
  SignUpMainGridContainer,
  AdaLogo,
  CardImageDiv,
  CardImageEmptyDiv,
  TitleImageDiv,
  TitleImage,
  CieTitleParentDiv,
  CieSubParagraphParentDiv,
  CieSubParagraph,
  CieTitle,
  SignUpFormGrid,
  SignUpFormSubGrid,
  SignUpForm,
  SignUpText,
  SignUpSubText,
  SignUpTextField,
  SignUpButton,
  ExistingUserParentDiv,
  ExistingUser,
} from "./styles";
import { Grid } from "@material-ui/core";
import Logo from "../../assets/images/image (6).png";
import TitleImage1 from "../../assets/images/image (4).png";
import EmailIcon from "../../assets/images/Email.png";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

interface LoginProps {}
interface DispatchProps {}
type Props = LoginProps & DispatchProps;

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white !important",
    },

    // "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "red !important",
    // },
    // "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "purple !important",
    // },
  },
});

function SignUp(props: Props): ReactElement {
  const classes = useStyles();
  return (
    <Box display="flex">
      <SignUpPageContainer container>
        <SignUpPageDiv>
          <SignUpMainGridContainer container item lg={12} md={12}>
            <Grid item lg={6} sm={6} md={6}>
              <AdaLogo src={Logo}></AdaLogo>
              <CardImageDiv>
                <CardImageEmptyDiv>
                  <TitleImageDiv>
                    <TitleImage src={TitleImage1} component="img" />
                  </TitleImageDiv>
                  <div>
                    <CieTitleParentDiv>
                      <CieTitle>Consumer Insights Explorer </CieTitle>
                    </CieTitleParentDiv>

                    <CieSubParagraphParentDiv>
                      <CieSubParagraph>
                        Better understand customer segments in terms of their
                        location, demographics, wealth, life, stage, online and
                        offline behavior
                      </CieSubParagraph>
                    </CieSubParagraphParentDiv>
                  </div>
                </CardImageEmptyDiv>
              </CardImageDiv>
            </Grid>
            {/* Sign up form grid*/}
            <SignUpFormGrid item lg={6} md={6} sm={6}>
              <SignUpFormSubGrid item xs="auto">
                <SignUpForm>
                  <SignUpText variant="h4">Sign Up</SignUpText>
                  <SignUpSubText>
                    Sign up to access our latest version
                  </SignUpSubText>
                  <SignUpTextField
                    placeholder="Full name"
                    size="small"
                    variant="outlined"
                    type="text"
                    fullWidth
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <AccountCircle />
                    //     </InputAdornment>
                    //   ),
                    // }}
                    className={classes.root}
                  ></SignUpTextField>
                  <SignUpTextField
                    placeholder="Email"
                    size="small"
                    variant="outlined"
                    type="email"
                    fullWidth
                    className={classes.root}
                  ></SignUpTextField>
                  <SignUpTextField
                    placeholder="Set Password"
                    size="small"
                    variant="outlined"
                    type="password"
                    fullWidth
                    className={classes.root}
                  ></SignUpTextField>
                  <SignUpTextField
                    placeholder="Password"
                    size="small"
                    variant="outlined"
                    fullWidth
                    className={classes.root}
                  ></SignUpTextField>

                  <div>
                    <SignUpButton variant="contained" color="primary" fullWidth>
                      Sign Up
                    </SignUpButton>
                  </div>
                  <ExistingUserParentDiv>
                    <ExistingUser to="/home">
                      Already have an account? Click here to Log In!
                    </ExistingUser>
                  </ExistingUserParentDiv>
                </SignUpForm>
              </SignUpFormSubGrid>
            </SignUpFormGrid>
          </SignUpMainGridContainer>
        </SignUpPageDiv>
      </SignUpPageContainer>
    </Box>
  );
}
export default connect()(SignUp);
