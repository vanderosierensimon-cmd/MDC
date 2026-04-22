'use client'

import { useState, useEffect, useRef } from 'react'
import './menu.css'

const TABS = [
  { id: 'boissons',      label: 'Boissons' },
  { id: 'bieres',        label: 'Bières' },
  { id: 'vins',          label: 'Vins' },
  { id: 'restauration',  label: 'Restauration' },
  { id: 'planches',      label: 'Planches & Tapas' },
  { id: 'desserts',      label: 'Desserts' },
  { id: 'chauds',        label: 'Boissons Chaudes' },
]

function Item({
  name, price, desc, note, fav, sup,
}: {
  name: React.ReactNode; price: string; desc?: string; note?: string; fav?: boolean; sup?: boolean
}) {
  const cls = ['item', fav && 'favorite', sup && 'supplement'].filter(Boolean).join(' ')
  return (
    <div className={cls}>
      <div className="item-left">
        <span className="item-name">{name}</span>
        {desc && <span className="item-desc">{desc}</span>}
        {note && <span className="item-note">{note}</span>}
      </div>
      <span className="item-price">{price}</span>
    </div>
  )
}

export default function CartePage() {
  const [activeTab, setActiveTab] = useState('boissons')
  const isScrollingTo = useRef(false)

  function scrollToSection(id: string) {
    const el = document.getElementById('tab-' + id)
    if (!el) return
    const nav = document.getElementById('menu-nav')
    const navBottom = nav?.getBoundingClientRect().bottom ?? 0
    const top = el.getBoundingClientRect().top + window.scrollY - navBottom - 8
    isScrollingTo.current = true
    setActiveTab(id)
    window.scrollTo({ top, behavior: 'smooth' })
    setTimeout(() => { isScrollingTo.current = false }, 800)
  }

  // Scroll active tab button into view in the nav bar
  useEffect(() => {
    const btn = document.querySelector<HTMLElement>(`#menu-nav [data-section="${activeTab}"]`)
    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeTab])

  // Update active tab while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.menu-section')
    const observer = new IntersectionObserver((entries) => {
      if (isScrollingTo.current) return
      const visible = entries.filter(e => e.isIntersecting)
      if (!visible.length) return
      visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      setActiveTab(visible[0].target.id.replace('tab-', ''))
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Fetch suggestions du jour from Supabase
  useEffect(() => {
    const URL  = 'https://aqcqfovvyliizfiavhur.supabase.co'
    const KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxY3Fmb3Z2eWxpaXpmaWF2aHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NjI4OTEsImV4cCI6MjA4NTMzODg5MX0.EMauvyJ5lXJmSWjFFMVQwv0LaTSI3A78sHU2DZIdn54'
    const LABELS: Record<string, string> = { entree: 'Entrée', plat: 'Plat', dessert: 'Dessert' }
    const ORDER:  Record<string, number> = { entree: 0, plat: 1, dessert: 2 }

    fetch(`${URL}/rest/v1/suggestions?select=*&order=type`, {
      headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
    })
      .then(r => r.json())
      .then((data: any[]) => {
        const block   = document.getElementById('tableau-noir')
        const content = document.getElementById('tableau-noir-content')
        if (!block || !content) return
        const actives = data
          .filter(s => s.actif)
          .sort((a, b) => {
            const d = (ORDER[a.type] ?? 0) - (ORDER[b.type] ?? 0)
            return d !== 0 ? d : parseFloat(a.prix) - parseFloat(b.prix)
          })
        if (!actives.length) { block.style.display = 'none'; return }
        content.innerHTML = actives.map(s => {
          const prix = parseFloat(s.prix).toFixed(2).replace('.', ',') + ' €'
          const desc = s.description ? `<span class="tn-desc">${s.description}</span>` : ''
          const rb   = s.en_rupture ? '<span class="tn-rupture-badge">Rupture de stock</span>' : ''
          return `<div class="tn-item${s.en_rupture ? ' tn-rupture' : ''}">
            <div class="tn-left">
              <span class="tn-badge tn-${s.type}">${LABELS[s.type] || s.type}</span>
              <span class="tn-name">${s.nom}</span>${desc}${rb}
            </div>
            <span class="tn-price">${prix}</span>
          </div>`
        }).join('')
      })
      .catch(() => {
        const b = document.getElementById('tableau-noir')
        if (b) b.style.display = 'none'
      })
  }, [])

  return (
    <>
      {/* Spacer for fixed site header */}
      <div className="h-28 bg-canal-navy" />

      {/* Sticky nav tabs */}
      <nav id="menu-nav" className="menu-nav sticky top-[88px] z-30">
        {TABS.map(tab => (
          <button
            key={tab.id}
            data-section={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => scrollToSection(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="menu-carte">

        {/* ── BOISSONS ── */}
        <section className="menu-section" id="tab-boissons">
          <h2 className="page-title">Nos Boissons</h2>

          <div className="category">
            <div className="category-title">Softs <span style={{ fontWeight: 400, fontSize: 11, opacity: 0.8, textTransform: 'none' }}>(20cl)</span></div>
            <Item name="Pepsi"                        price="2,50 €" />
            <Item name="Pepsi Max"                    price="2,50 €" />
            <Item name="Fanta"                        price="2,50 €" />
            <Item name="Sprite"                       price="2,50 €" />
            <Item name="Lipton Ice Tea Pêche"         price="2,50 €" />
            <Item name="Lipton Ice Tea Pétillant"     price="2,50 €" />
            <Item name="Tonissteiner Citron"          price="2,50 €" />
            <Item name="Jus de fruits"                price="2,80 €" desc="Orange, ananas, pomme, pomme-cerise, pamplemousse" />
            <Item name="Bliss"                        price="2,80 €" desc="Tonic, Agrumes, Pink, Lemon" />
            <Item name="Red Bull (33cl)"              price="3,50 €" />
            <Item name="Supplément sirop"             price="+ 0,50 €" sup />
            <div className="category-subtitle">Eaux</div>
            <Item name="Eau plate ou pétillante ¼ Chaudfontaine" price="2,50 €" />
            <Item name="Eau plate ou pétillante 1L Ordal"        price="6,00 €" />
          </div>

          <div className="category">
            <div className="category-title">Apéritifs</div>
            <Item name="Ricard"                       price="3,50 €" />
            <Item name="Kir vin blanc"                price="4,00 €" />
            <Item name="Martini blanc / rouge"        price="4,00 €" />
            <Item name="Porto blanc / rouge"          price="4,00 €" />
            <Item name="Pineau"                       price="4,00 €" />
            <Item name="Picon bière 33cl"             price="4,00 €" />
            <Item name="Coupe de blanc pétillant"     price="6,00 €" />
            <Item name="Martini Bellini"              price="6,00 €" />
            <Item name="Picon vin blanc"              price="6,00 €" />
            <Item name="Kir pétillant"                price="7,00 €" desc="Cassis, violette, mûre, pêche" />
            <Item name="Aperol Spritz"                price="7,00 €" />
            <Item name="Limoncello Spritz"            price="7,00 €" />
            <Item name="Spritz Saint-Germain"         price="8,00 €" fav />
            <Item name="Coupe de champagne"           price="9,00 €" />
          </div>

          <div className="category">
            <div className="category-title">Alcools</div>
            <Item name="Vodka rouge / blanche"        price="5,00 €" />
            <Item name="Gin"                          price="5,00 €" />
            <Item name="Rhum brun / blanc"            price="5,00 €" />
            <Item name="Pisang / Campari / Pasoa"     price="5,00 €" />
            <Item name="J&B Whisky"                   price="5,00 €" />
            <Item name="Jack Daniel's"                price="6,00 €" />
            <Item name="Rumbullion"                   price="7,00 €" />
            <Item name="Diplomatico"                  price="7,00 €" />
            <div className="item" style={{ borderBottom: 'none' }}>
              <div className="item-left">
                <span className="item-note">Whisky Coca, Gin Tonic, etc. servis avec le soft à côté (soft en supplément)</span>
              </div>
            </div>
          </div>

          <div className="category">
            <div className="category-title">Digestifs</div>
            <Item name="Get 27 / Get 31"   price="7,00 €" />
            <Item name="Limoncello"        price="7,00 €" />
            <Item name="Baileys"           price="7,00 €" />
            <Item name="Amaretto"          price="7,00 €" />
            <Item name="Cointreau"         price="7,00 €" />
            <Item name="Eau de Villée"     price="7,00 €" />
            <Item name="Poire Williams"    price="7,00 €" />
            <Item name="Cognac"            price="7,00 €" />
            <Item name="Grand Marnier"     price="7,00 €" />
            <Item name="Calvados"          price="7,00 €" />
            <Item name="Armagnac"          price="7,00 €" />
          </div>
        </section>

        {/* ── BIÈRES ── */}
        <section className="menu-section" id="tab-bieres">
          <h2 className="page-title">Nos Bières</h2>

          <div className="category">
            <div className="category-title">Bières Pression</div>
            <table className="beer-table">
              <thead>
                <tr><th></th><th>25cl</th><th>33cl</th><th>50cl</th></tr>
              </thead>
              <tbody>
                <tr className="favorite"><td>Paix Dieu 10°</td>           <td className="price">4,50 €</td><td className="price">6,00 €</td><td className="price">8,00 €</td></tr>
                <tr><td>Bon Secours Prestige 9°</td>                       <td className="price">4,50 €</td><td className="price">6,00 €</td><td className="price">8,00 €</td></tr>
                <tr><td>Triple Karmeliet 8,4°</td>                         <td className="price">4,50 €</td><td className="price">6,00 €</td><td className="price">8,00 €</td></tr>
                <tr><td>Kasteel Rouge 8°</td>                              <td className="price">4,50 €</td><td className="price">6,00 €</td><td className="price">8,00 €</td></tr>
                <tr><td>Paix Dieu Nova 6°</td>                             <td className="price">4,00 €</td><td className="price">5,00 €</td><td className="price">7,00 €</td></tr>
                <tr><td>Leffe Blonde 6,6°</td>                             <td className="price">4,00 €</td><td className="price">5,00 €</td><td className="price">7,00 €</td></tr>
                <tr><td>Moinette 8,5°</td>                                 <td className="price">3,50 €</td><td className="price">4,50 €</td><td className="price">6,50 €</td></tr>
                <tr><td>Jupiler 5,2°</td>                                  <td className="price">2,40 €</td><td className="price">3,40 €</td><td className="price">4,40 €</td></tr>
                <tr><td>Monaco, Mazout, Panaché, Tango</td>                <td className="price">3,00 €</td><td className="price">4,00 €</td><td className="price">5,00 €</td></tr>
              </tbody>
            </table>
            <div className="item" style={{ borderTop: '1px solid #f0ece3' }}>
              <div className="item-left"><span className="item-note">Bière du moment — voir tableau des suggestions</span></div>
            </div>
          </div>

          <div className="category">
            <div className="category-title">Bières Bouteilles, Trappistes &amp; Régionale <span style={{ fontWeight: 400, fontSize: 11, opacity: 0.8, textTransform: 'none' }}>(33cl)</span></div>
            <Item name="Jupiler NA 0° (25cl)"                       price="3,00 €" />
            <Item name="Rodenbach 5,2° (25cl)"                      price="4,00 €" />
            <Item name="Hoegaarden Blanche / Rosé 3° (25cl)"        price="4,00 €" />
            <Item name="Maes Citron (25cl)"                         price="4,00 €" />
            <Item name="Kriek 5,2° (25cl)"                          price="3,50 €" />
            <Item name="Leffe Brune 6,5°"                           price="5,00 €" />
            <Item name="Bush Ambrée 12°"                            price="5,00 €" />
            <Item name="Omer 8°"                                    price="5,00 €" />
            <Item name="Duvel Blonde 8,5°"                          price="5,00 €" />
            <Item name="Chouffe Blonde 8°"                          price="5,00 €" />
            <Item name="Saint Feuillien Blonde 7,5°"                price="5,00 €" />
            <Item name="Desperados 5,9°"                            price="5,00 €" />
            <Item name="Pêche Mel Bush 8,5°"                        price="5,00 €" />
            <Item name="Fram'Bush 8,5°"                             price="5,00 €" />
            <Item name="Chimay Rouge 7°"                            price="5,00 €" />
            <Item name="Chimay Bleue 9°"                            price="5,00 €" />
            <Item name="Orval 6,2°"                                 price="5,00 €" />
            <Item name="Westmalle Triple 9,5°"                      price="5,00 €" />
            <Item name="Kasteel Tropicale 7°"                       price="5,00 €" />
          </div>
        </section>

        {/* ── VINS ── */}
        <section className="menu-section" id="tab-vins">
          <h2 className="page-title">Nos Vins</h2>

          <div className="category">
            <div className="category-title">Vins au Verre</div>
            <Item name="Verre de vin (Pays d'Oc)" price="4,00 €" desc="Rouge, blanc ou rosé" />
            <Item name="¼ Pays d'Oc"              price="5,00 €" />
            <Item name="½ Pays d'Oc"              price="9,00 €" />
          </div>
          <div className="category">
            <div className="category-title">Vins Rouges (75cl)</div>
            <Item name="Côtes du Rhône" price="22,00 €" />
            <Item name="Saint Émilion"  price="25,00 €" />
          </div>
          <div className="category">
            <div className="category-title">Vins Blancs (75cl)</div>
            <Item name="Chardonnay"    price="20,00 €" />
            <Item name="Puits d'Amour" price="20,00 €" desc="Sucré" />
          </div>
          <div className="category">
            <div className="category-title">Vin Rosé (75cl)</div>
            <Item name="Rosé Pays d'Oc" price="18,00 €" />
          </div>
          <div className="category">
            <div className="category-title">Bulles &amp; Champagne</div>
            <Item name="Martini Bellini (bouteille)" price="32,00 €" />
            <Item name="Cava (bouteille)"            price="40,00 €" />
            <Item name="Champagne (bouteille)"       price="60,00 €" />
          </div>
        </section>

        {/* ── RESTAURATION ── */}
        <section className="menu-section" id="tab-restauration">
          <h2 className="page-title">Restauration</h2>
          <p className="page-hours">Tous les jours 12h–14h &bull; Jeudi, vendredi, samedi 19h–21h</p>

          <div className="category">
            <div className="category-title">Plats Principaux</div>
            <Item name="Burger du Canal" price="18,00 €" fav
              desc="Steak 180g, cheddar, pickles concombre, oignons frais et frits, sauce secrète maison — option double steak +3€" />
            <Item name="Pavé de boeuf (250gr)" price="22,00 €"
              desc="Sauce maison au choix : maroilles, champignons, poivre, béarnaise, café de paris ou mayonnaise" />
            <Item name="Filet américain"   price="18,00 €" />
            <Item name="Tartare de boeuf" price="18,00 €" />
            <Item name="Pâtes forestière" price="16,00 €" fav />
            <Item
              name={<>Rigatoni au pesto de légumes <span className="veggie-badge">V</span></>}
              price="16,00 €"
              desc="Aubergines, courgettes, parmesan, poivrons"
            />
            <Item name="Poisson du jour (selon arrivage)" price="22,00 €" />
          </div>

          <div className="accomp-box">
            <div className="accomp-title">Servi avec accompagnement au choix et crudités</div>
            <div className="accomp-items">Frites maison &bull; Croquette de pomme de terre &bull; Riz &bull; Pâtes</div>
            <div className="accomp-note">* Accompagnement en supplément + 2,50 €</div>
          </div>

          <div className="category">
            <div className="category-title">Menu Enfant</div>
            <Item name="Menu complet" price="9,90 €"
              desc="Au choix : Jambon · Nuggets · Filet américain · Steak haché — servi avec frites, crudités et une boule de glace au choix" />
          </div>

          <div className="tableau-noir" id="tableau-noir">
            <div className="tableau-noir-title">Suggestions du jour</div>
            <hr className="tableau-noir-divider" />
            <div id="tableau-noir-content">
              <p style={{ fontFamily: 'Caveat, cursive', color: 'rgba(255,255,255,0.45)', fontSize: 18, textAlign: 'center', padding: '8px 0 4px' }}>Chargement…</p>
            </div>
          </div>
        </section>

        {/* ── PLANCHES & TAPAS ── */}
        <section className="menu-section" id="tab-planches">
          <h2 className="page-title">Planches &amp; Tapas</h2>
          <p className="page-hours">Tous les jours à partir de 17h</p>

          <div className="category">
            <div className="category-title">Planches Apéritives</div>
            <Item name="Grande planche mixte" price="18,00 €" fav />
            <Item name="Petite planche mixte" price="14,00 €" />
            <Item name="Planche fromage"       price="12,00 €" />
            <Item name="Planche charcuterie"   price="11,00 €" />
            <Item name="Supplément pain"       price="+ 1,00 €" sup />
          </div>

          <div className="category">
            <div className="category-title">Tapas &amp; Snacks</div>
            <Item name="Chips"                                    price="1,50 €" />
            <Item name="Frites maison"                            price="4,00 €" />
            <Item name="Supplément sauce maison cheddar ou maroilles" price="+ 2,00 €" sup />
            <Item name="Mozzarella Fingers (6 pièces)"            price="5,00 €" />
            <Item name="Calamars frits (6 pièces)"                price="5,00 €" />
            <Item name="Tempura de crevettes (6 pièces)"          price="6,00 €" />
            <Item name="Saucisson sec (nature ou noisette)"       price="6,50 €" />
            <Item name="Wings (5 pièces)"                         price="7,00 €" />
            <Item name="Tenders (5 pièces)"                       price="7,00 €" />
            <Item name="Trio de tapas au choix"                   price="16,00 €" fav />
          </div>
        </section>

        {/* ── DESSERTS ── */}
        <section className="menu-section" id="tab-desserts">
          <h2 className="page-title">Nos Desserts</h2>

          <div className="category">
            <div className="category-title">Coupes Glacées</div>
            <Item name="Dame blanche"  price="7,00 €" fav />
            <Item name="Dame noire"    price="7,00 €" />
            <Item name="Brésilienne"   price="7,00 €" />
            <Item name="Pistachio"     price="7,00 €" desc="Pistache, chocolat, vanille" />
            <Item name="Colonel"       price="8,00 €" desc="Sorbet citron & vodka" />
            <Item name="Café liégeois" price="7,00 €" />
            <Item name="Nougat glacé"  price="6,00 €" />
          </div>

          <div className="category">
            <div className="category-title">Desserts</div>
            <Item name="Tarte maison"                       price="7,00 €" />
            <Item name="Baba au Rhum"                       price="8,00 €" />
            <Item name="Crème brûlée maison"                price="6,00 €" />
            <Item name="Tiramisu Napolitain maison"         price="8,00 €" fav />
            <Item name="Brioche perdue caramel beurre salé" price="8,00 €" />
          </div>

          <div className="category">
            <div className="category-title">Crêpes <span style={{ fontWeight: 400, fontSize: 11, opacity: 0.8 }}>jusqu&apos;à 18h</span></div>
            <Item name="Sucre"                price="4,00 €" />
            <Item name="Nutella"              price="4,50 €" />
            <Item name="Mikado"               price="6,00 €" />
            <Item name="Supplément Chantilly" price="+ 0,50 €" sup />
          </div>

          <div className="category">
            <div className="category-title">Cafés Gourmands</div>
            <Item name="Café gourmand"  price="9,00 €" />
            <Item name="Thé gourmand"   price="9,50 €" />
            <Item name="Irish gourmand" price="14,00 €" fav />
          </div>
        </section>

        {/* ── BOISSONS CHAUDES ── */}
        <section className="menu-section" id="tab-chauds">
          <h2 className="page-title">Boissons Chaudes</h2>

          <div className="category">
            <div className="category-title">Cafés</div>
            <Item name="Expresso / Décaféiné"     price="2,20 €" />
            <Item name="Café allongé / Décaféiné" price="2,70 €" />
            <Item name="Grand café"               price="3,20 €" />
            <Item name="Double expresso"          price="3,00 €" />
            <Item name="Cappuccino"               price="3,50 €" />
          </div>

          <div className="category">
            <div className="category-title">Boissons Chaudes</div>
            <Item name="Chocolat chaud"    price="3,00 €" />
            <Item name="Chocolat viennois" price="3,50 €" />
            <Item name="Thé"               price="2,50 €" desc="Menthe, citron, fruits rouges" />
          </div>

          <div className="category">
            <div className="category-title">Cafés Spéciaux</div>
            <Item name="Irish Coffee"                     price="8,00 €" fav />
            <Item name="Irish Coffee XL"                  price="12,00 €" />
            <Item name="Jamaïcan Coffee"                  price="8,50 €" />
            <Item name="French Coffee"                    price="8,50 €" />
            <Item name="Baileys Coffee"                   price="8,50 €" />
            <Item name="Italian Coffee"                   price="8,50 €" />
            <Item name="Cointreau / Grand Marnier Coffee" price="7,50 €" />
          </div>
        </section>

        <div className="legal-mention">
          L&apos;abus d&apos;alcool est dangereux pour la santé. À consommer avec modération.
        </div>
      </div>
    </>
  )
}
