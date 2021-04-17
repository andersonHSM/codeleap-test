import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  differenceInWeeks,
} from "date-fns";

const getDateDifferenceString = (date: string) => {
  const parsedDate = new Date(date);

  const differenceInSecondsString = differenceInSeconds(new Date(), parsedDate);
  const differenceInMinutesString = differenceInMinutes(new Date(), parsedDate);
  const differenceInHoursString = differenceInHours(new Date(), parsedDate);
  const differenceInDaysString = differenceInDays(new Date(), parsedDate);
  const differenceInWeeksString = differenceInWeeks(new Date(), parsedDate);

  if (differenceInWeeksString < 1) {
    return `${differenceInDaysString} day${
      differenceInDaysString > 1 ? "s" : ""
    } ago`;
  } else if (differenceInDaysString < 1) {
    return `${differenceInHoursString} hours ago`;
  } else if (differenceInHoursString < 1) {
    return `${differenceInMinutesString} minutes ago`;
  } else if (differenceInMinutesString < 1) {
    return `${differenceInSecondsString} seconds ago`;
  }

  return `${differenceInWeeksString} week${
    differenceInWeeksString > 1 ? "s" : ""
  } ago`;
};

export default getDateDifferenceString;
