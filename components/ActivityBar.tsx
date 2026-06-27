import { VscExtensions, VscExplorer, VscSourceControl, VscDebugAlt, VscSearch, VscSettings, VscAccount } from 'react-icons/vsc'

const topItems = [
  { icon: VscExplorer, label: 'Explorer' },
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
    <aside className="flex w-16 flex-col items-center justify-between bg-vsc-activity text-vsc-text py-4">
      <div className="space-y-4">
        {topItems.map((item) => {
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
      <div className="space-y-4">
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
