import React from 'react';
import { Header } from './Header';
import { MeasurementUnit } from '../types';
import { Outlet } from 'react-router-dom';

export function Layout({ unit, onUnitToggle }: { unit: MeasurementUnit, onUnitToggle: () => void }) {
  return (
    <div className="min-h-screen pb-20">
      <Header unit={unit} onUnitToggle={onUnitToggle} />
      <Outlet context={{ unit }} />
    </div>
  );
}
