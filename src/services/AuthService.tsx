import axios from 'axios';
import { API_TODO_URL } from '../config';

const AuthService = {
  login(email: string, password: string) {
    return axios.post(`${API_TODO_URL}/users/login`, { email, password });
  },
  register(data: any) {
    return axios.post(`${API_TODO_URL}/register`, {}, { data });
  },
  getProfile() {
    return axios.get(`${API_TODO_URL}/users/me`, {
      headers: this.authHeader(),
    });
  },
  logout() {
    localStorage.removeItem('token');
  },
  getToken() {
    return localStorage.getItem('token');
  },
  saveToken(token: string) {
    localStorage.setItem('token', token);
  },
  authHeader() {
    return { Authorization: `Bearer ${this.getToken()}` };
  },
};

export default AuthService;
