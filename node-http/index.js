const http = require('http')


const request = http.request('http://127.0.0.1:3000',{
    timeout: 1000
})

request.on('timeout',()=>{
    console.info('超时了')
})
request.on('error',(err)=>{
    console.info(err, 'error')
})