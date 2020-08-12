import { ADD, REMOVE } from '../actions/carActionList'

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
}



//Default parameters:
export const carReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case REMOVE:
            //remove from additonalFeature
            debugger
            return {
                
                additionalPrice: state.additionalPrice - action.payload.feature.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter( aFeature => aFeature.id !== action.payload.feature.id),
                },
                additionalFeatures: [...state.additionalFeatures, action.payload.feature]
            }
        case ADD:
            // add additonalFeatures that has been remove to car.features
            //add the price of car.features[index].price + car.additionalPrice
            //return it
            return {

                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                },
                additionalFeatures: state.additionalFeatures.filter(aFeature => aFeature.id !== action.payload.id
                )
            }
        default:
            return state
    }
}