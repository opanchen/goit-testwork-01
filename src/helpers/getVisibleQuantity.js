export const getVisibleQuantity = (number) => {

    const string = number.toString();

    if (number < 1000) return string

    if (number >= 1000 && number < 1000000) {
        const x = string.slice(0, string.length-3);
        const y = string.slice(string.length-3, string.length);
        return `${x},${y}`;
    }

    const x = string.slice(0, string.length-6);
    const y = string.slice(string.length-6, string.length-3);
    const z = string.slice(string.length-3, string.length);
    return `${x},${y},${z}`;
}