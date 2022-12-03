import React, { useState} from 'react'
import { dummyData } from '../dummyData';

export const Tablet = () => {
  const [isControlled,setIsControlled]=useState(true);
    const displayItems = dummyData.map((item) => {
        return (
          <div className="white" key={item.id}>
            <ul className="flex-ssb bordeer">
              <li>{item.id}</li>
              <li>{item.rootid}</li>
              <li>{item.name}</li>
              <li>{item.email}</li>
              <li>{item.status}</li>
              <li>{item.key}</li>
              <li>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle white"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-ellipsis"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <button className="dropdown-item" >
                        Action
                      </button>          
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        );
    })
  return (
    <div className="containar white">
      <div className="yellow">
        <ul className="flex-ssb">
          <li>id</li>
          <li>Root ID</li>
          <li>Client Name</li>
          <li>E-mail</li>
          <li>Status</li>
          <li>Product Key</li>
          <li>actions</li>
        </ul>
      </div>
      <div>{displayItems}</div>
    </div>
  );
}