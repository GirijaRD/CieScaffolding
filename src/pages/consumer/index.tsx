import React, { ReactElement } from 'react';
import {
container
} from './style';
import MainHeader from '../../components/Header/MainHeader'
const Consumer:React.FunctionComponent<{}>=(props:{}):ReactElement=>{
    return(
        <div>
        <MainHeader></MainHeader>
        </div>
    )
}

export default Consumer;