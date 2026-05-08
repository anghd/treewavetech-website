export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl font-bold">TreeWave Tech</h1>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="py-6 bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          © 2026 TreeWave Tech | 音频设备制造商
        </div>
      </footer>
    </div>
  )
}
