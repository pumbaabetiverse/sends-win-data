import { Create, useForm } from "@refinedev/antd";
import { DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";

import { IDeposit } from "../../interfaces";

export const DepositCreate = () => {
    const { formProps, saveButtonProps } = useForm<IDeposit>();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="uid" name="uid" hidden={true} initialValue={"1"}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="counterpartyId"
                    name="counterpartyId"
                    initialValue={"1"}
                    hidden={true}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Order Id"
                    name="orderId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Note" name="note" initialValue={""} hidden={true}>
                    <Input />
                </Form.Item>

                <Form.Item name="orderType" hidden={true} initialValue={"C2C"}>
                    <Input />
                </Form.Item>
                <Form.Item name="transactionId" hidden={true} initialValue={""}>
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Amount"
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
                    label="Payout"
                    name="payout"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Currency" name="currency" hidden={true} initialValue={"USDT"}>
                    <Input />
                </Form.Item>
                <Form.Item label="WalletType" name="walletType" hidden={true} initialValue={"0"}>
                    <Input />
                </Form.Item>

                <Form.Item name="totalPaymentFee" hidden={true} initialValue={"0"}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Result"
                    name="result"
                    initialValue={"win"}
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
                    label="Option"
                    name="option"
                    initialValue={"odd"}
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
                    label="UserId"
                    name="userId"
                    initialValue={"100001"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="To binance account id"
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
                    label="created at"
                    name="createdAt"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={dayjs()}
                >
                    <DatePicker showTime={true} />
                </Form.Item>

                <Form.Item
                    label="Transaction Time"
                    name="transactionTime"
                    hidden={true}
                    initialValue={dayjs()}
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </Create>
    );
};
