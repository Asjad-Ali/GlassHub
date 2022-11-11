import Axios from 'axios'
import showToast from '@/global_components/Toast/useToast';
import { useAuthStore } from '@/store/auth';
// const apiBaseURL = "https://apis.glasshub.ai";
// const TOKEN = localStorage.getItem('user_access_token') || null;
// import useToast from '@/composables/useToast.js'
const axios_instance = Axios.create({
    baseURL: process.env.VUE_APP_API_PATH,
});

axios_instance.defaults.headers.common['x-access-token'] = localStorage.getItem('user_access_token')
// class axios
// axios_instance.interceptors.response.use((error)=>{
//     if(error.message === 'Network Error' && !error.response){
//         const store = useAuthStore()
//         store.loader=false
//         showToast('Network error please check your internet connection') 
//         // return error
//     }
  
axios_instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.message === 'Network Error' && !error.response){
                const store = useAuthStore()
                store.loader=false
                showToast('A network error occurred.This could be a CORS issue or a dropped internet connection.') 
                // return error
            }else{
                return Promise.reject(error);
            }
  });

// })
//     async request( route, payload = null,  method = "GET", contentType = "application/json") {
//       let options = {
//         method: method,
//         headers: {
//           "Accept": 'application/json',
//           "x-access-token": `${TOKEN}`,
//           "Device-Type": 'web'
//         },
//       };
  
//       if (contentType == 'application/json') {
//         options.headers['Content-Type'] = contentType;
//       }
  
//       //payload will be sent as form data if content type is multipart/form-data
//       if (options.method !== "GET") {
//         if (contentType.toLowerCase() == "multipart/form-data") {
//           options.data = convertToFormData(payload);
//         } else if (payload && typeof payload === "object") {
//           options.data = JSON.stringify(payload);
//         }
//       } else if (payload) {
//         // payload will be appended to the url  if method is GET
//         route = this.appendParams(route, payload);
//       }
//       options.url = this.url(route);
  
//       try {
//         let response = await axios(options)
//         return {...(await response)}       
//       } catch (error) {
//           return error.response.data
//         if(error.response.data.message === "Failed to authenticate token.")
//         {
//         //   useToast(error.response.data.message)
//           localStorage.clear()
//           window.open('/login', '_self');
//         }
//         else{
//           return error.response.data
//         }
//       }
//     }
  
    
  
//     async get(route, payload = null) {
//       return await this.request(route, payload, "GET");
//     }
  
//     async post(route, payload = null) {
//       return await this.request(route, payload, "POST");
//     }
  
//     async put(route, payload = null) {
//       return await this.request(route, payload, "PUT");
//     }
  
//     async delete(route, payload = null) {
//       return await this.request(route, payload, "DELETE");
//     }
  
//     async patch(route, payload = null) {
//       return await this.request(route, payload, "PATCH");
//     }
  
//     async upload(route, payload = null) {
//       return await this.request(route, payload, "POST", "multipart/form-data");
//     }
  
//     async formData(route, payload = null) {
//       return await this.request(route, payload, "POST", "multipart/form-data");
//     }
  
//     appendParams(route, payload) {
//       let url = new URL(this.url(route));
//       let params = new URLSearchParams(url.search.slice(1));
  
//       if (payload && typeof payload === "object") {
//         for (let key in payload) {
//           params.append(key, payload[key]);
//         }
//       }
//       route = route.split("?")[0] + "?" + params.toString();
//       return route;
//     }
  
//     url(route) {
//       return `${apiBaseURL}${route}`;
//     }
//   }
export default  axios_instance;