
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


// 解析audio文件时长
function getAudioFileDuration(file) {
    return new Promise(resolve => {
        const url = URL.createObjectURL(file)
        const $audio = document.createElement('audio')
        $audio.src = url
        $audio.addEventListener('durationchange', () => {
            URL.revokeObjectURL(url)
            resolve($audio.duration)
        })
        $audio.onerror = e => {
            console.log('解析音频时长出错', e)
            URL.revokeObjectURL(url)
            resolve(0)
        }
    })
}

// 解析video文件时长
function getVideoFileDuration(file) {
    return new Promise(resolve => {
        const url = URL.createObjectURL(file)
        const $video = document.createElement('video')
        $video.src = url
        $video.addEventListener('durationchange', () => {
            URL.revokeObjectURL(url)
            resolve($video.duration)
        })
        $video.onerror = e => {
            console.log('解析视频时长出错', e)
            URL.revokeObjectURL(url)
            resolve(0)
        }
    })
}

// 解析文件时长
export function getFileDuration(file) {
    const isVideo = ['mp4'].includes(file.name.split('.')[1])
    return isVideo ? getVideoFileDuration(file) : getAudioFileDuration(file)
}