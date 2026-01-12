
import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';
import { GiftCardType, Feature } from './types';

export const GIFT_CARDS: GiftCardType[] = [
  { id: 'apple', name: 'Apple / iTunes', icon: '🍎', rate: 450, currency: 'NGN' },
  { id: 'steam', name: 'Steam Wallet', icon: '🎮', rate: 480, currency: 'NGN' },
  { id: 'amazon', name: 'Amazon Cash Receipts', icon: '📦', rate: 420, currency: 'NGN' },
  { id: 'google', name: 'Google Play', icon: '📱', rate: 440, currency: 'NGN' },
  { id: 'razer', name: 'Razer Gold', icon: '🐍', rate: 510, currency: 'NGN' },
  { id: 'vanilla', name: 'Vanilla Visa', icon: '💳', rate: 400, currency: 'NGN' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Locked Rates',
    description: 'What you see is what you get. No hidden fluctuations after you submit.',
    icon: <Lock className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'Lightning Payout',
    description: 'Most transactions are completed within 5-15 minutes. Get paid sharp-sharp.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'Bank-Grade Security',
    description: 'Your data and transactions are encrypted with industry-leading protocols.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
];
