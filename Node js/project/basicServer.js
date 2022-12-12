// const http = require('http');
// const port = 9000;
// const file = require('fs');


// function requestHandler(req, res){
//     console.log(req.url);
//     res.writeHead(200, {'content-type':'text/html'});

//     file.readFile('check.html', function(err,data){
//         if(err){
//             console.log('error', err);
//             return res.end('<h1>Error!!</h1>');
//         }

//         return res.end(data);
//     });
//     // res.end('<h1>hello!!</h1>');
// }

// const server = http.createServer(requestHandler);

// server.listen(port,function(err){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("server is up:"+port);
// });

const http = require('http');
const port = 9000;
const fs = require('fs');


function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});
    
    // fs.readFile('./check.html', function(err, data){
    //     if(err){
    //         console.log('error', err);
    //         return res.end('<h1>Error!</h1>');
    //     }

    //     return res.end(data);
    // })
    let filePath;
    switch(req.url){
        case '/':
            filePath = '.check.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html';
    }

    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error');
            return res.end('<h1>Error!!</h1>')
        }

        return res.end(data);
    })
    
}

const server = http.createServer(requestHandler);



server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on port:", port);
});