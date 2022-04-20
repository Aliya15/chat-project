
export default function TimestampFormatter(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const messageDay = day < 10 ? +`0${day}` : day;
    const messageMonth = month < 10 ? `0${month}` : month;
    const messageHours = hours < 10 ? `0${hours}` : hours;
    const messageMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${messageDay}.${messageMonth}.${year} ${messageHours}:${messageMinutes}`;
}
