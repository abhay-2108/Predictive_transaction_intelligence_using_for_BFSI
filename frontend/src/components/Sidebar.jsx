import { useState } from 'react'

const navItems = [
  'Dashboard',
  'Analytics',
  'Transaction Management',
  'Risk Analysis',
  'Activity Map',
  'Export',
  'Settings'
]

function Sidebar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-40 bg-gray-800 text-white px-3 py-2 rounded-md shadow-md"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>

      {/* Overlay Background for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-200 sm:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <nav
        className={`fixed sm:static top-0 left-0 w-64 h-full bg-gray-800
          transform transition-transform duration-200 z-30
          ${isOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
        aria-label="Main navigation"
      >
        <div className="p-4 flex flex-col h-full">
          <h1
            className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white"
          >
            Dashboard
          </h1>

          {/* Navigation List */}
          <ul className="space-y-2 flex-1 overflow-y-auto">
            {navItems.map(item => (
              <li key={item}>
                <button
                  onClick={() => {
                    setCurrentPage(item)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors min-h-[44px]
                    text-sm md:text-base text-white
                    ${currentPage === item ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                  aria-current={currentPage === item ? 'page' : undefined}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden mt-6 px-4 py-2 bg-gray-700 text-white rounded-lg"
          >
            Close Menu
          </button>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
