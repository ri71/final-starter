import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
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

const NewCampusView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ textDecoration: "none" }}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={"/"}>
            <Typography variant="h6" className={classes.title} color="inherit">
              Campus App
            </Typography>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            New Campus
          </Typography>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Address:{" "}
          </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Description:{" "}
          </label>
          <input
            type="text"
            name="description"
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default NewCampusView;