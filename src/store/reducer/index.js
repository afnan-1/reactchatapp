const INITIAL_STATE = {
    users: [
        {
            name: "afnan",
            email: "afnan#gmail.com"
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SETDATA":
            return({
                ...state,
                users:[...state.users,action.data]
            })
        default:
            return state;
    }
    
    
    
             
}