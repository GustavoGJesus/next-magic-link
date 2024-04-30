'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { auth } from '@/services/auth';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

type props = {
  user: Session['user'];
};

export async function UserInfo({ user }: props) {
  if (!user) return;

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Avatar>
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
        <span>{user?.email}</span>

        <Button onClick={() => signOut()} variant="outline">
          Sign Out
        </Button>
      </div>
    </main>
  );
}
