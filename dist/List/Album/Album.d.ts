import React, { CSSProperties } from 'react';
import './Album.scss';
interface AlbumProps {
    id?: string;
    style?: CSSProperties;
    children?: unknown;
}
declare const Album: ({ id, style, children }: AlbumProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Album;
