import { Component } from "react";
import "../quesBar/QuesbarStyles.css";
import { Link } from 'react-router-dom';

class Quesbar extends Component{
    render(){
        return(
            <nav className="QuesNavItems">
                <div className="QuesCircle">
                    1
                </div>
                <button className="QuesPrevBtn" type="prevQ">&#60;</button>
                <button className="QuesNextBtn" type="nextQ">&#62;</button>
                <div>
                <Link className="SubmitBtn" to={'results'}>Submit Quiz</Link>
                </div>   
            </nav>
        )
    }
}

export default Quesbar;