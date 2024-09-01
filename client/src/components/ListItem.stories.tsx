import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from './ListItem'

const meta = {
    title: "ListItem/ListItem",
    component: ListItem,
} as Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    args: {
        label: 'Buy milk',
        isDone: false,
        onItemLabelEdit: console.log,
        onItemDoneToggle: console.log,
        onItemDelete: console.log,
    },
};