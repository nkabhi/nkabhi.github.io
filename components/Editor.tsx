import { VscChromeClose } from 'react-icons/vsc'

const markdownLines = [
  { type: 'header', content: 'Hitesh Choudhary' },
  { type: 'text', content: 'I make coding videos and run a few tech products that serve millions of users.' },
  {
    type: 'text',
    content:
      'Coding educator, ex-Founder LCO (acquired), ex-Sr. Director (Physics Wallah, public listed company), ex-CTO @ iNeuron.ai. Two YouTube channels, 2.5K+ videos, a few hobby products, and a chai lover who drinks coffee with his wife.',
  },
  { type: 'badges', content: ['Chai aur Code · 778K (Hindi)', 'Hitesh Choudhary · 1.02M (English)', 'Instagram · 180K', 'X (Twitter) · 75K', 'LinkedIn · 480K'] },
  { type: 'badges', content: ['2.5K+ videos', '7 Udemy courses', '2 platforms', '4 hobby products'] },
]

export default function Editor() {
  return (
    <section className="flex min-h-0 flex-1 flex-col overflow-hidden border-b border-white/10 bg-[#1d1d1d]">
      <div className="border-b border-white/10 bg-vsc-background/95 px-4 py-3">
        <div className="flex items-center gap-2 overflow-x-auto text-sm text-vsc-text/80 scrollbar-thin">
          {['README.md', 'profile.json'].map((tab) => (
            <div
              key={tab}
              className={`flex items-center gap-2 rounded-tl rounded-tr border border-white/10 px-3 py-1.5 ${
                tab === 'README.md' ? 'bg-[#252526] text-white' : 'bg-[#1f1f1f] text-vsc-text/70'
              }`}
            >
              <span>{tab}</span>
              <VscChromeClose className="h-3.5 w-3.5 text-vsc-text/60 hover:text-vsc-text" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-vsc-text/70">
          <span className="text-vsc-text/90">YOUR-PROJECT-NAME</span>
          <span className="text-vsc-text/40">›</span>
          <span className="text-vsc-text/90">about</span>
          <span className="text-vsc-text/40">›</span>
          <span className="text-white">README.md</span>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 overflow-hidden">
        <div className="w-16 bg-[#1b1b1b] border-r border-white/10 px-3 py-4 text-right text-xs text-vsc-text/50">
          {Array.from({ length: 25 }, (_, index) => (
            <div key={index} className="leading-6">{index + 1}</div>
          ))}
        </div>
        <div className="min-w-0 flex-1 overflow-y-auto px-6 py-5 scrollbar-thin">
          <div className="space-y-4 font-sans text-sm leading-7 text-vsc-text">
            {markdownLines.map((line, index) => {
              if (line.type === 'header') {
                return (
                  <div key={index} className="flex items-end gap-3 text-4xl font-semibold text-white">
                    <span className="text-[#569cd6]">#</span>
                    <span>{line.content}</span>
                  </div>
                )
              }
              if (line.type === 'badges') {
                return (
                  <div key={index} className="flex flex-wrap gap-2">
                    {line.content.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-vsc-text/90"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )
              }
              return (
                <p key={index} className="text-vsc-text/80">
                  {line.content}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
