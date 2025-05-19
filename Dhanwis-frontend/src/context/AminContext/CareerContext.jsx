// src/context/CareerContext.js

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CareerContext = createContext();

export const CareerProvider = ({ children }) => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_BASE = 'http://127.0.0.1:8000/myapp/dhanwis/careers/';

  // Helper: get token and prepare headers
  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      headers: {
        Authorization: `token ${token}`,
      },
    };
  };

  // Fetch all careers
  const fetchCareers = async () => {
    try {
      const response = await axios.get(API_BASE, getAuthHeaders());
      setCareers(response.data);
      console.log('careerdata', response.data);
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  // Create a new career (Updated to return response)
  const createCareer = async (careerData) => {
    try {
      const response = await axios.post(API_BASE, careerData, getAuthHeaders());
      setCareers((prev) => [...prev, response.data]);

      return {
        success: true,
        message: 'Career created successfully!',
        data: response.data,
      };
    } catch (error) {
      console.error('Error creating career:', error);

      let message = 'Something went wrong.';
      if (error.response && error.response.data) {
        message = error.response.data.message || JSON.stringify(error.response.data);
      }

      return {
        success: false,
        message,
      };
    }
  };

  // Update a career
  const updateCareer = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_BASE}${id}/`, updatedData, getAuthHeaders());
      setCareers((prev) =>
        prev.map((career) => (career.id === id ? response.data : career))
      );
    } catch (error) {
      console.error('Error updating career:', error);
    }
  };

  // Delete a career
  const deleteCareer = async (id) => {
    try {
      await axios.delete(`${API_BASE}${id}/`, getAuthHeaders());
      setCareers((prev) => prev.filter((career) => career.id !== id));
    } catch (error) {
      console.error('Error deleting career:', error);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);

  return (
    <CareerContext.Provider
      value={{
        careers,
        loading,
        fetchCareers,
        createCareer,
        updateCareer,
        deleteCareer,
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};
