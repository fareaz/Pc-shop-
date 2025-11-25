"use client";

import { useAuth } from "@/app/Context/AuthContext";

export default function Profile() {
  const { user } = useAuth(); 

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-100 text-black px-3">
      <div className="shadow-xl rounded-2xl md:w-3/5 lg:w-2/5 
                      bg-white/30 backdrop-blur-xl border border-white/40">

       
        <div className="w-full h-40 rounded-t-2xl bg-gradient-to-r from-blue-400/60 to-blue-600/60 backdrop-blur-xl"></div>

        <div className="flex flex-col items-center px-6 -mt-16 pb-6">
          
      
          <div className="relative">
            <img
              src={user?.photoURL || "/default-user.png"}
              alt="profile"
              className="mx-auto object-cover rounded-full h-28 w-28 border-4 border-white shadow-lg"
            />
          </div>

      
          <p className="p-2 px-4 mt-3 text-sm text-white bg-blue-600 rounded-full shadow">
            Customer
          </p>

       
          <p className="mt-3 text-base font-semibold text-gray-700">
            User ID: <span className="text-gray-900">{user?.uid || "N/A"}</span>
          </p>

       
          <div className="w-full mt-6 p-4 bg-white/70 backdrop-blur-xl rounded-lg shadow-md">
            <div className="flex flex-col gap-4 text-gray-700 text-sm">

           
              <div>
                <p className="font-semibold">Name:</p>
                <p className="font-medium text-gray-900">
                  {user?.displayName || "Not Provided"}
                </p>
              </div>

   
              <div>
                <p className="font-semibold">Email:</p>
                <p className="font-medium text-gray-900">
                  {user?.email || "Not Provided"}
                </p>
              </div>
            </div>

   
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition shadow">
                Update Profile
              </button>

              <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition shadow">
                Change Password
              </button>

       
              <button className="flex-1 bg-gray-800 text-white py-2 rounded-md hover:bg-black transition shadow">
                Update User
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
