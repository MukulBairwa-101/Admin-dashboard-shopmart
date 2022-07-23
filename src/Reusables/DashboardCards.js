import React,{useContext,useEffect,useState} from 'react'
import {AppContext} from "../Context/AppContext";

import { HiUsers,FaProductHunt } from './Icons';





const Userscard = () => {

    const appContext = useContext(AppContext);
    const {users,path,activeTheme,setActiveTheme,products} = appContext;


    // console.log(path)

    const themePalete = [
        {
            id:'Users',
            theme:'violet',
            cardClass:`over-view-card-themed-violet`,
            btnClass:`btn-themed-violet`,
            icon:<HiUsers />,
            themePath:'/users',
            btnText:'User'
    
        },
        {
            id:'Products',
            theme:'teal',
            cardClass:`over-view-card-themed-teal`,
            btnClass:`btn-themed-teal`,
            icon:<FaProductHunt />,
            themePath:'/products',
            btnText:'Product'
    
        },
    ]
    
    
    useEffect(()=>{

        let active = themePalete.find(themeItem => themeItem.themePath == path);
        setActiveTheme(active);
    },[path])
    
    
    // console.log(activeTheme);
    return (

<div className="flex flex-col justify-content ">


        <div className= {`over-view-card  pointer ${activeTheme.cardClass}  `}>
            <div className="inner-card  flex  justify-content">

            <div className="inner-card-div">
                {activeTheme.icon}
                <h4>Total {activeTheme.id}</h4>     
            </div>
            <div className="inner-card-div">
                <h4>  { activeTheme.themePath == '/users'? users.length: activeTheme.themePath == '/products'? products.length:null}</h4>
            </div>   
            </div>
        </div>


             

        </div>
    )
}

export default Userscard;
