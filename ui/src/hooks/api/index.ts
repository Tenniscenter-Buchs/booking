export function useApi() {
    let hasWindow: boolean = typeof window !== 'undefined';
    let apiHost: string = hasWindow && window.location.hostname ? window.location.hostname : "";
    if (process.env.NEXT_PUBLIC_REVIEW_APP) {    // Heroku Review Apps
        apiHost = apiHost.replace("booking-ui", "booking-api");
    } else if (hasWindow && window.location.hostname === 'localhost') { // Local integration testing
        apiHost = "localhost:5000";
    } else if (process.env.NEXT_PUBLIC_API_HOST) {
        apiHost = process.env.NEXT_PUBLIC_API_HOST;
    }
    return apiHost;
}
