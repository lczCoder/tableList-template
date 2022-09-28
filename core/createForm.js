const path = require("path");
const fs = require("fs");
const compressing = require('compressing')
const {InitReact,InitComponents} = require("./template.json");
module.exports = (options) => {
  console.log('请求参数',options);
  // return new Promise((resolve, reject) => {
    // fs.mkdir("cache/test", 0777, (err, data) => {
    //     fs.writeFile('cache/test/index.jsx',fileContent,'utf8',(err,data)=>{
    //       if(err){
    //         reject('文件写入失败')
    //       }else{
    //         compressing.zip.compressDir('cache/test','public/dwonloadFiles/test.zip').then(()=>{
    //           resolve('test.zip')
    //         }).catch(err=>{
    //           reject('文件压缩失败')
    //         })
    //       }
    //     });
    // });
  // })
};
