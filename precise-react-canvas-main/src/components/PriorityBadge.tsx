
import React from 'react';

interface PriorityBadgeProps {
  priority: string;
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getPriorityStyles(priority)}`}>
      {priority}
    </span>
  );
};
