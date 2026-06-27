import ActivityBar from '@/components/ActivityBar'
import Editor from '@/components/Editor'
import Sidebar from '@/components/Sidebar'
import StatusBar from '@/components/StatusBar'
import TerminalPanel from '@/components/TerminalPanel'
import TopMenuBar from '@/components/TopMenuBar'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-vsc-background text-vsc-text overflow-hidden">
      <div className="matrix-bg" />
      <div className="flex h-screen flex-col">
        <TopMenuBar />
        <div className="flex flex-1 overflow-hidden">
          <ActivityBar />
          <Sidebar />
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <Editor />
            <TerminalPanel />
          </div>
        </div>
        <StatusBar />
      </div>
    </main>
  )
}
