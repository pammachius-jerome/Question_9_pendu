// déclaration des varialbles global
// console.log(listeMots[0]);
// console.log(listeMots.length);

let chaineMots = "défigurassions, réapparaîtront, silicatiseront, invalideraient, affaiblissants, désintoxiquons, anesthésiaient, déchaperonnent, hydropéricarde, embourgeoisait, dégoulinerions, subdélégations, entortillerons, dénébulisaisse, remmanchassent, préjudicierons, contre-minâmes, préjudicierait, mannequinerais, personnalisons, grenouillettes, tyrannisassent, contrebattions, chanstiquasses, accidentassiez, mouvementèrent, prosternassent, scintillassiez, remoucheraient, thermoformages, démissionnaire, conteneurisait, antérieurement, déshydrogéniez, paillassonnées, désencollerais, détronchassiez, dénickelerions, pétrolochimies, trusquinerions, translittérais, fouraillerions, reconstruirais, radiobaliseras, représenterais, fanfreluchâmes, enchausserions, désenrhumerais, inhospitalière, dialectalisais, transfigurerez, convulsassions, surhumainement, réhydratassent, lexicographies, sténographiait, désentoilerons, tuberculiserez, débalourderont, partitionnasse, décroûteraient, mamelonnerions, dupliquassions, grommellerions, personnalisant, isolationnisme, vermiculassent, dissimulassiez, courtaudassiez, déchlorurasses, électrifiasses, extraordinaire, contrefassions, goupilleraient, accompagneront, thésauriserons, intercalassent, débecquetaient, glorificatrice, ensanglantâmes, démythifiasses, photographient, parkérisassent, antéposassions, désaffectation, dépoussiérages, périclitassent, insoupçonnable, déparaffinâmes, désabusassions, machicoterions, paraphraseront, flagorneraient, démissionnâmes, encartonnaient, réconforterais, cadastreraient, contrefichâmes, confédérations, contraindrions, spatialisèrent, réveillonnerez, shampooingniez, replâtreraient, chevrotassions, autodéterminer, cercopithèques, engueuleraient, prédéfinissiez, multilatérales, déchevilleront, sensibiliseras, réassignassent, décortiquaient, ébourgeonnerez, réinfectassent, justificatrice, démoralisaient, petits-suisses, chronométrasse, reconvertirons, recompositions, translittèrent, entrelacements, tarabiscotâtes, téléphonassent, domiciliataire, maximiseraient, tellurhydrique, hameçonnassent, surprotégeriez, années-lumière, municipalisons, géomorphologie, tranquillisiez, médicaliserais, peroxydassions, commanditaires, désensorcelait, entre-déchirés, putréfieraient, hannetonnerait, déqualifierait, réticulassions, préjudicièrent, décachetterons, subrogeassions, désinfecterons, déchlorureriez, rafraîchirions";

let chaineMotsModifier = chaineMots.replaceAll (/[,]/g, "");
// console.log(chaineMotsModifier)
// chaineMotsModifier = '[' + chaineMotsModifier.replaceAll(/[""]/g, "[")
// let chaineMotsModifier = chaineMotsModifier.replaceAll(/['']/g, ", ")
// chaineMots = chaineMots.replaceAll (/[,]/g, "");
// console.log(chaineMots);
// let chaineMotsModifier;
// chaineMotsModifier = chaineMots.split();
let tableau =  chaineMotsModifier.split(" ");
// let tableau = Array.from(chaineMots, separator(" "));
console.log(tableau);
console.log(tableau.length)