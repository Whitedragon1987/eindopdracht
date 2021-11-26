function createEmployeeObjects(employeeOptions) {

    return employeeOptions.map((employee) => {

        const container = {};

        container["id"] = employee.id;

        container["value"] = employee.name;

        container["employee"] = employee;

        return container;

    })

}

export default createEmployeeObjects;