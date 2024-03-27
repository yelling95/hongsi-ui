import type { StoryObj } from '@storybook/react';
import Comment from './Comment';
declare const meta: {
    title: string;
    parameters: {};
    tags: string[];
    argTypes: {};
    component: typeof Comment;
};
export default meta;
type Story = StoryObj<typeof Comment>;
export declare const Default: Story;
