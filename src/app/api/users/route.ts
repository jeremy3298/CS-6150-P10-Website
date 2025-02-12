import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';

export async function GET() {
  const session = await auth();

  if (!session || !session.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Error fetching users' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const session = await auth();

  if (!session || !session.user || session.user.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const user = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { ...user, updatedAt: new Date() },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  const { name, email } = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { name, email, updatedAt: new Date() },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}
