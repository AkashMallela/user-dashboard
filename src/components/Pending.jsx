import React from "react";
import ExternaLLink from '../assets/external-link.svg'


export default function Pending({usersData}){
    return(
        <div className="table">
          <table className="users-table">
            <tr>
              <th>User</th>
              <th>
                Risk level <div className="filter-type"></div>
              </th>
              <th>Trigger reason</th>
              <th>
                In queue for <div className="filter-type"></div>
              </th>
              <th>
                Date added on<div className="filter-type"></div>
              </th>
              <th>Previously Reviewd</th>
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
              <td className={`t-risk ${item.level.toLowerCase()}`}>{item.level}</td>
              <td>{item.reason}</td>
              <td>{item.inQueFor}</td>
              <td className="date">{item.dateAdded}</td>
              <td>
                <div>
                  <b>{item.reviewed}</b>
                  <p className="date">{item.reviewdedOn}</p>
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