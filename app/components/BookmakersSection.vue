<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
const particlesContainer = ref(null)
let particleEls = []

const prefersReduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

// ====== DATA ======
const bookmakers = [
  {
    name: t('bookmakersSection.brands.1win.name'),
    logo: "/1win2.webp",
    code: "GLE44",
    note: t('bookmakersSection.brands.1win.note'),
    quickUrl: "https://1wvdmy.life/?p=l6cr",
    fullUrl: "https://1wvdmy.life/?p=l6cr",
  },
  // ... autres bookmakers
]

const reasons = [
  { icon: "fa-solid fa-gift", title: t('bookmakersSection.reasons.bonus.title'), text: t('bookmakersSection.reasons.bonus.text') },
  { icon: "fa-solid fa-shield", title: t('bookmakersSection.reasons.trust.title'), text: t('bookmakersSection.reasons.trust.text') },
  { icon: "fa-solid fa-chart-line", title: t('bookmakersSection.reasons.value.title'), text: t('bookmakersSection.reasons.value.text') },
]

const copied = ref(false)

async function copyPromo(code) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(code)
    } else {
      const ta = document.createElement("textarea")
      ta.value = code
      ta.setAttribute("readonly", "")
      ta.style.position = "fixed"
      ta.style.top = "-9999px"
      document.body.appendChild(ta)
      ta.select()
      document.execCommand("copy")
      document.body.removeChild(ta)
    }
    copied.value = true
    setTimeout(() => { copied.value = false }, 1400)
  } catch {
    alert("Copie impossible automatiquement. Code : " + code)
  }
}

// ==== GSAP Animations ====
onMounted(async () => {
  if (typeof window === "undefined") return

  // Register ScrollTrigger côté client
  gsap.registerPlugin(ScrollTrigger)
  await nextTick()

  // Particules dorées
  const host = particlesContainer.value
  if (host && !prefersReduced) {
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 12 : Math.min(Math.floor(window.innerWidth / 80), 28)

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("div")
      dot.className = "gold-dot"
      dot.style.left = `${Math.random() * 100}%`
      dot.style.top = `${10 + Math.random() * 80}%`
      const size = 4 + Math.random() * (isMobile ? 6 : 8)
      dot.style.width = dot.style.height = `${size}px`
      host.appendChild(dot)
      particleEls.push(dot)

      gsap.to(dot, {
        y: `-=${10 + Math.random() * 30}`,
        x: `+=${(Math.random() - 0.5) * 30}`,
        opacity: 0.6 + Math.random() * 0.4,
        duration: 4 + Math.random() * 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 2,
      })
    }
  }

  if (prefersReduced) return

  // Anim cartes logos
  gsap.utils.toArray(".bookmaker").forEach(card => {
    const reveal = (dir = "down") => {
      gsap.fromTo(
        card,
        { opacity: 0, y: dir === "down" ? 28 : -28, filter: "blur(8px)", scale: 0.96 },
        { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 0.6, ease: "power3.out" }
      )
    }
    const disperse = () => {
      gsap.to(card, { opacity: 0, y: 36, scale: 0.94, duration: 0.35, ease: "power2.inOut" })
    }

    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      end: "bottom 40%",
      onEnter: () => reveal("down"),
      onEnterBack: () => reveal("up"),
      onLeave: disperse,
      onLeaveBack: disperse,
    })
  })

  // Anim cartes reasons
  gsap.utils.toArray(".reason").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none reverse" },
      opacity: 0,
      y: 22,
      filter: "blur(6px)",
      scale: 0.98,
      duration: 0.5,
      ease: "power2.out",
      delay: i * 0.06,
      onComplete: () => gsap.to(card, { filter: "blur(0px)", duration: 0.2 }),
    })
  })
})

// Cleanup
onBeforeUnmount(() => {
  particleEls.forEach(p => p.remove())
  particleEls = []
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

