import React from 'react'
import Link from 'next/link'
import { DarkModeToggle } from 'components/DarkModeToggle'
import styles from 'layouts/MainLayout.module.css'

export const MainLayout: React.FC = ({ children }) => (
  <>
    <nav className={styles.nav}>
      <div>
        <Link href="/">
          <a>
            Home
          </a>
        </Link>
        <Link href="/test-api">
          <a>
            Test API
          </a>
        </Link>
      </div>

      <div className="flex justify-end pt-4 pr-4 -mb-6 md:absolute md:top-0 md:right-0">
        <DarkModeToggle />
      </div>
    </nav>

    <section className={styles.section}>
      {children}
    </section>
  </>
)