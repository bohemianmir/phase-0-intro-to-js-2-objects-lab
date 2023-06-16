let employee = {
    name: "Sam",
  };
  const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return {
      ...employee,
      [key]: value,
    };
  };
  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
  };
  const deleteFromEmployeeByKey = (employee, key) => {
    const emObj = { ...employee };
    delete emObj[key];
    return emObj;
  };
  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    let obj = { ...employee };
    delete employee[key];
    return employee;
  };