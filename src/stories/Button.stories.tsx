// @ts-ignore
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, {EButtonSize} from "../Button/Button";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const XsBtn = Template.bind({});
XsBtn.args = {
	size: EButtonSize.XS,
	children: "кнопка",
};

export const MdBtn = Template.bind({});
MdBtn.args = {
	size: EButtonSize.MD,
	children: "Какой то текст",
};