import React,{createContext,useState} from 'react';

export const  AppContext = createContext();

export const Provider = (props)=>{

    const [collapsed,setCollapsed]= useState(false);
    const [adminUser,setAdminUser]= useState(
        {
            name:'Mukul Kumar',
            email:'mukulkumaradmin@gmail.com',
            isAdmin:true,
            password:'adminMukulbairwa@123'
        }
    );
    const [users,setUsers]= useState([]);
    const [products,setProducts] = useState([]);
    const [path,setPath]= useState('/dashboard');
    const [prevPath,setPrevPath]= useState(path);
    const [isLoggedIn,setIsLoggedIn]= useState({
        name:'',
        status:false
    })
    
    const [editingUser,setEditingUser]= useState(
        { 
        firstName: '',
        lastName: '',
        userName:'',
        email:'',
        password:'',
        userToken:''

    }
        
    );
    const[rowId,setRowId]= useState(1); 
    
    const [activeTheme,setActiveTheme] =useState({});




    return(
        <AppContext.Provider value={{adminUser,setAdminUser,users,setUsers,collapsed,setCollapsed,path,setPath,isLoggedIn,setIsLoggedIn,prevPath,setPrevPath,rowId,setRowId,editingUser,setEditingUser,activeTheme,setActiveTheme,products,setProducts}}>
            {props.children}
        </AppContext.Provider>
    )
}
