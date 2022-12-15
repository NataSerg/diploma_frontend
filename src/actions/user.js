import axios from "axios";
import { setCart, setUser } from "../reducers/userReducer";



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
              localStorage.setItem("access", response.data.access)
              localStorage.setItem("refresh", response.data.refresh)
            console.log(response.data)
         } catch (error) {
             alert(error.response.data.message)
         }  
        }
             
}
         
export const auth = () => {
    const refresh = localStorage.refresh
    return async dispatch => {
          try {
              const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/login/refresh/`, {
                  refresh
            }) 
              dispatch(setUser(response.data))
              console.log(response.data)
            localStorage.setItem("access", response.data.access)
         } catch (error) {
            //   alert(error.response.data.message)
              localStorage.removeItem('access')
              localStorage.removeItem('refresh')
         }  
        }
             
}
         
export const cartUpdate = () => {
    const accessToken = localStorage.access
    return async dispatch => {
        try {
            const response = await axios.get(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/cart/`, 
             {
                headers: {
                    'Authorization': 'Bearer ' + accessToken,
                    'Content-Type': 'application/json'
                }
            })
            dispatch(setCart(response.data))
            console.log(response.data)
        } catch (error) {
             console.log(error.response.data.message)
        }
    }   
             
}


 export const addToCart = async (product, quantity) => {
        const accessToken = localStorage.access
         try {
             const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/cart/`,
                 {
                     product,
                     quantity
                 }, {
                 headers: {
                     'Authorization': 'Bearer ' + accessToken,
                     'Content-Type': 'application/json'
                 }
             })
             console.log(response.data)
         } catch (error) {
             console.log(error.response.data.message)
     }
}

