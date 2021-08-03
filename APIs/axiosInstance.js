import axios from 'axios';
export const USER_API_BASE_URL = `${process.env.BASE_URL}:${process.env.PORT}`;

class AxiosInstance {
  async signup(username, email, password) {
    console.log('In signup API');
    return await axios.post(USER_API_BASE_URL + '/api/user/signup', { username, email, password });
  }

  async login(credentials) {
    return await axios.post(USER_API_BASE_URL + '/api/user/login', credentials);
  }

  getUserInfo() {
    return localStorage.getItem('token');
  }

  getAuthHeader() {
    return { headers: { Authorization: 'Bearer ' + this.getUserInfo() } };
  }
}

export default new AxiosInstance();
