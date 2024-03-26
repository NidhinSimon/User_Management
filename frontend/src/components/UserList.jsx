import React, { useEffect, useState } from 'react'

import UserNavbar from './Users/Navbar/Navbar';
import {  Modal, ModalBody, ModalFooter } from '@nextui-org/react';
import {Button} from "@nextui-org/react";
import { UserIcon } from './UserIcon';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const UserList = () => {

    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


   
  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
  };

  useEffect(() => {
    getUsers(); 
  }, []);

    const handleDeleteUser = async () => {
        try {
           
         const res= await axios.delete(`http://localhost:5000/delete/${selectedUser._id}`);
          if(res.data.message==='user deleted')
          {
            toast.success("User deleted")
            getUsers(); 
            closeModal();
          }
        
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
    
      const openModal = (user) => {
    
        setSelectedUser(user);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setSelectedUser(null);
        setIsModalOpen(false);
      };
    return (

        <>
            <UserNavbar />
<div className='w-full h-full px-10 '>
    <Toaster/>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-3 border  ">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                              UserName
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                             Mobile
                            </th>
                            <th scope="col" className="px-6 py-3">
                             Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                             Department
                            </th>
                            <th scope="col" className="px-6 py-3">
                             Date OF birth
                            </th>
                            <th scope="col" className="px-6 py-3">
                             Date OF Join
                            </th>
                          
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <>
                                    <tr key={index } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.name}
                                        </th>
                                        <td className="px-6 py-4">{user.email}</td>
                                        <td className="px-6 py-4">{user.mobile}</td>
                                        <td className="px-6 py-4">{user.Role}</td>
                                        <td className="px-6 py-4">{user.Department}</td>
                                        <td className="px-6 py-4">{new Date(user.dob).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">{new Date(user.dateOfjoin).toLocaleDateString()}</td>
                                        <td className="px-6 py-4 text-right">
                                        <Button   onClick={() => openModal(user)} className="" color="danger" variant="bordered" startContent={<UserIcon />} size="small">
      Delete user
    </Button>
                                        </td>
                                    </tr></>
                            ))
                        }


                    </tbody>
                   
                </table>
            </div>
            </div>
            {isModalOpen && (
        <div
          id="popup-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full bg-gray-900 bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
                onClick={closeModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this User?
                </h3>
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={handleDeleteUser}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={closeModal}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

export default UserList
