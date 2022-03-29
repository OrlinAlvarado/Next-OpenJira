import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log('Middleware llamado');
  return NextResponse.next();
  //   return new Response('Hello, world!', {
  //     status: 401,
  //     headers: {
  //       'x-token': 'no existe',
  //     },
  //   });
}
