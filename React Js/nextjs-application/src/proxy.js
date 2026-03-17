import { NextResponse } from 'next/server'
import React from 'react'

export default function proxy(request) {
  
    var isLogin = 0;

    if (isLogin == 1 && request.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    if (isLogin == 0 && request.nextUrl.pathname.startsWith('/products')) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}
