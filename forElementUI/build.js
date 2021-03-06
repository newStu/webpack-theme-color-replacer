var getElementUISeries = require('./getElementUISeries')
var varyColor = require('../client/varyColor')


function changeSelector(name) {
    // element-ui这几个样式太宽泛，需减小范围
    switch (name) {
        case '.el-button:active':
        case '.el-button:focus,.el-button:hover':
            return name + '.el-button--default:not(.is-plain):not(.el-button--primary)'
        case '.el-button.is-plain:active' :
        case '.el-button.is-plain:focus,.el-button.is-plain:hover':
            return name + '.el-button--default'
        case '.el-pagination button:hover':
            return name + ':not(:disabled)'
        default:
            // 因懒加载模块的css在主题色样式theme-colors.css之后加载，会覆盖theme-colors.css的样式，导致主题色替换失败。为了避免这情况，需要添加前缀提升优先级。
            return 'body ' + name
    }
}

module.exports = {getElementUISeries, varyColor, changeSelector}
