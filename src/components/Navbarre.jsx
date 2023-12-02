import { NavLink } from "react-router-dom";

function NavBarre () {


    return (
     
        <div className='navbarre'>
            <div className='links'>
                <NavLink to={"/"}>ACCUEIL</NavLink>
                <NavLink to={"/"}>A PROPOS</NavLink>
                <NavLink to={"/"}>PROJETS</NavLink>
                <NavLink to={"/"}>COMPETENCES</NavLink>
                <NavLink to={"/"}>CONTACT</NavLink>
            </div>
        </div>

    )
}

export default NavBarre;