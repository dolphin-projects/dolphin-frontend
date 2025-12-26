<script setup lang="ts">
import type { VxeTableGridOptions } from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';
import { Plus } from '@vben/icons';
import { $t } from '@vben/locales';

import { NButton, NIcon } from 'naive-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { pageCoreDictionary } from '#/api';

// ******************** 数据定义 ********************
// 组件定义
defineOptions({
  name: 'Dictionary',
});

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions: {
    fieldMappingTime: [['createTime', ['startTime', 'endTime']]],
    schema: [
      {
        component: 'Input',
        fieldName: 'name',
        label: $t('page.sys.core.dictionary.name'),
      },
      // {
      //   component: 'Input',
      //   fieldName: 'code',
      //   label: $t('page.sys.core.dictionary.code'),
      // },
      {
        component: 'Select',
        componentProps: {
          allowClear: true,
          options: [
            {
              label: $t('page.sys.core.dictionary.enums.type.enum'),
              value: 'enum',
            },
            {
              label: $t('page.sys.core.dictionary.enums.type.tree'),
              value: 'tree',
            },
          ],
        },
        fieldName: 'type',
        label: $t('page.sys.core.dictionary.type'),
      },
    ],
    submitOnChange: true,
  },
  gridOptions: {
    columns: [
      {
        field: 'name',
        title: $t('page.sys.core.dictionary.name'),
      },
      {
        field: 'code',
        title: $t('page.sys.core.dictionary.code'),
      },
      {
        field: 'type',
        title: $t('page.sys.core.dictionary.type'),
        maxWidth: 100,
      },
    ],
    height: 'auto',
    keepSource: true,
    proxyConfig: {
      response: {
        result: 'records',
      },
      ajax: {
        query: async ({ page }, formValues) => {
          const pageVO = await pageCoreDictionary({
            pageIndex: page.currentPage,
            pageSize: page.pageSize,
            query: formValues,
          });
          // 直接返回原始数据，让VXETable根据props配置解析
          return pageVO;
        },
      },
    },
    rowConfig: {
      keyField: 'id',
    },
    toolbarConfig: {
      custom: true,
      export: false,
      refresh: true,
      search: true,
      zoom: true,
    },
  } as VxeTableGridOptions<Sys.Core.DictionaryVO>,
});

// ******************** 事件定义 ********************
// 创建
function onCreate() {
  // formDrawerApi.setData({}).open();
  gridApi.query();
}
</script>

<template>
  <Page auto-content-height>
    <Grid :table-title="$t('route.sys.core.dictionary.title')">
      <template #toolbar-tools>
        <NButton type="primary" @click="onCreate">
          <template #icon>
            <NIcon>
              <Plus class="size-5" />
            </NIcon>
          </template>
          {{ $t('ui.actionTitle.create') }}
        </NButton>
      </template>
    </Grid>
  </Page>
</template>

<style scoped></style>
