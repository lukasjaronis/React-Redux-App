import React from "react";
import { getImage } from "../actions/action";
import styled from "styled-components";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '90%',
      margin: '2rem',
      backgroundColor: '#41B3A3'
    },
  }));

  const PexelGetterStyles = styled.div`
  
  .outerContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vh;
      color: #fff;
  }
  
  `;

const PexelGetter = props => {
    const classes = useStyles();
  return (
      <PexelGetterStyles>
    <div className="outerContainer">
      <h1>Pexel Images</h1>

      {!props.images && !props.isFetching && <p>Search an image!</p>}

      {props.isFetching && (
        <Loader type="Puff" color="#c38d9e" height={100} width={100} />
      )}

      {props.images &&
        props.images.map(img => (
            <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={3}>
            <Grid item xs>
            <Paper key={img.id} className={classes.paper}><img src={img.src.large} /></Paper>
            </Grid>
            </Grid>
        ))}

      <button onClick={props.getImage}>Search</button>
    </div>
    </PexelGetterStyles>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getImage })(PexelGetter);
