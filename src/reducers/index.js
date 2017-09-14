import {
    createStore,
    combineReducers
} from 'redux'
import HomeReducer from "./HomeReducer"
import DiscoverReducer from "./DiscoverReducer"
import OrderReducer from "./OrderReducer"
import MyReducer from "./MyReducer"

const reducers = combineReducers({
    Home: HomeReducer,
    Discover: DiscoverReducer,
    Order: OrderReducer,
    My: MyReducer
})

export default reducers;