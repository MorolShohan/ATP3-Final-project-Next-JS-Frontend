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

export default function AllAdmin() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
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

  const renderTable = (jsonData) => {
    return (
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-4">ID</th>
            <th className="py-2 px-4 border-4">Name</th>
            <th className="py-2 px-4 border-4">Email</th>
            <th className="py-2 px-4 border-4">Phone</th>
            <th className="py-2 px-4 border-4">Picture</th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              <td className="py-3 px-7 border-4">{item.id}</td>
              <td className="py-2 px-4 border-4">{item.fullname}</td>
              <td className="py-2 px-4 border-4">{item.email}</td>
              <td className="py-2 px-4 border-4">{item.phone}</td>
              <td className="py-2 px-4 border-4">{item.filenames}
                <Link href={"adminprofile/" + item.id}>
                  
                </Link>
              </td>
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
          <h2 className="text-xl font-semibold mb-4">All Admin Data</h2>
          {jsonData != null && renderTable(jsonData)}
        </div>
        
      </Layout>
      
    </>
  );
}
