//서버
const mysql = require('mysql');
const conn = {
  host:'127.0.0.1',
  port: 3306,
  user:'nbread',
  password:'ybj985412!',
  database:'nbread'
}
// DB 연결
// let connection = mysql.createConnection(conn);
// connection.connect();

// let sql = "INSERT INTO `User` (`user_id`, `password`, `nickname`, `email`, `contract`) VALUES ('test','test','test','test','test')"
// connection.query(sql, function (err, results, fields) {
//     if (err) {
//             console.log(err);
//     }
//     console.log(results);
// });


var http = require('http')

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end("test");

});

server.listen(8080, function(){
    console.log("Server test");
});