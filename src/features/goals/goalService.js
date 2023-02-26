import axios from 'axios'

const API_URL = '/api/goals/'


// Create new goal

const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post('https://goalsetter-api-xz81.onrender.com' + API_URL, goalData, config)

    return response.data;
}
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get('https://goalsetter-api-xz81.onrender.com' + API_URL, config)

    return response.data;
}
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete('https://goalsetter-api-xz81.onrender.com' + API_URL + goalId, config)

    return response.data;
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal
}

export default goalService;