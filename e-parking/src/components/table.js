import React from "react";
import PropTypes from "prop-types";

export default function Table({ data, columns, rowKey }) {
  const defaultPadding = {
    padding: 15,
  };

  const style = {
    border: "1px",
    margin: "auto",
    padding: defaultPadding,
    borderCollapse: "collapse"
  };

  return (
    <table border={1} style={style}>
      <thead>
        <tr>
          {columns.map((column) => (
            <td key={column.path}>{column.label}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, index) => (
          <tr key={rowData[rowKey]}>
            {columns.map((column) => {
              return column.render ? (
                <td style={defaultPadding}>
                  {column.render({ rowData, index })}
                </td>
              ) : ( //bssf (booth sides sad face)
                <td key={column.path} style={defaultPadding}>
                  {rowData[column.path]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequiredm,
      render: PropTypes.func,
    })
  ),
  rowKey: PropTypes.string.isRequired,
};
