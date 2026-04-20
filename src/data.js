// --- CONFIGURAÇÕES GLOBAIS DO SISTEMA ---
export const APP_CONFIG = {
  hospitalName: "Real Hospital Português",
  hospitalShort: "RHP",
  appName: "CODE COFFEEWARE",
  currentDate: "17 Abr 2026",
  currentDay: "SEX",
  maxWeeklyHoursCLT: 44,
  alertThresholdHours: 6,
};

// --- SEMANA ATUAL (QUI 16 ABR 2026) ---
export const WEEK_DATES = [
  { day: "SEG", date: "13 ABR", label: "SEG, 13 ABR",  isToday: false, isPast: true  },
  { day: "TER", date: "14 ABR", label: "TER, 14 ABR",  isToday: false, isPast: true  },
  { day: "QUA", date: "15 ABR", label: "QUA, 15 ABR",  isToday: false, isPast: true  },
  { day: "QUI", date: "16 ABR", label: "HOJE, 16 ABR", isToday: true,  isPast: false },
  { day: "SEX", date: "17 ABR", label: "SEX, 17 ABR",  isToday: false, isPast: false },
  { day: "SAB", date: "18 ABR", label: "SAB, 18 ABR",  isToday: false, isPast: false },
  { day: "DOM", date: "19 ABR", label: "DOM, 19 ABR",  isToday: false, isPast: false },
];

// --- MOTIVOS DE FALTA ---
export const ABSENCE_REASONS = [
  "Atestado Médico",
  "Problema Familiar",
  "Acidente / Emergência",
  "Motivo Pessoal",
];

// --- ABAS DO APP MOBILE ---
export const MOBILE_TABS = [
  { id: "home",  label: "A Minha Escala" },
  { id: "banco", label: "Banco Horas"    },
  { id: "falta", label: "Ausências"      },
];

// --- PERFIS PARA DEMONSTRAÇÃO (LOGIN MOBILE) ---
// IDs correspondem aos IDs em MOCK_NURSES / MOCK_POOL para permitir o fluxo de convite
export const DEMO_PROFILES = [
  // Equipe Efetiva
  { id: 1,   name: "Ana Costa",     role: "Enf. Sênior",  type: "Equipe Efetiva", readiness: 85, first: "Ana",     last: "Costa",   unit: "UTI-A"        },
  { id: 2,   name: "Bruno Lima",    role: "Téc. Enf.",    type: "Equipe Efetiva", readiness: 45, first: "Bruno",   last: "Lima",    unit: "UTI-A"        },
  { id: 3,   name: "Carla Matos",   role: "Enf. Pleno",   type: "Equipe Efetiva", readiness: 15, first: "Carla",   last: "Matos",   unit: "UTI-A"        },
  { id: 6,   name: "Fabiana Melo",  role: "Enf. Pleno",   type: "Equipe Efetiva", readiness: 78, first: "Fabiana", last: "Melo",    unit: "Pediatria"    },
  { id: 7,   name: "Gabriel Souza", role: "Téc. Enf.",    type: "Equipe Efetiva", readiness: 82, first: "Gabriel", last: "Souza",   unit: "Emergência"   },
  { id: 8,   name: "Helena Paz",    role: "Enf. Sênior",  type: "Equipe Efetiva", readiness: 90, first: "Helena",  last: "Paz",     unit: "C. Cirúrgico" },
  { id: 9,   name: "Igor Santos",   role: "Téc. Enf.",    type: "Equipe Efetiva", readiness: 40, first: "Igor",    last: "Santos",  unit: "UTI-B"        },
  { id: 10,  name: "Joana Dark",    role: "Enf. Pleno",   type: "Equipe Efetiva", readiness: 65, first: "Joana",   last: "Dark",    unit: "Clínica Méd." },
  // Pool Flexível
  { id: 101, name: "Fernanda Luz",  role: "Enf. Sênior",  type: "Pool Flexível",  readiness: 88, first: "Fernanda", last: "Luz",    unit: "Cobertura Geral" },
  { id: 102, name: "Marcos Pinto",  role: "Enf. Pleno",   type: "Pool Flexível",  readiness: 92, first: "Marcos",   last: "Pinto",  unit: "Cobertura Geral" },
  { id: 103, name: "Juliana Neto",  role: "Enf. Pleno",   type: "Pool Flexível",  readiness: 75, first: "Juliana",  last: "Neto",   unit: "Cobertura Geral" },
  { id: 104, name: "Lucas Mendes",  role: "Téc. Enf.",    type: "Pool Flexível",  readiness: 95, first: "Lucas",    last: "Mendes", unit: "Cobertura Geral" },
  { id: 105, name: "Mariana Silva", role: "Téc. Enf.",    type: "Pool Flexível",  readiness: 60, first: "Mariana",  last: "Silva",  unit: "Cobertura Geral" },
];

