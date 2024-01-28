// ==UserScript==
// @name         阿里云盘批量重命名
// @namespace    vite-plugin-monkey
// @version      0.5.5
// @author       a1mersnow
// @description  批量重命名阿里云盘里的文件
// @license      GPL
// @icon         data:image/png;base64,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/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsTAAALEwEAmpwYAAASvUlEQVRoga2be4wkxXnAf9WP6ce8d4978MYHDiaO4zkShOwkh4Ox/IjssxIDhxIlkeFMrMhRJDhiORLiD8t3xFJiZOVhzsGyIw4cSE6xElnigjF2FAdkFuKE12F8L253z3s7+5id6Znp6cofVf2c2b09lJLupru6un71ffXVV1Vf9QrJ+umOGotMPQywn7igAbCEUHcChPqBNoAhAZrwEhc/ukHdYiL4jnDng8nNfvUzGYyI2RqsnrOwhQUhEbDzn09uEnx380Hu+XJ6PwnM0jhYcVmrKnL8GKDzzBjFGsM+DPDlsYL5tJQ0vPhkbVLxlV3LPy1kGQWs+fB5kCo18rc5ta2uro6Vv7i+66aNwJ/fHDaVWGR+mhl2rGnVpDOcgZXL1wXfbT7I/3dSHX8xALuy6Az41k2Ja4zlSJBqDKUyHwegAywuLsIZnb1zUj13P7kZLlH2JjWt4uDodDqdDh0AFl0AtiwwTMkJ+O7Ndi+QGJeSVGaoBaPu5O62ZMgxeHN6TtLSWM5kDziMyy8tscACKVmP403oebmufiPVWKn0LBNtn4KKvgyK77rAkkUIDC9XjkxLfEHyqm7WPq+tHdZpuCzllAEYDGS2G7Ayulfgz18IV6dx3Z4q9qkqJ6Wci286lU5nKgXfvanxu7w8VmV6fRqg00EGQRAEUKZcHqSPt2kuHeCmBHxhhpVFQ6rsfCqnufNsOw3D2ND47xh898a1T1JHI3eXIzv6t5k40W2cZtsQhkP92k4NPo/A+wv3K10xa/SdwWDg9JvdK60pWAS/wKUNbdU7P+VS1RUMyxCohgq5CdexH2AJ6tBdNYxfm78i0cL+k1vf6CyPVny6cVZfCqBT6bBw5XGVtVpd7esWnQOX9zyDlZtVzpPW1hrXNx+Y+Xomay/Quv/0zLZTAAQuAcg1lIEfh/oyUF2APjicm8YNAp4DITE3gdzPUn126r3NB2bWKXD43Avhcuw6Yr+5kDxe2KKv1XhzFxHyjsc3I+y95vw7H1+PCkDr9tnFeXLgmJxiK5q85aTyY+dNn+3v+O7fb1xkZoaDU6+PAMqFqWILJRgAMZc5rOwcuV669+yvPLShtDrd1/r0P3oyJQ9qrADo/wGcACEFFkJO6OI74dCdh5LbOy66ac8msAAc/p+ZEbCmJGQZQEi1CFsDbQWCrpBmjNC/d8Z1HFJZ++eu/fZmxNWp9bnvz2Y8inKzevWXkukJ+ZkN6zl0r1X7s81jAQ6+emzQVOh+PEFmRFbk3vgSKp/u/Xn9Ark89onrS22Afj/Jq1b7/T5ler2enlvE3upGlRjuB/ZcIBc4/NTr6dI6gGRcrVZXASEFPaO2UQ2H3BvfBpe9t7wzcdk9KRcWFHdVq1wipbWhqg998ca9b4MLe2/5RUXt9RBMMw1AlapMt2CLG3B//7q3x4W91zag1wOQ55g+BwyHw+EQiVoNGeJT688R/Rv+eP2qWwCsP84OvPyjeG5ibvvcdr366QEgiMRn1t2Zl0p/uR709q1vrElYrYmdl64zb7Ru/dez+jI7ljQZKYw7x18CwHCfnVhl67bV8qs17eGXDcto7J7IbrV+KIUUUqxSjR1IBNAHiEyxax1w/x3fmlTdn1ejxSU73sg4jm2de/2S287NjZWcu79zWgKUBvGqrzQAsCzLGsl1rdqcum9C7oHf+M/gQLZzZLsd9UvLu4+Ml90z5alFf4XMYlhdOOMRgThN/dJ4Xuuml71CQGUJoN1uHnlkfP664YWuwlRWQQqkHsUIJu06VbKq4yPpcCv41tcmF2/3nv5oq5i59w/0ClABJVXtJaWUGJ+WUkpkMTW/PVb5wZ9t+dti3mKyax28uftw8elDjZQL2WkZV0k8NqSWq2OKOzg68RdjjcmkUfBUkTzzYQFSVip6N+cOpKPkXFfV/pXFnCOvLmk178vlRwBRFEUs9o4WtX3l+/R2sjIYDAYDcANQznoy2LCKPdx6xonl1fw6wJSGAjBauLXw1l4z1uaUznHz4bJisq8p5twa/l18qSVWa4sn4lwBOK8cKLx2jXbI51QDZK+H1M56IrheXPIeeW0wsSA88YSCNwCC2YKyH/fU7/RQTkspcZMnxXHcbgJ0i6b1vKNVtK/wYB98jSfuAhpLRBz/3B/mn1/9lt/1u0Ooqc2iSwBF42q3223awOrVheqPnIq7ptFoNFg/Oc/mRZ5pCXwdCdFLDiW00OA27Xhp2IZ3XFqo73mvSKjXtXnBvsx+M1r8dL7c9HQ6WLNkaV6vYEEaMQm87X+d9/mtq7vwAux///sBHNd1wXVx1Wrux/DC9VByAjAXyb37ZjmIhOOogo40R4AVAka73R7b0r9RuL9tqShwIncd2Kc63qABjO7PlZjZiQBqNQiCAEohYWhZ1kSrXtlRsK1jf7P+7l3rWz1uSBmcnvic2Hv5aiafuNiTO/L3reguuCt5WvCv9TrsgziwNMo3urWzKiUQwZbcA0NPEfqfak0haLQ/IpV4wkqpXqvdoy+bTVnJPZtZw3WljIBAPdEzlqHr0v+klGAVwu4nq8BdKiIxcYUm4J54jyfL+QF1eTm9rgBSel4MzicpxS/kc8oRPLxhoEQAh9RyQ5wuBGuWwHGAAGRZNdwDrCTOCWAn1WTTasTDwP6MvHGMhy5qYPbu+XJ9WUhoXjShUbh6K1NWO3OPnpXlqkbYopd/VXX5RG61moT77qGOZLl++j1MSl1U+LOiavMmWPVwLEcDl2Ksn3mmh4unF1N1il7PrlSALqWSutfGd75tahZfH8NWiZ0InusBIj0GiJMq7nlQcjJkKxtw1Y2Rec/c6goJLNXTLCmUGlaU+62zDEJ6PYBL8iFIL4RqvNpSC5BKBzCyY7ajbgpDZmYrD6fzoQ/JzgtWVlY0GgQeCNbyHiRxZB6QmY8Lqu50gJXX8plVE/ZRB0PpOdewqlpRKHV4HmJbfhyveqAmJg+pyZVxMHSgVxD50iXdyMgny63X6/W6OieQ1DWawa4DrQx7Xg3OWk7mSuqlUlanUs97PR74ZZRIRlwy090YbheQgvqyBDy/OfxI91bjMaXx1rIeQLUVMicYlU689BEpuyOKB5Axx81zKwAd8KGLRNSjlRorbJ33zEXrU7taX59R5TNkYgND3JxnSKBy0UzeQL4wXKaOgQtJd6ZaCa0QoOsRRKqGeQ9g0LhqL633nhXaBa1AD4H2YQbQ6/USXyWATlHiWjcWWGtF7w1URMPCKgO+6Lm+qmEbQDdsn4OZT1wz7agZqwYeMjYwQ0cqErSASjm/iuCxi9Prel1Lq7YiUsoaDuUy4CvvIpQp+X5nDdjzVx++4b0XeeWYHO8WzWTSD8PQVuSBqB7NgefeUwlcQwns5va7ddd1cUZAqTREAPYQIXD6wJZvzwE8efQH4rOX9BedkdPHtkO16Mqtq3t4gJDyWEHXu/9peywwVGJsYtsO9KG8hkDid0HIGitB6kpm9kLrtpdP1ljB6yEF0gCRmQaVwsM3ChuCPbYeSfWMVRkiSWrKLSs3rju69v4bcnXMPD4F1BDggzCEAPWyiMnC8AqdzDvPxOqt6FWXkXU9QoDTQOCXyzFZPFvc+EmAWtX3cV03fT1DlqPvF9557LJVF6jHejYM6nUhBL6erITwaCCAsjax9jOFOu7PraKNAUlQJlX66IWCrmd+tYnMcOMO9gHf9308T0ADIUAZeO2a4v6rfUoNQgFCGAYDUJtmndnrAc5thbf2XNNP9aW5npdMzb5qdqNBU1Aug//cQ4UaWs+WtYEI4WYmCc0WQA/kXOE1HjKMOhWkVjPgC4EQQliWBUKo71AaNASUy8sfLAp8eyAlVCraOrMmkpAhev1I4b2Zdy92mE3FJbv+sSzLsoTuqwZQN8aCRrOBdsjjYNLNtxx8p/ji3g9YqylX2ZQCatOwbN3uZvPit8bC+kc8SiW1gCiVSoY09HlvShZK18OiyOwx7bqMuYqqgGDbNoBtK6G9t8bDvt/pXwWlUrzXMczLrRGEsQMbqcMgG9GZp9jPRz90ahvUwbf1rqtkmqYpTFMIaZoRYEYgouPjBywHzRHNJTDNET0YYoDjOCRSD7TIUp4pGjbcd+P/erG4kCxYAQwlL7Ztb31tXN7Wa6YPV6kbD6pVcyoMwxBELLWSORpZ0huMmfaTf3Ly8sC0wYKSUo5pqISQmGaEc8lrfzTG5UtSYg9pNpcwO9gRfmxcUsZSD+ItzCvFqBWw9/OvTRmKSw9MM9ngmaZtgH3Zid+dcJxw5FgZZZBXXaX3pObWIAy1sFpqEwywBP07jo7XcfTl1hU9g5ENjnL0rmVZKrpgbp168ffGI9ewfSuO0wd7CAulAbYlxLtV57qK7AKloYUBruFNf2jiYUjrc9tqa+hVo5Ms14zR1Mt7JpXnS1MrSJgH+BlDCMDcqkIDSmoRWjASkSHAEsOO3ZnU/rmTT9eO3eALCa4lBCCEPar+sH/TYxO5B65dHiIElcoaNJcNMxoKTEraWymyBYGNAgvv1Mf+fVJNc3NHf/Bffv860xmWbbvvWO5335S/OfvViViOnB1iD0FAd2r3x42TI8O0LxNbq5BuYhFKhZaBayD98KPrnwC1Zlrsx6P34AanQHC4/nO5BnRh5doPTslO7+AZlhoanJAFgIdlgI/0ab7rQs80i837xvE2sAZdpj9WHYrIWzg4F5TMaX1wLVDaFoDStQ02LN8+wbQvhHsCT8W3bPPjtdAUxqC+66WgacTfCEjIfA8VRjoEHnRfWafrNpUOf+MM+ps6wZQwBWD1ttwHBoRhSlY/uVBE9/lHxo45NpuO1M8MUau6StWYfbptAxhyq1wxTkhJGIYaOekTsO7rN71N8oHtJdRc2cC8ueavPr0UASIyph+N41wxOSeydofts5POs86bWo/8Vgc9V3LFLdO3NKLVp9eIRIRc1jtPKWNyLLJSf1fdV/svf/WChT78D+8+pwJYNtTfVe77N7vd+e+tWgOr8810BSLX/RBFeZfnPjp2qrRhan31qk5XDwzs2rWV0Ijcj+1i7t+W/bWXngIjnpSk/i8YNy9g9mr3JxdiYwe/sdvAjYfk9uuqoYkhvOu2i+XvLbz0ZPNyhNwG2mlZqHlCAF4JXAMPFzmNYAfykp9c8/WNXFSajlxnrhEgCWAUianLvJHqUtF76s0IOCu+IuQVQZYsUOQJ4Hq56c+75z28b93+yYERonUXMGpeVg7jgIfd/e4xBGcXHrU4sQ0gcEGGVhqlWJ3wmcZSUL30T7c/tpHYR07/emNgYIXgEkjgatePuURhtddYEvAoQsZfELogsGJde/0quIb0sxILXEeYzkvi8YnTQuv+0x8YViMhGUKo4rVcXKqMYgseWf0fvxKxyqvfwkqiIYGrAnYicMl8EhO4xNGatQpAybx+y4ftfxHXPpB+m9Bi/8nyh3pmKxpJIcEeYoW4BGKHXQnjz5hGZvfF4xHAKRVQnSiyQRXXkD6unAaxA1mngusID0v4CK8UCsuGJ38bGIZmsl8fqZ8hIdDw/IQrRe/FEyDFLF/I7SSCNFaP+towSL/Kny3qtReEQ0vK6FbTNO1yvVIh/305WNDwy6Pksy3hvDgPCHacRYHn0+qkMkf0SI4y9WSTigIljU5KCAFmPLViNfzyKPVQ3qklXBfgK/HLbiJyUiqP0LWPB8onJTNuSTVjzyPhnHgRB1z4ZtLqEyRkGapxT+aEXScdiy86NXI6SbVtV+1yyrUGp16IBI6D+9NnEnCi7KBQQwAERGOR5G4hI09Wvera1TAZR2a3e8wDAQ5fJAVn4siESJDJV9SASK0r6CfEfva79bwdmIDjpONImr3+j0IVzuYSsuATyUv5JVBEl/SD/Yl/9VEkqyth1bP2vPpm1VI7AGN3DhwrO7cCWc3kZVTby06gIj46Kdi+NJMciXfqrUCoWJ7xSfLgdEzpdYhMOjlhLGfXZdCPYhWEObIQmJl2jAznxHwPwMITMTfjQOZj8UI9N6sPLRIXopLu5NS6EpGzMo8yl1b/1OxIPw4SbtZzzWcsLECCEw8oAcq60k7uQuxfhvFCKdVtRl6z2z0XN9JPubngy4l5hcwvgrR1yVTXvVC51tiuC+RRBEgttN3rx942vGV3ptr8Yci8PgNUPqSHctdB/mP1jJ1plzpEr5AFjEYQERpRR0iInP4sA/Bh+iM51NhfeG3DRVhqijKq4BoeLqKJYEc8QeFZAl+AY1AGpDoMVYf/SgdCCgalARAwkGDcWOCMHf/Mz8fTFLAKgdJ1W6sy004JRImygcxCVUVkFRe63vuK3Ekfkp2AKwJwIdLNClyhFgPqz1LUeqHrS9F3ImOtjJDD+Ag40wyVBqKf7dq0aUVVZ9Md//GRRaZ+Bhz9nWmt67JIdE2qbCRZNENYY2UiUaf/AzjwA2i1Nu/CAAAAAElFTkSuQmCC
// @source       https://github.com/a1mersnow/aliyundrive-rename
// @match        https://www.aliyundrive.com/*
// @match        https://www.alipan.com/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.4.15/dist/vue.global.prod.js
// @grant        none
// ==/UserScript==

