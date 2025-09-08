import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

import { IUser } from "../../interfaces";

export const UserCreate = () => {
    const { formProps, saveButtonProps } = useForm<IUser>();

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Id"
                    name="id"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
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
        </Create>
    );
};
