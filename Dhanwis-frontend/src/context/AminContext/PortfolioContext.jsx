// src/context/PortfolioContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('adminToken');

  const API_URL = 'http://127.0.0.1:8000/myapp/dhanwis/portfolio/';

  // Get all portfolios
  const fetchPortfolios = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setPortfolios(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch portfolios');
    } finally {
      setLoading(false);
    }
  };

  // Delete portfolio
  const deletePortfolios = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}${id}/`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      fetchPortfolios();
    } catch (err) {
      setError(err.message || 'Failed to delete portfolio');
    } finally {
      setLoading(false);
    }
  };

  // Add new portfolio
  const addPortfolio = async (data) => {
    try {
      const headers = token ? { Authorization: `token ${token}` } : {};
      const response = await axios.post(API_URL, data, { headers });
      setPortfolios((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to add portfolio');
      throw err;
    }
  };

  // Edit portfolio
  const editPortfolio = async (id, updatedData) => {
    console.log('updated data',updatedData,id);
    setLoading(true);
    
    try {
      const headers = token ? { Authorization: `token ${token}` } : {};
      const response = await axios.put(`${API_URL}${id}/`, updatedData, { headers });

      // Update the local state
      setPortfolios((prev) =>
        prev.map((portfolio) =>
          portfolio.id === id ? response.data : portfolio
        )
      );
       fetchPortfolios();

      return response.data;
    } catch (err) {
      setError(err.message || 'Failed to edit portfolio');
      throw err;
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        portfolios,
        loading,
        error,
        fetchPortfolios,
        addPortfolio,
        deletePortfolios,
        editPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
