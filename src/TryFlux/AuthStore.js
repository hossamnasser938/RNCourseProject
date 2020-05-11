import dispatcher from './dispatcher';
import {EventEmitter} from 'events';

class AuthStore extends EventEmitter {
  token = '';
  user = null;

  setToken(token) {
    this.token = token;
    this.emit('change');
  }

  setUser(user) {
    this.user = user;
    this.emit('change');
  }

  handle(action) {
    switch (action.type) {
      case 'SET_TOKEN':
        this.setToken(action.payload.token);
        break;

      case 'SET_USER':
        this.setUser(action.payload.user);
        break;
    }
  }
}

const authStore = new AuthStore();

dispatcher.register(authStore.handle.bind(authStore));

export default authStore;
