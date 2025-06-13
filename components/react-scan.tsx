'use client';
import { type JSX, useEffect } from 'react';
import { scan } from 'react-scan';

export function ReactScan(): JSX.Element {
  if (process.env.NODE_ENV === 'development') {
    useEffect(() => {
      scan({
        enabled: true,
      });
    }, []);
  }

  return <></>;
}
