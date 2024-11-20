

// 计算在(p0,p1)向量上时刻t时的坐标
function computeLinePoint(p0, p1, t) {
    return {
        x: p0.x + (p1.x - p0.x) * t,
        y: p0.y + (p1.y - p0.y) * t,
    };
}

/**
 * 计算直角飞线的端点坐标
 * @param {*} points 直角轨道所有端点
 * @param {*} t 时刻t
 * @param {*} trailLength 飞线长度
 * @returns 
 */
function computeMultiLinePoints({
    points,
    t,
    trailLength = 100,
}) {
    const lines = []
    let total = 0
    for (let i = 1; i < points.length; i++) {

        const dis = getPointDistance(points[i - 1], points[i])
        const line = {
            startPoint: points[i - 1],
            endPoint: points[i],
            start: total,
            end: total + dis,
            dis
        }
        total += dis

        // 前拼一个无穷线段
        if (i === 1) {
            lines.push({
                line, // 用第一段来计算
                startPoint: null,
                endPoint: points[i - 1],
                start: -Infinity,
                end: 0,
                dis: Infinity
            })
        }
        lines.push(line)

        // 后拼一个无穷线段
        if (i === points.length - 1) {
            lines.push({
                line, // 用最后一段来计算
                startPoint: points[i],
                endPoint: null,
                start: total,
                end: Infinity,
                dis: Infinity
            })
        }
    }
    const getLinePoint = (line, offset) => {
        if (!line.endPoint) {
            return {
                point: computeLinePoint(line.line.startPoint, line.line.endPoint, (offset - line.start + line.line.dis) / line.line.dis),
                truncatePoint: line.startPoint
            }
        }
        if (!line.startPoint) {
            return {
                point: computeLinePoint(line.line.startPoint, line.line.endPoint, offset / line.line.dis),
                truncatePoint: line.endPoint
            }
        }
        const point = computeLinePoint(line.startPoint, line.endPoint,
            (offset - line.start) / line.dis)
        return {
            point,
            truncatePoint: point
        }
        // !line.endPoint ?
        //     computeLinePoint(line.line.startPoint, line.line.endPoint, (offset - line.start + line.line.dis) / line.line.dis) :
        //     !line.startPoint ?
        //         computeLinePoint(line.line.startPoint, line.line.endPoint, offset / line.line.dis) :
        //         computeLinePoint(line.startPoint, line.endPoint,
        //             (offset - line.start) / line.dis)
    }

    const result = [] // {point: 真实点, truncatePoint: 被轨道截断的点}
    const cur = t * total
    const trail = cur - trailLength
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        if (cur >= line.start && cur <= line.end) {
            result.push(getLinePoint(line, cur))
            if (trail >= line.start && trail <= line.end) {
                result.push(getLinePoint(line, trail))
            } else {
                for (let j = i - 1; j >= 0; j--) {
                    const line = lines[j]
                    result.push({
                        point: line.endPoint,
                        truncatePoint: line.endPoint
                    })
                    if (trail >= line.start && trail <= line.end) {
                        result.push(getLinePoint(line, trail))
                        break;
                    }
                }
                if (trail < 0) {
                    result.push(getLinePoint(lines[0], trail))
                }
            }
            result.reverse()

            break;
        }
    }

    return {
        movePoints: result, // 飞线的端点
        finishTime: trailLength / total + 1// 飞线尾巴走出轨道耗时
    };
}

// 计算两点距离
function getPointDistance(p0, p1) {
    return Math.sqrt((p0.x - p1.x) ** 2 + (p0.y - p1.y) ** 2)
}


// 创建渐变
function createGradient(context, p0, p1) {
    const gradient = context.createLinearGradient(p0.x, p0.y, p1.x, p1.y);
    gradient.addColorStop(0, "rgba(255, 0, 255, 0)");
    gradient.addColorStop(1, "rgba(255, 0, 255, 1)");
    return gradient;
}

// 绘制移动的飞线
function drawMoveLine(context, points) {
    const gradient = createGradient(
        context,
        points[0].point,
        points[points.length - 1].point
    );

    context.beginPath();
    context.moveTo(points[0].truncatePoint.x, points[0].truncatePoint.y);

    // 参数 points 是曲线上一部分连续点的集合，我们用 lineTo 把这些点连结起来，就近似的得到了曲线
    for (let i = 0; i < points.length; i++) {
        const p = points[i].truncatePoint;
        context.lineTo(p.x, p.y);
    }

    context.moveTo(points[0].truncatePoint.x, points[0].truncatePoint.y);
    context.strokeStyle = gradient;
    context.lineCap = "round";
    context.lineWidth = 10;
    context.shadowColor = "rgba(255, 255, 0, 1)";
    context.shadowBlur = 5;
    context.stroke();
}