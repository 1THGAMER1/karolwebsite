import { cookies } from 'next/headers';

export async function getSessionId() {
    const cookieStore = await cookies(); // asynchrone Funktion
    const sessionCookie = cookieStore.get('session_id');

    // Wenn der Cookie nicht existiert oder kein Wert vorliegt, geben wir null zurück
    if (!sessionCookie) {
        return null;
    }

    // Gebe den Wert des Cookies (session_id) als String zurück
    return sessionCookie.value;
}
