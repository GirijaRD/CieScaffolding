import axios from "axios";
import Logger from "../components/Logger";

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
  