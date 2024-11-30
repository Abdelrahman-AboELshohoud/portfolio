import React from 'react';

export const HeroShapes: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Minimal decorative shapes for hero */}
    <div className="absolute top-20 right-10 w-32 h-32 border-8 border-blue-100 rounded-full opacity-50" />
    <div className="absolute bottom-20 left-10 w-24 h-24 border-4 border-purple-100 rotate-45 opacity-50" />
  </div>
);

export const ProjectShapes: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-10 right-20 w-40 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-60" />
    <div className="absolute bottom-20 left-10 w-28 h-28 bg-gradient-to-tr from-pink-50 to-red-50 rotate-12 opacity-60" />
    <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-bl from-indigo-50 to-blue-50 rotate-45 opacity-60" />
  </div>
);

export const SkillsShapes: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-10 left-20 w-36 h-36 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full opacity-60" />
    <div className="absolute -bottom-10 right-20 w-32 h-32 bg-gradient-to-l from-orange-50 to-amber-50 rotate-45 opacity-60" />
    <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-tr from-violet-50 to-purple-50 opacity-60" />
  </div>
);