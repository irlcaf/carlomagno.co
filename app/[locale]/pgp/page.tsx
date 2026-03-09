import type { Metadata } from 'next';
import { TrackedAnchor } from 'app/components/analytics/tracked-link';
import { pgp } from 'app/lib/pgp';
import type { Locale } from 'app/lib/translations';
import { buildLocalizedUrl } from 'app/lib/url-translations';
import { baseUrl } from 'app/sitemap';

const pgpCopy = {
  en: {
    title: 'PGP',
    description: 'How to use PGP encryption for secure communications.',
    quickStart: 'Quick Start',
    downloadKey: 'Download my public key',
    verifyFingerprint: 'Verify that the fingerprint matches the one shown below',
    importKey: 'Import the key into your PGP software',
    composeMessage: 'Compose and encrypt your message',
    sendTo: 'Send to',
    fingerprint: 'Fingerprint',
    fingerprintLabel: 'Public key fingerprint',
    whenToUse: 'When to use it',
    whenToUseLead:
      'Use PGP when the email contains sensitive information that should not travel in plain text. The usual cases are:',
    useCases: [
      'Security vulnerability reports',
      'Confidential project discussions',
      'Sensitive operational details',
      'Private business communications',
    ],
  },
  es: {
    title: 'PGP',
    description: 'Cómo usar cifrado PGP para comunicación segura.',
    quickStart: 'Inicio rápido',
    downloadKey: 'Descargar mi clave pública',
    verifyFingerprint: 'Verifica que la huella coincida con la que aparece abajo',
    importKey: 'Importa la clave en tu software PGP',
    composeMessage: 'Redacta y cifra tu mensaje',
    sendTo: 'Enviar a',
    fingerprint: 'Huella',
    fingerprintLabel: 'Huella de la clave pública',
    whenToUse: 'Cuándo usarlo',
    whenToUseLead:
      'Usa PGP cuando el correo contenga información sensible que no deba viajar en texto plano. Los casos típicos son:',
    useCases: [
      'Reportes de vulnerabilidades de seguridad',
      'Conversaciones confidenciales sobre proyectos',
      'Detalles operativos sensibles',
      'Comunicaciones privadas de negocio',
    ],
  },
  zh: {
    title: 'PGP',
    description: '如何使用 PGP 加密进行安全通信。',
    quickStart: '快速开始',
    downloadKey: '下载我的公钥',
    verifyFingerprint: '确认指纹与下方显示的一致',
    importKey: '将密钥导入你的 PGP 软件',
    composeMessage: '撰写并加密你的消息',
    sendTo: '发送至',
    fingerprint: '指纹',
    fingerprintLabel: '公钥指纹',
    whenToUse: '何时使用',
    whenToUseLead:
      '当邮件包含不应以明文传输的敏感信息时，请使用 PGP。常见场景包括：',
    useCases: [
      '安全漏洞报告',
      '保密项目沟通',
      '敏感运营细节',
      '私人商业通信',
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = pgpCopy[locale as Locale] || pgpCopy.en;
  const canonicalPath = buildLocalizedUrl(locale as Locale, 'pgp');
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}${buildLocalizedUrl('en', 'pgp')}`,
        es: `${baseUrl}${buildLocalizedUrl('es', 'pgp')}`,
        zh: `${baseUrl}${buildLocalizedUrl('zh', 'pgp')}`,
        'x-default': `${baseUrl}${buildLocalizedUrl('en', 'pgp')}`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      siteName: 'Carlomagno',
      type: 'website',
    },
  };
}

export default async function PGPPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const copy = pgpCopy[locale as Locale] || pgpCopy.en;
  
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tighter mb-8">{copy.title}</h1>
      
      <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">{copy.quickStart}</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <TrackedAnchor
              href={pgp.publicKeyPath}
              eventName="pgp_download"
              eventParams={{ site: 'carlomagno', locale, target: 'pgp_page' }}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {copy.downloadKey}
            </TrackedAnchor>
          </li>
          <li>{copy.verifyFingerprint}</li>
          <li>{copy.importKey}</li>
          <li>{copy.composeMessage}</li>
          <li>{copy.sendTo}: <strong>{pgp.email}</strong></li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mb-4">{copy.fingerprint}</h2>
      
      <div className="bg-neutral-50 dark:bg-neutral-950 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
        <p className="mb-2"><strong>{copy.fingerprintLabel}:</strong></p>
        <p className="text-xs">{pgp.fingerprint}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">{copy.whenToUse}</h2>
      
      <p className="mb-4">
        {copy.whenToUseLead}
      </p>
      
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {copy.useCases.map((useCase) => (
          <li key={useCase}>{useCase}</li>
        ))}
      </ul>

    </section>
  );
}
