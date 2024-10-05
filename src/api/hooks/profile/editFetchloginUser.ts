"use client";

import { useMemo } from 'react';
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosInstance } from 'axios';

// Custom hook to create an Axios instance
const useCreateApi = (): AxiosInstance => {
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/api', // Base URL for your API
      headers: {
        'Content-Type': 'application/json',
        // Add other headers here if needed
      },
    });

    // Optional: Add interceptors if needed
    instance.interceptors.request.use(
      (config) => {
        // Modify request config if needed (e.g., add auth token)
        // const token = getToken(); // Function to get token
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return instance;
  }, []);

  return api;
};

// Function to edit profile information
const editProfileInfo = async (api: AxiosInstance, data: any) => {
  const route = "/update-profile"; // Use relative route
  const result = await api.post(route, data);
  return result.data;
};

// Hook to handle profile editing mutation
const editFetchProfile = () => {
  const api = useCreateApi();

  const mutation = useMutation({
    mutationFn: (data: any) => editProfileInfo(api, data),
  });

  return mutation;
};

export default editFetchProfile;
