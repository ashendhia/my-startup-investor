import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const InfoProfile = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-row w-full gap-4">
        <div className="flex flex-col items-center gap-1.5 ">
          <label
            for="website-admin"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <div class="flex">
            <span class="inline-flex items-center p-8 text-lg text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-lg p-14 bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1.5 ">
          <Label className="self-start" htmlFor="email">
            Last Name
          </Label>
          <Input type="text" id="text3" placeholder="Last Name" />
        </div>
      </div>
      <div className="flex flex-row my-10 w-full">
        <div className="grid w-full  items-center gap-1.5 mx-5  ">
          <Label className="flex self-start" htmlFor="email">
            Date of Birth
          </Label>
          <Input type="text" id="text2" placeholder="First Name" />
        </div>
        <div className="grid w-full  items-center gap-1.5 mx-5 ">
          <Label className="flex self-start" htmlFor="email">
            Mobile
          </Label>
          <Input type="number" id="text" placeholder="Last Name" />
        </div>
      </div>

      <div className="flex flex-row my-10 w-full">
        <div className="grid   items-center gap-1.5  w-full mx-5 ">
          <Label className="flex self-start" htmlFor="email">
            Email
          </Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full  items-center gap-1.5 mx-5 ">
          <Label className="flex self-start" htmlFor="email">
            Adresse
          </Label>
          <Input type="text" id="text" placeholder="Last Name" />
        </div>
      </div>
    </div>
  );
};

export default InfoProfile;
