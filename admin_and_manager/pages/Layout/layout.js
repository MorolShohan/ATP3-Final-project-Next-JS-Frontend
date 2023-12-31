import Footer from './footer'
import Header from './header'


export default function Layout (
    {children}
){
    return (
       
        <>
       
<Header/>
<div className=' min-h-[78.5vh]'>
    {children}
</div>
 
<Footer/>

        </>
      

    )
}