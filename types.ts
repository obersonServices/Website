import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
  benefits: string[];
  whoIsItFor: string[];
  priority: number;
  // New fields for detailed overview
  deliverables: string[];
  techSpecs: { label: string; value: string }[];
}

export interface Exercise {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  objectives: string[];
  participants: string[];
  format: 'Tabletop' | 'Functional Drill' | 'Full-Scale Simulation' | 'Tabletop / Functional Hybrid';
  duration: string;
  image: string;
  methodology: { step: string; description: string }[];
  businessValue: string[];
  // New fields for detailed overview
  prerequisites: string[];
  outcomes: string[];
}

export interface NavItem {
  label: string;
  path: string;
}