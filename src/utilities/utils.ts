

export function isLocalhost(): boolean {
    if (window.location.host.includes('localhost')) {
        return true;
    }
    return false;
}

export function isProduction(): boolean {
    return !isLocalhost();
}