// --- EQUIPE EFETIVA (DADOS DO GESTOR) ---
export const MOCK_NURSES = [
  {
    id: 1, name: "Ana Costa", role: "Enf. Sênior", unit: "UTI-A",
    color: "#006035", bg: "#e8f5ee",
    readiness: 85, hours: 36, shift: "07:00–19:00", status: "active",
    weekSchedule: { SEG: "07:00–19:00", TER: "07:00–19:00", QUA: "07:00–19:00", QUI: null,         SEX: "07:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 2, name: "Bruno Lima", role: "Téc. Enf.", unit: "UTI-A",
    color: "#2563eb", bg: "#dbeafe",
    readiness: 45, hours: 36, shift: "07:00–19:00", status: "active",
    weekSchedule: { SEG: null,          TER: "07:00–19:00", QUA: "07:00–19:00", QUI: "07:00–19:00", SEX: null,          SAB: null, DOM: null },
  },
  {
    id: 3, name: "Carla Matos", role: "Enf. Pleno", unit: "UTI-A",
    color: "#dc2626", bg: "#fee2e2",
    readiness: 0, hours: 0, shift: "07:00–19:00", status: "falta", alert: true,
    weekSchedule: { SEG: "07:00–19:00", TER: null,          QUA: "07:00–19:00", QUI: "07:00–19:00", SEX: "07:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 6, name: "Fabiana Melo", role: "Enf. Pleno", unit: "Pediatria",
    color: "#059669", bg: "#d1fae5",
    readiness: 78, hours: 24, shift: "07:00–19:00", status: "active",
    weekSchedule: { SEG: "07:00–19:00", TER: "07:00–19:00", QUA: null,          QUI: null,          SEX: "07:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 7, name: "Gabriel Souza", role: "Téc. Enf.", unit: "Emergência",
    color: "#2563eb", bg: "#dbeafe",
    readiness: 82, hours: 30, shift: "07:00–19:00", status: "active",
    weekSchedule: { SEG: null,          TER: null,          QUA: "07:00–19:00", QUI: "07:00–19:00", SEX: "07:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 8, name: "Helena Paz", role: "Enf. Sênior", unit: "C. Cirúrgico",
    color: "#9333ea", bg: "#f3e8ff",
    readiness: 90, hours: 20, shift: "07:00–13:00", status: "active",
    weekSchedule: { SEG: "07:00–13:00", TER: "07:00–13:00", QUA: "07:00–13:00", QUI: null,          SEX: "07:00–13:00", SAB: null, DOM: null },
  },
  {
    id: 9, name: "Igor Santos", role: "Téc. Enf.", unit: "UTI-B",
    color: "#ea580c", bg: "#ffedd5",
    readiness: 40, hours: 40, shift: "13:00–19:00", status: "active",
    weekSchedule: { SEG: "13:00–19:00", TER: null,          QUA: "13:00–19:00", QUI: "13:00–19:00", SEX: "13:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 10, name: "Joana Dark", role: "Enf. Pleno", unit: "Clínica Méd.",
    color: "#4f46e5", bg: "#e0e7ff",
    readiness: 65, hours: 32, shift: "07:00–19:00", status: "active",
    weekSchedule: { SEG: "07:00–19:00", TER: "07:00–19:00", QUA: null,          QUI: "07:00–19:00", SEX: null,          SAB: null, DOM: null },
  },
];

// --- POOL FLEXÍVEL ---
export const MOCK_POOL = [
  {
    id: 101, name: "Fernanda Luz",  hoursSem: 32, readiness: 88, color: "#006035", bg: "#e8f5ee",
    role: "Enf. Sênior", unit: "Cobertura Geral",
    // já escalada no QUI → conflito de horário com o furo de hoje
    weekSchedule: { SEG: "07:00–19:00", TER: null, QUA: "07:00–19:00", QUI: "07:00–19:00", SEX: null, SAB: null, DOM: null },
  },
  {
    id: 102, name: "Marcos Pinto",  hoursSem: 28, readiness: 92, color: "#2563eb", bg: "#dbeafe",
    role: "Enf. Pleno", unit: "Cobertura Geral",
    weekSchedule: { SEG: null, TER: "07:00–19:00", QUA: null, QUI: null, SEX: "07:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 103, name: "Juliana Neto",  hoursSem: 34, readiness: 75, color: "#7c3aed", bg: "#ede9fe",
    role: "Enf. Pleno", unit: "Cobertura Geral",
    weekSchedule: { SEG: "07:00–19:00", TER: null, QUA: null, QUI: null, SEX: "07:00–19:00", SAB: null, DOM: null },
  },
  {
    id: 104, name: "Lucas Mendes",  hoursSem: 20, readiness: 95, color: "#059669", bg: "#d1fae5",
    role: "Téc. Enf.", unit: "Cobertura Geral",
    // já escalado no QUI → conflito de horário com o furo de hoje
    weekSchedule: { SEG: null, TER: null, QUA: "07:00–19:00", QUI: "07:00–19:00", SEX: null, SAB: null, DOM: null },
  },
  {
    id: 105, name: "Mariana Silva", hoursSem: 36, readiness: 60, color: "#ea580c", bg: "#ffedd5",
    role: "Téc. Enf.", unit: "Cobertura Geral",
    weekSchedule: { SEG: "07:00–19:00", TER: null, QUA: null, QUI: null, SEX: null, SAB: null, DOM: null },
  },
];

// --- DADOS DO APP DO ENFERMEIRO (referência: Carla Matos, falta em QUI) ---
export const MOCK_WEEK_DATA = [
  { day: "SEG", h: 12 },
  { day: "TER", h: 0  },
  { day: "QUA", h: 12 },
  { day: "QUI", h: 0  },
  { day: "SEX", h: 0  },
  { day: "SAB", h: 0  },
  { day: "DOM", h: 0  },
];

export const MOCK_MY_SHIFTS = [
  { id: 1, date: "HOJE, 16 ABR", name: "Plantão Diurno · UTI-A", hours: "07:00 – 19:00", color: "#006035", today: true,  icon: "🟢", status: "confirmed", order: 1 },
  { id: 2, date: "SEX, 17 ABR",  name: "Plantão Diurno · UTI-A", hours: "07:00 – 19:00", color: "#2563eb", today: false, icon: "🔵", status: "confirmed", order: 3 },
  { id: 3, date: "SEG, 20 ABR",  name: "Folga Compensatória",    hours: "Dia livre",      color: "#7c3aed", today: false, icon: "🌙", status: "off",       order: 4 },
];
