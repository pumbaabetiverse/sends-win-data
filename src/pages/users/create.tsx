import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

import { IUser } from "../../interfaces";

export const UserCreate = () => {
    const { formProps, saveButtonProps, onFinish } = useForm<IUser>();

    const handleOnFinish = (values: Record<string, string>) => {
        return onFinish({
            ...values,
            telegram_id: values["id"],
            chat_id: "1",
            telegram_full_name: "test",
            refCode: "1",
            wallet_address: "0x",
        });
    };

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical" onFinish={handleOnFinish}>
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
                <Form.Item label="Parent ID" name="parentId">
                    <Input />
                </Form.Item>

                <Form.Item label="Balance" name="balance" required={true} initialValue={100}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Previous Balance"
                    name="previousBalance"
                    required={true}
                    initialValue={90}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};
