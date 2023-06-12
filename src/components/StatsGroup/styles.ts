import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: (width - 36) / 2,
    height: (width - 36) / 2,
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
  },
  number: {
    fontSize: 48,
  },
});
