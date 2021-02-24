import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
  autocomplete:{
    borderRadius:"1.15rem",
    height:"2.5rem",
    background: "#F5F5F5 0% 0% no-repeat padding-box",
},
Title:{
  fontSize: "26px",
  fontWeight: 900,
  fontFamily: "roboto",
  textAlign: "center",
},
subHeaderContainer:{
  flexWrap:"wrap",
  justifyContent:"space-between",
  alignItems:"center",
  margin:"2px 4px 10px 4px"
},
AudienceStyles:{
  flexWrap:"nowrap",
  height:"2.5rem",
  zIndex:10,
  cursor:"pointer",
  marginTop:"5px",
  "@media(max-width:600px)":{
    marginLeft:"10px"
  },
  "@media(min-width:960px)":{
    marginRight:"26px"
  }
}
});

export default useStyles;