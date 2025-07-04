import React, { useState } from 'react';
import { SpreadsheetHeader } from './SpreadsheetHeader';
import { SpreadsheetToolbar } from './SpreadsheetToolbar';
import { SpreadsheetGrid } from './SpreadsheetGrid';
import { SpreadsheetTabs } from './SpreadsheetTabs';

const columns = [
  { key: 'task', label: 'Job Request' },
  { key: 'submitted', label: 'Submitted' },
  { key: 'status', label: 'Status' },
  { key: 'submitter', label: 'Submitter' },
  { key: 'url', label: 'URL' },
  { key: 'assigned', label: 'ABC' },
  { key: 'priority', label: 'Priority' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'estValue', label: 'Est. Value' },
];

export const SpreadsheetApp = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [visibleCols, setVisibleCols] = useState(columns.map(() => true));

  return (
    <div className="min-h-screen bg-gray-50">
      <SpreadsheetHeader />
      <SpreadsheetToolbar columns={columns} visibleCols={visibleCols} setVisibleCols={setVisibleCols} />
      <div className="bg-white border-b">
        <SpreadsheetTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      <SpreadsheetGrid columns={columns} visibleCols={visibleCols} setVisibleCols={setVisibleCols} />
    </div>
  );
};
