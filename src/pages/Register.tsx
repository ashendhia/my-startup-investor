

import { useState } from "react"
import UserButton from "@/components/Register/UserButton"
import InvestorForm from "@/components/Register/InvestorForm"
import StartUpForm from "@/components/Register/StartUpForm"


const Register = () => {
  const [selectedUser, setSelectedUser] = useState<string>("investor");
const users = [ "investor", "startup" ]

const handleSelectUser = (user: string) => {
  if (selectedUser !== user) {
    setSelectedUser(user);
  }
};

  return (
    <section className="flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden ">
      <div className="flex items-center justify-center w-full h-full">
      <div className="w-full bg-black border-black h-full z-0">
      </div>
      <div className="w-[50%] bg-white border-black h-full absolute right-0 z-10 drop-shadow-2xl rounded-l-[20px] flex justify-center items-center">
        <div className="w-full  flex flex-col items-center gap-5  justify-between py-20 h-full ">
          <h1 className="text-2xl capitalize font-bold">Create an Account</h1>
          <div className="w-1/2 flex items-center justify-center gap-5  bg-white drop-shadow-lg rounded-md">
              {users.map((user, index) => (
              <UserButton 
              key={index}
              user={user} 
              selectedUser={selectedUser}
              onSelectUser={handleSelectUser} 
              />
              ) )}
          </div>
          {selectedUser === "investor" ? (
            <InvestorForm />
          ) : (
            <StartUpForm />
          ) }
        </div>

      </div>

      </div>
    </section>
  )
}

export default Register