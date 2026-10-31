// ============================================================
//  TWOCO - RÉGLAGES (le seul fichier à modifier en général)
// ============================================================

const CONFIG = {
    // Connexion Supabase (clé publique "anon", pas la clé secrète)
    SUPABASE_URL: 'https://wjkhkxtdlrphouwsnicg.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqa2hreHRkbHJwaG91d3NuaWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzEzOTYsImV4cCI6MjEwNzQ0NzM5Nn0.YNjsDNU4yu1F_m40111fsZgjCBkDCbUrwarnKH8EVyI',

    // Les facultés et les matières se gèrent depuis la page admin (stockées dans Supabase).

    // Matières montrées en exemple (aperçu grisé) sur la carte de chaque faculté, page d'accueil.
    // Début du nom suffit, sans tenir compte des majuscules ni des accents.
    // Faculté absente ou matière introuvable : les premières matières de la liste.
    APERCU_MATIERES: {
        hec: ['Comptabilité financière', 'Statistique'],
        droit: ['Droit pénal']
    },

    // Où les tuteurs envoient la commission de 5 CHF (TWINT), affiché sur la page « Devenir tuteur »
    TWINT_NUMERO: '077 464 65 13',
    TWINT_NOM: 'Nathan Coquoz',

    // Lieux proposés dans le formulairee
    LIEUX: [
        'Campus UNIL (Internef/Amphimax)',
        'Bibliothèque BU',
        'En ligne'
    ],

    // Version des CGU acceptée à l'inscription : à changer en même temps que legal.html
    CGU_VERSION: 'v1.0',

    // Les tuteurs doivent s'inscrire avec une adresse de ce domaine
    EMAIL_DOMAINE: '@unil.ch',

    // Prix fixe (CHF par heure). Le tuteur ne peut pas le choisir.
    // Pour laisser les tuteurs choisir leur prix, mets : PRIX_FIXE: null
    PRIX_FIXE: 30,

    // Fourchette acceptée, utilisée seulement si PRIX_FIXE est null
    PRIX_MIN: 10,
    PRIX_MAX: 50
};
