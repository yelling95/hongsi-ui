import React from 'react';
interface SkeletonProps {
    width: number;
    height: number;
    viewBox: string;
}
declare const Skeleton: ({ width, height, viewBox, ...props }: SkeletonProps & React.HTMLAttributes<HTMLButtonElement>) => React.JSX.Element;
export default Skeleton;
