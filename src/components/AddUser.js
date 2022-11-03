import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [alert,setAlert] = useState(null);

  const handelAddUser = (event) => {

    event.preventDefault();

    fetch('https://crud-server-weld.vercel.app/users', {


      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)


    }).then(res=>res.json())
     .then(data=>{ console.log(data)
      if(data.acknowledged){
         setAlert('Data Instered Successfully')
         event.target.reset();
         navigate('/');
      }

     })
      

     

  }


  const handelInputBlur = event => {
    
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user }
    newUser[field] = value;
    setUser(newUser);

  }

  return (
    <div className="container mx-auto ">
      <div className="flex justify-center px-6 my-12 ">

        <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl border-2">

          <div
            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg "
            style={{ backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2017/07/01/19/48/background-2462434_960_720.jpg" + ")" }}
          ></div>

          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 font-bold  text-2xl text-center">Your Information!</h3>
            <h3 className=" text-2xl  font-bold text-black  text-center bg-amber-300">{alert}</h3>
            
            <form onSubmit={handelAddUser} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                    First Name
                  </label>
                  <input onBlur={handelInputBlur}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName" name='fname'
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                    Last Name
                  </label>
                  <input onBlur={handelInputBlur}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name" name='lname'
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input onBlur={handelInputBlur}
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email" name='email'
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
                  </label>
                  <input onBlur={handelInputBlur}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password" name='password'
                    placeholder="******************"
                  />
                  <p className="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div className="md:ml-2">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                    Confirm Password
                  </label>
                  <input onBlur={handelInputBlur}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password" name='cpassword'
                    placeholder="******************"
                  />
                </div>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save Data
                </button>
              </div>
              <hr className="mb-6 border-t" />

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;