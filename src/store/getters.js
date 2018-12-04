export default {
  /**
   * 返回字典数据
   * @author wyl update(1/5)
   */
  handleDictionariesOriginal: function ({dictionaries}) {
    return dictionaries ? dictionaries.original || [] : []
  }
}
