import { createSlice } from "@reduxjs/toolkit";
import profileInfo from "./profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        saveProfile(state, action) {
            const updatedProfile = action.payload;
            const outdatedProfile = state[0];
            console.log("reducer side");
            console.log(updatedProfile);
            outdatedProfile.firstName = updatedProfile.firstName;
            outdatedProfile.lastName = updatedProfile.lastName;
            outdatedProfile.bio = updatedProfile.bio;
            outdatedProfile.location = updatedProfile.location;
            outdatedProfile.website = updatedProfile.website;
            outdatedProfile.dateOfBirth = updatedProfile.dateOfBirth;
        }
    }
});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;