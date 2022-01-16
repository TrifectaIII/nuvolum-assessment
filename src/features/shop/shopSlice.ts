import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';
import { Product, fetchProducts } from './shopAPI';

type RequestStatus = 'idle' | 'loading' | 'fulfilled' | 'rejected';

export interface ShopState {
    products: Product[]
    chosen: number
    requestStatus: RequestStatus
}

const initialState: ShopState = {
    products: [],
    chosen: 0,
    requestStatus: 'idle',
};

// build a redux thunk which fetchs product info
export const fetchProductsAsync = createAsyncThunk(
    'shop/fetchProducts',
    async (): Promise<Product[]> => await fetchProducts(),
);

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        // reducers for choosing the current product
        chooseProduct: (state, action: PayloadAction<number>) => {
            if (state.chosen === action.payload) {
                state.chosen = -1;
            }
            else {
                state.chosen = action.payload;
            }
        }
    },
    // build extrareducers for async thunk
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.requestStatus = 'loading';
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.requestStatus = 'fulfilled';
                state.products = action.payload;
            })
            .addCase(fetchProductsAsync.rejected, (state) => {
                state.requestStatus = 'rejected';
            });
    },
});

export const { chooseProduct } = shopSlice.actions;

// selectors help us grab info from the redux state
export const selectProducts = (state: RootState) => state.shop.products;
export const selectChosen = (state: RootState) => state.shop.chosen;
export const selectRequestStatus = (state: RootState) => state.shop.requestStatus;

export default shopSlice.reducer;
