import { Component, JSX } from "solid-js";
import { RightPanel } from "../../components/right-panel/right-panel.component";

const CustomerPage: Component = (): JSX.Element => {
  return (
    <>
      <div class="vehicle-page-layout">
        <div class="grid-layout">
          <div class="header-placeholder" />
          <div>Customer Page</div>
        </div>
        <div class="right-panel-layout">
          <RightPanel />
        </div>
      </div>
    </>
  );
};

export { CustomerPage };
