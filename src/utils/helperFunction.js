exports.toMilliSecond = (input, type) => {
    if (typeof input !== "number") {
      throw new Error("Invalid Input type!!");
    }
    if (type === "day") {
      return 1000 * 60 * 60 * 24 * input;
    } else if (type === "hour") {
      return 1000 * 60 * 60 * input;
    } else if (type === "min") {
      return 1000 * 60 * input;
    } else if (type === "sec") {
      return 1000 * input;
    } else {
      return 1000 * 60 * input;
    }
  };