import React from 'react';
import { Html } from '@react-three/drei';
import { LuLoaderCircle } from 'react-icons/lu';

export default function Loader() {
  return (
    <Html>
      <div className="flex flex-col gap-3 justify-center items-center">
        <LuLoaderCircle className="w-20 h-20 animate-spin text-blue-500" />
        <p className="text-slate-500 text-sm">Loading...</p>
      </div>
    </Html>
  );
}
