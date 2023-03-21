import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

let currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa_logo.png",
};

let templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        likeToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            if (tuit.liked) {
                tuit.likes += 1
            } else {
                tuit.likes -= 1
            }
        },
        createTuit(state, action) {
            // templateTuit = {
            //     ...templateTuit,
            //     userName:
            // }
            // templateTuit.
            // console.log("templateTuit:" + templateTuit.userName)
            console.log("payload: " + action.payload.userName);
            state.unshift({
                ...templateTuit,
                ...action.payload,
                // ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const {likeToggle, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;