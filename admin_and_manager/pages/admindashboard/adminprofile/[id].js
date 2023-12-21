import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
import NavBar from "../../Layout/navbar";
const Layout = dynamic(() => import('../../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../../Layout/title'), {
  ssr: false,
})

export default function AllAdmin() {
    const [jsonData, setJsonData] = useState(null);
    const router=useRouter();
    const  adminid = router.query.id;

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
   
        try {
             const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT + "/admin/findadmin/"+adminid,
             {
                withCredentials: true
              }
             );
            const jsonData = response.data;
            console.log(jsonData)
            setJsonData(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    const printObject = (jsonData) => {
        return (
            <div className="flex flex-col items-center">
            <img
              src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/getimage/${jsonData.filenames}?size=small`}
              alt="Admin Image"
              className="rounded-full mb-4 h-44 w-44"
            />
            <table className="border-collapse border border-gray-400">
              <tbody>
                <tr>
                  <td className="border-2 border-gray-400 p-2 font-semibold">ID:</td>
                  <td className="border-2 border-gray-400 p-2">{jsonData.id}</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-400 p-2 font-semibold">Name:</td>
                  <td className="border-2 border-gray-400 p-2">{jsonData.fullname}</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-400 p-2 font-semibold">Email:</td>
                  <td className="border-2 border-gray-400 p-2">{jsonData.email}</td>
                </tr>
                <tr>
                  <td className="border-2 border-gray-400 p-2 font-semibold">Phone:</td>
                  <td className="border-2 border-gray-400 p-2">{jsonData.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      };

    return (

        <>
  <Title page="ALL Aadmin"> </Title>
  <Layout>
    <NavBar/>
            {jsonData != null &&
                printObject(jsonData)
            }
</Layout>
        </>
    );
}

