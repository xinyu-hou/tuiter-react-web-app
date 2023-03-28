import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
};

// let currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "image": "nasa_logo.png",
// };

// let templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: { }
    // reducers: {
    //     likeToggle(state, action) {
    //         const tuit = state.find((tuit) =>
    //             tuit._id === action.payload._id)
    //         tuit.liked = !tuit.liked
    //         if (tuit.liked) {
    //             tuit.likes += 1
    //         } else {
    //             tuit.likes -= 1
    //         }
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...templateTuit,
    //             ...action.payload,
    //             _id: (new Date()).getTime(),
    //         })
    //     },
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    // }
});

export const {likeToggle, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;