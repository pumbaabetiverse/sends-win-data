import { DeleteButton, EditButton, getDefaultSortOrder, List, useTable } from "@refinedev/antd";
import { Space, Table } from "antd";

import type { IPost, IUser } from "../../interfaces";

export const UserList = () => {
    const { tableProps, sorters } = useTable<IUser>({
        resource: "users",

        sorters: {
            initial: [
                {
                    field: "id",
                    order: "asc",
                },
            ],
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    key="id"
                    dataIndex="id"
                    title="ID"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("id", sorters)}
                />
                <Table.Column
                    key="balance"
                    dataIndex="balance"
                    title="balance"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("balance", sorters)}
                />
                <Table.Column
                    key="previousBalance"
                    dataIndex="previousBalance"
                    title="previousBalance"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("previousBalance", sorters)}
                />
                <Table.Column
                    key="parentId"
                    dataIndex="parentId"
                    title="parentID"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("parentId", sorters)}
                />
                <Table.Column<IPost>
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record) => (
                        <Space>
                            <EditButton hideText size="small" recordItemId={record.id} />
                            <DeleteButton hideText size="small" recordItemId={record.id} />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
