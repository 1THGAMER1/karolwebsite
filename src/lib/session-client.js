// session-client.js (für den Client)
export function getSessionIdFromCookies() {
    if (typeof window !== 'undefined') {
        // Cookies aus dem Dokument lesen
        const cookies = document.cookie.split('; ');
        const sessionCookie = cookies.find(cookie => cookie.startsWith('session_id='));

        if (sessionCookie) {
            return sessionCookie.split('=')[1]; // Gibt den Wert des session_id Cookies zurück
        } else {
            console.error("Keine gültige session_id im Cookie gefunden.");
            return null;
        }
    }
    return null;
}
