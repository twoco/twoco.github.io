// ============================================================
//  TWOCO - FACULTÉS ET MATIÈRES
//  La liste est stockée dans Supabase (tables "facultes" et "matieres")
//  et se modifie depuis la page admin, sans toucher au code.
// ============================================================

const nomAnnee = a => a === '1' ? '1ère année' : a + 'e année';

async function chargerCatalogue(db) {
    const [f, m] = await Promise.all([
        db.from('facultes').select('*').order('ordre').order('id'),
        db.from('matieres').select('*').order('ordre').order('id')
    ]);
    if (f.error || m.error) throw f.error || m.error;
    return { facultes: f.data, matieres: m.data };
}

// Construit { cle: { nom, sous_titre, universite, image, annees: { '1': { nom, matieres } } } }
// "matieres" est une liste simple, ou un objet { semestre: [...] } s'il y a des semestres.
// Les facultés sans matière sont ignorées (sauf avecVides).
function arbreCatalogue({ facultes, matieres }, avecVides = false) {
    const arbre = {};
    facultes.forEach(f => {
        arbre[f.cle] = { nom: f.nom, sous_titre: f.sous_titre, universite: f.universite, image: f.image || null, annees: {} };
    });
    matieres.forEach(m => {
        const f = arbre[m.faculte_cle];
        if (!f) return;
        const an = f.annees[m.annee] = f.annees[m.annee] || { nom: nomAnnee(m.annee), groupes: {} };
        const g = m.semestre || '';
        (an.groupes[g] = an.groupes[g] || []).push(m.nom);
    });
    Object.values(arbre).forEach(f => Object.values(f.annees).forEach(an => {
        const cles = Object.keys(an.groupes);
        an.matieres = cles.length === 1 && cles[0] === '' ? an.groupes[''] : an.groupes;
        delete an.groupes;
    }));
    if (!avecVides) Object.keys(arbre).forEach(c => { if (!Object.keys(arbre[c].annees).length) delete arbre[c]; });
    return arbre;
}
