# TODO — Modifications SEO/GEO (à vérifier et déployer)

## ✅ Déjà fait (session précédente)

1. **Schema.org JSON-LD** — ajouté dans `app/layout.tsx`
   - Type `Restaurant` avec adresse, téléphone, horaires, GPS, images, réseaux sociaux
   - Injecté dans `<head>` via `<script type="application/ld+json">`

2. **H2 geo-ciblé** — modifié dans `app/page.tsx`
   - "L'esprit du lieu" → "L'esprit du lieu à Leers-Nord"

3. **Sitemap** — créé `app/sitemap.ts`
   - 5 URLs déclarées (/, /carte, /histoire, /activites, /contact)
   - Accessible sur `/sitemap.xml` après déploiement

---

## 🔲 Reste à faire (priorité 2)

4. **Soumettre le sitemap dans Google Search Console**
   - URL : `https://lamaisonducanal.be/sitemap.xml`

5. **Intégrer un système de réservation en ligne**
   - Options : TheFork, Zenchef
   - Remplacer/compléter le CTA `tel:` par un lien de résa

6. ✅ **Lier les témoignages aux avis Google**
   - Lien "Voir tous les avis sur Google" ajouté sous le carousel dans `ReviewsCarousel.tsx`
   - URL : Google Maps search (à remplacer par l'URL exacte de la fiche GBP une fois créée)

7. **Google Business Profile**
   - Créer/optimiser la fiche avec photos, horaires, posts réguliers

8. **Vérifier cohérence NAP** sur TripAdvisor, Pages Jaunes BE, Yelp
   - NAP = Nom / Adresse / Téléphone identiques partout
