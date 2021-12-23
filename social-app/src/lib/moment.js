import moment from "moment";
const momentDisplay = (time) => {
  const timeAgo = moment(time).fromNow();
  return timeAgo
}

export default momentDisplay