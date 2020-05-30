import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
  },
  socialButton: {
    flex: 1,
    borderRadius: 5,
    width: '100%',
  },
});

export default styles;
