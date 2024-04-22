import type { StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
declare const meta: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    component: typeof Dropdown;
};
export default meta;
type Story = StoryObj<typeof Dropdown>;
export declare const Default: Story;
export declare const Double: Story;
