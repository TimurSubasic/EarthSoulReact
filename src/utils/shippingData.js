


let cartData = {
    amount25: 0,
    amount50: 0,
    totalPrice: 0
}


let shippingData = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    zip: '',
    message: ''
}

// functions cart

export const updateCartData = (newCartData) => {
    cartData = {
        ...cartData,
        ...newCartData
    }
}

export const getCartData = () => {
    return cartData
}

// functions shipping


export const updateShippingData = (newShippingData) => {
    shippingData = {
        ...shippingData,
        ...newShippingData
    }
}


export const getShippingData = () => {
    return shippingData
}


// function RESET 

export const resetData = () => {

    cartData = {
        amount25: 0,
        amount50: 0,
        totalPrice: 0
    }

    shippingData = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        country: '',
        city: '',
        zip: '',
        message: ''
    }

}

