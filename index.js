// Write your solution in this file!
let employee = {
  name: "Felicity",
  streetAdress: "Nairobi",
};
function updateEmployeeWithKeyAndValue(object, key, value) {
  let newObj = { ...object };
  newObj[key] = value;
  return newObj;
}
updateEmployeeWithKeyAndValue(employee, "Heskey", "Kilimani");

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromEmployeeByKey(object, key) {
  let newObj = { ...object };
  delete newObj[key];
  return newObj;
}
deleteFromEmployeeByKey(employee, streetAdress);

function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}
