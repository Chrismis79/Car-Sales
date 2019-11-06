import { REMOVE_ITEM, ADD_ITEM } from "../actions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            let newItem = [];
            let app = 0;
            if(state.car.features.indexOf(action.payload) > -1) {
                newItem = state.car.features;
            }else{
                newItem = [...state.car.features, action.payload];
                app = action.payload.price;
            }
            return {
                ...state,
                additionalPrice: app + state.additionalPrice,
                car: {
                    ...state.car,
                    features: newItem
                }
            };
              
        case REMOVE_ITEM: 
            const rmItem = state.car.features.filter(item => {
                if(String(item.id) !== String(action.payload.id)){
                    return item;
                }
            });
            return {
                ...state,
            additionalPrice: state.additionalPrice - action.payload.price,
            car: {...state.car, features: rmItem}}
            default: 
            return state;
    }
};

export const 