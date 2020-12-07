import axios from 'axios'
// update token on store token
const tokenMiddleware=(store: any)=>(next: any)=>(action: any)=>{
    console.log("token middleware ",action);
    const deletTokenActions:ReadonlyArray<string>=[];
    const {login}=store.getState();
    const token =(!deletTokenActions.includes(action.type))&&login.loggedInUser.token ;
    if(token)
        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
    else 
    delete axios.defaults.headers.common["Authorization"];
    next();
}
export default tokenMiddleware;