import React from 'react';
import table from '../data/ledger.data';
import './Table.css';

const Table = (props) => {
  return (
    <div classname="container ledger-table-container-3">
      <div classname="row content-top-padding">
        {table.map((item, index) => {
          return (
            <table classname="table table-bordered header-top-spacing">
              <thead>
                <tr>
                  {item.header.map((item, index) => {
                    return (
                      <th key={index} classname="ldg-tbl-th match-box-color">
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {item.body.map((row, index) => {
                  return (
                    <tr key={index}>
                      {row.map((column, index) => {
                        return <td key={index}>{column}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        })}
        <table classname="table table-bordered header-top-spacing">
          <thead>
            <tr>
              <th classname="ldg-tbl-th match-box-color">DATE</th>
              <th classname="ldg-tbl-th match-box-color">ENTRY</th>
              <th classname="ldg-tbl-th match-box-color">DEBIT</th>
              <th classname="ldg-tbl-th match-box-color">CREDIT</th>
              <th classname="ldg-tbl-th match-box-color">BALANCE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                11 Aug 22
              </td>
              <td
                title="West Indies vs New Zealand"
                className="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="/user/ledgers/1092487">West Indies vs New Zealand</a>
              </td>
              <td className="ldg-tbl-td match-value-box-color">15.0</td>
              <td className="ldg-tbl-td match-value-box-color">0</td>
              <td className="ldg-tbl-td match-value-box-color">117.0</td>
            </tr>
            <tr>
              <td classname="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                11 Aug 22
              </td>
              <td
                title="TeenPatti-T-20 - 10 Aug"
                classname="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="#">TeenPatti-T-20 - 10 Aug</a>
              </td>
              <td className="ldg-tbl-td match-value-box-color">0</td>
              <td className="ldg-tbl-td match-value-box-color">95.0</td>
              <td className="ldg-tbl-td match-value-box-color">-102..0</td>
            </tr>
            <tr>
              <td classname="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                11 Aug 22
              </td>
              <td
                title="Birmingham Phoenix vs Southern Brave"
                classname="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="/user/ledgers/1092487">Birmingham Phoenix vs Southern Brave</a>
              </td>
              <td classname="ldg-tbl-td match-value-box-color">15.0</td>
              <td classname="ldg-tbl-td match-value-box-color">0</td>
              <td classname="ldg-tbl-td match-value-box-color">-197.0</td>
            </tr>
            <tr>
              <td classname="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                10 Aug 22
              </td>
              <td
                title="Zimbabwe vs Bangladesh"
                classname="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="#">Zimbabwe vs Bangladesh</a>
              </td>
              <td classname="ldg-tbl-td match-value-box-color">137.0</td>
              <td classname="ldg-tbl-td match-value-box-color">0</td>
              <td classname="ldg-tbl-td match-value-box-color">-182.0</td>
            </tr>
            <tr>
              <td classname="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                09 Aug 22
              </td>
              <td
                title="Bengaluru Blasters vs Hubli Tigers"
                classname="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="#">Bengaluru Blasters vs Hubli Tigers</a>
              </td>
              <td classname="ldg-tbl-td match-value-box-color">15.0</td>
              <td classname="ldg-tbl-td match-value-box-color">0</td>
              <td classname="ldg-tbl-td match-value-box-color">-45.0</td>
            </tr>
            <tr>
              <td classname="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                09 Aug 22
              </td>
              <td
                title="Ireland vs Afghanistan"
                classname="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="#">Ireland vs Afghanistan</a>
              </td>
              <td classname="ldg-tbl-td match-value-box-color">15.0</td>
              <td classname="ldg-tbl-td match-value-box-color">0</td>
              <td classname="ldg-tbl-td match-value-box-color">-30.0</td>
            </tr>
            <tr>
              <td classname="ldg-tbl-td match-value-box-color" style={{ textAlign: 'left' }}>
                05 Aug 22
              </td>
              <td
                title="Netherlands vs New Zealand"
                classname="ldg-tbl-td match-value-box-color"
                style={{ textAlign: 'left' }}>
                <a href="#">Netherlands vs New Zealand</a>
              </td>
              <td classname="ldg-tbl-td match-value-box-color">15.0</td>
              <td classname="ldg-tbl-td match-value-box-color">0</td>
              <td classname="ldg-tbl-td match-value-box-color">-15.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
