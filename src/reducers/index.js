import {
    createStore,
    combineReducers
} from 'redux'
import HomeReducer from "./HomeReducer"
import DiscoverReducer from "./DiscoverReducer"
import OrderReducer from "./OrderReducer"
import MyReducer from "./MyReducer"
import DetailReducer from "./DetailReducer"
import RegistReducer from "./RegistReducer"

const reducers = combineReducers({
    Home: HomeReducer,
    Discover: DiscoverReducer,
    Order: OrderReducer,
    My: MyReducer,
    detail_list: DetailReducer
    Regist: RegistReducer
})

export default reducers;