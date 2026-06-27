import { VscSync, VscCircleFilled, VscSourceControl, VscRepo } from 'react-icons/vsc'

export default function StatusBar() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 bg-vsc-status px-4 py-2 text-xs text-white">
      <div className="flex flex-wrap items-center gap-3 text-[11px]">
        <span className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-1">
          <VscSourceControl className="h-3.5 w-3.5" />
          main
        </span>
        <span className="flex items-center gap-1 rounded-md bg-white/10 px-2 py-1">
          <VscSync className="h-3.5 w-3.5" />
          Synced
        </span>
        <span className="rounded-md bg-white/10 px-2 py-1">Ln 1, Col 1</span>
        <span className="rounded-md bg-white/10 px-2 py-1">Spaces: 2</span>
        <span className="rounded-md bg-white/10 px-2 py-1">UTF-8</span>
        <span className="rounded-md bg-white/10 px-2 py-1">LF</span>
        <span className="rounded-md bg-white/10 px-2 py-1">Markdown</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <VscCircleFilled className="h-2 w-2 text-green-300" />
        team@hiteshchoudhary.com
      </div>
    </footer>
  )
}
