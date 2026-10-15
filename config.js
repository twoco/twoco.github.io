// ============================================================
//  TWOCO - RÉGLAGES (le seul fichier à modifier en général)
// ============================================================

const CONFIG = {
    // Connexion Supabase (clé publique "anon", pas la clé secrète)
    SUPABASE_URL: 'https://wjkhkxtdlrphouwsnicg.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqa2hreHRkbHJwaG91d3NuaWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzEzOTYsImV4cCI6MjEwNzQ0NzM5Nn0.YNjsDNU4yu1F_m40111fsZgjCBkDCbUrwarnKH8EVyI',

    // Matières proposées dans le formulaire (ajoute, enlève ou renomme à ta guise)
    MATIERES: [
        'Mathématiques',
        'Statistiques',
        'Microéconomie',
        'Macroéconomie',
        'Comptabilité',
        'Finance',
        'Marketing',
        'Droit',
        'Management'
    ],

    // Lieux proposés dans le formulaire
    LIEUX: [
        'Campus UNIL (Internef)',
        'Bibliothèque',
        'En ligne',
        'Lausanne centre'
    ],

    // Fourchette de prix acceptée (CHF par heure)
    PRIX_MIN: 10,
    PRIX_MAX: 100
};
