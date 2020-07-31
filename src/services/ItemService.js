import axios from 'axios';

const ITEM_API = 'http://localhost:8080/api/items';


class ItemService {

   getItemById(id) {
    return axios.get(`${ITEM_API}/${id}`);
  }

  getAllItems() {
    return axios.get(`${ITEM_API}`);
  }


}

export default new ItemService();