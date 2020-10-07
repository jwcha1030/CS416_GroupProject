import React from 'react';
import Table from "react-bootstrap/Table";
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function DataTable({data, headers, changeItem, showEdit, deleteItem}) {
  return (
    <div className="table__container" style={{marginBottom: "30px"}}>
      <Table >
        <thead>
          {headers.map((header, i)=>{
            return <th key={header+i}> {header}</th>
          })}
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
        {data.map((item, i)=>{
          return <tr key={item['id']}>
            {Object.keys(item).map(key=>
              <td key={key+item.id} className={key+item.id}>{item[key]}</td>)}
            <td>
              <TiEdit
                onClick={() => {showEdit(); changeItem(item.id)}}
                className='edit-icon'
              />
            </td>
            <td>
              <RiCloseCircleLine
                onClick={() => deleteItem(item.id)}
                className='delete-icon'
              />
            </td>
          </tr>
        })}
        </tbody>
      </Table>
    </div>
  );
}

