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
import ManagerUpdateForm from '../updatemanagerform';

export default function AllManager() {
  const [jsonData, setJsonData] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/getallmanagerwithadmin",
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

  async function deleteamanager(id)
{
  try {
    const response = await axios.delete(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/deletemanager/" +id,
      {
        withCredentials: true
      }
    );
    fetchData();
  } catch (error) {
    console.error(error);
  }
}

async function updateManager(id) {
  setSelectedManager(id);
}

async function handleUpdateManager(updatedManagerData) {
  try {
    // Make a PUT or PATCH request to update the admin data
    const response = await axios.put(
      process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/updatemanager/" + updatedManagerData.id,
      updatedManagerData,
      {
        withCredentials: true,
      }
    );
    setSelectedManager(null);
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
            <th className="py-2 px-4 border-4">Admin ID</th>
            <th className="py-2 px-4 border-4">Delete</th>
            <th className="py-2 px-4 border-4">Update</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td className="py-3 px-7 border-4">{item.id}</td>
              <td className="py-2 px-4 border-4">{item.name}</td>
              <td className="py-2 px-4 border-4">{item.email}</td>
              <td className="py-2 px-4 border-4">{item.address}</td>
              <td className="py-2 px-4 border-4">{item.admin.id}
                <Link href={"adminprofile/" + item.id}>
                  
                </Link>

              </td>
              <td className="py-3 px-7 border-4">
                <button onClick={()=>deleteamanager(item.id)}>Delete</button>
                
                {}</td>

                <td className="py-3 px-7 border-4">
                <button onClick={() => updateManager(item.id)}>Update</button>
                
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
        <Link  className="link link-primary" href="/admindashboard/profile">Back To Dashboard</Link>
       
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-4">All Manager Data</h2>
          {jsonData != null && renderTable(jsonData)}
        </div>
        {setSelectedManager  && (
          <ManagerUpdateForm
            managerId={selectedManager}
            onUpdateManager={handleUpdateManager}
          />
        )}
        
      </Layout>
      
    </>
  );
}
