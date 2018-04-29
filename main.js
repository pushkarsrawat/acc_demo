var http = require("http");
var pg = require('pg');


pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	if(err) {
    return console.error('Client error.', err);
  }
   client.query('SELECT * FROM your_table', function(err, result) {
      done();
      if(err) return console.error(err);
      console.log(result.rows);
   });
});

http.createServer(function(request,response){
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/")