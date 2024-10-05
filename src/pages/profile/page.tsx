"use client";
import { routes } from "@/config/routes";
// import Image from 'next/image'
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button, Input } from "rizzui";
import useFetchProfile from "../../api/hooks/profile/useFetchloginUser";
import editFetchProfile from "../../api/hooks/profile/editFetchloginUser";
import { useForm } from "react-hook-form";

const Home: React.FC = () => {
  const { data, isLoading } = useFetchProfile();
  const EditFetchProfile = editFetchProfile();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: data?.data?.name || "",
      email: data?.data?.email || "",
    },
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // const logo = watch("profile_photo");

  const onSubmit = (formData: any) => {
    const dataToSubmit = new FormData();
    dataToSubmit.append("name", formData.name);
    dataToSubmit.append("email", formData.email);
    if (fileInputRef.current?.files?.[0]) {
      dataToSubmit.append("profile_photo", fileInputRef.current.files[0]);
    }
    EditFetchProfile.mutate(dataToSubmit);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setValue("profile_photo", reader.result); // Update react-hook-form value
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-row">
        <p className="mr-auto font-medium text-lg">Profile</p>
        {/* <Link href={routes.forms.profileSettings}> */}
          {/* <Button>Password Setting</Button>
        </Link> */}
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full p-4">
          <div className="flex space-x-8">
            {/* Profile Section */}
            <div className="p-4 shadow rounded-lg w-[320px]">
              <div className="flex flex-row w-full gap-4">
                {/* <div className="w-16 h-16 rounded-full items-center justify-center text-2xl flex flex-row"> */}
                  {/* {data?.data?.profile_photo ? (
                    <Image
                      src={data.data.profile_photo}
                      alt="Profile Photo"
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    data?.data?.name.charAt(0)
                  )}
                </div> */}
                <h2 className="text-xl font-semibold mt-4">{data?.data?.name}</h2>
              </div>
              <div className="ml-4 mt-4">
                <div className="flex flex-row justify-between mb-4">
                  <strong>Name</strong>
                  <p className="text-gray-600">{data?.data?.name}</p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <strong>Mobile</strong>
                  <p className="text-gray-600">{data?.data?.mobile_no}</p>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <strong>Username</strong>
                  <p className="text-gray-600">admin</p>
                </div>
                <div className="flex flex-row justify-between">
                  <strong>Email</strong>
                  <p className="text-gray-600">{data?.data?.email}</p>
                </div>
              </div>
            </div>
            {/* Update Profile Section */}
            <div className="flex flex-row gap-8 p-4 shadow rounded-lg w-full">
              <div className="text-center">
                {/* <div className="border border-gray-300 p-2 rounded-md h-[160px]">
                  {logo ? (
                    <Image
                      fill
                      src={logo as string}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    "Logo"
                  )}
                </div> */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="mt-2"
                />
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mb-4">
                  <Input
                    label="Name"
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full mb-5"
                  />
                  <Input
                    label="Email"
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
