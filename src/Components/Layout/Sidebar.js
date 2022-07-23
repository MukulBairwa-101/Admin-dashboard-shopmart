import React,{useContext} from "react";
import { useNavigate } from "react-router-dom";
// compoments
import Logo from "../../Reusables/Logo";

// assets
import {
  FiUsers,
  FaProductHunt,
  IoMdSettings,
  MdSpaceDashboard,
  FcSalesPerformance,
  RiArrowRightSLine,
  RiArrowLeftSLine
} from "../../Reusables/Icons";
import {AppContext} from "../../Context/AppContext";


const Sidebar = () => {

  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  
  // globalstates
  const {collapsed,setCollapsed,setPath} = appContext;



// handlers

const handleRoute =(path)=>{
  setPath(`/${path}`);
  navigate(`/admin/${path}`);
  
}
const  collapseSidebar =()=>{
  setCollapsed(!collapsed);
}
// {collapsed ? `container-sidebar `: `container-sidebar open-sidebar`  }
  return (
    <div className="container-sidebar">
      <div className="flex flex-col container-wrapper ">
      <div className="flex  align-items  pointer" >
        <Logo />
        <span className={collapsed ? 'item-title-hide':'item-title'}>SHOPMART</span>
      </div>
        <div className="flex  align-items sidebar-item pointer" onClick={()=>handleRoute('dashboard')} >
          <MdSpaceDashboard  className="item-identifier"/>
          <span className={collapsed ? 'item-title-hide':'item-title'} >Dashboard</span>
        </div>
        <div className="flex  align-items sidebar-item pointer" onClick={()=>handleRoute('users')}>
          <FiUsers className="item-identifier" />
          <span className={collapsed ? 'item-title-hide':'item-title'} >Users</span>
        </div>
        <div className="flex  align-items sidebar-item pointer" onClick={()=>handleRoute('products')}>
          <FaProductHunt className="item-identifier" />
          <span className={collapsed ? 'item-title-hide':'item-title'} >Products</span>
        </div>
         {/* <span className="flex align-items sidebar-item">Analytics</span> */}
           <div className="flex  align-items sidebar-item pointer">
        <FcSalesPerformance className="item-identifier" />
        <span className={collapsed ? 'item-title-hide':'item-title'}>Sales</span>
      </div>
      <div className="flex   align-items sidebar-item pointer">
        <IoMdSettings className="item-identifier" />
        <span className={collapsed ? 'item-title-hide':'item-title'}>Settings</span>
      </div>
      
      {
        !collapsed ?
        
        <RiArrowLeftSLine className="collapsable-icon pointer" onClick={collapseSidebar} />
        :
        <RiArrowRightSLine className="collapsable-icon pointer" onClick={collapseSidebar} />
      }
  


      </div>
     
    
    </div>
  );
};

export default Sidebar;
