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
                    label="balance"
                    name="balance"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.balance}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="previousBalance"
                    name="previousBalance"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    initialValue={userData?.previousBalance}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Parent ID" name="parentId" initialValue={userData?.parentId}>
                    <Input />
                </Form.Item>
            </Form>
        </Edit>
    );
};
