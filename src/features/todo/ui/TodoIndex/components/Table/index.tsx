// React
import { memo, useMemo } from 'react'

// Components
import {
  AppBaseTableHeader,
  AppBaseTableBody,
  AppBaseTableFooter,
  AppBaseButton,
  AppBaseTag,
  AppBaseDropdown,
  AppBasePopConfirm
} from '@/features/app/components'

// Interfaces
import { ITableProps } from './interfaces'
import { ITodo } from '@/features/todo/interfaces/todo.interface'

// i18n
import { useTranslation } from 'react-i18next'

// Antd
import { ColumnsType } from 'antd/lib/table'

const Table = memo(
  ({
    loading,
    fetching,
    data,
    onChange,
    onCreate,
    onEdit,
    onDelete
  }: ITableProps) => {
    // Hook
    const { t } = useTranslation()
    const columns = useMemo((): ColumnsType<ITodo> => {
      return [
        {
          title: t('todo.table.id'),
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: t('todo.table.title'),
          dataIndex: 'title',
          key: 'title'
        },
        {
          title: t('todo.table.completed'),
          dataIndex: 'completed',
          key: 'completed',
          render: (_, record) => {
            return (
              <AppBaseTag color={record.completed ? 'success' : 'error'}>
                {t(
                  `app.status.${record.completed ? 'complete' : 'notComplete'}`
                )}
              </AppBaseTag>
            )
          }
        },
        {
          title: t('app.table.action'),
          dataIndex: 'action',
          key: 'action',
          render: (_, record) => {
            return (
              <AppBaseDropdown
                items={[
                  {
                    key: '1',
                    label: t('app.action.edit'),
                    onClick: () => onEdit(record.id)
                  },
                  {
                    key: '2',
                    label: (
                      <AppBasePopConfirm
                        title={t('app.confirmation.areYouSure')}
                        onConfirm={() => onDelete(record.id)}
                      >
                        {t('app.action.delete')}
                      </AppBasePopConfirm>
                    )
                  }
                ]}
              />
            )
          }
        }
      ]
    }, [onDelete, onEdit, t])

    return (
      <>
        <AppBaseTableHeader
          onChange={onChange}
          left={
            <AppBaseButton type='primary' onClick={onCreate}>
              {t('todo.title.create')}
            </AppBaseButton>
          }
          loading={fetching}
        />
        <AppBaseTableBody
          loading={loading || fetching}
          columns={columns}
          dataSource={data}
        />
        <AppBaseTableFooter />
      </>
    )
  }
)

Table.displayName = 'Table'

export { Table }
