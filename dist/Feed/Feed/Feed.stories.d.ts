import type { StoryObj } from '@storybook/react';
import Feed from './Feed';
import './Slick.scss';
declare const meta: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    component: typeof Feed;
};
export default meta;
type Story = StoryObj<typeof Feed>;
export declare const Default: Story;
export declare const Pictures: Story;
export declare const Gather: Story;
export declare const Declaration: Story;
