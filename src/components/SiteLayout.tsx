import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'

const nav = [['Services','/services'],['Offers','/offers'],['Team','/team'],['Gallery','/gallery'],['Reviews','/reviews'],['Contact','/contact']] as const

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  return <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}><span className="font-display text-2xl">GlowNest</span><span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:inline">Beauty & Wellness</span></Link>
        <div className="hidden items-center gap-5 lg:flex">{nav.map(([label,to]) => <Link key={to} to={to} className={`text-xs transition-colors hover:text-foreground ${pathname === to ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</Link>)}</div>
        <div className="flex items-center gap-2"><Link to="/admin" className="hidden text-xs text-muted-foreground hover:text-foreground sm:block">Admin</Link><Button asChild size="sm" className="hidden rounded-full md:inline-flex"><Link to="/booking">Book</Link></Button><Button size="icon" variant="ghost" className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
      </nav>
      {open && <div className="glass mx-auto mt-2 grid max-w-6xl rounded-2xl p-3 lg:hidden">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm hover:bg-accent">{label}</Link>)}<Link to="/admin" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm hover:bg-accent">Admin</Link></div>}
    </header>
    {children}
    <footer className="mx-auto mb-24 mt-20 max-w-6xl px-4 sm:px-6 md:mb-8"><div className="glass rounded-2xl px-6 py-8 sm:px-10"><div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]"><div><p className="font-display text-2xl">GlowNest Beauty & Wellness</p><p className="mt-2 max-w-sm text-sm text-muted-foreground">A calm room for the person you’re becoming.</p></div><div className="space-y-2 text-sm text-muted-foreground"><p className="flex gap-2"><MapPin className="size-4"/>214 Linden Row, Suite 2</p><p className="flex gap-2"><Phone className="size-4"/>(555) 018-4470</p><p className="flex gap-2"><Mail className="size-4"/>hello@glownest.studio</p></div><div><p className="text-sm text-muted-foreground">Tue–Sat · 9am–7pm<br/>Sun · 10am–4pm</p><div className="mt-4 flex gap-3"><a href="https://instagram.com" aria-label="Instagram"><Instagram className="size-4"/></a><a href="https://facebook.com" aria-label="Facebook"><Facebook className="size-4"/></a></div></div></div><p className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">© 2026 GlowNest Beauty & Wellness.</p></div></footer>
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden"><Button asChild className="h-12 w-full rounded-full shadow-xl"><Link to="/booking">Book an Appointment</Link></Button></div>
  </div>
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <div className="mx-auto max-w-6xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16"><p className="eyebrow">{eyebrow}</p><h1 className="mt-3 max-w-3xl font-display text-5xl font-light leading-none sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-muted-foreground">{text}</p></div> }
