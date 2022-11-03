import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const UserData = ({ user,setDisplayUsers ,displayUsers}) => {

    const { fname, email, password,_id } = user;

    const handeEdit =( _id,fname) =>{
        
        const agree = window.confirm(`Are you sure you want to Delete"${fname}"`)
         if (agree) {
            // console.log('deleting user with id: ', user._id)
            fetch(`https://crud-server-weld.vercel.app/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                 console.log(data)

                 if(data.deletedCount>0){
                    alert('Deleted successfully');
                     
                    const remaingData = displayUsers.filter(usr => usr._id !== user._id);

                    setDisplayUsers(remaingData)

                 }
                    
                });
        }
    }

    return (



        <tbody>

            <tr>
                <th></th>
                <td>{fname}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>
               <Link to={`/update/${_id}`} > <p className='btn btn-warning btn-sm mr-2'>Edit</p></Link> 
                <a  onClick={()=>handeEdit(_id,fname)} className='btn btn-error btn-sm'>Delete</a>
                </td>
              






            </tr>
        </tbody>


    );
};

export default UserData;

