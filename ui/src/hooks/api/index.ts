export function useApi() {
    return process.env.NEXT_PUBLIC_API_HOST?.replace(/(^\w+:|^)\/\//, '');;
}
