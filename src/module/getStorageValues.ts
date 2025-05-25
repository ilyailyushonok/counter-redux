export const getStorageValue = (x: string) => {
    const item = localStorage.getItem(x);
    return item !== null ? JSON.parse(item) : undefined;
}
