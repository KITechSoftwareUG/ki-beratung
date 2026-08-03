// PLATZHALTER-INHALTE. Ersetze Kundenergebnisse, Bio-Details und den
// Buchungslink durch echte Inhalte vor dem Live-Schalten.

export const ROTATING_WORDS = ['Gerede', 'Zeitverschwendung', 'Spielerei', 'Theorie', 'Chatten']

export const HERO = {
  sub: 'KI wird erst produktiv, wenn sie auf relevante Unternehmensdaten, Systeme und Prozesse zugreifen kann.',
}

export const PROBLEM = {
  title: 'Das Problem',
  intro:
    'Viele Unternehmen versuchen, KI irgendwie in bestehende Arbeitsabläufe hineinzudrücken. Dadurch entstehen zusätzliche Tools und manuelle Zwischenschritte, aber keine echten Produktivitätsgewinne.',
  bullets: [
    'Kein Zugriff auf E-Mails und Dokumente',
    'Keine Verbindung zu CRM-, ERP- oder internen Systemen',
    'Mitarbeiter müssen Informationen manuell kopieren',
    'Die KI kennt den Unternehmenskontext nicht',
    'Es entstehen isolierte Tools, die niemand dauerhaft nutzt',
  ],
}

export const SOLUTION = {
  title: 'Die Lösung',
  intro:
    'KI sollte nicht wahllos in jeden bestehenden Prozess hineingequetscht werden. Stattdessen entsteht eine eigene KI-Arbeitsumgebung, die kontrolliert auf relevante Systeme, Daten und Schnittstellen zugreift.',
  bullets: [
    'Eigene KI-Infrastruktur',
    'Datenbank',
    'Automatisierte Workflows',
    'Schnittstellen',
    'Agenten',
    'Eigenes Postfach',
    'Klar definierte Prozesse',
  ],
  outro: 'Die KI erhält Zugriff, Kontext und konkrete Aufgaben. Dadurch wird aus Chatten ein produktiver Arbeitsprozess.',
}

export const ABOUT = {
  name: 'Maschinenbauingenieur & technischer Umsetzer',
  bullets: [
    'Maschinenbauingenieur',
    'Technische Projekterfahrung im Konzernumfeld',
    'Projekte unter anderem im Umfeld von VW, Porsche und CARIAD',
    'Heute: KI-, Software- und Automatisierungsprojekte für Unternehmen',
    'Kein KI-Theoretiker, sondern technischer Umsetzer',
  ],
}

export type ResultCard = { category: string; result: string; description: string }
export const RESULTS: ResultCard[] = [
  {
    category: 'Automatisierung',
    result: 'Manuelle Arbeit deutlich reduziert',
    description: 'Platzhalter: kurze Beschreibung des konkreten Kundenergebnisses.',
  },
  {
    category: 'Datenanalyse',
    result: 'Bestehende Kundendaten produktiv genutzt',
    description: 'Platzhalter: kurze Beschreibung des konkreten Kundenergebnisses.',
  },
  {
    category: 'Interne Prozesse',
    result: 'Informationen automatisch verarbeitet',
    description: 'Platzhalter: kurze Beschreibung des konkreten Kundenergebnisses.',
  },
  {
    category: 'KI-Infrastruktur',
    result: 'Aus einzelnen Tools wurde ein System',
    description: 'Platzhalter: kurze Beschreibung des konkreten Kundenergebnisses.',
  },
]

export const FINAL = {
  title: 'Lass uns prüfen, wo KI in deinem Unternehmen wirklich produktiv werden kann.',
  sub: 'Im Erstgespräch analysieren wir, welche Prozesse, Daten und Systeme sich sinnvoll verbinden lassen.',
}

export const CTA_LABEL = 'Erstgespräch buchen'
export const BOOKING_LINK_PLACEHOLDER = '#erstgespraech-buchen-platzhalter'
