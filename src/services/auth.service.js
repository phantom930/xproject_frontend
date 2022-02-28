import { sendRequest } from "./api";

export const loginUser = ({ username, email, wallet_address, wallet_type }) => {
    return sendRequest({
        url: '/auth/login',
        method: 'POST',
        data: {
            username, email, wallet_address, wallet_type
        }
    });
}

export const registerUser = ({ username, email, wallet_address, wallet_type }) => {
    return sendRequest({
        url: '/auth/register',
        method: 'POST',
        data: {
            username, email, wallet_address, wallet_type
        }
    });
}