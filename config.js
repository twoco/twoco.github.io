// ============================================================
//  TWOCO - RÉGLAGES (le seul fichier à modifier en général)
// ============================================================

const CONFIG = {
    // Connexion Supabase (clé publique "anon", pas la clé secrète)
    SUPABASE_URL: 'https://wjkhkxtdlrphouwsnicg.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqa2hreHRkbHJwaG91d3NuaWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NzEzOTYsImV4cCI6MjEwNzQ0NzM5Nn0.YNjsDNU4yu1F_m40111fsZgjCBkDCbUrwarnKH8EVyI',

    // Facultés du site. Chaque faculté a des années, et chaque année ses matières
    // (liste simple, ou groupes par semestre).
    // Pour ajouter une faculté : copie un bloc, change la clé (ex: bio) et le contenu.
    // Pour ajouter une année : copie le bloc "'1': {...}" dans annees et change la clé ('2').
    FACULTES: {
        hec: {
            nom: 'HEC',
            sous_titre: 'Hautes études commerciales',
            annees: {
                '1': {
                    nom: '1ère année',
                    matieres: {
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
                    }
                }
            }
        },
        droit: {
            nom: 'Droit',
            sous_titre: 'Faculté de droit',
            annees: {
                '1': {
                    nom: '1ère année',
                    // EXEMPLES à remplacer par les vrais cours
                    matieres: [
                        'Introduction au droit',
                        'Droit constitutionnel',
                        'Droit des personnes',
                        'Droit pénal',
                        'Droit romain',
                        'Histoire du droit'
                    ]
                }
            }
        },
        bio: {
            nom: 'SV',
            sous_titre: 'Faculté des sciences de la vie',
            annees: {
                '1': {
                    nom: '1ère année',
                    // EXEMPLES à remplacer par les vrais cours
                    matieres: [
                        'Analyse',
                        'Algèbre linéaire',
                        'Physique générale',
                        'Chimie générale',
                        'Chimie organique',
                        'Biologie générale',
                        'Programmation'
                    ]
                }
            }
        }
    },

    // Lieux proposés dans le formulairee
    LIEUX: [
        'Campus UNIL (Internef/Amphimax)',
        'Bibliothèque BU',
        'En ligne'
    ],

    // Prix fixe (CHF par heure). Le tuteur ne peut pas le choisir.
    // Pour laisser les tuteurs choisir leur prix, mets : PRIX_FIXE: null
    PRIX_FIXE: 30,

    // Fourchette acceptée, utilisée seulement si PRIX_FIXE est null
    PRIX_MIN: 10,
    PRIX_MAX: 50
};
