import { connect } from 'react-redux';
import Input from '../components/add/Input';
import { getName, getBreed, getAge } from '../selectors/createSelectors';
import { updateName, updateAge, updateBreed } from '../action/createAction';
import { createDog } from '../services/dogApi';
import { addDog } from '../action/dogActions';

const mapStateToProps = (state) => ({
  name: getName(state),
  breed: getBreed(state),
  age: getAge(state)
});

const mapDispatchToProps = dispatch => ({
  inputChange({ target }) {
    if (target.name === 'name') {
      dispatch(updateName(target.value))
    }
    else if(target.name === 'breed') {
      dispatch(updateBreed(target.value))
      
    } else if(target.name === 'age') {
      dispatch(updateAge(target.value))
    }
  },
  handleSubmit(name, breed, age) {
    dispatch(addDog(name, breed, age))
  }
})
export default connect(
mapStateToProps,
mapDispatchToProps
)(Input);
