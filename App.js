import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import {IonIcon} from './src/components/IonIcon';

const users = [
  {name: 'Hossam', phone: '01023415623'},
  {name: 'AboBakr', phone: '01165826473'},
  {name: 'Mossab', phone: '015464736445'},
  {name: 'Ayman', phone: '015473926465'},
];

class App extends React.Component {
  keyExtractor = (item, index) => index.toString();
  renderItem = ({index, item}) => {
    const {name, phone} = item;
    const isSelected = name === this.state.selectedUser;

    return (
      <TouchableOpacity
        style={[
          styles.userContainer,
          {backgroundColor: isSelected ? 'red' : 'green'},
        ]}
        onPress={() => this.handleClick(name)}>
        <View style={styles.wrapper}>
          <IonIcon style={styles.icon} name="person" />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.wrapper}>
          <IonIcon style={styles.icon} name="call" />
          <Text style={styles.text}>{phone}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  state = {selectedUser: 'Hossam'};

  handleClick = userName => {
    console.log('handle click is called with ' + userName);
    this.setState({selectedUser: userName}, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={users}
        renderItem={this.renderItem}
        extraData={this.state.selectedUser}
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
