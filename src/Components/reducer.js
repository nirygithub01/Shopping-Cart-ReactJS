export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state, 
            item: state.item.filter((currentElement) => {
                return currentElement.id !== action.payload;
            }),
        };
    }

    if (action.type === "CLEAR_CART") {
        return {...state, item:[]};
    }

    if(action.type === 'INCREMENT') {
        const updateCart = state.item.map((currentElement) => {
            if(currentElement.id === action.payload){
            return {...currentElement, quantity: currentElement.quantity + 1};

            }
            return currentElement;
        });
        return {...state, item: updateCart};
    }
    if (action.type === "DECREMENT") {
        const updateCart = state.item
        .map((currentElement)=> {
          if(currentElement.id === action.payload) {
              return {...currentElement, quantity: currentElement.quantity-1};

          }  
return currentElement;
          
        })
        .filter((currentElement) => currentElement.quantity !==0);
         return {...state, item:updateCart};
    }


    if(action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
            (accum, currentValue) => {
                let {price, quantity} = currentValue;

                let updateTotalAmount = price * quantity;
                accum.totalAmount += updateTotalAmount;

                accum.totalItem += quantity;
                return accum;
            },
            {
                totalItem: 0,
                totalAmount:0,
            }
        );
        return {...state, totalItem, totalAmount} ;
    }
    return state;
};
    
