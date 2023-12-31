import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import NavBar from "../Layout/navbar";
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
});
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
});
import AdminUpdateForm from '../updateadminform';
import { useRouter } from 'next/router';

export default function AllAdmin() {
  const [jsonData, setJsonData] = useState(null);
  const [selectedAdmin, setSelectedAdmin] = useState(null); 
  const router = useRouter();
  useEffect(() => {
    if(sessionStorage.getItem('email')==null)
    {
        router.push('/login')
    }
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/findalladmin",
        {
          withCredentials: true
        }
      );
      const jsonData = response.data;
      console.log(jsonData);
      setJsonData(jsonData);
    } catch (error) {
      console.error(error);
    }
  }
async function deleteadmin(id)
{
  try {
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/deleteadmin/" +id,
      {
        withCredentials: true
      }
    );
    fetchData();
  } catch (error) {
    console.error(error);
  }
}


async function updateAdmin(id) {
  setSelectedAdmin(id);
}

async function handleUpdateAdmin(updatedAdminData) {
  try {
    
    const response = await axios.put(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/updateadmin/" + updatedAdminData.id,
      updatedAdminData,
      {
        withCredentials: true,
      }
    );
    setSelectedAdmin(null);
    fetchData(); 
  } catch (error) {
    console.error(error);
  }
}
  const renderTable = (jsonData) => {
    return (
      <table className="min-w-full bg-black border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-4">ID</th>
            <th className="py-2 px-4 border-4">Name</th>
            <th className="py-2 px-4 border-4">Email</th>
            <th className="py-2 px-4 border-4">Phone</th>
            <th className="py-2 px-4 border-4">Picture</th>
            <th className="py-2 px-4 border-4">Delete</th>
            <th className="py-2 px-4 border-4">Update</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td className="py-3 px-7 border-4">{item.id}</td>
              <td className="py-2 px-4 border-4">{item.fullname}</td>
              <td className="py-2 px-4 border-4">{item.email}</td>
              <td className="py-2 px-4 border-4">{item.phone}</td>
              <td className="py-2 px-4 border-4">{item.id}
              <div className="w-20 rounded-full">
                <img src={'http://localhost:3000/admin/getimage/' + item.filenames}></img> </div>
              </td>
              <td className="py-3 px-7 border-4">
                <button onClick={()=>deleteadmin(item.id)}>Delete</button>
                
                {}</td>

                <td className="py-3 px-7 border-4">
                <button onClick={() => updateAdmin(item.id)}>Update</button>
                
                {}</td>

                
            </tr>
          ))}
        </tbody>
      </table>

      
    );
    
  };

  return (
    <>
      <Title page="ALL Admin"> </Title>
      <Layout>
        <NavBar />
        <button className="btn btn-active btn-link"> <Link  className="link link-primary" href="/admindashboard/profile">Back To Dashboard</Link> </button>
       
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">All Admin Data</h2>
          {jsonData != null && renderTable(jsonData)}
        </div>

        {setSelectedAdmin  && (
          <AdminUpdateForm
            adminId={selectedAdmin}
            onUpdateAdmin={handleUpdateAdmin}
          />
        )}
        
      </Layout>
      
    </>
  );
}
