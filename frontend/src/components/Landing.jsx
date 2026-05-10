import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, TrendingUp, Shield, Sparkles } from 'lucide-react'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="gradient-bg min-h-screen flex flex-col">
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
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

        {/* Trust stats */}
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
      </div>

      {/* Footer signal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="flex items-center justify-center gap-6 py-6 text-xs text-muted"
      >
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3" />
          Live market data
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="w-3 h-3" />
          Your data stays private
        </div>
      </motion.div>
    </div>
  )
}