import axios from 'axios';

const USER_API = 'http://localhost:8080/api/users';

class UserService {

  getUserById(id) {
    return axios.get(`${USER_API}/${id}`);
  }

}

export default new UserService();