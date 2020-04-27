import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@s',
    justifyContent: 'space-between',
  },
  shipToText: {
    fontSize: '20@s',
    fontWeight: 'bold',
  },
  updateWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  addressSection: {
    borderWidth: 1,
    borderRadius: 10,
    padding: '10@s',
  },
  updateText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: '16@s',
  },
  horizontalRow: {
    height: 1,
    backgroundColor: '#bbb',
    marginVertical: '5@vs',
  },
  orderCostRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderCostSection: {},
  orderCostKey: {
    fontSize: '16@s',
    color: '#bbb',
  },
  orderCostValue: {
    fontSize: '15@s',
  },
});

export default styles;
