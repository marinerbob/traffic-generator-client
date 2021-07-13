export const normalizeArr = (arr, key) => {
    return arr.reduce((obj, current) => {
        obj[current[key]] = current;
        
        return obj;
     }, {});
};

export const getObjKeys = obj => Object.keys(obj);
export const getObjValues = obj => Object.values(obj);
export const isEmpty = obj => Object.keys(obj).length === 0;

export const deleteProp = (obj, propName) => {
    if (obj.hasOwnProperty(propName)) {
        delete obj[propName];
    }

    return obj;
};

export const toggleProp = (obj, propName) => {
    if (obj.hasOwnProperty(propName)) {
        delete obj[propName];
    } else {
        obj[propName] = true;
    }

    return obj;
};