import moment from "moment";
import "moment/locale/pt-br";

const momentDate = (date: string) => {
  if (!date) return;

  const formatedDate = moment(date)?.format("ll");
  return formatedDate;
};

export default momentDate;
