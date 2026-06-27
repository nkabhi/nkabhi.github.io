import { VscSync, VscCircleFilled, VscSourceControl } from 'react-icons/vsc'

export default function StatusBar() {
  return (
    <footer className="flex items-center justify-between border-t border-white/10 bg-vsc-status px-4 py-2 text-xs text-white">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 text-sm">
          <VscSourceControl className="h-4 w-4" />
          main
        </span>
        <span className="flex items-center gap-1 text-sm">
          <VscSync className="h-4 w-4" />
          Synced
        </span>
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
        <span>Markdown</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <VscCircleFilled className="h-2 w-2 text-green-300" />
        team@hiteshchoudhary.com
      </div>
    </footer>
  )
}
