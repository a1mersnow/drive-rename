import path from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Monkey, { cdn, util } from 'vite-plugin-monkey'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        util.unimportPreset,
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    Monkey({
      entry: './src/main.ts',
      userscript: {
        grant: 'none',
        match: [
          'https://www.aliyundrive.com/*',
          'https://www.alipan.com/*',
          'https://pan.quark.cn/*',
        ],
        license: 'GPL',
        name: '阿里云盘批量重命名',
        description: '批量重命名阿里云盘里的文件',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAMAUExURQAAAP///2V+/5R6/41y/5N6/4t2/455/5N+/5SB/31q/oFs/4Nw/4dz/3Zm/4R2/419/5SG/3Zq/nlt/oR5/4uA/2lf/29k/nBn/npw/350/4d9/4yD/5CJ/2lh/2hj/3Br/ouG/5GL/2ll/2lm/3Jv/nZ0/3t5/4F9/4KB/2Vn/mZm/mlo/2lr/2tr/mtt/nt8/4mK//7+/2Jo/mZp/mdr/2lt/3t//4KE/4SH/2dv/2dt/2px/3uB/36G/4SK/6Oo/2Br/mZz/2dx/2lz/2p2/2p1/3F7/neB/3qE/36I/4KK/2Bw/l9u/WZ1/2p4/nSD/3iG/19z/WZ3/2Z4/2d6/mp9/2p7/mt+/2x//2+C/2x+9nSG/3aI/3iI/4OS/4iX/5Ce/6ey/7e//8TL/2V6/2V9/2Z9/2h//2uB/2uC/22D/2+E/3GF/3iK/nWF6ay4/73G/9PZ/112/WB6/mF9/mR//maA/2Z//2mB/3mO/5Sm/8rT/1t5/WB//mKB/maE/maD/muI/muG/m+K/W6K+mqD8Zqt/9rh//Dz//X3/1x9/VyA/WKF/mKC/mWH/mWH/WuL/muL/W6N+W+K6ujt/1yD/V+G/mGH/GOG/GWL/mWJ/miN/myP/nmT4oKV1OHo/1uH/V6J/WCK+2eL9WuS/XaS3X2V3fv8/2GM/mKO/WaQ/muU/WyW/W+X/W6W+n6h/fj6/1yM/VyP/WGR/WWT/muZ/aO//l6U/WSW/Wqa/Wud/YygyF6X/WCY+2OZ/Wye/Huc1mCb/WWd/Gee+Wqg/Wuj/Wui+22h+Yy2/mCe/WKg/Gaj/Gqm/Wqk/Gyo/XSg35K9/afL/mCk/Gem/H60/bPT/mKn/GGk+mms/Wmq/cHd/mKq/GSs/Giu/Yapz2Sv/Wax/Gix/Hiq236u1I2wxaeuprnFjre+k8bRgsLKhszTfNDVetbZcdrdddXYdfz6W/r4XPj2Xff1Xfb0XvXzXvTyXvLwX/LxYPHvYevqZOLibd7da8zMeuPhZv///1xdDGgAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsTAAALEwEAmpwYAAASvUlEQVRoga2be4wkxXnAf9WP6ce8d4978MYHDiaO4zkShOwkh4Ox/IjssxIDhxIlkeFMrMhRJDhiORLiD8t3xFJiZOVhzsGyIw4cSE6xElnigjF2FAdkFuKE12F8L253z3s7+5id6Znp6cofVf2c2b09lJLupru6un71ffXVV1Vf9QrJ+umOGotMPQywn7igAbCEUHcChPqBNoAhAZrwEhc/ukHdYiL4jnDng8nNfvUzGYyI2RqsnrOwhQUhEbDzn09uEnx380Hu+XJ6PwnM0jhYcVmrKnL8GKDzzBjFGsM+DPDlsYL5tJQ0vPhkbVLxlV3LPy1kGQWs+fB5kCo18rc5ta2uro6Vv7i+66aNwJ/fHDaVWGR+mhl2rGnVpDOcgZXL1wXfbT7I/3dSHX8xALuy6Az41k2Ja4zlSJBqDKUyHwegAywuLsIZnb1zUj13P7kZLlH2JjWt4uDodDqdDh0AFl0AtiwwTMkJ+O7Ndi+QGJeSVGaoBaPu5O62ZMgxeHN6TtLSWM5kDziMyy8tscACKVmP403oebmufiPVWKn0LBNtn4KKvgyK77rAkkUIDC9XjkxLfEHyqm7WPq+tHdZpuCzllAEYDGS2G7Ayulfgz18IV6dx3Z4q9qkqJ6Wci286lU5nKgXfvanxu7w8VmV6fRqg00EGQRAEUKZcHqSPt2kuHeCmBHxhhpVFQ6rsfCqnufNsOw3D2ND47xh898a1T1JHI3eXIzv6t5k40W2cZtsQhkP92k4NPo/A+wv3K10xa/SdwWDg9JvdK60pWAS/wKUNbdU7P+VS1RUMyxCohgq5CdexH2AJ6tBdNYxfm78i0cL+k1vf6CyPVny6cVZfCqBT6bBw5XGVtVpd7esWnQOX9zyDlZtVzpPW1hrXNx+Y+Xomay/Quv/0zLZTAAQuAcg1lIEfh/oyUF2APjicm8YNAp4DITE3gdzPUn126r3NB2bWKXD43Avhcuw6Yr+5kDxe2KKv1XhzFxHyjsc3I+y95vw7H1+PCkDr9tnFeXLgmJxiK5q85aTyY+dNn+3v+O7fb1xkZoaDU6+PAMqFqWILJRgAMZc5rOwcuV669+yvPLShtDrd1/r0P3oyJQ9qrADo/wGcACEFFkJO6OI74dCdh5LbOy66ac8msAAc/p+ZEbCmJGQZQEi1CFsDbQWCrpBmjNC/d8Z1HFJZ++eu/fZmxNWp9bnvz2Y8inKzevWXkukJ+ZkN6zl0r1X7s81jAQ6+emzQVOh+PEFmRFbk3vgSKp/u/Xn9Ark89onrS22Afj/Jq1b7/T5ler2enlvE3upGlRjuB/ZcIBc4/NTr6dI6gGRcrVZXASEFPaO2UQ2H3BvfBpe9t7wzcdk9KRcWFHdVq1wipbWhqg998ca9b4MLe2/5RUXt9RBMMw1AlapMt2CLG3B//7q3x4W91zag1wOQ55g+BwyHw+EQiVoNGeJT688R/Rv+eP2qWwCsP84OvPyjeG5ibvvcdr366QEgiMRn1t2Zl0p/uR709q1vrElYrYmdl64zb7Ru/dez+jI7ljQZKYw7x18CwHCfnVhl67bV8qs17eGXDcto7J7IbrV+KIUUUqxSjR1IBNAHiEyxax1w/x3fmlTdn1ejxSU73sg4jm2de/2S287NjZWcu79zWgKUBvGqrzQAsCzLGsl1rdqcum9C7oHf+M/gQLZzZLsd9UvLu4+Ml90z5alFf4XMYlhdOOMRgThN/dJ4Xuuml71CQGUJoN1uHnlkfP664YWuwlRWQQqkHsUIJu06VbKq4yPpcCv41tcmF2/3nv5oq5i59w/0ClABJVXtJaWUGJ+WUkpkMTW/PVb5wZ9t+dti3mKyax28uftw8elDjZQL2WkZV0k8NqSWq2OKOzg68RdjjcmkUfBUkTzzYQFSVip6N+cOpKPkXFfV/pXFnCOvLmk178vlRwBRFEUs9o4WtX3l+/R2sjIYDAYDcANQznoy2LCKPdx6xonl1fw6wJSGAjBauLXw1l4z1uaUznHz4bJisq8p5twa/l18qSVWa4sn4lwBOK8cKLx2jXbI51QDZK+H1M56IrheXPIeeW0wsSA88YSCNwCC2YKyH/fU7/RQTkspcZMnxXHcbgJ0i6b1vKNVtK/wYB98jSfuAhpLRBz/3B/mn1/9lt/1u0Ooqc2iSwBF42q3223awOrVheqPnIq7ptFoNFg/Oc/mRZ5pCXwdCdFLDiW00OA27Xhp2IZ3XFqo73mvSKjXtXnBvsx+M1r8dL7c9HQ6WLNkaV6vYEEaMQm87X+d9/mtq7vwAux///sBHNd1wXVx1Wrux/DC9VByAjAXyb37ZjmIhOOogo40R4AVAka73R7b0r9RuL9tqShwIncd2Kc63qABjO7PlZjZiQBqNQiCAEohYWhZ1kSrXtlRsK1jf7P+7l3rWz1uSBmcnvic2Hv5aiafuNiTO/L3reguuCt5WvCv9TrsgziwNMo3urWzKiUQwZbcA0NPEfqfak0haLQ/IpV4wkqpXqvdoy+bTVnJPZtZw3WljIBAPdEzlqHr0v+klGAVwu4nq8BdKiIxcYUm4J54jyfL+QF1eTm9rgBSel4MzicpxS/kc8oRPLxhoEQAh9RyQ5wuBGuWwHGAAGRZNdwDrCTOCWAn1WTTasTDwP6MvHGMhy5qYPbu+XJ9WUhoXjShUbh6K1NWO3OPnpXlqkbYopd/VXX5RG61moT77qGOZLl++j1MSl1U+LOiavMmWPVwLEcDl2Ksn3mmh4unF1N1il7PrlSALqWSutfGd75tahZfH8NWiZ0InusBIj0GiJMq7nlQcjJkKxtw1Y2Rec/c6goJLNXTLCmUGlaU+62zDEJ6PYBL8iFIL4RqvNpSC5BKBzCyY7ajbgpDZmYrD6fzoQ/JzgtWVlY0GgQeCNbyHiRxZB6QmY8Lqu50gJXX8plVE/ZRB0PpOdewqlpRKHV4HmJbfhyveqAmJg+pyZVxMHSgVxD50iXdyMgny63X6/W6OieQ1DWawa4DrQx7Xg3OWk7mSuqlUlanUs97PR74ZZRIRlwy090YbheQgvqyBDy/OfxI91bjMaXx1rIeQLUVMicYlU689BEpuyOKB5Axx81zKwAd8KGLRNSjlRorbJ33zEXrU7taX59R5TNkYgND3JxnSKBy0UzeQL4wXKaOgQtJd6ZaCa0QoOsRRKqGeQ9g0LhqL633nhXaBa1AD4H2YQbQ6/USXyWATlHiWjcWWGtF7w1URMPCKgO+6Lm+qmEbQDdsn4OZT1wz7agZqwYeMjYwQ0cqErSASjm/iuCxi9Prel1Lq7YiUsoaDuUy4CvvIpQp+X5nDdjzVx++4b0XeeWYHO8WzWTSD8PQVuSBqB7NgefeUwlcQwns5va7ddd1cUZAqTREAPYQIXD6wJZvzwE8efQH4rOX9BedkdPHtkO16Mqtq3t4gJDyWEHXu/9peywwVGJsYtsO9KG8hkDid0HIGitB6kpm9kLrtpdP1ljB6yEF0gCRmQaVwsM3ChuCPbYeSfWMVRkiSWrKLSs3rju69v4bcnXMPD4F1BDggzCEAPWyiMnC8AqdzDvPxOqt6FWXkXU9QoDTQOCXyzFZPFvc+EmAWtX3cV03fT1DlqPvF9557LJVF6jHejYM6nUhBL6erITwaCCAsjax9jOFOu7PraKNAUlQJlX66IWCrmd+tYnMcOMO9gHf9308T0ADIUAZeO2a4v6rfUoNQgFCGAYDUJtmndnrAc5thbf2XNNP9aW5npdMzb5qdqNBU1Aug//cQ4UaWs+WtYEI4WYmCc0WQA/kXOE1HjKMOhWkVjPgC4EQQliWBUKo71AaNASUy8sfLAp8eyAlVCraOrMmkpAhev1I4b2Zdy92mE3FJbv+sSzLsoTuqwZQN8aCRrOBdsjjYNLNtxx8p/ji3g9YqylX2ZQCatOwbN3uZvPit8bC+kc8SiW1gCiVSoY09HlvShZK18OiyOwx7bqMuYqqgGDbNoBtK6G9t8bDvt/pXwWlUrzXMczLrRGEsQMbqcMgG9GZp9jPRz90ahvUwbf1rqtkmqYpTFMIaZoRYEYgouPjBywHzRHNJTDNET0YYoDjOCRSD7TIUp4pGjbcd+P/erG4kCxYAQwlL7Ztb31tXN7Wa6YPV6kbD6pVcyoMwxBELLWSORpZ0huMmfaTf3Ly8sC0wYKSUo5pqISQmGaEc8lrfzTG5UtSYg9pNpcwO9gRfmxcUsZSD+ItzCvFqBWw9/OvTRmKSw9MM9ngmaZtgH3Zid+dcJxw5FgZZZBXXaX3pObWIAy1sFpqEwywBP07jo7XcfTl1hU9g5ENjnL0rmVZKrpgbp168ffGI9ewfSuO0wd7CAulAbYlxLtV57qK7AKloYUBruFNf2jiYUjrc9tqa+hVo5Ms14zR1Mt7JpXnS1MrSJgH+BlDCMDcqkIDSmoRWjASkSHAEsOO3ZnU/rmTT9eO3eALCa4lBCCEPar+sH/TYxO5B65dHiIElcoaNJcNMxoKTEraWymyBYGNAgvv1Mf+fVJNc3NHf/Bffv860xmWbbvvWO5335S/OfvViViOnB1iD0FAd2r3x42TI8O0LxNbq5BuYhFKhZaBayD98KPrnwC1Zlrsx6P34AanQHC4/nO5BnRh5doPTslO7+AZlhoanJAFgIdlgI/0ab7rQs80i837xvE2sAZdpj9WHYrIWzg4F5TMaX1wLVDaFoDStQ02LN8+wbQvhHsCT8W3bPPjtdAUxqC+66WgacTfCEjIfA8VRjoEHnRfWafrNpUOf+MM+ps6wZQwBWD1ttwHBoRhSlY/uVBE9/lHxo45NpuO1M8MUau6StWYfbptAxhyq1wxTkhJGIYaOekTsO7rN71N8oHtJdRc2cC8ueavPr0UASIyph+N41wxOSeydofts5POs86bWo/8Vgc9V3LFLdO3NKLVp9eIRIRc1jtPKWNyLLJSf1fdV/svf/WChT78D+8+pwJYNtTfVe77N7vd+e+tWgOr8810BSLX/RBFeZfnPjp2qrRhan31qk5XDwzs2rWV0Ijcj+1i7t+W/bWXngIjnpSk/i8YNy9g9mr3JxdiYwe/sdvAjYfk9uuqoYkhvOu2i+XvLbz0ZPNyhNwG2mlZqHlCAF4JXAMPFzmNYAfykp9c8/WNXFSajlxnrhEgCWAUianLvJHqUtF76s0IOCu+IuQVQZYsUOQJ4Hq56c+75z28b93+yYERonUXMGpeVg7jgIfd/e4xBGcXHrU4sQ0gcEGGVhqlWJ3wmcZSUL30T7c/tpHYR07/emNgYIXgEkjgatePuURhtddYEvAoQsZfELogsGJde/0quIb0sxILXEeYzkvi8YnTQuv+0x8YViMhGUKo4rVcXKqMYgseWf0fvxKxyqvfwkqiIYGrAnYicMl8EhO4xNGatQpAybx+y4ftfxHXPpB+m9Bi/8nyh3pmKxpJIcEeYoW4BGKHXQnjz5hGZvfF4xHAKRVQnSiyQRXXkD6unAaxA1mngusID0v4CK8UCsuGJ38bGIZmsl8fqZ8hIdDw/IQrRe/FEyDFLF/I7SSCNFaP+towSL/Kny3qtReEQ0vK6FbTNO1yvVIh/305WNDwy6Pksy3hvDgPCHacRYHn0+qkMkf0SI4y9WSTigIljU5KCAFmPLViNfzyKPVQ3qklXBfgK/HLbiJyUiqP0LWPB8onJTNuSTVjzyPhnHgRB1z4ZtLqEyRkGapxT+aEXScdiy86NXI6SbVtV+1yyrUGp16IBI6D+9NnEnCi7KBQQwAERGOR5G4hI09Wvera1TAZR2a3e8wDAQ5fJAVn4siESJDJV9SASK0r6CfEfva79bwdmIDjpONImr3+j0IVzuYSsuATyUv5JVBEl/SD/Yl/9VEkqyth1bP2vPpm1VI7AGN3DhwrO7cCWc3kZVTby06gIj46Kdi+NJMciXfqrUCoWJ7xSfLgdEzpdYhMOjlhLGfXZdCPYhWEObIQmJl2jAznxHwPwMITMTfjQOZj8UI9N6sPLRIXopLu5NS6EpGzMo8yl1b/1OxIPw4SbtZzzWcsLECCEw8oAcq60k7uQuxfhvFCKdVtRl6z2z0XN9JPubngy4l5hcwvgrR1yVTXvVC51tiuC+RRBEgttN3rx942vGV3ptr8Yci8PgNUPqSHctdB/mP1jJ1plzpEr5AFjEYQERpRR0iInP4sA/Bh+iM51NhfeG3DRVhqijKq4BoeLqKJYEc8QeFZAl+AY1AGpDoMVYf/SgdCCgalARAwkGDcWOCMHf/Mz8fTFLAKgdJ1W6sy004JRImygcxCVUVkFRe63vuK3Ekfkp2AKwJwIdLNClyhFgPqz1LUeqHrS9F3ImOtjJDD+Ag40wyVBqKf7dq0aUVVZ9Md//GRRaZ+Bhz9nWmt67JIdE2qbCRZNENYY2UiUaf/AzjwA2i1Nu/CAAAAAElFTkSuQmCC',
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
