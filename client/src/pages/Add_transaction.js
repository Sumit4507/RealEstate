import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
const Add_transaction = (p) => {
  const [details, setdetails] = useState({
    transaction_id: "",
    Date: "",
    Final_Price: "",
    buyer_id: "",
    seller_id: "",
    agent_id: "",
    property_id: "",
  });

  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //setLoading(true);
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch(
      "http://localhost:4000/api/v1/add_transaction_details",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transaction_id: details.transaction_id,
          Date: details.Date,
          Final_Price: details.Final_Price,
          buyer_id: details.buyer_id,
          seller_id: details.seller_id,
          agent_id: details.agent_id,
          property_id: details.property_id,
        }),
      }
    );
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
              Add Transaction
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Enter Transaction Details
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="agentid"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Enter Transaction Id
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Transaction Id"
                      id="name"
                      name="transaction_id"
                      maxLength={8}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Date
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        placeholder="Area  "
                        id="email"
                        onChange={handleChange}
                        name="Date"
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Final Price
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="number"
                        placeholder="Final Price"
                        id="email"
                        onChange={handleChange}
                        name="Final_Price"
                      ></input>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Buyer Id
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Buyer Id"
                        onChange={handleChange}
                        id="password"
                        name="buyer_id"
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
                        Seller Id
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Seller Id"
                        onChange={handleChange}
                        id="password"
                        name="seller_id"
                      ></input>
                    </div>
                  </div>
                </div>
                <div style={{display : "flex" , justifyContent : "space-between"}}>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Agent Id
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Agent Id"
                      onChange={handleChange}
                      id="password"
                      name="agent_id"
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
                      Property Id
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Property Id"
                      onChange={handleChange}
                      id="password"
                      name="property_id"
                    ></input>
                  </div>
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

export default Add_transaction;
