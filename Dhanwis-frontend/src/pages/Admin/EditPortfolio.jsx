import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePortfolio } from '../../context/AminContext/PortfolioContext';
import { AuthContext } from '../../context/AminContext/AuthContext';
import InputField from '../../components/Admin/InputField';

const EditPortfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { portfolios, editPortfolio,loading } = usePortfolio();
  const { adminToken } = useContext(AuthContext);

  const [work, setWork] = useState('website');
  const [formData, setFormData] = useState({
    project_name: '',
    link: '',
    project_discription: '',
    image: null,
  });

  useEffect(() => {
    const existing = portfolios.find((item) => String(item.id) === id);
    if (existing) {
      setWork(existing.work);
      setFormData({
        project_name: existing.project_name || '',
        link: existing.link || '',
        project_discription: existing.project_discription || '',
        image: null, // Don't prefill file input
      });
    }
  }, [id, portfolios]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setWork(selected);
    setFormData((prev) => ({
      ...prev,
      project_name: '',
      link: '',
      project_discription: '',
      image: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('work', work);
    data.append('project_name', formData.project_name);
    data.append('link', formData.link);
    data.append('project_discription', formData.project_discription);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await editPortfolio(id, data, adminToken);
      alert('Portfolio updated successfully!');
      navigate('/admin/viewportfolio'); // Change path if needed
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update portfolio');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white shadow-lg max-w-md rounded-xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Edit Portfolio</h2>

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

      <InputField
        label="Project Name"
        type="text"
        name="project_name"
        value={formData.project_name}
        onChange={handleChange}
        placeholder="Enter project name"
      />

      {work === 'website' && (
        <>
          <InputField
            label="Link"
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="https://example.com"
          />

          <div>
            <label className="block text-gray-500 font-medium mb-1">Project Description</label>
            <textarea
              name="project_discription"
              value={formData.project_discription}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </>
      )}

      <InputField
        label="Upload Image"
        type="file"
        name="image"
        onChange={handleChange}
        accept="image/*"
      />

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-800 transition"
      >
       {loading?'Updating...':'Update'} 
      </button>
    </form>
  );
};

export default EditPortfolio;
