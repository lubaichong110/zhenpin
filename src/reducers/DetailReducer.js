export default function(state = [], action) {
    switch (action.type) {
        case "ADD_CART":
            var newState = [...state];
            newState.push(action.payload);
            console.log(newState);
            return newState;
        default:
            return state

    }
}