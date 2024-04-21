import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
const Add_property_details = (p) => {
  const [details, setdetails] = useState({
    prop_id: "",
    area: "",
    bedrooms: "",
    swimming_pool: "",
    city: "",
    district: "",
    house_no: "",
    imge_link: "",
  });

  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    //setLoading(true);
    e.preventDefault();
    toast.loading("Loading ... Please Wait ...");
    const response = await fetch(
      "http://localhost:4000/api/v1/add_property_details",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prop_id: details.prop_id,
          area: details.area,
          bedrooms: details.bedrooms,
          swimming_pool: details.bedrooms,
          city: details.city,
          district: details.district,
          house_no: details.house_no,
          imge_link: details.imge_link,
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
            Add Property
          </h2>
          <p className="mt-2 text-base text-gray-600">Enter Property Details</p>
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
                  Area
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Area  "
                    id="email"
                    onChange={handleChange}
                    name="area"
                  ></input>
                </div>
              </div>

              <div style={{display : "flex" , justifyContent : "space-between"}}>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Bedrooms
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="Bedrooms"
                    id="email"
                    onChange={handleChange}
                    name="bedrooms"
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
                    Swimming Pool
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="swimming pool"
                    onChange={handleChange}
                    id="password"
                    name="swimming_pool"
                  ></input>
                </div>
              </div>
              </div>
              <div style={{display :"flex" , justifyContent : "space-between"}}>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    City
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="City"
                    onChange={handleChange}
                    id="password"
                    name="city"
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
                    District
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="district"
                    onChange={handleChange}
                    id="password"
                    name="district"
                  ></input>
                </div>
              </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    House Number
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="House number"
                    onChange={handleChange}
                    id="password"
                    name="house_no"
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
                    Image (URL)
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter Image (URL)"
                    onChange={handleChange}
                    id="password"
                    name="imge_link"
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

export default Add_property_details;
