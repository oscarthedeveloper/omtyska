'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import GrammarModeToggle from './GrammarModeToggle';
import SearchDialog from './SearchDialog';
import { siteConfig } from '../site.config';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <Link href="/" className={styles.brand}>
              Om Tyska <span className={styles.brandTld}>.se</span>
            </Link>

            <nav className={styles.links} aria-label="Huvudmeny">
              <Link
                href="/grammatik"
                className={pathname.startsWith('/grammatik') || pathname.startsWith('/docs') ? styles.linkActive : styles.link}
              >
                Grammatik
              </Link>

              <div
                className={styles.dropdown}
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                <button
                  type="button"
                  className={
                    pathname.startsWith('/verbdrillen') ||
                    pathname.startsWith('/glosdrillen') ||
                    pathname.startsWith('/kasusdrillen') ||
                    pathname.startsWith('/meningsbygget')
                      ? styles.linkActive
                      : styles.link
                  }
                  onClick={() => setToolsOpen(prev => !prev)}
                  aria-expanded={toolsOpen}
                >
                  Öva <span className={styles.chevron} aria-hidden="true">▾</span>
                </button>

                {toolsOpen && (
                  <div className={styles.dropdownMenu}>
                    {siteConfig.tools.map(tool => (
                      <Link
                        key={tool.id}
                        href={tool.href}
                        onClick={() => setToolsOpen(false)}
                      >
                        <strong>{tool.title}</strong>
                        <span style={{ display: 'block', fontSize: '0.8125rem', color: '#666', marginTop: 2 }}>
                          {tool.tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/larstig"
                className={pathname.startsWith('/larstig') ? styles.linkActive : styles.link}
              >
                Lärstigen
              </Link>

              <Link
                href="/blog"
                className={pathname.startsWith('/blog') ? styles.linkActive : styles.link}
              >
                Blogg
              </Link>
            </nav>
          </div>

          <div className={styles.actions}>
            <GrammarModeToggle />

            <button
              type="button"
              className={styles.searchBtn}
              onClick={() => setSearchOpen(true)}
              aria-label="Öppna sökning"
              title="Sök (Cmd+K)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>
            </button>

            <Link
              href="/framsteg"
              className={pathname === '/framsteg' ? styles.progressLinkActive : styles.progressLink}
            >
              Framsteg
            </Link>

            <Link
              href="/repetition"
              className={pathname === '/repetition' ? styles.progressLinkActive : styles.progressLink}
            >
              Repetition
            </Link>

            <button
              type="button"
              className={styles.toggle}
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Öppna meny"
              aria-expanded={mobileMenuOpen}
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={styles.mobile}>
            <p className={styles.mobileHeading}>Meny</p>
            <Link
              href="/grammatik"
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Grammatik
            </Link>
            <Link
              href="/larstig"
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Lärstigen (54 steg)
            </Link>
            <Link
              href="/blog"
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogg
            </Link>

            <p className={styles.mobileHeading}>Övningsverktyg</p>
            {siteConfig.tools.map(tool => (
              <Link
                key={tool.id}
                href={tool.href}
                className={styles.mobileLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {tool.title} ({tool.tag})
              </Link>
            ))}

            <p className={styles.mobileHeading}>Min studieplan</p>
            <Link
              href="/framsteg"
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Mina framsteg
            </Link>
            <Link
              href="/repetition"
              className={styles.mobileLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Repetition
            </Link>

            <GrammarModeToggle mobile />
          </div>
        )}
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
