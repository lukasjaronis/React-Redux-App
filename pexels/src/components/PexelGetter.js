import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getImage } from '../actions/action';

const PexelGetter = props => {
    return (
        <div>
        <h1>Pexel Images</h1>
        {!props.images && !props.isFetching && <p>Search an image!</p>}
        {props.isFetching && (
            <Loader type="Puff" color='red' height={100} width={100} />
        )}
        {props.images && <p>props.images.images</p>}
        <button onClick={props.getImage}>Search</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        images: state.images,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { getImage }
  )(PexelGetter);