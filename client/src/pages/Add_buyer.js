import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
const Add_buyer = (p) => {
  const [details, setdetails] = useState({
    agent_id: "",
    name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //setLoading(true);
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch("http://localhost:4000/api/v1/add_buyer", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: details.agent_id,
        name: details.name,
        email: details.email,
        phone_number: details.phone_number,
        table: p.table,
      }),
    });
    const result = await response.json();
    toast.remove();
    if (!result.success) toast.error(result.message);
    else toast.success(result.message);
    //window.location.reload()
  };
  return (
    <>
      
      <section className="bg-black/80">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight text-black">
              Add {p.table}
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Enter {p.table} Details
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="agentid"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    {p.table} Id
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Buyer id"
                      id="name"
                      name="agent_id"
                      maxLength={8}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      onChange={handleChange}
                      name="name"
                      maxLength={30}
                    ></input>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      name="email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Phone Number{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Phone number"
                      onChange={handleChange}
                      id="password"
                      name="phone_number"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Add {p.table} <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add_buyer;
