import React, { useEffect } from "react";
import { useRouter } from 'expo-router';


export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    // wait for saving of data the redirect
    const timeout = setTimeout(() => {
      router.push('/onboarding/welcome');
    }, 300); 

    return () => clearTimeout(timeout);
  }, [router]);
  }