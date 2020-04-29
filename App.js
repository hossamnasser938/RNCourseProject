import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SectionList,
} from 'react-native';
import {IonIcon} from './src/components/IonIcon';

const normalUsers = [
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
];

const vipUsers = [
  {name: 'Mossab', phone: '015464736445'},
  {name: 'Ayman', phone: '015473926465'},
];

const sections = [
  {title: 'Norma', data: normalUsers},
  {title: 'VIP', data: vipUsers},
];

class App extends React.Component {
  render() {
    return (
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={sections}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        renderItem={({index, item, section}) => {
          const {name, phone} = item;

          return (
            <View
              style={[
                styles.userContainer,
                {backgroundColor: section.title === 'Norma' ? 'blue' : 'green'},
              ]}>
              <View style={styles.wrapper}>
                <IonIcon style={styles.icon} name="person" />
                <Text style={styles.text}>{name}</Text>
              </View>
              <View style={styles.wrapper}>
                <IonIcon style={styles.icon} name="call" />
                <Text style={styles.text}>{phone}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
  },
  icon: {
    fontSize: 32,
    paddingEnd: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default App;
