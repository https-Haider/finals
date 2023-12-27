import axios from 'axios';

const API_BASE_URL = 'https://api.spacexdata.com/v4/dragons';

export const fetchMissions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/missions`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
