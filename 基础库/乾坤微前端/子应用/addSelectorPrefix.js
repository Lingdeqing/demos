// const postcss = require('postcss')
// const fs = require('fs')

function addSelectorPrefix() {
    const prefix = `.my-sub-app-prefix`
    // 1. 此前缀会应用到子应用全部样式，除了body和html外
    // 2. 子应用需要在应用根节点添加此类名
    // 3. 子应用挂载到主应用body的dialog、message、message-box、loading、dropdown、popover、popconfirm等custom-class需要手动加上此custom类名
    //    3.1 暂不考虑一些递归类的结构，会出现加在根上面的类也会加在子上面
    const popperRootClasses = ['el-dropdown-menu', 'el-popper', 'el-menu--collapse', 'el-message-box__wrapper', 'el-message-box', 'axios-login-modal', 'el-message el-message--error custom-class-style custom-class-style-error'].reduce((a, s) => a.concat(s.trim().split(/\s/)), [])
    // html和body只能忽略，需要开发自行协商
    // 其余忽略的是 一些 element-ui没有开放设置custom-class的组件
    //    1. 这种情况一是放任样式污染全局
    //    2. 可以考虑自行extend element-ui的组件去通过操作dom的方式 扩展出custom-class属性
    const ignore = ['html', 'body', /el-message-box__wrapper/, '.v-modal']
    return {
        postcssPlugin: 'postcss-selector-prefix',
        Rule(rule) {
            if (rule.parent && rule.parent.name && rule.parent.name.includes('keyframes')) return
            rule.selectors = rule.selectors.map(function (selector) {
                if (!selector.trim()) return selector
                if (ignore.some(s => s instanceof RegExp ? s.test(selector) : s === selector)) return selector
                if (popperRootClasses.some(s => {
                    s = s.trim()
                    return new RegExp(`\\.${s}([^\\w-_]|$)`).test(selector.trim().split(/\s|>/)[0])
                })) {
                    return `${prefix}${selector}`
                }
                return `${prefix} ${selector}`
            })
        }
    }
}
addSelectorPrefix.postcss = true
module.exports = addSelectorPrefix
// postcss([addSelectorPrefix]).process(fs.readFileSync('./a.css', 'utf-8'), { from: './a.css' }).then(res => {
//     fs.writeFileSync('out.css', res.css)
// })