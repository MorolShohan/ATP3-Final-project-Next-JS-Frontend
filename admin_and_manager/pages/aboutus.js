import Link from "next/link";
import Layout from "./Layout/layout";
import Title from "./Layout/title";
export default function About() {
    return (
      <>
          <Title page="About"> </Title>
      <Layout>
      <div className="container mx-auto p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod
            libero nec erat bibendum, a fermentum nunc ultricies.
          </p>

          <div className="flex justify-center items-center mb-8">
            <img
              src="/shohan.jpg" // Replace with your actual image path
              alt="About Us"
              className="rounded-lg shadow-md object-cover h-64 w-full sm:w-2/3 md:w-1/2"
            />
          </div>

          <div className="text-left">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod
              libero nec erat bibendum, a fermentum nunc ultricies.
            </p>

            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-8">
              <li>Quality First</li>
              <li>Customer Satisfaction</li>
              <li>Innovation</li>
              <li>Integrity</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod
              libero nec erat bibendum, a fermentum nunc ultricies.
            </p>
          </div>
        </div>
    </Layout>
      </>
    )
  }
  