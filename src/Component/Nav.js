import React from "react"
import { Link} from "react-router-dom"
function Nav (){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Electric products </Link> 
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
              </li>
              
        
  
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">Cart </Link> 
                </li>
  
               
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Nav