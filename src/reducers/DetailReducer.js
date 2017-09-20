export default function(state = [], action) {
    switch (action.type) {
        case "ADD_CART":
            return action.payload
        default:
            return state
            
    }
}