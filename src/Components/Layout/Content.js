import React,{useContext} from 'react'
import {AppContext} from "../../Context/AppContext";
import DashBoardContent from '../../pages/DashBoardContent';
import Products from '../../pages/Products';
import Users from "../../pages/Users";
import AddUserForm from "../../Reusables/AddUserForm";
import AddProductForm from "../../Reusables/AddProductForm";

const Content = () => {
    const appContext = useContext(AppContext);
    // globalstates
    const {collapsed,path} = appContext;
    return (
        <div className={collapsed ?'header-container-collapsed content-container ':'header-container-open content-container' }>
            
            {
                path == '/users'?
                <Users />:path == '/adduser'?<AddUserForm />:path == '/dashboard' ? <DashBoardContent />
                :path == '/products' ? <Products /> 
                :path == '/addproduct'?<AddProductForm />:null
            }
        </div>
            
    )
}

export default Content
