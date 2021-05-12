export const getCharactersAction = (url) =>{
       
    return (dispatch)=>{
        fetch(url)
        .then(res => res.json())
        .then(result => {
            const characters = result.results ;
          //  console.log( characters);
        dispatch( {
            type: 'CHAR_NAME',
            payload: characters
        })})
        .catch(err =>{
            console.log(err);
        })

    }
}

