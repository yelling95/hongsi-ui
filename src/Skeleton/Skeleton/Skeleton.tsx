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
      {props.children && props.children}
    </ContentLoader>
  )
}

export default Skeleton
