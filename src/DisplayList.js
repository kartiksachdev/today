import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    listDisplay: {
     paddingLeft:0,
    
},
heading:{
    margin: '10px',
    marginLeft : 0
}
})

const getLatestRelease = filmItems => {
    filmItems.sort((a,b) => new Date(a.created)-new Date(b.created));
    const latestRelease = filmItems.length > 0 ? filmItems[filmItems.length-1] : {};
    return latestRelease;
}
export default function DisplayList(props) {
    const classes = useStyles();
    
    const filmItems = props.toDisplay;
    const latestRelease = getLatestRelease(filmItems);
    
    return (
        <>
        { filmItems.length >= 1 && <Typography variant="h5" className={classes.heading}>Movie List :</Typography>}
        <List>
            { filmItems.map( item => (
                <ListItem className = {classes.listDisplay} key = {item.title} >{item.title}</ListItem>
            ))}
        </List>
        <br></br>
      {  filmItems.length >= 1 && <Typography variant="subtitle1" gutterBottom>
            {`${latestRelease.title} : ${new Date(latestRelease.created)}`}
            </Typography >
        }
        </>
    )
}
