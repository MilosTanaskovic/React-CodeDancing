export const convertArrayToObject = (array) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item]: item,
        }
    }, initialValue);
}