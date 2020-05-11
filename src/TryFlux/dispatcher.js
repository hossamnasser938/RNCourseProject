class Dispatcher {
  handlers = [];

  register(handler) {
    this.handlers.push(handler);
  }

  dispatch(action) {
    for (let handler of this.handlers) {
      handler(action);
    }
  }
}

export default new Dispatcher();
