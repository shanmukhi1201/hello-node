// const hello = 'Hello Node.js!'
// const returnHello = () => {
//   console.log(hello)
// }
// returnHello()
// const fs = require("fs");
// fs.writeFile(
//   "sample.txt",
//   "Hello World. Welcome to Node.js File System module.",
//   (err) => {
//     if (err) throw err;
//     else {
//       console.log("File created!");
//     }
//   }
// );
// fs.readFile("sample.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.appendFile("sample.txt", " This is my updated content", (err) => {
//   if (err) throw err;
//   console.log("File updated!");
// });

// fs.rename("sample.txt", "test.txt", (err) => {
//   if (err) throw err;
//   console.log("File name updated!");
// });

// fs.unlink("test.txt", (err) => {
//   if (err) throw err;
//   console.log("File test.txt deleted successfully!");
// });
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
  // fs.readFile("sample.txt", (err, data) => {
  //   res.end(data);
  // });
});
 
server.listen(3000);
