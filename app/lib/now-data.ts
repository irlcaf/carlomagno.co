import type { Locale } from 'app/lib/translations';

const nowData = {
  en: {
    updatedAt: '2026-03-09',
    updatedLabel: 'March 9, 2026',
    interests: [
      'RTOS internals, firmware analysis, and exploit mechanics',
      'Drone autonomy, cyber-physical systems, and security at the firmware layer',
      'Security, intelligence, and software in critical industries',
    ],
    workingOn: [
      {
        title: 'Low-level systems and firmware',
        description:
          'Firmware unpacking and diffing, RTOS task scheduling and memory analysis, peripheral and bootloader reversing, and exploit development across the software-hardware boundary.',
      },
      {
        title: 'Cyber, intelligence, and software for critical industries',
        description:
          'Security architecture for industrial networks, operator-facing tooling, telemetry and intelligence pipelines, and secure software delivery for critical infrastructure environments across LATAM.',
      },
      {
        title: 'Autonomy and mission systems',
        description:
          'Terrain-aware simulation, mission modeling, path-generation algorithms, and autonomy-stack components for unmanned and cyber-physical systems.',
      },
    ],
  },
  es: {
    updatedAt: '2026-03-09',
    updatedLabel: '9 de marzo de 2026',
    interests: [
      'Internals de RTOS, análisis de firmware y mecánica de exploits',
      'Autonomía de drones, sistemas ciberfísicos y seguridad en la capa de firmware',
      'Seguridad, inteligencia y software en industrias críticas',
      'Empresas técnicas pequeñas construidas alrededor de software, ciberseguridad y sistemas',
    ],
    workingOn: [
      {
        title: 'Sistemas de bajo nivel y firmware',
        description:
          'Desempaquetado y comparación diferencial de firmware, planificación de tareas en RTOS y análisis de memoria, ingeniería inversa de periféricos y bootloaders, y desarrollo de exploits en la frontera entre software y hardware.',
      },
      {
        title: 'Ciberseguridad, inteligencia y software para industrias críticas',
        description:
          'Arquitectura de seguridad para redes industriales, herramientas para operadores, pipelines de telemetría e inteligencia y entrega segura de software para entornos de infraestructura crítica en toda LATAM.',
      },
      {
        title: 'Autonomía y sistemas de misión',
        description:
          'Simulación sensible al terreno, modelado de misiones, algoritmos de generación de trayectorias y componentes del stack de autonomía para sistemas no tripulados y ciberfísicos.',
      },
    ],
  },
  zh: {
    updatedAt: '2026-03-09',
    updatedLabel: '2026年3月9日',
    interests: [
      'RTOS 内部机制、固件分析与漏洞利用机理',
      '无人机自主、信息物理系统，以及固件层安全',
      '关键行业中的安全、情报与软件',
      '围绕深度软件、网络安全与系统能力建立的小型技术公司',
    ],
    workingOn: [
      {
        title: '底层系统与固件',
        description:
          '固件解包与差异比对、RTOS 任务调度与内存分析、外设与引导加载程序逆向，以及跨越软硬件边界的漏洞利用开发。',
      },
      {
        title: '关键行业中的安全、情报与软件',
        description:
          '面向工业网络的安全架构、面向操作人员的工具、遥测与情报管道，以及面向拉美关键基础设施环境的安全软件交付。',
      },
      {
        title: '自主性与任务系统',
        description:
          '面向无人系统与信息物理系统的地形感知仿真、任务建模、路径生成算法与自主系统栈组件。',
      },
    ],
  },
} as const;

export function getNowData(locale: Locale) {
  return nowData[locale] || nowData.en;
}
