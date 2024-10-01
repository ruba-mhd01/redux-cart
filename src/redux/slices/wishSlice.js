import { createSlice } from "@reduxjs/toolkit";



const wishSlice=createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },
    reducers:{
        addToWishlist(state,action){
            const existing=state.wishlist.find(item=>item.id==action.payload.id)
            if(existing){
                alert("Product already exist in wishlist!!")
            }
            else{
                state.wishlist.push(action.payload)
                alert("Product Added To Wishlist")
            }
        },
        removeFromWishlist(state,action){
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
            alert("Product Removed")
        }
    }
})

export default wishSlice.reducer
export const {addToWishlist,removeFromWishlist}=wishSlice.actions