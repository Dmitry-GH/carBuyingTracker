import {StyleSheet} from 'react-native';
import {BORDER_RADIUS} from '../../configs';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 9,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
  },
  titleStyle: {
    fontSize: 18,
  },
  socialButton: {
    flex: 1,
    borderRadius: BORDER_RADIUS,
    width: '100%',
  },
});

export default styles;
