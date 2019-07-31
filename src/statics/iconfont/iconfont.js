import {
    createGlobalStyle
} from 'styled-components'
export const IconfontStyled = createGlobalStyle `
    @font-face {font-family: "iconfont";
        src: url('./iconfont.eot?t=1564534120892'); /* IE9 */
        src: url('./iconfont.eot?t=1564534120892#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
        url('./iconfont.woff?t=1564534120892') format('woff'),
        url('./iconfont.ttf?t=1564534120892') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1564534120892#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`