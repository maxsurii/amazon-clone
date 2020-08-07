//data layer logic will go here

export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price+amount, 0);
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET': 
            // Logic for adding item to basket
            return { ...state,
            basket: [...state.basket, action.payload] };            

        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            let newBasket = [...state.basket]
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id  === action.id
            );
            if(index >=0) {
                //Remove item with matching index number
                newBasket.splice(index, 1);
            } else {
                console.warn('No product to remove from basket')
            }

            return { ...state, 
            basket: newBasket };        
        
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
}

export default reducer;