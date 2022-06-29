// 535. TinyURL 的加密与解密
// https://leetcode.cn/problems/encode-and-decode-tinyurl/


const map = new Map(), dict = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
function uuid() {
    let res = ''
    for (let i = 0; i < 6; i++) {
        res += dict[Math.floor(Math.random() * dict.length)]
    }
    return res
}
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
    let shortUrl = `http://tinyurl.com/${uuid()}`
    while (map.has(shortUrl)) {
        shortUrl = `http://tinyurl.com/${uuid()}`
    }
    map.set(shortUrl, longUrl)
    return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return map.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */