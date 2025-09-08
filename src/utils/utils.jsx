export const idGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4();
};

export const removeNonAlphanumeric = (inputString) => {
  return inputString.replace(/[^a-zA-Z0-9]/g, '');
};
