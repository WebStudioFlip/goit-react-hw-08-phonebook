import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const addToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const signup = async data => {
  const { data: result } = await axios.post('/users/signup', data);
  addToken(result.token);
  return result;
};

const login = async data => {
  const { data: result } = await axios.post('/users/login', data);
  addToken(result.token);
  return result;
};

const logout = async () => {
  const { data: result } = await axios.post('/users/logout');
  return result;
};

const gerCurrent = async token => {
  addToken(token);
  const { data: result } = await axios.get('/users/current');

  return result;
};

const authAPI = {
  signup,
  login,
  logout,
  gerCurrent,
};

export default authAPI;