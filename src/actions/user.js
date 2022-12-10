import axios from "axios";
import { setUser } from "../reducers/userReducer";


export const registartion = async (email, name, password) => {
        try {
            const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/register/`, {
            email,
            name,
            password
            },
            {headers: {
                'Content-Type': 'application/json'
            }}) 
            alert("User is registered successfully")
        } catch (error) {
            alert(error.response.data.message)

      }
}
    
export const login = (email, password) => {
    return async dispatch => {
          try {
            const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/login/`, {
                email,
                password
            }) 
              dispatch(setUser(response.data))
              localStorage.setItem("refresh", response.data.refresh)
            console.log(response.data)
         } catch (error) {
             alert(error.response.data.message)
         }  
        }
             
}
         
export const auth = () => {
    const refresh = localStorage.refresh
    console.log(refresh);
    return async dispatch => {
          try {
              const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/login/refresh/`, {
                  refresh
            }) 
            dispatch(setUser(response.data))
            console.log(response.data)
         } catch (error) {
            //   alert(error.response.data.message)
              localStorage.removeItem('refresh')
         }  
        }
             
         }