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
  return (
    <aside className="w-[280px] shrink-0 border-r border-white/10 bg-vsc-sidebar text-vsc-text overflow-y-auto">
      <div className="border-b border-white/10 px-4 py-3 text-xs uppercase tracking-[0.18em] text-vsc-text/70">
        explorer
      </div>
      <div className="space-y-3 p-4">
        {explorerData.map((folder) => (
          <div key={folder.name} className="rounded-lg bg-white/5 p-3">
            <div className="flex items-center justify-between text-sm text-vsc-text/80">
              <span className="font-medium">{folder.name}</span>
              <span className="text-vsc-text/50">›</span>
            </div>
            <div className="mt-2 space-y-2 pl-3">
              {folder.files.map((file) => (
                <div
                  key={file}
                  className={`flex items-center gap-2 rounded px-2 py-1 text-sm ${
                    file === 'README.md' && folder.name === 'about'
                      ? 'bg-vsc-activity/70 text-white'
                      : 'text-vsc-text/80 hover:bg-white/10'
                  }`}
                >
                  <span className="text-vsc-text/50">•</span>
                  <span>{file}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
