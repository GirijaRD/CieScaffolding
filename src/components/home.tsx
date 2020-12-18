import React from 'react';
import {Context} from '../components/Logger';
import {connect } from 'react-redux'
class Home extends React.Component{
    constructor(props:any){
        super(props);
        console.log("Home",props);
        console.log(this);  
    }
    onClickHandler=(e:any)=>{
        this.context.log(e);
        const props =this.props as unknown as {dispatch:any};
        
        props.dispatch(e);
    }
    render(){
        const {log} =this.context;
        return(
            <button onClick={log}>
                click to log
                </button>
        );
    }
}
Home.contextType=Context;
export default connect((state:any,ownProps:any)=>{return ownProps;})(Home);