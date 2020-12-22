import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

interface appDataProps{

}

function mapStateToProps({appData}:any){
    return{
        ...appData
    }
}

const AppData:React.FunctionComponent<appDataProps>=(props:appDataProps):ReactElement=>{
    return(
        <div>AppData</div>
    )
}

export default connect(mapStateToProps)(AppData);