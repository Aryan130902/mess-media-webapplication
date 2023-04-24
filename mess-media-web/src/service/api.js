import { SERVICE_URLS } from "../constants/service_url";


const API_URL = 'https://mess-media.cyclic.app';

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body) => {
      const requestConfig = {
        method: value.method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(body),
        TYPE: getType(value, body)
      };
      console.log(API_URL + value.url);
      return fetch(API_URL + value.url, requestConfig)
      .then(response => processResponse(response))
      .catch(error => ProcessError(error));

    }
}


const getType = (value, body) => {
    let TYPE = {};
  
    if (value.method === 'PUT') {
      TYPE.query = body.id;
    } else {
        TYPE.params = body;
      } 
  
    return TYPE;
  };


const processResponse = async response => {
    const responseData = await response.json();
  
    if (responseData.success) {
      return { 
        isSuccess: true, 
        data: responseData 
    };
    } else {
      return {
        isFailure: true,
        code: response.status
      };
    }
  };


  const ProcessError = async error => {
    if(!error.success){
        return {
            isError: true,
            code: error.res.status
          };
    }
  }


  export { API };

