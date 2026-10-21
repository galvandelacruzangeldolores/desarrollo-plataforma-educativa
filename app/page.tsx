'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  Flame,
  GraduationCap,
  Heart,
  LayoutDashboard,
  Menu,
  PlayCircle,
  Search,
  Star,
  Trophy,
  Users,
  X,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

const courses = [
  { id: 1, category: 'Desarrollo', title: 'The Complete JavaScript Course 2025', instructor: 'Jonas Schmedtmann', rating: '4.9', students: '186k', lessons: '69 lecciones', duration: '42 h', price: '19,99 €', oldPrice: '89,99 €', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85', accent: 'bg-amber-50' },
  { id: 2, category: 'Diseño', title: 'Diseño UX/UI desde cero: crea productos que enamoran', instructor: 'Marta Figueroa', rating: '4.8', students: '42k', lessons: '54 lecciones', duration: '18 h', price: '16,99 €', oldPrice: '74,99 €', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85', accent: 'bg-rose-50' },
  { id: 3, category: 'Negocios', title: 'Estrategia de marca para negocios digitales', instructor: 'Laura Méndez', rating: '4.7', students: '28k', lessons: '32 lecciones', duration: '9 h', price: '14,99 €', oldPrice: '59,99 €', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85', accent: 'bg-sky-50' },
  { id: 4, category: 'Fotografía', title: 'Fotografía profesional: domina la luz y la composición', instructor: 'Diego Ramírez', rating: '4.9', students: '51k', lessons: '48 lecciones', duration: '15 h', price: '18,99 €', oldPrice: '69,99 €', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=900&q=85', accent: 'bg-violet-50' },
]

const myCourses = [
  { title: 'The Complete JavaScript Course 2025', instructor: 'Jonas Schmedtmann', progress: 68, lessons: '24 de 69 lecciones', image: courses[0].image },
  { title: 'Diseño UX/UI desde cero', instructor: 'Marta Figueroa', progress: 32, lessons: '17 de 54 lecciones', image: courses[1].image },
  { title: 'Inglés conversacional para profesionales', instructor: 'Emily Parker', progress: 84, lessons: '38 de 45 lecciones', image: 'https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=900&q=85' },
]

function Header({ onDashboard, onHome }: { onDashboard: () => void; onHome: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-7 px-5 lg:px-8">
        <button onClick={onHome} className="flex items-center gap-2.5" aria-label="Volver al inicio">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#635bff] text-white"><GraduationCap /></span>
          <span className="text-xl font-extrabold tracking-[-0.04em] text-[#172033]">aula<span className="text-[#635bff]">.</span></span>
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="hidden items-center gap-2 text-sm font-semibold text-[#172033] md:flex">Explorar <ChevronDown className="size-4" /></button>
        <div className="relative hidden max-w-md flex-1 md:block">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="h-11 rounded-xl border-border bg-[#f7f8fb] pl-11 text-sm" placeholder="¿Qué quieres aprender hoy?" />
        </div>
        <nav className="ml-auto hidden items-center gap-5 md:flex">
          <button onClick={onDashboard} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Mis cursos</button>
          <button className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Enseña en aula</button>
          <Button variant="outline" className="h-10 rounded-xl px-4">Iniciar sesión</Button>
          <Button className="h-10 rounded-xl bg-[#635bff] px-4 hover:bg-[#5149e6]">Regístrate gratis</Button>
        </nav>
        <button className="ml-auto md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <div className="border-t bg-white px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-semibold"><button onClick={onDashboard} className="text-left">Mis cursos</button><button className="text-left">Enseña en aula</button><Button className="bg-[#635bff]">Regístrate gratis</Button></div></div>}
    </header>
  )
}

function CourseCard({ course, onSelect }: { course: typeof courses[number]; onSelect: () => void }) {
  return <Card className="group overflow-hidden border-border/70 bg-white py-0 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
    <div className="relative aspect-[16/9] overflow-hidden"><button onClick={onSelect} className="absolute inset-0 z-0" aria-label={`Ver curso ${course.title}`}><Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></button><Badge className="pointer-events-none absolute left-3 top-3 border-0 bg-white/95 text-[#172033] shadow-sm">{course.category}</Badge><button className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-[#172033]" aria-label="Añadir a favoritos"><Heart className="size-4" /></button></div>
    <CardContent className="flex flex-col gap-3 p-4"><button onClick={onSelect} className="text-left"><h3 className="line-clamp-2 min-h-12 text-[15px] font-bold leading-6 text-[#172033]">{course.title}</h3></button><p className="text-xs text-muted-foreground">{course.instructor}</p><div className="flex items-center gap-1 text-sm"><span className="font-bold text-[#b45309]">{course.rating}</span><span className="flex text-[#f59e0b]">{[1,2,3,4,5].map((i) => <Star key={i} className="size-3.5 fill-current" />)}</span><span className="text-xs text-muted-foreground">({course.students})</span></div><div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="flex items-center gap-1"><PlayCircle className="size-3.5" />{course.lessons}</span><span className="flex items-center gap-1"><Clock3 className="size-3.5" />{course.duration}</span></div><div className="flex items-center gap-2 pt-1"><span className="text-lg font-extrabold text-[#172033]">{course.price}</span><span className="text-xs text-muted-foreground line-through">{course.oldPrice}</span></div></CardContent>
  </Card>
}

function Home({ onSelect, onDashboard }: { onSelect: (id: number) => void; onDashboard: () => void }) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()) || course.category.toLowerCase().includes(query.toLowerCase())), [query])
  return <><Header onDashboard={onDashboard} onHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} /><main>
    <section className="overflow-hidden bg-[#f5f6ff]"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-[1.05fr_.95fr] md:px-8 md:py-24"><div><Badge className="mb-6 border-0 bg-[#e6e4ff] px-3 py-1.5 text-[#5149e6]">APRENDE SIN LÍMITES</Badge><h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.05em] text-[#172033] md:text-6xl">Tu próximo gran <span className="text-[#635bff]">salto</span> empieza aquí.</h1><p className="mt-6 max-w-lg text-lg leading-8 text-[#5d6679]">Aprende de los mejores profesionales y transforma tus ideas en habilidades que abren puertas.</p><div className="relative mt-8 max-w-lg"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(e) => setQuery(e.target.value)} className="h-14 rounded-2xl border-0 bg-white pl-12 pr-32 shadow-lg shadow-indigo-100/60" placeholder="Busca un curso, habilidad o tema..." /><Button className="absolute right-1.5 top-1.5 h-11 rounded-xl bg-[#635bff] px-4 hover:bg-[#5149e6]">Buscar</Button></div><div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground"><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#635bff]" />Contenido práctico</span><span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[#635bff]" />Aprende a tu ritmo</span></div></div><div className="relative hidden h-[360px] md:block"><div className="absolute right-0 top-0 h-72 w-72 rounded-[3rem] bg-[#dcd9ff]" /><div className="absolute bottom-0 left-8 h-60 w-60 rounded-[3rem] bg-[#ffe2b8]" /><div className="absolute left-16 top-10 h-72 w-80 rotate-3 overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl"><Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85" alt="Estudiantes aprendiendo juntos" fill sizes="320px" className="object-cover" /></div><div className="absolute bottom-8 right-3 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl"><span className="flex size-10 items-center justify-center rounded-xl bg-[#e4f9ef] text-[#149a5b]"><Trophy className="size-5" /></span><div><p className="text-xs text-muted-foreground">Cursos completados</p><p className="font-extrabold text-[#172033]">+2.4 millones</p></div></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-14 md:px-8"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#635bff]">ELIGE TU CAMINO</p><h2 className="text-3xl font-black tracking-[-0.04em] text-[#172033]">Explora por categorías</h2></div><button className="hidden items-center gap-2 text-sm font-bold text-[#635bff] sm:flex">Ver todas <ArrowRight className="size-4" /></button></div><div className="grid grid-cols-2 gap-3 md:grid-cols-4"><button className="flex items-center gap-3 rounded-2xl bg-[#eef0ff] p-4 text-left transition-transform hover:-translate-y-1"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#635bff]"><Code2 /></span><span><b className="block text-sm text-[#172033]">Desarrollo</b><small className="text-xs text-muted-foreground">1.240 cursos</small></span></button><button className="flex items-center gap-3 rounded-2xl bg-[#fff0e8] p-4 text-left transition-transform hover:-translate-y-1"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#ee7b35]"><Compass /></span><span><b className="block text-sm text-[#172033]">Diseño</b><small className="text-xs text-muted-foreground">830 cursos</small></span></button><button className="flex items-center gap-3 rounded-2xl bg-[#e9f8f0] p-4 text-left transition-transform hover:-translate-y-1"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#149a5b]"><LayoutDashboard /></span><span><b className="block text-sm text-[#172033]">Negocios</b><small className="text-xs text-muted-foreground">620 cursos</small></span></button><button className="flex items-center gap-3 rounded-2xl bg-[#fff4d9] p-4 text-left transition-transform hover:-translate-y-1"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#d99000]"><Flame /></span><span><b className="block text-sm text-[#172033]">Marketing</b><small className="text-xs text-muted-foreground">540 cursos</small></span></button></div></section>
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8"><div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#635bff]">SELECCIÓN DEL EQUIPO</p><h2 className="text-3xl font-black tracking-[-0.04em] text-[#172033]">Cursos destacados</h2></div><button className="flex items-center gap-2 text-sm font-bold text-[#635bff]">Ver catálogo <ArrowRight className="size-4" /></button></div>{filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{filtered.map((course) => <CourseCard key={course.id} course={course} onSelect={() => onSelect(course.id)} />)}</div> : <p className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">No encontramos cursos para “{query}”.</p>}</section>
  </main></>
}

function CourseDetail({ course, onBack, onDashboard }: { course: typeof courses[number]; onBack: () => void; onDashboard: () => void }) {
  const [enrolled, setEnrolled] = useState(false)
  return <><Header onDashboard={onDashboard} onHome={onBack} /><main><div className="bg-[#172033] text-white"><div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16"><button onClick={onBack} className="mb-8 flex items-center gap-2 text-sm text-slate-300 hover:text-white"><ArrowLeft className="size-4" />Volver al catálogo</button><div className="max-w-3xl"><Badge className="border-0 bg-[#635bff] text-white">{course.category}</Badge><h1 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] md:text-5xl">{course.title}</h1><p className="mt-5 text-lg leading-8 text-slate-300">Domina las habilidades que necesitas para crear proyectos reales y avanzar con confianza en tu carrera.</p><div className="mt-6 flex flex-wrap items-center gap-5 text-sm"><span className="flex items-center gap-1 font-bold text-[#fbbf24]">{course.rating} <Star className="size-4 fill-current" /></span><span className="text-slate-300">{course.students} estudiantes</span><span className="text-slate-300">Actualizado en octubre de 2025</span></div><div className="mt-6 flex items-center gap-3"><Avatar className="size-10 border-2 border-white/30"><AvatarImage src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&q=80" alt="Instructor" /><AvatarFallback>JS</AvatarFallback></Avatar><span className="text-sm">Creado por <b>{course.instructor}</b></span></div></div></div></div><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_360px] md:px-8"><div><h2 className="text-2xl font-black tracking-[-0.03em] text-[#172033]">Lo que aprenderás</h2><div className="mt-6 grid gap-4 sm:grid-cols-2">{['Construir proyectos completos desde cero','Escribir código limpio y escalable','Resolver problemas como un profesional','Aplicar las mejores prácticas actuales'].map((item) => <div key={item} className="flex gap-3 text-sm text-[#4f596b]"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#635bff]" />{item}</div>)}</div><Separator className="my-10" /><h2 className="text-2xl font-black tracking-[-0.03em] text-[#172033]">Temario del curso</h2><p className="mt-2 text-sm text-muted-foreground">12 secciones · 69 lecciones · 42 horas de contenido</p><div className="mt-6 overflow-hidden rounded-2xl border border-border"><div className="flex items-center justify-between bg-[#f7f8fb] p-4 text-sm font-bold"><span>Introducción y fundamentos</span><span className="text-xs font-normal text-muted-foreground">6 lecciones · 2 h</span></div>{['Bienvenida al curso','Configuración del entorno de trabajo','Tu primer proyecto'].map((item, index) => <div key={item} className="flex items-center gap-3 border-t p-4 text-sm text-muted-foreground"><PlayCircle className="size-4 text-[#635bff]" />{item}<span className="ml-auto text-xs">{index + 1}:20</span></div>)}</div></div><Card className="h-fit overflow-hidden border-border/80 py-0 shadow-xl shadow-slate-200/50"><div className="relative aspect-video"><Image src={course.image} alt={course.title} fill sizes="360px" className="object-cover" /><span className="absolute inset-0 flex items-center justify-center bg-black/20"><span className="flex size-14 items-center justify-center rounded-full bg-white text-[#635bff] shadow-lg"><PlayCircle className="size-7 fill-current" /></span></span></div><CardContent className="flex flex-col gap-5 p-6"><div className="flex items-baseline gap-3"><span className="text-3xl font-black text-[#172033]">{course.price}</span><span className="text-sm text-muted-foreground line-through">{course.oldPrice}</span><Badge variant="secondary" className="ml-auto">78% dto.</Badge></div><Button onClick={() => setEnrolled(true)} className="h-12 rounded-xl bg-[#635bff] text-base font-bold hover:bg-[#5149e6]">{enrolled ? 'Inscrito correctamente' : 'Inscríbete ahora'}</Button>{enrolled && <p className="text-center text-sm font-semibold text-[#149a5b]">Ya tienes acceso a este curso.</p>}<p className="text-center text-xs text-muted-foreground">Acceso de por vida · Garantía de 30 días</p><Separator /><div className="flex flex-col gap-3 text-sm text-[#4f596b]"><b>Este curso incluye:</b><span className="flex gap-2"><PlayCircle className="size-4" />42 horas de vídeo</span><span className="flex gap-2"><BookOpen className="size-4" />69 recursos descargables</span><span className="flex gap-2"><Trophy className="size-4" />Certificado de finalización</span></div></CardContent></Card></div></main></>
}

function Dashboard({ onHome, onSelect }: { onHome: () => void; onSelect: (id: number) => void }) {
  return <><Header onDashboard={() => {}} onHome={onHome} /><main className="mx-auto max-w-7xl px-5 py-12 md:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#635bff]">MI ESPACIO</p><h1 className="mt-2 text-4xl font-black tracking-[-0.05em] text-[#172033]">Hola, Alex</h1><p className="mt-2 text-muted-foreground">Continúa donde lo dejaste y sigue avanzando.</p></div><Button onClick={onHome} variant="outline" className="w-fit rounded-xl"><Compass className="mr-2 size-4" />Explorar cursos</Button></div><div className="mt-10 grid gap-4 sm:grid-cols-3"><Card className="border-0 bg-[#eef0ff] py-0"><CardContent className="flex items-center gap-4 p-5"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#635bff]"><BookOpen /></span><div><p className="text-2xl font-black text-[#172033]">3</p><p className="text-sm text-muted-foreground">Cursos activos</p></div></CardContent></Card><Card className="border-0 bg-[#e9f8f0] py-0"><CardContent className="flex items-center gap-4 p-5"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#149a5b]"><Trophy /></span><div><p className="text-2xl font-black text-[#172033]">12 h</p><p className="text-sm text-muted-foreground">Aprendidas este mes</p></div></CardContent></Card><Card className="border-0 bg-[#fff4d9] py-0"><CardContent className="flex items-center gap-4 p-5"><span className="flex size-11 items-center justify-center rounded-xl bg-white text-[#d99000]"><Flame /></span><div><p className="text-2xl font-black text-[#172033]">7 días</p><p className="text-sm text-muted-foreground">Racha de aprendizaje</p></div></CardContent></Card></div><div className="mt-12 flex items-center justify-between"><h2 className="text-2xl font-black tracking-[-0.03em] text-[#172033]">Continúa aprendiendo</h2><button className="text-sm font-bold text-[#635bff]">Ver todos</button></div><div className="mt-6 grid gap-5 lg:grid-cols-3">{myCourses.map((course, index) => <Card key={course.title} className="overflow-hidden border-border/70 py-0"><div className="relative aspect-[2/1]"><Image src={course.image} alt={course.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" /><Badge className="absolute left-3 top-3 border-0 bg-white/95 text-[#172033]">En progreso</Badge></div><CardContent className="flex flex-col gap-3 p-5"><h3 className="font-bold leading-6 text-[#172033]">{course.title}</h3><p className="text-xs text-muted-foreground">Por {course.instructor}</p><div className="mt-2 flex items-center justify-between text-xs"><span className="font-bold text-[#172033]">{course.progress}% completado</span><span className="text-muted-foreground">{course.lessons}</span></div><Progress value={course.progress} className="h-2 bg-[#eaecf4] [&>div]:bg-[#635bff]" /><Button onClick={() => onSelect(index === 0 ? 1 : index === 1 ? 2 : 1)} className="mt-2 h-10 rounded-xl bg-[#635bff] hover:bg-[#5149e6]"><PlayCircle className="mr-2 size-4" />Continuar curso</Button></CardContent></Card>)}</div></main></>
}

export default function Page() {
  const [view, setView] = useState<'home' | 'detail' | 'dashboard'>('home')
  const [selectedId, setSelectedId] = useState(1)
  const selected = courses.find((course) => course.id === selectedId) ?? courses[0]
  if (view === 'detail') return <CourseDetail course={selected} onBack={() => setView('home')} onDashboard={() => setView('dashboard')} />
  if (view === 'dashboard') return <Dashboard onHome={() => setView('home')} onSelect={(id) => { setSelectedId(id); setView('detail') }} />
  return <Home onDashboard={() => setView('dashboard')} onSelect={(id) => { setSelectedId(id); setView('detail') }} />
}
