import React, { useEffect, useState } from "react";
import ClientesService from "../../../../api/Clientes";

const useGetAllClients = () => {
  const [clients, setClients] = useState();

  const getAllClients = async () => {
    const data = await ClientesService.getAllClients();
    setClients(data);
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return { clients };
};

export default useGetAllClients;
