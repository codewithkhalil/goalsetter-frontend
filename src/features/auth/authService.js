import axios from "axios"


const API_URL ='/api/users/'

const LOGIN_URL = '/api/users/login'


//Register user
const register = async (userData) => {
    const response = await axios.post('https://goalsetter-api-xz81.onrender.com' + API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Login user
const login = async (userData) => {
    const response = await axios.post('https://goalsetter-api-xz81.onrender.com' + LOGIN_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Logout user
const logout = () =>{
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService;