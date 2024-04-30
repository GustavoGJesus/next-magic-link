export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
      <div className="flex items-center mb-4 space-x-1">
        <h1>Logo</h1>
        <h1 className="text-lg font-medium">Acme</h1>
      </div>
      <nav className="space-y-2">
        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
          {/* <HomeIcon className="w-4 h-4" /> */}
          <span className="text-sm font-medium">Home</span>
        </button>
        <button className="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
          {/* <WalletIcon className="w-4 h-4" /> */}
          <span className="text-sm font-medium">Transactions</span>
        </button>
        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
          {/* <UsersIcon className="w-4 h-4" /> */}
          <span className="text-sm font-medium">Accounts</span>
        </button>
        <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
          {/* <TicketIcon className="w-4 h-4" /> */}
          <span className="text-sm font-medium">Tax</span>
        </button>
      </nav>
    </aside>
  );
}
