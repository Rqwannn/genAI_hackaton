import axios from 'axios';
import { URL } from './BaseURL';

const API = axios.create({
  baseURL: URL.backend_url,
  timeout: 1000
});

export { API as axios }
