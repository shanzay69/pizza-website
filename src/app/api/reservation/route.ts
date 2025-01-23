import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, date, time } = await request.json();
    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' });
    }
    console.log('Reservation Data:', { name, email, date, time });
    return NextResponse.json({
      message: 'Your reservation has been booked successfully!',
    });

  } catch (error) {
    console.error(error); 
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' });
  }
}
