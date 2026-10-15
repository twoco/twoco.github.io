// ============================================================
//  TWOCO - RÉGLAGES (le seul fichier à modifier en général)
// ============================================================

const CONFIG = {
    // Connexion Supabase (clé publique "anon", pas la clé secrète)
    SUPABASE_URL: 'https://wjkhkxtdlrphouwsnicg.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqa2hreHRkbHJwaG91d3NuaWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzEzOTYsImV4cCI6MjEwNzQ0NzM5Nn0.YNjsDNU4yu1F_m40111fsZgjCBkDCbUrwarnKH8EVyI',

    // Matières proposées dans le formulaire, regroupées par semestre.
    // Pour ajouter un cours : ajoute une ligne dans le bon semestre (avec une virgule à la fin).
    // Si le nom contient une apostrophe, entoure-le de guillemets "comme ça".
    MATIERES: {
        'Premier semestre': [
            'Modèles informatiques',
            'Statistique',
            'Mathématiques I',
            'Comptabilité financière (BSc)',
            'Economie I',
            "Introduction au management et à l'éthique des affaires"
        ],
        'Deuxième semestre': [
            'Introduction à la programmation',
            'Comportement organisationnel',
            'Régression et analyse causale',
            "Droit et conformité de l'entreprise",
            'Mathématiques II',
            'Economie II'
        ]
    },

    // Lieux proposés dans le formulaire
    LIEUX: [
        'Campus UNIL (Internef)',
        'Bibliothèque',
        'En ligne',
        'Lausanne centre'
    ],

    // Prix fixe (CHF par heure). Le tuteur ne peut pas le choisir.
    // Pour laisser les tuteurs choisir leur prix, mets : PRIX_FIXE: null
    PRIX_FIXE: 30,

    // Fourchette acceptée, utilisée seulement si PRIX_FIXE est null
    PRIX_MIN: 10,
    PRIX_MAX: 100
};
