import axios from 'axios'

const github = axios.create({
  baseURL: 'https://api.github.com/',
})

const getProfile = () => {
  return github.get(`/users/${username}`);
}

export default getProfile