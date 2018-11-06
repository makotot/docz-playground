import { css } from 'docz-plugin-css'

export default {
  src: './src/components',
  port: 9999,
  themeConfig: {
    showPlaygroundEditor: true,
  },
  plugins: [
    css({
      preprocessor: 'sass',
    }),
  ],
}