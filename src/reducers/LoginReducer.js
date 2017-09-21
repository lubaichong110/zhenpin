export default function(state = [], action) {
    switch (action.type) {
        case "GET_REGIST":
        return action.payload
        default:
            return state
    }
}