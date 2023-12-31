import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminUpdateForm = ({ adminId, onUpdateAdmin }) => {
  const [adminData, setAdminData] = useState({

    fullname: '',
    email: '',
    password: '',
    myfile: '',
    phone: '',
  });

  useEffect(() => {
    // Fetch admin details when component mounts
    fetchAdminDetails();
  }, [adminId]);

  const fetchAdminDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/findadmin/${adminId}`,
        {
          withCredentials: true,
        }
      );
      const adminDetails = response.data;
      setAdminData(adminDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated admin data to the parent component
    onUpdateAdmin(adminData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="fullname"
          value={adminData.fullname}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={adminData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={adminData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        File:
        <input
          type="file"
          name="file"
          value={adminData.myfile}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={adminData.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button className="btn btn-outline btn-accent" type="submit">Update Admin</button>
    </form>
  );
};

export default AdminUpdateForm;
