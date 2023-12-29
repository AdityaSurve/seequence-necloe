import React, { useState } from "react";

const Card = ({
  data,
  type,
  setShowUpdateModal,
  setShowDeleteModal,
  setId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, author, height, width, url, download_url } = data;

  return (
    <div
      className={`w-full flex z-0 flex-col items-center justify-center h-fit p-3 bg-white shadow-sm shadow-gray-500 rounded-lg relative transition-all cursor-pointer duration-300 ${
        isHovered && "scale-105"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={download_url}
        alt=""
        className="h-40 rounded-lg w-full object-cover"
      />
      <div
        className={`w-full h-fit flex flex-col items-center justify-center ${
          isHovered && "text-primary-500"
        }`}
      >
        <div className="w-full h-fit p-1 text-center text-lg font-bold">
          {author}
        </div>
        <div className="w-full h-fit tracking-tighter text-center text-sm">
          {width} x {height}
        </div>
      </div>
      {isHovered && (
        <div
          className="absolute top-5 right-5 cursor-pointer p-2 w-fit h-fit hover:bg-gray-50 hover:bg-opacity-20 text-white rounded-full z-50"
          onClick={() => {
            if (type === "download") {
              window.open(download_url, "_blank");
            }
            if (type === "delete") {
              setId(parseInt(id));
              setShowDeleteModal(true);
            }
          }}
          onMouseEnter={() => setIsHovered(true)}
        >
          {type === "download" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          )}
          {type === "delete" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          )}
        </div>
      )}
      {isHovered && type === "delete" && (
        <div
          className="absolute top-12 right-5 cursor-pointer p-2 w-fit h-fit hover:bg-gray-50 hover:bg-opacity-20 text-white rounded-full z-50"
          onClick={() => {
            setShowUpdateModal(true);
            setId(parseInt(id));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Card;
