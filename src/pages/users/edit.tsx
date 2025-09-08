import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

import type { IUser } from "../../interfaces";

export const UserEdit = () => {
    const { formProps, saveButtonProps, query: queryResult } = useForm<IUser>();

    const userData = queryResult?.data?.data;

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Id"
                    name="id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.id}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Telegram ID"
                    name="telegram_id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.telegram_id}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Wallet"
                    name="wallet_address"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.wallet_address}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Chat Id"
                    name="chat_id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.chat_id}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Parent ID"
                    name="parentId"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.parentId}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ref code"
                    name="refCode"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.refCode}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Telegram Fullname"
                    name="telegram_full_name"
                    initialValue={"1"}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    hidden={true}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};
