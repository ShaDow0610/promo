<template>
  <section id="predictions" class="relative text-white py-14 sm:py-16 overflow-hidden">
    <!-- BG cohérent -->
    <div class="absolute inset-0 -z-10 pointer-events-none">
      <div class="absolute inset-0 animate-bgShift"></div>
      <div class="absolute inset-0 opacity-25 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(255,200,80,0.22),transparent_70%)]"></div>
      <div class="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div class="absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#0b0b0c]"></div>
      <div class="absolute -bottom-10 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-[#0b0b0c]/70 to-[#050505]"></div>
    </div>

    <div class="container mx-auto px-4 max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <!-- PRONOS FOOT -->
        <article class="rounded-2xl bg-white/10 border border-white/10 p-5 sm:p-6 shadow-[0_10px_30px_rgba(250,200,80,0.06)]">
          <header class="flex items-start gap-3 mb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-500/15 border border-yellow-400/30 flex items-center justify-center text-yellow-300">
              <i class="fa-solid fa-futbol text-lg sm:text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-extrabold">Pronostics Foot offerts</h3>
              <p class="text-sm sm:text-base text-gray-300">
                Rejoins le canal pour des <span class="text-yellow-300 font-semibold">pronos quotidiens</span>,
                des <span class="text-yellow-300 font-semibold">analyses</span> et des <span class="text-yellow-300 font-semibold">codes bonus</span>.
              </p>
            </div>
          </header>

          <ul class="text-sm text-gray-300 space-y-1.5 mb-5">
            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-green-400"></i> Sélection rigoureuse des matchs</li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-green-400"></i> Gestion de bankroll & conseils</li>
            <li class="flex items-center gap-2"><i class="fa-solid fa-check text-green-400"></i> Notifications Telegram en temps réel</li>
          </ul>

          <a
            :href="telegramUrl"
            target="_blank" rel="noopener"
            class="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold
                   bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A]
                   text-black shadow-[0_8px_24px_rgba(255,210,90,0.25)]
                   ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition"
          >
            <i class="fa-brands fa-telegram mr-2"></i> Rejoindre le canal
          </a>
        </article>

        <!-- DEMO APPLE OF FORTUNE -->
        <article class="rounded-2xl bg-white/10 border border-white/10 p-5 sm:p-6 shadow-[0_10px_30px_rgba(250,200,80,0.06)]">
          <header class="flex items-start gap-3 mb-3">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <i class="fa-solid fa-apple-whole text-lg sm:text-xl"></i>
            </div>
            <div>
              <h3 class="text-xl sm:text-2xl font-extrabold">Démo Pronostic — Apple of Fortune</h3>
              <p class="text-sm sm:text-base text-gray-300">
                Révèle <span class="text-yellow-300 font-semibold">jusqu’à 3 cases</span> : **une par ligne**, du bas vers le haut,
                avec <span class="text-yellow-300 font-semibold">colonne aléatoire</span> sur chaque ligne. Pour la suite → Telegram 😉
              </p>
            </div>
          </header>

          <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <button
              class="inline-flex items-center justify-center rounded-full px-5 py-2.5 font-semibold bg-emerald-500 text-black hover:brightness-110 active:brightness-95 transition"
              @click="openModal"
            >
              <i class="fa-solid fa-play mr-2"></i> Ouvrir la démo
            </button>
            <p class="text-xs text-gray-400">* Démonstration pédagogique — pas le jeu réel.</p>
          </div>
        </article>
      </div>
    </div>

    <!-- MODAL DEMO -->
    <div v-if="show" class="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4" @click.self="closeModal">
      <div ref="modalRef" class="bg-[#0d0d0e] text-white rounded-2xl shadow-2xl max-w-[920px] w-full border border-white/10 overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between px-4 sm:px-5 py-3 bg-white/5 border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <i class="fa-solid fa-apple-whole"></i>
            </div>
            <div>
              <p class="font-semibold leading-tight">Apple of Fortune — Démo Pronostic</p>
              <p class="text-xs text-gray-400">3 révélations max · Compte à rebours 10:00</p>
            </div>
          </div>
          <button @click="closeModal" class="p-2 text-gray-300 hover:text-white" aria-label="Fermer">✕</button>
        </div>

        <!-- Controls -->
        <div class="px-4 sm:px-5 py-3 flex items-center justify-between gap-3 border-b border-white/10 bg-[#0f1012]">
          <div class="text-sm">
            <span class="text-gray-300">Temps restant :</span>
            <span class="ml-2 font-mono font-bold" :class="timeDanger ? 'text-red-400' : 'text-yellow-300'">{{ timeLeftFormatted }}</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="rounded-full px-4 py-2 bg-yellow-500 text-black font-semibold disabled:opacity-50" @click="startDemo" :disabled="running">
              Commencer
            </button>
            <button class="rounded-full px-4 py-2 bg-emerald-500 text-black font-semibold disabled:opacity-50" @click="revealApple" :disabled="!running || revealedCount >= maxReveals || locked">
              Montrer la pomme
            </button>
          </div>
        </div>

        <!-- Board -->
        <div class="p-4 sm:p-6">
          <div class="mx-auto max-w-[780px]">
            <div class="grid gap-2 sm:gap-2.5" :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }">
              <div
                v-for="cell in cells"
                :key="cell.key"
                :data-cell="cell.key"
                :class="['tile','relative','aspect-square','rounded-full','overflow-hidden','border','border-white/10','flex','items-center','justify-center', isRevealed(cell.r,cell.c) ? 'revealed' : '']"
              >
                <!-- base fond -->
                <div class="absolute inset-0 bg-[radial-gradient(65%_65%_at_50%_40%,#2b2d31,#1a1c20)]"></div>

                <!-- COUVERCLE BOIS (visible si non révélé) -->
                <div class="cover absolute inset-[8%] rounded-full will-change-transform">
                  <div class="absolute inset-0 rounded-full wood"></div>
                  <div class="absolute inset-0 rounded-full ring-1 ring-black/40 shadow-[inset_0_12px_22px_rgba(0,0,0,.35),inset_0_0_0_2px_rgba(0,0,0,.35)]"></div>
                  <div class="absolute inset-0 rounded-full opacity-20 bg-[radial-gradient(55%_35%_at_40%_25%,rgba(255,255,255,.5),transparent_60%)]"></div>
                </div>

                <!-- APPLE -->
                <div class="apple relative text-2xl sm:text-3xl will-change-transform">🍏</div>
              </div>
            </div>

            <!-- Footer -->
            <div class="mt-4 sm:mt-5 text-center">
              <p v-if="!locked" class="text-xs sm:text-sm text-gray-400">
                Révélations : <span class="text-yellow-300 font-semibold">{{ revealedCount }}</span> / {{ maxReveals }}
              </p>
              <div v-else class="mt-3">
                <p class="text-sm sm:text-base text-gray-200 mb-3">Démo terminée. Pour voir la suite des pronostics en direct :</p>
                <a :href="telegramUrl" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-full px-6 py-3 font-bold bg-gradient-to-r from-[#F7D774] via-[#FFD26A] to-[#C9971A] text-black shadow-[0_8px_24px_rgba(255,210,90,0.25)] ring-1 ring-yellow-500/40 hover:brightness-105 active:brightness-95 transition">
                  <i class="fa-brands fa-telegram mr-2"></i> Rejoindre le canal
                </a>
              </div>
              <p class="mt-3 text-[11px] text-gray-500 italic">* Démonstration pédagogique — pas un jeu d’argent.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'

// ===== Config =====
const telegramUrl = 'https://t.me/ton_canal' // <-- remplace
const rows = 8
const cols = 8
const maxReveals = 3
const demoDurationSec = 10 * 60 // 10:00

// ===== State =====
const show = ref(false)
const running = ref(false)
const locked = ref(false)
const revealed = ref([]) // [{r,c}]
const revealedCount = computed(() => revealed.value.length)
const modalRef = ref(null)

// cells
const cells = computed(() => {
  const list = []
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) list.push({ r, c, key: `${r}-${c}` })
  return list
})
const isRevealed = (r, c) => revealed.value.some(x => x.r === r && x.c === c)

