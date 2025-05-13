'use client';

import { useEffect, useState } from 'react';

export default function TestSupabase() {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    async function testConnection() {
      try {
        const response = await fetch('/api/test-supabase');
        const text = await response.text();
        
        if (response.ok) {
          setStatus(`Connected! ${text}`);
        } else {
          setStatus(`Connection failed: ${text}`);
        }
      } catch (error) {
        setStatus(`Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    testConnection();
  }, []);

  return <div>{status}</div>;
}
