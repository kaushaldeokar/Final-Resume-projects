import axios from "axios";
import { API_NOTIFICATION_MESSAGES } from "../Constants/config.js";

const API_URL = "http://localhost:8000";
const AxiosInstance = axios.create({
  //base url added  and we get to know about the end point which we will add later/
  baseURL: API_URL,
  timeout: 10000,
  header: {
    "content-type": "application/json",
  },
});

//  Axios interceptors are like pre-request and post-response received hooks you can inject into your requests and responses.
//what is this saying?
//ans-
AxiosInstance.interceptors.request.use(
  //queries and params are handled in config//
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    //stop loader if response is recieved//
    return processResponse(response);
  },
  (err) => {
    //stop loader if error/
    return Promise.reject(processError(err));
  }
);
///Processing response came before we  give it to client//
/////If sucess-> return {isSuccess:true, data:Object}
/////If failure-> return {isFaliture: true, statusCode:int , msg: stirng};
const processResponse = (res) => {
  if (res?.status === 200) {
    return { isSuccess: true, data: res.data };
  } else {
    return {
      isFailure: true,
      statusCode: res?.code,
      msg: res?.msg,
    };
  }
};

///Processing request came before we  give it to client//
/////If sucess-> return {isSuccess:true, data:Object}
/////If failure-> return {isFaliture: true, statusCode:int , msg: stirng};

//there will be three kind of error

const processError = (err) => {
  if (err.response) {
    //error in response-> request made successfully by response with some error code//
    //response not 200
    console.log("ERROR IN RESPONSE", err.toJSON());
    return {
      isSuccess:false,
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responseFaliure,
      code: err.response.status,
    };
  } else if (err.request) {
    // request was made success fully but no respose made
    // null response->network err
    console.log("ERROR IN REQUEST", err.toJSON());
    return {
      isSuccess:false,
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    //error making a request//
    // ui error kind as no request was made//
    console.log("ERROR IN Making Request", err.toJSON());
    return {
        isSuccess:false,
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code: "",
    };
  }
};

//two methhod directly
//1 export {axiosInstance};
//2 make Api Object and map all end points requlary in it//

export  {
  AxiosInstance,
};
