import { motion, useInView } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Shield, Sparkles, Search, Check } from 'lucide-react'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="gradient-bg min-h-screen">
      {/* Top nav */}
      <nav className="flex items-center justify-between px-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-bg font-bold text-sm">N</span>
          </div>
          <span className="font-semibold text-lg">NairaWise</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs text-muted font-mono"
        >
          v0.1 · BETA
        </motion.div>
      </nav>

      {/* Hero */}
      <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <Sparkles className="w-3 h-3 text-accent" />
          <span className="text-xs text-accent font-medium">AI-Powered Personal Finance for Nigeria</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl leading-tight"
        >
          Your money,{' '}
          <span className="text-accent glow">working smarter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10"
        >
          Tell us your salary. We'll tell you exactly where to grow it.
          Personalized investment advice powered by live Nigerian market data.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/onboarding')}
          className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors"
        >
          Get Started
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl w-full"
        >
          {[
            { value: '30%+', label: 'Nigeria inflation rate' },
            { value: '<5%', label: 'Average bank savings' },
            { value: 'Live', label: 'Market data, real-time' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-mono text-2xl md:text-3xl font-semibold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 text-xs text-muted font-mono tracking-wider"
        >
          ↓ SEE IT IN ACTION
        </motion.div>
      </div>

      {/* DEMO SECTION */}
      <DemoSection />

      {/* Footer */}
      <div className="flex items-center justify-center gap-6 py-10 text-xs text-muted">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3" />
          Live market data
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3 h-3" />
          Your data stays private
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// DEMO CHAT SECTION
// ─────────────────────────────────────────────

const SCRIPT = [
  // Step 1 — Income
  { type: 'agent', text: "Hey 👋 I'm NairaWise. Let's start — what's your monthly income?", delay: 600 },
  { type: 'user', text: '₦200,000', delay: 1200 },

  // Step 2 — Expenses
  { type: 'agent', text: 'Got it. And roughly how much do you spend each month?', delay: 900 },
  { type: 'user', text: '₦120,000', delay: 1100 },
  { type: 'agent-callout', text: '✓ ₦80,000 available to invest monthly', delay: 700 },

  // Step 3 — Age
  { type: 'agent', text: 'Nice. How old are you?', delay: 900 },
  { type: 'user', text: '28', delay: 1000 },

  // Step 4 — Timeframe
  { type: 'agent', text: 'And how long are you planning to invest for?', delay: 900 },
  { type: 'user', text: '1 to 3 years', delay: 1100 },

  // Step 5 — Goal
  { type: 'agent', text: "Last one — what's your main goal?", delay: 900 },
  { type: 'user', text: 'Beat inflation', delay: 1100 },

  // Agent processing
  { type: 'agent-thinking', text: 'Analyzing your profile...', delay: 900 },
  { type: 'agent-search', tools: ['CBN T-bill rates', 'NGX top performers', 'Inflation data'], delay: 1500 },

  // Recommendations
  { type: 'agent', text: "Based on your profile and live market data, here's what I'd do:", delay: 1100 },
  { type: 'recommendations', delay: 800 },
]

function DemoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
          <span className="text-xs text-gold font-medium">⚡ Live demo</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          See NairaWise in action.
        </h2>
        <p className="text-muted max-w-xl mx-auto">
          A real conversation. Real market data. Real recommendations — tailored to you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        {/* Glow behind chat */}
        <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-3xl" />

        <div className="relative bg-surface/80 backdrop-blur border border-border rounded-2xl overflow-hidden shadow-2xl">
          {/* Chat header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-bg/40">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-bg font-bold text-sm">N</span>
              </div>
              <div>
                <div className="font-semibold text-sm">NairaWise</div>
                <div className="flex items-center gap-1.5 text-xs text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Online · Researching market live
                </div>
              </div>
            </div>
            <div className="text-xs text-muted font-mono">DEMO</div>
          </div>

          {/* Chat body */}
          <ChatPlayback inView={inView} />
        </div>
      </motion.div>
    </section>
  )
}

function ChatPlayback({ inView }) {
  const [visible, setVisible] = useState([])
  const scrollRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    let cancelled = false
    let i = 0
    const run = async () => {
      for (const msg of SCRIPT) {
        if (cancelled) return
        await new Promise((r) => setTimeout(r, msg.delay))
        if (cancelled) return
        setVisible((prev) => [...prev, { ...msg, id: i++ }])
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [inView])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [visible])

  return (
    <div
      ref={scrollRef}
      className="p-6 md:p-8 space-y-4 min-h-[600px] max-h-[750px] overflow-y-auto scroll-smooth"
    >
      {visible.map((msg) => (
        <ChatMessage key={msg.id} msg={msg} />
      ))}
    </div>
  )
}

function ChatMessage({ msg }) {
  if (msg.type === 'user') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-end"
      >
        <div className="max-w-[80%] bg-accent text-bg rounded-2xl rounded-br-sm px-4 py-2.5 font-medium">
          {msg.text}
        </div>
      </motion.div>
    )
  }

  if (msg.type === 'agent-callout') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex justify-start"
      >
        <div className="bg-accent/10 border border-accent/30 rounded-xl px-4 py-2 text-sm text-accent font-medium">
          {msg.text}
        </div>
      </motion.div>
    )
  }

  if (msg.type === 'agent-thinking') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 text-muted text-sm"
      >
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-muted animate-pulse" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-muted animate-pulse" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-muted animate-pulse" style={{ animationDelay: '300ms' }} />
        </div>
        <span className="italic">{msg.text}</span>
      </motion.div>
    )
  }

  if (msg.type === 'agent-search') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-1.5"
      >
        {msg.tools.map((tool, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.25 }}
            className="flex items-center gap-2 text-xs text-muted"
          >
            <Search className="w-3 h-3 text-accent" />
            <span>Searching:</span>
            <span className="text-text">{tool}</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.25 + 0.4 }}
              className="text-accent flex items-center gap-0.5"
            >
              <Check className="w-3 h-3" /> live
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  if (msg.type === 'agent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex justify-start"
      >
        <div className="max-w-[85%] bg-surface-light rounded-2xl rounded-bl-sm px-4 py-3">
          {msg.text}
        </div>
      </motion.div>
    )
  }

  if (msg.type === 'recommendations') {
    const recs = [
      { name: 'Treasury Bills', risk: 'Low', ret: '18.5%', amount: '₦30,000' },
      { name: 'Money Market Fund', risk: 'Low', ret: '12.0%', amount: '₦30,000' },
      { name: 'NGX Bluechip Stocks', risk: 'Medium', ret: '24.0%', amount: '₦20,000' },
    ]
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="grid md:grid-cols-3 gap-3 pt-2"
      >
        {recs.map((r, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            className="bg-bg border border-border rounded-xl p-4 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted">{r.risk} risk</span>
              <span className="text-xs font-mono text-accent">{r.ret}</span>
            </div>
            <div className="font-semibold mb-1 text-sm">{r.name}</div>
            <div className="font-mono text-lg text-accent">{r.amount}</div>
            <div className="text-xs text-muted mt-1">per month</div>
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return null
}