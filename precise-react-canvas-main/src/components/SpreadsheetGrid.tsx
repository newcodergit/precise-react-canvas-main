import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { StatusBadge } from './StatusBadge';
import { PriorityBadge } from './PriorityBadge';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

export const SpreadsheetGrid = ({ columns, visibleCols, setVisibleCols }) => {
  const [selected, setSelected] = useState<{ row: number; col: number } | null>({ row: 0, col: 0 });
  const [editing, setEditing] = useState<{ row: number; col: number } | null>(null);
  const [editValue, setEditValue] = useState('');

  const [rows, setRows] = useState([
    {
      id: 1,
      task: 'Launch social media campaign for product promotion',
      submitted: '15-11-2024',
      status: 'In-process',
      submitter: 'Aisha Patel',
      url: 'www.aishapatel.com',
      assigned: 'Sophie Choudhury',
      priority: 'Medium',
      dueDate: '20-11-2024',
      estValue: '6,200,000'
    },
    {
      id: 2,
      task: 'Update press kit for company redesign',
      submitted: '28-10-2024',
      status: 'Need to start',
      submitter: 'Irfan Khan',
      url: 'www.irfankhap.com',
      assigned: 'Tejas Pandey',
      priority: 'High',
      dueDate: '30-10-2024',
      estValue: '3,500,000'
    },
    {
      id: 3,
      task: 'Finalize user testing feedback for app update',
      submitted: '05-12-2024',
      status: 'In-process',
      submitter: 'Mark Johnson',
      url: 'www.markjohns.com',
      assigned: 'Rachel Lee',
      priority: 'Medium',
      dueDate: '10-12-2024',
      estValue: '4,750,000'
    },
    {
      id: 4,
      task: 'Design new features for the website',
      submitted: '10-01-2025',
      status: 'Complete',
      submitter: 'Emily Green',
      url: 'www.emilygreen.com',
      assigned: 'Tom Wright',
      priority: 'Low',
      dueDate: '15-01-2025',
      estValue: '5,900,000'
    },
    {
      id: 5,
      task: 'Prepare financial report for Q4',
      submitted: '25-01-2025',
      status: 'Blocked',
      submitter: 'Jessica Brown',
      url: 'www.jessicabrown.com',
      assigned: 'Kevin Smith',
      priority: 'Low',
      dueDate: '30-01-2025',
      estValue: '2,800,000'
    }
  ]);

  const tableRef = useRef<HTMLDivElement>(null);

  // Group label and color functions
  const getGroupLabel = (colIdx: number) => {
    if (colIdx === 5) return 'ABC';
    if (colIdx === 6 || colIdx === 7) return 'Answer a question';
    if (colIdx === 8) return 'Extract';
    return '';
  };

  const getGroupColor = (colIdx: number) => {
    if (colIdx === 5) return 'bg-green-100 text-green-800';
    if (colIdx === 6 || colIdx === 7) return 'bg-purple-100 text-purple-800';
    if (colIdx === 8) return 'bg-orange-100 text-orange-800';
    return 'bg-gray-50 text-gray-500';
  };

  // Move getCellValue above the useEffect and wrap in useCallback
  const getCellValue = useCallback((rowIdx: number, colIdx: number) => {
    const row = rows[rowIdx];
    if (!row) return '';
    const colKey = columns[colIdx].key;
    return row[colKey] ?? '';
  }, [rows, columns]);

  // Focus input when editing
  useEffect(() => {
    if (editing && tableRef.current) {
      const input = tableRef.current.querySelector<HTMLInputElement>(
        `input[data-row='${editing.row}'][data-col='${editing.col}']`
      );
      input?.focus();
    }
  }, [editing]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selected || editing) return;
      const { row, col } = selected;
      if (e.key === 'ArrowDown') {
        setSelected({ row: Math.min(row + 1, rows.length - 1), col });
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setSelected({ row: Math.max(row - 1, 0), col });
        e.preventDefault();
      } else if (e.key === 'ArrowRight' || (e.key === 'Tab' && !e.shiftKey)) {
        setSelected({ row, col: Math.min(col + 1, columns.length - 1) });
        e.preventDefault();
      } else if (e.key === 'ArrowLeft' || (e.key === 'Tab' && e.shiftKey)) {
        setSelected({ row, col: Math.max(col - 1, 0) });
        e.preventDefault();
      } else if (e.key === 'Enter') {
        setEditing({ row, col });
        setEditValue(getCellValue(row, col));
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, editing, rows, columns.length, getCellValue]);

  const setCellValue = (rowIdx: number, colIdx: number, value: string) => {
    setRows((prev) => {
      const updated = [...prev];
      const colKey = columns[colIdx].key;
      updated[rowIdx] = { ...updated[rowIdx], [colKey]: value };
      return updated;
    });
  };

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    setSelected({ row: rowIdx, col: colIdx });
  };

  const handleCellDoubleClick = (rowIdx: number, colIdx: number) => {
    setEditing({ row: rowIdx, col: colIdx });
    setEditValue(getCellValue(rowIdx, colIdx));
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleEditBlur = () => {
    if (editing) {
      setCellValue(editing.row, editing.col, editValue);
      setEditing(null);
    }
  };

  const handleEditKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditBlur();
    } else if (e.key === 'Escape') {
      setEditing(null);
    }
  };

  const renderCell = (rowIdx: number, colIdx: number) => {
    const colKey = columns[colIdx].key;
    const isSelected = selected && selected.row === rowIdx && selected.col === colIdx;
    const isEditing = editing && editing.row === rowIdx && editing.col === colIdx;

    let content: React.ReactNode = rows[rowIdx][colKey];

    if (colKey === 'status') content = <StatusBadge status={rows[rowIdx][colKey]} />;
    if (colKey === 'priority') content = <PriorityBadge priority={rows[rowIdx][colKey]} />;
    if (colKey === 'url') {
      const url = rows[rowIdx][colKey];
      const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
      content = (
        <a
          href={formattedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline truncate block max-w-xs"
          title={url}
        >
          {url}
        </a>
      );
    }
    if (colKey === 'id') content = <span className="text-center text-gray-500 font-medium">{rows[rowIdx][colKey]}</span>;
    if (colKey === 'estValue') content = <span className="font-medium">{rows[rowIdx][colKey]} ₹</span>;

    if (isEditing) {
      content = (
        <input
          data-row={rowIdx}
          data-col={colIdx}
          className="w-full px-1 py-0.5 border border-blue-400 rounded text-sm"
          value={editValue}
          onChange={handleEditChange}
          onBlur={handleEditBlur}
          onKeyDown={handleEditKeyDown}
        />
      );
    }

    return (
      <TableCell
        key={colKey}
        className={`px-3 py-2 text-sm border-r border-gray-100 cursor-pointer hover:bg-gray-50 ${isSelected ? 'bg-blue-50 ring-2 ring-blue-300' : ''}`}
        onClick={() => handleCellClick(rowIdx, colIdx)}
        onDoubleClick={() => handleCellDoubleClick(rowIdx, colIdx)}
        tabIndex={0}
      >
        {content}
      </TableCell>
    );
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col.key}>{col.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, rowIdx) => (
          <TableRow key={row.id}>
            {columns.map((col, colIdx) => renderCell(rowIdx, colIdx))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};