// ===== CIBLE PAR LIGNE : colonne aléatoire pour chaque ligne =====
const rowCursor = ref(rows - 1)           // commence en bas
const rowTargetCol = ref(Array(rows).fill(null)) // mémorise la colonne choisie par ligne

function randomCol () {
  return Math.floor(Math.random() * cols)
}
function colForRow (r) {
  if (rowTargetCol.value[r] == null) {
    rowTargetCol.value[r] = randomCol()
  }
  return rowTargetCol.value[r]
}
function advanceRowPointer () {
  rowCursor.value-- // passe à la ligne au-dessus
}

// Timer
const timeLeft = ref(demoDurationSec)
let timer = null
const timeLeftFormatted = computed(() => {
  const m = Math.floor(timeLeft.value / 60).toString().padStart(2, '0')
  const s = Math.floor(timeLeft.value % 60).toString().padStart(2, '0')
  return `${m}:${s}`
})
const timeDanger = computed(() => timeLeft.value <= 30)

// ===== Actions =====
function openModal () {
  resetDemo()
  show.value = true
  nextTick(() => {
    if (modalRef.value) {
      gsap.fromTo(modalRef.value, { opacity: 0, y: 24, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'power2.out' })
    }
  })
}
function closeModal () {
  if (!modalRef.value) { show.value = false; stopTimer(); return }
  gsap.to(modalRef.value, { opacity: 0, y: 12, scale: 0.985, duration: 0.18, ease: 'power1.inOut', onComplete: () => { show.value = false; stopTimer() } })
}
function resetDemo () {
  revealed.value = []
  timeLeft.value = demoDurationSec
  locked.value = false
  running.value = false
  rowCursor.value = rows - 1
  rowTargetCol.value = Array(rows).fill(null)
  stopTimer()
}
function startDemo () {
  if (running.value) return
  running.value = true
  stopTimer()
  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) { timeLeft.value = 0; endDemo() }
  }, 1000)
}
function stopTimer () { if (timer) { clearInterval(timer); timer = null } }

