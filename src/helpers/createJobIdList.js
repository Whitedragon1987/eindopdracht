function createJobIdList(jobsChoice) {

    const jobIdList = [];

    jobsChoice.map((job) =>{

        jobIdList.push(job.id);

        return jobIdList;

    })

    return jobIdList;

}

export default createJobIdList;