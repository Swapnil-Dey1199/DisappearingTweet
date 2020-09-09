import React,{Component} from 'react';
import { withStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
     wrapper:{
         backgroundColor:"white",
         marginTop:"30px",
         marginLeft:"30px",
         marginRight:"30px",
     },

     inputContainer:{
         height:"110%",
         borderRadius:"30px",
         backgroundColor:theme.palette.primary.light

        
     },

     addIcon:{
        height:"40px",
        width:"40px",
        marginTop:"10px",
        marginLeft:"15px",
     },

     inputContainerWrapper:{
       
       padding:"10px 10px 10px 150px",
     },

     input:{
        height:"75%",
        width:"90%",
        float:"right",
        marginTop:"10px",
        marginRight:"25px",
        border:"none",
        outline:"0",
        fontSize:"20px",
        background:"none"
     },

     button:{
         backgroundColor:theme.palette.primary.main,
         height:"60px",
         marginTop:"10px",
         width:"60%",
         borderRadius:"30px",
         marginLeft:"10px",
         color:"white",
         border:"none",
         fontSize:"20px",
         
         
         
     },
});


class AddNote extends Component{
    

    constructor(){
        super()
        this.state={
            note:"",
        }
    }  
    
    handleOnChange=(event)=>{
        this.setState({
            note:event.target.value,
        })
    }

    handleOnClick=(event)=>{
        this.props.onAddNote(this.state.note)
        this.setState({
            note:""
        })
    }

    render(){
        const {classes} = this.props
        
        return(
            <Box display="flex" className={classes.wrapper}>

                <Box flexGrow={8} className={classes.inputContainerWrapper}>
                  <div className={classes.inputContainer}>
                    <AddIcon className={classes.addIcon}/>
                    <input  className={classes.input}  placeholder="Write your tweet here....." onChange={this.handleOnChange} value={this.state.note}>
                      
                    </input>
                  </div>
                </Box>
                <Box flexGrow={2}>
                    <button className={classes.button} onClick={this.handleOnClick}>
                        <b>Add Tweet</b>
                    </button>
                </Box>
            </Box>
        )
    }
}
export default withStyles(styles)(AddNote);