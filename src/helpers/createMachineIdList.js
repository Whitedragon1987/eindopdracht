function createMachineIdList(machinesChoice) {

    const machineIdList = new Array();
    // console.log(machineIdList)
    // console.log(machinesChoice)

    return machinesChoice.map((machine) => {

        machineIdList.push(machine.id);

        return machineIdList;

        // const container = {};
        //
        // container["id"] = machine.id;
        //
        // return container;

    })

}

export default createMachineIdList;