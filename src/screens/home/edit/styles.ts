import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  inputContainer: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  inputContainerStyle: {
    borderRadius: 5,
  },
  containerStyle_left: {
    paddingLeft: 0,
  },
  containerStyle_right: {
    paddingRight: 0,
  },
  input: {
    color: 'white',
    // textAlign: 'center',
  },
  inputBlock: {
    flex: 1,
  },
});

export default styles;
