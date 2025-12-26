namespace Sys {
  declare namespace Core {
    // ********** 数据字典 **********

    interface DictionaryItemDTO {
      id: null | string;
      dictionaryId: null | string;
      parentId: null | string;
      name: null | string;
      code: null | string;
      sort: null | number;
      children: DictionaryItemDTO[] | null;
      description: null | string;
    }

    /** 数据字典- DTO */
    interface DictionaryDTO {
      id: null | string;
      name: null | string;
      code: null | string;
      type: null | string;
      items: DictionaryItemDTO[] | null;
      description: null | string;
    }

    interface DictionaryItemVO {
      id: string;
      dictionaryId: string;
      parentId: null | string;
      name: string;
      code: string;
      sort: number;
      children: DictionaryItemVO[];
      description: null | string;
    }

    /** 数据字典 - VO */
    interface DictionaryVO {
      id: string;
      name: string;
      code: string;
      type: string;
      items: DictionaryItemVO[];
      description: null | string;
      createTime: string;
      updateTime: string;
    }
  }
}
