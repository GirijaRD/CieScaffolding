import React from 'react';
import axios from 'axios';
const env=process.env.REACT_ENV;
const Context= React.createContext({default:null,log:console.log});
export { Context};
class Logger extends React.Component<any,{}>{
    constructor(props:any){
        super(props)
        this.state={
            data:{}
        }
    }
    componentDidMount(){
       
    }
    componentDidUpdate(){
       
    }
    static writeToServer=async(config: any)=>{
        try{
            const response = await axios(config);
        }catch(e){
            return {error:e.message};
        }
        return true;
    }

    static processReduxAction=(action:any)=>{
        let data;
        switch(action.type){
            default:
                data=action;
        }
        return {level:"info",data};
    }
    static processError=(error:any)=>{
        let data=error;
        return {level:"error",data};
    }

    static processNetwork=(networkConfig:any)=>{
        if(networkConfig.type === "request")
            return networkConfig;
        const data:any= {
            url:networkConfig.url,
            status:networkConfig.status,
        }
        if(networkConfig.data)
            data.data=networkConfig.data;
        if(networkConfig.error)
            data.error=networkConfig.error;
        return {level:"info",data};
    }
    static processData=(data:any)=>{
        switch(data.LogType){
            case "ReduxAction":
                return Logger.processReduxAction(data.logData);
            case "Network":
                return Logger.processNetwork(data.logData);
            case "Error":
            default:
                return Logger.processError(data.logData);
        }
    }
     
    static writeToConsole=(data:{level?:string,data:any})=>{
        let  level:"error"|"warn"|"info"|"log";
        level=data.level as unknown as typeof level;
        level=level || "log";
        console.groupCollapsed();
        console[level](data.data);
        console.groupEnd();
    }
    static log=(data:any)=>{
        if(env==="production")
            return;
        const processedData=Logger.processData(data);
        Logger.writeToConsole(processedData);
    }
    
    render(){
        const{children,...directProps}=this.props;
        return(
            <Context.Consumer>
                {(ContextProps)=>{
                    const props={...ContextProps,...directProps,log:Logger.log};
                    return(
                    <Context.Provider value={props}>{children}</Context.Provider>
                    );
                }}
            </Context.Consumer>
        );
    }
}

export default  Logger