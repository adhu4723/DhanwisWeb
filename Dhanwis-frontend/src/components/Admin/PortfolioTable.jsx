import React, { useEffect } from 'react';
import { usePortfolio } from '../../context/AminContext/PortfolioContext';
import { Pencil ,Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

function PortfolioTable({ data, onEdit, onDelete }) {
      const { addPortfolio,fetchPortfolios ,portfolios,deletePortfolios} = usePortfolio();
    console.log("data",data);

 
    
  return (
    <div className="overflow-x-auto flex justify-center ">
      <table className="  border w-full  border-gray-500">
        <thead>
          <tr className="bg-gray-900 text-white text-left">
            <th className="p-3 border-b">Project Name</th>
            <th className="p-3 border-b">Link</th>
            <th className="p-3 border-b">Description</th>
            <th className="p-3 border-b">Type</th>
            <th className="p-3 border-b">Image</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {portfolios?.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center p-4">
                No portfolio items found.
              </td>
            </tr>
          ) : (
            portfolios.map((item) => (
              <tr key={item.id} className="border-b border-gray-500 hover:bg-gray-50">
                <td className="p-3">{item.project_name}</td>
                <td className="p-3">
                  <a href={item.link} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                    Open Link
                  </a>
                </td>
                <td className="p-3">{item.project_discription}</td>
                <td className="p-3 capitalize">{item.work}</td>
                <td className="p-3">
                  <img src={item.image} alt={item.project_name} className="h-16 w-24 object-cover rounded" />
                </td>
                <td className="p-3 space-x-2 flex mt-5">
                  <Link
                    to={`/admin/editportfolio/${item.id}`}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    <Pencil/>
                  </Link>
                  <button
                    onClick={() => deletePortfolios(item.id)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PortfolioTable;
