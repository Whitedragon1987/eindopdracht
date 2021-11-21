function createMachineObjects(machineOptions) {

    return machineOptions.map((machine) => {

        const container = {};

        container["id"] = machine.id;

        container["value"] = machine.name;

        return container;

    })

}

export default createMachineObjects;