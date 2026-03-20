import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité – Application Planning',
  description: 'Politique de confidentialité de l\'application Planning de La Maison du Canal.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
      <p className="text-sm text-gray-500 mb-10">Application Planning – La Maison du Canal · Dernière mise à jour : mars 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Responsable du traitement</h2>
        <p className="text-gray-700">
          La Maison du Canal, Leers-Nord, Belgique.<br />
          Contact : <a href="mailto:info@lamaisonducanal.be" className="underline">info@lamaisonducanal.be</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Données collectées</h2>
        <p className="text-gray-700 mb-2">L'application collecte uniquement les données nécessaires à la gestion du personnel :</p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Nom, prénom et adresse email (identification)</li>
          <li>Mot de passe (stocké de manière chiffrée)</li>
          <li>Rôle et fonction au sein de l'établissement</li>
          <li>Horaires de travail et pointages</li>
          <li>Messages échangés via la messagerie interne</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Finalité du traitement</h2>
        <p className="text-gray-700">
          Les données sont utilisées exclusivement pour la gestion interne du personnel de La Maison du Canal : planification des horaires, suivi des présences, communication interne et conformité aux obligations légales (ONSS/Dimona).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Accès aux données</h2>
        <p className="text-gray-700">
          Seuls les responsables de l'établissement (managers et administrateurs) ont accès aux données du personnel. Les employés n'ont accès qu'à leurs propres données. Aucune donnée n'est partagée avec des tiers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Hébergement</h2>
        <p className="text-gray-700">
          Les données sont hébergées sur Supabase (infrastructure sécurisée basée en Europe) et ne quittent pas le territoire de l'Union Européenne.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Durée de conservation</h2>
        <p className="text-gray-700">
          Les données sont conservées pendant la durée du contrat de travail, puis supprimées dans un délai maximum de 12 mois après la fin de la collaboration.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Vos droits</h2>
        <p className="text-gray-700">
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <a href="mailto:info@lamaisonducanal.be" className="underline">info@lamaisonducanal.be</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Sécurité</h2>
        <p className="text-gray-700">
          L'accès à l'application est protégé par authentification. Les communications sont chiffrées via HTTPS. Les mots de passe sont stockés de manière hachée et ne sont jamais accessibles en clair.
        </p>
      </section>
    </div>
  )
}
