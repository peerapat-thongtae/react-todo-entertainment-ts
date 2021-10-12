import axios, { Method } from 'axios';
import { API_TODO_URL, ACCESS_TOKEN, API_TMDB_URL } from 'config';

interface APIRequestInterface {
  method: Method;
  url: string;
  params?: any;
  data?: any;
  headers?: any;
}

const ApiTmdbConfig = (header: any) => {
  const bearer = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  };
  if (!header) {
    return bearer;
  }

  if (!header.Authorization) {
    return { ...header, ...bearer };
  }

  return header;
};

const ApiTodoConfig = (header: any) => {
  const bearer = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  if (!header) {
    return bearer;
  }

  if (!header.Authorization) {
    return { ...header, ...bearer };
  }

  return header;
};

export const ApiTodoHelper = (options: APIRequestInterface) => {
  return axios.request({
    method: options.method || 'GET',
    url: `${API_TODO_URL}${options.url}`,
    params: options.params || {},
    data: options.data || {},
    headers: ApiTodoConfig(options.headers),
  });
};

export const ApiMovieHelper = (options: APIRequestInterface) => {
  return axios.request({
    method: options.method || 'GET',
    url: `${API_TMDB_URL}${options.url}`,
    params: options.params || {},
    data: options.data || {},
    headers: ApiTmdbConfig(options.headers),
  });
};
