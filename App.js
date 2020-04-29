import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IonIcon} from './src/components/IonIcon';

const users = [
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Hossam', phone: '01023415623'},
  {name: 'John', phone: '0111947464'},
];

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {users.map(user => {
          const {name, phone} = user;

          return (
            <View style={styles.userContainer}>
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
        })}
      </View>
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
