import { connect } from 'react-redux';
import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router';
interface HeaderProps{
    path:string
}

function mapStateToProps({router:{location}}:any){
    return {
        path:location.pathname
    }
}

const Header=({path}:HeaderProps):ReactElement=>{
    const history = useHistory();
    function navigate(location:string){
        if("/"+location !== path )
            history.push(location);
    }
    return(
        <div>
            <button className={path==='/consumer'?"active":""} onClick={navigate.bind(null,"consumer")}>Consumer insight</button>
            <button className={path==='/competitor'?"active":""} onClick={navigate.bind(null,"competitor")} >Competitor insight</button>
        </div>
    );
}

export default connect(mapStateToProps)(Header);