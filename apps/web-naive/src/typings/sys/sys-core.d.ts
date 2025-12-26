namespace Sys {
  declare namespace Core {
    // ********** 数据字典 **********

    /** 数据字典检索参数 */
    interface DictionaryDTO {
      name?: string;
      code?: string;
      type?: string;
    }

    /** 数据字典 */
    interface DictionaryVO {
      id: string;
      name: string;
      code: string;
      type: string;
      createTime: string;
      updateTime: string;
    }
  }
}
