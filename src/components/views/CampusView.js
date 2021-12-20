import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: 'black'
  },
  appBar:{
    backgroundColor: '#b2a6ff',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  const classes = useStyles();

  if (campus.students.length === 0) {
    return (
      <div>  
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={'/'}>
            <Typography variant="h6" className={classes.title} color="inherit" >
                Campus App
            </Typography>
          </Link>
          
          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

        <h1 className={classes.text} >{campus.name}</h1>
        <p className={classes.text}>
          {campus.description} <br/>
          {"Address: " + campus.address} <br/>
        </p>
        <h2 className={classes.text}>No students attending this campus.</h2>
        <button onClick={() => deleteCampus(campus.id)} className={classes.button}>
          Delete Campus
        </button>
      </div>
    );
  }
  else {
    return (
      <div>   
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={'/'}>
            <Typography variant="h6" className={classes.title} color="inherit" >
                Campus App
            </Typography>
          </Link>
          
          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>   
        <h1 className={classes.schoolName}>{campus.name}</h1>
        <p className={classes.text}>
          {campus.description} <br/>
          {"Address: " + campus.address} <br/>
        </p>
        <h3 className={classes.text}>Students attending this campus: </h3>
        <ul>
        {campus.students.map( student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <li key={student.id} className={classes.text}>
              <Link to={`/student/${student.id}`} className={classes.student}>
                {name}
              </Link>
            </li>
          );
        })}
        </ul>
        <button onClick={() => deleteCampus(campus.id)} className={classes.button}>Delete Campus</button>
      </div>
    );
  }

};

export default CampusView;