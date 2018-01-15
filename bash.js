const commands = require('./commands');



process.stdout.write('prompt > ');
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim().trim()
    process.stdout.write('You typed: ' + cmd);
    cmd = cmd.split(' ');
    process.stdout.write('\n' + commands.command(cmd));

    process.stdout.write('\n prompt > ')
});