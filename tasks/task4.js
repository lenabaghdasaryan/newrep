// 4)Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

function isEmptyobject(obj) {
    let res = '';
    if (Array.isArray(obj) && obj.length === 0) {
        res = obj
    } else if (typeof (obj) === 'object' && Object.keys(obj).length === 0) {
        res = obj
    }
    else {
        res = "Object or array is not empty"
    }
    console.log(res)
}
isEmptyobject({})