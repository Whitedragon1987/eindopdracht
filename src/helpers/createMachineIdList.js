function createMachineIdList(machinesChoice) {

    return machinesChoice.map((machine) => {

        const container = {};

        container["id"] = machine.id;

        return container;

    })

}

export default createMachineIdList;