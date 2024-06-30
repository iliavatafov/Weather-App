import React from "react";
import { Modal } from "../components/Modals/Modal";

const withDOM = (Story) => {
  if (!document.getElementById("backdrop-root")) {
    const backdropRoot = document.createElement("div");
    backdropRoot.id = "backdrop-root";
    document.body.appendChild(backdropRoot);
  }
  if (!document.getElementById("overlay-root")) {
    const overlayRoot = document.createElement("div");
    overlayRoot.id = "overlay-root";
    document.body.appendChild(overlayRoot);
  }

  return (
    <div>
      <Story />
    </div>
  );
};

export default {
  title: "Components/Modal",
  component: Modal,
  decorators: [withDOM],
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ color: "white", padding: "20px", backgroundColor: "black" }}>
      This is a modal content
    </div>
  ),
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  children: (
    <div style={{ color: "white", padding: "20px", backgroundColor: "black" }}>
      <h2>Custom Modal</h2>
      <p>This modal has custom content.</p>
    </div>
  ),
};
