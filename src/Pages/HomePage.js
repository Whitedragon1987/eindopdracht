import Logo from "../componenten/HomePageComponents/LogoComponents/Logo";
import Projects from "../componenten/HomePageComponents/ProjectComponents/Projects";
import MachinesPreview from "../componenten/HomePageComponents/MachinesComponents/MachinesPreview";
import JobsPreview from "../componenten/HomePageComponents/JobsComponents/JobsPreview";

function HomePage() {

    return(
        <>
            <Logo/>
            <Projects/>
            <MachinesPreview/>
            <JobsPreview/>
        </>

    )
}

export default HomePage;