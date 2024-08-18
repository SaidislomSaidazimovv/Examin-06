import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TeachersHomeMainImg from "../../../assets/Images/TeachersHomeMainImg.png";
import bx_support from "../../../assets/Images/bx_support.svg";
import chevronDown from "../../../assets/Images/chevron-down.svg";
import Search from "../../../assets/Images/search.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TeachersHome = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    const localUser = JSON.parse(window.localStorage.getItem("user"));
    setUser(localUser || []);
  }, [setUser]);

  const handleSearch = (e) => {
    const value = e.target.value;
    const localUser = JSON.parse(window.localStorage.getItem("user"));
    const filteredUser = localUser.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setUser(filteredUser);
  };

  const handleDelete = (id) => {
    const localUser = JSON.parse(window.localStorage.getItem("user"));
    const updatedUser = localUser.filter((item) => item.id !== id);
    setUser(updatedUser);
    window.localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Teacher deleted successfully!");
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
    setIsModalOpen(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = user.map((item) =>
      item.id === selectedTeacher.id ? selectedTeacher : item
    );
    setUser(updatedUser);
    window.localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Teacher updated successfully!");
    setIsModalOpen(false);
  };

  const handleMoreDetails = (id) => {
    navigate(`/teacher/${id}`);
  };

  return (
    <div>
      <ToastContainer position="top-center" reverseOrder={false} />
      <div className="flex items-end justify-between mb-[21px]">
        <h3 className="text-[#4F4F4F] text-[20px] font-medium">Teachers</h3>
        <div className="flex flex-col space-y-[14px]">
          <button
            onClick={() => navigate("/add-teachers")}
            className="text-[14] inline-block text-center font-semibold text-white bg-[#509CDB] rounded-[6px] py-[12px] w-[130px] hover:opacity-60 transition-[0.3s]"
          >
            Add Teachers
          </button>
        </div>
      </div>
      <div className="relative">
        <label>
          <input
            onChange={handleSearch}
            className="w-full pl-[48px] py-[16px] pr-10 bg-[#FCFAFA] border-transparent border-[1px] rounded-md outline-none "
            type="text"
            placeholder="Search for a teacher by name or email"
          />
          <img
            className="absolute left-[16px] top-[20px]"
            src={Search}
            alt="search icon here!"
            width={16}
            height={16}
          />
        </label>
      </div>
      <table className="w-full mt-[27px]">
        <thead>
          {user.length ? (
            <tr>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                User Img
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Name
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Subject
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Class
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Email address
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Gender
              </th>
              <th className="text-[#424242] text-[15px] py-2 font-bold">
                Action
              </th>
            </tr>
          ) : (
            ""
          )}
        </thead>
        <tbody>
          {user.length ? (
            user.map((item) => (
              <tr key={item.id} className="">
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  <img
                    className="mx-auto"
                    src={item.avatarImg}
                    alt="avatar img here!"
                    width={40}
                    height={40}
                  />
                </td>
                <td className=" py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.name}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.subject}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.class}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.email}
                </td>
                <td className="py-3 font-medium text-center text-[#4F4F4F] ">
                  {item.gender}
                </td>
                <td className="text-[#4F4F4F] mt-2 py-3 flex items-center font-medium justify-center space-x-5">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex items-center justify-center cursor-pointer text-red-500"
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex items-center justify-center cursor-pointer text-blue-500"
                  >
                    <EditIcon />
                  </button>
                  <button
                    onClick={() => handleMoreDetails(item.id)}
                    className="flex items-center justify-center cursor-pointer text-gray-500"
                  >
                    <MoreHorizIcon />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                <div className="w-full relative text-center pt-[14px] bg-[#FCFAFA] shadow-md pb-[50px]">
                  <img
                    className="mx-auto mb-3"
                    src={TeachersHomeMainImg}
                    alt="img"
                    width={340}
                    height={255}
                  />
                  <h4 className="text-[28px] text-[#4F4F4F] font-semibold my-[5px]">
                    No Teachers at this time
                  </h4>
                  <p className="text-[14px] text-[#4F4F4F] font-medium">
                    Teachers will appear here after they enroll in your school.{" "}
                  </p>
                  <button className="flex items-center  justify-center space-x-3 w-[171px] bg-[#152259] rounded-[30px] text-center py-[16px] absolute right-[35px] bottom-[40px] hover:opacity-60  shadow-xl">
                    <img src={bx_support} alt="icon" width={16} height={16} />
                    <span className="text-[16px] font-semibold text-[#FCFAFA]">
                      Support
                    </span>
                    <img src={chevronDown} alt="icon" width={16} height={16} />
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[500px]">
            <h3 className="text-lg font-semibold mb-4">Edit Teacher</h3>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={selectedTeacher.name}
                  onChange={(e) =>
                    setSelectedTeacher({
                      ...selectedTeacher,
                      name: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  value={selectedTeacher.subject}
                  onChange={(e) =>
                    setSelectedTeacher({
                      ...selectedTeacher,
                      subject: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Class
                </label>
                <select
                  value={selectedTeacher.class}
                  onChange={(e) =>
                    setSelectedTeacher({
                      ...selectedTeacher,
                      class: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="N65">N65</option>
                  <option value="N55">N55</option>
                  <option value="N50">N50</option>
                  <option value="N45">N45</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={selectedTeacher.email}
                  onChange={(e) =>
                    setSelectedTeacher({
                      ...selectedTeacher,
                      email: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  value={selectedTeacher.gender}
                  onChange={(e) =>
                    setSelectedTeacher({
                      ...selectedTeacher,
                      gender: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachersHome;
