import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
    root: {
      height: "400px",
      width: "400px",
      backgroundColor: "black",
      flexGrow: 1,
      font:"Roboto"
    },
    itemRoot: {
      height: "80px",
      width: "50px",
      backgroundColor: "pink"
    },
    collapseContainer: {
      borderRadius: "26px",
      height: "fit-content",
      transition: ".1s ease-in",
      padding: "0px",
      width: "max-content",
    },
    List: {
      margin: "0px",
      padding: "0px 8px",
      width: "max-content",
      boxSizing: "border-box"
    },
    ListItem: {
      width: "auto"
    },
    paper: {
      borderRadius: "26px",
      width: "max-content",
    },
    paperCollapsed:{
        borderRadius: "26px",
        width: "max-content",
        height:"2.1rem",
        backgroundColor:"#C8D4FF" ,
        overflow:"hidden",
        transitionDuration:"1s"
    },
    Icon: {
        height: "1rem",
        verticalAlign: "text-bottom",
    },
    Prefix: {
      color: "#4F62AA",
      whiteSpace:"nowrap",
      fontFamily:"Roboto",
      fontWeight:"bold"
    },
    PrefixSecondary:{
        color: "#4F62AA",
      fontWeight: "normal",
      whiteSpace:"nowrap",
      lineHeight:"2em",
      fontSize:"0.8em",
      fontFamily:"Roboto"
    },
    secondary: {
      color: "black",
      fontFamily:"Roboto",
      fontWeight:"bold",
      width:"fit-content",
      whiteSpace:"nowrap"
    }
  });
export default useStyles;  