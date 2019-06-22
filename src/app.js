const http=require('http');
const conf=require('../config/defaultConfig');
const chalk=require('chalk');
const path=require('path');
const route=require('../helper/route');
const openUrl=require('../helper/openUrl')

class Server{
    constructor(config){
        this.conf=Object.assign({},conf,config)
    }
    start(){
        const that=this;
        const server= http.createServer(function(req,res){
                const filePath=path.join(that.conf.root,req.url)
                route(req,res,filePath,that.conf)
            });
       server.listen(this.conf.port,this.conf.hostname,()=>{
            const addr=`http:\/\/${this.conf.hostname}:${this.conf.port}`;
            console.log(`server started at ${chalk.green(addr)}`);
            openUrl(addr)
        })
    }
}

module.exports=Server;