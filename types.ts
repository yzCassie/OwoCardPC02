
// Add missing React import to resolve namespace issues in TypeScript
import React from 'react';

export interface GiftCardType {
  id: string;
  name: string;
  icon: string;
  rate: number; // rate per $1
  currency: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  amount: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
