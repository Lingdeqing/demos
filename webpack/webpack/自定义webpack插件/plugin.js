function Plugin(){

}

Plugin.prototype.apply = function(compiler){
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
        console.log('触发插件');
        console.log('complation参数: ', compilation.assets['main.js']);

        let fileList = 'in this build:\n\n';
        for(let file in compilation.assets){
            fileList += '-' + file + '\n';
        }


        compilation.assets['filelist.md'] = {
            source(){
                return fileList;
            },
            size(){
                return fileList.length;
            }
        }

        // compilation.addModule('')
        callback();
    })
}

module.exports = Plugin;