import {NavLink} from "react-router-dom";

function NavBar() {

    return(
        <nav className="nav-container">
            <div>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/machines" exact activeClassName="active-link">Machines</NavLink>
                    </li>

                    <li>
                        <NavLink to="/jobs"  exact activeClassName="active-link">Diensten</NavLink>
                    </li>

                    <li>
                        <NavLink to="/quote"  exact activeClassName="active-link">Offerte</NavLink>
                    </li>

                    <li>
                        <NavLink to="/request"  exact activeClassName="active-link">Verzoek</NavLink>
                    </li>

                    <li>
                        <NavLink to="/review" exact activeClassName="active-link">Review</NavLink>
                    </li>

                    <li>
                        <NavLink to="/customer-data" exact activeClassName="active-link">Klantgegevens</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/pictures" exact activeClassName="active-link">Afbeeldingen</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login"  exact activeClassName="active-link">Inloggen</NavLink>
                    </li>

                </ul>

                <ul>

                    <li>
                        <NavLink to="/employees"  exact activeClassName="active-link">Medewerkers</NavLink>
                    </li>

                    <li>
                        <NavLink to="/new-picture"  exact activeClassName="active-link">Afbeelding toevoegen</NavLink>
                    </li>

                    <li>
                        <NavLink to="/new-employee"  exact activeClassName="active-link">Medewerker toevoegen</NavLink>
                    </li>

                    <li>
                        <NavLink to="/new-job" exact activeClassName="active-link">Dienst toevoegen</NavLink>
                    </li>

                    <li>
                        <NavLink to="/new-machine" exact activeClassName="active-link">Machine toevoegen</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavBar;