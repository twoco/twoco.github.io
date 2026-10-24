// ============================================================
//  TWOCO - STATISTIQUES (table Supabase "evenements")
//  Compte les visites et les clics. Aucune donnée sur les élèves, aucune adresse IP.
// ============================================================

function enregistrer(db, type, infos = {}) {
    db.from('evenements').insert([{ type, ...infos }]).then(({ error }) => { if (error) console.error(error); });
}
