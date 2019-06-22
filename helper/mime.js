/**
 * Created by john on 2019/6/21.
 */
    const path=require('path')
const mimeTypes={
    'html':'text/html',
    'css':'text/css',
    'txt':'text/plain',
    'js':'text/javascript',
    'json':'application/json',
    'pdf':'application/pdf',
    'jpg':'application/x-jpg',
    'xml':'text/xml'
}
module.exports=filePath=>{
    const ext=path.extname(filePath).split('.').pop().toLowerCase();
    if(!ext){
        ext = filePath;
    }
    return mimeTypes[ext]||mimeTypes['txt']
}