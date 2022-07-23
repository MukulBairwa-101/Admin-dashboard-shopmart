import React,{useEffect,useContext} from 'react'
import Layout from './Layout';

import {AppContext} from "../Context/AppContext";

const Dashboard = () => {
    const appContext = useContext(AppContext);
    const {isLoggedIn}= appContext


    return (
        <div>
            <Layout /> 
        </div>
    )
}

export default Dashboard
