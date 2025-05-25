export const getStorageValue = (x: string) => {
    const item = localStorage.getItem(x);
    return item !== null ? JSON.parse(item) : undefined;
}
export const valuesInStorage={
    value:getStorageValue("value"),
    minValue:getStorageValue("minValue"),
    maxValue:getStorageValue("maxValue"),
}