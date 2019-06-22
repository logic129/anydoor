const yargs=require('yargs');
const Server=require('./app');

const argv=yargs.usage('anywhere [option]')
.option('p',{
        alias:'port',
        describe:'¶Ë¿ÚºÅ',
        default:'9527'
    })
.option('h',{
        alias:'hostname',
        describe:'host name',
        default:'127.0.0.1'
    })
.option('d',{
        alias:'root',
        describe:'root path',
        default:process.cwd()
    }).version().alias('v','version').help().argv;

const server=new Server(argv);
console.log(server.conf)
server.start();