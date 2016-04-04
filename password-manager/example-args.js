var argv = require('yargs')
    .command('hello','Greets the user',function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n'
            }
        }).help('help');
    })
    .argv;
console.log(argv);

if(argv._[0] == 'hello') {
    console.log('Hello received');
}