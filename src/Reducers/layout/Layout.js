
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const useStyles = makeStyles((theme)=>{
    return {
        appbar:{
            
            backgroundColor: 'black'
        },
      
        toolbar: theme.mixins.toolbar,
        dot: {
            
            marginRight: theme.spacing(2),
    
            
        },
        swar: {
            flexGrow: 4,
            textAlign: "center",
           
  
        }
    }
    
})
export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <AppBar className = {classes.appbar} elevation = {0}>
                <Toolbar >
                    <MoreHorizIcon className={classes.dot}/>
                    <Typography className={classes.swar}>Star Wars</Typography>
                </Toolbar>
            </AppBar>
            <div >
                <div className = {classes.toolbar}></div>
            {children}
            </div>
        </div>
    )
}
