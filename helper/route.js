const fs=require('fs');
const promisify=require('util').promisify;
const stat=promisify(fs.stat);
const readdir=promisify(fs.readdir);
const path=require('path');
const conf=require('../config/defaultConfig')
const HandleBars=require('handlebars');
const tplPath=path.join(__dirname,'../template/dir.tpl');
const source=fs.readFileSync(tplPath);
const template=HandleBars.compile(source.toString());
const mime=require('../helper/mime');
const compress=require('../helper/compress');
const range=require('../helper/range')
module.exports=async function(req,res,filePath){
    try{
        const stats=await stat(filePath);
        if(stats.isFile()){
            const contentType=mime(filePath)
            res.setHeader('Content-Type',contentType);
            let rs;
            const {code,start,end}=range(stats.size,req,res);
            if(code===200){
                res.statusCode=200;
                rs=fs.createReadStream(filePath)
            }else{
                res.statusCode=206;
                rs=fs.createReadStream(filePath,{start,end})
            }
            if(filePath.match(conf.compress)){
                rs=compress(rs,req,res)
            }
            rs.pipe(res)
        }else if(stats.isDirectory()){
            const files=await readdir(filePath);
            const dir=path.relative(conf.root,filePath);
            const data={
                title:path.basename(filePath),
                dir:dir?`/${dir}`:'',
                files
            }
            res.statusCode=200;
            res.setHeader('Content-Type','text/html');
            res.end(template(data))
        }
    }catch(err){
        console.log(err)
        res.statusCode=404;
        res.setHeader('Content-Type','text/plain');
        res.end(`${filePath} is not a directory or a file`);
    }
}