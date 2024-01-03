export default function createReportObject(employeesList) {
  const dict = {
    allEmployees: employeesList,
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
  return dict;
}
