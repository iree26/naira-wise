import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Wallet, User, Target, Check } from 'lucide-react'

const GOALS = [
  { id: 'save', label: 'Save for something', desc: 'A specific purchase or milestone' },
  { id: 'grow_wealth', label: 'Grow my wealth', desc: 'Long-term financial growth' },
  { id: 'beat_inflation', label: 'Beat inflation', desc: 'Protect my money from losing value' },
  { id: 'emergency_fund', label: 'Build emergency fund', desc: 'A safety cushion for the unexpected' },
]

const TIMEFRAMES = [
  { id: 3, label: 'Short term', desc: 'Less than 1 year' },
  { id: 18, label: 'Medium term', desc: '1 to 3 years' },
  { id: 60, label: 'Long term', desc: 'More than 3 years' },
]

export default function OnboardingForm() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [data, setData] = useState({
    income: '',
    expenses: '',
    age: '',
    timeframe_months: '',
    goal: '',
  })

  const update = (field, value) => setData({ ...data, [field]: value })

  const investable = data.income && data.expenses
    ? Math.max(0, Number(data.income) - Number(data.expenses))
    : 0

  const canProceed = () => {
    if (step === 0) return data.income && data.expenses && Number(data.expenses) < Number(data.income)
    if (step === 1) return data.age && data.timeframe_months
    if (step === 2) return data.goal
    return false
  }

  const next = () => {
    if (step < 2) setStep(step + 1)
    else handleSubmit()
  }

  const back = () => {
    if (step > 0) setStep(step - 1)
    else navigate('/')
  }

  const handleSubmit = () => {
    // Save to sessionStorage and navigate to results
    sessionStorage.setItem('userProfile', JSON.stringify(data))
    navigate('/results')
  }

  return (
    <div className="gradient-bg min-h-screen flex flex-col">
      {/* Top progress */}
      <div className="px-8 py-6 flex items-center justify-between">
        <button
          onClick={back}
          className="flex items-center gap-2 text-muted hover:text-text transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((s) => (
            <div
              key={s}
              className={`h-1 rounded-full transition-all duration-500 ${
                s === step ? 'w-10 bg-accent' : s < step ? 'w-6 bg-accent/50' : 'w-6 bg-surface-light'
              }`}
            />
          ))}
        </div>
        <div className="text-xs text-muted font-mono">{step + 1} / 3</div>
      </div>

      {/* Form area */}
      <div className="flex-1 flex items-center justify-center px-6 pb-12">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Wallet className="w-3 h-3 text-accent" />
                  <span className="text-xs text-accent font-medium">Step 1 · Your Income</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Let's start with the numbers
                </h2>
                <p className="text-muted mb-10">
                  This stays on your device. We use it to personalize your recommendations.
                </p>

                <div className="space-y-6">
                  <Field
                    label="Monthly income"
                    suffix="₦"
                    value={data.income}
                    onChange={(v) => update('income', v)}
                    placeholder="200,000"
                  />
                  <Field
                    label="Monthly expenses"
                    suffix="₦"
                    value={data.expenses}
                    onChange={(v) => update('expenses', v)}
                    placeholder="120,000"
                  />

                  {investable > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-accent/5 border border-accent/20"
                    >
                      <div className="text-xs text-muted mb-1">Available to invest</div>
                      <div className="font-mono text-2xl font-semibold text-accent">
                        ₦{investable.toLocaleString()}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <User className="w-3 h-3 text-accent" />
                  <span className="text-xs text-accent font-medium">Step 2 · About You</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Tell us about yourself
                </h2>
                <p className="text-muted mb-10">
                  Your age and timeframe shape the strategy.
                </p>

                <div className="space-y-6">
                  <Field
                    label="Your age"
                    value={data.age}
                    onChange={(v) => update('age', v)}
                    placeholder="28"
                  />

                  <div>
                    <label className="block text-sm text-muted mb-3">Investment timeframe</label>
                    <div className="grid gap-3">
                      {TIMEFRAMES.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => update('timeframe_months', t.id)}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            data.timeframe_months === t.id
                              ? 'bg-accent/10 border-accent'
                              : 'bg-surface border-border hover:border-muted'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-medium">{t.label}</div>
                              <div className="text-sm text-muted">{t.desc}</div>
                            </div>
                            {data.timeframe_months === t.id && (
                              <Check className="w-4 h-4 text-accent" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Target className="w-3 h-3 text-accent" />
                  <span className="text-xs text-accent font-medium">Step 3 · Your Goal</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  What are you trying to achieve?
                </h2>
                <p className="text-muted mb-10">
                  Pick the one that fits best. We'll tailor everything to it.
                </p>

                <div className="grid gap-3">
                  {GOALS.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => update('goal', g.id)}
                      className={`text-left p-5 rounded-xl border transition-all ${
                        data.goal === g.id
                          ? 'bg-accent/10 border-accent'
                          : 'bg-surface border-border hover:border-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold mb-1">{g.label}</div>
                          <div className="text-sm text-muted">{g.desc}</div>
                        </div>
                        {data.goal === g.id && (
                          <Check className="w-5 h-5 text-accent" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10"
          >
            <button
              onClick={next}
              disabled={!canProceed()}
              className={`w-full flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold transition-all ${
                canProceed()
                  ? 'bg-accent text-bg hover:bg-accent-dim'
                  : 'bg-surface-light text-muted cursor-not-allowed'
              }`}
            >
              {step === 2 ? 'Get my recommendations' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, suffix, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-muted mb-2">{label}</label>
      <div className="relative">
        {suffix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-mono">
            {suffix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full bg-surface border border-border rounded-xl py-4 ${
            suffix ? 'pl-10' : 'pl-4'
          } pr-4 font-mono text-lg focus:outline-none focus:border-accent transition-colors`}
        />
      </div>
    </div>
  )
}