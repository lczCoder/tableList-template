const {
  InitTemplate,
} = require('./template')


/**
 * 1、解析配置参数
 * 2、拼接业务代码
 * 3、生成代码模板
 */
module.exports = class Factory {
  title = '' // 模块名称
  searchForm = [] // 搜索表单
  tableList = [] // 表格列字段数据
  templateCode = '' // 业务代码模板
  useDataCode = '' // useData代码模板
  constructor(options) {
    this.options = options;
    this.dealParams(options)
    this.templateCode = InitTemplate
  }

  // 初始化解构参数
  dealParams(options){
    this.title = options.title || ''
    this.searchForm = options.searchForm
    this.tableList = options.tableList
  }

  // 

}


