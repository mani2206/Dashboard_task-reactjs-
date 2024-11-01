import React, { useState } from 'react';

import Table from '../baseComponents/Table';
import Pagination from '../baseComponents/Pagination';

const data = [
  { name: 'Samantha W.', id: '123456789', userName: 'User Name', amount: '$50,036' },
  { name: 'Mankandan M.', id: '123456789', userName: 'User Name', amount: '$50,036' },
  { name: 'Vijay V.', id: '123456789', userName: 'User Name', amount: '$50,036' },
  
];

const columns = [
  { label: 'Name', accessor: 'name' },
  { label: 'ID', accessor: 'id' },
  { label: 'User', accessor: 'userName' },
  { label: 'Amount', accessor: 'amount' },
];

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-3 bg-gray-100">
      <Table columns={columns} data={currentData} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default PaginatedTable;
