import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ImageComponent = () => {
  const [adminId, setAdminId] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const fetchImageByAdminId = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/admin/getimagebyadminid/${adminId}`, {
        responseType: 'arraybuffer',
        withCredentials:true,
      });
      console.log(response);

      const base64Image = Buffer.from(response.data, 'binary').toString('base64');
      const imageSrc = `data:${response.headers['content-type']};base64,${base64Image}`;

      setImageUrl(imageSrc);
      setError(null);
    } catch (error) {
      console.error('Error fetching image by admin ID:', error);
      setImageUrl(null);
      setError('Error fetching image. Please try again.');
    }
  };

  return (
    <div>
      <button className="btn btn-active btn-link"> </button>
        <Link className="link link-primary" href="/admindashboard/profile">
          Back To Dashboard
        </Link>
        <br/>
        <br/>
      <label>Admin ID:</label>
      <br/>
      <br/>
      <input
        type="text"
        placeholder="Type here" className="input input-bordered input-info w-full max-w-xs"
        value={adminId}
        onChange={(e) => setAdminId(e.target.value)}
      />
      <button className="btn btn-outline btn-accent" onClick={fetchImageByAdminId}>Fetch Image</button>

      {imageUrl && (
        <div>
          <h2>Image</h2>
          <img src={imageUrl} alt="Admin Image" />
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default ImageComponent;
