'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import MainContainer from '@/components/layout/MainContainer';

/**
 * Custom 404 Not Found page component
 * Displays when a user navigates to a non-existent route
 */
export default function NotFound() {
  const router = useRouter();

  return (
    <MainContainer>
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="max-w-md w-full text-center p-6">
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="rounded-full bg-gray-100 p-4 w-20 h-20 flex items-center justify-center mb-2">
              <span className="text-4xl text-gray-400">404</span>
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-[color:var(--text-primary)] mb-2">
                Page Not Found
              </h1>
              <p className="text-[color:var(--text-secondary)] mb-6">
                The page you are looking for doesn&apos;t exist or has been moved.
              </p>
            </div>

            <Button 
              variant="primary"
              onClick={() => router.push('/')}
              className="min-w-32"
            >
              Back to Dashboard
            </Button>
          </div>
        </Card>
      </div>
    </MainContainer>
  );
}
