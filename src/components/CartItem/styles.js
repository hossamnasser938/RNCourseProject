import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  image: {
    width: '100@s',
    height: '100@s',
    marginEnd: '10@s',
  },
  outerContainer: {
    padding: '10@s',
    margin: '10@s',
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '15@s',
  },
});

export default styles;
