import React, { ReactNode } from "react";
// export type ButtonPros = { children: React.ReactNode; className?: string };
export interface ButtonPros {
  children: React.ReactNode;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
export interface PillProps {
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

export type LayoutProps = {
  children: ReactNode;
};

export interface BookingDetails {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}
