import React,{useContext} from "react";

// assets
import {AppContext} from "../../Context/AppContext";
import {BiNotification,CgSearch,BsPersonCircle} from "../../Reusables/Icons";


// mui components
import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const Header = () => {
    const appContext = useContext(AppContext);

    // globalstates
    const {collapsed,path,isLoggedIn,prevPath} = appContext;

  return (
    <>

        <div className={collapsed ?'header-container-collapsed flex align-items justify-content header-container':'header-container-open flex align-items justify-content header-container' }>
         <div className="route-class" >
           <span>pages</span>
           {/* /<span>{prevPath}</span>/ */}
           <span className="route-class-active">{path}</span> 
         </div>
         <div className="flex align-items justify-content header-action-container">
           {/* <div className="search-wrapper">
              
           </div> */}
           <Search>
            <SearchIconWrapper>
             <CgSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <BiNotification className="pointer" />
          <div className="flex justify-content align-items">
          <BsPersonCircle className="pointer"  />
          {isLoggedIn.name ?
          <span>{isLoggedIn.name }</span>:null
          }
          <span  className="route-class-active">Admin</span>
          </div>
         </div>

        </div>
    </>
  );
};

export default Header;
