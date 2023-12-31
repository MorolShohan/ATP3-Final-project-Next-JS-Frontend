import Link from "next/link";
import dynamic from 'next/dynamic'
import NavBar from "../Layout/navbar";
import LogoutButton from "../logout";

const Layout = dynamic(() => import('../Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('../Layout/title'), {
  ssr: false,
})


export default function Profile( ) {

//  
  return (
    <>

    <Title page="Profile"> </Title>
  <Layout>
    <NavBar/>

    <button className="btn btn-active btn-link"><Link  className="link link-primary" href="/admindashboard/alladmin">List Of Admins</Link></button>
<br/>
 <button className="btn btn-active btn-link"><Link  className="link link-primary" href="/admindashboard/allmanager">List Of Managers</Link></button>
<br/>
 
 <button className="btn btn-active btn-link"><Link  className="link link-primary" href="/admindashboard/adminsearch">Search Admin By ID</Link></button>
 <br/>
 <button className="btn btn-active btn-link"><Link  className="link link-primary" href="../manager/addmanager">Add Manager</Link></button>
 <br/>
 <button className="btn btn-active btn-link"><Link  className="link link-primary" href="/admindashboard/getimagebyname">Search Admin Image</Link></button>
 <br/>
 <button className="btn btn-active btn-link"><Link  className="link link-primary" href="/admindashboard/searchadminbyemail">Search Admin By Email</Link></button>
 <br/>
 <button className="btn btn-active btn-link"><Link  className="link link-primary" href="/admindashboard/searchmanagerbyadminid">Search Manager By AdminID</Link></button>
 <br/>
 <button className="btn btn-active btn-link"><LogoutButton/></button>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>

</Layout>
  
    </>
  )
}







