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
