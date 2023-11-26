import React, { useEffect, useState } from "react";
import ClientesService from "../../../../api/Clientes";

const useCreateCLients = () => {
  const [rspCreate, setRspCreate] = useState();

  const postNewClients = async (data) => {
    const postRsp = await ClientesService.postNewClients(data);
    setRspCreate(postRsp);
  };

  useEffect(() => {
    postNewClients();
  }, []);

  return { postNewClients, rspCreate };
};

export default useCreateCLients;
