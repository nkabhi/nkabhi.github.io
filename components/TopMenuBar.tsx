import { VscSearch } from 'react-icons/vsc'

const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help']

export default function TopMenuBar() {
  return (
    <header className="sticky top-0 z-20 flex h-10 items-center border-b border-white/10 bg-vsc-background px-4 text-xs text-vsc-text">
      <nav className="flex items-center gap-2">
        {menuItems.map((item) => (
          <button key={item} className="rounded px-2 py-1 text-vsc-text/90 hover:bg-white/10">
            {item}
          </button>
        ))}
      </nav>
      <div className="mx-auto flex w-full max-w-sm items-center gap-2 rounded border border-white/10 bg-vsc-sidebar/90 px-3 py-1 text-vsc-text/80">
        <VscSearch className="h-4 w-4" />
        <input
          type="search"
          placeholder="Search"
          className="w-full bg-transparent text-sm text-vsc-text outline-none placeholder:text-vsc-text/50"
        />
      </div>
      <div className="w-20" />
    </header>
  )
}
