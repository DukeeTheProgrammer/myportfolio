import { useState, useEffect } from 'react'
import TerminalShell from './TerminalShell'

const STORAGE_KEY = 'terminal-collapsed'
const TERMINAL_HEIGHT = 220

export default function TerminalPanel() {
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'false') setCollapsed(false)
  }, [])

  const toggle = () => {
    setCollapsed((c) => {
      const next = !c
      localStorage.setItem(STORAGE_KEY, String(next))
      return next
    })
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex flex-col border-t border-[#00ff41]/20 bg-[#0d1117]/95 backdrop-blur-sm"
      style={{ height: collapsed ? 32 : TERMINAL_HEIGHT }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-3 py-0.5 bg-[#161b22] border-b border-[#00ff41]/10 shrink-0 select-none">
        <div className="flex items-center gap-2">
          <span className="text-[#00ff41] text-xs font-mono font-bold">
            &gt;_
          </span>
          <span className="text-gray-400 text-xs font-mono">
            Terminal
          </span>
        </div>
        <div className="flex items-center gap-3">
          {collapsed && (
            <span className="text-gray-500 text-xs font-mono">
              Type `help` or click to expand
            </span>
          )}
          <button
            onClick={toggle}
            className="text-gray-400 hover:text-[#00ff41] text-xs font-mono cursor-pointer px-1"
            title={collapsed ? 'Expand terminal' : 'Collapse terminal'}
          >
            {collapsed ? '▲ Expand' : '▼ Collapse'}
          </button>
        </div>
      </div>

      {/* Terminal body */}
      {!collapsed && (
        <div className="flex-1 min-h-0">
          <TerminalShell />
        </div>
      )}
    </div>
  )
}
