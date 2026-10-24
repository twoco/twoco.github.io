// ============================================================
//  TWOCO - STATISTIQUES (table Supabase "evenements")
//  Compte les visites et les clics. Aucune donnée sur les élèves, aucune adresse IP.
// ============================================================

function enregistrer(db, type, infos = {}) {
    db.from('evenements').insert([{ type, ...infos }]).then(({ error }) => { if (error) console.error(error); });
}

// Anti-spam : au-delà de 3 clics sur le même tuteur dans la journée (même navigateur),
// le lien WhatsApp marche toujours, mais les clics ne sont plus comptés.
const MAX_CLICS_PAR_JOUR = 3;
function clicACompter(tuteurId) {
    const cle = 'twoco-clics-' + new Date().toLocaleDateString('sv-SE');
    try {
        const vus = JSON.parse(localStorage.getItem(cle) || '{}');
        vus[tuteurId] = (vus[tuteurId] || 0) + 1;
        localStorage.setItem(cle, JSON.stringify(vus));
        return vus[tuteurId] <= MAX_CLICS_PAR_JOUR;
    } catch (e) {
        return true;
    }
}
