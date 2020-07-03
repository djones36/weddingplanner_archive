// error middleware (500) for console log
const errorRef = error => {
  const hash = Math.random()
    .toString(36)
    .substring(2);
  console.log(hash, error);
  return {
    message: `******************************\n\nUnknown Error, Ref: ${hash}\n\n******************************`,
    error
  };
};

module.exports = errorRef;
