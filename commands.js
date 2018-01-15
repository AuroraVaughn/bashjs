 const fs = require('fs');
 module.exports = {
     lsFunction: function() {

         fs.readdir('.', function(err, files) {


             if (err) throw err;

             files.forEach(function(file) {
                 process.stdout.write(file.toString() + '\n');
             })
             process.stdout.write('prompt > ');
         })
         return '[files in current directory]';
     },
     echoFunc: function(comArr) {


         return comArr.join(' ');
     },
     pwdFunc: function(comArr) { return process.env.PWD.toString(); },
     dateFunc: function(comArr) { return Date(Date.now()); },
     catFunc: function(comArr) {
         return fs.readFile(comArr[1], 'utf8', (err, data) => {
             if (err) throw err;
             console.log(data);
             return data;
         })

     },

     command: function(comm) {
         if (comm[0] === 'pwd') { return this.pwdFunc(comm); }
         if (comm[0] === 'date') { return this.dateFunc(comm); }
         if (comm[0] === 'ls') { return this.lsFunction(); }
         if (comm[0] === 'echo') { return this.echoFunc(comm.slice(1)); }
         if (comm[0] === 'cat') { return this.catFunc(comm) }
     }

 }