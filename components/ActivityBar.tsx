import { VscExtensions, VscExplorer, VscSourceControl, VscDebugAlt, VscSearch, VscSettings, VscAccount } from 'react-icons/vsc'

const topItems = [
  { icon: VscExplorer, label: 'Explorer', active: true },
  { icon: VscSearch, label: 'Search' },
  { icon: VscSourceControl, label: 'SCM' },
  { icon: VscDebugAlt, label: 'Debug' },
  { icon: VscExtensions, label: 'Extensions' },
]

const bottomItems = [
  { icon: VscAccount, label: 'Account' },
  { icon: VscSettings, label: 'Settings' },
]

export default function ActivityBar() {
  return (
    <aside className="flex w-16 flex-col items-center justify-between bg-[#333333] text-vsc-text py-3">
      <div className="space-y-3">
        {topItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className={`group relative flex h-12 w-12 items-center justify-center rounded-lg text-vsc-text hover:bg-white/10 ${
                item.active ? 'bg-[#1e1e1e] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]' : ''
              }`}
              aria-label={item.label}
            >
              <Icon className="h-6 w-6" />
            </button>
          )
        })}
      </div>
      <div className="space-y-3">
        {bottomItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.label}
              className="group flex h-12 w-12 items-center justify-center rounded-lg text-vsc-text hover:bg-white/10"
              aria-label={item.label}
            >
              <Icon className="h-6 w-6" />
            </button>
          )
        })}
      </div>
    </aside>
  )
}
