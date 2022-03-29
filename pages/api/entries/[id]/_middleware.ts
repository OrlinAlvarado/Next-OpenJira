import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // if (req.page.name === 'api/entries') return NextResponse.next();

  const id = req.page.params?.id || '';

  console.log('Middleware api llamado');

  const checkBongoIdRegExp = new RegExp('^[0-9a-fA-F]{24}$');

  // if (!mongoose.isValidObjectId(id)) {
  if (!checkBongoIdRegExp.test(id)) {
    return new Response(
      JSON.stringify({ message: 'El id no es valido para ' + id }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  return NextResponse.next();
}