(t=>{if(typeof GM_addStyle=="function"){GM_addStyle(t);return}const o=document.createElement("style");o.textContent=t,document.head.append(o)})(` .clip-enter-from,.clip-leave-to{clip-path:inset(0 100% 100% 0)}.clip-enter-to,.clip-leave-from{clip-path:inset(0 0 0 0)}.clip-enter-active,.clip-leave-active{transition:clip-path .3s ease}.fade-enter-from,.fade-leave-to{opacity:0;transform:translate(10%)}.fade-enter-to,.fade-leave-from{opacity:1;transform:none}.fade-enter-active,.fade-leave-active{transition:opacity .3s,transform .3s ease}.custom-scrollbar[data-v-2ee1fad7]::-webkit-scrollbar{width:6px}.custom-scrollbar[data-v-2ee1fad7]::-webkit-scrollbar-track{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.custom-scrollbar[data-v-2ee1fad7]::-webkit-scrollbar-thumb{border-radius:9999px;--un-bg-opacity:1;background-color:rgb(112 136 255 / var(--un-bg-opacity));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.custom-scrollbar[data-v-2ee1fad7]::-webkit-scrollbar-thumb:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthSQBLyM.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Mono;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthqQBA.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRR232VGM.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:DM Sans;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxRSW32.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:"DM Serif Display";font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_Bx0g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.i-carbon\\:arrow-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:arrows-horizontal{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M11.41 26.59L7.83 23H28v-2H7.83l3.58-3.59L10 16l-6 6l6 6zM28 10l-6-6l-1.41 1.41L24.17 9H4v2h20.17l-3.58 3.59L22 16z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:batch-job{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M32 26v-2h-2.101a4.968 4.968 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A4.964 4.964 0 0 0 26 20.101V18h-2v2.101a4.968 4.968 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A4.964 4.964 0 0 0 20.101 24H18v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a4.964 4.964 0 0 0 1.753.732V32h2v-2.101a4.968 4.968 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A4.964 4.964 0 0 0 29.899 26zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m-5-11h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2m-8-2h8V4h-8z'/%3E%3Cpath fill='currentColor' d='M17 21H8a2 2 0 0 1-2-2V7h2v12h9z'/%3E%3Cpath fill='currentColor' d='M13 25H4c-1.103 0-2-.897-2-2V11h2v12h9z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:checkbox{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:checkbox-checked-filled{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3Cpath fill='none' d='m14 21.5l-5-4.957L10.59 15L14 18.346L21.409 11L23 12.577Z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:circle-packing{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.5 7a3.5 3.5 0 1 1-3.5 3.5A3.504 3.504 0 0 1 23.5 9m.435-1.978A5.528 5.528 0 0 0 23.5 7a5.483 5.483 0 0 0-4.132 1.878A8.01 8.01 0 0 0 13.8 4.211a11.855 11.855 0 0 1 10.134 2.811M16 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-4-10a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m-8-2a11.97 11.97 0 0 1 .211-2.199a7.992 7.992 0 0 0 7.346 6.176a5.958 5.958 0 0 0-.89 6.757A12.003 12.003 0 0 1 4 16m17.333 10.734a5.983 5.983 0 0 0-4.179-8.62a8.02 8.02 0 0 0 1.913-2.368a5.488 5.488 0 0 0 8.917-.068c.003.108.016.214.016.322a12.003 12.003 0 0 1-6.667 10.734'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:contour-finding{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cdefs/%3E%3Cpath d='M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z' fill='currentColor'/%3E%3Cpath d='M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z' fill='currentColor'/%3E%3Cpath d='M2.7 20.4a14.403 14.403 0 0 0 2 3.9l1.6-1.2a12.887 12.887 0 0 1-1.7-3.3z' fill='currentColor'/%3E%3Cpath d='M7.8 27.3a14.403 14.403 0 0 0 3.9 2l.6-1.9A12.887 12.887 0 0 1 9 25.7z' fill='currentColor'/%3E%3Cpath d='M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z' fill='currentColor'/%3E%3Cpath d='M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z' fill='currentColor'/%3E%3Cpath d='M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z' fill='currentColor'/%3E%3Cpath d='M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z' fill='currentColor'/%3E%3Cpath d='M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z' fill='currentColor'/%3E%3Cpath d='M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z' fill='currentColor'/%3E%3Cpath d='M16 26a10 10 0 1 1 10-10a10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-carbon\\:pointer-text{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M13.71 12.29L7.41 6H13V4H4v9h2V7.41l6.29 6.3l1.42-1.42z' fill='currentColor'/%3E%3Cpath d='M28 30H12a2 2 0 0 1-2-2V18h2v10h16V12H18v-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z' fill='currentColor'/%3E%3Cpath d='M22 15h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2zm0 8h-4v-2h4z' fill='currentColor'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.i-ion\\:dice{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 512 512' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M440.88 129.37L288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9M256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16s24 7.16 24 16s-10.75 16-24 16m-18 118.81L54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46M96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m266-172.49L274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49M320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24m0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24s16 10.75 16 24s-7.16 24-16 24'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1.2em;height:1.2em}.btn{display:inline-block;border-width:1px;border-color:currentColor;border-radius:.25rem;padding:.25rem;--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.btn:hover{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.btn:disabled{opacity:.5}.\\[vertical-align\\:-0\\.2em\\]{vertical-align:-.2em}.absolute{position:absolute}.fixed{position:fixed}.inset-0{top:0;right:0;bottom:0;left:0}.bottom-2{bottom:.5rem}.right-0{right:0}.top-2{top:.5rem}.z-2{z-index:2}.z-9999{z-index:9999}.grid{display:grid}.grid-cols-\\[20px_auto_30px_minmax\\(200px\\,1fr\\)\\]{grid-template-columns:20px auto 30px minmax(200px,1fr)}.m\\[1\\]{margin:1}.mb-1{margin-bottom:.25rem}.mb-3{margin-bottom:.75rem}.ml-4{margin-left:1rem}.ml-auto{margin-left:auto}.mt-2{margin-top:.5rem}.block{display:block}.inline-block{display:inline-block}.contents{display:contents}.h-8{height:2rem}.min-h-40px{min-height:40px}.min-h-61px{min-height:61px}.w-\\[max\\(500px\\,50vw\\)\\]{width:max(500px,50vw)}.w-300px{width:300px}.w-60px{width:60px}.w-fit{width:fit-content}.w-full{width:100%}.flex{display:flex}.flex-col{flex-direction:column}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.cursor-not-allowed{cursor:not-allowed}.items-center{align-items:center}.justify-center{justify-content:center}.justify-self-center{justify-self:center}.gap-x-1{column-gap:.25rem}.gap-x-1px{column-gap:1px}.gap-x-2{column-gap:.5rem}.gap-x-3{column-gap:.75rem}.gap-x-4{column-gap:1rem}.gap-y-1{row-gap:.25rem}.gap-y-3{row-gap:.75rem}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.b,[b=""]{border-width:1px}.border-y-3px{border-top-width:3px;border-bottom-width:3px}.border-l-3px{border-left-width:3px}.border-primary-600{--un-border-opacity:1;border-color:rgb(61 64 238 / var(--un-border-opacity))}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-l-lg{border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.border-solid{border-style:solid}.bg-primary,.bg-primary-400{--un-bg-opacity:1;background-color:rgb(112 136 255 / var(--un-bg-opacity))}.bg-primary-100{--un-bg-opacity:1;background-color:rgb(222 232 255 / var(--un-bg-opacity))}.bg-primary-600{--un-bg-opacity:1;background-color:rgb(61 64 238 / var(--un-bg-opacity))}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity))}.bg-white\\/80{background-color:#fffc}.hover\\:bg-primary-500:hover{--un-bg-opacity:1;background-color:rgb(91 106 249 / var(--un-bg-opacity))}.p-3{padding:.75rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2px{padding-left:2px;padding-right:2px}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-6px{padding-top:6px;padding-bottom:6px}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-center{text-align:center}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\#1e754f{--un-text-opacity:1;color:rgb(30 117 79 / var(--un-text-opacity))}.text-\\#2993a3{--un-text-opacity:1;color:rgb(41 147 163 / var(--un-text-opacity))}.text-\\#59873a{--un-text-opacity:1;color:rgb(89 135 58 / var(--un-text-opacity))}.text-\\#999{--un-text-opacity:1;color:rgb(153 153 153 / var(--un-text-opacity))}.text-\\#ab5959{--un-text-opacity:1;color:rgb(171 89 89 / var(--un-text-opacity))}.text-\\#b07d48{--un-text-opacity:1;color:rgb(176 125 72 / var(--un-text-opacity))}.text-gray{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity))}.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity))}.text-green-500{--un-text-opacity:1;color:rgb(34 197 94 / var(--un-text-opacity))}.text-green-700{--un-text-opacity:1;color:rgb(21 128 61 / var(--un-text-opacity))}.text-primary{--un-text-opacity:1;color:rgb(112 136 255 / var(--un-text-opacity))}.text-primary-500{--un-text-opacity:1;color:rgb(91 106 249 / var(--un-text-opacity))}.text-primary-600{--un-text-opacity:1;color:rgb(61 64 238 / var(--un-text-opacity))}.text-primary-700{--un-text-opacity:1;color:rgb(48 47 211 / var(--un-text-opacity))}.text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity))}.text-red-600{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity))}.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.hover\\:text-red-600:hover{--un-text-opacity:1;color:rgb(220 38 38 / var(--un-text-opacity))}.hover\\:text-white:hover{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity))}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-mono{font-family:DM Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-sans{font-family:DM Sans,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.underline,.hover\\:underline:hover{text-decoration-line:underline}.underline-dashed,.hover\\:underline-dashed:hover{text-decoration-style:dashed}.opacity-50{opacity:.5}.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / .1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / .1));box-shadow:var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.ease{transition-timing-function:cubic-bezier(.4,0,.2,1)} `);

