import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Upload = () => {
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    // Handle the dropped file (photo or video)
    handleFileUpload(file);
  };

  const handleFileUpload = (file) => {
    // Show loading indicator
    setLoading(true);

    // Simulate file upload delay of at least 3 seconds
    setTimeout(() => {
      // File upload logic here
      console.log(file);
      
      // Hide loading indicator
      setLoading(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const handleClick = () => {
    console.log('Real-time link uploaded');
    // Handle the real-time link submission
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-5 pt-10">
        <div className="flex justify-around items-center gap-5">
          <div
            className={`p-5 border-2 h-[300px] w-[300px] flex justify-center items-center border-dashed rounded ${dragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="photo-upload"
              onChange={handleInputChange}
            />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <NavLink
                className={(e) =>
                  e.isActive
                    ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
                    : 'bg-gray-700 text-gray-200 py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300'
                }
                to="#"
              >
                <button>Photo</button>
              </NavLink>
            </label>
          </div>

          <div
            className={`p-5 border-2 h-[300px] w-[300px] border-dashed flex justify-center items-center rounded ${dragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="video/*"
              className="hidden"
              id="video-upload"
              onChange={handleInputChange}
            />
            <label htmlFor="video-upload" className="cursor-pointer">
              <NavLink
                className={(e) =>
                  e.isActive
                    ? 'bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300'
                    : 'bg-gray-700 text-gray-200 py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300'
                }
                to="#"
              >
                <button>Video</button>
              </NavLink>
            </label>
          </div>
        </div>

        <div>
          <input
            type="text"
            placeholder="Real-time link"
            className="border text-black border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:ring-blue-300"
            onBlur={handleClick}
          />
        </div>

        {loading && (
          <div className="mt-5 text-blue-500">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
