import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // будем сохранять полный список букетов здесь
    items: [],
    // для отключения перезаписывания state начальными значениями
    loadedFiles: false,
};

const bouquetSlice = createSlice({
    name: "bouquet",
    initialState,
    reducers: {
        // установка полного списка
        setBouquet(state, action) {
            state.items = action.payload
        },
        // установка флага для отключения перезаписывания
        setLoadedFiles(state, action) {
            state.loadedFiles = action.payload
        },
    }
});

export default bouquetSlice.reducer;

export const {
    setBouquet,
    setLoadedFiles,
} = bouquetSlice.actions;