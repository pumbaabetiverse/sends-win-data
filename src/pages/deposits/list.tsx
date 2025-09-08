import { DeleteButton, EditButton, getDefaultSortOrder, List, useTable } from "@refinedev/antd";
import { Space, Table } from "antd";

import type { IDeposit } from "../../interfaces";

export const DepositList = () => {
    const { tableProps, sorters } = useTable<IDeposit>({
        resource: "deposits",

        sorters: {
            initial: [
                {
                    field: "id",
                    order: "desc",
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
                    key="userId"
                    dataIndex="userId"
                    title="userId"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("userId", sorters)}
                />
                <Table.Column
                    key="orderId"
                    dataIndex="orderId"
                    title="orderId"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("orderId", sorters)}
                />
                <Table.Column
                    key="amount"
                    dataIndex="amount"
                    title="amount"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("amount", sorters)}
                />
                <Table.Column
                    key="payout"
                    dataIndex="payout"
                    title="payout"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("payout", sorters)}
                />
                <Table.Column
                    key="result"
                    dataIndex="result"
                    title="result"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("result", sorters)}
                />
                <Table.Column
                    key="option"
                    dataIndex="option"
                    title="option"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("option", sorters)}
                />
                <Table.Column
                    key="toBinanceAccountId"
                    dataIndex="toBinanceAccountId"
                    title="toBinanceAccountId"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("toBinanceAccountId", sorters)}
                />
                <Table.Column
                    key="createdAt"
                    dataIndex="createdAt"
                    title="createdAt"
                    sorter
                    defaultSortOrder={getDefaultSortOrder("createdAt", sorters)}
                />
                <Table.Column<IDeposit>
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
