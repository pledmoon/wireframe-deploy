// import { cn } from '@/lib/utils'
// interface IHeaderProps {
//   className?: string
// }
// export const Header = ({ className = '' }: IHeaderProps) => {
//   const styles = cn('mb-10 bg-gray-200 p-4', className)
//   return (
//     <header className={styles}>
//       <div className="container">
//         <div>HEADER</div>
//       </div>
//     </header>
//   )
// }
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface IHeaderProps {
  className?: string
}

export const Header = ({ className = '' }: IHeaderProps) => {
  const menuItems = [
    { label: 'О нас', href: '#pain-point' },
    { label: 'Решения', href: '#solution' },
    { label: 'Цены', href: '#pricing' },
  ]

  return (
    <header>
      <nav className="fixed left-0 right-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-[200px] bg-white px-6 py-3 shadow-md">
        {/* Logo */}
        <Link
          href="#hero"
          className="relative h-12 w-28"
        >
          <Image
            src="/logonew.png"
            alt="Logo"
            fill
            className="rounded-full object-contain"
          />
        </Link>

        {/* Menu items */}
        <div className="hidden gap-6 md:flex">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="font-medium text-gray-900 transition hover:text-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Primary button */}
        <a
          href="https://elevatestd.lemonsqueezy.com/buy/5c5ea51e-9cf1-41d7-aa42-17c00cd1155d"
          className="hover:bg-secondary bg-secondary relative rounded-full px-6 py-2 font-semibold text-white shadow-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Написать нам
        </a>
      </nav>
    </header>
  )
}
