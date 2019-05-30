import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/characters/Characters';
import { fetchCharacters } from '../actions/characterActions';
import { selectCharacters, selectCharactersLoading } from '../selectors/characterSelectors';

class AllCharacters extends PureComponent {
  static propTypes = {
    characters: PropTypes.array.isRequired,
    loading:  PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { loading, characters } = this.props;
    if(loading) return <h1>LOADING</h1>;

    <Characters characters={characters} />;
  }
}

const mapStateToProps = state => ({
  characters: selectCharacters(state),
  loading: selectCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
