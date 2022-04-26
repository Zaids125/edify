export const numberFormat1 = (x, round) => {
  if (typeof x === "string") x = x.split(",").join("");

  if (round) {
    x = parseInt(x);
    x = Math.round(x);
  }
  x = x.toString();
  console.log("NUMBERFORMAT1", x);
  if (x[0] === ".") {
    return "0";
  }
  if (!/^[0-9.,]+$/.test(x)) {
    return x.slice(0, -1);
  }
  const dotCount = (x.match(/\./g) || []).length;
  if (dotCount > 1) {
    x = x.slice(0, -1);
  }
  var afterPoint = "";
  if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
  x = Math.floor(x);
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  //   if (otherNumbers != "") lastThree = "," + lastThree;
  var res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

  return res;
};

export const yearFormat = (x, round) => {
  if (typeof x === "string") x = x.split(",").join("");

  if (round) {
    x = parseInt(x);
    x = Math.round(x);
  }
  x = x.toString();
  console.log("NUMBERFORMAT1", x);
  if (x[0] === ".") {
    return "0";
  }
  if (!/^[0-9.,]+$/.test(x)) {
    return x.slice(0, -1);
  }
  const dotCount = (x.match(/\./g) || []).length;
  if (dotCount > 1) {
    x = x.slice(0, -1);
  }
  var afterPoint = "";
  if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
  x = Math.floor(x);
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  //   if (otherNumbers != "") lastThree = "," + lastThree;
  var res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

  return res;
};
