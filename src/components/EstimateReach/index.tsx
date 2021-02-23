import { Paper, List, ListItem, Grid, Divider, Collapse, Tooltip, } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import useStyles from './styles'
import {ReactComponent as PersonIcon} from '../../assets/images/user.svg'
import {ReactComponent as YoutubeIcon} from '../../assets/images/youtube.svg'
import {ReactComponent as DisplayIcon} from '../../assets/images/display.svg'
import {ReactComponent as FacebookIcon} from '../../assets/images/facebook.svg'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import { connect } from "react-redux";
const IconMap = {
    "audience": PersonIcon,
    "facebook": FacebookIcon,
    "youtube": YoutubeIcon,
    "display": DisplayIcon
  };
interface platform{
    key:string,
    count:number|string,
    title:string,
    color:string,
}
interface propType{
    Audience:Array<platform>,
    
}
interface ItemProps{
    Prefix?:string,
    Title:string,
    Number:string|number,
    style:object,
    Icon:React.FC<any>,
    key:string
}

function Item(props:ItemProps):ReactElement {
    const styles = useStyles();
    return (
      <ListItem classes={{ root: styles.ListItem }}>
        <Grid container  spacing={1} justify="space-between" style={{flexWrap:"nowrap"}}>
            <Grid container spacing={1} style={{flexWrap:"nowrap"}}>
          {props.Prefix && (
            <Grid item classes={{ root: styles.Prefix }}>
              {props.Prefix}
            </Grid>
          )}
          <Grid
            item
            classes={{ root: props.Prefix ? styles.PrefixSecondary : styles.secondary }}
          >

            {props.Title}
          </Grid>
          </Grid>
          <Grid container style={props.style} justify="flex-end" >
            <Grid item >
            <props.Icon className={styles.Icon} />
            </Grid>
            <Grid item >
            {props.Number}
            </Grid>
            {<Grid item >
                {
                props.Prefix ? <Tooltip title="Estimated Reach Count">
                <InfoOutlined className={styles.Icon}/>
                </Tooltip>:<div style={{"height":"1rem",width:"1.4em"}}/>
                }
                </Grid>}
          </Grid>
        </Grid>
      </ListItem>
    );
  }
  function buildList(data:Array<ItemProps>) {
    const list = data.map((item:ItemProps, index:number) => (
      <Item {...(!index && { Prefix: "Estimated" })} {...item} key={item.key}/>
    ));
    list.splice(1, 0, <Divider />);
    return list;
  }
function EstimatedReach(props:propType):ReactElement {
    const styles = useStyles();
    const [transition, toggle] = useState(false);
    const data=props.Audience;
    return (
      <Paper
        classes={{ root: transition ? styles.paper:styles.paperCollapsed}}
        
        onClick={() => toggle(!transition)}
      >
        <Collapse
          classes={{ container: styles.collapseContainer }}
          in={transition}
          collapsedHeight={"2rem"}
          timeout={250}
        >
          <List classes={{ root: styles.List }}>
            {buildList(
              data.map((item:platform) => ({
                Title: item.title,
                Number: item.count,
                style: { color: item.color, fontWeight: 900 },
                Icon: IconMap[item.key as keyof typeof IconMap],
                key:item.key
              })))
              }
          </List>
        </Collapse>
      </Paper>
    );
  }

function mapStateToProps({AudienceReach}:any,ownProps?:propType):propType{
    return(
        AudienceReach||ownProps
    );
}

export default connect(mapStateToProps)(EstimatedReach)