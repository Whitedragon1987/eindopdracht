import {NavLink} from "react-router-dom";


function NavigatieBar() {

    return(
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/request"  exact activeClassName="active-link">Verhuur</NavLink>
                    </li>

                    <li>
                        <NavLink to="/jobs"  exact activeClassName="active-link">Diensten</NavLink>
                    </li>

                    <li>
                        <NavLink to="/quote"  exact activeClassName="active-link">Offerte</NavLink>
                    </li>

                    <li>
                        <NavLink to="/review" exact actiiveClassName="active-link">Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/new-review" exact actiiveClassName="active-link">Review</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login"  exact activeClassName="active-link">Inloggen</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default NavigatieBar;