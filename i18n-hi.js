/* ============================================================
   ATELIER — HINGLISH (hi) LANGUAGE DATA
   English ↔ Hinglish toggle. Roman-script Hinglish translations.
   Structure:
     paths:   { pathId: {title, desc} }
     modules: { moduleId: {title, hook, whyItMatters:[], coreIdea:[],
               mistakes:[], proTips:[], practice:{...}, quiz:[...],
               checklist:[], nextStep} }
     ui:      { key: 'hinglish' }  -> used via T('key') in app.js
     help:    { hero:{...}, faq:[{q,a}], community:[{desc,...}], notes }
   Any field omitted keeps English. Adding a field for a new module is all
   that is needed to extend the translation arc-by-arc.
   ============================================================ */
const I18N_HI = {

paths: {
  foundations: { title:'Foundations (Buniyaadein)', desc:'Dekhna kaise seekhein, pencil kaise pakdein, aur woh mark kaise banayein jo aapne socha tha. Drawing ki baaki saari cheezein inhi saat modules par khadi hain.' },
  perspective: { title:'Perspective & Construction (Nazariya)', desc:'One-, two-, three-point perspective, gesture drawing, poora construction method, light logic, shading systems, texture aur composition — woh toolkit jo forms ko believable drawing banata hai.' },
  portrait: { title:'Head & Portrait (Sir aur Chehra)', desc:'Skull anatomy, Loomis aur Asaro methods, perspective me head rotation, aur har facial feature ko 3D form ki tarah banana — eyes, nose, lips, ears aur expression.' },
  anatomy: { title:'Body & Anatomy (Sharir aur Anatomy)', desc:'Hair, neck, shoulders, torso, arms aur hands, phir legs, feet, full-body construction, clothing physics, body language aur character design.' },
  'nature-arch': { title:'Nature & Architecture (Prakriti aur Imaratein)', desc:'Trees, plants, rocks, paani, aasmaan aur mausam — phir buildings, interiors aur cities, sab usi construction logic se jo pehle aayi hai. Arc complete hai.' },
  'creatures-hardsurface': { title:'Creatures & Hard Surface (Jeev aur Hard Surface)', desc:'Comparative animal anatomy, birds, aquatic life, insects aur original creature design, phir vehicles, weapons, machines aur mecha. Batch 1 live hai; birds, aquatic life aur insects agla step.' },
  'digital-fundamentals': { title:'Digital Art Fundamentals (Digital Art ki Buniyaadein)', desc:'Software-agnostic digital basics - workspace, tablets, brush engines, layers, selections, transforms, clean digital line art, sketching iteration aur grayscale rendering - jo kisi bhi application me transfer hoti hain.' },
  'digital-painting': { title:'Digital Painting & Rendering (Rang aur Rendering)', desc:'Color theory, value design, lighting, color temperature, skin tones, materials, edge control, atmosphere aur full professional illustration workflow - thumbnail se disciplined finish tak.' },
  'advanced-digital': { title:'Advanced Digital Art (Advanced Digital Art)', desc:'Non-destructive workflow, blend modes, adjustment layers, grading, photobashing, 3D-assisted painting, matte painting, custom brushes, speed painting, responsible AI workflow aur master studies.' },
  worldbuilding: { title:'World Building & Concept Art (Duniya Banana)', desc:'Biomes, environmental storytelling, cinematic composition, color scripting, lighting, aur professional concept-art production pipeline.' }
},

modules: {
  m1: {
    title:'Mindset & Introduction (Mindset aur Shuruaat)',
    hook:'“Talent” galat sawaal hai — drawing ek seekhi jaane wali skill hai. Yeh module batata hai ki usse kaise track karein.',
    whyItMatters:[
      'Jis bhi professional artist ko aap admire karte ho, usne bhi saalon tak aise drawings banaye the jo bilkul aapke pehle drawings jaisi dikhti thi. Drawing ek learned visual-motor skill hai — instrument seekhne jaisi, height lambi hone jaisi nahi. Psychologist Anders Ericsson ki research yehi dikhati hai: deliberate, feedback-driven practice talent se zyada skill ka difference banati hai.',
      'Zyada tar beginners ek hi avoidable reason se chhod dete hain: apne week-one drawings ko kisi professional ke ten-thousandth drawing se compare karke soch lete hain “main nahi kar sakta”. Yeh comparison is poore curriculum ka sabse common failure hai — aur yeh haath se pehle dimaag me hota hai. Yeh skill failure nahi, mindset failure hai.'
    ],
    coreIdea:[
      'Drawing ka matlab hai three-dimensional, spatial samajh ko two-dimensional marks me translate karna. Isme do alag skills hain: <b>seeing</b> (proportion, shape aur light ko theek se dekhna) aur <b>executing</b> (haath se wahi mark banana jo aapne socha tha). Beginners samajhte hain problem execution hai — haath kaanpna — jabki almost hamesha problem seeing hoti hai. Aap eye ko sahi nahi bana sakte agar aap us mental symbol ko bana rahe ho jo aapke dimaag me hai, na ki woh specific shape jo saamne hai. Module 5 (Observation) isi par kaam karta hai.',
      '“Seeing” versus “naming” is poore module ka core idea hai. Bachpan se brain common cheezon ke liye quick symbols banata hai — circle for head, do dots for eyes — taaki visual world fast process ho. Woh symbols recognition ke liye efficient hain, drawing ke liye bekaar, kyunki woh saamne wali cheez ki jagah ek generic stand-in rakh dete hain. Is shortcut ko override karna hi early art education ka asli kaam hai, chahe usse “gesture” ya “proportion” ka naam de do.',
      'Photo ya kisi aur artist ki drawing copy karna haath ko lines reproduce karna sikhati hai, par yeh nahi sikhati ki woh lines kyun hain. Yeh <b>copying</b> aur <b>construction</b> ka farak hai: construction ka matlab object ko space me ek 3D form ki tarah samajhna, taaki aap use kisi bhi angle se, kisi bhi lighting me, memory se bana sako. Yeh course Module 6 se construction par bana hai — shapes aur forms woh alphabet hain jo aage aane wali har cheez me chalega, anatomy se lekar environments aur creature design tak.'
    ],
    mistakes:[
      'Mahine-1 ke kaam ko kisi professional ke aaj ke kaam se judge karna, uske month-1 se nahi.',
      'Sirf wahi subjects practice karna jo pehle se fun hain (faces ya favourite characters) aur un “boring” structural drills ko chhod dena jo un subjects ko possible banati hain.',
      'Finished drawings copy karna bina yeh pooche ki line kyun hai — isse skill wahi tak jaati hai jitna copy kiya.',
      'Practice unpredictable bursts me karna (ek weekend binge, phir teen hafte band) short consistent sessions ki jagah — consistency motor memory banati hai; sirf volume nahi.',
      'Apna kaam kisi ko kabhi na dikhana — isse feedback loop khatam ho jaata hai jo practice ko improvement me badalta hai.'
    ],
    proTips:[
      'Har page par date likho, kharab wale par bhi. Teen mahine baad aapka apna sketchbook hi sabse bada saboot hoga ki yeh kaam karta hai.',
      'Hours of focused practice track karo, “din attend kiye” nahi — bees minute asli dhyan do ghante distracted practice se behtar hai.',
      'Har drawing ke baad ek specific cheez likho jo aap change karna chahoge. Yeh aadat passive repetition ko deliberate practice banati hai.',
      'Critique dhundho, chahe thoda uncomfortable lage. Jis drawing par feedback nahi milta, usse efficiently seekha nahi ja sakta.'
    ],
    practice:{
      warmup:'Abhi koi warmup zaroori nahi — yeh module chhota sa read hai, drawing session nahi. Apna haath Module 4 ke liye bachao.',
      daily:'Aaj hi date-wala sketchbook shuru karo, chahe usme abhi draw na karo. Use kholne ki aadat pehle page ke content se zyada matter karti hai.',
      weekly:'Ek “baseline drawing” banao: ek face, ek hand aur ek full figure memory se, bilkul aise jaise aaj banaoge — bina research ya reference. Date likho aur Module 14 tak use na dekho. Yeh is poore course ka sabse motivating exercise hai — apni progress ka sabse bada saboot aapki baseline hai.',
      challenge:'Ek sentence me likho: tumhe lagta hai ki tumhe achha draw karne se abhi kya rok raha hai. Module 7 ke baad woh sentence dubara padhna aur dekhna ki kya ab bhi sach hai.'
    },
    quiz:[
      {q:'Is module ke hisaab se “deliberate practice” ka kya matlab hai?', options:['Jitne zyada ghante ho sake drawing karna','Focused, feedback-driven repetition — passive volume nahi','Sirf wahi subjects practice karna jo pasand hain','Professional artwork ko bilkul waise hi copy karna'], explain:'Sirf volume skill efficiently nahi banati — feedback ke saath focused practice banati hai.'},
      {q:'Apni pehli drawings ko professional ke aaj ke kaam se compare karna goals set karne ka useful tareeka hai.', options:['True','False'], explain:'Yeh aapke month one ko unke year ten se compare karta hai. Unke month one se compare karo.'},
      {q:'Copying aur construction me sabse bada farak kya hai?', options:['Construction fast hota hai','Copying me better paper lagta hai','Construction ka matlab subject ko 3D form ki tarah samajhna jo kisi bhi angle se bana sako; copying sirf lines reproduce karti hai','Koi real farak nahi hai'], explain:'Construction naye angles aur lighting me transfer hota hai; pure copying nahi.'}
    ],
    checklist:[
      'Main apne words me “seeing” aur “naming” ka farak samjha sakta hoon.',
      'Main samajhta hoon ki sirf copying se transferable skill kyun nahi banti.',
      'Maine date-wala sketchbook shuru kar diya hai.',
      'Maine baseline drawing bana kar use baad ke liye rakh diya hai.'
    ],
    nextStep:'Materials — pehla mark banane se pehle aapko asli me kya chahiye, aur beginner supply lists mostly zaroorat se lambi kyun hoti hain.'
  },
  m2:{ title:'Materials & Tools (Samagri aur Tools)', hook:'Pehle mark se pehle aapko asli me kya chahiye — aur beginner supply lists mostly zaroorat se zyada lambi kyun hoti hain.' },
  m3:{ title:'How to Hold a Pencil (Pencil Kaise Pakdein)', hook:'Handwriting wali grip drawing ki aadhi cheezon ke liye galat hai. Yeh module baaki aadhi grip sikhata hai.' },
  m4:{ title:'Hand Control (Haath Ka Control)', hook:'Is course ka sabse important motor-skill module: confident lines, clean ellipses, aur woh tareeka jisse professionals mark lagane se pehle uski planning karte hain.' },
  m5:{ title:'Observation (Dekhna Seekhna)', hook:'Aap “eye” ka symbol kyun bana rahe ho, na ki woh eye jo saamne hai — aur kaunse exercises yeh aadat todti hain.' },
  m6:{ title:'Shapes (Aakaar)', hook:'Teen-shape wala alphabet jisse professionals literally har cheez ko simplify karte hain — koi detail daalne se pehle.' },
  m7:{ title:'Forms (Volume)', hook:'Flat shape se solid volume tak ki chhaang — aur woh construction principle jis par baaki roadmap ka har subject khada hai.' }
},

ui: {
  search: 'Modules khojo…',
  appearanceAria: 'Appearance chuno (theme aur backdrop)',
  langAria: 'Language badlo (English / Hinglish)',
  langToHi: 'Hinglish me dekho',
  langToEn: 'English me dekho',
  tools: 'Tools',
  dashboard: 'Dashboard',
  practiceCenter: 'Practice Center',
  calendar: 'Calendar',
  achievements: 'Achievements',
  bookmarks: 'Bookmarks',
  library: 'Library',
  helpFaq: 'Help aur FAQ',
  recentlyViewed: 'Recently dekha',
  yourPath: 'Aapka rasta',
  overview: 'Overview',
  practice: 'Practice',
  resources: 'Resources',
  mastery: 'Mastery',
  notes: 'Notes',
  markedComplete: 'Complete mark hua',
  notComplete: 'Abhi complete nahi — {a}/{b} checklist items checked hain. Complete karne ke liye <b>Mastery</b> tab finish karo.',
  difficulty: 'Difficulty',
  studyTime: 'Study time',
  practiceTime: 'Practice time',
  prerequisite: 'Prerequisite',
  noneStartHere: 'None — yahin se shuru karo',
  previous: 'Previous',
  next: 'Next',
  exportProgress: 'Export progress',
  importProgress: 'Import progress',
  resetProgress: 'Reset progress',
  footerAbout: 'Atelier — ek free, honestly-scoped art education project. Foundations arc abhi live hai; baaki roadmap usi tareeke se bana raha hai, ek verified arc ek baar me.',
  homeEyebrow: 'Ek complete, honestly-scoped drawing rasta',
  homeTitle: 'Apni pehli line se <em>professional</em> fundamentals tak.',
  homeSub: '{arcs} arcs ({mods} modules) abhi fully live hain, har resource haath se check kiya hua. Neeche wala roadmap real aur sahi order me hai — bas abhi likha nahi gaya.',
  startHere: 'Yahin se shuru: {t}',
  continueWith: 'Continue karo: {t}',
  allLiveComplete: 'Jo live hai wo sab complete hai',
  viewFoundations: 'Foundations dekho',
  modulesCompleteStat: 'Modules complete',
  xpEarnedStat: 'XP kamai',
  dayStreakStat: 'Day streak',
  modulesLiveStat: 'Modules abhi live',
  studioNote: 'Studio note',
  fullRouteTitle: 'Poora rasta',
  fullRouteSub: 'Neeche koi bhi open module click karo. Locked arcs dikhate hain ki kya aane wala hai, aur kis order me.',
  availableNow: 'Abhi available',
  comingNext: 'Coming next',
  modsCompleteCount: '{a}/{b} modules complete',
  modsPlanned: '{n} modules planned — {s}',
  moduleGridHeading: '{t} ke modules',
  toggleFavoriteAria: 'Favorite toggle karo',
  completionBanner: 'Is module ka text abhi Hinglish me poori tarah nahi hai — baaki arcs translate ho rahe hain.'
},

help: {
  heroEyebrow: 'Sawaal, imaandaari se jawab',
  heroTitle: 'Help aur FAQ',
  heroSub: 'Yeh course kya hai, kaise kaam karta hai, aur jab module aapka doubt na suljhaye to real feedback kahan mile.',
  faq: [
    {q:'Kya shuru karne ke liye koi experience chahiye?', a:'Nahi. Module 1 sirf yeh maanta hai ki aap pencil pakad sakte ho. Rasta deliberately ordered hai — har skill jo maangi jaati hai wo pehle kisi module me sikhaayi ja chuki hai.'},
    {q:'Kis order me follow karun?', a:'Page wala order. Arcs fixed sequence me unlock hote hain: perspective hand control par, head perspective par, anatomy dono par banta hai. Skip karna ek hafte fast lagta hai, months me mehenga padta hai.'},
    {q:'Kya quizzes dena zaroori hai?', a:'Haan — aur yeh trap nahi hain. Har quiz sirf check karta hai ki module ka core idea pahuncha ya nahi. Bina samjhe “complete” click karna khud ko dhoka dena hai.'},
    {q:'Mere paas zyada tools nahi. Kya main yeh kar sakta hoon?', a:'Haan. Materials module (Module 2) isi liye hai: ek HB/2B pencil, sasta paper, ek achha eraser, sharpener aur ruler — Foundations arc ke liye kaafi hai. Brand kabhi matter nahi karta.'},
    {q:'Kya videos, articles aur books sach me free hain?', a:'Har resource free chuna gaya aur live check kiya gaya. Link kabhi bhi dead ho sakta hai — agar ho, to report karo, use verified replacement se swap kar denge.'},
    {q:'Kuch videos yahin chalte hain, kuch naye tab me kyun khulte hain?', a:'YouTube wale videos isi page par floating player me chalte hain, notes box ke saath. Kuch sites embedding allow nahi karti — wo design se naye tab me khulte hain.'},
    {q:'Progress kaise save hoti hai?', a:'Browser me automatically (ya platform storage me) — koi account nahi chahiye. Export progress se backup file rakho, Import se doosre device par restore karo.'},
    {q:'Kya yeh sirf traditional drawing hai?', a:'Live arcs traditional hain: paper, pencil aur observation — jo digital me bhi transfer hoti hai. Digital arcs roadmap me aage hain, kyunki software tab aasan hai jab construction skill ho.'},
    {q:'Main atak gaya hoon ya resource galat lag raha hai?', a:'Pehle neeche diye communities me apna kaam aur specific sawaal post karo. Agar site ki problem hai (broken link, bug), GitHub issues par report karo — har report par resource dobara verify hota hai.'}
  ],
  communityNote: 'Is site ke baad best teacher woh jagah hai jahan aap apna kaam post karke feedback lete ho. Sab free.',
  communityHead: 'Communities aur free practice',
  issuesNote: 'Dead link ya confusing line mili? Yeh kaam ki cheez hai — resources dobara verify hote hain. <a href="https://github.com/aman-newbie/atelier-art-course/issues" target="_blank" rel="noopener">Project issues page</a> par report karo.',
  askAiNote: '<b>“AI se poocho” wale idea ke baare me:</b> on-site question box prototype hua tha. Jo free, keyless text-AI endpoints the wo unreliable ya paid the, aur yeh site paywall nahi lagati. Isliye FAQ me har aam doubt ka jawab hai — aur gehra sawaal community me poocho, jo usually AI se behtar hota hai.'
}
};

window.I18N_HI = I18N_HI;
