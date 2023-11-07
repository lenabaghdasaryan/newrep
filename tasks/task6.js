//  Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
function getCompactObject(obj) {
    const newArr = [];
    if (Array.isArray(obj)) {
        obj.forEach((elem => {
            if (Array.isArray(elem)) {
                elem.forEach(el => {
                    if (el) {
                        newArr.push([el])
                    }
                })
            }
            else {
                if (elem) {
                    newArr.push(elem)
                }
            }

        })
        )
    }
    else if (typeof (obj) === 'object') {
        const value = Object.values(obj);
        const key = Object.keys(obj)
        for (let i = 0; i < key.length; i++) {
            if (Array.isArray(value[i])) {
                value[i].forEach(elem => {
                    if (elem) {
                        newArr.push({ [key[i]]: elem });
                    }
                });
            }
            else {
                if (value[i]) {
                    newArr.push({ [key[i]]: value[i] })
                }
            }
        }
    }
    console.log(newArr);
}
getCompactObject([null, 0, 5, [0], [false, 16]])