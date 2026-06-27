const terminalLines = [
  '➜  ~/portfolio (main)',
  '$ ls -la',
  'drwxr-xr-x  10 user staff  320 Jun 27 10:02 .',
  'drwxr-xr-x  16 user staff  512 Jun 27 09:58 ..',
  'drwxr-xr-x   4 user staff  128 Jun 27 09:58 about',
  'drwxr-xr-x   3 user staff   96 Jun 27 09:58 youtube',
  'drwxr-xr-x   3 user staff   96 Jun 27 09:58 platforms',
  'drwxr-xr-x   3 user staff   96 Jun 27 09:58 udemy',
  'drwxr-xr-x   3 user staff   96 Jun 27 09:58 products',
  'drwxr-xr-x   3 user staff   96 Jun 27 09:58 connect',
  '$ echo $SPONSORSHIPS',
  'team@hiteshchoudhary.com',
]

const tabs = ['PROBLEMS', 'OUTPUT', 'DEBUG CONSOLE', 'TERMINAL', 'PORTS']

export default function TerminalPanel() {
  return (
    <section className="flex h-56 min-h-[14rem] flex-col border-t border-white/10 bg-[#1a1a1a]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-vsc-background/90 px-4 py-2 text-xs text-vsc-text/70">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`rounded-t-md px-3 py-1.5 ${
              tab === 'TERMINAL'
                ? 'bg-[#1e1e1e] text-vsc-text'
                : 'text-vsc-text/50 hover:text-vsc-text'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 text-sm text-vsc-text/80 scrollbar-thin">
        <pre className="whitespace-pre-wrap font-mono text-sm leading-6">
          {terminalLines.map((line) => (
            <div key={line} className="pb-1">
              {line.startsWith('➜') ? (
                <span className="text-[#4ec9b0]">{line}</span>
              ) : line.startsWith('$') ? (
                <span className="text-[#dcdcaa]">{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
        </pre>
      </div>
    </section>
  )
}
