'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Tab = 'restauration' | 'boissons' | 'bieres' | 'vins' | 'desserts' | 'chauds'

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: 'restauration', label: 'Restauration', emoji: '🍽️' },
  { id: 'boissons', label: 'Boissons', emoji: '🥤' },
  { id: 'bieres', label: 'Bières', emoji: '🍺' },
  { id: 'vins', label: 'Vins', emoji: '🍷' },
  { id: 'desserts', label: 'Desserts', emoji: '🍨' },
  { id: 'chauds', label: 'Boissons Chaudes', emoji: '☕' },
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold text-canal-navy uppercase tracking-wide">{children}</h3>
      <div className="mt-1 h-0.5 w-10 bg-canal-gold rounded-full" />
    </div>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="text-sm font-semibold text-canal-slate uppercase tracking-wider mt-5 mb-3">{children}</h4>
}

function Item({ name, price, desc, note }: { name: string; price: string; desc?: string; note?: string }) {
  return (
    <div className="py-2 border-b border-canal-sand/60 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-canal-charcoal text-sm leading-snug">{name}</span>
        <span className="text-canal-gold font-semibold text-sm whitespace-nowrap flex-shrink-0">{price}</span>
      </div>
      {desc && <p className="text-xs text-canal-slate mt-0.5">{desc}</p>}
      {note && <p className="text-xs italic text-canal-slate/80 mt-0.5">{note}</p>}
    </div>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-canal-sand/40 ${className}`}>
      {children}
    </div>
  )
}

function RestaurationType() {
  return (
    <div className="space-y-6">
      <Card>
        <SectionTitle>Plats Principaux</SectionTitle>
        <p className="text-xs text-canal-slate mb-4 italic">Servis avec frites et crudités</p>
        <div>
          <div className="py-2 border-b border-canal-sand/60">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-canal-charcoal text-sm leading-snug">Pavé de boeuf (250gr)</span>
              <span className="text-canal-gold font-semibold text-sm whitespace-nowrap">22,00 €</span>
            </div>
            <p className="text-xs text-canal-slate mt-0.5">Sauce au choix : maroilles, champignons, poivre ou béarnaise</p>
          </div>
          <Item name="Filet américain" price="18,00 €" />
          <Item name="Tartare de boeuf" price="18,00 €" />
          <Item name="Croquettes fromages (3 pièces)" price="16,00 €" />
          <Item name="Croquettes crevettes (3 pièces)" price="18,00 €" />
          <Item name="Carpaccio de boeuf" price="16,00 €" />
          <Item name="Croque-monsieur" price="12,00 €" />
          <div className="py-2 border-b border-canal-sand/60">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-canal-charcoal text-sm leading-snug">Tartare de saumon</span>
              <span className="text-canal-gold font-semibold text-sm whitespace-nowrap">20,00 €</span>
            </div>
            <p className="text-xs text-canal-slate mt-0.5">Servi avec pâtes au pesto vert</p>
          </div>
          <Item name="Supplément sauce" price="+ 2,50 €" />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <SectionTitle>Planches Apéritives</SectionTitle>
          <Item name="Grande planche mixte" price="18,00 €" />
          <Item name="Petite planche mixte" price="14,00 €" />
          <Item name="Planche fromage" price="12,00 €" />
          <Item name="Planche charcuterie" price="11,00 €" />
          <Item name="Saucisson sec (nature ou noisette)" price="6,50 €" />
          <Item name="Supplément pain" price="+ 1,00 €" />
        </Card>

        <Card>
          <SectionTitle>Tapas & Snacks</SectionTitle>
          <Item name="Mozzarella Fingers (6 pièces)" price="5,00 €" />
          <Item name="Calamars frits (6 pièces)" price="5,00 €" />
          <Item name="Tempura de crevettes (6 pièces)" price="6,00 €" />
          <Item name="Wings (5 pièces)" price="7,00 €" />
          <Item name="Tenders (5 pièces)" price="7,00 €" />
          <Item name="Trio de tapas au choix" price="16,00 €" />
          <Item name="Chips" price="1,50 €" />
          <Item name="Supplément frites" price="+ 2,50 €" />
          <Item name="Supplément pain" price="+ 1,00 €" />
        </Card>
      </div>

      <Card className="bg-canal-navy text-white border-0">
        <SectionTitle>
          <span className="text-white">Menu Enfant</span>
        </SectionTitle>
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <span className="text-white/90 text-sm font-semibold">Menu complet</span>
          <span className="text-canal-gold font-bold text-base">9,90 €</span>
        </div>
        <p className="text-white/70 text-xs">Au choix : Jambon • Nuggets • Filet américain • Steak haché</p>
        <p className="text-white/70 text-xs mt-1">Servi avec frites et crudités + une boule de glace au choix</p>
      </Card>
    </div>
  )
}

function Boissons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <SectionTitle>Softs</SectionTitle>
        <Item name="Jus de fruits (orange, ananas, pomme, pomme-cerise, abricot, pamplemousse)" price="2,80 €" />
        <Item name="ACE (orange-tomate)" price="2,80 €" />
        <Item name="Pepsi" price="2,80 €" />
        <Item name="Pepsi Max" price="2,80 €" />
        <Item name="Fanta" price="2,80 €" />
        <Item name="Sprite" price="2,80 €" />
        <Item name="Fuze Tea Pétillant" price="2,80 €" />
        <Item name="Fuze Tea Pêche" price="2,80 €" />
        <Item name="Tonissteiner Citron" price="2,80 €" />
        <Item name="Bliss (Tonic, Agrumes, Pink, Lemon)" price="2,80 €" />
        <Item name="Red Bull" price="3,00 €" />
        <Item name="Supplément sirop" price="+ 0,50 €" />
        <SubTitle>Eaux</SubTitle>
        <Item name="Eau plate ou pétillante ¼" price="2,50 €" />
        <Item name="Eau plate ou pétillante ½" price="3,50 €" />
        <Item name="Eau plate ou pétillante 1L" price="6,00 €" />
      </Card>

      <div className="space-y-6">
        <Card>
          <SectionTitle>Apéritifs</SectionTitle>
          <Item name="Kir vin blanc" price="4,00 €" />
          <Item name="Kir pétillant" price="7,00 €" desc="Cassis, violette, mûre, pêche" />
          <Item name="Coupe de blanc pétillant" price="6,00 €" />
          <Item name="Coupe de champagne" price="9,00 €" />
          <Item name="Aperol Spritz" price="7,00 €" />
          <Item name="Martini blanc / rouge" price="4,00 €" />
          <Item name="Martini Bellini" price="6,00 €" />
          <Item name="Porto blanc / rouge" price="4,00 €" />
          <Item name="Pineau" price="4,00 €" />
          <Item name="Ricard" price="3,50 €" />
          <Item name="Picon vin blanc" price="6,00 €" />
          <Item name="Picon bière 33cl" price="4,00 €" />
        </Card>

        <Card>
          <SectionTitle>Alcools</SectionTitle>
          <Item name="Vodka rouge / blanche" price="6,00 €" />
          <Item name="Gin" price="6,00 €" />
          <Item name="Rhum brun / blanc" price="6,00 €" />
          <Item name="Pisang / Campari / Pasoa" price="6,00 €" />
          <Item name="JB Whisky" price="6,00 €" />
          <Item name="Jack Daniel's" price="6,00 €" />
          <Item name="Shooter" price="3,00 €" note="Whisky Coca, Gin Tonic, etc. servis avec le soft à côté" />
          <SubTitle>Rhums & Whiskys Premium</SubTitle>
          <Item name="Rumbullion" price="7,00 €" />
          <Item name="Diplomatico" price="7,00 €" />
        </Card>
      </div>
    </div>
  )
}

function Bieres() {
  const pression = [
    { name: 'Paix Dieu 10°', p25: '4,00 €', p33: '5,00 €', p50: '7,00 €', featured: true },
    { name: 'Bon Secours Prestige 9°', p25: '4,00 €', p33: '5,00 €', p50: '7,00 €', featured: true },
    { name: 'Triple Karmeliet 8,4°', p25: '4,00 €', p33: '5,00 €', p50: '7,00 €' },
    { name: 'Kasteel Rouge 8°', p25: '3,50 €', p33: '4,50 €', p50: '6,50 €' },
    { name: 'Leffe Blonde 6,6°', p25: '3,50 €', p33: '4,50 €', p50: '6,50 €' },
    { name: 'Moinette 8,5°', p25: '3,50 €', p33: '4,50 €', p50: '6,50 €' },
    { name: 'Jupiler 5,2°', p25: '2,40 €', p33: '3,40 €', p50: '4,40 €' },
    { name: 'Monaco, Mazout, Panaché, Tango', p25: '3,00 €', p33: '4,00 €', p50: '5,00 €' },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <SectionTitle>Bières Pression</SectionTitle>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-canal-sand">
                <th className="text-left py-2 font-semibold text-canal-navy">Bière</th>
                <th className="text-right py-2 font-semibold text-canal-slate w-16">25cl</th>
                <th className="text-right py-2 font-semibold text-canal-slate w-16">33cl</th>
                <th className="text-right py-2 font-semibold text-canal-slate w-16">50cl</th>
              </tr>
            </thead>
            <tbody>
              {pression.map((b) => (
                <tr
                  key={b.name}
                  className={`border-b border-canal-sand/60 last:border-0 ${b.featured ? 'bg-canal-gold/5' : ''}`}
                >
                  <td className={`py-2.5 pr-4 ${b.featured ? 'font-semibold text-canal-navy' : 'text-canal-charcoal'}`}>
                    {b.name}
                  </td>
                  <td className="text-right py-2.5 text-canal-gold font-medium">{b.p25}</td>
                  <td className="text-right py-2.5 text-canal-gold font-medium">{b.p33}</td>
                  <td className="text-right py-2.5 text-canal-gold font-medium">{b.p50}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <SectionTitle>Bières Bouteilles, Trappistes & Régionale</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          <div>
            <Item name="Jupiler NA 0° (25cl)" price="3,00 €" />
            <Item name="Rodenbach 5,2° (25cl)" price="3,50 €" />
            <Item name="Hoegaarden Citron/Rosée 3° (25cl)" price="3,50 €" />
            <Item name="Kriek 5,2° (25cl)" price="3,50 €" />
            <Item name="Leffe Brune 6,5°" price="5,00 €" />
            <Item name="Bush Ambrée 12°" price="5,00 €" />
            <Item name="Kwak Ambrée 8,4°" price="5,00 €" />
            <Item name="Corne Triple 10°" price="5,00 €" />
            <Item name="Omer 8°" price="5,00 €" />
            <Item name="Duvel Blonde 8,5°" price="5,00 €" />
          </div>
          <div>
            <Item name="Chouffe Blonde 8°" price="5,00 €" />
            <Item name="Saint Feuillien Blonde 7,5°" price="5,00 €" />
            <Item name="Desperados 5,9°" price="5,00 €" />
            <Item name="Pêche Mel Bush 8,5°" price="5,00 €" />
            <Item name="Fram'Bush 8,5°" price="5,00 €" />
            <Item name="Chimay Rouge 7°" price="5,00 €" />
            <Item name="Chimay Bleue 9°" price="5,00 €" />
            <Item name="Orval 6,2°" price="5,00 €" />
            <Item name="Westmalle Triple 9,5°" price="5,00 €" />
            <Item name="Satcheu 6,3° (75cl)" price="10,00 €" />
          </div>
        </div>
      </Card>
    </div>
  )
}

function Vins() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <SectionTitle>Vins au Verre</SectionTitle>
          <Item name="Verre de vin (Pays d'Oc)" price="4,00 €" desc="Rouge, blanc ou rosé" />
          <Item name="¼ Pays d'Oc" price="5,00 €" />
          <Item name="½ Pays d'Oc" price="9,00 €" />
        </Card>
        <Card>
          <SectionTitle>Vins Rouges (75cl)</SectionTitle>
          <Item name="Côtes du Rhône" price="22,00 €" />
          <Item name="Saint Émilion" price="25,00 €" />
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <SectionTitle>Vins Blancs (75cl)</SectionTitle>
          <Item name="Chardonnay" price="20,00 €" />
          <Item name="Puits d'Amour (sucré)" price="20,00 €" />
        </Card>
        <Card>
          <SectionTitle>Vin Rosé (75cl)</SectionTitle>
          <Item name="Rosé Pays d'Oc" price="18,00 €" />
        </Card>
        <Card>
          <SectionTitle>Bulles & Champagne</SectionTitle>
          <Item name="Martini Bellini (bouteille)" price="32,00 €" />
          <Item name="Cava (bouteille)" price="40,00 €" />
          <Item name="Champagne (bouteille)" price="60,00 €" />
        </Card>
      </div>
    </div>
  )
}

function Desserts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <SectionTitle>Coupes Glacées</SectionTitle>
          <Item name="Dame blanche" price="7,00 €" />
          <Item name="Dame noire" price="7,00 €" />
          <Item name="Brésilienne" price="7,00 €" />
          <Item name="Pistachio" price="7,00 €" desc="Pistache, chocolat, vanille" />
          <Item name="Colonel" price="8,00 €" desc="Sorbet citron & vodka" />
          <Item name="Café liégeois" price="7,00 €" />
          <Item name="Nougat glacé" price="6,00 €" />
        </Card>
        <Card>
          <SectionTitle>Desserts</SectionTitle>
          <Item name="Tarte de saison" price="6,00 €" />
          <Item name="Mi-cuit au chocolat" price="7,00 €" />
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <SectionTitle>Crêpes</SectionTitle>
          <Item name="Sucre" price="4,50 €" />
          <Item name="Confiture" price="5,00 €" />
          <Item name="Nutella ou Spéculoos" price="7,00 €" />
        </Card>
        <Card>
          <SectionTitle>Gaufres Liégeoises</SectionTitle>
          <Item name="Nature" price="3,00 €" />
          <Item name="Sucre glace" price="3,50 €" />
          <Item name="Chantilly" price="4,00 €" />
          <Item name="Chocolat ou Spéculoos" price="6,00 €" />
        </Card>
        <Card>
          <SectionTitle>Cafés Gourmands</SectionTitle>
          <Item name="Café gourmand" price="9,00 €" />
          <Item name="Thé gourmand" price="9,50 €" />
          <Item name="Irish gourmand" price="14,00 €" />
        </Card>
      </div>
    </div>
  )
}

function BoissonsChaudes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <SectionTitle>Cafés</SectionTitle>
          <Item name="Expresso / Décaféiné" price="2,20 €" />
          <Item name="Café allongé / Décaféiné" price="2,70 €" />
          <Item name="Grand café" price="3,20 €" />
          <Item name="Double expresso" price="3,00 €" />
          <Item name="Cappuccino" price="3,50 €" />
        </Card>
        <Card>
          <SectionTitle>Boissons Chaudes</SectionTitle>
          <Item name="Chocolat chaud" price="3,00 €" />
          <Item name="Chocolat viennois" price="3,50 €" />
          <Item name="Thé (menthe, citron, fruits rouges)" price="2,50 €" />
          <Item name="Soupe maison" price="3,50 €" />
          <Item name="Soupe Royco" price="2,50 €" />
        </Card>
      </div>
      <div className="space-y-6">
        <Card>
          <SectionTitle>Cafés Spéciaux</SectionTitle>
          <Item name="Irish Coffee" price="8,00 €" />
          <Item name="Irish Coffee XL" price="12,00 €" />
          <Item name="Jamaïcan Coffee" price="8,50 €" />
          <Item name="French Coffee" price="8,50 €" />
          <Item name="Baileys Coffee" price="8,50 €" />
          <Item name="Italian Coffee" price="8,50 €" />
          <Item name="Cointreau / Grand Marnier Coffee" price="7,50 €" />
        </Card>
        <Card>
          <SectionTitle>Digestifs</SectionTitle>
          <Item name="Get 27 / Get 31" price="7,00 €" />
          <Item name="Limoncello" price="7,00 €" />
          <Item name="Baileys" price="7,00 €" />
          <Item name="Amaretto" price="7,00 €" />
          <Item name="Cointreau" price="7,00 €" />
          <Item name="Eau de Villée" price="7,00 €" />
          <Item name="Poire Williams" price="7,00 €" />
          <Item name="Cognac" price="7,00 €" />
          <Item name="Grand Marnier" price="7,00 €" />
          <Item name="Calvados" price="7,00 €" />
          <Item name="Armagnac" price="7,00 €" />
        </Card>
      </div>
    </div>
  )
}

const tabContent: Record<Tab, React.ReactNode> = {
  restauration: <RestaurationType />,
  boissons: <Boissons />,
  bieres: <Bieres />,
  vins: <Vins />,
  desserts: <Desserts />,
  chauds: <BoissonsChaudes />,
}

export default function CartePage() {
  const [activeTab, setActiveTab] = useState<Tab>('restauration')

  return (
    <>
      {/* Hero */}
      <div className="bg-canal-navy pt-28 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Notre Carte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-sm"
          >
            Brasserie · Terrasse
          </motion.p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-canal-sand shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-canal-navy text-white'
                    : 'text-canal-slate hover:bg-canal-cream hover:text-canal-navy'
                }`}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-canal-cream min-h-screen py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {tabContent[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mention légale */}
      <div className="bg-canal-navy py-4 text-center">
        <p className="text-white/40 text-xs">L'abus d'alcool est dangereux pour la santé. À consommer avec modération.</p>
      </div>
    </>
  )
}
