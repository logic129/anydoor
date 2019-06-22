const http=require('http');
const conf=require('../config/defaultConfig');
const chalk=require('chalk');
const path=require('path');
const route=require('../helper/route')
http.createServer(function(req,res){
    const filePath=path.join(conf.root,req.url)
    route(req,res,filePath)
}).listen(conf.port,conf.hostname,()=>{
    const addr=`http:\/\/${conf.hostname}:${conf.port}`
    console.log(`server started at ${chalk.green(addr)}`)
})