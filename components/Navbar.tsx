'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import SearchDialog from './SearchDialog';
import { siteConfig } from '../site.config';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(71);

  useEffect(() => {
    setMobileMenuOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent background scrolling and sticky glitches on iOS/Android
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Keep mobile menu positioned exactly below the navbar header bar
  useEffect(() => {
    function measureHeight() {
      if (innerRef.current) {
        const rect = innerRef.current.getBoundingClientRect();
        if (rect.height > 0) {
          setNavHeight(Math.round(rect.height) + 1);
        }
      }
    }
    measureHeight();
    window.addEventListener('resize', measureHeight);
    return () => window.removeEventListener('resize', measureHeight);
  }, [mobileMenuOpen]);

  useEffect(() => {
    function keydown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setSearchOpen(true); }
      if (event.key === 'Escape') { setToolsOpen(false); setMobileMenuOpen(false); }
    }
    function pointerdown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setToolsOpen(false);
    }
    window.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', pointerdown);
    return () => { window.removeEventListener('keydown', keydown); document.removeEventListener('pointerdown', pointerdown); };
  }, []);

  function handleSearchOpen() {
    setMobileMenuOpen(false);
    setToolsOpen(false);
    setSearchOpen(true);
  }

  return (
    <>
      <header ref={navRef} className={styles.navbar}>
        <div ref={innerRef} className={styles.inner}>
          <div className={styles.left}>
            <Link href="/" className={styles.brand}>
              <span><span className={styles.brandName}>omtyska.se</span><span className={styles.brandTag}>Språk · Bildning · Kultur</span></span>
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
                    pathname.startsWith('/tabellpusslet') ||
                    pathname.startsWith('/ovningar') ||
                    pathname.startsWith('/verbdrillen') ||
                    pathname.startsWith('/glosdrillen') ||
                    pathname.startsWith('/kasusdrillen') ||
                    pathname.startsWith('/meningsbygget')
                      ? styles.linkActive
                      : styles.link
                  }
                  onClick={() => setToolsOpen(prev => !prev)}
                  aria-expanded={toolsOpen}
                  aria-controls="ovningsmeny"
                >
                  Öva <span className={styles.chevron} aria-hidden="true">▾</span>
                </button>

                {toolsOpen && (
                  <div id="ovningsmeny" className={styles.dropdownMenu}>
                    <Link href="/ovningar" onClick={() => setToolsOpen(false)}><strong>Alla övningar →</strong></Link>
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
                Anteckningar
              </Link>
            </nav>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.searchBtn}
              onClick={handleSearchOpen}
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
              aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
              aria-controls="mobilmeny"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '×' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobilmeny"
            className={styles.mobile}
            style={{
              top: `${navHeight}px`,
              height: `calc(100dvh - ${navHeight}px)`,
              maxHeight: `calc(100dvh - ${navHeight}px)`
            }}
          >
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
              Anteckningar
            </Link>

            <p className={styles.mobileHeading}>Övningsverktyg</p>
            <Link href="/ovningar" className={styles.mobileLink}>Alla övningar</Link>
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
          </div>
        )}
      </header>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
