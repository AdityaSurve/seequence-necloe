import React, { useEffect, useState } from "react";
import app_api from "../../config";
import AddModal from "../AddModal";
import toast from "react-hot-toast";
import Card from "../Card";
import DeleteModal from "../DeleteModal";
import UpdateModal from "../UpdateModal";

const MyProjects = ({ setLoader }) => {
  const [data, setData] = useState([]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const getData = async () => {
    setLoader(true);
    app_api
      .get("/all")
      .then((res) => {
        toast.success("Data fetched successfully");
        setData(res.data);
      })
      .catch((err) => {
        toast.error("Error in fetching data");
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const deleteData = async (id) => {
    setLoader(true);
    app_api
      .delete(`/delete?id=${id}`)
      .then((res) => {
        toast.success("Project deleted successfully");
        getData();
      })
      .catch((err) => {
        toast.error("Error in deleting project");
      })
      .finally(() => {
        setLoader(false);
      });
  };
  const [id, setId] = useState(0);

  const getDataById = (id) => {
    const target = data.filter((item) => item.id === id);
    return target[0];
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full flex-col gap-4 p-5 flex justify-center items-center">
      <div className="w-full h-fit text-3xl animate-fade-up animate-delay-[1.25s] tracking-wider font-bold">
        My Projects
      </div>
      <div className="w-full h-full animate-fade-up animate-delay-[1.5s] overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-3 rounded-lg">
        <div
          className="w-full flex z-0 flex-col items-center justify-center h-fit p-3 bg-white shadow-sm shadow-gray-500 rounded-lg relative transition-all cursor-pointer duration-300 hover:scale-105"
          onClick={() => {
            setShowAddModal(true);
          }}
        >
          <div className="h-40 flex justify-center items-center rounded-lg w-full bg-primary-100">
            <svg
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5417 17.6667C41.4744 17.6608 45.3193 18.8297 48.5833 21.0233V8.83333C48.5833 6.49059 47.6527 4.24379 45.9961 2.58722C44.3395 0.930652 42.0927 0 39.75 0L8.83333 0C6.49059 0 4.24379 0.930652 2.58722 2.58722C0.930652 4.24379 0 6.49059 0 8.83333L0 39.75C0 42.0927 0.930652 44.3395 2.58722 45.9961C4.24379 47.6527 6.49059 48.5833 8.83333 48.5833H21.0233C19.0242 45.5913 17.8749 42.1126 17.698 38.5185C17.5211 34.9243 18.3234 31.3496 20.0192 28.1757C21.7149 25.0019 24.2405 22.3479 27.3266 20.4971C30.4126 18.6463 33.9432 17.668 37.5417 17.6667Z"
                fill="white"
              />
              <path
                d="M37.5417 22.0833C34.4843 22.0833 31.4956 22.9899 28.9535 24.6885C26.4114 26.3871 24.43 28.8014 23.26 31.626C22.09 34.4507 21.7839 37.5588 22.3804 40.5574C22.9768 43.5561 24.4491 46.3105 26.611 48.4724C28.7729 50.6342 31.5273 52.1065 34.5259 52.703C37.5245 53.2994 40.6327 52.9933 43.4573 51.8233C46.282 50.6533 48.6962 48.672 50.3948 46.1299C52.0934 43.5877 53 40.599 53 37.5417C52.9953 33.4433 51.3652 29.5141 48.4672 26.6161C45.5692 23.7181 41.64 22.088 37.5417 22.0833ZM41.9583 39.75H39.75V41.9583C39.75 42.544 39.5173 43.1057 39.1032 43.5199C38.6891 43.934 38.1274 44.1667 37.5417 44.1667C36.956 44.1667 36.3943 43.934 35.9801 43.5199C35.566 43.1057 35.3333 42.544 35.3333 41.9583V39.75H33.125C32.5393 39.75 31.9776 39.5173 31.5635 39.1032C31.1493 38.689 30.9167 38.1273 30.9167 37.5417C30.9167 36.956 31.1493 36.3943 31.5635 35.9801C31.9776 35.566 32.5393 35.3333 33.125 35.3333H35.3333V33.125C35.3333 32.5393 35.566 31.9776 35.9801 31.5635C36.3943 31.1493 36.956 30.9167 37.5417 30.9167C38.1274 30.9167 38.6891 31.1493 39.1032 31.5635C39.5173 31.9776 39.75 32.5393 39.75 33.125V35.3333H41.9583C42.544 35.3333 43.1057 35.566 43.5199 35.9801C43.934 36.3943 44.1667 36.956 44.1667 37.5417C44.1667 38.1273 43.934 38.689 43.5199 39.1032C43.1057 39.5173 42.544 39.75 41.9583 39.75Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="w-full h-fit p-1 text-center text-lg font-bold">
            Create a new project
          </div>
          <div className="w-full h-fit tracking-tighter font-semibold text-center text-sm">
            or try a <span className="text-primary-500">sample project</span>
          </div>
        </div>
        {data &&
          data.map((item, index) => {
            return (
              <Card
                data={item}
                key={index}
                type={"delete"}
                setId={setId}
                setShowDeleteModal={setShowDeleteModal}
                setShowUpdateModal={setShowUpdateModal}
              />
            );
          })}
      </div>
      {showAddModal && (
        <AddModal getData={getData} setShowAddModal={setShowAddModal} />
      )}
      {showDeleteModal && (
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          deleteData={deleteData}
          id={id}
        />
      )}
      {showUpdateModal && (
        <UpdateModal
          setShowUpdateModal={setShowUpdateModal}
          getData={getData}
          data={getDataById(id)}
          setLoader={setLoader}
          id={id}
        />
      )}
    </div>
  );
};

export default MyProjects;
