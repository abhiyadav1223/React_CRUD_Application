import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "userData",
    initialState: {
        value:
            [
                {
                    id: 1001,
                    name: "Abhi Yadav",
                    mobile: "62646136099",
                    email: "abhi123@gmail.com",
                    address: "Indore"
                },
                {
                    id: 1002,
                    name: "Jayesh Gaur",
                    mobile: "9039520098",
                    email: "gaurjayesh3897@gmail.com",
                    address: "Pune"
                }, {
                    id: 1003,
                    name: "Parth Kapse",
                    mobile: "897862341",
                    email: "parth33@gmail.com",
                    address: "Bhopal"
                }
            ],
        userId: []
    },
    reducers: {
        addVal: (state, action) => {
            var val = action.payload
            state.userId = [val]
        },
        addUser: (state, action) => {
            var userdata = action.payload
            state.value = [...state.value, userdata]
        },
        removeUser: (state, action) => {
            var userdata = action.payload
            state.value = state.value.filter(val => val.id !== userdata)
        },
        updateUser: (state, action) => {
            var userdata = action.payload
            var nm = state.value[state.value.findIndex(val => val.id === userdata.id)];
            nm.id = userdata.id
            nm.name = userdata.name
            nm.mobile = userdata.mobile
            nm.email = userdata.email
            nm.address = userdata.address
        },
        finddata: (state, action) => {
            var ary = state.value;
            var data = action.payload
            if (data != 0) {
                state.value = state.value.filter(eb => {
                    if (eb.name.toLowerCase().includes(data.toLowerCase())) {
                        return eb;
                    }
                    else if (eb.address.toLowerCase().includes(data.toLowerCase())) {
                        return eb;
                    }
                    else if (eb.email.toLowerCase().includes(data.toLowerCase())) {
                        return eb;
                    }
                    else if (eb.mobile.toLowerCase().includes(data.toLowerCase())) {
                        return eb;
                    }
                });
            } else {
                state.value = ary;
            }
        }
    }
})
export const { addVal, addUser, removeUser, updateUser, finddata } = slice.actions
export default slice.reducer