import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const imageDim = width;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageDim,
    height: imageDim,
  },
  productTitleWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '20@s',
  },
  icon: {
    color: '#fff',
    fontSize: '32@s',
    paddingHorizontal: '10@s',
    paddingVertical: '5@vs',
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  wrapper: {
    padding: '20@s',
    flex: 1,
  },
  buttonWrapper: {
    justifyContent: 'flex-end',
    paddingHorizontal: '20@s',
    paddingVertical: '5@vs',
  },
  descriptionText: {
    fontSize: '18@s',
    marginTop: '10@s',
  },
});

export default styles;
