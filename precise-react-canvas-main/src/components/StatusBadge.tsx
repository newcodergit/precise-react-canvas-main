
import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'bg-[#FFF3D6] text-yellow-800 border-yellow-200';
      case 'Need to start':
        return 'bg-[#E2E8F0] text-black-100 border-red-200';
      case 'Complete':
        return 'bg-[#D3F2E3] text-green-800 border-green-200';
      case 'Blocked':
        return 'bg-[#FFE1DE] text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};
