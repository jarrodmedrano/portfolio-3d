import axios from 'axios';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://formspree.io/jmedran@gmail.com';
const API_KEY = '?key=asdfsdf';

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}`, props)

  return {
    type: CREATE_POST,
    payload: request
  }
}