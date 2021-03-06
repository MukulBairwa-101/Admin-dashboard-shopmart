import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {FaUser,MdFingerprint,  FaEye,FaEyeSlash} from "../Reusables/Icons";
import Swal from "sweetalert2";

import { AppContext } from '../Context/AppContext';

const Auth = () => {
    const appContext = useContext(AppContext);
    const navigate = useNavigate();
    const {isLoggedIn,setIsLoggedIn} = appContext;

    useEffect(()=>{
        let session=  JSON.parse(sessionStorage.getItem('LOGGEDIN-SESSION'));
        if(isLoggedIn == session){
            alert('yes it is');
            sessionStorage.setItem('LOGGEDIN-SESSION',JSON.stringify(isLoggedIn));
        }

    },[]);










    const [admin,setAdmin]= useState({
        email:'',
        password:'',
        
    })
    const [passwordVisibility,setPasswordVisibility] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    let logStatus = {};

    // handlers
    
    const validation =()=>{
        let validationError ={}
        
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


        if (!admin.email) {
            validationError.email = "Field is required";
        } else if (!emailRegex.test(admin.email)) {
            validationError.email = "Please enter a valid email";

        }

        if(!admin.password){
            validationError.password = "Field is required";
        }
        else if(!passwordRegex.test(admin.password)){
            validationError.password ='please enter valid password';
        }
        

        return validationError;


    }



    const handleChange = (e)=>{
       const {name,value} = e.target;
       setAdmin({...admin,[name]:value}) ;
    }
    
    const togglePassword =(e)=>{
        const {name,value} = e.target;
        if(name ===  value){
            setPasswordVisibility(!passwordVisibility);
        }
    }
    const signIn =(e)=>{
        e.preventDefault();
        let isErrors = validation();
        console.log(isErrors);
        


        console.log(validationErrors);

        if(Object.keys(isErrors).length !== 0){
            setValidationErrors(isErrors);
            Swal.fire({
                title: "Sign In Error!",
                text: `Please Enter valid details`,
                icon: "error",
                confirmButtonText: "Ok",
              })

        }
        else{

            let signInAdmin = JSON.parse(localStorage.getItem('Admin')) ;

          

            
            // console.log(signInAdmin,"getting admin cedentials");
            
            if(signInAdmin.email == admin.email && signInAdmin.password == admin.password){
                
                Swal.fire({
                    title: "Success!",
                    text: `WELCOME BACK`,
                    icon: "success",
                    confirmButtonText: "Ok",
                  }).then((result) => {
                    if(result.isConfirmed) { 
                        setIsLoggedIn({
                            name:signInAdmin.name,
                            status:true
                        }) 
                        logStatus = {
                            name:signInAdmin.name,
                            status:true
                        }
                        navigate("/admin/dashboard"); 

                        // const util = ()=>{
                        //     if(isLoggedIn.status){
                        //        tempData = isLoggedIn
                        //        await sessionStorage.setItem('LOGGEDIN-SESSION',JSON.stringify(tempData));
                        //     }
                        // }
                        // util();
                        
                   
                     

                     
                    }
                  });

            }
            else {
                Swal.fire({
                    title: "Error!",
                    text: `Credentials not match`,
                    icon: "error",
                    confirmButtonText: "Ok",
                  })
            }

            
            
            
        }
        
        
    }


    return (
        <div className="auth-wrapper">
            <h2 className="text-center">Sign in </h2>
            <form className="form" onSubmit={signIn}>
                <div>

                <label>Email</label>
                <div className="flex align-items form-input">
                    <div className="form-icon-wrap">
                        <FaUser className="form-icon" />  
                    </div>
                    <input type="email" className="input"  name="email" value={admin.email} onChange={(e)=>handleChange(e)} />
                </div>
                <span>{validationErrors.email}</span>
                </div>
                <div>

                </div>
                <label>Password</label>
                <div className="flex align-items form-input">
                    <div className="form-icon-wrap">
                        <MdFingerprint className="form-icon" />  
                    </div>
                    <input type={passwordVisibility ? 'text':'password' } className="input"  name="password" value={admin.password} onChange={(e)=>handleChange(e)} />
                    {    passwordVisibility  ? 
                <FaEyeSlash   onClick={togglePassword} className="pointer togglePassword" />   
                :
                <FaEye   onClick={togglePassword} className="pointer togglePassword" />
            }
                </div>
                 <span>{validationErrors.password}</span>
              
                <div>
               
                    <button className={!validationErrors.status? 'btn pointer':'btn pointer btn-signup-filled'}>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default Auth;



// ['Password must be','Minimum eight characters','at least one uppercase letter','one lowercase letter','one number','one special character']