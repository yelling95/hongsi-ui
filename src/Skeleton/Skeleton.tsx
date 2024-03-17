import React from 'react'
import ContentLoader from 'react-content-loader'

interface SkeletonProps {
  width: number
  height: number
  viewBox: string
}

const Skeleton = ({
  width,
  height,
  viewBox,
  ...props
}: SkeletonProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <ContentLoader
      speed={1}
      width={width}
      height={height}
      viewBox={viewBox}
      backgroundColor="#e9e9e9"
      foregroundColor="#efefef">
      {props.children ? (
        props.children
      ) : (
        <>
          <circle cx="51" cy="48" r="43" />
          <rect x="119" y="27" rx="0" ry="0" width="99" height="9" />
          <rect x="116" y="48" rx="0" ry="0" width="104" height="10" />
          <rect x="14" y="104" rx="0" ry="0" width="281" height="41" />
          <rect x="14" y="156" rx="0" ry="0" width="321" height="64" />
          <rect x="13" y="235" rx="5" ry="5" width="348" height="303" />
        </>
      )}
    </ContentLoader>
  )
}

export default Skeleton
