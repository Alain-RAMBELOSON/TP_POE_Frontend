import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./components/app/app.component";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
