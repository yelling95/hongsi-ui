import React from 'react';
import './GalleryHeader.scss';
interface GalleryHeaderProps {
    goBack: () => void;
    onSelectImage: () => void;
    onChangeAlbum: () => void;
    album: string;
    open: boolean;
}
declare const GalleryHeader: ({ goBack, onSelectImage, onChangeAlbum, album, open, ...props }: GalleryHeaderProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default GalleryHeader;
