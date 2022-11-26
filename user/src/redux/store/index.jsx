import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "../../component/User/UserSlice";
import { saveState } from '../../localStorage/index';

const store = configureStore({
    reducer: {
        userList: UserSlice.reducer,
    }
})
store.subscribe(() => saveState(store.getState()));

export default store;