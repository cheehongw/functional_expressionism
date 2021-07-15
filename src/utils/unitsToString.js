/**
 * A function to convert values with units to String.
 * 
 * Object is typically received from toBest()::convert-units, but any object can
 * be used if it fulfils the following structure:
 * 
 * @param {Object} object The object encapsulating a value and its unit.
 * @param {Number} object.val The object's value
 * @param {String} object.unit The object's unit.
 * 
 * @returns A string.
 */
export default function unitsToString(object) {
    return `${object.val.toPrecision(4)} ${object.unit}`
}