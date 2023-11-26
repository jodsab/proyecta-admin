import BASE_URL from "./Url";
import Api from "./Api";

export default class DistritoService {
  static async getAllDistritos() {
    try {
      const data = await Api.get(`${BASE_URL}/clientes`);
      console.log("data", data);
      const dataJson = await data.json();
      console.log("dataJson", dataJson);
      return dataJson;
    } catch (error) {
      console.log("error", error);
    }
  }
}
