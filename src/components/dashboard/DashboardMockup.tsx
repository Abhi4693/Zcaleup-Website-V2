"use client";

import { motion } from "framer-motion";

const floatCards = [
  { label: "Realtime GL", value: "Synced", sub: "Live ledger", top: "8%", right: "-4%", delay: 0 },
  { label: "Procurement", value: "38", sub: "Open POs", top: "45%", left: "-8%", delay: 0.2 },
  { label: "Store Sync", value: "Active", sub: "Multi-store", bottom: "12%", right: "5%", delay: 0.4 },
];

const barHeights = [40, 65, 45, 80, 55, 90, 70];

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary-light/10 to-accent/10 blur-3xl" />

      {/* Main dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl border border-border/80 bg-white shadow-2xl shadow-primary/10"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-section-alt px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="mx-auto flex gap-1">
            {["Finance", "Inventory", "Manufacturing", "POS"].map((mod) => (
              <span
                key={mod}
                className="rounded-md bg-white px-2 py-0.5 text-[10px] font-medium text-text-secondary"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-14 flex-shrink-0 flex-col gap-3 border-r border-border bg-section-alt p-3 sm:flex">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`h-8 rounded-lg ${i === 0 ? "bg-primary/20" : "bg-border/60"}`}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 sm:p-6">
            {/* KPI row */}
            <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Revenue MTD", value: "↑ 12%" },
                { label: "Margin", value: "Healthy" },
                { label: "Open POs", value: "38" },
                { label: "Stock Alerts", value: "6" },
              ].map((kpi, i) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-xl border border-border bg-section-alt p-3"
                >
                  <p className="text-[10px] text-text-secondary">{kpi.label}</p>
                  <p className="text-lg font-bold text-text">{kpi.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Charts */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="col-span-2 rounded-xl border border-border bg-section-alt p-4">
                <p className="mb-3 text-xs font-semibold text-text-secondary">
                  Revenue Trend
                </p>
                <div className="flex h-24 items-end gap-1.5">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.08, duration: 0.6 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary to-primary-light"
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-section-alt p-4">
                <p className="mb-3 text-xs font-semibold text-text-secondary">
                  Module Activity
                </p>
                <div className="space-y-2">
                  {[60, 80, 45, 90].map((w, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                      className="h-2 rounded-full bg-gradient-to-r from-accent to-primary-light"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      {floatCards.map((card) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: card.delay + 0.6, duration: 0.5 },
            scale: { delay: card.delay + 0.6, duration: 0.5 },
            y: { delay: card.delay + 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute z-10 hidden rounded-xl border border-border bg-white/90 p-3 shadow-lg backdrop-blur-sm sm:block"
          style={{
            top: card.top,
            right: card.right,
            left: card.left,
            bottom: card.bottom,
          }}
        >
          <p className="text-[10px] font-medium text-text-secondary">{card.label}</p>
          <p className="text-base font-bold text-text">{card.value}</p>
          <p className="text-[10px] text-text-secondary">{card.sub}</p>
        </motion.div>
      ))}
    </div>
  );
}
