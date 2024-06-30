import { Toggle } from "../components/Toggle/Toggle";

const withBlackBackground = (Story) => (
  <div style={{ backgroundColor: "black", padding: "20px" }}>
    <Story />
  </div>
);

const Template = ({ ...args }) => <Toggle {...args} />;

export default {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [withBlackBackground],
  argTypes: {
    handleChange: { action: "handleChange" },
  },
};

export const Default = Template.bind({});
Default.args = {
  labels: ["Off", "On"],
  labelsColor: "#fff",
  isChecked: false,
  handleChange: () => {},
};

export const Checked = Template.bind({});
Checked.args = {
  labels: ["Off", "On"],
  labelsColor: "#fff",
  isChecked: true,
  handleChange: () => {},
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  labels: ["Inactive", "Active"],
  isChecked: false,
  handleChange: () => {},
  toggleBackgroundColor: "#A0CDD9",
  labelsColor: "white",
};

export const LabelsColor = Template.bind({});
LabelsColor.args = {
  labels: ["Off", "On"],
  isChecked: true,
  labelsColor: "#A0CDD9",
};
