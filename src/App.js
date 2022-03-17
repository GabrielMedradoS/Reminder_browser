import { Notifier } from "./Notifier.js";

const App = {
  async start() {
    try {
      await Notifier.init();
      Notifier.notify({
        title: "Hora do Estudo",
        body: "Organize seu tempo e estude",
      });
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
