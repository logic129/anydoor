/**
 * Created by john on 2019/6/21.
 */
module.exports={
    hostname:'127.0.0.1',
    port:3000,
    root:process.cwd(),
    compress:/\.(html|css|js|md)/,
    cache:{
        maxAge:600,
        expire:true,
        cacheControl:true,
        lastModified:true,
        eTag:true
    }
}