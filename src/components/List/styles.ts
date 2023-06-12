import {StatusBar, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingHorizontal: 12,
    marginTop: StatusBar.currentHeight || 0,
  },
});
