import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SinglePageUser from "../../../assets/Images/singlePageUser.svg";
import SinglePageTel from "../../../assets/Images/singlePageTel.svg";
import SinglePageEmail from "../../../assets/Images/singlePageEmail.svg";

const TeachersDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacher = JSON.parse(window.localStorage.getItem("user")).find(
    (teacher) => teacher.id === parseInt(id)
  );

  if (!teacher) {
    return <p className="text-center text-red-500">Teacher not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <nav className="mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 flex items-center"
        >
          <ArrowBackIosNewIcon />
          <span className="ml-2">Back</span>
        </button>
        <button className="text-blue-500 hover:text-blue-600">Log out</button>
      </nav>
      <h1 className="text-4xl font-bold text-center mb-6">Teacher Details</h1>
      <div className="flex flex-col items-center mb-6">
        <img
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
          src={teacher.avatarImg}
          alt={teacher.name}
        />
        <h2 className="text-3xl font-semibold mt-4">{teacher.name}</h2>
        <p className="text-xl text-gray-500">{teacher.subject}</p>
      </div>
      <div className="space-y-4 text-center">
        <p className="text-xl font-medium">
          Age: <span className="font-normal">{teacher.age}</span>
        </p>
        <p className="text-xl font-medium">
          Gender: <span className="font-normal">{teacher.gender}</span>
        </p>
        <p className="text-xl font-medium">
          About:
          <span className="font-normal">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </span>
        </p>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <img src={SinglePageUser} alt="User Icon" />
        <img src={SinglePageTel} alt="Phone Icon" />
        <img src={SinglePageEmail} alt="Email Icon" />
      </div>
    </div>
  );
};

export default TeachersDetails;
