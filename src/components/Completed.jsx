import React from "react";
import { usersData } from "./Sidebar/userdata";
import ExternaLLink from '../assets/external-link.svg'


export default function Completed(){
    return(
        <div className='table'>
        <table className="users-table">
            <tr>
              <th>User</th>
              <th>
                Risk level <div className="filter-type"></div>
              </th>
              <th>Action reason</th>
              <th>
                Time To Close <div className="filter-type"></div>
              </th>
              <th>
                Date added on<div className="filter-type"></div>
              </th>
              <th>Action taken by</th>
            </tr>
            {
            usersData.map((item, key)=>{
              return(
                <tr key={key}>
            <td className="t-user">
              <div>
                <b>{item.name}</b>
                <p>{item.email}</p>
              </div>
              <div>
              <a href="#">
                <img src={ExternaLLink} alt="external link" />
              </a>
              </div>
            </td>
            <td className="t-risk medium">{item.level}</td>
            <td>{item.action}</td>
            <td>{item.closedFor}</td>
            <td className="date">{item.dateAdded}</td>
            <td>
              <div>
                <b>{item.actionBy}</b>
                <p className="date">{item.actionByemail}</p>
              </div>
            </td>
          </tr>
              )
            })
          }
          </table>
        </div>
    )
}