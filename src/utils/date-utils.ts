import moment from "moment";

export const getTripDateLabel = (date: number): string => {
  return moment(date).format("Do MMM YYYY");
};

export const diffInDays = (date: number, endDate: number): string => {
  return moment(endDate).from(date, true);
};
