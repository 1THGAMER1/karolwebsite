import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function middleware(req) {
    const res = NextResponse.next()
    const session = req.cookies.get('session_id')

    if (!session) {
        res.cookies.set('session_id', uuidv4(), {
            path: '/',
            httpOnly: false,
        })
    }

    return res
}

export const config = {
    matcher: ['/shop/:path*', '/api/cart', '/api/cart/:path*'],
}