function revealApple () {
  if (!running.value || locked.value || revealedCount.value >= maxReveals) return

  // trouve la prochaine ligne disponible (du bas vers le haut)
  while (rowCursor.value >= 0 && isRevealed(rowCursor.value, colForRow(rowCursor.value))) {
    advanceRowPointer()
  }
  if (rowCursor.value < 0) { endDemo(); return }

  const r = rowCursor.value
  const c = colForRow(r) // colonne aléatoire mémorisée pour cette ligne

  revealed.value = [...revealed.value, { r, c }]

  // animation cover -> apple
  const el = modalRef.value?.querySelector(`[data-cell="${r}-${c}"]`)
  if (el) {
    const cover = el.querySelector('.cover')
    const apple = el.querySelector('.apple')
    gsap.fromTo(cover, { scale: 1, opacity: 1, rotate: 0 }, { scale: 0, opacity: 0, rotate: 28, duration: 0.35, ease: 'back.in(1.8)' })
    gsap.fromTo(apple, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)', delay: 0.05 })
  }

  // prochaine ligne au-dessus
  advanceRowPointer()

  if (revealedCount.value >= maxReveals) endDemo()
}

function endDemo () {
  locked.value = true
  running.value = false
  stopTimer()
}

onBeforeUnmount(() => stopTimer())
</script>

<style scoped>
/* Gradient animé pour cohérence globale */
@keyframes bgShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
.animate-bgShift{ background:linear-gradient(120deg,#050505 0%,#0b0b0c 40%,#020202 100%); background-size:200% 200%; animation:bgShift 18s linear infinite; }

/* Tuiles: états & transitions */
.tile .cover,
.tile .apple { transition: transform .28s ease, opacity .28s ease; }
.tile .apple { opacity: 0; transform: scale(.7); }
.tile.revealed .cover { opacity: 0; transform: scale(.2) rotate(25deg); }
.tile.revealed .apple { opacity: 1; transform: scale(1); }

/* Texture bois (disque) — légère, pure CSS */
.wood{
  background:
    radial-gradient(60% 45% at 50% 30%, rgba(255,255,255,.10), transparent 60%),
    repeating-conic-gradient(
      from 0deg,
      #6b4429 0 14deg,
      #5a3a22 14deg 28deg
    );
  filter: saturate(0.9) brightness(0.95);
}
</style>
