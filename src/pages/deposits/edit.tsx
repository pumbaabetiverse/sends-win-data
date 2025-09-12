import { Edit, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";

import type { IDeposit } from "../../interfaces";

export const DepositEdit = () => {
    const { formProps, saveButtonProps } = useForm<IDeposit>();

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="userId"
                    name="userId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="orderId"
                    name="orderId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="amount"
                    name="amount"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="payout"
                    name="payout"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="result"
                    name="result"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="win">win</Select.Option>
                        <Select.Option value="lose">lose</Select.Option>
                        <Select.Option value="void">void</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="option"
                    name="option"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select>
                        <Select.Option value="odd">odd</Select.Option>
                        <Select.Option value="even">even</Select.Option>
                        <Select.Option value="over">over</Select.Option>
                        <Select.Option value="under">under</Select.Option>
                        <Select.Option value="lottery_1">lottery_1</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="toBinanceAccountId"
                    name="toBinanceAccountId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="From userId"
                    name="payerUsername"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="createdAt"
                    name="createdAt"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({ value: value ? dayjs(value) : "" })}
                >
                    <DatePicker showTime={true} />
                </Form.Item>
            </Form>
        </Edit>
    );
};
