export default function createEmployeesObject(departmentName, employees) {
  const dict = {
    [departmentName]: employees,
  };
  return dict;
}
