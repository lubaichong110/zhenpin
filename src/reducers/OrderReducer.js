export default function(state = [], action) {
    switch (action.type) {
        case "GET_HOME_LIST":
            return action.payload
        default:
            return state
    }
}