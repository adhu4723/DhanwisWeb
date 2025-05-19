import React, { useState, useContext } from 'react';
import { usePortfolio } from '../../context/AminContext/PortfolioContext';
import { AuthContext } from '../../context/AminContext/AuthContext';
import InputField from '../../components/Admin/InputField';
import PortfolioTable from '../../components/Admin/PortfolioTable';

const AddPortfolio = () => {
  const { addPortfolio,fetchPortfolios ,portfolios,deletePortfolios} = usePortfolio();
  const { adminToken } = useContext(AuthContext);

  const [work, setwork] = useState('website');
  const [formData, setFormData] = useState({
    project_name: '',
    link: '',
    description: '',
    image: null,
  });

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setwork(selected);
    setFormData({
      project_name: '',
      link: '',
      project_discription: '',
      image: null,
      
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('work', work);
    data.append('project_name', formData.project_name);
    data.append('link', formData.link);
    data.append('project_discription', formData.project_discription);
    data.append('image', formData.image);

    try {
      console.log([...data.entries()]); // Debug
      await addPortfolio(data, adminToken);
      alert('Portfolio added successfully');

      setFormData({
        project_name: '',
        link: '',
        project_discription: '',
        image: null,
      });
    } catch (error) {
      alert('Error adding portfolio');
      console.error(error);
    }
  };

  return (
    <>
    
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white shadow-lg max-w-md rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Add to Portfolio</h2>

      <div>
        <label className="block text-gray-500 font-medium mb-1">Select Category</label>
        <select
          name="work"
          value={work}
          onChange={handleCategoryChange}
          className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="website">Website</option>
          <option value="graphic design">Graphic Design</option>
        </select>
      </div>

      {work === 'website' && (
        <>
          <InputField
            label="Project Name"
            type="text"
            name="project_name"
            value={formData.project_name}
            onChange={handleChange}
            placeholder="Enter project name"
          />

          <InputField
            label="Link"
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://example.com"
          />

          <div>
            <label className="block text-gray-500 font-medium mb-1">project_discription</label>
            <textarea
              name="project_discription"
              value={formData.project_discription}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
           <InputField
        label="Upload Image"
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
      />
        </>
      )}
  {work === 'graphic design' && (
    <>
     <InputField
            label="Project Name"
            type="text"
            name="project_name"
            value={formData.project_name}
            onChange={handleChange}
            placeholder="Enter project name"
          />
      <InputField
        label="Upload Image"
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
      />
     
          </>
)}
       
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-800 transition"
      >
        Submit
      </button>
    </form>
  

    </>
  );
};

export default AddPortfolio;
