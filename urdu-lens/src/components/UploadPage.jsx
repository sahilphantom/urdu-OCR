import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CameraIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

function UploadPage({ setShowLoader }) {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {
    if (file) {
      setShowLoader(true);
      setTimeout(() => {
        setShowLoader(false);
        navigate(`/results?image=${encodeURIComponent(URL.createObjectURL(file))}`);
      }, 5000);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-text-primary mb-4">Urdu Lens</h1>
        <p className="text-xl text-text-secondary">Upload an image to extract Urdu text</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div
          className={`border-4 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-primary bg-primary-light bg-opacity-10' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <ArrowUpTrayIcon className="w-16 h-16 text-primary mb-4" />
            <span className="text-lg font-medium text-text-primary mb-2">
              Drag and drop your image here
            </span>
            <span className="text-sm text-text-secondary mb-4">or click to upload</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Choose File
            </motion.button>
          </label>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-text-secondary mb-4">Or use your device camera</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-full font-medium flex items-center justify-center transition-colors duration-200"
        >
          <CameraIcon className="w-5 h-5 mr-2" />
          Take a Photo
        </motion.button>
      </motion.div>
    </div>
  );
}

export default UploadPage;

