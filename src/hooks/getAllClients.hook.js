import React, { useEffect, useState } from "react";
import ClientesService from "../api/Clientes";

const useGetAllClients = () => {
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);

  const getAllClients = async () => {
    const data = await ClientesService.getAllClients();
    setClients(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllClients();
  }, []);

  return { loading, clients };
};

export default useGetAllClients;
