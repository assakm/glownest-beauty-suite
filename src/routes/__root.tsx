import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from '@tanstack/react-router'
import { useEffect, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { SiteLayout } from '@/components/SiteLayout'
import appCss from '../styles.css?url'
import { reportLovableError } from '../lib/lovable-error-reporting'

function NotFoundComponent() { return <div className="grid min-h-screen place-items-center bg-background p-4 text-center"><div><h1 className="font-display text-7xl">404</h1><p className="mt-2 text-muted-foreground">This page has moved.</p><Button asChild className="mt-6 rounded-full"><Link to="/">Return home</Link></Button></div></div> }
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { const router=useRouter(); useEffect(()=>reportLovableError(error,{boundary:'tanstack_root_error_component'}),[error]); return <div className="grid min-h-screen place-items-center p-4 text-center"><div><h1 className="font-display text-4xl">This page didn’t load</h1><Button className="mt-6" onClick={()=>{router.invalidate();reset()}}>Try again</Button></div></div> }
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({ head:()=>({meta:[{charSet:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{title:'GlowNest Beauty & Wellness'}],links:[{rel:'stylesheet',href:appCss},{rel:'preconnect',href:'https://fonts.googleapis.com'},{rel:'preconnect',href:'https://fonts.gstatic.com',crossOrigin:'anonymous'},{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Manrope:wght@400;500;600&display=swap'},{rel:'icon',href:'/favicon.ico'}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent })
function RootShell({children}:{children:ReactNode}) { return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html> }
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><SiteLayout><Outlet/></SiteLayout></QueryClientProvider>}
