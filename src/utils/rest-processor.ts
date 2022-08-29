export class RestProcessor {
    private static async perform<T>(method: string, url: string, data?: object): Promise<T> {
        const options: RequestInit = {
            method,
            cache: 'no-cache',
        };

        if (data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        return await response.json();
    }

    static async get(url: string, data?: object) {
        return await this.perform('GET', url, data)
    }

    static async post(url: string, data: object) {
        return await this.perform('POST', url, data)
    }
}