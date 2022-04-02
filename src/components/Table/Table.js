import { cloneElement } from "react";

import styles from "./table.module.scss";

// tr component is inserted inside the tbody component
export const TableRow = ({ rowData, rowStyles = {}, columnStyles }) => {
  return (
    <tr style={rowStyles}>
      {rowData.map((data, idx) => {
        return (
          <td
            style={{ ...columnStyles[idx], ...data.styles }}
            key={idx}
            onClick={data.onClick || null}
            className={data.className}
          >
            {data.text}
          </td>
        );
      })}
    </tr>
  );
};

// tbody component is inserted inside the table component
export const TableBody = ({ children, columnStyles }) => {
  return (
    <tbody>
      {children.map((child) => cloneElement(child, { columnStyles }))}
    </tbody>
  );
};

// Table component nest the tbody and the tbody nest the tr
export default function Table({
  headerData,
  children,
  tableStyles,
  columnStyles = {},
  headerUnderlined,
  headerStyles = {},
}) {
  return (
    <div className={styles.container} style={tableStyles}>
      <table>
        {headerData && (
          <thead
            style={{
              borderBottom: headerUnderlined ? "2px solid var(--primary)" : "",
            }}
          >
            <tr>
              {headerData.map((hdr, idx) => {
                return (
                  <th style={columnStyles[idx] && columnStyles[idx]} key={idx}>
                    {hdr.toUpperCase()}
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        {cloneElement(children, { columnStyles })}
      </table>
    </div>
  );
}
