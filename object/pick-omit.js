function pick(obj, keys) {
    const picked = {};
    const keyArray = Array.isArray(keys) ? keys : [keys]; // Ensure keys is an array

    for (let key of keyArray) {
        if (obj.hasOwnProperty(key)) {
            picked[key] = obj[key];
        }
    }

    return picked;
}

function omit(obj, keys) {
    const omitted = {};
    const keyArray = Array.isArray(keys) ? keys : [keys]; // Ensure keys is an array

    for (let key in obj) {
        if (obj.hasOwnProperty(key) && !keyArray.includes(key)) {
            omitted[key] = obj[key];
        }
    }

    return omitted;
}

