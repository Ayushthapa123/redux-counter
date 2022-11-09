const initialState="Ayush";
export const toggleName=(state=initialState,action)=> {

    switch(action.type) {
        case "Ayush":
            return "Thapa";
        case "Thapa":
            return "Ayush";
       

        default: 
            return state;
    }

}