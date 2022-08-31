import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/';
const user = JSON.parse(localStorage.getItem('persist:root'));
const currentUser = JSON.parse(user.currentUser);
console.log('currentUser', currentUser);
const TOKEN = currentUser?.accessToken;
console.log('TOKEN', TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  data: {
    user: currentUser,
  },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `bearer ${TOKEN}` },
});
