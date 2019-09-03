import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DogList from '../components/dog/DogList';
import { fetchDog } from '../action/dogActions';
import { getAllDogs, getLoading } from '../selectors/dogSelector';


class AllDogs extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    dogs: PropTypes.array.isRequired,
    inputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }


  componentDidMount() {
    this.props.fetch();
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  render() {
    const { loading, dogs } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return (
      <DogList dogs={dogs} />
    );
  }
}

const mapStateToProps = state => ({
  dogs: getAllDogs(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllDogs);


