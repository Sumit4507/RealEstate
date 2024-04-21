import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, ToggleLeft } from "lucide-react";
import Navbar from "../components/Navbar";
const Add_property = (p) => {
  const [details, setdetails] = useState({
    prop_id: "",
    seller_id: "",
    sell_price: "",
    upload_date: "",
  });
  const [Togglebar, settoggle] = useState("On_Sale");
  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };
  const togglchange = (e) => {
    if (Togglebar == "On_Sale") settoggle("Sold");
    else settoggle("On_Sale");
  };
  const handleSubmit = async (e) => {
    //setLoading(true);
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch("http://localhost:4000/api/v1/add_property", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prop_id: details.prop_id,
        buyer_id: details.buyer_id,
        seller_id: details.seller_id,
        sell_price: details.sell_price,
        upload_date: details.upload_date,
        status: Togglebar,
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
              Add Property
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Enter Property Details
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="agentid"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Property Id
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Property Id"
                      id="name"
                      name="prop_id"
                      maxLength={8}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Seller Id
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Seller Id "
                      id="email"
                      onChange={handleChange}
                      name="seller_id"
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
                      Sell Price (INR)
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Sell Price"
                      onChange={handleChange}
                      id="password"
                      name="sell_price"
                    ></input>
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
                        Upload date
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        placeholder="Date"
                        onChange={handleChange}
                        id="password"
                        name="upload_date"
                      ></input>
                    </div>
                  </div>

                  <label class="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={Togglebar}
                      onChange={togglchange}
                      class="sr-only peer"
                    />
                    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 ">
                      <strong>{Togglebar}</strong>
                    </span>
                  </label>
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

export default Add_property;
