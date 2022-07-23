const isEqual = require('lodash/isEqual')
class Test {
    constructor() {
        this.paragraphIndex = 2
        this.idList = []
        this.renderAricleTxt = []
    }

    getRangdonId() {
        let id = Math.random()
            .toString(36)
            .substr(2)
        if (this.idList.indexOf(id) == -1) {
            this.idList.push(id)
            return id
        } else {
            return this.getRangdonId()
        }
    }
    renderAricleTxtFunFast(newArticle, refresh = false) {
        // 清空文章
        if (!newArticle || newArticle.length === 0) {
            if (this.renderAricleTxt.length > 0) {
                this.renderAricleTxt = []
            }
            return
        }
        // 初始化
        if (refresh || this.renderAricleTxt.length === 0) {
            this.renderAricleTxt = newArticle.map((paragraph) => {
                return {
                    id: this.getRangdonId(),
                    paragraph
                }
            })
            return
        }

        // 下面的逻辑建立在“假设不会出现跨段更新，连续是关键”
        // 比如只会2、3、4段连续更新，不会出现同时更新2、4段跳过第3段
        // 可以从当前激活段落出发，一旦找到第一个相同的就直接全部复用之前的
        const oldArticle = this.renderAricleTxt
        const oldLen = oldArticle.length, newLen = newArticle.length
        const minLen = Math.min(oldLen, newLen)
        const paragraphIndex = Math.max(0, Math.min(this.paragraphIndex, minLen - 1))

        let diffStart = 0, diffEnd = 0, pIndex = paragraphIndex// 当前操作段

        // 向前查找第一个不同
        while (pIndex >= 0 && !isEqual(newArticle[pIndex], oldArticle[pIndex].paragraph)) {
            pIndex--
        }
        diffStart = pIndex + 1

        // 向后找到最后一个不同
        // newLen>=oldLen 插入
        // newLen<oldLen 删除
        pIndex = paragraphIndex
        while (pIndex < minLen &&
            (newLen >= oldLen ? !isEqual(newArticle[newLen - oldLen + pIndex], oldArticle[pIndex].paragraph)
                : !isEqual(newArticle[pIndex], oldArticle[oldLen - newLen + pIndex].paragraph))) {
            pIndex++
        }
        diffEnd = pIndex - 1

        // [diffStart, diffEnd]区间更新
        if (newLen >= oldLen) {
            // 插入更新段落
            for (let i = diffStart; i <= newLen - oldLen + diffEnd; i++) {
                if (i <= diffEnd) {
                    // 更新旧段落
                    this.renderAricleTxt.splice(i, 1, {
                        id: this.getRangdonId(),
                        paragraph: newArticle[i]
                    })
                } else {
                    // 新插入段落
                    this.renderAricleTxt.splice(i, 0, {
                        id: this.getRangdonId(),
                        paragraph: newArticle[i]
                    })
                }
            }
        } else {
            // 删除更新段落
            for (let i = diffStart; i <= oldLen - newLen + diffEnd; i++) {
                if (i <= diffEnd) {
                    // 更新旧段落
                    this.renderAricleTxt.splice(i, 1, {
                        id: this.getRangdonId(),
                        paragraph: newArticle[i]
                    })
                } else {
                    // 标记待删除段落
                    this.renderAricleTxt[i] = null
                }
            }
            // 删除被标记的段落
            for (let i = 0; i < this.renderAricleTxt.length; i++) {
                if (this.renderAricleTxt[i] === null) {
                    this.renderAricleTxt.splice(i--, 1)
                }
            }
        }
    }
}


function changeWord(article, pIndex, word) {
    article[pIndex] = JSON.parse(JSON.stringify(newArticle[pIndex]))
    article[pIndex][0].originWord[0].word = word
}
function insertPara(article, pIndex, word) {
    const para = JSON.parse(JSON.stringify(newArticle[0]))
    para[0].originWord[0].word = word
    article.splice(pIndex, 0, para)
}
function deletePara(article, pIndex) {
    article.splice(pIndex, 1)
}
function getIds(renderAricle) {
    return renderAricle.map(item => item.id)
}
function equal(o1, o2) {
    return JSON.stringify(o1) === JSON.stringify(o2)
}

/** 初始化 */
const t = new Test()
const newArticle = require('./diff_data')
t.renderAricleTxtFunFast(newArticle)


/** 修改数据 */
let ids, ids1
// 修改第一段/二段
ids = getIds(t.renderAricleTxt)
changeWord(newArticle, 0, 'q')
changeWord(newArticle, 1, 'q')
t.paragraphIndex = 0
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(ids[0] !== ids1[0] && ids[1] !== ids1[1] && equal(ids.slice(2), ids1.slice(2)), '修改第一段和第二段')

// 修改第一段
ids = getIds(t.renderAricleTxt)
changeWord(newArticle, 0, 'a')
t.paragraphIndex = 0
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(ids[0] !== ids1[0] && equal(ids.slice(1), ids1.slice(1)), '修改第一段')

