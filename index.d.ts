declare module 'api-handler-for-you' {
    interface FetchDataParams {
        url: string;
        method: 'get' | 'post' | 'put' | 'delete';
        payload?: any;
        token?: string;
    }

    function fetchData(params: FetchDataParams): Promise<any>;

    export default fetchData;
}
