import { Meta, StoryObj } from "@storybook/react";
import { Pencil1Icon, PlusIcon } from "@radix-ui/react-icons";

import { Button } from './Button'
import { ButtonVariant } from "./types";

const meta = {
    title: "Button/Button",
    component: Button,
    argTypes: {
        onCancel: { action: "cancelled" },
        onSubmit: { action: "submitted" },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'I am plain button',
    },
};

export const IconButton: Story = {
    args: {
        children: <PlusIcon />,
        variant: ButtonVariant.ICON
    },
};

export const IconAction: Story = {
    args: {
        children: <Pencil1Icon />,
        variant: ButtonVariant.ACTION,
    },
};
