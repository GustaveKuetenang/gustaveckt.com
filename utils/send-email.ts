import { FormData } from '@/components/contact';

export function sendEmail(data: FormData): Promise<any> {
    const apiEndpoint = '/api/email';

    return fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((response) => {
            return { ...response, success: true };
        })
        .catch((err) => {
            console.log("Error sending email: ", err);
            return { message: err.message, success: false };
        });
}