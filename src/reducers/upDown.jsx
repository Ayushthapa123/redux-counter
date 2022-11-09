const initialState=10;
export const changeTheNumber=(state=initialState,action)=> {

    switch(action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state-1;
        case "DECREMENT5":
            return state - 5;
        case "INCREMENT5":
            return state + 5;

        default: 
            return state;
    }

}