export const photoFetched = ()=>{
    return dispatch => {

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            dispatch({type:'POST_FETCHED', photos:json})
        })
    }
}