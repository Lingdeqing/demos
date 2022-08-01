
/**
 * 文件处理函数
 */

import { TypeToExt } from "./mime-types"

/**
 * 是否是可接受的文件类型
 * @param {File} file 
 * @param {string} accept 'video/mp4,video/x-flv'
 * @returns {boolean}
 */
export function isAcceptFile(file, accept) {
    if (!(file instanceof File)) throw new Error('入参不是File类型')
    const match = /\.(\w+)$/.exec(file.name)
    const extension = match ? match[1] : ''
    const mimeTypes = accept.split(',')
    const extensions = mimeTypes.map(mimeType => {
        if (TypeToExt[mimeType]) return TypeToExt[mimeType]
        let ext = mimeType.split('/')[1]
        ext = ext.replace(/^x-/, '')
        return ext
    }).flat()
    return (
        mimeTypes.indexOf(file.type) !== -1 ||
        extensions.indexOf(extension) !== -1
    )
}