import React, {useEffect,useState} from 'react'
import {getCharacters} from './actions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import {useSelector , useDispatch} from 'react-redux';
import {getCharactersAction} from './actions';
import DisplayList from './DisplayList.js';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles({
        containerlay: {
         border: '1px',
        borderColor:"text.primary",
        paddingTop:'20px'
    }
})


export default function Characters() {
    const classes = useStyles();
    
    //const [data, setdata] = useState([]);
    const [char, setChar] = useState([]);
    const [filmList, setFilmList] = useState([]);
    const [currSelection, setCurrSelection] = useState("Select Character");
    const [isLoading , setIsloading] =  useState(false);
    const data = useSelector(state => state.characters)

    
        const dispatch  = useDispatch();
    

    useEffect(()=>{

        // const getChar = async() =>{
        //     const res = await fetch('https://swapi.dev/api/people/');
        //     const result = await res.json();
    
        //     setdata(result.results);
            
        // }
        dispatch(getCharactersAction('https://swapi.dev/api/people/'));
        

        
    },[])
    
    

    const fetchFilmsForName = (name, idx) => {
        setIsloading(true);
        const selectedNameData = data[idx];
        setCurrSelection(name);
       // console.log(selectedNameData);
        if(selectedNameData.name !== name) {
            alert("ERror!!");
        }
        const FilmsForSelectedName = selectedNameData.films;//[filmsList]
       // console.log("filsm, ", FilmsForSelectedName);

        const getFilmNames = async ()=>{
         const titleArray =  await Promise.all( FilmsForSelectedName.map( async filmUrl => {
            let filmResponse = await fetch(filmUrl)
            const result = await filmResponse.json()
             return result;
                //const convertedJSON = await res.json();
                //return convertedJSON.title;
            }))
            .catch(err =>{console.log(err)});
      //      console.log(titleArray);
            setFilmList(titleArray);
            setIsloading(false);
        }
        getFilmNames();
        
    }

    
    // const fetchFilmDetails = async (filmUrl) => {
    //     const filmData = await fetch(filmUrl);

    // }

    return (
        
        <Container fixed className={classes.containerlay}>
            <Box>
        <InputLabel id="demo-simple-select-label">Character : </InputLabel>
        </Box>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={currSelection}
        
        >
            <MenuItem value  = 'Select Character' key='Select Character' disabled>Select Character</MenuItem>
           {   data.map((resData, index)=> 
            <MenuItem value={resData.name} key={resData.name} onClick={() => fetchFilmsForName(resData.name, index)}>{resData.name}</MenuItem>) }
        </Select>
        {isLoading &&  <div><HourglassFullTwoToneIcon/> ...Loading </div> }
            {   console.log(filmList)}
        <DisplayList toDisplay = {filmList}/>
            

        
        </Container>
    )
}
