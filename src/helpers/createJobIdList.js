function createJobIdList(jobsChoice) {

    if (jobsChoice != null){
        return jobsChoice.map((job)=> {

            const container = {};

            container["id" ] = job.id;

            return container;

        })
    }

}

export default createJobIdList();