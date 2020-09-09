import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import AddNote from './components/AddNote';
import NoteCard from './components/NoteCard';
import CardActions from '@material-ui/core/CardActions';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    backgroundColor: "white",
    width: '100vw',
    height: '100vh',
  },

  noteCardWrapper: {
    marginLeft: "200px",
    marginRight: "150px",
    marginTop: "40px"

  },
});



class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  addNote = (note) => {
    console.log(note)
    const newNotes = this.state.notes
    newNotes.push(note)
    this.setState({
      notes: newNotes
    })
  }

  deleteNote = (index) => {
    console.log(index)
    const newNotes = []
    this.state.notes.map((item, i) => {
      if (i !== index) {
        newNotes.push(item)
      }
    })

    this.setState({
      notes: newNotes
    })
  }

  editNote =(index,note) => {
    const newNotes=[]
    this.state.notes.map((item,i)=>{
      if(i!==index){
        newNotes.push(item)
      }
      else{
        newNotes.push(note)
      }
    })
    this.setState({
      notes:newNotes
    })

  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <AddNote onAddNote={this.addNote} />
          </Grid>
          <Grid item container xs={12} className={classes.noteCardWrapper}>
            {this.state.notes.map((item, index) => {
              return (
                <Grid item xs={4}>
                  <NoteCard note={item} index={index} del={this.deleteNote} edit={this.editNote}/>
                </Grid>
              )
            })
            }
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
