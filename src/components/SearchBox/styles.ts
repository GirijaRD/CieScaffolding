import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
    Autocomplete: {
      borderRadius: "26px",
      padding: "2px 5px",
      width: "100%",
      height: "fit-content",
      backgroundColor: "#F5F5F5"
    },
    InputProps: {},
    TextField: {
      fontSize: "5rem"
    },
    SearchIcon: {
      color: "#7C90DB"
    }
    ,
    endAdornment:{
        display:"none"
    }
  });

export default useStyles