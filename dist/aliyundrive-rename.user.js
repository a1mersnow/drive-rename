// ==UserScript==
// @name         云盘批量重命名
// @namespace    vite-plugin-monkey
// @version      1.1.0
// @author       a1mersnow
// @description  批量重命名云盘里的文件，支持阿里云盘、夸克云盘、移动云盘
// @license      GPL
// @icon         data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='%235b6af9' d='M19 23h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z'/%3E%3Cpath fill='%235b6af9' d='M16 4c-4.3 0-7.9 3-8.8 7.1c-3 .6-5.2 3.3-5.2 6.4C2 21.1 4.9 24 8.5 24H16v-2H8.5C6 22 4 20 4 17.5c0-2.3 1.8-4.3 4.1-4.5H9l.1-.8C9.5 8.6 12.5 6 16 6c3.9 0 7 3.1 7 7h2c0-5-4-9-9-9'/%3E%3C/svg%3E
// @source       https://github.com/a1mersnow/aliyundrive-rename
// @match        https://www.aliyundrive.com/*
// @match        https://www.alipan.com/*
// @match        https://pan.quark.cn/*
// @match        https://yun.139.com/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.5.13/dist/vue.global.prod.js
// @grant        none
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const a=document.createElement("style");a.textContent=t,document.head.append(a)})(` .custom-scrollbar[data-v-da1c2f7f]::-webkit-scrollbar{width:6px}.custom-scrollbar[data-v-da1c2f7f]::-webkit-scrollbar-track{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.custom-scrollbar[data-v-da1c2f7f]::-webkit-scrollbar-thumb{border-radius:9999px;--un-bg-opacity:1;background-color:rgb(112 136 255 / var(--un-bg-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.custom-scrollbar[data-v-da1c2f7f]::-webkit-scrollbar-thumb:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.clip-enter-from,.clip-leave-to{clip-path:inset(0 100% 100% 0 round 8px)}.clip-enter-to,.clip-leave-from{clip-path:inset(0 0 0 0 round 8px)}.clip-enter-active,.clip-leave-active{transition:clip-path .3s ease}.fade-left-enter-from,.fade-left-leave-to{opacity:0;transform:translate(10%)}.fade-left-enter-to,.fade-left-leave-from{opacity:1;transform:none}.fade-left-enter-active,.fade-left-leave-active{transition:opacity .3s,transform .3s ease}.fade-enter-from,.fade-leave-to{opacity:0}.fade-enter-to,.fade-leave-from{opacity:1}.fade-enter-active,.fade-leave-active{transition:opacity .3s}:where(#a1mersnow_webdrive_rename) :is(*,*:before,*:after){box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:where(#a1mersnow_webdrive_rename) :is(*:before,*:after){--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}:where(#a1mersnow_webdrive_rename) hr{height:0;color:inherit;border-top-width:1px}:where(#a1mersnow_webdrive_rename) abbr:where([title]){text-decoration:underline dotted}:where(#a1mersnow_webdrive_rename) :is(h1,h2,h3,h4,h5,h6){font-size:inherit;font-weight:inherit}:where(#a1mersnow_webdrive_rename) a{color:inherit;text-decoration:inherit}:where(#a1mersnow_webdrive_rename) :is(b,strong){font-weight:bolder}:where(#a1mersnow_webdrive_rename) :is(code,kbd,samp,pre){font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}:where(#a1mersnow_webdrive_rename) small{font-size:80%}:where(#a1mersnow_webdrive_rename) :is(sub,sup){font-size:75%;line-height:0;position:relative;vertical-align:baseline}:where(#a1mersnow_webdrive_rename) sub{bottom:-.25em}:where(#a1mersnow_webdrive_rename) sup{top:-.5em}:where(#a1mersnow_webdrive_rename) table{text-indent:0;border-color:inherit;border-collapse:collapse}:where(#a1mersnow_webdrive_rename) :is(button,input,optgroup,select,textarea){font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}:where(#a1mersnow_webdrive_rename) :is(button,select){text-transform:none}:where(#a1mersnow_webdrive_rename) :is(button,[type=button],[type=reset],[type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:where(#a1mersnow_webdrive_rename) :-moz-focusring{outline:auto}:where(#a1mersnow_webdrive_rename) :-moz-ui-invalid{box-shadow:none}:where(#a1mersnow_webdrive_rename) progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}:where(#a1mersnow_webdrive_rename) [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:where(#a1mersnow_webdrive_rename) ::-webkit-search-decoration{-webkit-appearance:none}:where(#a1mersnow_webdrive_rename) ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(#a1mersnow_webdrive_rename) summary{display:list-item}:where(#a1mersnow_webdrive_rename) :is(blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre){margin:0}:where(#a1mersnow_webdrive_rename) fieldset{margin:0;padding:0}:where(#a1mersnow_webdrive_rename) legend{padding:0}:where(#a1mersnow_webdrive_rename) :is(ol,ul,menu){list-style:none;margin:0;padding:0}:where(#a1mersnow_webdrive_rename) dialog{padding:0}:where(#a1mersnow_webdrive_rename) textarea{resize:vertical}:where(#a1mersnow_webdrive_rename) :is(input::placeholder,textarea::placeholder){opacity:1;color:#9ca3af}:where(#a1mersnow_webdrive_rename) :is(button,[role=button]){cursor:pointer}:where(#a1mersnow_webdrive_rename) :disabled{cursor:default}:where(#a1mersnow_webdrive_rename) :is(img,svg,video,canvas,audio,iframe,embed,object){display:block;vertical-align:middle}:where(#a1mersnow_webdrive_rename) :is(img,video){max-width:100%;height:auto}:where(#a1mersnow_webdrive_rename) [hidden]:where(:not([hidden=until-found])){display:none}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthSQBK6PYK3EXw.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR232RmYJp8I5zzw.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW32RmYJp8I5.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0vrx52jJ3Q.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0vrx52g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.i-carbon\\:arrow-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:arrows-horizontal{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:batch-job{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M32 26v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 26 20.101V18h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 20.101 24H18v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V32h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 29.899 26zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m-5-11h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2m-8-2h8V4h-8z'/%3E%3Cpath fill='currentColor' d='M17 21H8a2 2 0 0 1-2-2V7h2v12h9z'/%3E%3Cpath fill='currentColor' d='M13 25H4c-1.103 0-2-.897-2-2V11h2v12h9z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:checkbox{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:checkbox-checked-filled{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3Cpath fill='none' d='m14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:circle-packing{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9m.435-1.978A6 6 0 0 0 23.5 7a5.48 5.48 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.86 11.86 0 0 1 10.134 2.811M16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m-8-2a12 12 0 0 1 .211-2.199a7.99 7.99 0 0 0 7.346 6.176a5.96 5.96 0 0 0-.89 6.757A12 12 0 0 1 4 16m17.333 10.734a5.983 5.983 0 0 0-4.179-8.62a8 8 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12 12 0 0 1-6.667 10.734'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:contour-finding{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cdefs/%3E%3Cpath d='M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z' fill='currentColor'/%3E%3Cpath d='M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z' fill='currentColor'/%3E%3Cpath d='M2.7 20.4a14.403 14.403 0 0 0 2 3.9l1.6-1.2a12.887 12.887 0 0 1-1.7-3.3z' fill='currentColor'/%3E%3Cpath d='M7.8 27.3a14.403 14.403 0 0 0 3.9 2l.6-1.9A12.887 12.887 0 0 1 9 25.7z' fill='currentColor'/%3E%3Cpath d='M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z' fill='currentColor'/%3E%3Cpath d='M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z' fill='currentColor'/%3E%3Cpath d='M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z' fill='currentColor'/%3E%3Cpath d='M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z' fill='currentColor'/%3E%3Cpath d='M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z' fill='currentColor'/%3E%3Cpath d='M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z' fill='currentColor'/%3E%3Cpath d='M16 26a10 10 0 1 1 10-10a10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:pointer-text{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M13.71 12.29L7.41 6H13V4H4v9h2V7.41l6.29 6.3l1.42-1.42z' fill='currentColor'/%3E%3Cpath d='M28 30H12a2 2 0 0 1-2-2V18h2v10h16V12H18v-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z' fill='currentColor'/%3E%3Cpath d='M22 15h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2zm0 8h-4v-2h4z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-ion\\:dice{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M440.88 129.37L288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9M256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16m-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46M96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49M320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.btn{display:inline-block;border-width:1px;border-color:currentColor;border-radius:4px;padding:4px;--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity));transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.btn:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.btn:disabled{opacity:.5}.\\[vertical-align\\:-0\\.2em\\]{vertical-align:-.2em}.absolute{position:absolute}.fixed{position:fixed}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-2{bottom:8px}.right-0{right:0}.top-2{top:8px}.z-100{z-index:100}.z-2{z-index:2}.z-99{z-index:99}.grid{display:grid}.grid-cols-\\[20px_auto_30px_minmax\\(200px\\,1fr\\)\\]{grid-template-columns:20px auto 30px minmax(200px,1fr)}.my5{margin-top:20px;margin-bottom:20px}.mb-1{margin-bottom:4px}.mb-3{margin-bottom:12px}.ml-4{margin-left:16px}.ml-auto{margin-left:auto}.mr-3,[mr-3=""]{margin-right:12px}.mt-2{margin-top:8px}.block{display:block}.inline-block,[inline-block=""]{display:inline-block}.contents{display:contents}.h-8{height:32px}.h-9,.h9{height:36px}.min-h-40px{min-height:40px}.min-h-61px{min-height:61px}.w-\\[max\\(500px\\,50vw\\)\\]{width:max(500px,50vw)}.w-300px{width:300px}.w-5em,[w-5em=""]{width:5em}.w-60px{width:60px}.w-fit{width:fit-content}.w-full{width:100%}.flex{display:flex}.inline-flex{display:inline-flex}.flex-col{flex-direction:column}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-self-center{justify-self:center}.gap-x-1{column-gap:4px}.gap-x-1px{column-gap:1px}.gap-x-2{column-gap:8px}.gap-x-3{column-gap:12px}.gap-x-4{column-gap:16px}.gap-y-1{row-gap:4px}.gap-y-3{row-gap:12px}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.b,.border,[border~="~"]{border-width:1px}.border-y-3px{border-top-width:3px;border-bottom-width:3px}.border-l-3px{border-left-width:3px}[border~=b]{border-bottom-width:1px}.border-current{border-color:currentColor}.border-primary-600{--un-border-opacity:1;border-color:rgb(61 64 238 / var(--un-border-opacity))}[border~="#ddd"]{--un-border-opacity:1;border-color:rgb(221 221 221 / var(--un-border-opacity))}.rd-sm{border-radius:2px}.rounded{border-radius:4px}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:8px}.rounded-l-lg{border-top-left-radius:8px;border-bottom-left-radius:8px}.border-solid,[border~=solid]{border-style:solid}.bg-primary,.bg-primary-400{--un-bg-opacity:1;background-color:rgb(112 136 255 / var(--un-bg-opacity))}.bg-primary-100{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.bg-primary-600{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-white\\/80{background-color:#fffc}.hover\\:bg-\\#0d53ff:hover{--un-bg-opacity:1;background-color:rgb(13 83 255 / var(--un-bg-opacity))}.hover\\:bg-\\#3181f9\\/50:hover{background-color:#3181f980}.hover\\:bg-primary-500\\/50:hover{background-color:#5b6af980}.p-3{padding:12px}.px-1{padding-left:4px;padding-right:4px}.px-2{padding-left:8px;padding-right:8px}.px-2px{padding-left:2px;padding-right:2px}.px-3{padding-left:12px;padding-right:12px}.px-4{padding-left:16px;padding-right:16px}.px5{padding-left:20px;padding-right:20px}.py-1{padding-top:4px;padding-bottom:4px}.py-2{padding-top:8px;padding-bottom:8px}.py-3{padding-top:12px;padding-bottom:12px}.py-6px{padding-top:6px;padding-bottom:6px}.py-8{padding-top:32px;padding-bottom:32px}.pb-2{padding-bottom:8px}.pb-3{padding-bottom:12px}.text-center{text-align:center}.text-right{text-align:right}.text-14px{font-size:14px}.text-16px{font-size:16px}.text-4xl{font-size:36px;line-height:40px}.text-sm{font-size:14px;line-height:20px}.text-xl{font-size:20px;line-height:28px}.text-xs,[text-xs=""]{font-size:12px;line-height:16px}.text-\\#1e754f{--un-text-opacity:1;color:rgb(30 117 79 / var(--un-text-opacity))}.text-\\#2993a3{--un-text-opacity:1;color:rgb(41 147 163 / var(--un-text-opacity))}.text-\\#3181f9{--un-text-opacity:1;color:rgb(49 129 249 / var(--un-text-opacity))}.text-\\#52565e{--un-text-opacity:1;color:rgb(82 86 94 / var(--un-text-opacity))}.text-\\#59873a{--un-text-opacity:1;color:rgb(89 135 58 / var(--un-text-opacity))}.text-\\#999{--un-text-opacity:1;color:rgb(153 153 153 / var(--un-text-opacity))}.text-\\#ab5959{--un-text-opacity:1;color:rgb(171 89 89 / var(--un-text-opacity))}.text-\\#b07d48{--un-text-opacity:1;color:rgb(176 125 72 / var(--un-text-opacity))}.text-gray{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity))}.text-green-500{--un-text-opacity:1;color:rgb(34 197 94 / var(--un-text-opacity))}.text-green-700{--un-text-opacity:1;color:rgb(21 128 61 / var(--un-text-opacity))}.text-primary{--un-text-opacity:1;color:rgb(112 136 255 / var(--un-text-opacity))}.text-primary-500{--un-text-opacity:1;color:rgb(91 106 249 / var(--un-text-opacity))}.text-primary-600{--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity))}.text-primary-700{--un-text-opacity:1;color:rgb(48 47 211 / var(--un-text-opacity))}.text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-red-500{--un-text-opacity:1;color:rgb(239 68 68 / var(--un-text-opacity))}.text-red-600{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity))}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-red-600:hover{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity))}.hover\\:text-white:hover{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.font-bold{font-weight:700}.font-medium{font-weight:500}.lh-9{line-height:36px}.font-mono,[font-mono=""]{font-family:DM Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-sans{font-family:DM Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.underline,.hover\\:underline:hover{text-decoration-line:underline}.underline-dashed,.hover\\:underline-dashed:hover{text-decoration-style:dashed}.op50,.opacity-50{opacity:.5}.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.backdrop-blur-5{--un-backdrop-blur:blur(5px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease{transition-timing-function:cubic-bezier(.4,0,.2,1)}.animated{--une-animated-duration:1s;animation-duration:var(--une-animated-duration);animation-fill-mode:both}@keyframes uneBackInDown{0%{transform:translateY(-1200px) scale(.7)}0%,80%{opacity:.7}80%{transform:translateY(0) scale(.7)}to{opacity:1;transform:scale(1)}}@keyframes uneBackInLeft{0%{transform:translate(-2000px) scale(.7)}0%,80%{opacity:.7}80%{transform:translate(0) scale(.7)}to{opacity:1;transform:scale(1)}}@keyframes uneBackInRight{0%{transform:translate(2000px) scale(.7)}0%,80%{opacity:.7}80%{transform:translate(0) scale(.7)}to{opacity:1;transform:scale(1)}}@keyframes uneBackInUp{0%{transform:translateY(1200px) scale(.7)}0%,80%{opacity:.7}80%{transform:translateY(0) scale(.7)}to{opacity:1;transform:scale(1)}}@keyframes uneBackOutDown{0%{opacity:1;transform:scale(1)}20%{transform:translateY(0) scale(.7)}20%,to{opacity:.7}to{transform:translateY(700px) scale(.7)}}@keyframes uneBackOutLeft{0%{opacity:1;transform:scale(1)}20%{transform:translate(0) scale(.7)}20%,to{opacity:.7}to{transform:translate(-2000px) scale(.7)}}@keyframes uneBackOutRight{0%{opacity:1;transform:scale(1)}20%{transform:translate(0) scale(.7)}20%,to{opacity:.7}to{transform:translate(2000px) scale(.7)}}@keyframes uneBackOutUp{0%{opacity:1;transform:scale(1)}20%{transform:translateY(0) scale(.7)}20%,to{opacity:.7}to{transform:translateY(-700px) scale(.7)}}@keyframes uneBounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{transform:translate3d(0,-30px,0) scaleY(1.1)}40%,43%,70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transform:translateZ(0) scaleY(.95);transition-timing-function:cubic-bezier(.215,.61,.355,1)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}@keyframes uneBounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}@keyframes uneBounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;transform:translate3d(0,25px,0) scaleY(.9)}75%{transform:translate3d(0,-10px,0) scaleY(.95)}90%{transform:translate3d(0,5px,0) scaleY(.985)}to{transform:translateZ(0)}}@keyframes uneBounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(25px,0,0) scaleX(1)}75%{transform:translate3d(-10px,0,0) scaleX(.98)}90%{transform:translate3d(5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}@keyframes uneBounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}@keyframes uneBounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}@keyframes uneBounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}@keyframes uneBounceOutDown{20%{transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,2000px,0) scaleY(3)}}@keyframes uneBounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(-2000px,0,0) scaleX(2)}}@keyframes uneBounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}@keyframes uneBounceOutUp{20%{transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,-2000px,0) scaleY(3)}}@keyframes uneFadeIn{0%{opacity:0}to{opacity:1}}@keyframes uneFadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInBottomRight{0%{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInTopLeft{0%{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInTopRight{0%{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}@keyframes uneFadeOut{0%{opacity:1}to{opacity:0}}@keyframes uneFadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}@keyframes uneFadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,100%,0)}}@keyframes uneFadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}@keyframes uneFadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes uneFadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}@keyframes uneFadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes uneFadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}@keyframes uneFadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes uneFadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}@keyframes uneFadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}@keyframes uneFadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}@keyframes uneFadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes uneFlash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes uneFlip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn)}0%,40%{animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg)}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg)}50%,80%{animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0)}to{animation-timing-function:ease-in;transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0)}}@keyframes uneFlipInX{0%{opacity:0;transform:perspective(400px) rotateX(90deg)}0%,40%{animation-timing-function:ease-in}40%{transform:perspective(400px) rotateX(-20deg)}60%{opacity:1;transform:perspective(400px) rotateX(10deg)}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes uneFlipInY{0%{opacity:0;transform:perspective(400px) rotateY(90deg)}0%,40%{animation-timing-function:ease-in}40%{transform:perspective(400px) rotateY(-20deg)}60%{opacity:1;transform:perspective(400px) rotateY(10deg)}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}@keyframes uneFlipOutX{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateX(-20deg)}to{opacity:0;transform:perspective(400px) rotateX(90deg)}}@keyframes uneFlipOutY{0%{transform:perspective(400px)}30%{opacity:1;transform:perspective(400px) rotateY(-15deg)}to{opacity:0;transform:perspective(400px) rotateY(90deg)}}@keyframes uneHeadShake{0%{transform:translate(0)}6.5%{transform:translate(-6px) rotateY(-9deg)}18.5%{transform:translate(5px) rotateY(7deg)}31.5%{transform:translate(-3px) rotateY(-5deg)}43.5%{transform:translate(2px) rotateY(3deg)}50%{transform:translate(0)}}@keyframes uneHeartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}@keyframes uneHinge{0%,20%,60%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg)}40%,80%{animation-timing-function:ease-in-out;opacity:1;transform:rotate(60deg)}to{opacity:0;transform:translate3d(0,700px,0)}}@keyframes uneJackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}@keyframes uneJello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skew(-12.5deg) skewY(-12.5deg)}33.3%{transform:skew(6.25deg) skewY(6.25deg)}44.4%{transform:skew(-3.125deg) skewY(-3.125deg)}55.5%{transform:skew(1.5625deg) skewY(1.5625deg)}66.6%{transform:skew(-.78125deg) skewY(-.78125deg)}77.7%{transform:skew(.390625deg) skewY(.390625deg)}88.8%{transform:skew(-.1953125deg) skewY(-.1953125deg)}}@keyframes uneLightSpeedInLeft{0%{opacity:0;transform:translate3d(-100%,0,0) skew(30deg)}60%{opacity:1;transform:skew(-20deg)}80%{transform:skew(5deg)}to{transform:translateZ(0)}}@keyframes uneLightSpeedInRight{0%{opacity:0;transform:translate3d(100%,0,0) skew(-30deg)}60%{opacity:1;transform:skew(20deg)}80%{transform:skew(-5deg)}to{transform:translateZ(0)}}@keyframes uneLightSpeedOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skew(-30deg)}}@keyframes uneLightSpeedOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skew(30deg)}}@keyframes unePulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}@keyframes uneRollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}@keyframes uneRollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes uneRotateIn{0%{opacity:0;transform:rotate(-200deg)}to{opacity:1;transform:translateZ(0)}}@keyframes uneRotateInDownLeft{0%{opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:translateZ(0)}}@keyframes uneRotateInDownRight{0%{opacity:0;transform:rotate(45deg)}to{opacity:1;transform:translateZ(0)}}@keyframes uneRotateInUpLeft{0%{opacity:0;transform:rotate(45deg)}to{opacity:1;transform:translateZ(0)}}@keyframes uneRotateInUpRight{0%{opacity:0;transform:rotate(-90deg)}to{opacity:1;transform:translateZ(0)}}@keyframes uneRotateOut{0%{opacity:1}to{opacity:0;transform:rotate(200deg)}}@keyframes uneRotateOutDownLeft{0%{opacity:1}to{opacity:0;transform:rotate(45deg)}}@keyframes uneRotateOutDownRight{0%{opacity:1}to{opacity:0;transform:rotate(-45deg)}}@keyframes uneRotateOutUpLeft{0%{opacity:1}to{opacity:0;transform:rotate(-45deg)}}@keyframes uneRotateOutUpRight{0%{opacity:1}to{opacity:0;transform:rotate(90deg)}}@keyframes uneRubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}@keyframes uneShake{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}@keyframes uneShakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}@keyframes uneShakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}@keyframes uneSlideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes uneSlideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes uneSlideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}@keyframes uneSlideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}@keyframes uneSlideOutDown{0%{transform:translateZ(0)}to{transform:translate3d(0,100%,0);visibility:hidden}}@keyframes uneSlideOutLeft{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0);visibility:hidden}}@keyframes uneSlideOutRight{0%{transform:translateZ(0)}to{transform:translate3d(100%,0,0);visibility:hidden}}@keyframes uneSlideOutUp{0%{transform:translateZ(0)}to{transform:translate3d(0,-100%,0);visibility:hidden}}@keyframes uneSwing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0)}}@keyframes uneTada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}@keyframes uneWobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}@keyframes uneZoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes uneZoomInDown{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}}@keyframes uneZoomInLeft{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0)}}@keyframes uneZoomInRight{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0)}}@keyframes uneZoomInUp{0%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0)}60%{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}}@keyframes uneZoomOut{0%{opacity:1}50%{transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}@keyframes uneZoomOutDown{40%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0)}to{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0)}}@keyframes uneZoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0)}}@keyframes uneZoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0)}}@keyframes uneZoomOutUp{40%{animation-timing-function:cubic-bezier(.55,.055,.675,.19);opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0)}to{animation-timing-function:cubic-bezier(.175,.885,.32,1);opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0)}}.animated-back-in-down{animation-name:uneBackInDown}.animated-back-in-left{animation-name:uneBackInLeft}.animated-back-in-right{animation-name:uneBackInRight}.animated-back-in-up{animation-name:uneBackInUp}.animated-back-out-down{animation-name:uneBackOutDown}.animated-back-out-left{animation-name:uneBackOutLeft}.animated-back-out-right{animation-name:uneBackOutRight}.animated-back-out-up{animation-name:uneBackOutUp}.animated-bounce{animation-name:uneBounce;transform-origin:center bottom}.animated-bounce-in{animation-duration:calc(var(--une-animated-duration) * .75);animation-name:uneBounceIn}.animated-bounce-in-down{animation-name:uneBounceInDown}.animated-bounce-in-left{animation-name:uneBounceInLeft}.animated-bounce-in-right{animation-name:uneBounceInRight}.animated-bounce-in-up{animation-name:uneBounceInUp}.animated-bounce-out{animation-duration:calc(var(--une-animated-duration) * .75);animation-name:uneBounceOut}.animated-bounce-out-down{animation-name:uneBounceOutDown}.animated-bounce-out-left{animation-name:uneBounceOutLeft}.animated-bounce-out-right{animation-name:uneBounceOutRight}.animated-bounce-out-up{animation-name:uneBounceOutUp}.animated-fade-in{animation-name:uneFadeIn}.animated-fade-in-bottom-left{animation-name:uneFadeInBottomLeft}.animated-fade-in-bottom-right{animation-name:uneFadeInBottomRight}.animated-fade-in-down{animation-name:uneFadeInDown}.animated-fade-in-down-big{animation-name:uneFadeInDownBig}.animated-fade-in-left{animation-name:uneFadeInLeft}.animated-fade-in-left-big{animation-name:uneFadeInLeftBig}.animated-fade-in-right{animation-name:uneFadeInRight}.animated-fade-in-right-big{animation-name:uneFadeInRightBig}.animated-fade-in-top-left{animation-name:uneFadeInTopLeft}.animated-fade-in-top-right{animation-name:uneFadeInTopRight}.animated-fade-in-up{animation-name:uneFadeInUp}.animated-fade-in-up-big{animation-name:uneFadeInUpBig}.animated-fade-out{animation-name:uneFadeOut}.animated-fade-out-bottom-left{animation-name:uneFadeOutBottomLeft}.animated-fade-out-bottom-right{animation-name:uneFadeOutBottomRight}.animated-fade-out-down{animation-name:uneFadeOutDown}.animated-fade-out-down-big{animation-name:uneFadeOutDownBig}.animated-fade-out-left{animation-name:uneFadeOutLeft}.animated-fade-out-left-big{animation-name:uneFadeOutLeftBig}.animated-fade-out-right{animation-name:uneFadeOutRight}.animated-fade-out-right-big{animation-name:uneFadeOutRightBig}.animated-fade-out-top-left{animation-name:uneFadeOutTopLeft}.animated-fade-out-top-right{animation-name:uneFadeOutTopRight}.animated-fade-out-up{animation-name:uneFadeOutUp}.animated-fade-out-up-big{animation-name:uneFadeOutUpBig}.animated-flash{animation-name:uneFlash}.animated-flip{backface-visibility:visible;animation-name:uneFlip}.animated-flip-in-x{backface-visibility:visible!important;animation-name:uneFlipInX}.animated-flip-in-y{backface-visibility:visible!important;animation-name:uneFlipInY}.animated-flip-out-x{animation-duration:calc(var(--une-animated-duration) * .75);animation-name:uneFlipOutX;backface-visibility:visible!important}.animated-flip-out-y{animation-duration:calc(var(--une-animated-duration) * .75);backface-visibility:visible!important;animation-name:uneFlipOutY}.animated-head-shake{animation-timing-function:ease-in-out;animation-name:uneHeadShake}.animated-heart-beat{animation-name:uneHeartBeat;animation-duration:calc(var(--une-animated-duration) * 1.3);animation-timing-function:ease-in-out}.animated-hinge{animation-duration:calc(var(--une-animated-duration) * 2);animation-name:uneHinge;transform-origin:top left}.animated-jack-in-the-box{animation-name:uneJackInTheBox}.animated-jello{animation-name:uneJello;transform-origin:center}.animated-light-speed-in-left{animation-name:uneLightSpeedInLeft;animation-timing-function:ease-out}.animated-light-speed-in-right{animation-name:uneLightSpeedInRight;animation-timing-function:ease-out}.animated-light-speed-out-left{animation-name:uneLightSpeedOutLeft;animation-timing-function:ease-in}.animated-light-speed-out-right{animation-name:uneLightSpeedOutRight;animation-timing-function:ease-in}.animated-pulse{animation-name:unePulse;animation-timing-function:ease-in-out}.animated-roll-in{animation-name:uneRollIn}.animated-roll-out{animation-name:uneRollOut}.animated-rotate-in{animation-name:uneRotateIn;transform-origin:center}.animated-rotate-in-down-left{animation-name:uneRotateInDownLeft;transform-origin:left bottom}.animated-rotate-in-down-right{animation-name:uneRotateInDownRight;transform-origin:right bottom}.animated-rotate-in-up-left{animation-name:uneRotateInUpLeft;transform-origin:left bottom}.animated-rotate-in-up-right{animation-name:uneRotateInUpRight;transform-origin:right bottom}.animated-rotate-out{animation-name:uneRotateOut;transform-origin:center}.animated-rotate-out-down-left{animation-name:uneRotateOutDownLeft;transform-origin:left bottom}.animated-rotate-out-down-right{animation-name:uneRotateOutDownRight;transform-origin:right bottom}.animated-rotate-out-up-left{animation-name:uneRotateOutUpLeft;transform-origin:left bottom}.animated-rotate-out-up-right{animation-name:uneRotateOutUpRight;transform-origin:right bottom}.animated-rubber-band{animation-name:uneRubberBand}.animated-shake{animation-name:uneShake}.animated-shake-x{animation-name:uneShakeX}.animated-shake-y{animation-name:uneShakeY}.animated-slide-in-down{animation-name:uneSlideInDown}.animated-slide-in-left{animation-name:uneSlideInLeft}.animated-slide-in-right{animation-name:uneSlideInRight}.animated-slide-in-up{animation-name:uneSlideInUp}.animated-slide-out-down{animation-name:uneSlideOutDown}.animated-slide-out-left{animation-name:uneSlideOutLeft}.animated-slide-out-right{animation-name:uneSlideOutRight}.animated-slide-out-up{animation-name:uneSlideOutUp}.animated-swing{transform-origin:top center;animation-name:uneSwing}.animated-tada{animation-name:uneTada}.animated-wobble{animation-name:uneWobble}.animated-zoom-in{animation-name:uneZoomIn}.animated-zoom-in-down{animation-name:uneZoomInDown}.animated-zoom-in-left{animation-name:uneZoomInLeft}.animated-zoom-in-right{animation-name:uneZoomInRight}.animated-zoom-in-up{animation-name:uneZoomInUp}.animated-zoom-out{animation-name:uneZoomOut}.animated-zoom-out-down{animation-name:uneZoomOutDown;transform-origin:center bottom}.animated-zoom-out-left{animation-name:uneZoomOutLeft;transform-origin:left center}.animated-zoom-out-right{animation-name:uneZoomOutRight;transform-origin:right center}.animated-zoom-out-up{animation-name:uneZoomOutUp;transform-origin:center bottom}.animated-duration-1s{animation-duration:1s}.animated-duration-800{animation-duration:.8s} `);

