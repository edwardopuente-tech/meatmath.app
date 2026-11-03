import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { MeasurementUnit } from './types';

export default function App() {
  const [unit, setUnit] = useState<MeasurementUnit>('imperial');

  return (
    <Routes>
      <Route path="/" element={<Layout unit={unit} onUnitToggle={() => setUnit(u => u === 'imperial' ? 'metric' : 'imperial')} />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
