import React from 'react';
import Table from "react-bootstrap/Table";
import {TiEdit} from 'react-icons/ti';
import {RiCloseCircleLine} from 'react-icons/ri';

export default function DataTable({data, headers, changeItem, showEdit, deleteItem}) {
  const maxLength = 50;
  const priceUnit = "$";
  const validContent = (item, key) => {
    //append priceUnit sign if 'key' is price
    if (key === "price")
      return priceUnit + item[key];
    //if the length of the content is longer than maxLength, slice it so that it fits nicely in a column
    return (typeof (item[key]) === "string" && item[key].length > maxLength ?
      (item[key].slice(0, maxLength)) + "..." : item[key])
  };
  return (
    <div className="table__container" style={{marginBottom: "30px"}}>
      <Table>
        <thead>
        {headers.map((header, i) => {
          return <th key={header + i}> {header}</th>
        })}

        {/*if showEdit or deleteItem is not null display <th>*/}
        {showEdit && <th>Edit</th>}
        {deleteItem && <th>Delete</th>}
        </thead>
        <tbody>
        {data.map((item, i) => {
          return <tr key={item['id']}>
            {Object.keys(item).map(key =>
              <td key={key + item.id} className={key + item.id}>
                {validContent(item, key)}
              </td>)}

            {/*if showEdit is not null display <td>*/}
            {showEdit &&
            <td>
              <TiEdit onClick={() => {
                showEdit();
                changeItem(item.id)
              }}
                      className='edit-icon'
              />
            </td>
            }
            {deleteItem &&
            <td>
              <RiCloseCircleLine
                onClick={() => deleteItem(item.id)}
                className='delete-icon'
              />
            </td>
            }
          </tr>
        })}
        </tbody>
      </Table>
    </div>
  );
}

