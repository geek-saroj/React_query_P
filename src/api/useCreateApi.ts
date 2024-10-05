"use client";

import axios from "axios";

const useCreateApi = () => {


  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  api.interceptors.request.use(function (config) {
    if (config.headers) {
      // config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["App-Authorizer"] = 647061697361;
      config.headers["Origin"] = window.location.href;

      return config;
    }
    return config;
  });



  return api;
};

export default useCreateApi;
