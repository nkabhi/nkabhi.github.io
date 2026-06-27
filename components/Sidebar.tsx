import { useState } from 'react'
import { VscChevronDown, VscChevronRight, VscFolder, VscFile } from 'react-icons/vsc'

const explorerData = [
  {
    name: 'about',
    files: ['README.md', 'profile.json'],
  },
  {
    name: 'youtube',
    files: ['channels.yml'],
  },
  {
    name: 'platforms',
    files: ['platforms.tsx'],
  },
  {
    name: 'udemy',
    files: ['courses.md'],
  },
  {
    name: 'products',
    files: ['products.json'],
  },
  {
    name: 'connect',
    files: ['socials.ts'],
  },
]

export default function Sidebar() {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(
    explorerData.reduce((acc, folder) => ({ ...acc, [folder.name]: true }), {})
  )

  const toggleFolder = (folderName: string) => {
    setOpenFolders((current) => ({
      ...current,
      [folderName]: !current[folderName],
    }))
  }

  return (
    <aside className="w-[280px] shrink-0 border-r border-white/10 bg-vsc-sidebar text-vsc-text overflow-y-auto scrollbar-thin">
      <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.18em] text-vsc-text/70">
        explorer
      </div>

      <div className="space-y-3 p-4">
        {explorerData.map((folder) => {
          const isOpen = openFolders[folder.name]
          return (
            <div key={folder.name} className="rounded-lg bg-white/5 p-3">
              <button
                type="button"
                onClick={() => toggleFolder(folder.name)}
                className="flex w-full items-center justify-between gap-2 text-left text-sm text-vsc-text/80 hover:text-white"
              >
                <div className="flex items-center gap-2">
                  {isOpen ? (
                    <VscChevronDown className="h-4 w-4" />
                  ) : (
                    <VscChevronRight className="h-4 w-4" />
                  )}
                  <div className="flex items-center gap-2">
                    <VscFolder className="h-4 w-4 text-[#d7ba7d]" />
                    <span className="font-medium">{folder.name}</span>
                  </div>
                </div>
              </button>
              {isOpen && (
                <div className="mt-3 space-y-2 pl-8">
                  {folder.files.map((file) => (
                    <div
                      key={file}
                      className={`flex items-center gap-2 rounded px-2 py-1 text-sm ${
                        folder.name === 'about' && file === 'README.md'
                          ? 'bg-[#0e639c] text-white'
                          : 'text-vsc-text/80 hover:bg-white/10'
                      }`}
                    >
                      <VscFile className="h-4 w-4 text-vsc-text/50" />
                      <span>{file}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}
