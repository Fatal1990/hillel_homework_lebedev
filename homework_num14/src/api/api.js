import axios from 'axios';

const URL = `https://62d7ce4f9c8b5185c77c706f.mockapi.io/users`;

export const getUsers = () => {
  return axios.get(URL);
};

export const getUser = (id) => {
  return axios.get(`${URL}/${id}`);
};

export const addUser = (user) => {
  return axios.post(URL, user);
};

export const updateUser = (id, user) => {
  return axios.put(`${URL}/${id}`, user);
};

export const removeUser = (id) => {
  return axios.delete(`${URL}/${id}`);
};
