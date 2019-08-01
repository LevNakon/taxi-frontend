export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const CONDITION = Object.freeze({
    USUAL: 'Teleport',
    COMFORT: 'Comfort',
    PREMIUM: 'Premium'
});
export const TAXI_API_URL = 'https://taxi-like-backend.herokuapp.com';