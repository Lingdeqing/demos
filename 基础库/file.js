
/**
 * 文件处理函数
 */

/**
 * 是否是可接受的文件类型
 * @param {File} file 
 * @param {string} accept 'video/mp4,video/x-flv'
 * @returns {boolean}
 */
export function isAcceptFile(file, accept) {
    const match = /\.(\w+)$/.exec(file.name)
    const extension = match ? match[1] : ''
    const mimeTypes = accept.split(',')
    const extensions = mimeTypes.map(mimeType => {
        let ext = mimeType.split('/')[1]
        ext = ext.replace(/^x-/, '')
        return ext
    })
    return (
        mimeTypes.indexOf(file.type) !== -1 ||
        extensions.indexOf(extension) !== -1
    )
}