const fs = require('fs')
const rs = fs.createReadStream('bufferMontage.md', { highWaterMark: 11 })

// highWaterMark：阈值。它规定了流在停止请求更多数据之前缓冲的数据量

// 使用 setEncoding() 设置编码
rs.setEncoding('utf-8')

let data = ''

rs.on('data', chunk => {
  data += chunk
})

rs.on('end', () => {
  console.log(data);
})