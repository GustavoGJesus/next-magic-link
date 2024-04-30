'use client';

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';

import { signIn } from 'next-auth/react';
import { toast } from '@/components/ui/use-toast';

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      console.log(data);

      await signIn('email', { email: data.email, redirect: false });

      toast({
        title: 'Magic Link sent',
        description: 'Check your email',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Error',
      });
    }
  });

  return (
    <div className="h-screen w-screen flex items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Next auth and Prisma - Login Hydra Test v2
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <form className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register('email')}
              />
            </form>
            <Button className="w-full" onClick={handleSubmit}>
              Send Magic Link
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
