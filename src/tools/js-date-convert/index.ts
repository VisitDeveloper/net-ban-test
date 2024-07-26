export function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp);


    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${month}/${day}/${year} at ${hours}:${minutes}`;
}