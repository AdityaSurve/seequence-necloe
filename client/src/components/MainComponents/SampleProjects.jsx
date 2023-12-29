import React, { useEffect, useState } from "react";
import Card from "../Card";
import { unsplash_api } from "../../config";
import toast from "react-hot-toast";

const SampleProjects = ({ setLoader }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    setLoader(true);
    unsplash_api
      .get("")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Error in fetching data");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex-col gap-4 p-5 flex justify-center items-center">
      <div className="w-full animate-fade-up animate-delay-[1.25s] h-fit text-3xl tracking-wider font-bold">
        Sample Projects
      </div>
      <div className="w-full h-full animate-fade-up animate-delay-[1.5s] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 rounded-lg">
        {data &&
          data.map((item, index) => {
            return <Card data={item} key={index} type={"download"} />;
          })}
      </div>
    </div>
  );
};

export default SampleProjects;
