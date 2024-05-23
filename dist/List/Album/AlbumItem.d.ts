import React, { CSSProperties } from 'react';
import './Album.scss';
interface AlbumItemProps {
    id?: string;
    album: string;
    photoCnt: number;
    style?: CSSProperties;
    onClick?: () => void;
}
declare const AlbumItem: ({ id, album, photoCnt, style, onClick, }: AlbumItemProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default AlbumItem;
