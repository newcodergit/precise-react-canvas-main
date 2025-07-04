
import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const SpreadsheetHeader = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="text-sm text-gray-500">Workspace</span>
          <span className="text-sm text-gray-400">›</span>
          <span className="text-sm text-gray-500">Folder 2</span>
          <span className="text-sm text-gray-400">›</span>
          <span className="text-sm font-medium text-gray-900">Spreadsheet 3</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search within sheet" 
              className="pl-10 w-64 h-8 text-sm border-gray-300"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#4B6A4F] rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-medium">2</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[url('/image.png')] bg-cover bg-center rounded-full"></div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">John Doe</div>
                <div className="text-gray-500">john.doe@...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
