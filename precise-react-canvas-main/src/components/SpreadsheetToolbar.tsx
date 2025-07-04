import React from 'react';
import { EyeOff, ArrowUpDown, Filter, Grid3X3, Upload, Download, Share, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

export const SpreadsheetToolbar = ({ columns, visibleCols, setVisibleCols }) => {
  const handleToggle = (idx) => {
    setVisibleCols((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium text-gray-700 mr-2">Tool bar</span>
          <div className="w-4 h-4 text-gray-400">›</div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Hide fields clicked')}>
                <EyeOff className="w-4 h-4 mr-1" />
                Hide fields
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="font-medium mb-2 text-sm">Show/Hide Columns</div>
              <div className="flex flex-col gap-1">
                {columns.map((col, idx) => (
                  <label key={col.key} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      checked={visibleCols[idx]}
                      onChange={() => handleToggle(idx)}
                    />
                    {col.label}
                  </label>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Sort clicked')}>
            <ArrowUpDown className="w-4 h-4 mr-1" />
            Sort
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Filter clicked')}>
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Cell view clicked')}>
            <Grid3X3 className="w-4 h-4 mr-1" />
            Cell view
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Import clicked')}>
            <Upload className="w-4 h-4 mr-1" />
            Import
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Export clicked')}>
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 px-2 text-gray-600" onClick={() => console.log('Share clicked')}>
            <Share className="w-4 h-4 mr-1" />
            Share
          </Button>
          
          <Button className="h-8 px-3 bg-[#4B6A4F] hover:bg-[#4B6A4F] text-white" onClick={() => console.log('New Action clicked')}>
            <Plus className="w-4 h-4 mr-1" />
            New Action
          </Button>
        </div>
      </div>
    </div>
  );
};
