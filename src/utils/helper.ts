export const getDoubleValuDate = (date: number) => {
  return String(date).length < 2 ? `0${date}` : date;
};
export const getTime = (hour: number, min: number) => {
  if (!hour) {
    return "";
  }
  if (hour === 0 || String(hour) === "0") {
    return `12:${getDoubleValuDate(min)}`;
  }
  
    return `${getDoubleValuDate(hour)}:${getDoubleValuDate(min)}`;
  
};
export const getTimeFromDate = (dateTime: string): [number, number] => {
  // if (!dateTime) return ''
  const date = new Date(dateTime);
  return [date.getHours(), date.getMinutes()];
};
export const formatTime = (dateTime: string) => {
  if (!dateTime) {
    return "";
  }

  const [hour, min] = getTimeFromDate(dateTime);

  const time = getTime(hour, min);

  return time;
};
