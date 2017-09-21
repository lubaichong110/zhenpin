export default function(state = [], action) {
    switch (action.type) {
        case "ALL_COUNT":
            var newState = [...state];
            newState.push(action.payload);
            return newState;
        default:
            return state
    }
}