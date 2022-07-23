import React,{useState,useEffect,useContext} from 'react'

import {AppContext} from "../Context/AppContext";
import {useNavigate} from "react-router-dom";

import DashboardCards from "../Reusables/DashboardCards";

import {AiOutlineEdit,MdOutlineDelete,GrFormView} from "../Reusables/Icons";


import Delete from '@material-ui/icons/Delete';

import Swal from "sweetalert2";










import XYPlot from 'reactochart/XYPlot';
import XAxis from 'reactochart/XAxis';
import YAxis from 'reactochart/YAxis';
import LineChart from 'reactochart/LineChart';

import * as Reactochart from 'reactochart';
import 'reactochart/styles.css';

// mui components
import { DataGrid } from '@mui/x-data-grid';
const MyFirstLineChart = (props) => (
  <XYPlot>
    <XAxis title="Phase" />
    <YAxis title="Intensity" />
    <LineChart
      data={Array(100)
        .fill()
        .map((e, i) => i + 1)}
      x={d => d}
      y={d => Math.sin(d * 0.1)}
    />
  </XYPlot>
);



const Users = () => {
  const appContext = useContext(AppContext);
  const navigate = useNavigate();
  
  const {users,setUsers,setPath,setEditingUser,setRowId,activeTheme} = appContext;

  useEffect(() =>{
    if(!localStorage.getItem('USERS')){
      localStorage.setItem('USERS',JSON.stringify(users))
    }
    else{
       let tempData = JSON.parse(localStorage.getItem('USERS'))
       setUsers(tempData);
      //  setRows();
    }
  },[])





  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'Username',
      headerName: 'User name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'usertoken', headerName: 'User Token', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
    { field: 'actionIcons' , headerName: 'Actions', width: 130, 
    renderCell :(params)=> {
      return (
      <div className="actions-col flex" style={{ cursor: "pointer" }}>
        {/* <GrFormView  onClick={()=>viewUser(params.row.id)}  /> */}
         <AiOutlineEdit className="edit-btn" onClick={()=>editUser(params.row.id)} />
         <MdOutlineDelete className="delete-btn" onClick={()=>deleteUser(params.row.id)} />
       </div>
      )}
  },
  ];

    // handlers
    
    const addUser =(path,editIdent)=>{
      setPath(`/${path}`)
      navigate(path);
      if(editIdent === 'editInActive'){
        setEditingUser(
          { 
            firstName: '',
            lastName: '',
            userName:'',
            email:'',
            password:'',
            userToken:''
    
        }
        );
      }
    }
    

    // const viewUser=(id)=>{
    //   setRowId(id);
    //   let view ={};
    //   view = users.find(row=>users.indexOf(row) ==  id-1 )
    //   if(view){
    //     setEditingUser(edit);
    //     addUser('adduser','editActive');

    //   }


    
    // const setRows =()=>{
      
         const rows =users.map((listItem,key)=>{
           return {
             id:key+1,
             firstName:listItem.firstName ,lastName:listItem.lastName ,userName:listItem.userName,email:listItem.email,
             usertoken:listItem.userToken,
             password:listItem.password ,
         }})

    // }
  
  
    

    const editUser=(id)=>{
      
      // console.log(id)
      setRowId(id);
      let edit ={};
      edit = users.find(row=>users.indexOf(row) ==  id-1 )
      if(edit){
        setEditingUser(edit);
        addUser('adduser','editActive');

      }


      // for(let i =0 ; i<users.length ; i++){
      //   let edit ={}
      //   if(i == id-1){
      //     edit = users[i];
      //     console.log(edit); 
      //     }
      // }

    };

    const deleteUser =(id)=>{
      // alert(id);
      Swal.fire({
        title: "Deleting user !",
        text: `Please confirm`,
        icon: "question",
        confirmButtonText: "Ok",
    })
    .then((result)=>{
        if(result.isConfirmed){
          
          let updatedList=users.filter(user=>users.indexOf(user) !== id-1  );
          console.log(updatedList);
          localStorage.setItem('USERS', JSON.stringify(updatedList));

        }
    })
      
      
    }








    return (
      <>
      <div className="flex justify-content cards-container ">
        <DashboardCards />
        
      </div>
      <div>
        <button className= {`btn btn-add pointer ${activeTheme.btnClass}  `} onClick={()=>addUser('adduser','editInActive')}>Add {activeTheme.btnText}</button>
      </div>


 <div style={{ height: 400, width: '100%',backgroundColor: 'white',margin:'20px auto',borderRadius:'8px',fontFamily:"'Poppins', sans-serif"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
        {/* <MyFirstLineChart /> */}
      </>
    )
}

export default Users;
