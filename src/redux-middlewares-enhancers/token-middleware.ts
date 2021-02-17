import axios from 'axios'
// update token on store token
const tokenMiddleware=(store: any)=>(next: any)=>(action: any)=>{
    const deletTokenActions:ReadonlyArray<string>=["loggedInUser\\logout"];
    const {login}=store.getState();
    const token =(!deletTokenActions.includes(action.type))&&login.loggedInUser.token ;
    console.log("axios",token)
    if(token)
        axios.defaults.headers.common["Authorization"]=`Bearer ${token}`;
     else 
         delete axios.defaults.headers.common["Authorization"];
    next(action);
}
export default tokenMiddleware;