import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
    <AppBar position="static" elevation={0} className={classes.appBar}>
  <Toolbar>Hello</Toolbar>
  </AppBar>

    return (
      <div>
        <AppBar>
          <Toolbar>
            Hello
          </Toolbar>
        </AppBar>
      </div>
    )
  }
  
  return (
    <div>
            <AppBar position="static" elevation={0} className={classes.appBar}>
            <Toolbar>Hello</Toolbar>
      </AppBar>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;