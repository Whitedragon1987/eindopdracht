import {NavLink} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";
import {useContext} from "react";

function NavBar() {

    const {user} = useContext(AuthContext);

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

                        <NavLink to="/new_quote"  exact activeClassName="active-link">Offerte</NavLink>

                    </li>

                    <li>

                        <NavLink to="/new_request"  exact activeClassName="active-link">Verzoek</NavLink>

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

                {user && user.authority.length === 2 &&

                <ul>

                    <li>

                        <NavLink to="/requests"  exact activeClassName="active-link">Verzoeken</NavLink>

                    </li>

                    <li>

                        <NavLink to="/quotes"  exact activeClassName="active-link">Offertes</NavLink>

                    </li>

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

                    <li>

                        <NavLink to="/reviews"  exact activeClassName="active-link">Reviews</NavLink>

                    </li>

                </ul>

                }

            </div>

        </nav>

    )

}

export default NavBar;