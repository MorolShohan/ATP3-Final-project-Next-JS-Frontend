import Link from "next/link";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import('./Layout/layout'), {
  ssr: false,
})
const Title = dynamic(() => import('./Layout/title'), {
  ssr: false,
})



export default function Home( ) {
  return (
    <>
    
    <Title page="Home"> </Title>
<Layout>

<div className="join">
  <div>
    <div>
      <input className="input input-bordered join-item" placeholder="Search"/>
    </div>
  </div>
  <select className="select select-bordered join-item">
    <option disabled selected>Filter</option>
    <option>Admin</option>
    <option>Manager</option>
  </select>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">new</span> 
    <button className="btn join-item">Search</button>
  </div>
</div>

<div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>

          <div className="bg-neutral text-black p-8 rounded-md shadow-md">
            <p className="text-lg">Explore our latest products and find great deals!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Product Cards */}
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product 2</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product 3</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
            </div>
          </div>
        </div>

        
    </Layout>
    </>
  )
}
