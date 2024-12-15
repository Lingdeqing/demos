/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let res = 0
    const leftNextMin = [], rightNextMin = [], st = []
    for (let i = 0; i < heights.length; i++) {
        while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) st.pop();
        leftNextMin[i] = st.length === 0 ? -1 : st[st.length - 1]
        st.push(i)
    }
    st.length = 0
    for (let i = heights.length - 1; i >= 0; i--) {
        while (st.length > 0 && heights[st[st.length - 1]] >= heights[i]) st.pop();
        rightNextMin[i] = st.length === 0 ? heights.length : st[st.length - 1]
        st.push(i)
    }
    for (let i = 0; i < heights.length; i++) {
        res = Math.max(res, heights[i] * (rightNextMin[i] - leftNextMin[i] - 1))
    }
    return res
};