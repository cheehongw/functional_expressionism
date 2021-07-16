/**
 * Applies String::toUpperCase() to the first character of a given string.
 * 
 * @param {String} s 
 * @returns String
 */
export default function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}