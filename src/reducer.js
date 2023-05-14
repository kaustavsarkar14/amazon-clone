export const initialState = {
    basket: [{
        id: "12324",
        title: "IPhone",
        price: 456,
        rating: 5,
        image: "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
    }, {
        id: "12324",
        title: "Nike Air Max Torch 3 Men s Running Shoes",
        price: 16548,
        rating: 3,
        image: "https://m.media-amazon.com/images/I/71wbXtpEwQL._UY675_.jpg"
    }]
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            console.log(state)
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id ===action.id
            )
            if (index>=0){
                newBasket.splice(index,1)
            }
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer