import React, { useState } from "react";
import Input from "./Input";
import { toast } from "react-hot-toast";
import app_api from "../config";

const AddModal = ({ getData, setShowAddModal }) => {
  const [author, setAuthor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [url, setUrl] = useState("");
  const [download_url, setDownload_url] = useState("");

  const createProject = async () => {
    if (author === "") {
      toast.error("Author name cannot be empty");
      return;
    }
    if (width === "") {
      toast.error("Width cannot be empty");
      return;
    }
    if (height === "") {
      toast.error("Height cannot be empty");
      return;
    }
    if (url === "") {
      toast.error("Url cannot be empty");
      return;
    }
    if (download_url === "") {
      toast.error("Download url cannot be empty");
      return;
    }
    app_api
      .post("/create", {
        author,
        width,
        height,
        url,
        download_url,
      })
      .then((res) => {
        toast.success("Project uploaded successfully");
        setAuthor("");
        setWidth("");
        setHeight("");
        setUrl("");
        setDownload_url("");
        getData();
        setShowAddModal(false);
      })
      .catch((err) => {
        toast.error("Error in uploading project");
      });
  };
  return (
    <div className="h-screen w-screen z-50 fixed flex justify-center items-center top-0 left-0 bg-black bg-opacity-20 backdrop-blur-sm">
      <div className="h-fit w-1/2 p-2 lg:p-5 flex flex-col justify-center gap-2 items-center bg-white relative rounded-lg">
        <div className="font-semibold text-secondary-800 text-lg w-full justify-between flex items-center">
          <div className="flex w-fit items-center tracking-tighter gap-4 justify-center h-full">
            <div>Add a project</div>
            <div className="w-fit h-fit hidden lg:flex p-1 bg-primary-100 rounded-lg">
              <svg
                width="16"
                height="16"
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
          </div>
          <div
            className="absolute top-2 md:top-4 right-2 md:right-4 cursor-pointer p-1 w-fit h-fit rounded-full z-50"
            onClick={() => {
              setShowAddModal(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
          </div>
        </div>
        <div className="mb-3 mt-1 w-full h-[1px] bg-secondary-800 bg-opacity-20" />
        <Input
          label={"Author"}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          type={"text"}
        />
        <Input
          label={"Width"}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
          type={"text"}
        />
        <Input
          label={"Height"}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          type={"text"}
        />
        <Input
          label={"Url"}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          type={"url"}
        />
        <Input
          label={"Download Url"}
          onChange={(e) => {
            setDownload_url(e.target.value);
          }}
          type={"url"}
        />
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] flex items-center gap-3"
          type="button"
          onClick={() => {
            createProject();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            ></path>
          </svg>
          Upload Project
        </button>
      </div>
    </div>
  );
};

export default AddModal;
