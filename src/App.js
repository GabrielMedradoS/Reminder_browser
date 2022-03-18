import { Notifier } from "./Notifier.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const notify = Notifier.notify({
  title: "Hora do Estudo",
  body: "Organize seu tempo e estude",
});

const App = {
  async start() {
    try {
      await Notifier.init();

      Emitter.on("countdown-start", notify);
      Emitter.on("countdown-end", Timer.init);

      Timer.init(25 * 60);
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
