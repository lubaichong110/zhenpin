export default function(state = [], action) {
    switch (action.type) {
        case "PLUS_COUNT":
            var newState = [...state];
            console.log(newState)
            return newState;
        default:
            return state
    }
}