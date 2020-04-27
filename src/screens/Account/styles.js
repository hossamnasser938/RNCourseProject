import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  personIcon: {
    fontSize: '64@s',
  },
  verticalLine: {
    width: 1,
    backgroundColor: '#bbb',
    marginHorizontal: '20@s',
  },
  infoText: {
    fontSize: '16@s',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#bbbbbb80',
  },
  iconTitleWrapper: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: '24@s',
    marginEnd: '10@s',
  },
  title: {
    fontSize: '16@s',
  },
  button: {
    marginVertical: '10@s',
  },
});

export default styles;
