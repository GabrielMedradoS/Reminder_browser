const Emitter = {
  events: {},

  on(event, cb) {
    //supondo q event = click
    //esse comando seria o mesmo que Emitter.events.click
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(cb);
  },

  emit(event, ...rest) {
    if (event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].forEach((e) => {
      e(...rest);
    });
  },
};

export { Emitter };
