import { buildLocalizedUrl, type Locale } from 'app/lib/url-translations';

type Example = {
  title: string;
  description: string;
};

type PracticeArea = {
  title: string;
  summary: string;
  points: string[];
  examples: Example[];
  links: { label: string; href: string }[];
};

type ServicesContent = {
  title: string;
  intro: string;
  selectedExamplesLabel: string;
  ctaText: string;
  ctaLinkLabel: string;
  practiceAreas: PracticeArea[];
};

export function getServicesContent(locale: Locale): ServicesContent {
  const blog = (slug?: string) => buildLocalizedUrl(locale, 'blog', slug);
  const contact = buildLocalizedUrl(locale, 'contact');
  const now = buildLocalizedUrl(locale, 'now');

  const content: Record<Locale, ServicesContent> = {
    en: {
      title: 'Areas of Work',
      intro:
        'This is the kind of work I repeatedly take on. It is not a product catalog or a fixed engagement menu.',
      selectedExamplesLabel: 'Selected examples',
      ctaText:
        'If your problem does not fit neatly into one of these buckets but still needs careful technical judgment, send context by email.',
      ctaLinkLabel: 'Open contact details',
      practiceAreas: [
        {
          title: 'Security Research & Secure Systems',
          summary:
            'Work that sits close to risk: vulnerability research, careful handling of sensitive data, and systems where threat models matter as much as code quality.',
          points: [
            'Secure communication flows and disclosure-friendly contact paths',
            'Email and messaging pipelines that separate ingestion, parsing, and audit trails',
            'Research-heavy implementation where attacker behavior shapes the design',
          ],
          examples: [
            {
              title: 'Secure Email Processing on AWS',
              description:
                'An event-driven pipeline for receiving, decrypting, sanitizing, classifying, and storing email data across AWS services and an auditable backend.',
            },
          ],
          links: [
            { label: 'Email pipeline notes', href: blog('aws') },
            { label: 'Contact', href: contact },
          ],
        },
        {
          title: 'Data Pipelines & Operational Tooling',
          summary:
            'I like messy data problems: legacy systems, inconsistent regional formats, manual reconciliation, and the operational work needed to make reporting trustworthy again.',
          points: [
            'Unifying data from brittle or duplicated sources',
            'Replacing manual scripts with maintained ingestion and reconciliation flows',
            'Building internal tools that make operational work visible and repeatable',
          ],
          examples: [
            {
              title: 'Data Pipeline Overhaul',
              description:
                'A brittle workflow became a maintained ingestion and reconciliation pipeline built for multi-source reporting and fewer manual interventions.',
            },
          ],
          links: [
            { label: 'Data pipeline overhaul', href: blog('data-pipeline-transformation') },
            { label: 'Recent writings', href: blog() },
          ],
        },
        {
          title: 'Applied Algorithms',
          summary:
            'This is the part of the work where off-the-shelf solutions stop being enough. Most often that means custom computer vision, performance-sensitive pipelines, or problem-specific modeling.',
          points: [
            'Industrial inspection and vision systems under real deployment constraints',
            'Performance work for compact models and edge execution',
            'Prototype-to-production engineering when the research path is still moving',
          ],
          examples: [
            {
              title: 'Vision Algorithms',
              description:
                'Computer vision work built around speed, compact models, and edge deployment under real operational constraints.',
            },
          ],
          links: [
            { label: 'Vision algorithms write-up', href: blog('vision-algorithms-multi-scale') },
            { label: 'Now', href: now },
          ],
        },
      ],
    },
    es: {
      title: 'Áreas de trabajo',
      intro:
        'Este es el tipo de trabajo que tomo una y otra vez. No es un catálogo de productos ni un menú fijo de servicios.',
      selectedExamplesLabel: 'Ejemplos seleccionados',
      ctaText:
        'Si tu problema no encaja del todo en una de estas áreas pero igual requiere criterio técnico serio, puedes enviarme contexto por correo.',
      ctaLinkLabel: 'Abrir datos de contacto',
      practiceAreas: [
        {
          title: 'Investigación en seguridad y sistemas seguros',
          summary:
            'Trabajo cerca del riesgo: investigación de vulnerabilidades, manejo cuidadoso de datos sensibles y sistemas donde el modelo de amenaza importa tanto como la calidad del código.',
          points: [
            'Flujos de comunicación seguros y canales de contacto pensados para divulgación responsable',
            'Pipelines de correo y mensajería que separan ingestión, parsing y trazabilidad',
            'Implementación guiada por investigación, donde el comportamiento del atacante cambia el diseño',
          ],
          examples: [
            {
              title: 'Procesamiento seguro de correo en AWS',
              description:
                'Un pipeline orientado a eventos para recibir, descifrar, sanear, clasificar y almacenar correo sobre servicios de AWS y un backend auditable.',
            },
          ],
          links: [
            { label: 'Notas sobre el pipeline de correo', href: blog('aws') },
            { label: 'Contacto', href: contact },
          ],
        },
        {
          title: 'Pipelines de datos y herramientas operativas',
          summary:
            'Me interesan los problemas de datos desordenados: sistemas legados, formatos regionales inconsistentes, conciliación manual y el trabajo operativo necesario para volver confiable el reporting.',
          points: [
            'Unificar datos que vienen de fuentes frágiles o duplicadas',
            'Reemplazar scripts manuales por flujos de ingestión y conciliación mantenidos',
            'Construir herramientas internas que vuelvan visible y repetible el trabajo operativo',
          ],
          examples: [
            {
              title: 'Reestructuración de pipeline de datos',
              description:
                'Un flujo frágil pasó a ser un pipeline mantenido de ingestión y conciliación, pensado para reporting multi-fuente y menos intervención manual.',
            },
          ],
          links: [
            {
              label: 'Reestructuración del pipeline de datos',
              href: blog('data-pipeline-transformation'),
            },
            { label: 'Escritos recientes', href: blog() },
          ],
        },
        {
          title: 'Algoritmos aplicados',
          summary:
            'Esta es la parte del trabajo donde lo estándar deja de alcanzar. Normalmente eso significa visión computacional a medida, pipelines sensibles al rendimiento o modelado específico al problema.',
          points: [
            'Sistemas de visión e inspección industrial bajo restricciones reales de despliegue',
            'Trabajo de rendimiento para modelos compactos y ejecución en edge',
            'Ingeniería de prototipo a producción cuando el camino de investigación todavía se está moviendo',
          ],
          examples: [
            {
              title: 'Algoritmos de visión',
              description:
                'Trabajo de visión computacional construido alrededor de velocidad, modelos compactos y despliegue en edge bajo restricciones operativas reales.',
            },
          ],
          links: [
            {
              label: 'Escrito sobre algoritmos de visión',
              href: blog('vision-algorithms-multi-scale'),
            },
            { label: 'Ahora', href: now },
          ],
        },
      ],
    },
    zh: {
      title: '工作领域',
      intro: '这些是我反复参与的工作类型。这里不是产品目录，也不是固定的服务菜单。',
      selectedExamplesLabel: '示例',
      ctaText:
        '如果你的问题不完全落在这些范围里，但仍然需要审慎的技术判断，可以通过邮件把背景发给我。',
      ctaLinkLabel: '查看联系方式',
      practiceAreas: [
        {
          title: '安全研究与安全系统',
          summary:
            '这类工作靠近风险本身: 漏洞研究、敏感数据的谨慎处理，以及威胁模型与代码质量同样重要的系统。',
          points: [
            '安全的通信流程与适合负责披露的联系渠道',
            '将接收、解析与审计轨迹分离的邮件和消息处理管线',
            '以研究为导向的实现方式, 由攻击者行为塑造设计',
          ],
          examples: [
            {
              title: 'AWS 上的安全邮件处理',
              description:
                '一个事件驱动的管线, 用于在 AWS 服务与可审计后端之间接收、解密、清洗、分类并存储邮件数据。',
            },
          ],
          links: [
            { label: '邮件管线笔记', href: blog('aws') },
            { label: '联系', href: contact },
          ],
        },
        {
          title: '数据管线与运营工具',
          summary:
            '我喜欢处理混乱的数据问题: 传统系统、不一致的区域格式、手工对账，以及让报表重新可信所需的运营工作。',
          points: [
            '整合来自脆弱或重复来源的数据',
            '用可维护的接入与对账流程替代手工脚本',
            '构建让运营工作可见、可重复的内部工具',
          ],
          examples: [
            {
              title: '数据管线重构',
              description:
                '把脆弱流程改造成可维护的接入与对账管线, 面向多源报表并减少人工介入。',
            },
          ],
          links: [
            { label: '数据管线重构', href: blog('data-pipeline-transformation') },
            { label: '近期文章', href: blog() },
          ],
        },
        {
          title: '应用算法',
          summary:
            '这部分工作通常出现在现成方案不再足够的时候。最常见的是定制计算机视觉、对性能敏感的管线，或针对具体问题的建模。',
          points: [
            '在真实部署约束下的工业检测与视觉系统',
            '面向紧凑模型与边缘执行的性能工作',
            '当研究路径仍在变化时，从原型走向生产的工程化',
          ],
          examples: [
            {
              title: '视觉算法',
              description:
                '围绕速度、紧凑模型与边缘部署构建的计算机视觉工作，面向真实运营约束。',
            },
          ],
          links: [
            { label: '视觉算法文章', href: blog('vision-algorithms-multi-scale') },
            { label: '现在', href: now },
          ],
        },
      ],
    },
  };

  return content[locale] || content.en;
}
