import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#E2F4FF',
  },
  statsGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 12,
    flexWrap: 'wrap',
  },
  main: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  bio: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  avatar: {
    width: 120,
    height: '100%',
    borderRadius: 24,
    marginRight: 12,
  },
  tabView: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 6,
  },
  tab: {
    color: '#44C4FE',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  activeTab: {
    backgroundColor: '#4BC9FE',
    color: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  socials: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
  },
});
