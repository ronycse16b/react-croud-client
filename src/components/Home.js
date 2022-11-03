import React, { useState } from 'react';
import { Link ,useLoaderData} from 'react-router-dom';
import UserData from './UserData';

const Home = () => {

  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);



  return (
    <section>   <div className='border-2 shadow-lg lg:mt-20'>
      <h1 className='text-center py-4 font-bold text-cyan-900 text-2xl'>REACT-CRUD OPEARTION WITH MONGODB</h1>
      <div className="overflow-x-auto ">
      <table className="table w-full ">

<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>Action</th>
  </tr>
</thead>
{
          displayUsers.map(user => <UserData key={user._id} user={user} setDisplayUsers={setDisplayUsers} displayUsers={displayUsers}></UserData> )
        }
</table>
       
      </div>
      
    </div>
<div className='mt-5'>
<Link to='/users/add' className="btn btn-info">Add Data</Link>
</div>

    </section>
  );
};

export default Home;