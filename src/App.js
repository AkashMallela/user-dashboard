import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import arrowdown from "./assets/arrow-down.svg";
import search from "./assets/search.svg";
import xCircle from "./assets/x-circle.svg";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import CloseAccount from "./components/Form/Form";
import Pending from "./components/Pending";
import Completed from "./components/Completed";
import {usersData} from './components/Sidebar/userdata.jsx'

function App() {
  const [triggerReason, setTriggerReason] = useState(false);
  const [riskLevel, setRiskLevel] = useState(false);
  const [currentTab, setCurrentTab] = useState("pending");

  const [filterData, setFilterData] = useState(usersData);
  const [searchInput, setSearchInput] = useState([]);

  const filteredData = (e)=>{
    setSearchInput(e.target.value)
    const value = e.target.value.toLowerCase()
    if(value === ''){
      setFilterData(usersData);
      return ;
    }
    const d = usersData.filter((item) =>{
      return item.name.toLowerCase().includes(value) || item.email.toLowerCase().includes(value)
    })
    setFilterData(d);
  }
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className="main-container">
      <Sidebar />
      <div className="main">
        <h1>Monitoring</h1>
        <div className="tabs-div">
          <div className="tabs1">
            <button className={currentTab === "pending" ? "active" : ""} onClick={() => setCurrentTab("pending")}>Pending</button>
            <button className={currentTab === "completed" ? "active" : ""} onClick={() => setCurrentTab("completed")}>Completed</button>
          </div>
          <div className="tabs2">
            <button onClick={() => setModalOpen(true)} className="danger-btn">
              <img src={xCircle} alt="close" />
              <b>Close accounts</b></button>
          </div>
        </div>
        <div className="filter">
          <div className="search"><img src={search} alt="search" /><input type="text" placeholder="Search" value={searchInput} onChange={filteredData} /></div>
          <button className={triggerReason ? "active" : ""} onClick={() => setTriggerReason(prev => !prev)}>Trigger reason   <img alt="arrow" src={arrowdown} />
            <div className="menu">
            <button className="menu-item">Hard flag</button>
            <button className="menu-item">Temp flag</button>
            <button className="menu-item">Resricted unflag</button>
            <button className="menu-item">un flag</button>
            <button className="menu-item">Reviewed</button>
            </div>
          </button>
          <button className={riskLevel ? "active" : ""} onClick={() => setRiskLevel(prev => !prev)} >Risk level   <img alt="arrow" src={arrowdown} />
          <div className="menu">
              <button className="menu-item">High</button>
              <button className="menu-item">Medium</button>
              <button className="menu-item">Low</button>
          </div></button>
        </div>
        {currentTab === "pending" ? <Pending usersData={filterData} /> : <Completed usersData={filterData} />}
      </div>
      <Modal open={modalOpen} setOpen={setModalOpen}>
        <div onClick={(e) => e.stopPropagation()} className="dialog">
        <CloseAccount setModalOpen={setModalOpen} />
        </div>
      </Modal>
    </div>
  );
}

export default App;
