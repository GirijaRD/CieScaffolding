
import axios from "axios";
import Logger from '../components/Logger'
axios.interceptors.request.use(req => {
  Logger.log({
    LogType:"Network",
    logData:{
      type:"request",
      data:{
        ...req
      }
    }
  });
  
  return req;
});
