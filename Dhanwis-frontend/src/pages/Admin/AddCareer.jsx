import React, { useContext, useState } from 'react';
import { CareerContext } from '../../context/AminContext/CareerContext';

function AddCareer() {
  const { createCareer } = useContext(CareerContext);

  const [formData, setFormData] = useState({
    job: '',
    discription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.job || !formData.discription) {
      alert('Please fill out all fields');
      return;
    }

    const result = await createCareer(formData);

    if (result.success) {
      alert(result.message || 'Career added successfully!');
      setFormData({ job: '', discription: '' });
    } else {
      alert(result.message || 'Failed to add career');
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-2xl max-w-md mx-auto space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Add Career</h1>

        <div>
          <label className="block text-gray-500 font-medium mb-1">
            Select Category
          </label>
          <select
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select one</option>
            <option value="Python Developer">Python Developer</option>
            <option value="Mern Stack">MERN Stack</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Graphic Design">Graphic Designer</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-500 font-medium mb-1">
            Career Description
          </label>
          <textarea
            name="discription"
            value={formData.discription}
            onChange={handleChange}
            rows="8"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCareer;
