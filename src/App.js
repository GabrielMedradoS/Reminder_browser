import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";

const App = {
  async start() {
    try {
      Timer.init();
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
