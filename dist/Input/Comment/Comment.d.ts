import React, { CSSProperties } from 'react';
import './Comment.scss';
type CommentProps = {
    profileUrl: string;
    style?: CSSProperties;
    placeholder?: string | undefined;
    value?: string | undefined;
    onChange: (e: {
        id: string | null;
        value: string | undefined;
    }) => void;
};
declare function Comment({ profileUrl, style, placeholder, value, onChange, ...props }: CommentProps): React.JSX.Element;
declare namespace Comment {
    var defaultProps: {};
}
export default Comment;
