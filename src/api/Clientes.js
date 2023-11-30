import BASE_URL from "./Url";
import Api from "./Api";

export default class ClientesService {
  static async getAllClients() {
    try {
      const data = await Api.get(`${BASE_URL}/clientes`);
      const dataJson = await data.json();
      return dataJson;
    } catch (error) {
      console.log("error", error);
    }
  }

  static async postNewClients(data) {
    try {
      const rsp = await Api.post(`${BASE_URL}/clientesv`, data);
      const rspJson = await rsp.json();
      return rspJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