// 修改第四五段
ids = getIds(t.renderAricleTxt)
changeWord(newArticle, 3, 'a')
changeWord(newArticle, 4, 'a')
t.paragraphIndex = 3
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(ids[3] !== ids1[3] && ids[4] !== ids1[4] && equal(ids.slice(0, 3), ids1.slice(0, 3)) && equal(ids.slice(5), ids1.slice(5)), '修改第四五段')


// 修改第四五段对象，但是单词不变
ids = getIds(t.renderAricleTxt)
changeWord(newArticle, 3, 'a')
changeWord(newArticle, 4, 'a')
t.paragraphIndex = 3
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0), ids1.slice(0)), '修改第四五段对象，但是单词不变')

// 修改最后一段
ids = getIds(t.renderAricleTxt)
changeWord(newArticle, newArticle.length - 1, 'a')
t.paragraphIndex = newArticle.length - 1
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(ids[newArticle.length - 1] !== ids1[newArticle.length - 1] && equal(ids.slice(0, newArticle.length - 1), ids1.slice(0, newArticle.length - 1)), '修改最后一段')


/** 插入数据 */
// 插入第一段
ids = getIds(t.renderAricleTxt)
insertPara(newArticle, 0, 'abc')
t.paragraphIndex = 0
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0), ids1.slice(1)), '插入第一段')


// 插入第三四段
ids = getIds(t.renderAricleTxt)
insertPara(newArticle, 2, 'def')
insertPara(newArticle, 3, 'ghi')
t.paragraphIndex = 2
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0, 2), ids1.slice(0, 2)) && equal(ids.slice(2), ids1.slice(4)), '插入第三四段')



// 插入第一二段
ids = getIds(t.renderAricleTxt)
insertPara(newArticle, 0, 'uuu')
insertPara(newArticle, 1, 'kkk')
t.paragraphIndex = 0
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0), ids1.slice(2)), '插入第一二段')


// 插入最后一段
ids = getIds(t.renderAricleTxt)
insertPara(newArticle, newArticle.length, 'ggg')
t.paragraphIndex = newArticle.length
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0), ids1.slice(0, ids1.length - 1)), '插入最后一段')


// 插入最后两段
ids = getIds(t.renderAricleTxt)
insertPara(newArticle, newArticle.length, 'ggg1')
insertPara(newArticle, newArticle.length, 'ggg2')
t.paragraphIndex = newArticle.length
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0), ids1.slice(0, ids1.length - 2)), '插入最后两段')

// 插入倒数两段
ids = getIds(t.renderAricleTxt)
insertPara(newArticle, newArticle.length - 1, 'ggg3')
insertPara(newArticle, newArticle.length - 1, 'ggg4')
t.paragraphIndex = newArticle.length - 3
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(
    ids[ids.length - 1] === ids1[ids1.length - 1] &&
    equal(ids.slice(0, ids.length - 1), ids1.slice(0, ids.length - 1)), '插入倒数两段')


/** 删除数据 */
// 删除第一段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, 0)
t.paragraphIndex = 0
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(1), ids1.slice(0)), '删除第一段')


// 删除第一二段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, 0)
deletePara(newArticle, 0)
t.paragraphIndex = 0
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(2), ids1.slice(0)), '删除第一二段')


// 删除第三四段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, 3)
deletePara(newArticle, 3)
t.paragraphIndex = 3
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0, 3), ids1.slice(0, 3)) && equal(ids.slice(5), ids1.slice(3)), '删除第三四段')

// 删除第最后一段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, newArticle.length - 1)
t.paragraphIndex = newArticle.length - 1
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0, ids.length - 1), ids1.slice(0)), '删除第最后一段')


// 删除第最后两段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, newArticle.length - 1)
deletePara(newArticle, newArticle.length - 1)
t.paragraphIndex = newArticle.length
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0, ids.length - 2), ids1.slice(0)), '删除第最后两段')



// 删除倒数两段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, newArticle.length - 2)
deletePara(newArticle, newArticle.length - 2)
t.paragraphIndex = newArticle.length
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(ids[ids.length - 1] === ids1[ids1.length - 1] && equal(ids.slice(0, ids.length - 3), ids1.slice(0, ids1.length - 1)), '删除倒数两段')


/**
 * 插入更新
 */
// 插入更新最后两段
ids = getIds(t.renderAricleTxt)
deletePara(newArticle, newArticle.length - 1) // 删除最后一段
insertPara(newArticle, newArticle.length, 'ggg1') // 更新最后一段
insertPara(newArticle, newArticle.length, 'ggg2') // 插入最后一段
t.paragraphIndex = newArticle.length
t.renderAricleTxtFunFast(newArticle)
ids1 = getIds(t.renderAricleTxt)
console.assert(equal(ids.slice(0), ids1.slice(0, ids1.length - 2)), '插入更新最后两段')

/**
 * 删除更新
 */