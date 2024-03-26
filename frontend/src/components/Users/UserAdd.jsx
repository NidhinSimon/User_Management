import React, { useEffect } from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup'
import toast,{Toaster} from 'react-hot-toast';

import UserNavbar from './Navbar/Navbar';
import axios from 'axios';
const UserAdd = () => {
    const currentDate = new Date().toISOString().split('T')[0];

    const initialValues = {
        name: '',
        email: '',
        mobile: '',
        dob: '',
        dateOfjoin: '',
        Role: '',
        Department: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        mobile: Yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
        .required('Mobile is required'),
        dob: Yup.date().max(new Date(), 'Date of birth cannot be in the future').required('Date of birth is required'),
        dateOfjoin: Yup.date().required('Date of joining is required'),
        Role: Yup.string().required('Role is required'),
        Department: Yup.string().required('Please Select The Role ')
    });
useEffect(() => {

    console.log('Formik values before submission:', formik.values);
console.log('Formik errors before submission:', formik.errors);

}, [])
    const formik = useFormik({  
        
        
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
         
            console.log(values, "--------values-------")
            try {
                const res = await axios.post('http://localhost:5000/add', { ...values })
if(res.data.message==='user added successFully')
{
    
    toast.success("User Added ")
    formik.resetForm();
}else{
toast.error("Soemthing went Wrong")
}

            } catch (error) {
                console.log(error.message)
               
            }
        }
    })

    const rolesWithDepartments = [
        { role: 'Frontend Developper', department: 'IT ' },
        { role: 'Customer Manager', department: 'Sales' },
        { role: 'Tele Caller', department: 'Consulting' }

    ];

    const handleRoleChange = (selectedRole) => {
        const role = rolesWithDepartments.find((item) => item.role === selectedRole);
        if (role) {
            formik.setFieldValue('Department', role.department);
        } else {
            formik.setFieldValue('Department', '');
        }
    };
    return (
        <>
            <UserNavbar />


            <div className=' w-full flex justify-center align-middle h-[91vh]'>
                <div className='w-2/5 rounded-lg  mt-4 p-10 border-2   h-auto '>


<Toaster/>
                    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}
 >
                        <div className="mb-2 ">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                UserName
                            </label>
                            <input
                                type="text"
                                name='name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.name && formik.errors.name ? "border-red-500" : ""
                                    }`}
                          
                                required
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="text-red-500 text-xs">
                                    {formik.errors.name}
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.email && formik.errors.email ? "border-red-500" : ""
                                    }`}
                                placeholder="name@flowbite.com"
                                required
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-500 text-xs">
                                    {formik.errors.email}
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mobile
                            </label>
                            <input
                                type="number"
                                name='mobile'
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.email && formik.errors.email ? "border-red-500" : ""
                                    }`}
                   
                                required
                            />
                            {formik.touched.mobile && formik.errors.mobile && (
                                <div className="text-red-500 text-xs">
                                    {formik.errors.mobile}
                                </div>
                            )}
                        </div>

                        <div className="mb-2">
                            <label htmlFor="Dob" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Dob
                            </label>
                            <input
                                type="date"
                                name='dob'
                                max={currentDate}
                                value={formik.values.dob}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.dob && formik.errors.dob ? "border-red-500" : ""
                                    }`}

                                required
                            />
                            {formik.touched.dob && formik.errors.dob && (
                                <div className="text-red-500 text-xs">
                                    {formik.errors.dob}
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="dateOfjoin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                DateOfJoin
                            </label>
                            <input
                                type="date"
                                name='dateOfjoin'
                                value={formik.values.dateOfjoin}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.dateOfjoin && formik.errors.dateOfjoin ? "border-red-500" : ""
                                    }`}

                                required
                            />
                            {formik.touched.dateOfjoin && formik.errors.dateOfjoin && (
                                <div className="text-red-500 text-xs">
                                    {formik.errors.dateOfjoin}
                                </div>
                            )}
                        </div>
                        <div className='mb-2 '>
                            <label htmlFor='Role' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Role
                            </label>
                            <select
                                name='Role'
                                value={formik.values.Role}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    handleRoleChange(e.target.value);
                                }}
                                onBlur={formik.handleBlur}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.Role && formik.errors.Role ? 'border-red-500' : ''
                                    }`}
                                required
                            >
                                <option value='' disabled>
                                    Select a role
                                </option>
                                {rolesWithDepartments.map((role, index) => (
                                    <option key={index} value={role.role}>
                                        {role.role}
                                    </option>
                                ))}
                            </select>
                            {formik.touched.Role && formik.errors.Role && (
                                <div className='text-red-500 text-xs'>{formik.errors.Role}</div>
                            )}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='Department' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                Department
                            </label>
                            <input
                                type='text'
                                id='Department'
                                name='Department'
                                value={formik.values.Department}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                disabled={formik.values.Role !== ''}
                                className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light ${formik.touched.Department && formik.errors.Department ? 'border-red-500' : ''
                                    }`}
                                required={formik.values.Role === ''}
                            />
                            {formik.touched.Department && formik.errors.Department && (
                                <div className='text-red-500 text-xs'>{formik.errors.Department}</div>
                            )}
                        </div>
                        <button 
                        
                            type='submit'
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Submit
                        </button>
                    </form>


                </div>
            </div>
        </>
    )
}

export default UserAdd
