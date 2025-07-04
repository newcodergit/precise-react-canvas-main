import React from 'react';
import { Button } from '@/components/ui/button';

interface SpreadsheetTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const SpreadsheetTabs = ({ activeTab, onTabChange }: SpreadsheetTabsProps) => {
  const tabs = [
    { id: 'Q3 Financial Overview', label: 'Q3 Financial Overview', icon: '📊' },
    
  ];

  

  return (
    <div className="px-4">
      <div className="flex items-center space-x-1 py-2 border-b border-gray-100">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            size="sm"
            className={`h-8 px-3 text-sm text-gray-600 hover:text-gray-900`}
            onClick={() => console.log(`${tab.label} tab clicked`)}
          >
            {tab.icon && <span className="mr-1">{tab.icon}</span>}
            {tab.label}
          </Button>
        ))}
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => console.log('Add tab clicked')}>
          <span className="text-lg">+</span>
        </Button>
      </div>
      
      
    </div>
  );
};
