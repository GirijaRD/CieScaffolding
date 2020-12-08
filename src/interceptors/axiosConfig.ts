import axios from 'axios';
import Logger from '../components/Logger'
import store from '../redux-setup/store'
axios.interceptors.request.use(req => {
  // Logger.log({
  //   LogType:"Network",
  //   logData:{
  //     type:"request",
  //     data:{
  //       ...req
  //     }
  //   }
  // });
  store.dispatch({type:"Logger/Log",payload:"store axios logger"});
  return req;
});

axios.interceptors.response.use(res => {
    const data:{LogType:"Network",logData:any}={
      LogType:"Network",
      logData:{
        type:"response"
      }
    }
    if(res.data)
    data.logData.data=res.data;
    if(res.status)
    data.logData.status=res.status;
    Logger.log(data);
    return res;
  
  
    });
  
  export default axios;