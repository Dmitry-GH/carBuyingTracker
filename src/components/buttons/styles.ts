import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 28,
  },
  socialButton: {
    flex: 1,
    borderRadius: 5,
    width: '100%',
  },
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default styles;
