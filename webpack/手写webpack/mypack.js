/**
 * 参考：https://github.com/sisterAn/blog/issues/69
 */
const fs = require('fs-extra')
const path = require('path')
const { transformFromAst } = require('@babel/core')
const babelParser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const config = require('./mypack.config')

// 解析创建模块
function createModule(filename) {
    if (!filename.endsWith('.js')) filename += '.js';
    const content = fs.readFileSync(filename, 'utf-8')

    const ast = babelParser.parse(content, {
        sourceType: 'module'
    })
    const dependencies = []
    traverse(ast, {
        ImportDeclaration: ({ node }) => {
            dependencies.push(node.source.value)
        }
    })

    return {
        dependencies,
        code: transformFromAst(ast, null, {
            presets: ['@babel/preset-env']
        }).code
    }
}

// 创建模块依赖图
function createGraph(filename, graph = {}) {
    if (graph[filename]) return graph; // 不重复解析

    // 构建模块
    const module = createModule(filename)
    graph[filename] = module

    // 递归解析子模块
    module.mappings = {}
    const dirname = path.dirname(filename)
    module.dependencies.forEach(relativePath => {
        const absolutePath = path.join(dirname, relativePath)
        module.mappings[relativePath] = absolutePath

        createGraph(absolutePath, graph)
    })
    return graph
}

// 打包模块
function buddle(graph) {
    let modules = ''
    for (let filename in graph) {
        const module = graph[filename]
        modules += `'${filename}': [function(require, module, exports){
            ${module.code}
        }, ${JSON.stringify(module.mappings)}],`
    }

    return `(function(modules){
        function require(moduleId){
            const mod = modules[moduleId]
            const fn = mod[0]
            const mappings = mod[1]
            const module = {
                exports: {}
            }
            fn(function localRequire(name){
                return require(mappings[name])
            }, module, module.exports)
            return module.exports
        }
        require('${config.entry}')
    }({${modules}}))`
}

function pack() {
    const graph = createGraph(config.entry)
    const result = buddle(graph)
    const { output } = config
    const filename = path.join(output.path, output.filename)
    fs.createFileSync(filename)
    fs.writeFile(filename, result, (err) => {
        if (err) throw err;
        console.log('打包成功')
    })
}
pack()