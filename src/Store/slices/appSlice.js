import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        openNavbarMenu: false,
        closeTopBar: false,
    },
    reducers: {
        handleTopBarClose: (state, action) => {
            state.closeTopBar = action.payload;
        },
        handleNavbarMenuToggle: (state, action) => {
            state.openNavbarMenu = action.payload;
        },
    },
});

export default appSlice.reducer;

export const {
    handleTopBarClose,
    handleNavbarMenuToggle,
} = appSlice.actions;