function createJobObjects(jobOptions) {

    return jobOptions.map((job) => {

        const container = {};

        container["id"] = job.id;
        container["value"] = job.name;

        return container;

    })

}

export default createJobObjects;