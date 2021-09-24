import Link from 'next/link'

export default function TheHeader() {
  return (
    <div className="w-3/4 absolute top-4">
      <h1 className="text-6xl ">This is the title</h1>
      <nav>
        <ul className="list-none my-2 p-2 space-x-2 bg-purple-900 rounded text-white">
          <li className="list-menu-item rounded-l-md">
            <Link href="/">
              <a className="dark-bg">Home</a>
            </Link>
          </li>
          <li className="list-menu-item">
            <Link href="/tic-tac-toe">
              <a className="dark-bg">Tic-Tac-Toe</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
