const path = require("path");
const fs = require("fs");
const compressing = require('compressing')
// const {InitReact,InitComponents} = require("./template.json");
const Factory = new require("./factory")

/**
 * 1、获取代码模板
 * 2、生成对应的文件夹
 * 3、压缩文件
 * 4、上传至静态资源目录
 * 5、返回下载地址
 */
module.exports = (options) => {
  const factory =  new Factory(options)
  // 处理参数

  console.log('parsed',factory.templateCode);
  fs.writeFile('cache/xxxx.jsx',factory.templateCode,'utf8',(err,data)=>{
    if(err){
      console.error(err);
    }else{
      console.log('data',data);
    }
  })
};












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