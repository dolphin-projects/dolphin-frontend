<script setup lang="ts">
import type { VxeTableGridOptions } from '#/adapter/vxe-table';

import { Page } from '@vben/common-ui';
import { Plus } from '@vben/icons';
import { $t } from '@vben/locales';

import { NButton, NIcon } from 'naive-ui';

import { useVbenVxeGrid } from '#/adapter/vxe-table';

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
      {
        component: 'Input',
        fieldName: 'code',
        label: $t('page.sys.core.dictionary.code'),
      },
      {
        component: 'Select',
        componentProps: {
          allowClear: true,
          options: [
            { label: $t('common.enabled'), value: 'enum' },
            { label: $t('common.disabled'), value: 'tree' },
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
        width: 200,
      },
      {
        field: 'code',
        title: $t('page.sys.core.dictionary.code'),
        width: 200,
      },
      {
        field: 'type',
        title: $t('page.sys.core.dictionary.type'),
        width: 100,
      },
    ],
    height: 'auto',
    keepSource: true,
    proxyConfig: {
      ajax: {
        query: async () => {
          return {
            total: 0,
            items: [],
          };
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
  } as VxeTableGridOptions,
});

// ******************** 事件定义 ********************
// 创建
function onCreate() {
  // formDrawerApi.setData({}).open();
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
