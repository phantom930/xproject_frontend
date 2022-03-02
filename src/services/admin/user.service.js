import { sendRequest } from "@services/api";

export const getUsersList = () => {
    return sendRequest({
        url: '/admin/users',
        method: 'GET',
    });
}