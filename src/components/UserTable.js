import React from 'react';

const UserTable=({records,onEdit,onDelete})=>{

  return(
    <div>
           <h3>Registered Users</h3>
      <table border='1' cellPadding='10' cellSpacing='0'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
          <tbody>
            {records.map((record,index)=>(
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.mobile}</td>
                <td>
                  <button onClick={() => onEdit(index)}>Edit</button>
<button onClick={() => onDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </thead>
      </table>
    </div>
  )
}
export default UserTable;