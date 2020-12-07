import React from 'react';
const Context= React.createContext({default:null});
export { Context};
class Logger extends React.Component<any,{}>{
    constructor(props:any){
        super(props)
        console.log("logger-constructor",JSON.stringify(this.props));
        this.state={
            data:{}
        }
    }
    componentDidMount(){
        console.log("Logger mounted");
    }
    componentDidUpdate(){
        console.log("logger updated",JSON.stringify(this.props),this.state);
    }
    log=(data:any)=>{
        console.log(data);
        this.setState(data)
    }
    render(){
        const{children,...directProps}=this.props;
        return(
            <Context.Consumer>
                {(ContextProps)=>{
                    console.log("Context Props",JSON.stringify(ContextProps));
                    console.log("directProps",JSON.stringify(directProps),JSON.stringify(children));
                    const props={...ContextProps,...directProps,log:this.log};
                    return(
                    <Context.Provider value={props}>{children}</Context.Provider>
                    );
                }}
            </Context.Consumer>
        );
    }
}

export default  Logger