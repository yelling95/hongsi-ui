import type {Preview} from '@storybook/react'
import '../src/assets/color.scss'
import '../src/assets/font.scss'
import '../src/assets/base.scss'
import '../src/assets/anim.scss'

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
