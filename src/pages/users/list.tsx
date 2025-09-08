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
                    key="telegram_id"
                    dataIndex="telegram_id"
                    title="Telegram ID"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("telegram_id", sorters)}
                />
                <Table.Column
                    key="chat_id"
                    dataIndex="chat_id"
                    title="Chat ID"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("chat_id", sorters)}
                />
                <Table.Column
                    key="wallet_address"
                    dataIndex="wallet_address"
                    title="WalletAddress"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("wallet_address", sorters)}
                />
                <Table.Column
                    key="parentId"
                    dataIndex="parentId"
                    title="parentID"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("parentId", sorters)}
                />
                <Table.Column
                    key="refCode"
                    dataIndex="refCode"
                    title="Ref code"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("refCode", sorters)}
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
