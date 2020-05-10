import React from 'react';
import {View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';

function App(props) {
  const [repos, setRepos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getRposHandler = () => {
    setIsLoading(true);
    fetch('https://api.github.com/users/hossamnasser938/repos')
      .then(response => {
        console.log('first response');
        if (response.ok) {
          return response.json();
        }

        throw new Error('error');
      })
      .then(jsonResponse => {
        console.log('json response');
        setRepos(jsonResponse);
      })
      .catch(error => {
        console.log('error', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="GET Repos" onPress={getRposHandler} />
      {isLoading && <ActivityIndicator />}
      <View>
        {repos.map(repo => {
          return <Text>{repo.name}</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
