import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor:'#02324f',
  },
  logbtn: {
    border: "1px solid #02324f",
    backgroundColor: "#02324f",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
  navigation: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },


  title: {
    flexGrow: 1,
    '& .span':{
      textDecoration:'none',color:'#02324f', fontFamily:'cursive',
      [theme.breakpoints.down('xs')]:{
          display:'none'
      },
    },
  },
  // title: {
  //   flexGrow: 1,
  //   '& .prod':{
  //     textDecoration:'none',color:'#02324f', fontFamily:'cursive',
  //     [theme.breakpoints.down('xs')]:{
  //         whiteSpace: 'nowrap',
  //     },
  //   },
  // },
  // title: {
  //   flexGrow: 1,
  //   '& .span2':{
  //     textDecoration:'none',color:'#02324f', fontFamily:'cursive',
  //     [theme.breakpoints.down('xs')]:{
  //         display:'none',
  //     },
  //   },
  // },
  NavLink:{
    textDecoration:'none',
  },

  image: {
    width: 30,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <h4 className={classes.title}>
            <NavLink style={{textDecoration:'none',color:'#02324f', fontFamily:'cursive'}}to='/'>
            <span className='span2'>
                MDK Palace
                </span>
            </NavLink>
          </h4>
          <p className={classes.title}>
            <span className='span'>
                ...simplicity with class!
            </span>
          </p>
          <h5 className={classes.title .prod}>
            <NavLink style={{textDecoration:'none',color:'#02324f', fontFamily:'cursive'}}to='./divcontainers'>
                All <span style={{color:'white'}}>dddd</span>
            </NavLink>
          </h5>
          <h5 className={classes.title}>
            <NavLink style={{textDecoration:'none',color:'#02324f', fontFamily:'cursive',}}to='./shoes'>
                Shoes
            </NavLink>
          </h5>
          <h5 className={classes.title}>
            <NavLink style={{textDecoration:'none',color:'#02324f', fontFamily:'cursive'}}to='./bags'>
                Bags
            </NavLink>
          </h5>
          <h5 className={classes.title}>
            <NavLink style={{textDecoration:'none',color:'#02324f', fontFamily:'cursive'}}to='./jewelries'>
                Jewelries
            </NavLink>
          </h5>
          <h5 className={classes.title}>
            <NavLink style={{textDecoration:'none',color:'#02324f', fontFamily:'cursive'}}to='./nails'>
                Nails
            </NavLink>
          </h5>
        </Toolbar>
      </AppBar>
    </div>
  );
}
