import React, {CSSProperties, SVGProps} from 'react'
import Svg from './svg'
import './Icon.scss'

const getIconSvg = (id: string, color: string, fill?: string) => {
  if (id === 'Account')
    return fill ? <Svg.AccountFull color={fill} /> : <Svg.Account color={color} />
  if (id === 'Home') return fill ? <Svg.HomeFull color={fill} /> : <Svg.Home color={color} />
  if (id === 'Group') return fill ? <Svg.GroupFull color={fill} /> : <Svg.Group color={color} />
  if (id === 'Chat') return fill ? <Svg.ChatFull color={fill} /> : <Svg.Chat color={color} />
  if (id === 'Like') return fill ? <Svg.LikeFull color={fill} /> : <Svg.Like color={color} />
  if (id === 'Notification')
    return fill ? <Svg.NotificationFull color={fill} /> : <Svg.Notification color={color} />

  if (id === 'Add') return <Svg.Add color={color} />
  if (id === 'All') return <Svg.All color={color} />
  if (id === 'Calendar') return <Svg.Calendar color={color} />
  if (id === 'Camera') return <Svg.Camera color={color} />
  if (id === 'Check') return <Svg.Check color={color} />
  if (id === 'Collapse') return <Svg.Collapse color={color} />
  if (id === 'Close') return <Svg.Close color={color} />
  if (id === 'Dropdown') return <Svg.Dropdown color={color} />
  if (id === 'EditWrite') return <Svg.EditWrite color={color} />
  if (id === 'Empty') return <Svg.Empty color={color} />
  if (id === 'HomeHouse') return <Svg.HomeHouse />
  if (id === 'Left') return <Svg.Left color={color} />
  if (id === 'LocationPin') return <Svg.LocationPin color={color} />
  if (id === 'Right') return <Svg.Left color={color} />
  if (id === 'More') return <Svg.More color={color} />
  if (id === 'NotificationNone') return <Svg.NotificationNone color={color} />
  if (id === 'Photo') return <Svg.Photo color={color} />
  if (id === 'Search') return <Svg.Search color={color} />
  if (id === 'Share') return <Svg.Share color={color} />
  if (id === 'Send') return <Svg.Send color={color} />
  if (id === 'Time') return <Svg.Time color={color} />
  if (id === 'Warning') return <Svg.Warning color={color} />
  if (id === 'Clear') return <Svg.Clear color={color} />
  if (id === 'Filter') return <Svg.Filter color={color} />
  if (id === 'Default') return <Svg.Default color={color} />
}

interface IconProps {
  id?:
    | 'Account'
    | 'Add'
    | 'All'
    | 'Calendar'
    | 'Camera'
    | 'Chat'
    | 'Check'
    | 'Clear'
    | 'Close'
    | 'Collapse'
    | 'Default'
    | 'Dropdown'
    | 'EditWrite'
    | 'Empty'
    | 'Filter'
    | 'Group'
    | 'Home'
    | 'Left'
    | 'Right'
    | 'Like'
    | 'LocationPin'
    | 'More'
    | 'Warning'
    | 'Notification'
    | 'NotificationNone'
    | 'Photo'
    | 'Search'
    | 'Send'
    | 'Share'
    | 'Time'
    | 'Warning'
  width?: number
  height?: number
  viewBox?: string
  color?: string
  style?: CSSProperties
  fill?: string
}

const Icon = ({
  id = 'Account',
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  color = '#393939',
  fill,
  style = {},
  ...props
}: IconProps & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      {getIconSvg(id, color, fill)}
    </svg>
  )
}

export default Icon
