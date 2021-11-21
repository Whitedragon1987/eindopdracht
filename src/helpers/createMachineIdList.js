function createMachineIdList(machinesChoice) {

    const machineIdList = [];

     machinesChoice.map((machine) => {

        machineIdList.push(machine.id);

        return machineIdList;

    })

    return machineIdList;

}

export default createMachineIdList;