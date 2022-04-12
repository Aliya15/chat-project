export default function SecondsToDate(seconds) {
    const date = new Date(Date.UTC(1970, 0, 1));
    date.setUTCSeconds(seconds);
    return date;
}
