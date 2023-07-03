import React from "react"
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import {blue, green} from "@material-ui/core/colors";
import "./QuesStyles.css";

const pageStyle = makeStyles(theme => ({
    container: {
      padding: "12px"
    },
    heading: {
      marginBottom: "12px"
    },
    currentQuestion: {
        backgroundColor: blue[500],
        fontSize: "16px",
        margin: "6px"
    },
    wrongAnswer: {
        backgroundColor: green[500],
        fontSize: "16px",
        margin: "6px"
    },
    rightAnswer: {
        backgroundColor: green[500],
        fontSize: "16px",
        margin: "6px"
    },
    normalQuestion: {
        fontSize: "16px",
        margin: "6px"
    }
}))

function ShowNoOfQuestions(props){
    let classes = pageStyle()

    return(
        <Grid container className={"NoOfQuesHeading"}>
            <Grid item className={classes.heading}>
                Question {props.quesNum+1}/{props.questionsLength}
                
            </Grid>
            <Grid item className="PBNavques">
                <Grid container justifyContent="center" >
                    {
                        Array(props.questionsLength).fill(1).map( (value, index) =>{
                            return <Avatar key={index} className={ (props.quesNum === index) ? 
                                classes.currentQuestion :  (props.questionsStatus[index] === 1) ? 
                                classes.rightAnswer : (props.questionsStatus[index] === -1) ? 
                                classes.wrongAnswer : classes.normalQuestion }>{index+1}
                                
                                </Avatar>
                                
                        })
                        
                    }
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShowNoOfQuestions
