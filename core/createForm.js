const path = require("path");
const fs = require("fs");
const compressing = require('compressing')
const {InitReact,InitComponents} = require("./template.json");
module.exports = (options) => {
  return new Promise((resolve, reject) => {
    let fileContent = 
    `${InitReact}
    ${InitComponents}
    `;
    fs.mkdir("cache/test", 0777, (err, data) => {
      if(err){
        console.error('创建文件夹失败',err);
      }else{
        fs.writeFile('cache/test/index.jsx',fileContent,'utf8',(err,data)=>{
          if(err){
            console.error('文件写入失败')
          }else{
            console.log('文件写入成功');
            compressing.zip.compressDir('cache/test','public/dwonloadFiles/test.zip').then(res=>{
              console.log('压缩成功',res);
              resolve('test.zip')
            }).catch(err=>{
              console.log(err,'压缩错误');
            })
          }
        });
      }
    });
  })
};
