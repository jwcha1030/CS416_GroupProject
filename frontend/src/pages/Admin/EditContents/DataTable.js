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

    //school id: 1sbu, 2fit
    if (key.toLowerCase()==="school_id" && item[key]===1)
      return "SBU";
    else if(key.toLowerCase()==="school_id" && item[key]===2)
      return "FIT";

    //type_id: 0none, 1goods, 2apparel
    if(key.toLowerCase()==="type_id" && item[key]===0)
      return "None";
    else if(key.toLowerCase()==="type_id" && item[key]===1)
      return "Goods";
    else if(key.toLowerCase()==="type_id" && item[key]===2)
      return "Apparel";

    //file object
    if (key.toLowerCase()==="img" && (typeof item[key])!=="string" && item[key]!==null)
      return item[key].name;
    //if the length of the content is longer than maxLength, slice it so that it fits nicely in a column
    return (typeof (item[key]) === "string" && item[key].length > maxLength ?
      (item[key].slice(0, maxLength)) + "..." : item[key])
  };
  return (
    <div className="table__container" style={{marginBottom: "30px"}}>
      <Table>
        <thead>
        <tr>
          {headers.map((header, i) => {
            return <th key={header + i}> {header}</th>
          })}

          {/*if showEdit or deleteItem is not null display <th>*/}
          {showEdit && <th>Edit</th>}
          {deleteItem && <th>Delete</th>}
        </tr>
        </thead>
        <tbody>
        {data.map((item, i) => {
          return <tr key={item['id']}>
            {Object.keys(item).map(k =>
              <td key={k + item.id}>
                {validContent(item, k)}
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
                onClick={() => {if(window.confirm("are you sure?"))
                  deleteItem(item.id);
                }}
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

