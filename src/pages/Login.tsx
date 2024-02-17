import InvestorLogin from "@/components/Login/InvestorLogin";
import StartUpLogin from "@/components/Login/StartUpLogin";
import UserButton from "@/components/Register/UserButton";
import { useState } from "react";

const Login = () => {
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
      <div className="w-[50%] bg-white border-black h-full absolute left-0 z-10 drop-shadow-2xl rounded-r-[20px] flex justify-center items-center">
        <div className="w-full  flex flex-col items-center gap-5  justify-between py-20 h-full ">
          <h1 className="text-2xl capitalize font-bold">Login</h1>
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
            <InvestorLogin />
          ) : (
            <StartUpLogin />
          ) }
        </div>

      </div>

      </div>
    </section>
  )
}

export default Login