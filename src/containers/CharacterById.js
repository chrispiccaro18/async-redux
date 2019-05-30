import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CharacterDetail from '../components/characters/CharacterDetail';
import { selectCharacter, selectCharacterLoading } from '../selectors/characterSelectors';
import { fetchCharacter } from '../actions/characterActions';

class CharacterById extends PureComponent {
  static propTypes = {
    character: PropTypes.shape({
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    fetch:PropTypes.func.isRequired,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.props.fetch(this.props.match.params.id);
  }

  render() {
    const { loading, character } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <CharacterDetail character={character} />;
  }
}

const mapStateToProps = state => ({
  character: selectCharacter(state),
  loading: selectCharacterLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch(id) {
    dispatch(fetchCharacter(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterById);
