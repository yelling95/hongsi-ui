import type { StoryObj } from '@storybook/react';
import Confirm from './Confirm';
declare const meta: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    component: typeof Confirm;
};
export default meta;
type Story = StoryObj<typeof Confirm>;
export declare const Default: Story;
export declare const ButtonCustom: Story;
