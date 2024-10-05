"use client";
import useCreateApi from "../../useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IUser1 {
  id: number;
 
  client_id: number;
  name: string;
  email: string;
  mobile_no: string;
  gender: string;
  status: string;
  profile_photo: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
}

const getProfileInfo = async (api: AxiosInstance): Promise<{ data: IUser1 }> => {
  const route = "/logged-in-user";
  const result = await api.get(route);
  return result.data;
};

const useFetchProfile = () => {
  const api = useCreateApi();

  const result = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfileInfo(api),
  });
  return result;
};

export default useFetchProfile;