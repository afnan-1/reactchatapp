const INITIAL_STATE = {
    users: [],
    current_user:{},
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SETUSER":
            return({
                ...state,
                current_user:action.data,
            })
        case "SETFIREBASEUSERS":
            return({
                ...state,
                users:action.data
            })
        default:
            return state;
    }
    
    
    
             
}