import React, { useContext, useEffect } from 'react';
import { CareerContext } from '../../context/AminContext/CareerContext';
import { Pencil ,Trash } from 'lucide-react';
import { Link } from 'react-router-dom';

function CareerTable({ onEdit }) {
  const { careers, fetchCareers, deleteCareer } = useContext(CareerContext);

  useEffect(() => {
    fetchCareers();
  }, []);

  return (
    <div className="overflow-x-auto flex  justify-center">
      <table className=" border w-full border-gray-500 ">
        <thead>
          <tr className="text-white bg-gray-900 text-left">
            <th className="p-3 border-b">ID</th>
            <th className="p-3 border-b">Category</th>
            <th className="p-3 border-b">Description</th>
            <th className="p-3 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {careers.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No careers found.
              </td>
            </tr>
          ) : (
            careers.map((career) => (
              <tr key={career.id} className="border-b border-gray-500 hover:bg-gray-50">
                <td className="p-3">{career.id}</td>
                <td className="p-3 capitalize">{career.job}</td>
                <td className="p-3">{career.discription}</td>
                <td className="p-3 space-x-2 flex">
                  <Link
                    to={`/admin/editcareer/${career.id}`}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    <Pencil/>
                  </Link>
                  <button
                    onClick={() => deleteCareer(career.id)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    <Trash/>
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

export default CareerTable;
