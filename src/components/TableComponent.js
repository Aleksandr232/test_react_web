import React from 'react';
import { useTable, useSortBy } from 'react-table';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Data from '../data/data.json';



const TableComponent = () => {
    const columns = React.useMemo(
      () => [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Name',
          accessor: 'name',
        },
        {
          Header: 'LocalDate',
          accessor: 'date',
        },
        {
          Header: 'SKU',
          accessor: 'sku',
        },
        {
          Header: 'Recipe',
          accessor: 'recipe',
        },
        {
          Header: 'CupSize',
          accessor: 'cupsize',
        },
        {
          Header: 'Staus',
          accessor: 'status',
        },
        {
          Header: 'Summed',
          accessor: 'summed',
        },
      ],
      []
    );
  
    const exportToExcel = () => {
      const formattedData = Data.map(item => ({
          ID: item.id,
          Name: item.name,
          LocalDate: item.date,
          SKU: item.sku,
          Recipe: item.recipe,
          CupSize: item.cupsize,
          Staus: item.status,
          Summed: item.summed,
      }));
  
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      const excelData = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });
  
      saveAs(new Blob([excelData], { type: "application/octet-stream" }), "DATA.xlsx");
    };
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable(
      {
        columns,
        data: Data,
      },
      useSortBy
    );
  
    return (
      <div  className="table-container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn_excel" onClick={exportToExcel}>Экспорт в Excel</button>
      </div>
    );
};

export default  TableComponent;
