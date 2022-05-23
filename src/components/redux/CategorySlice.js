import { createSlice } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: [],
    },
    reducers: {
        addCategory: (state, action) => {
            console.log("category Add slice data :", action.payload)
            state.category.push(action.payload)
        },
        editCategory: (state, action) => {
            console.log("Category edit slice data :", action)
            console.log("Category edit slice ID :", action.payload.id)
            const index = action.payload.id
            state.category[index].categoryName = action.payload.categoryName
        },
        deleteCategory: (state, action) => {
            console.log("Category delete action", action.payload)
            const index = action.payload
            state.category.splice(index, 1)
        }
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: []
    },
    reducers: {
        addProduct: (state, action) => {
            console.log("add product data:", action.payload)
            state.product.push(action.payload)
        },
        editProduct: (state, action) => {
            console.log("Product edit data :", action.payload)
            const id = action.payload.id
            state.product[id] = action.payload
        },
        deleteProduct: (state, action) => {
            const index = action.payload
            state.product.splice(index, 1)
        }
    },
    extraReducers: {

    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: []
    },
    reducers: {
        addUser: (state, action) => {
            console.log("User add reducer", action.payload)
            state.user.push(action.payload)
        },
        editUser: (state, action) => {
            console.log("User edit reducer", action.payload)
            const id = action.payload.id
            state.user[id] = action.payload
        },
        deleteUser: (state, action) => {
            console.log("User deleted reducer", action.payload)
            const id = action.payload
            state.user.splice(id, 1)
        }
    }
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 1
    },
    reducers: {
        Increment: (state) => {
            state.count++
        },
        Decrement: (state) => {
            if (state.count <= 0) {
                return
            }
            state.count--
        }
    }
})


export const { addCategory, editCategory, deleteCategory } = categorySlice.actions
export const { addProduct, editProduct, deleteProduct } = productSlice.actions
export const { addUser, editUser, deleteUser } = userSlice.actions
export const { Increment, Decrement } = counterSlice.actions
export const rootReducer = combineReducers({
    category: categorySlice.reducer,
    product: productSlice.reducer,
    user: userSlice.reducer,
    counter: counterSlice.reducer
})