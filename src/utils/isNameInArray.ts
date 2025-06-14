export function isNameInArray<T extends { name: string }>(name: string, array: T[]) {
    return array.find(item => item.name.toLowerCase() === name.toLowerCase());
}