import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import staticDataSlice from "./slices/staticDataSlice";
import propertiesSlice from "./slices/propertiesSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        staticData: staticDataSlice,
        properties: propertiesSlice
    }
});