(function (vue) {
  'use strict';

  const _hoisted_1$1 = { class: "contents" };
  const _hoisted_2$1 = ["title"];
  const _hoisted_3$1 = {
    key: 0,
    class: "i-carbon:arrow-right justify-self-center text-primary-600"
  };
  const _hoisted_4$1 = {
    key: 1,
    class: "i-carbon:arrows-horizontal justify-self-center text-green-500"
  };
  const _hoisted_5$1 = ["title"];
  const _hoisted_6$1 = { key: 0 };
  const _hoisted_7$1 = { key: 1 };
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "PreviewEntry",
    props: /* @__PURE__ */ vue.mergeModels({
      oldName: {},
      id: {},
      newName: {},
      done: { type: Boolean },
      error: { type: Boolean },
      showPick: { type: Boolean, default: false }
    }, {
      "modelValue": { type: Boolean },
      "modelModifiers": {}
    }),
    emits: /* @__PURE__ */ vue.mergeModels(["pick"], ["update:modelValue"]),
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const isSame = vue.toRef(() => __props.oldName === __props.newName);
      const disabled = vue.toRef(() => isSame.value || !__props.newName);
      const checked = vue.useModel(__props, "modelValue");
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("li", _hoisted_1$1, [
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
            _ctx.showPick ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: "i-carbon:pointer-text [vertical-align:-0.2em] inline-block cursor-pointer text-xs text-green-700",
              title: "填充到剧名",
              onClick: _cache[1] || (_cache[1] = ($event) => emit("pick", _ctx.id))
            })) : vue.createCommentVNode("", true)
          ], 8, _hoisted_2$1),
          !vue.unref(isSame) ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3$1)) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$1)),
          vue.createElementVNode("span", {
            class: vue.normalizeClass([vue.unref(disabled) ? "opacity-50" : "", "truncate whitespace-pre"]),
            title: _ctx.newName
          }, [
            vue.createTextVNode(vue.toDisplayString(_ctx.newName) + " ", 1),
            _ctx.error ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_6$1, "❌")) : _ctx.done ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7$1, "✅")) : vue.createCommentVNode("", true)
          ], 10, _hoisted_5$1)
        ]);
      };
    }
  });
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
  const listJsonMask = "next_marker,items(name,file_id,drive_id,type,size,created_at,updated_at,category,file_extension,parent_file_id,mime_type,starred,thumbnail,url,streams_info,content_hash,user_tags,user_meta,trashed,video_media_metadata,video_preview_metadata,sync_meta,sync_device_flag,sync_flag,punish_flag)";
  const API_DELAY = 200;
  const PAGE_SIZE = 100;
  function getToken() {
    const raw = window.localStorage.getItem("token");
    if (!raw)
      throw new Error("no token found");
    return JSON.parse(raw).access_token;
  }
  async function getDriveId() {
    const res = await post("https://user.aliyundrive.com/v2/user/get", {});
    return location.pathname.startsWith("/drive/file/resource") ? res.resource_drive_id : res.backup_drive_id;
  }
  const INITIAL_MARKER = "INITIAL";
  async function getFileListOfCurrentDir(parentId = getParentId()) {
    const listApi = new URL("https://api.aliyundrive.com/adrive/v3/file/list");
    listApi.searchParams.append("jsonmask", listJsonMask);
    const driveId = await getDriveId();
    const result = [];
    let marker = INITIAL_MARKER;
    while (marker) {
      const { items, next_marker } = await post(listApi, {
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
  async function rename(driveId, fileId, newName) {
    return post("https://api.aliyundrive.com/v3/file/update", {
      check_name_mode: "refuse",
      drive_id: driveId,
      file_id: fileId,
      name: newName
    });
  }
  function getParentId() {
    const p = location.pathname;
    const i = p.lastIndexOf("/");
    const lastSegment = p.slice(i + 1);
    return /[a-z0-9]{32,}/.test(lastSegment) ? lastSegment : "root";
  }
  let signature = "";
  function setSignature(v) {
    signature = v;
  }
  function post(api, payload) {
    var _a;
    return fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Authorization": `Bearer ${getToken()}`,
        "X-Device-Id": ((_a = document.cookie.match(/cna=(.+?);/)) == null ? void 0 : _a[1]) || "",
        "X-Signature": signature
      },
      body: JSON.stringify(payload)
    }).then((res) => {
      if (res.ok)
        return res.json();
      else
        return Promise.reject(new Error("network error"));
    });
  }
  async function renameOne(resource, newName) {
    await rename(resource.drive_id, resource.file_id, newName);
  }
  function getNewNameByExp(oldName, from, to) {
    try {
      return oldName.replace(new RegExp(from), to);
    } catch {
      return "";
    }
  }
  const SeasonEpisodeExtract = new RegExp("S(?:eason)?[._\\- ]?([0-9]{1,3})(?![0-9])(?:[._\\- ]?E|[._\\- ])([0-9]{1,3})(?![0-9])|E([0-9]{1,3})(?![0-9])|EP([0-9]{1,3})(?![0-9])|(?<![0-9])([0-9]{1,3})(?=$|\\.)", "i");
  function getNewNameByExtract(oldName, prefix, season) {
    const [_, _s, epm1, epm2, epm3, epm4] = oldName.match(SeasonEpisodeExtract) || [];
    let episode = epm1 || epm2 || epm3 || epm4;
    season || (season = "1");
    const seasonNumber = Number.parseInt(season);
    const seasonNumberIsValid = !Number.isNaN(seasonNumber) && seasonNumber < 100;
    season = String(seasonNumberIsValid ? seasonNumber : 1).padStart(2, "0");
    episode = String(+episode).padStart(3, "0");
    if (!episode || !season)
      return "";
    const m = oldName.match(/(\.[a-z0-9]+)$/i);
    return `${prefix} S${season}E${episode}${m ? m[1] : ""}`;
  }
  function getSeason(oldName) {
    const [_, s] = oldName.match(SeasonEpisodeExtract) || [];
    return s;
  }
  function tryOnScopeDispose(fn) {
    if (vue.getCurrentScope()) {
      vue.onScopeDispose(fn);
      return true;
    }
    return false;
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
  const isIOS = /* @__PURE__ */ getIsIOS();
  function getIsIOS() {
    var _a, _b;
    return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
    return new Promise((resolve, reject) => {
      if (throwOnTimeout)
        setTimeout(() => reject(reason), ms);
      else
        setTimeout(resolve, ms);
    });
  }
  function createUntil(r, isNot = false) {
    function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
      let stop = null;
      const watcher = new Promise((resolve) => {
        stop = vue.watch(
          r,
          (v) => {
            if (condition(v) !== isNot) {
              stop == null ? void 0 : stop();
              resolve(v);
            }
          },
          {
            flush,
            deep,
            immediate: true
          }
        );
      });
      const promises = [watcher];
      if (timeout != null) {
        promises.push(
          promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
        );
      }
      return Promise.race(promises);
    }
    function toBe(value, options) {
      if (!vue.isRef(value))
        return toMatch((v) => v === value, options);
      const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
      let stop = null;
      const watcher = new Promise((resolve) => {
        stop = vue.watch(
          [r, value],
          ([v1, v2]) => {
            if (isNot !== (v1 === v2)) {
              stop == null ? void 0 : stop();
              resolve(v1);
            }
          },
          {
            flush,
            deep,
            immediate: true
          }
        );
      });
      const promises = [watcher];
      if (timeout != null) {
        promises.push(
          promiseTimeout(timeout, throwOnTimeout).then(() => toValue(r)).finally(() => {
            stop == null ? void 0 : stop();
            return toValue(r);
          })
        );
      }
      return Promise.race(promises);
    }
    function toBeTruthy(options) {
      return toMatch((v) => Boolean(v), options);
    }
    function toBeNull(options) {
      return toBe(null, options);
    }
    function toBeUndefined(options) {
      return toBe(void 0, options);
    }
    function toBeNaN(options) {
      return toMatch(Number.isNaN, options);
    }
    function toContains(value, options) {
      return toMatch((v) => {
        const array = Array.from(v);
        return array.includes(value) || array.includes(toValue(value));
      }, options);
    }
    function changed(options) {
      return changedTimes(1, options);
    }
    function changedTimes(n = 1, options) {
      let count = -1;
      return toMatch(() => {
        count += 1;
        return count >= n;
      }, options);
    }
    if (Array.isArray(toValue(r))) {
      const instance = {
        toMatch,
        toContains,
        changed,
        changedTimes,
        get not() {
          return createUntil(r, !isNot);
        }
      };
      return instance;
    } else {
      const instance = {
        toMatch,
        toBe,
        toBeTruthy,
        toBeNull,
        toBeNaN,
        toBeUndefined,
        changed,
        changedTimes,
        get not() {
          return createUntil(r, !isNot);
        }
      };
      return instance;
    }
  }
  function until(r) {
    return createUntil(r);
  }
  function unrefElement(elRef) {
    var _a;
    const plain = toValue(elRef);
    return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
  }
  const defaultWindow = isClient ? window : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop;
    if (!Array.isArray(events))
      events = [events];
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
          ...events.flatMap((event) => {
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
  let _iOSWorkaround = false;
  function onClickOutside(target, handler, options = {}) {
    const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
    if (!window2)
      return noop;
    if (isIOS && !_iOSWorkaround) {
      _iOSWorkaround = true;
      Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop));
      window2.document.documentElement.addEventListener("click", noop);
    }
    let shouldListen = true;
    const shouldIgnore = (event) => {
      return ignore.some((target2) => {
        if (typeof target2 === "string") {
          return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
        } else {
          const el = unrefElement(target2);
          return el && (event.target === el || event.composedPath().includes(el));
        }
      });
    };
    const listener = (event) => {
      const el = unrefElement(target);
      if (!el || el === event.target || event.composedPath().includes(el))
        return;
      if (event.detail === 0)
        shouldListen = !shouldIgnore(event);
      if (!shouldListen) {
        shouldListen = true;
        return;
      }
      handler(event);
    };
    const cleanup = [
      useEventListener(window2, "click", listener, { passive: true, capture }),
      useEventListener(window2, "pointerdown", (e) => {
        const el = unrefElement(target);
        shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
      }, { passive: true }),
      detectIframe && useEventListener(window2, "blur", (event) => {
        setTimeout(() => {
          var _a;
          const el = unrefElement(target);
          if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
            handler(event);
        }, 0);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }
  function useAsyncState(promise, initialState, options) {
    const {
      immediate = true,
      delay = 0,
      onError = noop,
      onSuccess = noop,
      resetOnExecute = true,
      shallow = true,
      throwError
    } = options != null ? options : {};
    const state = shallow ? vue.shallowRef(initialState) : vue.ref(initialState);
    const isReady = vue.ref(false);
    const isLoading = vue.ref(false);
    const error = vue.shallowRef(void 0);
    async function execute(delay2 = 0, ...args) {
      if (resetOnExecute)
        state.value = initialState;
      error.value = void 0;
      isReady.value = false;
      isLoading.value = true;
      if (delay2 > 0)
        await promiseTimeout(delay2);
      const _promise = typeof promise === "function" ? promise(...args) : promise;
      try {
        const data = await _promise;
        state.value = data;
        isReady.value = true;
        onSuccess(data);
      } catch (e) {
        error.value = e;
        onError(e);
        if (throwError)
          throw e;
      } finally {
        isLoading.value = false;
      }
      return state.value;
    }
    if (immediate)
      execute(delay);
    const shell = {
      state,
      isReady,
      isLoading,
      error,
      execute
    };
    function waitUntilIsLoaded() {
      return new Promise((resolve, reject) => {
        until(isLoading).toBe(false).then(() => resolve(shell)).catch(reject);
      });
    }
    return {
      ...shell,
      then(onFulfilled, onRejected) {
        return waitUntilIsLoaded().then(onFulfilled, onRejected);
      }
    };
  }
  const name = "aliyundrive-rename";
  const type = "module";
  const version = "0.5.5";
  const packageManager = "pnpm@8.15.0";
  const description = "Batch rename files of aliyundrive.";
  const author = "a1mersnow";
  const repository = "https://github.com/a1mersnow/aliyundrive-rename";
  const scripts = {
    build: "vite build",
    dev: "vite --port 3333 --open",
    lint: "eslint .",
    typecheck: "vue-tsc --noEmit",
    preview: "vite preview",
    test: "vitest",
    up: "taze major -I",
    postinstall: "npx simple-git-hooks",
    release: "node release.mjs"
  };
  const dependencies = {
    "@vueuse/core": "^10.7.2",
    vue: "^3.4.15"
  };
  const devDependencies = {
    "@antfu/eslint-config": "^2.6.3",
    "@iconify-json/carbon": "^1.1.28",
    "@iconify-json/ion": "^1.1.15",
    "@types/node": "^20.11.8",
    "@unocss/eslint-config": "^0.58.4",
    "@unocss/eslint-plugin": "^0.58.4",
    "@unocss/reset": "^0.58.4",
    "@vitejs/plugin-vue": "^5.0.3",
    "@vue/test-utils": "^2.4.4",
    eslint: "^8.56.0",
    "eslint-define-config": "^2.1.0",
    execa: "^8.0.1",
    jsdom: "^24.0.0",
    "lint-staged": "^15.2.0",
    pnpm: "^8.15.0",
    "simple-git-hooks": "^2.9.0",
    taze: "^0.13.1",
    typescript: "^5.3.3",
    unocss: "^0.58.4",
    "unplugin-auto-import": "^0.17.5",
    "unplugin-vue-components": "^0.26.0",
    vite: "^4.5.2",
    "vite-plugin-monkey": "^3.5.1",
    vitest: "^1.2.2",
    "vue-tsc": "^1.8.27"
  };
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
    "simple-git-hooks": {
      "pre-commit": "pnpm lint-staged"
    },
    "lint-staged": {
      "*": "eslint --fix"
    }
  };
  function useUpdate() {
    const currentVersion = pkg.version;
    const newVersion = vue.ref("");
    const msg = vue.computed(() => {
      if (!newVersion.value || currentVersion === newVersion.value)
        return "";
      else
        return `有新版本(${newVersion.value})啦！点击更新～`;
    });
    vue.onMounted(async () => {
      const res = await fetch(`https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.meta.js?t=${Date.now()}`);
      if (res.ok) {
        const raw = await res.text();
        const regular = /@version\s+([0-9]\.[0-9]\.[0-9])/;
        const m = regular.exec(raw);
        if (m)
          newVersion.value = m[1];
      }
    });
    return msg;
  }
  const _withScopeId = (n) => (vue.pushScopeId("data-v-2ee1fad7"), n = n(), vue.popScopeId(), n);
  const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "i-carbon:batch-job text-xl" }, null, -1));
  const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { class: "text-xs font-medium" }, "重命名", -1));
  const _hoisted_3 = [
    _hoisted_1,
    _hoisted_2
  ];
  const _hoisted_4 = { class: "pb-2" };
  const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("br", null, null, -1));
  const _hoisted_6 = {
    key: 0,
    class: "text-xs text-red-600 underline underline-dashed hover:text-red-600 hover:underline hover:underline-dashed",
    href: "https://update.greasyfork.org/scripts/479295/%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D.user.js",
    target: "_blank"
  };
  const _hoisted_7 = { class: "mb-3 flex items-center gap-x-4" };
  const _hoisted_8 = { class: "w-fit flex gap-x-1px overflow-hidden rounded text-xs text-white" };
  const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("a", {
    class: "text-xs text-primary-600 font-medium underline",
    href: "https://regex101.com/",
    target: "_blank"
  }, " 正则可视化 ", -1));
  const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("a", {
    class: "text-xs text-primary-600 font-medium underline",
    href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
    target: "_blank"
  }, " 文档 ", -1));
  const _hoisted_11 = { class: "grid gap-y-3 text-sm" };
  const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("label", { class: "mb-1 block" }, "From", -1));
  const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("label", { class: "mb-1 block" }, "To", -1));
  const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "text-xs font-mono" }, [
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#b07d48" }, "原文件名"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#999" }, "."),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#59873a" }, "replace"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#2993a3" }, "("),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#ab5959" }, "new"),
    /* @__PURE__ */ vue.createTextVNode(),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#59873a" }, "RegExp"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#1e754f" }, "("),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#b07d48" }, "From"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#1e754f" }, ")"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#999" }, ","),
    /* @__PURE__ */ vue.createTextVNode(),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#b07d48" }, "To"),
    /* @__PURE__ */ vue.createElementVNode("span", { class: "text-#2993a3" }, ")")
  ], -1));
  const _hoisted_15 = { class: "mb-1 block flex items-center gap-x-2" };
  const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("label", { class: "mb-1 block" }, "季", -1));
  const _hoisted_17 = { class: "min-h-40px" };
  const _hoisted_18 = {
    key: 0,
    class: "text-xs text-red"
  };
  const _hoisted_19 = {
    key: 1,
    class: "text-xs text-gray"
  };
  const _hoisted_20 = {
    key: 2,
    class: "text-xs text-primary"
  };
  const _hoisted_21 = { class: "flex" };
  const _hoisted_22 = ["disabled"];
  const _hoisted_23 = {
    key: 0,
    class: "i-carbon:contour-finding block animate-spin"
  };
  const _hoisted_24 = {
    key: 0,
    class: "absolute inset-0 z-2 flex flex-col items-center justify-center bg-white/80 text-primary-600"
  };
  const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "i-carbon:circle-packing animate-spin text-4xl" }, null, -1));
  const _hoisted_26 = { class: "py-3 text-sm" };
  const _hoisted_27 = { class: "absolute" };
  const _hoisted_28 = {
    key: 1,
    class: "pb-1 text-xs text-red"
  };
  const _hoisted_29 = { class: "flex items-center gap-x-3 pb-2" };
  const _hoisted_30 = {
    key: 0,
    class: "ml-4 text-sm text-gray-600"
  };
  const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("i", { class: "i-carbon:pointer-text [vertical-align:-0.2em] inline-block text-sm text-green-700" }, null, -1));
  const _hoisted_32 = {
    key: 1,
    class: "ml-auto text-xs text-gray-600 font-sans"
  };
  const _hoisted_33 = { class: "text-primary-600 font-bold" };
  const _hoisted_34 = {
    key: 2,
    class: "grid grid-cols-[20px_auto_30px_minmax(200px,1fr)] items-center gap-x-2 gap-y-1 text-xs"
  };
  const _hoisted_35 = {
    key: 3,
    class: "py-8 text-center text-xs text-primary-600"
  };
  const RetryMax = 3;
  const MaxConcurrent = 3;
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const url = vue.ref(location.href);
      setInterval(() => {
        url.value = location.href;
      }, 1e3);
      const shouldShowEntry = vue.computed(() => ["/drive/file/backup", "/drive/file/resource"].some((x) => new URL(url.value).pathname.startsWith(x)));
      const uncheckList = vue.ref([]);
      const doneList = vue.ref([]);
      const errorList = vue.ref([]);
      const listLoading = vue.ref(false);
      const newNameMap = vue.ref({});
      let remainRetryCount = RetryMax;
      const { state: list, execute: fetchList } = useAsyncState(() => {
        return getFileListOfCurrentDir();
      }, [], {
        immediate: false,
        onSuccess: () => {
          uncheckList.value = [];
          doneList.value = [];
          errorList.value = [];
          newNameMap.value = {};
          listLoading.value = false;
          guessPrefixAndSeason();
        },
        onError: () => {
          setTimeout(() => {
            if (--remainRetryCount)
              fetchList();
          }, 1e3);
        }
      });
      function handleCheckChange(fileId, checked) {
        if (uncheckList.value.includes(fileId))
          uncheckList.value = uncheckList.value.filter((x) => x !== fileId || !checked);
        else
          uncheckList.value = uncheckList.value.concat(fileId);
      }
      const videoList = vue.computed(() => {
        return list.value.filter((x) => x.type === "file" && VideoExts.includes(x.file_extension.toLowerCase()));
      });
      const popupVisible = vue.ref(false);
      const popup = vue.ref();
      const previewRef = vue.ref();
      const trigger = vue.ref();
      function handleClickRenameBtn() {
        popupVisible.value = true;
      }
      onClickOutside(popup, () => {
        popupVisible.value = false;
      }, { ignore: [trigger, previewRef] });
      const running = vue.ref(false);
      const from = vue.ref("");
      const to = vue.ref("");
      const activeMode = vue.ref("extract");
      const prefix = vue.ref("");
      const season = vue.ref("");
      const showList = vue.computed(() => activeMode.value === "extract" ? videoList.value : list.value);
      const selectedList = vue.computed(() => showList.value.filter((x) => !uncheckList.value.includes(x.file_id) && newNameMap.value[x.file_id] && x.name !== newNameMap.value[x.file_id]));
      const hasConflict = vue.computed(() => {
        const l = selectedList.value;
        const newNames = /* @__PURE__ */ new Set();
        for (const item of l) {
          if (!uncheckList.value.includes(item.file_id) && newNameMap.value[item.file_id]) {
            if (newNames.has(newNameMap.value[item.file_id]))
              return true;
            newNames.add(newNameMap.value[item.file_id]);
          }
        }
        return false;
      });
      const disabled = vue.computed(() => activeMode.value === "regexp" && (!from.value || !to.value) || activeMode.value === "extract" && (!prefix.value || !season.value) || listLoading.value || !selectedList.value.length || hasConflict.value);
      vue.watch(url, (v, ov) => {
        if (v && v !== ov && shouldShowEntry.value) {
          listLoading.value = true;
          setTimeout(() => {
            fetchList();
            remainRetryCount = RetryMax;
          }, 1e3);
        }
      }, { immediate: true });
      vue.watch(activeMode, () => {
        initRunState();
      });
      vue.watch(popupVisible, async (v) => {
        var _a, _b;
        if (v) {
          await vue.nextTick();
          (_b = (_a = popup.value) == null ? void 0 : _a.querySelector("input")) == null ? void 0 : _b.focus();
        } else {
          initRunState();
        }
      });
      function guessPrefixAndSeason() {
        guessPrefix();
        guessSeason();
      }
      function guessSeason() {
        let currentSeason = "1";
        videoList.value.forEach((v) => {
          const temp = getSeason(v.name);
          if (temp)
            currentSeason = temp;
        });
        season.value = currentSeason;
      }
      const Chinese = /([\u4E00-\u9FA5]+)/i;
      function guessPrefix() {
        if (videoList.value.length === 0)
          return;
        const m = videoList.value[0].name.match(Chinese);
        if (m == null ? void 0 : m[1]) {
          prefix.value = m[1];
          return;
        }
        if (videoList.value.length < 2) {
          const s = videoList.value[0];
          prefix.value = s.name.replace(`.${s.file_extension}`, "").replace(/\s*S[0-9]+E[0-9]*|\s*E[0-9]+/i, "").trim();
          return;
        }
        const [a, b] = videoList.value.slice(-2).map((x) => x.name.replace(`.${x.file_extension}`, ""));
        const lcs = getLcstr(a, b);
        if (lcs)
          prefix.value = lcs.replace(/\s*S[0-9]+E[0-9]*|\s*E[0-9]+/i, "").trim();
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
      const error = vue.ref("");
      const warning = vue.ref("");
      const processData = vue.ref({
        total: 0,
        skip: 0,
        done: 0
      });
      async function run() {
        if (disabled.value || running.value)
          return;
        initRunState();
        running.value = true;
        processData.value.total = showList.value.length;
        processData.value.skip = showList.value.length - selectedList.value.length;
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
            const newName = newNameMap.value[item.file_id];
            await renameOne(item, newName).then(() => {
              doneList.value.push(item.file_id);
            }).catch(() => {
              errorList.value.push(item.file_id);
            });
            processData.value.done++;
          }));
          await new Promise((r) => setTimeout(r, API_DELAY));
        }
        running.value = false;
        {
          warning.value = "即将刷新页面...";
          setTimeout(() => {
            location.reload();
          }, 1e3);
        }
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
      function getNewName(oldName) {
        if (activeMode.value === "extract")
          return getNewNameByExtract(oldName, prefix.value.trim(), season.value.trim());
        else
          return getNewNameByExp(oldName, from.value, to.value);
      }
      vue.watch([list, activeMode, prefix, season, from, to], () => {
        if (list.value.length) {
          newNameMap.value = {};
          if (activeMode.value === "extract" && prefix.value || activeMode.value === "regexp" && from.value && to.value) {
            list.value.forEach((item) => {
              newNameMap.value[item.file_id] = getNewName(item.name);
            });
          }
        }
      }, { immediate: true });
      function fillRandomName() {
        const len = videoList.value.length;
        if (!len)
          return;
        const found = videoList.value[random(len)];
        if (found)
          prefix.value = found.name.replace(`.${found.file_extension}`, "");
      }
      function random(n) {
        return Math.floor(Math.random() * n);
      }
      function manualPickName(id) {
        if (id) {
          const found = videoList.value.find((x) => x.file_id === id);
          if (found)
            prefix.value = found.name.replace(`.${found.file_extension}`, "");
        }
      }
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
      const updateMsg = useUpdate();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.unref(shouldShowEntry) ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            ref_key: "trigger",
            ref: trigger,
            class: "mt-2 min-h-61px w-60px flex flex-col items-center justify-center gap-y-1 rounded-lg px-2px py-6px text-primary-500 transition hover:bg-primary-500 hover:text-white",
            onClick: handleClickRenameBtn
          }, _hoisted_3, 512)) : vue.createCommentVNode("", true),
          vue.createVNode(vue.Transition, { name: "clip" }, {
            default: vue.withCtx(() => [
              vue.unref(popupVisible) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                ref_key: "popup",
                ref: popup,
                class: "absolute z-9999 mt-2 w-300px rounded-lg bg-primary-100 p-3 shadow",
                onKeyup: _cache[6] || (_cache[6] = vue.withKeys(($event) => popupVisible.value = false, ["esc"]))
              }, [
                vue.createElementVNode("p", _hoisted_4, [
                  vue.createTextVNode(" 批量重命名当前目录下的所有文件。"),
                  _hoisted_5,
                  vue.unref(updateMsg) ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_6, vue.toDisplayString(vue.unref(updateMsg)), 1)) : vue.createCommentVNode("", true)
                ]),
                vue.createElementVNode("div", _hoisted_7, [
                  vue.createElementVNode("div", _hoisted_8, [
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(["cursor-pointer bg-primary px-2 py-1", vue.unref(activeMode) === "extract" ? "bg-primary-600" : ""]),
                      onClick: _cache[0] || (_cache[0] = ($event) => activeMode.value = "extract")
                    }, " 剧集模式 ", 2),
                    vue.createElementVNode("div", {
                      class: vue.normalizeClass(["cursor-pointer bg-primary px-2 py-1", vue.unref(activeMode) === "regexp" ? "bg-primary-600" : ""]),
                      onClick: _cache[1] || (_cache[1] = ($event) => activeMode.value = "regexp")
                    }, " 正则模式 ", 2)
                  ]),
                  vue.unref(activeMode) === "regexp" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    _hoisted_9,
                    _hoisted_10
                  ], 64)) : vue.createCommentVNode("", true)
                ]),
                vue.createElementVNode("div", _hoisted_11, [
                  vue.unref(activeMode) === "regexp" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                    vue.createElementVNode("div", null, [
                      _hoisted_12,
                      vue.withDirectives(vue.createElementVNode("input", {
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(from) ? from.value = $event : null),
                        placeholder: "正则表达式",
                        class: "h-8 w-full rounded bg-white px-3 outline-none"
                      }, null, 512), [
                        [vue.vModelText, vue.unref(from)]
                      ])
                    ]),
                    vue.createElementVNode("div", null, [
                      _hoisted_13,
                      vue.withDirectives(vue.createElementVNode("input", {
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(to) ? to.value = $event : null),
                        placeholder: "替换表达式",
                        class: "h-8 w-full rounded bg-white px-3 outline-none"
                      }, null, 512), [
                        [vue.vModelText, vue.unref(to)]
                      ])
                    ]),
                    _hoisted_14
                  ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createElementVNode("div", null, [
                      vue.createElementVNode("label", _hoisted_15, [
                        vue.createTextVNode(" 剧名 "),
                        vue.createElementVNode("i", {
                          class: vue.normalizeClass(["i-ion:dice block text-sm text-primary-700", vue.unref(videoList).length ? "cursor-pointer" : "cursor-not-allowed opacity-50"]),
                          title: "随机填充原文件名",
                          onClick: fillRandomName
                        }, null, 2)
                      ]),
                      vue.withDirectives(vue.createElementVNode("input", {
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(prefix) ? prefix.value = $event : null),
                        placeholder: "请输入",
                        class: "h-8 w-full rounded bg-white px-3 outline-none"
                      }, null, 512), [
                        [vue.vModelText, vue.unref(prefix)]
                      ])
                    ]),
                    vue.createElementVNode("div", null, [
                      _hoisted_16,
                      vue.withDirectives(vue.createElementVNode("input", {
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => vue.isRef(season) ? season.value = $event : null),
                        placeholder: "0~99",
                        class: "h-8 w-full rounded bg-white px-3 outline-none"
                      }, null, 512), [
                        [vue.vModelText, vue.unref(season)]
                      ])
                    ])
                  ], 64)),
                  vue.createElementVNode("div", _hoisted_17, [
                    vue.unref(error) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_18, vue.toDisplayString(vue.unref(error)), 1)) : vue.unref(processData).total ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_19, " 总共 " + vue.toDisplayString(vue.unref(processData).total) + " | 跳过 " + vue.toDisplayString(vue.unref(processData).skip) + " | 完成 " + vue.toDisplayString(vue.unref(processData).done), 1)) : vue.createCommentVNode("", true),
                    vue.unref(warning) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_20, vue.toDisplayString(vue.unref(warning)), 1)) : vue.createCommentVNode("", true)
                  ]),
                  vue.createElementVNode("div", _hoisted_21, [
                    vue.createElementVNode("button", {
                      class: "flex items-center justify-center gap-x-1 bg-primary-600 px-3 py-2 text-xs text-white btn",
                      disabled: vue.unref(disabled) || vue.unref(running),
                      onClick: run
                    }, [
                      vue.unref(running) ? (vue.openBlock(), vue.createElementBlock("i", _hoisted_23)) : vue.createCommentVNode("", true),
                      vue.createTextVNode(" Run It! ")
                    ], 8, _hoisted_22)
                  ])
                ])
              ], 544)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          }),
          vue.createVNode(vue.Transition, { name: "fade" }, {
            default: vue.withCtx(() => [
              vue.unref(popupVisible) ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                ref_key: "previewRef",
                ref: previewRef,
                class: "custom-scrollbar fixed bottom-2 right-0 top-2 z-9999 w-[max(500px,50vw)] overflow-y-auto border-y-3px border-l-3px border-primary-600 rounded-l-lg border-solid bg-white px-4 py-3 font-mono shadow"
              }, [
                vue.unref(listLoading) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_24, [
                  _hoisted_25,
                  vue.createElementVNode("p", _hoisted_26, [
                    vue.createTextVNode(" 正在获取文件列表"),
                    vue.createElementVNode("span", _hoisted_27, vue.toDisplayString(vue.unref(loadingDots)), 1)
                  ])
                ])) : vue.createCommentVNode("", true),
                vue.unref(hasConflict) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_28, " 更改后的文件名有冲突！ ")) : vue.createCommentVNode("", true),
                vue.createElementVNode("div", _hoisted_29, [
                  vue.createElementVNode("button", {
                    class: "text-sm text-primary-600",
                    onClick: _cache[7] || (_cache[7] = ($event) => uncheckList.value = [])
                  }, " 全选 "),
                  vue.createElementVNode("button", {
                    class: "text-sm text-primary-600",
                    onClick: _cache[8] || (_cache[8] = ($event) => uncheckList.value = vue.unref(showList).map((x) => x.file_id))
                  }, " 全不选 "),
                  vue.unref(activeMode) === "extract" && vue.unref(videoList).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_30, [
                    vue.createTextVNode(" 点击 "),
                    _hoisted_31,
                    vue.createTextVNode(" 可将其填充到“剧名” ")
                  ])) : vue.createCommentVNode("", true),
                  vue.unref(showList).length ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_32, [
                    vue.createTextVNode(" 共 "),
                    vue.createElementVNode("span", _hoisted_33, vue.toDisplayString(vue.unref(showList).length), 1),
                    vue.createTextVNode(" 个文件 ")
                  ])) : vue.createCommentVNode("", true)
                ]),
                vue.unref(showList).length ? (vue.openBlock(), vue.createElementBlock("ul", _hoisted_34, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(showList), (item) => {
                    return vue.openBlock(), vue.createBlock(_sfc_main$1, {
                      id: item.file_id,
                      key: item.file_id,
                      "old-name": item.name,
                      "new-name": vue.unref(newNameMap)[item.file_id] || "",
                      "model-value": !vue.unref(uncheckList).includes(item.file_id),
                      done: vue.unref(doneList).includes(item.file_id),
                      error: vue.unref(errorList).includes(item.file_id),
                      "show-pick": vue.unref(activeMode) === "extract",
                      "onUpdate:modelValue": ($event) => handleCheckChange(item.file_id, $event),
                      onPick: manualPickName
                    }, null, 8, ["id", "old-name", "new-name", "model-value", "done", "error", "show-pick", "onUpdate:modelValue"]);
                  }), 128))
                ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_35, " 当前目录和模式下，没有满足要求的条目~ "))
              ], 512)) : vue.createCommentVNode("", true)
            ]),
            _: 1
          })
        ], 64);
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
  const AppRoot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ee1fad7"]]);
  const ENTRY_ID = "a1mersnow_aliyundrive_rename";
  const oldSetHeader = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.setRequestHeader = function(...args) {
    if (args[0] && typeof args[0] === "string" && args[0].toLocaleLowerCase() === "x-signature" && args[1])
      setSignature(args[1]);
    oldSetHeader.apply(this, args);
  };
  window.setInterval(() => {
    const found = document.querySelector('[class^="nav-tab-content--"]');
    if (found)
      init(found);
  }, 300);
  function init(parentEl) {
    if (!parentEl.querySelector(`#${ENTRY_ID}`)) {
      const app = vue.createApp(AppRoot);
      app.mount(
        (() => {
          const app2 = document.createElement("div");
          app2.setAttribute("id", ENTRY_ID);
          parentEl.append(app2);
          return app2;
        })()
      );
    }
  }

})(Vue);