(function (vue) {
  'use strict';

  var isVue2 = false;
  /*!
   * pinia v2.2.8
   * (c) 2024 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    return pinia;
  }
  const noop$1 = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop$1) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  const ACTION_MARKER = Symbol();
  const ACTION_NAME = Symbol();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    } else if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = (
    /* istanbul ignore next */
    Symbol()
  );
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && true) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name2) => {
        computedGetters[name2] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name2].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    const $subscribeOptions = { deep: true };
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && true) {
      {
        pinia.state.value[$id] = {};
      }
    }
    vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      noop$1
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    const action = (fn, name2 = "") => {
      if (ACTION_MARKER in fn) {
        fn[ACTION_NAME] = name2;
        return fn;
      }
      const wrappedAction = function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name: wrappedAction[ACTION_NAME],
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = fn.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
      wrappedAction[ACTION_MARKER] = true;
      wrappedAction[ACTION_NAME] = name2;
      return wrappedAction;
    };
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(partialStore);
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(() => setup({ action }))));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
      } else if (typeof prop === "function") {
        const actionValue = action(prop, key);
        {
          setupStore[key] = actionValue;
        }
        optionsForPlugin.actions[key] = prop;
      } else ;
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => pinia.state.value[$id],
      set: (state) => {
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    pinia._p.forEach((extender) => {
      {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  /*! #__NO_SIDE_EFFECTS__ */
  // @__NO_SIDE_EFFECTS__
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
      }
      const store = pinia._s.get(id);
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  const _hoisted_1$4 = { class: "contents" };
  const _hoisted_2$2 = ["title"];
  const _hoisted_3$2 = {
    key: 0,
    class: "i-carbon:arrow-right justify-self-center text-primary-600"
  };
  const _hoisted_4$2 = {
    key: 1,
    class: "i-carbon:arrows-horizontal justify-self-center text-green-500"
  };
  const _hoisted_5$2 = ["title"];
  const _hoisted_6$2 = { key: 0 };
  const _hoisted_7$2 = { key: 1 };
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "PreviewEntry",
    props: /* @__PURE__ */ vue.mergeModels({
      oldName: {},
      id: {},
      newName: {},
      done: { type: Boolean },
      error: { type: Boolean },
      conflict: { type: Boolean }
    }, {
      "modelValue": { type: Boolean },
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["pick"], ["update:modelValue"]),
    setup(__props, { emit: __emit }) {
      const props = __props;
      const emit = __emit;
      const isSame = vue.toRef(() => props.oldName === props.newName);
      const disabled = vue.toRef(() => isSame.value || !props.newName);
      const checked = vue.useModel(__props, "modelValue");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("li", _hoisted_1$4, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass([[
              checked.value && _ctx.newName && !vue.unref(isSame) ? "i-carbon:checkbox-checked-filled" : "i-carbon:checkbox",
              vue.unref(disabled) ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            ], "text-sm text-primary-600"]),
            onClick: _cache[0] || (_cache[0] = ($event) => checked.value = !checked.value)
          }, null, 2),
          vue.createElementVNode("span", {
            title: _ctx.oldName,
            class: "truncate whitespace-pre"
          }, [
            vue.createElementVNode("span", {
              class: vue.normalizeClass(vue.unref(disabled) ? "opacity-50" : "")
            }, vue.toDisplayString(_ctx.oldName), 3),
            vue.createElementVNode("i", {
              class: "i-carbon:pointer-text [vertical-align:-0.2em] inline-block cursor-pointer text-xs text-green-700",
              title: "填充到剧名",
              onClick: _cache[1] || (_cache[1] = ($event) => emit("pick", _ctx.id))
            })
          ], 8, _hoisted_2$2),
          !vue.unref(isSame) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$2)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$2)),
          vue.createElementVNode("span", {
            class: vue.normalizeClass([[vue.unref(disabled) ? "opacity-50" : "", _ctx.conflict ? "text-red-500 font-bold" : ""], "truncate whitespace-pre"]),
            title: _ctx.newName
          }, [
            vue.createTextVNode(vue.toDisplayString(_ctx.newName) + " ", 1),
            _ctx.error ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$2, "❌")) : _ctx.done ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$2, "✅")) : vue.createCommentVNode("", true)
          ], 10, _hoisted_5$2)
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {};
  const _hoisted_1$3 = { class: "mt-2 min-h-61px w-60px flex flex-col items-center justify-center gap-y-1 rounded-lg px-2px py-6px text-primary-500 transition hover:bg-primary-500/50 hover:text-white" };
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("button", _hoisted_1$3, _cache[0] || (_cache[0] = [
      vue.createElementVNode("i", { class: "i-carbon:batch-job text-xl" }, null, -1),
      vue.createElementVNode("span", { class: "text-xs font-medium" }, "重命名", -1)
    ]));
  }
  const ButtonAliyun = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
  const API_DELAY$2 = 200;
  const FETCH_MODE$2 = "listen-url";
  function getToken$1() {
    const raw = window.localStorage.getItem("token");
    if (!raw)
      throw new Error("no token found");
    return JSON.parse(raw).access_token;
  }
  async function getDriveId() {
    const res = await post$2("https://user.aliyundrive.com/v2/user/get", {});
    return location.pathname.startsWith("/drive/file/all/backup") ? res.backup_drive_id : res.resource_drive_id;
  }
  const INITIAL_MARKER = "INITIAL";
  const PAGE_SIZE = 100;
  const listJsonMask = "next_marker,items(name,file_id,drive_id,type,file_extension,parent_file_id,mime_type,trashed,sync_device_flag,punish_flag)";
  async function getFileListOfCurrentDir$3(parentId = getParentId$1()) {
    const listApi = new URL("https://api.aliyundrive.com/adrive/v3/file/list");
    listApi.searchParams.append("jsonmask", listJsonMask);
    const driveId = await getDriveId();
    const result = [];
    let marker = INITIAL_MARKER;
    while (marker) {
      const { items, next_marker } = await post$2(listApi.toString().replace("%28", "(").replace("%29", ")"), {
        all: true,
        limit: PAGE_SIZE,
        drive_id: driveId,
        fields: "*",
        order_by: "name",
        order_direction: "ASC",
        parent_file_id: parentId,
        url_expire_sec: 14400,
        marker: marker === INITIAL_MARKER ? "" : marker
      });
      result.push(...items);
      marker = next_marker;
    }
    return result.filter((x) => !x.sync_device_flag);
  }
  async function rename$2(driveId, fileId, newName) {
    return post$2("https://api.aliyundrive.com/v3/file/update", {
      check_name_mode: "refuse",
      drive_id: driveId,
      file_id: fileId,
      name: newName
    });
  }
  function getParentId$1() {
    const p = location.pathname;
    const i = p.lastIndexOf("/");
    const lastSegment = p.slice(i + 1);
    return /[a-z0-9]{32,}/.test(lastSegment) ? lastSegment : "root";
  }
  const headers$2 = {};
  function setRequestHeader$3(key, value) {
    if (key.toLowerCase() === "x-signature")
      headers$2["X-Signature"] = value;
  }
  function post$2(api, payload) {
    var _a;
    return fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken$1()}`,
        "X-Device-Id": ((_a = document.cookie.match(/cna=(.+?);/)) == null ? void 0 : _a[1]) || "",
        ...headers$2
      },
      body: JSON.stringify(payload)
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  async function renameOne$3(resource, newName) {
    await rename$2(resource.drive_id, resource.file_id, newName);
  }
  function shouldShowEntry$3(url) {
    return [
      /^\/drive\/file\/all\/.+$/
    ].some((re) => re.test(new URL(url).pathname));
  }
  function getContainer$3() {
    return {
      el: document.querySelector('[class^="nav-tab-content--"]'),
      style: "",
      front: false
    };
  }
  const aliyun = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    API_DELAY: API_DELAY$2,
    ButtonComponent: ButtonAliyun,
    FETCH_MODE: FETCH_MODE$2,
    getContainer: getContainer$3,
    getFileListOfCurrentDir: getFileListOfCurrentDir$3,
    renameOne: renameOne$3,
    setRequestHeader: setRequestHeader$3,
    shouldShowEntry: shouldShowEntry$3
  }, Symbol.toStringTag, { value: "Module" }));
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f, arguments, this.constructor);
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  var dayjs_min$1 = { exports: {} };
  var dayjs_min = dayjs_min$1.exports;
  var hasRequiredDayjs_min;
  function requireDayjs_min() {
    if (hasRequiredDayjs_min) return dayjs_min$1.exports;
    hasRequiredDayjs_min = 1;
    (function(module, exports) {
      !function(t, e) {
        module.exports = e();
      }(dayjs_min, function() {
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _ || !(!t2 || !t2[p]);
        }, w = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1) return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, O = function(t2, e2) {
          if (S(t2)) return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2) return /* @__PURE__ */ new Date(NaN);
              if (b.u(e2)) return /* @__PURE__ */ new Date();
              if (e2 instanceof Date) return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m2.$g = function(t2, e2, n2) {
            return b.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
              var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c || o2 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[b.p(t2)]();
          }, m2.add = function(r2, f2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b.p(f2), y2 = function(t2) {
              var e2 = O(l2);
              return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c) return this.set(c, this.$M + r2);
            if ($2 === h) return this.set(h, this.$y + r2);
            if ($2 === a) return y2(1);
            if ($2 === o) return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b.s(s2 % 12 || 12, t3, "0");
            }, $2 = f2 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y, function(t3, r3) {
              return r3 || function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h2(n2.monthsShort, a2, c2, 3);
                  case "MMMM":
                    return h2(c2, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h2(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h2(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u2, true);
                  case "A":
                    return $2(s2, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b.s(e2.$s, 2, "0");
                  case "SSS":
                    return b.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              }(t3) || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n;
                break;
              case s:
                $2 = g2 / e;
                break;
              case i:
                $2 = g2 / t;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(), r2 = w(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), k = _.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, O), t2.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      });
    })(dayjs_min$1);
    return dayjs_min$1.exports;
  }
  var dayjs_minExports = requireDayjs_min();
  const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
  var md5 = { exports: {} };
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  /**
   * [js-md5]{@link https://github.com/emn178/js-md5}
   *
   * @namespace md5
   * @version 0.8.3
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2023
   * @license MIT
   */
  var hasRequiredMd5;
  function requireMd5() {
    if (hasRequiredMd5) return md5.exports;
    hasRequiredMd5 = 1;
    (function(module) {
      (function() {
        var INPUT_ERROR = "input is invalid type";
        var FINALIZE_ERROR = "finalize already called";
        var WINDOW = typeof window === "object";
        var root = WINDOW ? window : {};
        if (root.JS_MD5_NO_WINDOW) {
          WINDOW = false;
        }
        var WEB_WORKER = !WINDOW && typeof self === "object";
        var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
        if (NODE_JS) {
          root = commonjsGlobal;
        } else if (WEB_WORKER) {
          root = self;
        }
        var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && true && module.exports;
        var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
        var HEX_CHARS = "0123456789abcdef".split("");
        var EXTRA = [128, 32768, 8388608, -2147483648];
        var SHIFT = [0, 8, 16, 24];
        var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
        var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        var blocks = [], buffer8;
        if (ARRAY_BUFFER) {
          var buffer = new ArrayBuffer(68);
          buffer8 = new Uint8Array(buffer);
          blocks = new Uint32Array(buffer);
        }
        var isArray = Array.isArray;
        if (root.JS_MD5_NO_NODE_JS || !isArray) {
          isArray = function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          };
        }
        var isView = ArrayBuffer.isView;
        if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
          isView = function(obj) {
            return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
          };
        }
        var formatMessage = function(message) {
          var type2 = typeof message;
          if (type2 === "string") {
            return [message, true];
          }
          if (type2 !== "object" || message === null) {
            throw new Error(INPUT_ERROR);
          }
          if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
            return [new Uint8Array(message), false];
          }
          if (!isArray(message) && !isView(message)) {
            throw new Error(INPUT_ERROR);
          }
          return [message, false];
        };
        var createOutputMethod = function(outputType) {
          return function(message) {
            return new Md5(true).update(message)[outputType]();
          };
        };
        var createMethod = function() {
          var method = createOutputMethod("hex");
          if (NODE_JS) {
            method = nodeWrap(method);
          }
          method.create = function() {
            return new Md5();
          };
          method.update = function(message) {
            return method.create().update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type2 = OUTPUT_TYPES[i];
            method[type2] = createOutputMethod(type2);
          }
          return method;
        };
        var nodeWrap = function(method) {
          var crypto = require$$1;
          var Buffer = require$$1.Buffer;
          var bufferFrom;
          if (Buffer.from && !root.JS_MD5_NO_BUFFER_FROM) {
            bufferFrom = Buffer.from;
          } else {
            bufferFrom = function(message) {
              return new Buffer(message);
            };
          }
          var nodeMethod = function(message) {
            if (typeof message === "string") {
              return crypto.createHash("md5").update(message, "utf8").digest("hex");
            } else {
              if (message === null || message === void 0) {
                throw new Error(INPUT_ERROR);
              } else if (message.constructor === ArrayBuffer) {
                message = new Uint8Array(message);
              }
            }
            if (isArray(message) || isView(message) || message.constructor === Buffer) {
              return crypto.createHash("md5").update(bufferFrom(message)).digest("hex");
            } else {
              return method(message);
            }
          };
          return nodeMethod;
        };
        var createHmacOutputMethod = function(outputType) {
          return function(key, message) {
            return new HmacMd5(key, true).update(message)[outputType]();
          };
        };
        var createHmacMethod = function() {
          var method = createHmacOutputMethod("hex");
          method.create = function(key) {
            return new HmacMd5(key);
          };
          method.update = function(key, message) {
            return method.create(key).update(message);
          };
          for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
            var type2 = OUTPUT_TYPES[i];
            method[type2] = createHmacOutputMethod(type2);
          }
          return method;
        };
        function Md5(sharedMemory) {
          if (sharedMemory) {
            blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            this.blocks = blocks;
            this.buffer8 = buffer8;
          } else {
            if (ARRAY_BUFFER) {
              var buffer2 = new ArrayBuffer(68);
              this.buffer8 = new Uint8Array(buffer2);
              this.blocks = new Uint32Array(buffer2);
            } else {
              this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            }
          }
          this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
          this.finalized = this.hashed = false;
          this.first = true;
        }
        Md5.prototype.update = function(message) {
          if (this.finalized) {
            throw new Error(FINALIZE_ERROR);
          }
          var result = formatMessage(message);
          message = result[0];
          var isString = result[1];
          var code, index = 0, i, length = message.length, blocks2 = this.blocks;
          var buffer82 = this.buffer8;
          while (index < length) {
            if (this.hashed) {
              this.hashed = false;
              blocks2[0] = blocks2[16];
              blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
            }
            if (isString) {
              if (ARRAY_BUFFER) {
                for (i = this.start; index < length && i < 64; ++index) {
                  code = message.charCodeAt(index);
                  if (code < 128) {
                    buffer82[i++] = code;
                  } else if (code < 2048) {
                    buffer82[i++] = 192 | code >>> 6;
                    buffer82[i++] = 128 | code & 63;
                  } else if (code < 55296 || code >= 57344) {
                    buffer82[i++] = 224 | code >>> 12;
                    buffer82[i++] = 128 | code >>> 6 & 63;
                    buffer82[i++] = 128 | code & 63;
                  } else {
                    code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                    buffer82[i++] = 240 | code >>> 18;
                    buffer82[i++] = 128 | code >>> 12 & 63;
                    buffer82[i++] = 128 | code >>> 6 & 63;
                    buffer82[i++] = 128 | code & 63;
                  }
                }
              } else {
                for (i = this.start; index < length && i < 64; ++index) {
                  code = message.charCodeAt(index);
                  if (code < 128) {
                    blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
                  } else if (code < 2048) {
                    blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                    blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                  } else if (code < 55296 || code >= 57344) {
                    blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                    blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                    blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                  } else {
                    code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                    blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                    blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                    blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                    blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                  }
                }
              }
            } else {
              if (ARRAY_BUFFER) {
                for (i = this.start; index < length && i < 64; ++index) {
                  buffer82[i++] = message[index];
                }
              } else {
                for (i = this.start; index < length && i < 64; ++index) {
                  blocks2[i >>> 2] |= message[index] << SHIFT[i++ & 3];
                }
              }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
              this.start = i - 64;
              this.hash();
              this.hashed = true;
            } else {
              this.start = i;
            }
          }
          if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
          }
          return this;
        };
        Md5.prototype.finalize = function() {
          if (this.finalized) {
            return;
          }
          this.finalized = true;
          var blocks2 = this.blocks, i = this.lastByteIndex;
          blocks2[i >>> 2] |= EXTRA[i & 3];
          if (i >= 56) {
            if (!this.hashed) {
              this.hash();
            }
            blocks2[0] = blocks2[16];
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          blocks2[14] = this.bytes << 3;
          blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
          this.hash();
        };
        Md5.prototype.hash = function() {
          var a, b, c, d, bc, da, blocks2 = this.blocks;
          if (this.first) {
            a = blocks2[0] - 680876937;
            a = (a << 7 | a >>> 25) - 271733879 << 0;
            d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
            d = (d << 12 | d >>> 20) + a << 0;
            c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
            c = (c << 17 | c >>> 15) + d << 0;
            b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
            b = (b << 22 | b >>> 10) + c << 0;
          } else {
            a = this.h0;
            b = this.h1;
            c = this.h2;
            d = this.h3;
            a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
            a = (a << 7 | a >>> 25) + b << 0;
            d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
            d = (d << 12 | d >>> 20) + a << 0;
            c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
            c = (c << 17 | c >>> 15) + d << 0;
            b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
            b = (b << 22 | b >>> 10) + c << 0;
          }
          a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
          b = (b << 22 | b >>> 10) + c << 0;
          a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
          b = (b << 22 | b >>> 10) + c << 0;
          a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
          b = (b << 22 | b >>> 10) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
          b = (b << 20 | b >>> 12) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
          b = (b << 20 | b >>> 12) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
          b = (b << 20 | b >>> 12) + c << 0;
          a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
          a = (a << 5 | a >>> 27) + b << 0;
          d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
          d = (d << 9 | d >>> 23) + a << 0;
          c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
          c = (c << 14 | c >>> 18) + d << 0;
          b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
          b = (b << 20 | b >>> 12) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks2[5] - 378558;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks2[8] - 2022574463;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks2[11] + 1839030562;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks2[14] - 35309556;
          b = (b << 23 | b >>> 9) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks2[1] - 1530992060;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks2[4] + 1272893353;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks2[7] - 155497632;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks2[10] - 1094730640;
          b = (b << 23 | b >>> 9) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks2[13] + 681279174;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks2[0] - 358537222;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks2[3] - 722521979;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks2[6] + 76029189;
          b = (b << 23 | b >>> 9) + c << 0;
          bc = b ^ c;
          a += (bc ^ d) + blocks2[9] - 640364487;
          a = (a << 4 | a >>> 28) + b << 0;
          d += (bc ^ a) + blocks2[12] - 421815835;
          d = (d << 11 | d >>> 21) + a << 0;
          da = d ^ a;
          c += (da ^ b) + blocks2[15] + 530742520;
          c = (c << 16 | c >>> 16) + d << 0;
          b += (da ^ c) + blocks2[2] - 995338651;
          b = (b << 23 | b >>> 9) + c << 0;
          a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
          b = (b << 21 | b >>> 11) + c << 0;
          a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
          b = (b << 21 | b >>> 11) + c << 0;
          a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
          b = (b << 21 | b >>> 11) + c << 0;
          a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
          a = (a << 6 | a >>> 26) + b << 0;
          d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
          d = (d << 10 | d >>> 22) + a << 0;
          c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
          c = (c << 15 | c >>> 17) + d << 0;
          b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
          b = (b << 21 | b >>> 11) + c << 0;
          if (this.first) {
            this.h0 = a + 1732584193 << 0;
            this.h1 = b - 271733879 << 0;
            this.h2 = c - 1732584194 << 0;
            this.h3 = d + 271733878 << 0;
            this.first = false;
          } else {
            this.h0 = this.h0 + a << 0;
            this.h1 = this.h1 + b << 0;
            this.h2 = this.h2 + c << 0;
            this.h3 = this.h3 + d << 0;
          }
        };
        Md5.prototype.hex = function() {
          this.finalize();
          var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
          return HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15];
        };
        Md5.prototype.toString = Md5.prototype.hex;
        Md5.prototype.digest = function() {
          this.finalize();
          var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
          return [
            h0 & 255,
            h0 >>> 8 & 255,
            h0 >>> 16 & 255,
            h0 >>> 24 & 255,
            h1 & 255,
            h1 >>> 8 & 255,
            h1 >>> 16 & 255,
            h1 >>> 24 & 255,
            h2 & 255,
            h2 >>> 8 & 255,
            h2 >>> 16 & 255,
            h2 >>> 24 & 255,
            h3 & 255,
            h3 >>> 8 & 255,
            h3 >>> 16 & 255,
            h3 >>> 24 & 255
          ];
        };
        Md5.prototype.array = Md5.prototype.digest;
        Md5.prototype.arrayBuffer = function() {
          this.finalize();
          var buffer2 = new ArrayBuffer(16);
          var blocks2 = new Uint32Array(buffer2);
          blocks2[0] = this.h0;
          blocks2[1] = this.h1;
          blocks2[2] = this.h2;
          blocks2[3] = this.h3;
          return buffer2;
        };
        Md5.prototype.buffer = Md5.prototype.arrayBuffer;
        Md5.prototype.base64 = function() {
          var v1, v2, v3, base64Str = "", bytes = this.array();
          for (var i = 0; i < 15; ) {
            v1 = bytes[i++];
            v2 = bytes[i++];
            v3 = bytes[i++];
            base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
          }
          v1 = bytes[i];
          base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
          return base64Str;
        };
        function HmacMd5(key, sharedMemory) {
          var i, result = formatMessage(key);
          key = result[0];
          if (result[1]) {
            var bytes = [], length = key.length, index = 0, code;
            for (i = 0; i < length; ++i) {
              code = key.charCodeAt(i);
              if (code < 128) {
                bytes[index++] = code;
              } else if (code < 2048) {
                bytes[index++] = 192 | code >>> 6;
                bytes[index++] = 128 | code & 63;
              } else if (code < 55296 || code >= 57344) {
                bytes[index++] = 224 | code >>> 12;
                bytes[index++] = 128 | code >>> 6 & 63;
                bytes[index++] = 128 | code & 63;
              } else {
                code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
                bytes[index++] = 240 | code >>> 18;
                bytes[index++] = 128 | code >>> 12 & 63;
                bytes[index++] = 128 | code >>> 6 & 63;
                bytes[index++] = 128 | code & 63;
              }
            }
            key = bytes;
          }
          if (key.length > 64) {
            key = new Md5(true).update(key).array();
          }
          var oKeyPad = [], iKeyPad = [];
          for (i = 0; i < 64; ++i) {
            var b = key[i] || 0;
            oKeyPad[i] = 92 ^ b;
            iKeyPad[i] = 54 ^ b;
          }
          Md5.call(this, sharedMemory);
          this.update(iKeyPad);
          this.oKeyPad = oKeyPad;
          this.inner = true;
          this.sharedMemory = sharedMemory;
        }
        HmacMd5.prototype = new Md5();
        HmacMd5.prototype.finalize = function() {
          Md5.prototype.finalize.call(this);
          if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Md5.call(this, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Md5.prototype.finalize.call(this);
          }
        };
        var exports = createMethod();
        exports.md5 = exports;
        exports.md5.hmac = createHmacMethod();
        if (COMMON_JS) {
          module.exports = exports;
        } else {
          root.md5 = exports;
        }
      })();
    })(md5);
    return md5.exports;
  }
  var md5Exports = requireMd5();
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "ButtonCmcc",
    setup(__props) {
      const button = vue.ref();
      vue.onMounted(() => {
        const el = button.value.parentElement;
        el.style.cssText = `float: left; margin-right: 24px;`;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          ref_key: "button",
          ref: button,
          class: "my5 h9 flex items-center justify-center gap-x-2 border border-current rd-sm border-solid px5 text-#3181f9 lh-9 transition hover:bg-#3181f9/50 hover:text-white"
        }, _cache[0] || (_cache[0] = [
          vue.createElementVNode("i", { class: "i-carbon:batch-job text-sm" }, null, -1),
          vue.createElementVNode("span", { class: "text-xs font-medium" }, "重命名", -1)
        ]), 512);
      };
    }
  });
  const API_DELAY$1 = 200;
  const FETCH_MODE$1 = "manual-trigger";
  async function getFileListOfCurrentDir$2() {
    const result = [];
    let cursor = { type: "initial", value: null };
    while (cursor.type === "initial" || cursor.value) {
      const { data: { items, nextPageCursor } } = await post$1("https://personal-kd-njs.yun.139.com/hcy/file/list", {
        pageInfo: { pageSize: 100, pageCursor: cursor.value },
        orderBy: "updated_at",
        orderDirection: "DESC",
        parentFileId: localStorage.getItem("currentCatalogID"),
        imageThumbnailStyleList: ["Small", "Large"]
      }, {
        commonAccountInfo: {
          account: atob(getToken("ORCHES-I-ACCOUNT-ENCRYPT")),
          accountType: 1
        },
        catalogID: localStorage.getItem("currentCatalogID"),
        catalogSortType: 0,
        contentSortType: 0,
        endNumber: 100,
        filterType: 0,
        sortDirection: 1,
        startNumber: cursor.type === "initial" ? 1 : cursor.value
      });
      cursor = { type: "normal", value: nextPageCursor };
      result.push(...items.map((x) => ({
        drive_id: "whocare",
        file_id: x.fileId,
        name: x.name,
        parent_file_id: x.parentFileId,
        file_extension: x.fileExtension,
        mime_type: "whocare",
        type: x.type
      })));
    }
    return result;
  }
  async function rename$1(driveId, fileId, newName) {
    return post$1("https://personal-kd-njs.yun.139.com/hcy/file/update", {
      fileId,
      name: newName,
      description: ""
    }, {
      commonAccountInfo: {
        account: atob(getToken("ORCHES-I-ACCOUNT-ENCRYPT")),
        accountType: 1
      },
      contentID: fileId,
      contentName: newName
    });
  }
  const headers$1 = {};
  function setRequestHeader$2(key, value) {
    const l = [
      "caller",
      "Cms-Device",
      "Mcloud-Channel",
      "Mcloud-Client",
      "Mcloud-Route",
      "Mcloud-version",
      "X-Deviceinfo",
      "x-huawei-channelSrc",
      "x-m4c-src",
      "x-inner-ntwk",
      "x-m4c-caller",
      "x-inner-ntwk",
      "INNER-HCY-ROUTER-HTTPS",
      "hcy-cool-flag",
      "X-Svctype",
      "x-yun-Api-Version",
      "x-yun-channel-source",
      "x-yun-app-channel",
      "x-yun-client-info",
      "x-yun-module-type",
      "x-yun-svc-type"
    ];
    if (l.some((x) => x.toLowerCase() === key.toLowerCase()))
      headers$1[key] = value;
  }
  function getToken(key) {
    var _a;
    return ((_a = document.cookie.split("; ").map((x) => x.split("=", 2)).find((x) => x[0] === key)) == null ? void 0 : _a[1]) || "";
  }
  function createMD5(s) {
    const hash = md5Exports.md5.create();
    hash.update(s);
    return hash.hex();
  }
  function getNewSign(e, t, a, n) {
    let r = "";
    if (t) {
      let s = Object.assign({}, t);
      r = JSON.stringify(s);
      r = encodeURIComponent(r);
      s = r;
      const c = r.split("");
      const l = c.sort();
      r = l.join("");
    }
    const d = createMD5(window.btoa(r));
    const f = createMD5(`${a}:${n}`);
    return createMD5(d + f).toUpperCase();
  }
  function getSign(params) {
    const { time, random: random2, signPayload } = params;
    return getNewSign(void 0, signPayload, time, random2);
  }
  function post$1(api, payload, signPayload) {
    const time = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const random2 = "FO6ezlJ9BkwfHVZd";
    return fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": getToken("authorization"),
        "Mcloud-Sign": `${time},${random2},${getSign({ time, random: random2, signPayload })}`,
        ...headers$1
      },
      credentials: "include",
      body: JSON.stringify(payload)
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  async function renameOne$2(resource, newName) {
    await rename$1(resource.drive_id, resource.file_id, newName);
  }
  function shouldShowEntry$2(url) {
    return ["/w/#/main", "/w/#/main"].some((x) => url.includes(x));
  }
  function getContainer$2() {
    return {
      el: document.querySelector(".top_button"),
      style: "",
      front: true
    };
  }
  const cmcc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    API_DELAY: API_DELAY$1,
    ButtonComponent: _sfc_main$4,
    FETCH_MODE: FETCH_MODE$1,
    getContainer: getContainer$2,
    getFileListOfCurrentDir: getFileListOfCurrentDir$2,
    renameOne: renameOne$2,
    setRequestHeader: setRequestHeader$2,
    shouldShowEntry: shouldShowEntry$2
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$3 = {};
  const _hoisted_1$2 = {
    class: "inline-block h-9 flex items-center justify-center gap-x-1 rounded-lg px-4 py-2 text-#52565e transition hover:bg-#0d53ff hover:text-white",
    border: "~ #ddd solid",
    "mr-3": ""
  };
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("button", _hoisted_1$2, _cache[0] || (_cache[0] = [
      vue.createElementVNode("i", { class: "i-carbon:batch-job text-16px" }, null, -1),
      vue.createElementVNode("span", { class: "text-14px font-medium" }, "重命名", -1)
    ]));
  }
  const ButtonQuark = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
  const API_DELAY = 200;
  const FETCH_MODE = "listen-url";
  function getExt(fileName) {
    const i = fileName.lastIndexOf(".");
    return i > -1 ? fileName.slice(i + 1) : "";
  }
  function getParentId() {
    const hash = location.hash.replace("#/list/all", "").replace(/^\//, "").replace(/\/$/, "");
    const groups = hash.split("/");
    const lastGroup = groups[groups.length - 1];
    return lastGroup ? lastGroup.replace(/-.*$/, "") : "0";
  }
  async function getFileListOfCurrentDir$1(parentId = getParentId()) {
    const listApi = new URL("https://drive-pc.quark.cn/1/clouddrive/file/sort?pr=ucpro&fr=pc&uc_param_str=&pdir_fid=0&_page=1&_size=50&_fetch_total=1&_fetch_sub_dirs=0&_sort=file_type:asc,updated_at:desc");
    listApi.searchParams.set("pdir_fid", parentId);
    const result = [];
    let page = 1;
    let total = -1;
    while (total === -1 || result.length < total) {
      listApi.searchParams.set("_page", String(page++));
      const { data, metadata } = await get(listApi);
      result.push(...data.list.map((x) => ({
        drive_id: "whocare",
        file_id: x.fid,
        name: x.file_name,
        parent_file_id: x.pdir_fid,
        file_extension: getExt(x.file_name),
        mime_type: x.format_type,
        type: x.file ? "file" : "folder"
      })));
      total = metadata._total;
    }
    return result;
  }
  async function rename(driveId, fileId, newName) {
    return post("https://drive-pc.quark.cn/1/clouddrive/file/rename?pr=ucpro&fr=pc&uc_param_str=", {
      fid: fileId,
      file_name: newName
    });
  }
  const headers = {};
  function setRequestHeader$1(key, value) {
  }
  function post(api, payload) {
    return fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      credentials: "include",
      body: JSON.stringify(payload)
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  function get(api) {
    return fetch(api, {
      method: "GET",
      headers: {
        ...headers
      },
      credentials: "include"
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  async function renameOne$1(resource, newName) {
    await rename(resource.drive_id, resource.file_id, newName);
  }
  function shouldShowEntry$1(url) {
    return ["#/list/all"].some((x) => new URL(url).hash.startsWith(x));
  }
  function getContainer$1() {
    return {
      el: document.querySelector("#ice-container .ant-layout .section-header .btn-operate .btn-main"),
      style: "display: flex; align-items: center;",
      front: true
    };
  }
  const quark = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    API_DELAY,
    ButtonComponent: ButtonQuark,
    FETCH_MODE,
    getContainer: getContainer$1,
    getFileListOfCurrentDir: getFileListOfCurrentDir$1,
    renameOne: renameOne$1,
    setRequestHeader: setRequestHeader$1,
    shouldShowEntry: shouldShowEntry$1
  }, Symbol.toStringTag, { value: "Module" }));
  function resolveProvider() {
    if (location.host === "www.aliyundrive.com" || location.host === "www.alipan.com")
      return aliyun;
    else if (location.host === "pan.quark.cn")
      return quark;
    else if (location.host === "yun.139.com")
      return cmcc;
    else
      throw new Error("unimplemented provider");
  }
  function getApiDelay() {
    return resolveProvider().API_DELAY;
  }
  function getFetchMode() {
    return resolveProvider().FETCH_MODE;
  }
  function shouldShowEntry(url) {
    return resolveProvider().shouldShowEntry(url);
  }
  function getFileListOfCurrentDir() {
    return resolveProvider().getFileListOfCurrentDir();
  }
  function renameOne(resource, newName) {
    return resolveProvider().renameOne(resource, newName);
  }
  function setRequestHeader(key, value) {
    return resolveProvider().setRequestHeader(key, value);
  }
  function getComponent() {
    return resolveProvider().ButtonComponent;
  }
  function getContainer() {
    return resolveProvider().getContainer();
  }
  function getNewNameByExp(oldName, from, to) {
    try {
      return oldName.replace(new RegExp(from), to);
    } catch {
      return "";
    }
  }
  const SeasonEpisodeExtract = /S(?:eason)?[._\- ]?(\d{1,3})(?:[._\- ]?E|[._\- ])(\d{1,3})(?!\d)/i;
  const EpisodeExtract1 = /EP?(\d{1,3})(?!\d)/i;
  const EpisodeExtract2 = new RegExp("(?<![0-9h\\u4E00-\\u9FA5])(\\d{1,3})(?!\\d)(?![PK季])", "i");
  const EpisodeExtract3 = new RegExp("(?<![0-9h])(\\d{1,3})(?!\\d)(?![PK季])", "i");
  function getNewNameByExtract(oldName, prefix, season, epHelpers, refName) {
    let episode;
    if (refName)
      episode = getEpisodeByCompare(oldName, refName);
    if (epHelpers)
      episode = getEpisodeByHelpers(oldName, epHelpers);
    if (!episode)
      episode = getEpisode(oldName);
    season || (season = "1");
    const seasonNumber = Number.parseInt(season);
    const seasonNumberIsValid = !Number.isNaN(seasonNumber) && seasonNumber < 100;
    season = String(seasonNumberIsValid ? seasonNumber : 1).padStart(2, "0");
    if (!episode || !season)
      return "";
    const m = oldName.match(/(\.[a-z0-9]+)$/i);
    return `${prefix} S${season}E${episode}${m ? m[1] : ""}`;
  }
  function getEpisodeByCompare(oldName, refName) {
    const matchesO = [...oldName.matchAll(/\d+/g)].map((x) => x[0]);
    const matchesR = [...refName.matchAll(/\d+/g)].map((x) => x[0]);
    if (matchesO.length === 0 || matchesO.length !== matchesR.length)
      return;
    const diff = [];
    for (let i = 0; i < matchesO.length; ++i) {
      if (matchesO[i] !== matchesR[i])
        diff.push(matchesO[i]);
    }
    const filtered = diff.filter((x) => {
      const n = Number.parseInt(x);
      return !Number.isNaN(n) && n !== 0 && n < 1e3;
    });
    return filtered.length === 1 ? normalizeEpisode(filtered[0]) : void 0;
  }
  function normalizeEpisode(x) {
    return String(+x).padStart(3, "0");
  }
  function getEpisodeByHelpers(oldName, epHelpers) {
    const { pre, post: post2 } = epHelpers;
    if (!pre)
      return;
    const preIndex = oldName.indexOf(pre);
    const postIndex = oldName.lastIndexOf(post2);
    if (preIndex > -1 && postIndex > -1) {
      const shorted = oldName.slice(preIndex + pre.length, postIndex);
      const parsed = Number.parseInt(getEpisode(shorted));
      if (Number.isInteger(parsed))
        return normalizeEpisode(String(parsed));
    }
  }
  function getEpisode(oldName) {
    oldName = oldName.replace(/\.[a-z0-9]+$/i, "");
    {
      const [_, _s, episode] = oldName.match(SeasonEpisodeExtract) || [];
      if (episode)
        return normalizeEpisode(episode);
    }
    {
      const [_, episode] = oldName.match(EpisodeExtract1) || [];
      if (episode)
        return normalizeEpisode(episode);
    }
    {
      const [_, episode] = oldName.match(EpisodeExtract2) || [];
      if (episode)
        return normalizeEpisode(episode);
    }
    {
      const [_, episode] = oldName.match(EpisodeExtract3) || [];
      if (episode)
        return normalizeEpisode(episode);
    }
    return "001";
  }
  function getSeason(oldName) {
    const [_, s] = oldName.match(SeasonEpisodeExtract) || [];
    return s;
  }
  function getLcstr(a, b) {
    if (!a || !b)
      return "";
    const lenA = a.length;
    const lenB = b.length;
    let cache = [[], []];
    let maxLen = 0;
    let maxBEnd;
    for (let i = 0; i < lenA; i++)
      cache[0][i] = a[0] === b[i] ? 1 : 0;
    for (let i = 1; i < lenA; i++) {
      cache[1][0] = a[i] === b[0] ? 1 : 0;
      for (let j = 1; j < lenB; j++) {
        cache[1][j] = a[i] === b[j] ? cache[0][j - 1] + 1 : 0;
        if (cache[1][j] > maxLen) {
          maxLen = cache[1][j];
          maxBEnd = j;
        }
      }
      cache = [cache[1], []];
    }
    return b.slice(maxBEnd - maxLen + 1, maxBEnd + 1);
  }
  function guessSeason(list) {
    let currentSeason = "1";
    list.forEach((v) => {
      const temp = getSeason(v.name);
      if (temp)
        currentSeason = temp;
    });
    return currentSeason;
  }
  const Chinese = /([\u4E00-\u9FA5]+)/;
  function guessPrefix(list) {
    if (list.length === 0)
      return "";
    const m = list[0].name.match(Chinese);
    if (m == null ? void 0 : m[1])
      return m[1];
    if (list.length < 2) {
      const s = list[0];
      return s.name.replace(`.${s.file_extension}`, "").replace(/\s*S\d+E\d*|\s*E\d+/i, "").trim();
    }
    const [a, b] = list.slice(-2).map((x) => x.name.replace(`.${x.file_extension}`, ""));
    const lcs = getLcstr(a, b);
    if (lcs)
      return lcs.replace(/\s*S\d+E\d*|\s*E\d+/i, "").trim();
    return "";
  }
  const VideoExts = [
    "mp4",
    "flv",
    "f4v",
    "webm",
    "m4v",
    "mov",
    "cpk",
    "dirac",
    "3gp",
    "3g2",
    "rm",
    "rmvb",
    "wmv",
    "avi",
    "asf",
    "mpg",
    "mpeg",
    "mpe",
    "vob",
    "mkv",
    "ram",
    "qt",
    "fli",
    "flc",
    "mod",
    "iso",
    "ts"
  ];
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
  }
  function createSharedComposable(composable) {
    let subscribers = 0;
    let state;
    let scope;
    const dispose = () => {
      subscribers -= 1;
      if (scope && subscribers <= 0) {
        scope.stop();
        state = void 0;
        scope = void 0;
      }
    };
    return (...args) => {
      subscribers += 1;
      if (!scope) {
        scope = vue.effectScope(true);
        state = scope.run(() => composable(...args));
      }
      tryOnScopeDispose(dispose);
      return state;
    };
  }
  function toValue(r) {
    return typeof r === "function" ? r() : vue.unref(r);
  }
  const isClient = typeof window !== "undefined" && typeof document !== "undefined";
  typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
  const toString = Object.prototype.toString;
  const isObject = (val) => toString.call(val) === "[object Object]";
  const noop = () => {
  };
  function createFilterWrapper(filter, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  function debounceFilter(ms, options = {}) {
    let timer;
    let maxTimer;
    let lastRejector = noop;
    const _clearTimeout = (timer2) => {
      clearTimeout(timer2);
      lastRejector();
      lastRejector = noop;
    };
    const filter = (invoke) => {
      const duration = toValue(ms);
      const maxDuration = toValue(options.maxWait);
      if (timer)
        _clearTimeout(timer);
      if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
        if (maxTimer) {
          _clearTimeout(maxTimer);
          maxTimer = null;
        }
        return Promise.resolve(invoke());
      }
      return new Promise((resolve, reject) => {
        lastRejector = options.rejectOnCancel ? reject : resolve;
        if (maxDuration && !maxTimer) {
          maxTimer = setTimeout(() => {
            if (timer)
              _clearTimeout(timer);
            maxTimer = null;
            resolve(invoke());
          }, maxDuration);
        }
        timer = setTimeout(() => {
          if (maxTimer)
            _clearTimeout(maxTimer);
          maxTimer = null;
          resolve(invoke());
        }, duration);
      });
    };
    return filter;
  }
  function useDebounceFn(fn, ms = 200, options = {}) {
    return createFilterWrapper(
      debounceFilter(ms, options),
      fn
    );
  }
  const defaultWindow = isClient ? window : void 0;
  function unrefElement(elRef) {
    var _a;
    const plain = toValue(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
  }
  function useEventListener(...args) {
    let target;
    let events2;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      [events2, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events2, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events2))
      events2 = [events2];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = vue.watch(
      () => [unrefElement(target), toValue(options)],
      ([el, options2]) => {
        cleanup();
        if (!el)
          return;
        const optionsClone = isObject(options2) ? { ...options2 } : options2;
        cleanups.push(
          ...events2.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, optionsClone));
          })
        );
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  function _useUrl() {
    const url = vue.ref(location.href);
    let timer = window.setInterval(() => {
      url.value = location.href;
    }, 1e3);
    vue.onScopeDispose(() => {
      if (timer) {
        window.clearInterval(timer);
        timer = void 0;
      }
    });
    return url;
  }
  const useUrl = createSharedComposable(_useUrl);
  const RetryMax = 3;
  function useFileList() {
    let remainRetryCount = RetryMax;
    let hash = 0;
    const list = vue.ref([]);
    const loading = vue.ref(false);
    async function fetch2(h) {
      try {
        const res = await getFileListOfCurrentDir();
        if (h !== hash)
          return;
        list.value = res;
      } catch {
        if (h !== hash)
          return;
        setTimeout(() => {
          if (h !== hash)
            return;
          if (--remainRetryCount)
            return fetch2(hash);
        }, 1e3);
      }
    }
    async function refetch() {
      hash++;
      remainRetryCount = RetryMax;
      loading.value = true;
      await fetch2(hash);
      loading.value = false;
    }
    return {
      list,
      refetch,
      loading
    };
  }
  const useMainStore = /* @__PURE__ */ defineStore("main", () => {
    const uncheckList = vue.reactive(/* @__PURE__ */ new Set());
    const doneList = vue.reactive(/* @__PURE__ */ new Set());
    const errorList = vue.reactive(/* @__PURE__ */ new Set());
    const newNameMap = vue.reactive(/* @__PURE__ */ new Map());
    const running = vue.ref(false);
    const activeMode = vue.ref("extract");
    const from = vue.ref("");
    const to = vue.ref("");
    const prefix = vue.ref("");
    const season = vue.ref("");
    const epHelperPre = vue.ref("");
    const epHelperPost = vue.ref("");
    const error = vue.ref("");
    const warning = vue.ref("");
    const processData = vue.ref({
      total: 0,
      skip: 0,
      done: 0
    });
    const url = useUrl();
    const shouldShowEntry$12 = vue.computed(() => shouldShowEntry(url.value));
    const { list, loading: listLoading, refetch } = useFileList();
    const videoList = vue.computed(() => {
      return list.value.filter((x) => x.type === "file" && VideoExts.includes(x.file_extension.toLowerCase()));
    });
    const displayList = vue.computed(() => activeMode.value === "extract" ? videoList.value : list.value);
    const selectedList = vue.computed(() => displayList.value.filter((x) => !uncheckList.has(x.file_id) && newNameMap.has(x.file_id) && x.name !== newNameMap.get(x.file_id)));
    const conflictFileIds = vue.computed(() => {
      const l = selectedList.value.map((x) => [x.file_id, newNameMap.get(x.file_id)]);
      const m = /* @__PURE__ */ new Map();
      const r = /* @__PURE__ */ new Set();
      for (const [id, newName] of l) {
        if (m.has(newName)) {
          r.add(m.get(newName));
          r.add(id);
        } else {
          m.set(newName, id);
        }
      }
      return r;
    });
    const hasConflict = vue.computed(() => {
      return conflictFileIds.value.size > 0;
    });
    const disabled = vue.computed(() => activeMode.value === "regexp" && (!from.value || !to.value) || activeMode.value === "extract" && (!prefix.value || !season.value) || listLoading.value || !selectedList.value.length || hasConflict.value);
    const fetchMode = getFetchMode();
    if (fetchMode === "listen-url") {
      vue.watch(url, (v, ov) => {
        if (v && v !== ov && shouldShowEntry$12.value) {
          refetch();
        }
      }, { immediate: true });
    } else if (fetchMode === "manual-trigger") ;
    else {
      const exhaustedCheck = fetchMode;
      throw new Error(`fetchMode '${exhaustedCheck}' not implemented!`);
    }
    vue.watch(list, () => {
      uncheckList.clear();
      doneList.clear();
      errorList.clear();
      newNameMap.clear();
      guessPrefixAndSeason();
    });
    const debouncedNameGenerator = useDebounceFn(() => {
      if (list.value.length) {
        newNameMap.clear();
        if (activeMode.value === "extract" && prefix.value || activeMode.value === "regexp" && from.value && to.value) {
          for (let i = 0; i < list.value.length; ++i) {
            const item = list.value[i];
            const otherItem = list.value[i === 0 ? 1 : 0];
            newNameMap.set(item.file_id, getNewName(item.name, season.value.trim(), otherItem == null ? void 0 : otherItem.name));
          }
        }
      }
    }, 300);
    vue.watch([list, activeMode, prefix, season, from, to, epHelperPre, epHelperPost], debouncedNameGenerator, { immediate: true });
    function guessPrefixAndSeason() {
      prefix.value = guessPrefix(videoList.value);
      season.value = guessSeason(videoList.value);
    }
    function initRunState() {
      running.value = false;
      error.value = "";
      processData.value = {
        total: 0,
        skip: 0,
        done: 0
      };
    }
    const MaxConcurrent = 3;
    async function run() {
      if (disabled.value || running.value)
        return;
      initRunState();
      running.value = true;
      processData.value.total = displayList.value.length;
      processData.value.skip = displayList.value.length - selectedList.value.length;
      const queue = selectedList.value.slice();
      while (queue.length) {
        const subQueue = [];
        for (let i = 0; i < MaxConcurrent; i++) {
          const x = queue.shift();
          if (x)
            subQueue.push(x);
          else
            break;
        }
        await Promise.all(subQueue.map(async (item) => {
          const newName = newNameMap.get(item.file_id);
          if (!newName)
            return;
          await renameOne(item, newName).then(() => {
            doneList.add(item.file_id);
          }).catch(() => {
            errorList.add(item.file_id);
          });
          processData.value.done++;
        }));
        await new Promise((r) => setTimeout(r, getApiDelay()));
      }
      running.value = false;
      {
        warning.value = "即将刷新页面...";
        setTimeout(() => {
          location.reload();
        }, 1e3);
      }
    }
    function getNewName(oldName, season2, refName) {
      if (activeMode.value === "extract")
        return getNewNameByExtract(oldName, prefix.value.trim(), season2, { pre: epHelperPre.value, post: epHelperPost.value }, refName);
      else
        return getNewNameByExp(oldName, from.value, to.value);
    }
    function clearHelper() {
      epHelperPre.value = "";
      epHelperPost.value = "";
    }
    return {
      list,
      listLoading,
      refetch,
      shouldShowEntry: shouldShowEntry$12,
      uncheckList,
      videoList,
      displayList,
      selectedList,
      newNameMap,
      errorList,
      doneList,
      hasConflict,
      conflictFileIds,
      disabled,
      activeMode,
      from,
      to,
      prefix,
      season,
      error,
      warning,
      processData,
      run,
      running,
      extractHelperPre: epHelperPre,
      extractHelperPost: epHelperPost,
      clearHelper,
      fetchMode
    };
  });
  function useLoadingDots() {
    const loadingDotsIndex = vue.ref(0);
    const loadingDotsList = [".", "..", "..."];
    const loadingDots = vue.toRef(() => loadingDotsList[loadingDotsIndex.value]);
    let loadingDotsTimer;
    vue.onMounted(() => {
      loadingDotsTimer = window.setInterval(() => {
        loadingDotsIndex.value = (loadingDotsIndex.value + 1) % loadingDotsList.length;
      }, 200);
    });
    vue.onUnmounted(() => {
      window.clearInterval(loadingDotsTimer);
    });
    return { loadingDots };
  }
  const _hoisted_1$1 = { class: "custom-scrollbar fixed bottom-2 right-0 top-2 z-100 w-[max(500px,50vw)] overflow-y-auto border-y-3px border-l-3px border-primary-600 rounded-l-lg border-solid bg-white px-4 py-3 font-mono shadow" };
  const _hoisted_2$1 = {
    key: 0,
    class: "absolute inset-0 z-2 flex flex-col items-center justify-center bg-white/80 text-primary-600"
  };
  const _hoisted_3$1 = { class: "py-3 text-sm" };
  const _hoisted_4$1 = { class: "absolute" };
  const _hoisted_5$1 = { class: "py-1 pb-3 text-xs text-gray" };
  const _hoisted_6$1 = { class: "flex items-center justify-between" };
  const _hoisted_7$1 = {
    key: 0,
    class: "animated animated-shake-x animated-duration-800"
  };
  const _hoisted_8$1 = { key: 1 };
  const _hoisted_9$1 = { key: 2 };
  const _hoisted_10$1 = { class: "flex items-center gap-x-3 pb-2" };
  const _hoisted_11$1 = {
    key: 0,
    class: "ml-4 text-sm text-gray-600"
  };
  const _hoisted_12$1 = {
    key: 1,
    class: "ml-auto text-xs text-gray-600 font-sans"
  };
  const _hoisted_13$1 = { class: "text-primary-600 font-bold" };
  const _hoisted_14$1 = {
    key: 1,
    class: "grid grid-cols-[20px_auto_30px_minmax(200px,1fr)] items-center gap-x-2 gap-y-1 text-xs"
  };
  const _hoisted_15$1 = {
    key: 2,
    class: "py-8 text-center text-xs text-primary-600"
  };
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "PreviewPanel",
    setup(__props) {
      const main = useMainStore();
      function handleCheckChange(fileId, checked) {
        if (!checked)
          main.uncheckList.add(fileId);
        else
          main.uncheckList.delete(fileId);
      }
      function manualPickName(id) {
        if (id) {
          const found = main.videoList.find((x) => x.file_id === id);
          if (found) {
            if (main.activeMode === "extract")
              main.prefix = found.name.replace(`.${found.file_extension}`, "");
            else
              main.from = found.name;
          }
        }
      }
      const { loadingDots } = useLoadingDots();
      const helperTipAnimationClass = vue.ref("");
      vue.watch(() => main.hasConflict, (hasConflict) => {
        const timers = [];
        if (hasConflict) {
          helperTipAnimationClass.value = "";
          timers.push(window.setTimeout(() => {
            helperTipAnimationClass.value = "animated animated-flash animated-duration-1s";
            timers.push(window.setTimeout(() => {
              helperTipAnimationClass.value = "";
            }, 1e3));
          }, 1e3));
        } else {
          while (timers.length)
            window.clearInterval(timers.pop());
        }
      });
      return (_ctx, _cache) => {
        const _component_PreviewEntry = _sfc_main$6;
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.unref(main).listLoading ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [
            _cache[5] || (_cache[5] = vue.createElementVNode("div", { class: "i-carbon:circle-packing animate-spin text-4xl" }, null, -1)),
            vue.createElementVNode("p", _hoisted_3$1, [
              _cache[4] || (_cache[4] = vue.createTextVNode(" 正在获取文件列表")),
              vue.createElementVNode("span", _hoisted_4$1, vue.toDisplayString(vue.unref(loadingDots)), 1)
            ])
          ])) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_5$1, [
            vue.createElementVNode("span", _hoisted_6$1, [
              vue.unref(main).hasConflict ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$1, "❌ 文件名有冲突！")) : vue.unref(main).selectedList.length ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_8$1, "✅ 准备就绪")) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_9$1, "⌛ 暂无改动")),
              vue.unref(main).activeMode === "extract" ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 3,
                class: vue.normalizeClass(["inline-flex items-center gap-x-1", vue.unref(helperTipAnimationClass)])
              }, [
                _cache[6] || (_cache[6] = vue.createElementVNode("span", null, "帮助定位集数：", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(main).extractHelperPre = $event),
                  class: "bg-transparent px-1 text-right text-xs outline-none",
                  border: "b",
                  "inline-block": "",
                  "w-5em": "",
                  type: "text"
                }, null, 512), [
                  [vue.vModelText, vue.unref(main).extractHelperPre]
                ]),
                _cache[7] || (_cache[7] = vue.createElementVNode("span", { class: "text-primary" }, "[集数]", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(main).extractHelperPost = $event),
                  class: "bg-transparent px-1 text-xs outline-none",
                  border: "b",
                  "inline-block": "",
                  "w-5em": "",
                  type: "text"
                }, null, 512), [
                  [vue.vModelText, vue.unref(main).extractHelperPost]
                ])
              ], 2)) : vue.createCommentVNode("", true)
            ])
          ]),
          vue.createElementVNode("div", _hoisted_10$1, [
            vue.createElementVNode("button", {
              class: "text-sm text-primary-600",
              onClick: _cache[2] || (_cache[2] = ($event) => vue.unref(main).uncheckList.clear())
            }, " 全选 "),
            vue.createElementVNode("button", {
              class: "text-sm text-primary-600",
              onClick: _cache[3] || (_cache[3] = ($event) => vue.unref(main).displayList.forEach((x) => vue.unref(main).uncheckList.add(x.file_id)))
            }, " 全不选 "),
            vue.unref(main).displayList.length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_11$1, [
              _cache[8] || (_cache[8] = vue.createTextVNode(" 点击 ")),
              _cache[9] || (_cache[9] = vue.createElementVNode("i", { class: "i-carbon:pointer-text [vertical-align:-0.2em] inline-block text-sm text-green-700" }, null, -1)),
              vue.createTextVNode(" 可将其填充到“" + vue.toDisplayString(vue.unref(main).activeMode === "extract" ? "剧名" : "From") + "” ", 1)
            ])) : vue.createCommentVNode("", true),
            vue.unref(main).displayList.length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_12$1, [
              _cache[10] || (_cache[10] = vue.createTextVNode(" 共 ")),
              vue.createElementVNode("span", _hoisted_13$1, vue.toDisplayString(vue.unref(main).displayList.length), 1),
              _cache[11] || (_cache[11] = vue.createTextVNode(" 个文件 "))
            ])) : vue.createCommentVNode("", true)
          ]),
          vue.unref(main).displayList.length ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_14$1, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(main).displayList, (item) => {
              return vue.openBlock(), vue.createBlock(_component_PreviewEntry, {
                id: item.file_id,
                key: item.file_id,
                "old-name": item.name,
                "new-name": vue.unref(main).newNameMap.get(item.file_id) || "",
                "model-value": !vue.unref(main).uncheckList.has(item.file_id),
                done: vue.unref(main).doneList.has(item.file_id),
                error: vue.unref(main).errorList.has(item.file_id),
                conflict: vue.unref(main).conflictFileIds.has(item.file_id),
                "onUpdate:modelValue": ($event) => handleCheckChange(item.file_id, $event),
                onPick: manualPickName
              }, null, 8, ["id", "old-name", "new-name", "model-value", "done", "error", "conflict", "onUpdate:modelValue"]);
            }), 128))
          ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_15$1, _cache[12] || (_cache[12] = [
            vue.createTextVNode(" 当前"),
            vue.createElementVNode("span", { class: "font-bold" }, "目录", -1),
            vue.createTextVNode("和"),
            vue.createElementVNode("span", { class: "font-bold" }, "模式", -1),
            vue.createTextVNode("下，没有满足要求的条目~ ")
          ])))
        ]);
      };
    }
  });
  const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-da1c2f7f"]]);
  function random(n) {
    return Math.floor(Math.random() * n);
  }
  const name = "aliyundrive-rename";
  const type = "module";
  const version = "1.1.0";
  const packageManager = "pnpm@9.14.4";
  const description = "Batch rename files of aliyundrive.";
  const author = "a1mersnow";
  const repository = "https://github.com/a1mersnow/aliyundrive-rename";
  const scripts = { "build": "vite build", "dev": "vite --port 3333 --open", "lint": "eslint .", "typecheck": "vue-tsc --noEmit", "preview": "vite preview", "test": "vitest", "up": "taze major -I", "postinstall": "npx simple-git-hooks", "release": "node release.mjs" };
  const dependencies = { "@vueuse/core": "^12.0.0", "dayjs": "^1.11.13", "js-md5": "^0.8.3", "pinia": "^2.2.8", "vue": "^3.5.13" };
  const devDependencies = { "@antfu/eslint-config": "^3.11.2", "@iconify-json/carbon": "^1.2.4", "@iconify-json/ion": "^1.2.1", "@types/node": "^20.17.9", "@unocss/eslint-config": "^0.65.1", "@unocss/preset-rem-to-px": "^0.65.1", "@unocss/reset": "^0.65.1", "@vitejs/plugin-vue": "^5.2.1", "@vue/test-utils": "^2.4.6", "animated-unocss": "^0.0.6", "eslint": "^9.16.0", "eslint-define-config": "^2.1.0", "execa": "^9.5.1", "jsdom": "^25.0.1", "lint-staged": "^15.2.10", "pnpm": "^9.14.4", "simple-git-hooks": "^2.11.1", "taze": "^0.18.0", "typescript": "^5.7.2", "unocss": "^0.65.1", "unplugin-auto-import": "^0.18.6", "unplugin-vue-components": "^0.27.5", "vite": "^6.0.2", "vite-plugin-monkey": "^4.0.6", "vitest": "^2.1.8", "vue-tsc": "^2.1.10" };
  const pkg = {
    name,
    type,
    version,
    "private": true,
    packageManager,
    description,
    author,
    repository,
    scripts,
    dependencies,
    devDependencies,
    "simple-git-hooks": { "pre-commit": "pnpm lint-staged" },
    "lint-staged": { "*": "eslint --fix" }
  };
  function useUpdate() {
    const currentVersion = vue.ref(pkg.version);
    const newVersion = vue.ref("");
    vue.onMounted(async () => {
      const res = await fetch(`https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.meta.js?t=${Date.now()}`);
      if (res.ok) {
        const raw = await res.text();
        const regular = /@version\s+(\d\.\d\.\d)/;
        const m = regular.exec(raw);
        if (m)
          newVersion.value = m[1];
      }
    });
    const hasNew = vue.computed(() => newVersion.value && newVersion.value !== currentVersion.value);
    return { currentVersion, newVersion, hasNew };
  }
  const _hoisted_1 = { class: "absolute z-100 mt-2 w-300px rounded-lg bg-primary-100 p-3 shadow" };
  const _hoisted_2 = { class: "pb-2" };
  const _hoisted_3 = {
    key: 0,
    class: "text-xs text-red-600 underline underline-dashed hover:text-red-600 hover:underline hover:underline-dashed",
    href: "https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.user.js",
    target: "_blank"
  };
  const _hoisted_4 = {
    key: 1,
    class: "text-xs text-primary"
  };
  const _hoisted_5 = { class: "mb-3 flex items-center gap-x-4" };
  const _hoisted_6 = { class: "w-fit flex gap-x-1px overflow-hidden rounded text-xs text-white" };
  const _hoisted_7 = ["onClick"];
  const _hoisted_8 = { class: "grid gap-y-3 text-sm" };
  const _hoisted_9 = ["disabled"];
  const _hoisted_10 = ["disabled"];
  const _hoisted_11 = { class: "mb-1 block flex items-center gap-x-2" };
  const _hoisted_12 = ["disabled"];
  const _hoisted_13 = ["disabled"];
  const _hoisted_14 = { class: "min-h-40px" };
  const _hoisted_15 = {
    key: 0,
    class: "text-xs text-red"
  };
  const _hoisted_16 = {
    key: 1,
    class: "text-xs text-gray"
  };
  const _hoisted_17 = {
    key: 2,
    class: "text-xs text-primary"
  };
  const _hoisted_18 = { class: "flex" };
  const _hoisted_19 = ["disabled"];
  const _hoisted_20 = {
    key: 0,
    class: "i-carbon:contour-finding block animate-spin"
  };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "ControlPanel",
    setup(__props) {
      const { newVersion, currentVersion, hasNew } = useUpdate();
      const main = useMainStore();
      function fillRandomPrefix() {
        const len = main.videoList.length;
        if (!len)
          return;
        const found = main.videoList[random(len)];
        if (found)
          main.prefix = found.name.replace(`.${found.file_extension}`, "");
      }
      const modes = [
        { title: "剧集模式", value: "extract" },
        { title: "正则模式", value: "regexp" }
      ];
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.createElementVNode("p", _hoisted_2, [
            _cache[5] || (_cache[5] = vue.createTextVNode(" 批量重命名当前目录下的所有文件。")),
            _cache[6] || (_cache[6] = vue.createElementVNode("br", null, null, -1)),
            vue.unref(hasNew) ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_3, "有新版本(" + vue.toDisplayString(vue.unref(newVersion)) + ")啦！点击更新～", 1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, "当前版本：" + vue.toDisplayString(vue.unref(currentVersion)), 1))
          ]),
          vue.createElementVNode("div", _hoisted_5, [
            vue.createElementVNode("div", _hoisted_6, [
              (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(modes, (m) => {
                return vue.createElementVNode("div", {
                  key: m.value,
                  class: vue.normalizeClass(["bg-primary px-2 py-1", [
                    vue.unref(main).activeMode === m.value ? "bg-primary-600" : "",
                    vue.unref(main).running ? "cursor-not-allowed op50" : "cursor-pointer"
                  ]]),
                  onClick: ($event) => !vue.unref(main).running && (vue.unref(main).activeMode = m.value)
                }, vue.toDisplayString(m.title), 11, _hoisted_7);
              }), 64))
            ]),
            vue.unref(main).activeMode === "regexp" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _cache[7] || (_cache[7] = vue.createElementVNode("a", {
                class: "text-xs text-primary-600 font-medium underline",
                href: "https://regex101.com/",
                target: "_blank"
              }, " 正则可视化 ", -1)),
              _cache[8] || (_cache[8] = vue.createElementVNode("a", {
                class: "text-xs text-primary-600 font-medium underline",
                href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
                target: "_blank"
              }, " 文档 ", -1))
            ], 64)) : vue.createCommentVNode("", true)
          ]),
          vue.createElementVNode("div", _hoisted_8, [
            vue.unref(main).activeMode === "regexp" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              vue.createElementVNode("div", null, [
                _cache[9] || (_cache[9] = vue.createElementVNode("label", { class: "mb-1 block" }, "From", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(main).from = $event),
                  disabled: vue.unref(main).running,
                  autofocus: "",
                  placeholder: "正则表达式",
                  class: "h-8 w-full rounded bg-white px-3 outline-none"
                }, null, 8, _hoisted_9), [
                  [vue.vModelText, vue.unref(main).from]
                ])
              ]),
              vue.createElementVNode("div", null, [
                _cache[10] || (_cache[10] = vue.createElementVNode("label", { class: "mb-1 block" }, "To", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(main).to = $event),
                  disabled: vue.unref(main).running,
                  placeholder: "替换表达式",
                  class: "h-8 w-full rounded bg-white px-3 outline-none"
                }, null, 8, _hoisted_10), [
                  [vue.vModelText, vue.unref(main).to]
                ])
              ]),
              _cache[11] || (_cache[11] = vue.createStaticVNode('<div class="text-xs font-mono"><span class="text-#b07d48">原文件名</span><span class="text-#999">.</span><span class="text-#59873a">replace</span><span class="text-#2993a3">(</span><span class="text-#ab5959">new</span> <span class="text-#59873a">RegExp</span><span class="text-#1e754f">(</span><span class="text-#b07d48">From</span><span class="text-#1e754f">)</span><span class="text-#999">,</span> <span class="text-#b07d48">To</span><span class="text-#2993a3">)</span></div>', 1))
            ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              vue.createElementVNode("div", null, [
                vue.createElementVNode("label", _hoisted_11, [
                  _cache[12] || (_cache[12] = vue.createTextVNode(" 剧名 ")),
                  vue.createElementVNode("i", {
                    class: vue.normalizeClass(["i-ion:dice block text-sm text-primary-700", vue.unref(main).videoList.length ? "cursor-pointer" : "cursor-not-allowed opacity-50"]),
                    title: "随机填充原文件名",
                    onClick: fillRandomPrefix
                  }, null, 2)
                ]),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.unref(main).prefix = $event),
                  disabled: vue.unref(main).running,
                  autofocus: "",
                  placeholder: "请输入",
                  class: "h-8 w-full rounded bg-white px-3 outline-none"
                }, null, 8, _hoisted_12), [
                  [vue.vModelText, vue.unref(main).prefix]
                ])
              ]),
              vue.createElementVNode("div", null, [
                _cache[13] || (_cache[13] = vue.createElementVNode("label", { class: "mb-1 block" }, "季", -1)),
                vue.withDirectives(vue.createElementVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.unref(main).season = $event),
                  disabled: vue.unref(main).running,
                  placeholder: "0~99",
                  class: "h-8 w-full rounded bg-white px-3 outline-none"
                }, null, 8, _hoisted_13), [
                  [vue.vModelText, vue.unref(main).season]
                ])
              ])
            ], 64)),
            vue.createElementVNode("div", _hoisted_14, [
              vue.unref(main).error ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15, vue.toDisplayString(vue.unref(main).error), 1)) : vue.unref(main).processData.total ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_16, " 总共 " + vue.toDisplayString(vue.unref(main).processData.total) + " | 跳过 " + vue.toDisplayString(vue.unref(main).processData.skip) + " | 完成 " + vue.toDisplayString(vue.unref(main).processData.done), 1)) : vue.createCommentVNode("", true),
              vue.unref(main).warning ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_17, vue.toDisplayString(vue.unref(main).warning), 1)) : vue.createCommentVNode("", true)
            ]),
            vue.createElementVNode("div", _hoisted_18, [
              vue.createElementVNode("button", {
                class: "flex items-center justify-center gap-x-1 bg-primary-600 px-3 py-2 text-xs text-white btn",
                disabled: vue.unref(main).disabled || vue.unref(main).running,
                onClick: _cache[4] || (_cache[4] = //@ts-ignore
                (...args) => vue.unref(main).run && vue.unref(main).run(...args))
              }, [
                vue.unref(main).running ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_20)) : vue.createCommentVNode("", true),
                _cache[14] || (_cache[14] = vue.createTextVNode(" Run It! "))
              ], 8, _hoisted_19)
            ])
          ])
        ]);
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const main = useMainStore();
      const popupVisible = vue.ref(false);
      useEventListener("keydown", (e) => {
        if (e.key === "Escape")
          close();
      });
      if (main.fetchMode === "manual-trigger") {
        vue.watch(popupVisible, (visible) => {
          if (visible) {
            main.refetch();
          }
        });
      }
      function close() {
        if (main.running)
          return;
        popupVisible.value = false;
        main.clearHelper();
      }
      return (_ctx, _cache) => {
        const _component_ControlPanel = _sfc_main$1;
        const _component_PreviewPanel = __unplugin_components_1;
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(main).shouldShowEntry ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(getComponent)()), {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => popupVisible.value = true)
          })) : vue.createCommentVNode("", true),
          vue.createVNode(vue.Transition, { name: "clip" }, {
            default: vue.withCtx(() => [
              vue.unref(popupVisible) ? (vue.openBlock(), vue.createBlock(_component_ControlPanel, { key: 0 })) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, { name: "fade-left" }, {
            default: vue.withCtx(() => [
              vue.unref(popupVisible) ? (vue.openBlock(), vue.createBlock(_component_PreviewPanel, { key: 0 })) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, { name: "fade" }, {
            default: vue.withCtx(() => [
              vue.unref(popupVisible) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                class: "fixed inset-0 z-99 backdrop-blur-5",
                onClick: close
              })) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 64);
      };
    }
  });
  const ENTRY_ID = "a1mersnow_webdrive_rename";
  const oldSetHeader = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.setRequestHeader = function(key, value) {
    setRequestHeader(key, value);
    oldSetHeader.apply(this, [key, value]);
  };
  window.setInterval(() => {
    const { el, front, style } = getContainer();
    if (el)
      init(el, front, style);
  }, 300);
  function init(parentEl, front, style) {
    if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
      const app = vue.createApp(_sfc_main);
      const pinia = createPinia();
      app.use(pinia);
      app.mount(
        (() => {
          if (parentEl && parentEl instanceof HTMLElement)
            parentEl.style.cssText = parentEl.style.cssText + style;
          const appRoot = document.createElement("div");
          appRoot.style.cssText = "display: inline-block;";
          appRoot.setAttribute("id", ENTRY_ID);
          if (front)
            parentEl.insertBefore(appRoot, parentEl.firstElementChild);
          else
            parentEl.append(appRoot);
          return appRoot;
        })()
      );
    }
  }

})(Vue);