const initialState = {
    photos:[]
}


const reducer = (state=initialState, action) =>{

    if(action.type === 'POST_FETCHED'){
        return{
            ...state,
            photos: action.photos
        }
    }
    return state
}

export default reducer