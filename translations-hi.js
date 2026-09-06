// Hinglish (Hindi-English code-switched) translations for Atelier.
// Structure: TRANSLATIONS_HI[moduleId][field] mirrors the English module's own field shape exactly.
// Any field/module NOT present here simply falls back to English (see the L() helper in app.js) —
// this is intentionally partial and meant to be extended module by module over time.
const TRANSLATIONS_HI = {

  m1: {
    title: 'Soch aur Shuruaat',
    hook: "'Talent' galat sawaal hai \u2014 asli cheez jo track karni chahiye, wo alag hai.",
    whyItMatters: [
      "Har professional artist jisse tum impress hote ho, usne bhi saalon tak bilkul waisi hi drawings banayi hain jaisi tumhari pehli drawings hongi. Drawing ek seekha hua visual-motor skill hai \u2014 kisi instrument seekhne jaisa, na ki lambi height jaisa. Aur research bhi isi baat ko support karta hai: psychologist Anders Ericsson ne apni dashko ki study mein expert performers pe research kiya, aur paaya ki deliberate, feedback-wali practice, talent se kahin zyada skill gap explain karti hai.",
      "Zyada tar beginners ek hi specific, avoidable reason se quit karte hain: apni week-one ki drawings ko kisi professional ki 10,000th drawing se compare karte hain, decide kar lete hain ki 'mujhe drawing nahi aati,' aur chhod dete hain. Ye comparison is poore curriculum mein sabse common failure mode hai, aur ye haath ke kuch karne se pehle hi ho jaata hai \u2014 ye ek mindset ki galti hai, skill ki nahi."
    ],
    coreIdea: [
      "Drawing asal mein 3D, spatial understanding ko 2D marks mein translate karne ka kaam hai. Iska matlab do alag skills involve hoti hain: <b>seeing</b> (proportion, shape, aur light ko accurately dekhna) aur <b>executing</b> (jo mark tumne socha, wahi haath se banana). Beginners usually sochte hain problem execution mein hai \u2014 ek kaanpta hua haath \u2014 jabki asli problem almost hamesha seeing mein hoti hai. Tum ek aankh accurately nahi bana sakte agar tum apna mental symbol \"aankh\" bana rahe ho, na ki jo specific shape tumhare saamne hai. Module 5 (Observation) isko directly cover karta hai.",
      "\"Seeing\" versus \"naming\" hi is poore module ka core idea hai. Bachpan se, tumhara brain common objects ke liye quick symbols banata hai \u2014 sar ke liye ek circle, aankhon ke liye do dots \u2014 taaki visual world ko fast process kar sake. Ye symbols recognition ke liye efficient hain lekin drawing ke liye bekaar, kyunki ye jo actually tumhare saamne hai usse replace kar dete hain ek generic stand-in se. Is shortcut ko override karna hi early art education asal mein sikhata hai, chahe usse \"gesture\" ya \"proportion\" label kiya jaaye.",
      "Kisi photo ya doosre artist ki drawing ko copy karna tumhare haath ko lines reproduce karna sikhata hai, lekin ye nahi sikhata ki wo lines exist kyun karti hain. Yahi <b>copying</b> aur <b>construction</b> ka fark hai: construction ka matlab hai ek object ko 3D form ke roop mein samajhna, jise tum kisi bhi angle se, kisi bhi lighting mein, memory se bana sako. Ye course Module 6 se construction pe based hai \u2014 shapes aur forms wo alphabet hain jo aage har cheez mein use hoga, anatomy, environments, aur creature design tak."
    ],
    mistakes: [
      "Month-1 ke kaam ko kisi professional ke current output se judge karna, unke month-1 ke kaam se nahi.",
      "Sirf wahi subjects practice karna jo already fun hain (usually faces ya favorite characters), aur \"boring\" structural drills skip karna jo un subjects ko possible banate hain.",
      "Finished drawings copy karna bina ye pooche ki koi line wahan hai kyun \u2014 jo tumhari skill ko sirf utne tak limit kar deta hai jitna tumne directly copy kiya hai.",
      "Unpredictable bursts mein practice karna (ek weekend binge, phir teen hafte off) short, consistent sessions ke bajaye \u2014 consistency motor memory banati hai; sirf volume nahi.",
      "Kabhi kisi ko apna kaam na dikhana, jo feedback loop hata deta hai jo practice ko improvement mein badalta hai."
    ],
    proTips: [
      "Har page date karo, chahe wo bura hi kyun na ho. Teen mahine mein, tumhara khud ka sketchbook hi wo proof banega jo ye dikhata hai ki ye kaam karta hai.",
      "Focused practice ke hours track karo, attend kiye din nahi \u2014 bees minute ki genuine attention do distracted hours se better hai.",
      "Har drawing ke baad, ek specific cheez naam lo jo tum change karoge. Ye ek habit passive repetition ko deliberate practice mein badal deti hai.",
      "Critique dhoondo, chahe uncomfortable hi lage. Jis drawing pe feedback nahi mil sakta, usse efficiently seekha nahi ja sakta."
    ],
    practice: {
      warmup: "Abhi kuch zaroori nahi \u2014 ye module ek chhota sa read hai, drawing session nahi. Apna haath Module 4 ke liye bacha ke rakho.",
      daily: "Aaj hi ek dated sketchbook start karo, chahe abhi usme kuch na banao. Usse open karne ki habit zyada important hai first page pe kya hai usse.",
      weekly: "Ek \"baseline drawing\" banao: abhi ek face, ek hand, aur ek full figure memory se banao, exactly jaise tum aaj banaoge, koi research ya reference ke bina. Date karo aur Module 14 khatam hone tak dobara mat dekho. Ye poore course ka sabse motivating exercise hai \u2014 koi bhi cheez progress utna prove nahi karti jitna khud ka baseline.",
      challenge: "Ek sentence mein likho ki tumhe kya lagta hai abhi tumhe achha drawing karne se rok raha hai. Module 7 ke baad wo sentence dobara padho aur dekho ki wo abhi bhi sach hai ya nahi."
    },
    quiz: [
      {q:"\"Deliberate practice\" ka is module ke hisaab se kya matlab hai?", options:["Jitna ho sake utne hours drawing karna","Focused, feedback-driven repetition, sirf passive volume nahi","Sirf wahi subjects practice karna jo already pasand hain","Finished professional artwork ko exactly copy karna"], correct:1, explain:"Sirf volume se skill efficiently nahi banti \u2014 focused practice with feedback se banti hai."},
      {q:"Apni pehli drawings ko kisi professional ke current kaam se compare karna goals set karne ka accha tarika hai.", options:["True","False"], correct:1, explain:"Ye tumhare month one ko unke year ten se compare karta hai. Iski jagah unke month one se compare karo."},
      {q:"Copying aur construction mein key difference kya hai?", options:["Construction faster hai","Copying better paper use karta hai","Construction ka matlab hai kisi subject ko 3D form ke roop mein samajhna jise tum kisi bhi angle se bana sako; copying sirf lines reproduce karta hai","Koi real difference nahi hai"], correct:2, explain:"Construction naye angles aur lighting mein transfer hota hai; sirf copying nahi hoti."}
    ],
    checklist: [
      "Main apne shabdon mein explain kar sakta/sakti hoon ki \"seeing\" aur \"naming\" mein kya fark hai.",
      "Main samajhta/samajhti hoon ki sirf copying se transferable skill kyun nahi banti.",
      "Maine ek dated sketchbook start kar diya hai.",
      "Maine ek baseline drawing complete kar li hai aur usse baad ke liye rakh diya hai."
    ],
    nextStep: "Materials \u2014 tumhe apna pehla mark banane se pehle asal mein kya chahiye, aur zyada tar beginner supply lists jitni honi chahiye usse lambi kyun hoti hain."
  },

  m2: {
    title: 'Materials aur Tools',
    hook: "Pehla mark banane se pehle asal mein kya chahiye, aur zyada tar beginner supply lists jitni lambi hoti hain, utni honi nahi chahiye.",
    whyItMatters: [
      "Beginners usually ya to kuch nahi kharidte aur bekaar tools se fight karte hain, ya sab kuch kharid lete hain aur ek confident line banane se pehle hi overwhelmed (aur broke) ho jaate hain. Dono mein se koi bhi kaam nahi aata. Ek short, correct list decision fatigue hata deti hai taaki tumhari energy actual skill pe jaaye, tool anxiety pe nahi.",
      "Beginner stage pe, specific brands rarely matter karte hain. Jo matter karta hai wo hai tools ki sahi <b>range</b> hona \u2014 hard-to-soft pencils ka spread, ek surface jo graphite cleanly le, ek eraser jo smear na kare balki lift kare. Har tool kyun exist karta hai ye samajhna matlab tum confidently substitute kar sakte ho jo bhi actually tumhare saamne hai usse."
    ],
    coreIdea: [
      "Graphite ek scale pe graded hoti hai H (hard, light, precise \u2014 construction lines ke liye use hoti hai jo tum partly erase karoge) se B (soft, dark, rich tone \u2014 expressive marks aur shading ke liye) tak, HB ya F all-purpose middle hai. Is poore Foundations arc ke liye, ek HB ya 2B kaafi hai; tumhe 4B ya 6B ki zaroorat nahi padegi jab tak Module 12 (Shading) na aa jaaye.",
      "Paper ke do jobs hain. Cheap copy paper ya newsprint pad volume practice ke liye correct hai \u2014 aage ke line, ellipse, aur box drills dozens pages fill karenge, aur precious paper precious, hesitant marks banata hai. Ek proper sketchbook, thoda heavier paper ke saath, us kaam ke liye hai jo tum actually date karke rakhna chahte ho, especially Module 7 ka baseline comparison aur koi bhi mastery-checklist pieces.",
      "Erasers do useful types mein aate hain: ek kneaded eraser (moldable, graphite ko gently lift karta hai paper ka tooth damage kiye bina, soft highlights ke liye accha) aur ek vinyl ya plastic eraser (cleaner, zyada complete erasure). Start karne ke liye ek vinyl eraser kaafi hai.",
      "Is course ko turant sirf aur do tools chahiye \u2014 ek sharpener aur ek simple ruler. Blending stumps, colored pencils, charcoal, aur specialty paper tab tak skip karo jab tak koi later module actually unhe call na kare \u2014 yahan kuch bhi front-loaded nahi hai.",
      "Workspace aur lighting beginners ki expectation se zyada matter karte hain. Ek consistent light source use karo, ideally ek hi side se aata hua (daylight ya ek desk lamp), taaki tum baad mein apni khud ki graphite values accurately judge kar sako aur apne hi haath ka shadow apni drawing pe padne se bacha sako. Paper ko apne natural hand arc ke hisaab se angle karna, desk ke square baithne ke bajaye, ek chhota sa change hai jo line quality ko noticeably improve karta hai."
    ],
    mistakes: [
      "Habit stick karegi ya nahi ye jaane bina 12+ grade ka full pencil set kharid lena \u2014 do ya teen grades genuinely is poore arc ko cover karte hain.",
      "Warm-up drills \"achha\" sketchbook paper pe karna, jo har page ko itna precious feel karata hai ki mess up karna mushkil lagta hai, aur iski wajah se lines timid ban jaati hain.",
      "Pencil ke built-in eraser pe relying karna instead of ek real eraser ke, jo lift karne se zyada smear karta hai.",
      "Inconsistent ya backlit lighting mein kaam karna, jo course mein baad mein values accurately judge karna mushkil bana deta hai.",
      "Traditional fundamentals khatam karne se pehle drawing tablet ya software kharid lena. Digital Art is roadmap ka deliberately last arc hai \u2014 construction skill already hone ke baad software ka learning curve kaafi faster hota hai."
    ],
    proTips: [
      "Line work ke liye ek pencil sharp rakho aur broad tonal blocking ke liye ek thoda dull, baar baar resharpen karne ke bajaye.",
      "Plain copy paper bulk mein kharido specifically warm-ups ke liye aur usse purposely disposable treat karo.",
      "Drawing karte waqt page ko khud rotate karo, sirf apne haath ko nahi \u2014 akele ye cheez zyada tar beginners ke liye line quality ko measurably improve karti hai."
    ],
    practice: {
      warmup: "Is module ke liye koi drawing warm-up nahi. Iske bajaye, paanch minute materials audit karne mein lagao: jo tumhare paas actually hai wo layout karo aur upar wali list se check karo.",
      daily: "Is module mein applicable nahi \u2014 ye ek one-time setup step hai. Jaise hi basic kit ready ho, Module 3 pe move karo.",
      weekly: "Is hafte ek consistent drawing space set up karo: same surface, same light direction, har session. Notice karo ki kya ye consistency hafte ke end tak tumhari lines ko feel karane ke tarike ko change karti hai.",
      challenge: "Same simple circle apne har pencil grade se banao, ya agar sirf ek hi hai to teen alag pressures pe. Compare karo ki tone aur precision kaise shift hoti hai."
    },
    quiz: [
      {q:"Is poore Foundations arc ke liye kaunsa pencil grade range recommend kiya gaya hai?", options:["6H\u20138H","HB\u20132B","6B\u20139B","Tumhe saare 12 grades chahiye"], correct:1, explain:"HB ya 2B yahan sab kuch cover karta hai \u2014 4B aur 6B roadmap mein baad mein Shading tak nahi aate."},
      {q:"Warm-up drills apne best sketchbook paper pe karne chahiye.", options:["True","False"], correct:1, explain:"Precious paper precious, hesitant marks banata hai. Cheap paper purposely warm-ups ke liye correct hai."},
      {q:"Ye module digital tools ko last set up karne ki recommendation kyun karta hai?", options:["Digital tools overall worse hain","Construction fundamentals solid hone ke baad software ka learning curve kaafi faster hota hai","Traditional tools hamesha cheaper hote hain","Digital tools ko subscription chahiye"], correct:1, explain:"Fundamentals kisi bhi tool mein transfer hote hain; bina fundamentals ke software sirf wahi struggle screen pe move kar deta hai."}
    ],
    checklist: [
      "Main kam se kam do pencil grades naam le sakta/sakti hoon aur explain kar sakta/sakti hoon ki kab kaunsa use karunga/karungi.",
      "Mere paas ek basic kit ready hai: pencil(s), ek eraser, warm-ups ke liye plain paper, aur kaam rakhne ke liye ek sketchbook.",
      "Mere paas ek consistent light source aur workspace set hai.",
      "Main samajhta/samajhti hoon ki cheap paper warm-up drills ke liye correct kyun hai, downgrade nahi."
    ],
    nextStep: "How to Hold a Pencil \u2014 jo grip tumhari handwriting ne sikhaya, wo drawing ki zaroorat ka sirf aadha hi cover karta hai."
  },

  m3: {
    title: 'Pencil Kaise Pakdein',
    hook: "Jo grip tumne handwriting ke liye seekha hai, wo drawing ki zaroorat ke aadhe hisse ke liye galat hai. Ye raha wo doosra aadha.",
    whyItMatters: [
      "Zyada tar log sirf writing grip jaante hain \u2014 pencil tip ke paas, haath page pe resting, thumb, index, aur middle finger ke beech tripod hold. Ye chhote, controlled, detailed marks ke liye excellent hai, aur un badi, confident, gestural strokes ke liye almost useless hai jo zyada tar early construction drawing (Module 4 onward) ko actually chahiye hoti hain. Jo beginners kabhi writing grip nahi chhodte unki drawings chhoti, cramped, aur overworked ho jaati hain, kyunki unke haath ko sirf yahi ek motion pata hai.",
      "Professionals ek hi drawing ke andar constantly grips switch karte hain: gesture aur badi shapes block karne ke liye ek loose overhand grip, final detail work ke liye tighter writing grip. Dono seekhna, aur ye feel karna seekhna ki kaunsa grip kis mark ke liye chahiye, ek real aur teachable skill hai \u2014 koi personality trait nahi jo kuch artists ke paas hoti hai."
    ],
    coreIdea: [
      "<b>Writing (tripod) grip:</b> pencil tip ke paas pakda hua, haath aur wrist page pe resting. Chhote marks pe high precision, motion ki range ki keemat pe, kyunki tum essentially sirf apni fingers use kar rahe ho, jinka natural arc chhota hota hai.",
      "<b>Overhand (extended) grip:</b> pencil thoda peeche pakda hua, palm ke across ya hand ke top pe balanced, wrist page se uthi hui. Ye pencil ko tumhare shoulder aur elbow se connect karta hai, sirf fingers se nahi, jo ek longer, smoother, zyada confident stroke deta hai. Ye wo grip hai jo Module 4 ke line aur ellipse drills default mein assume karte hain.",
      "<b>Underhand grip:</b> ek looser variant, pencil neeche se pakda hua, bahut loose gesture blocking ke liye common. Isse abhi master karna zaroori nahi, bas jaanna useful hai ki ye exist karta hai baad ke liye.",
      "<b>Pressure control:</b> construction lines ke liye light pressure jo baad mein build over aur partly erase karne ke liye hoti hain, final, committed lines ke liye firmer pressure. Beginners consistently zaroorat se kahin zyada press karte hain, jo baad mein tone layer karna (Module 12) rok deta hai aur mistakes ko cleanly lift karna mushkil bana deta hai."
    ],
    mistakes: [
      "Har mark ke liye writing grip use karna, badi gestural blocking-in strokes ke liye bhi, jo chhoti, timid, cramped drawings banata hai.",
      "Nervousness ki wajah se pencil ko white-knuckle karna, jo directly shaky, hesitant lines mein telegraph ho jaata hai.",
      "Construction lines pe itna hard press karna ki paper pe dent pad jaaye, jabki wo baad mein build over aur erase hone wali hain.",
      "Poore forearm ko page pe heavily rest karna, jo movement ko sirf wrist tak restrict kar deta hai chahe technically overhand grip hi kyun na hold kar rahe ho."
    ],
    proTips: [
      "Agar ek line ko teen inch se zyada lamba hona hai, to almost hamesha overhand grip chahiye hoti hai, writing grip nahi.",
      "Pencil itna loosely pakdo ki koi usse gently tumhare haath se bina zyada resistance ke slide kar sake. Ek genuinely relaxed grip usse zyada loose hoti hai jitni feel hoti hai ki honi chahiye.",
      "Grip, posture, aur arm movement ek system ki tarah kaam karte hain, isolation mein nahi \u2014 tum kaise baithte ho ye is se zyada change karta hai ki tum pencil kaise pakadte ho, jitna zyada tar beginners expect karte hain."
    ],
    practice: {
      warmup: "Pencil ko writing grip mein pakdo aur dus short lines banao. Overhand grip pe switch karo aur dus aur banao. Abhi quality judge nahi kar rahe, bas range aur confidence mein fark feel kar rahe ho.",
      daily: "Har practice session ke pehle do minute loose, slow loops aur lines overhand grip mein banane mein lagao, kisi bhi detailed cheez ke liye writing grip pe switch karne se pehle. Ye poore course ke liye tumhara standing warm-up ban jaata hai.",
      weekly: "Same chhota object (ek mug, ek shoe) teen baar banao: ek baar poori tarah writing grip mein, ek baar poori tarah overhand grip mein, ek baar naturally dono ke beech switch karte hue jaisa drawing maange. Teeno compare karo.",
      challenge: "Overhand grip mein ek simple object ka gesture block karo, phir writing grip mein uske details finish karo, ek continuous sitting mein bina switch ke baare mein sochne ke liye ruke."
    },
    quiz: [
      {q:"Kaunsa grip pencil ko shoulder aur elbow se connect karta hai longer, smoother strokes ke liye?", options:["Writing (tripod) grip","Overhand grip","Grips mein koi fark nahi hai","Grip ka stroke length pe koi effect nahi hota"], correct:1, explain:"Overhand grip shoulder se move karta hai, jo finger-only writing grip se kaafi zyada natural arc deta hai."},
      {q:"Ek genuinely relaxed grip zyada tar beginners ki expectation se looser feel honi chahiye.", options:["True","False"], correct:0, explain:"Agar koi gently pencil tumhare haath se slide kar sake, to ye almost correct hai."},
      {q:"Generally overhand grip kab reach karni chahiye?", options:["Sirf tiny detail work ke liye","Teen inch se zyada lambi lines ke liye","Kabhi nahi \u2014 writing grip hamesha better hai","Sirf ruler use karte waqt"], correct:1, explain:"Kuch inches ke baad, sirf-wrist motion wobble karne lagta hai; overhand grip us distance ko cleanly cover karta hai."}
    ],
    checklist: [
      "Main request pe writing grip aur overhand grip dono demonstrate kar sakta/sakti hoon.",
      "Main explain kar sakta/sakti hoon ki main kab kaunsa grip use karunga/karungi.",
      "Main overhand grip use karke teen-inch-plus ki line bina wrist se zyada kaam liye bana sakta/sakti hoon.",
      "Main construction lines ke liye final lines se noticeably lighter pressure use kar raha/rahi hoon."
    ],
    nextStep: "Hand Control \u2014 poore course ka sabse important motor-skill module: confident lines, clean ellipses, aur ghosting method jo professionals actually use karte hain."
  }

};
