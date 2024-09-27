import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Pagenation() {
  const {page,handlePageChange,totalPages} = useContext(AppContext);
  
  console.log(handlePageChange);
  
  return (
    <div className="flex  items-center justify-center w-full py-2 shadow-md border-2 border-gray-300">
      <div className="flex  items-center justify-between w-1/3 ">
        <div className="flex gap-5">
          {page > 1 && (
            <button
              className="border-2 border-gray-400 rounded  px-3"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="border-2 border-gray-400 rounded  px-3"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
