// Hinglish (Hindi-English code-switched) translations for Atelier.
// Structure: TRANSLATIONS_HI[moduleId][field] mirrors the English module's own field shape.
// Module/arc titles and static UI headings intentionally stay in English (per user preference) \u2014
// only module content fields (hook, whyItMatters, coreIdea, mistakes, proTips, practice, quiz, checklist, nextStep) are translated.
// Any field/module NOT present here falls back to English automatically (see the L() helper in app.js).
const TRANSLATIONS_HI = {

  m1: {
    hook: "'Talent' galat sawaal hai \u2014 asli cheez jo dekhni chahiye wo kuch aur hai.",
    whyItMatters: [
      "Jis bhi artist ko dekh ke tum sochte ho \"yaar ye kitna achha banata hai\" \u2014 usne bhi apni shuruaat waisi hi ki thi jaisi tumhari abhi hogi. Drawing koi taakat nahi hai jo kisi ko milti hai aur kisi ko nahi \u2014 ye ek seekhi jaane wali skill hai, guitar ya piano jaisi. Aur ye sirf feel-good baat nahi hai \u2014 psychologist Anders Ericsson ne dashkon tak top performers pe research ki, aur pata chala ki talent se zyada farak deliberate practice aur feedback se padta hai.",
      "Zyada tar log ek hi galti se quit karte hain: apni week-one drawing ko kisi professional ki 10,000th drawing se compare karte hain, phir sochte hain \"mujhse nahi hoga,\" aur chhod dete hain. Ye is poori curriculum mein sabse common wajah hai log beech mein hi chhod dete hain \u2014 aur ye haath ki galti nahi, soch ki galti hai."
    ],
    coreIdea: [
      "Drawing asal mein ek translation hai \u2014 jo tumhari aankh 3D mein dekhti hai, usse 2D marks mein convert karna. Isme do alag skills lagte hain: seeing (shape, proportion, light ko sahi se pehchanna) aur executing (jo dimaag mein hai wahi haath se nikaalna). Beginners usually sochte hain problem haath mein hai \u2014 \"mera haath kaanpta hai\" type \u2014 jabki asli problem seeing mein hoti hai. Tum ek aankh sahi se nahi bana sakte agar tum apna generic \"aankh\" wala symbol bana rahe ho, us specific shape ki jagah jo actually saamne hai. Yahi Module 5 (Observation) mein cover hota hai.",
      "\"Seeing\" versus \"naming\" \u2014 yehi is poore module ka core hai. Bachpan se hi tumhara brain common cheezon ke liye shortcuts bana leta hai \u2014 jaise aankh ke liye ek circle plus dot \u2014 taaki world ko jaldi process kar sake. Ye shortcuts recognize karne ke liye achhe hain, lekin drawing ke liye kaam ke nahi, kyunki ye jo saamne hai usse ek generic stand-in se replace kar dete hain. Early art education mein zyada tar training isi shortcut ko todne ki hoti hai, chahe usse \"gesture\" bolo ya \"proportion.\"",
      "Kisi photo ya kisi artist ki drawing ko copy karna tumhare haath ko lines banana sikhata hai, lekin ye nahi sikhata ki wo lines wahan hoti kyun hain. Yehi copying aur construction ka fark hai: construction ka matlab hai kisi cheez ko 3D form ki tarah samajhna, taaki tum usse kisi bhi angle se, kisi bhi light mein, sirf memory se bana sako. Ye poora course Module 6 se construction pe based hai \u2014 shapes aur forms hi wo alphabet hain jisse aage anatomy, environments, aur creature design tak sab kuch banega."
    ],
    mistakes: [
      "Apne month-1 kaam ko kisi professional ke current kaam se compare karna, unke month-1 se nahi.",
      "Sirf wahi practice karna jo already fun lagta hai (usually faces ya favorite characters), aur \"boring\" structural drills skip kar dena jo actually unhe possible banate hain.",
      "Finished drawings copy karna bina soche ki koi line wahan hai kyun \u2014 isse tumhari skill utni hi rehti hai jitna tumne directly copy kiya.",
      "Practice ko random bursts mein karna (ek weekend mein bahut kuch, phir teen hafte kuch nahi) \u2014 consistency hi motor memory banati hai, sirf volume nahi.",
      "Apna kaam kabhi kisi ko na dikhana \u2014 isse wo feedback loop hi khatam ho jaata hai jo practice ko actual improvement mein badalta hai."
    ],
    proTips: [
      "Har page date karo, chahe wo kitna bhi bura kyun na ho. Teen mahine baad, tumhara khud ka sketchbook hi sabse bada proof banega ki ye kaam karta hai.",
      "Focused practice ke hours track karo, sirf din nahi \u2014 bees minute ka genuine focus, do ghante ke distracted kaam se better hai.",
      "Har drawing ke baad, ek specific cheez decide karo jo agli baar change karoge. Bas itni si habit passive repetition ko real, deliberate practice mein badal deti hai.",
      "Critique dhoondo, chahe thoda uncomfortable hi kyun na lage. Jis drawing pe feedback nahi milta, usse seekhna bhi utna hi slow hota hai."
    ],
    practice: {
      warmup: "Abhi kuch nahi karna \u2014 ye module ek chhota sa read hai, drawing session nahi. Apna haath Module 4 ke liye bacha ke rakho.",
      daily: "Aaj hi ek dated sketchbook shuru karo, chahe usme kuch na bhi banao. Usse roz kholne ki aadat, pehle page pe kya hai usse zyada matter karti hai.",
      weekly: "Ek \"baseline drawing\" banao \u2014 abhi ek chehra, ek haath, aur ek full figure, memory se, bina kisi reference ke, exactly jaise tum aaj bana sakte ho. Date karke rakh do, aur Module 14 khatam hone tak wapas mat dekho. Ye poore course ka sabse motivating exercise hai \u2014 khud ka baseline dekhna kisi bhi cheez se zyada progress prove karta hai.",
      challenge: "Ek line mein likho \u2014 abhi tumhe kya lagta hai tumhe achha draw karne se rok raha hai. Module 7 ke baad wo line dobara padhna aur dekhna ki kya wo abhi bhi sach hai."
    },
    quiz: [
      {q:"\"Deliberate practice\" ka is module ke hisaab se kya matlab hai?", options:["Jitne ho sake utne hours draw karna","Focused, feedback wali repetition \u2014 sirf random volume nahi","Sirf wahi cheez practice karna jo pehle se pasand hai","Kisi finished professional artwork ko exactly copy karna"], correct:1, explain:"Sirf volume se skill nahi banti \u2014 focus aur feedback ke saath practice se banti hai."},
      {q:"Apni pehli drawings ko kisi professional ke current kaam se compare karna, goals set karne ka achha tarika hai.", options:["True","False"], correct:1, explain:"Isse tum apna month one, unka year ten se compare kar rahe ho. Uske month one se compare karo."},
      {q:"Copying aur construction mein asli fark kya hai?", options:["Construction fast hota hai","Copying mein better paper lagta hai","Construction mein tum kisi cheez ko 3D form ki tarah samajhte ho taaki kisi bhi angle se bana sako; copying mein sirf lines reproduce hoti hain","Dono mein koi fark nahi"], correct:2, explain:"Construction naye angles aur lighting mein bhi transfer hota hai; sirf copying nahi hoti."}
    ],
    checklist: [
      "Main apne shabdon mein bata sakta/sakti hoon ki \"seeing\" aur \"naming\" mein kya fark hai.",
      "Mujhe samajh aata hai ki sirf copying se transferable skill kyun nahi banti.",
      "Maine ek dated sketchbook shuru kar diya hai.",
      "Maine ek baseline drawing bana ke rakh li hai baad ke liye."
    ],
    nextStep: "Materials \u2014 pehla mark banane se pehle asal mein kya chahiye, aur beginner supply lists itni lambi kyun nahi honi chahiye jitni usually hoti hain."
  },

  m2: {
    hook: "Pehla mark banane se pehle asal mein kya chahiye, aur beginner supply lists itni lambi kyun nahi honi chahiye jitni usually hoti hain.",
    whyItMatters: [
      "Beginners do galtiyan karte hain \u2014 ya kuch nahi kharidte aur ghatiya tools se jhagadte rehte hain, ya itna sab kuch kharid lete hain ki pehli confident line banane se pehle hi overwhelmed (aur kangaal) ho jaate hain. Dono hi tareeke bekaar hain. Ek chhoti, sahi list bana lo \u2014 decision fatigue khatam, energy seedha skill pe lagegi, tools ki tension pe nahi.",
      "Is stage pe brand matter nahi karti. Matter karta hai ek cheez \u2014 tumhare paas sahi range ho: hard se soft pencils, ek surface jo graphite achhe se pakde, ek eraser jo mitaye, ghisaaye nahi. Bas samajh lo har tool hai kyun \u2014 phir jo bhi mile, confidently use kar loge."
    ],
    coreIdea: [
      "Pencils ek scale pe hoti hain. H wale hard, halke, precise \u2014 construction lines ke liye best, jinhe baad mein erase karna hota hai. B wale soft, dark, rich tone dete hain \u2014 expressive marks aur shading ke liye. HB ya F beech mein, all-rounder. Is poore Foundations arc ke liye bas ek HB ya 2B rakh lo; 4B, 6B ki zaroorat Module 12 (Shading) tak nahi padegi.",
      "Paper ke do kaam hote hain. Cheap copy paper ya newsprint pad volume practice ke liye sahi hai \u2014 aage line, ellipse, aur box drills mein dozens pages lagenge, aur achha paper bachana matlab hesitant marks banana. Ek proper sketchbook, thoda heavy paper wala, us kaam ke liye hai jo tum actually rakhna chahte ho \u2014 especially Module 7 ka baseline comparison aur mastery-checklist wale pieces.",
      "Erasers do type ke kaam ke hote hain: ek kneaded eraser (moldable, graphite ko gently lift karta hai, paper ko damage kiye bina \u2014 soft highlights ke liye accha), aur ek vinyl ya plastic eraser (cleaner, zyada complete erase). Shuru mein bas ek vinyl eraser kaafi hai.",
      "Abhi bas do aur tools chahiye \u2014 ek sharpener aur ek simple ruler. Blending stumps, colored pencils, charcoal, special paper \u2014 sab skip karo jab tak koi later module unhe specifically na maange. Yahan kuch bhi front-load karne ki zaroorat nahi.",
      "Workspace aur lighting jitna beginners sochte hain usse zyada matter karte hain. Ek consistent light source rakho, ideally ek hi side se aata hua (daylight ya desk lamp) \u2014 taaki baad mein apni graphite values sahi se judge kar sako, aur apne hi haath ka shadow drawing pe na pade. Paper ko apne natural hand-arc ke hisaab se angle karo, desk ke square baithne ke bajaye \u2014 ek chhota sa change jo line quality noticeably better bana deta hai."
    ],
    mistakes: [
      "12+ grades ka full pencil set kharid lena, bina jaane ki habit bhi banegi ya nahi \u2014 do-teen grades hi is poore arc ke liye kaafi hain.",
      "Warm-up drills achhe sketchbook paper pe karna \u2014 isse har page itna precious lagta hai ki mistake karna mushkil ho jaata hai, aur lines timid ban jaati hain.",
      "Pencil ke built-in eraser pe rely karna, real eraser ki jagah \u2014 wo lift karne ki jagah smear zyada karta hai.",
      "Inconsistent ya backlit lighting mein kaam karna, jisse aage values judge karna mushkil ho jaata hai.",
      "Traditional fundamentals khatam karne se pehle drawing tablet ya software kharid lena. Digital Art is roadmap ka jaanbujh kar last arc hai \u2014 construction skill pehle se ho to software ka learning curve bahut fast lagta hai."
    ],
    proTips: [
      "Line work ke liye pencil sharp rakho, aur broad tonal blocking ke liye thodi dull \u2014 baar baar resharpen karne ke bajaye.",
      "Plain copy paper bulk mein khareedo, sirf warm-ups ke liye, aur usse jaanbujh kar disposable treat karo.",
      "Draw karte waqt page ko khud rotate karo, sirf haath ko nahi \u2014 akele isi se zyada tar beginners ki line quality noticeably improve ho jaati hai."
    ],
    practice: {
      warmup: "Is module ke liye koi drawing warm-up nahi hai. Iske bajaye, paanch minute nikaal ke apna materials audit karo: jo actually paas hai wo layout karo, aur upar wali list se check kar lo.",
      daily: "Is module mein applicable nahi \u2014 ye ek one-time setup step hai. Basic kit ready hote hi Module 3 pe move ho jao.",
      weekly: "Is hafte ek consistent drawing space set karo \u2014 same surface, same light direction, har session. Dekho ki kya ye consistency hafte ke end tak tumhari lines ko feel karne ke tarike mein farak laati hai.",
      challenge: "Ek hi simple circle apne har pencil grade se banao, ya agar sirf ek grade hai to teen alag pressures pe. Compare karo ki tone aur precision kaise shift hoti hai."
    },
    quiz: [
      {q:"Is poore Foundations arc ke liye kaunsa pencil grade range recommend kiya gaya hai?", options:["6H\u20138H","HB\u20132B","6B\u20139B","Saare 12 grades chahiye"], correct:1, explain:"HB ya 2B se yahan sab kuch cover ho jaata hai \u2014 4B, 6B roadmap mein baad mein Shading tak nahi aate."},
      {q:"Warm-up drills apne best sketchbook paper pe karne chahiye.", options:["True","False"], correct:1, explain:"Achha paper bachana matlab hesitant marks banana. Cheap paper jaanbujh kar warm-ups ke liye sahi hai."},
      {q:"Ye module digital tools ko sabse last set up karne ki baat kyun karta hai?", options:["Digital tools overall worse hote hain","Construction fundamentals solid hone ke baad software ka learning curve bahut fast ho jaata hai","Traditional tools hamesha sasta padta hai","Digital tools ke liye subscription chahiye hota hai"], correct:1, explain:"Fundamentals kisi bhi tool mein kaam aate hain; bina fundamentals ke software sirf wahi struggle screen pe shift kar deta hai."}
    ],
    checklist: [
      "Main kam se kam do pencil grades naam le sakta/sakti hoon, aur bata sakta/sakti hoon kab kaunsa use karunga/karungi.",
      "Mere paas ek basic kit ready hai \u2014 pencil(s), ek eraser, warm-ups ke liye plain paper, aur kaam rakhne ke liye ek sketchbook.",
      "Mere paas ek consistent light source aur workspace set hai.",
      "Mujhe samajh aata hai ki cheap paper warm-up drills ke liye sahi kyun hai, koi downgrade nahi."
    ],
    nextStep: "How to Hold a Pencil \u2014 jo grip tumne handwriting ke liye seekha, wo drawing ki zaroorat ka bas aadha hi cover karta hai."
  },

  m3: {
    hook: "Jo grip tumne handwriting ke liye seekha, wo drawing ke liye aadha hi kaam ka hai. Ye raha doosra aadha.",
    whyItMatters: [
      "Zyada tar log sirf writing grip jaante hain \u2014 pencil ko tip ke paas pakadna, haath page pe resting, thumb-index-middle finger ka tripod hold. Ye chhote, controlled, detailed marks ke liye perfect hai, lekin un badi, confident, gestural strokes ke liye kaam nahi karta jo early construction drawing (Module 4 onward) mein chahiye hoti hain. Jo beginners kabhi writing grip se aage nahi badhte, unki drawings chhoti, cramped, aur overworked lagti hain \u2014 kyunki unke haath ko bas ek hi motion aata hai.",
      "Professionals ek hi drawing mein grips constantly switch karte hain \u2014 gesture aur badi shapes block karne ke liye loose overhand grip, final detail ke liye tighter writing grip. Dono seekhna, aur ye feel karna ki kaunsa grip kab chahiye \u2014 ye ek real, teachable skill hai, koi natural talent nahi jo kuch logon ke paas hoti hai aur kuch ke paas nahi."
    ],
    coreIdea: [
      "<b>Writing (tripod) grip:</b> pencil ko tip ke paas pakadna, haath aur wrist page pe resting. Chhote marks pe high precision milti hai, lekin motion ki range ki keemat pe \u2014 kyunki tum basically sirf fingers use kar rahe ho, jinka natural arc chhota hota hai.",
      "<b>Overhand (extended) grip:</b> pencil ko thoda peeche se pakadna, palm ke across ya hand ke top pe balanced, wrist page se uthi hui. Isse pencil shoulder aur elbow se connect ho jaata hai, sirf fingers se nahi \u2014 jisse longer, smoother, aur zyada confident stroke aata hai. Yehi grip Module 4 ki line aur ellipse drills mein default assume kiya jaata hai.",
      "<b>Underhand grip:</b> ek aur looser variant, pencil neeche se pakadna, loose gesture blocking ke liye common. Abhi isse master karne ki zaroorat nahi \u2014 bas jaan lo ki ye exist karta hai, kaam aayega baad mein.",
      "<b>Pressure control:</b> construction lines ke liye light pressure \u2014 jinhe baad mein build over ya partly erase karna hota hai \u2014 aur final, committed lines ke liye firmer pressure. Beginners aksar zaroorat se kahin zyada press karte hain, jisse baad mein tone layer karna (Module 12) mushkil ho jaata hai aur mistakes cleanly erase nahi hoti."
    ],
    mistakes: [
      "Har mark ke liye writing grip use karna, badi gestural strokes ke liye bhi \u2014 isse drawings chhoti, timid, aur cramped lagti hain.",
      "Nervousness mein pencil ko tight pakad lena, jo seedha shaky, hesitant lines mein dikhta hai.",
      "Construction lines pe itna hard press karna ki paper pe dent pad jaaye \u2014 jabki wo lines to baad mein build over ya erase hi honi hain.",
      "Poora forearm page pe heavily rest kar dena, jisse movement sirf wrist tak limit ho jaata hai \u2014 chahe technically overhand grip hi kyun na pakda ho."
    ],
    proTips: [
      "Agar line teen inch se lambi honi hai, to almost hamesha overhand grip chahiye, writing grip nahi.",
      "Pencil itna loosely pakdo ki koi usse gently tumhare haath se bina zyada resistance ke slide kar sake. Genuinely relaxed grip usse zyada loose hoti hai jitni feel hoti hai.",
      "Grip, posture, aur arm movement \u2014 ye teeno ek system ki tarah kaam karte hain, alag alag nahi. Tum kaise baithe ho, ye is baat ko zyada affect karta hai ki pencil kaise pakdoge, jitna zyada tar beginners sochte hain."
    ],
    practice: {
      warmup: "Pencil ko writing grip mein pakdo, dus short lines banao. Overhand grip pe switch karo, dus aur banao. Abhi quality judge mat karo \u2014 bas dono grips ka farak feel karo.",
      daily: "Har practice session se pehle do minute loose, slow loops aur lines overhand grip mein banao, kisi bhi detail work ke liye writing grip pe switch karne se pehle. Yehi poore course ke liye tumhara standard warm-up ban jaayega.",
      weekly: "Ek hi chhota object (mug, shoe) teen baar banao \u2014 ek baar poora writing grip mein, ek baar poora overhand grip mein, aur ek baar naturally jaisa drawing maange dono ke beech switch karte hue. Teeno compare karo.",
      challenge: "Overhand grip mein ek simple object ka gesture block karo, phir writing grip mein details finish karo \u2014 ek hi sitting mein, bina beech mein switch ke baare mein soche."
    },
    quiz: [
      {q:"Kaunsa grip pencil ko shoulder aur elbow se connect karta hai, longer aur smoother strokes ke liye?", options:["Writing (tripod) grip","Overhand grip","Dono grips mein koi farak nahi","Grip ka stroke length pe koi effect nahi hota"], correct:1, explain:"Overhand grip shoulder se move karta hai, jo sirf-fingers wale writing grip se kahin zyada natural arc deta hai."},
      {q:"Genuinely relaxed grip zyada tar beginners ki expectation se looser feel honi chahiye.", options:["True","False"], correct:0, explain:"Agar koi gently pencil tumhare haath se slide kar sake, to ye almost sahi hai."},
      {q:"Overhand grip generally kab use karni chahiye?", options:["Sirf tiny detail work ke liye","Teen inch se lambi lines ke liye","Kabhi nahi \u2014 writing grip hamesha better hai","Sirf ruler use karte waqt"], correct:1, explain:"Kuch inches ke baad sirf-wrist motion wobble karne lagta hai; overhand grip us distance ko cleanly cover karta hai."}
    ],
    checklist: [
      "Main request pe writing grip aur overhand grip dono demonstrate kar sakta/sakti hoon.",
      "Main bata sakta/sakti hoon ki kab kaunsa grip use karunga/karungi.",
      "Main overhand grip se teen-inch-plus ki line bina wrist se zyada kaam liye bana sakta/sakti hoon.",
      "Main construction lines ke liye final lines se noticeably lighter pressure use kar raha/rahi hoon."
    ],
    nextStep: "Hand Control \u2014 is poore course ka sabse important motor-skill module: confident lines, clean ellipses, aur ghosting method jo professionals actually use karte hain."
  },

  m4: {
    hook: "Is course ka sabse important motor-skill module: confident lines, clean ellipses, aur wo method jo professionals kisi bhi mark ko commit karne se pehle plan karne ke liye use karte hain.",
    whyItMatters: [
      "Is module ke baad har skill \u2014 perspective, construction, rendering, anatomy \u2014 ye assume karti hai ki tumhara haath line ko exactly wahin rakh sakta hai jahan aankh chahti hai, jitni length aur curve chahiye, ek hi confident pass mein. Is foundation ke bina seedha \"fun\" subjects pe jump karna \u2014 self-taught artists ke plateau hone ki sabse common wajah hai: unki understanding, unke haath ki actual capability se aage nikal jaati hai, aur har drawing apne hi tools ke against ek fight lagti hai.",
      "Ye naturally steady haath hone ke baare mein nahi hai. Ye ek specific, seekhi ja sakne wali technique hai \u2014 repetition se aati hai, bilkul jaise kisi instrument pe scales practice karte hain \u2014 aur professional illustrators bhi real kaam shuru karne se pehle inhi drills se warm up karte hain."
    ],
    coreIdea: [
      "<b>Ghosting method</b>, Drawabox ki teaching ka core: kisi line ko real mein banane se pehle, paper ke thoda upar hi uska intended path kayi baar trace karo \u2014 start point, end point, aur arc plan karte hue \u2014 taaki arm ko wo motion paper pe pahunchne se pehle hi pata ho. Phir usse ek confident, continuous stroke mein bana do.",
      "Shoulder se draw karo, wrist se nahi, kisi bhi cheez ke liye jo do-teen inch se lambi ho \u2014 ye directly Module 3 ke overhand grip pe based hai. Sirf-wrist motion ka natural arc chhota aur curved hota hai, jo lambi straight lines ko wobble kara deta hai chahe kitna bhi careful raho.",
      "<b>\"Drawing through\":</b> circle ya ellipse practice karte waqt, shape ke around do-teen baar ek continuous motion mein jao, pencil uthaye bina \u2014 ek slow pass mein perfect karne ki koshish karne ke bajaye. Repeated passes muscle memory banate hain aur shape khud smooth ho jaati hai, chahe first pass wobbly ho.",
      "Ellipse ka ek <b>degree</b> hota hai (kitni narrow ya wide dikh rahi hai, viewer ke relative uski rotation ke hisaab se) aur ek <b>minor axis</b> (ellipse ke narrowest point se guzarne wali line). Ye directly Module 7 set up karta hai \u2014 ellipses cylinders ke ends ban jaate hain, jo un chaar basic 3D forms mein se ek hain jinse baaki sab kuch banega.",
      "Ek confident line, chahe imperfect hi ho, tumhare haath ke baare mein zyada batati hai aur zyada resolved dikhti hai us paanch overlapping, hesitant \"searching\" lines se jo sahi path dhoondh rahi hon. Loose, searching construction early blocking-in mein theek hai; final lines committed honi chahiye."
    ],
    mistakes: [
      "Sirf wrist se draw karna \u2014 jisse short, curved, uncontrolled lines banti hain, lambi straight lines ke bajaye.",
      "Ghosting step skip karke seedha jaana \u2014 jo exactly wahi wobbly, uncertain lines banata hai jinhe rokne ke liye ye method hai.",
      "Ek \"perfect\" ellipse ek slow, careful pass mein banane ki koshish karna, draw-through karne ke bajaye. Yahan slow aur careful se precision nahi, wobble milta hai.",
      "Baar baar ek line pe scribble karke usse \"dhoondhne\" ki koshish karna, ek confident stroke commit karne ke bajaye \u2014 chahe wo flawed hi ho.",
      "Hafte mein ek baar lambi session mein practice karna, roz thodi der karne ke bajaye. Ye motor-memory skill hai, aur motor memory ko frequent, short repetition chahiye \u2014 occasional marathon sessions se kahin zyada."
    ],
    proTips: [
      "Kisi bhi precision drill se pehle tees second loose, goal-less scribbling se warm up karo \u2014 seedha precise lines pe jaana, proper warm-up se worse results deta hai.",
      "Agar koi line galat aaye, use fix karne wapas mat jao. Uske bagal mein hi corrected line bana do aur aage badho. Ek line ko overwork karna ek haarti hui ladai hai.",
      "Ghosting ko har mark ke liye default habit banao, chahe simple mark ho \u2014 sirf hard lines ke liye occasional technique nahi."
    ],
    practice: {
      warmup: "Do minute loose scribbling, koi goal ke bina \u2014 bas arm aur shoulder loosen karne ke liye.",
      daily: "Ek page superimposed lines ka (same straight line baar baar banana, exactly previous pass pe land karne ki koshish karte hue), ek page ghosted straight lines ka do dots ke beech, aur ek page circles-ellipses ka \u2014 har ek ko do-teen baar draw-through karke.",
      weekly: "Drawabox ka poora ellipse-in-a-grid drill complete karo \u2014 boxes ke grid ko ellipses se bharo jo har box ke chaaron edges ko touch karein, ghosting aur draw-through dono use karte hue.",
      challenge: "Ek page pe alag-alag length aur angle ki pachaas confident straight lines banao, das minute se kam mein \u2014 koi bhi ghosting pause do second se zyada na ho. Speed, stroke ke prati genuine commitment force karti hai."
    },
    quiz: [
      {q:"\"Ghosting method\" kya hai?", options:["Bahut halka draw karna taaki lines invisible ho jaayein","Paper pe commit karne se pehle intended line path hawa mein trace karna","Line banane ke turant baad erase karna","Aankhen band karke draw karna"], correct:1, explain:"Motion ko pehle hawa mein plan karna \u2014 matlab arm ko path pata hota hai paper tak pahunchne se pehle hi."},
      {q:"Ellipse draw karte waqt, usse ek slow, careful pass mein perfect karna chahiye.", options:["True","False"], correct:1, explain:"Do-teen baar draw-through karna wo smoothness deta hai jo ek slow pass nahi de sakta."},
      {q:"Ellipse ka \"degree\" kya batata hai?", options:["Paper ka temperature","Wo kitni narrow ya wide dikh rahi hai, viewer ke relative rotation ke hisaab se","Use kiya gaya pencil grade","Kitni baar trace kiya gaya"], correct:1, explain:"Degree hi wo cheez hai jo drawn cylinder ko lagta hai jaise wo actually space mein rotate kar raha hai."}
    ],
    checklist: [
      "Main do points ke beech ek straight line confidently ek hi pass mein bana sakta/sakti hoon, ghosting method use karke.",
      "Main ek ellipse ko do-teen baar draw-through karke smooth aur even bana sakta/sakti hoon.",
      "Main shoulder se draw kar raha/rahi hoon un lines ke liye jo kuch inches se lambi hain, sirf wrist se nahi.",
      "Maine superimposed-lines exercise ka kam se kam ek poora page complete kiya hai.",
      "Main ek confident line aur ek searching, sketchy line mein farak bata sakta/sakti hoon."
    ],
    nextStep: "Observation \u2014 tum \"aankh\" ke liye ek symbol kyun bana rahe ho, us actual aankh ki jagah jo saamne hai, aur wo exercises jo ye habit todte hain."
  },

  m5: {
    hook: "Tum \"aankh\" ke liye ek symbol kyun bana rahe ho, us actual aankh ki jagah jo saamne hai, aur wo exercises jo ye habit todte hain.",
    whyItMatters: [
      "Ye shayad poore Foundations arc ka sabse important module hai, aur wo jise beginners sabse zyada skip karte hain \u2014 kyunki iski kuch exercises jaanbujh kar achhe dikhne wale results ke liye nahi banayi gayi. Lekin beginner ke kaam mein almost har proportion, likeness, aur accuracy problem yahin se aata hai \u2014 symbolically dekhna, directly observe karne ke bajaye. Yehi module hai jahan ye fix hoti hai.",
      "Betty Edwards, jo dashkon se perception ki psychology study kar rahi hain, kehti hain ki accurately draw karna haath ki skill se kam aur brain ki ek purani habit ko temporarily override karne se zyada related hai \u2014 jo careful looking ki jagah fast, easy symbols le leti hai."
    ],
    coreIdea: [
      "<b>Symbolic seeing versus observation:</b> bachpan se hi brain common cheezon ke liye shortcuts bana leta hai \u2014 jaise aankh ke liye circle-plus-dot \u2014 taaki cheezein jaldi recognize ho sakein. Ye shortcuts recognition ke liye achhe hain, drawing ke liye nahi, kyunki ye jo saamne hai usse ek generic version se replace kar dete hain. Edwards ne ek interesting exercise se ye dikhaya \u2014 ek line drawing ko upside-down kar do, aur usse copy karna seedhe se kahin zyada aasan ho jaata hai, kyunki upside-down brain ko symbols recognize karne se rok deta hai.",
      "<b>Negative space:</b> object ko khud draw karne ke bajaye, uske around aur beech ki empty space draw karo. Isse real observation force hoti hai, kyunki \"kisi ke arm aur torso ke beech ka gap\" ke liye koi ready-made symbol nahi hota \u2014 tumhe actually dekhna padta hai.",
      "<b>Sighting aur measurement:</b> pencil ko arm's length pe pakad ke (har baar same distance pe) subject ke ek part ki size doosre se compare karo, phir wo ratio page pe utaaro. Yehi tarika hai jisse professional figure aur portrait artists proportions check karte hain, guess nahi karte.",
      "<b>Angles aur plumb lines:</b> pencil ko vertically ya horizontally subject ke against pakad ke check karo ki koi line true vertical ya horizontal se tilt kar rahi hai ya nahi. Bina reference ke, beginners angles almost hamesha galat judge karte hain.",
      "<b>Contour drawing</b>, jisme \"blind contour\" bhi shamil hai (page dekhe bina edge draw karna) \u2014 isse aankh aur haath saath mein slow, careful speed pe move karna seekhte hain, jo fast symbols banane ki habit ko aur bhi todta hai."
    ],
    mistakes: [
      "Wo banana jo pata hai kisi cheez ka look kaisa hota hai \u2014 symbol \u2014 us cheez ki jagah jo actually saamne hai.",
      "Negative-space aur blind-contour drills skip karna kyunki results messy dikhte hain. In drills ka point aankh train karna hai, finished piece banana nahi.",
      "Proportions aur angles ko guess karna, sighting aur measure karne ke bajaye \u2014 khaaskar shuru mein, jab instincts abhi develop nahi hue hote.",
      "Drawing ke shuru mein ek baar measure karke phir kabhi recheck na karna. Proportions ko baar baar verify karna chahiye jaise jaise drawing aage badhti hai."
    ],
    proTips: [
      "Sighting arm ko poora extended aur consistent rakho, same eye use karte hue, poori drawing ke liye. Arm length change karne se ab tak ki har comparison bekaar ho jaati hai.",
      "Ek reference image ko exactly ek baar upside-down copy karke dekho, jaise Edwards suggest karti hain. Zyada tar log genuinely surprise ho jaate hain ye dekh ke ki ye seedhe se kitna zyada accurate hai.",
      "Negative-space drawing tricky, overlapping subjects pe especially kaam aati hai \u2014 jaise interlocked hands, ek chair, ek bicycle \u2014 jahan positive shapes ko directly judge karna mushkil hota hai."
    ],
    practice: {
      warmup: "Paanch minute pure contour drawing kisi bhi nearby object pe \u2014 sirf uska outer edge draw karo, pencil ko usi slow speed pe move karte hue jis speed pe aankh edge trace kar rahi hai.",
      daily: "Har session ek blind contour drawing (sirf outline, page dekhe bina) aur ek negative-space drawing (kisi object ke around ka gap, jaise ek chair ya apna haath).",
      weekly: "Teen-chaar objects ke ek simple still life ka poora sighting-and-measuring study \u2014 heights, widths, angles compare karo pencil ko arm's length pe rakh ke, koi mark lagane se pehle.",
      challenge: "Ek simple reference image upside-down copy karo, phir right-side-up flip karke compare karo ki normal way mein drawing kaisi jaati. Likho ki kya change hua."
    },
    quiz: [
      {q:"\"Symbolic seeing\" kya hai?", options:["Jaanbujh kar real objects ki jagah symbols banana","Brain ki wo habit jo actually dekhi ja rahi cheez ki jagah ek fast, generic shorthand use kar leti hai","Abstract art ki ek style","Artwork sign karne ka ek tarika"], correct:1, explain:"Ye recognition ke liye achha hai, drawing ke liye nahi \u2014 kyunki ye specific shape ko generic version se replace kar deta hai."},
      {q:"Blind contour drawing ka goal ek polished, accurate final image banana hota hai.", options:["True","False"], correct:1, explain:"Ye eye-hand connection ke liye ek training drill hai \u2014 messy results expected aur theek hain."},
      {q:"Arm's length pe pencil se sighting karna kis mein madad karta hai?", options:["Pencil evenly sharpen karne mein","Subject ke parts ke beech relative proportions compare karne mein","Check karne mein ki paper zyada shiny to nahi","Graphite tones mix karne mein"], correct:1, explain:"Yehi tarika hai jisse proportions measurement se check hote hain, guessing se nahi."}
    ],
    checklist: [
      "Main ek blind contour drawing complete kar sakta/sakti hoon, page dekhe bina.",
      "Main kisi object ke around ki negative space draw kar sakta/sakti hoon, object ke bajaye.",
      "Main pencil ko arm's length pe use kar sakta/sakti hoon, subject ke do parts ke beech proportions compare karne ke liye.",
      "Main apne shabdon mein bata sakta/sakti hoon ki symbolic seeing accurate drawing mein kyun rukawat banti hai.",
      "Maine ek reference upside-down copy karke dekha hai aur accuracy mein farak notice kiya hai."
    ],
    nextStep: "Shapes \u2014 wo three-shape alphabet jisse professionals literally har cheez simplify karte hain, ek bhi detail daalne se pehle."
  },

  m6: {
    hook: "Wo three-shape alphabet jisse professionals literally har cheez simplify karte hain, ek bhi detail daalne se pehle.",
    whyItMatters: [
      "Duniya mein har object, chahe wo kitna bhi complex ho, thodi si basic shapes ke combination mein simplify ho sakta hai. Ye koi beginner ka shortcut nahi hai \u2014 ye actual professional workflow hai. Concept artists, illustrators, animators \u2014 sab pehle subject ko flat basic shapes mein block karte hain, ek bhi detail daalne se pehle. Kyunki bade shapes sahi ho to baad mein sab kuch fix karna aasan hota hai, aur galat ho to baad mein kuch bhi fix karna mushkil ho jaata hai \u2014 chahe detail kitni bhi achhi render ki ho.",
      "Ye module Module 5 (observation, jo accurate seeing sikhata hai) aur Module 7 (forms, jo third dimension add karta hai) ke beech ka bridge hai. Shapes flat hoti hain; agla module unhe solid volume mein badal deta hai."
    ],
    coreIdea: [
      "Teen basic shapes \u2014 circle, rectangle, triangle \u2014 ek alphabet ki tarah kaam karte hain jisse almost koi bhi silhouette combination mein ban sakti hai. Circle round ya organic masses simplify karta hai (heads, fruit, boulders). Rectangle blocky, rigid masses simplify karta hai (torsos, boxes, buildings). Triangle tapering ya directional masses simplify karta hai (ek dress, ek mountain, ek beak).",
      "<b>Shape hierarchy:</b> kisi subject ko simplify karte waqt, sabse pehle sabse badi shape dhoondo \u2014 primary shape, usually overall silhouette ya sabse badi mass \u2014 phir secondary shapes (uske andar ki major divisions), phir tertiary shapes (chhoti details) sabse aakhir mein. Beginners seedha tertiary detail pe jump kar jaate hain \u2014 isliye unki drawings mein accurate-looking parts to hote hain, lekin wo kabhi ek coherent whole nahi banate.",
      "<b>Silhouette thinking:</b> agar drawing ko poora solid black bhar diya jaaye, kya wo abhi bhi clearly apne subject jaisi dikhegi? Ye ek real professional check hai \u2014 strong character aur object designs aksar sirf silhouette se hi pehchane jaate hain, aur ye judge karne ka fast tarika hai ki bade shapes kaam kar rahe hain ya nahi, detail mein time lagane se pehle.",
      "Organic versus geometric shape language ek deliberate design choice hai, sirf observation ki baat nahi: rounder, organic shapes softer, friendlier, ya older feel deti hain; sharper, geometric shapes harder, mechanical, ya dangerous feel deti hain. Ye baad mein Character Design mein ek direct tool ban jaata hai."
    ],
    mistakes: [
      "Drawing ko ek aankh, ek button, ya kisi chhoti detail se shuru karna, un badi shapes mein se kisi ko establish kiye bina jinka wo hissa hai.",
      "Subject ka outline directly copy karna, use underlying shapes mein simplify karne ke bajaye \u2014 isse ek stiff tracing banti hai, ek samjhi hui drawing nahi.",
      "Silhouette readability ignore karna, isliye drawing tabhi sense banati hai jab poori render ho chuki ho, flat shape ki tarah dekho to fall apart ho jaati hai.",
      "Ye sochna ki shape simplification sirf cartoon ya simple styles ke liye hai. Realistic work bhi isi pe utna hi rely karta hai \u2014 realism bas is step ko final rendering mein achhe se hide kar deta hai."
    ],
    proTips: [
      "Complex subject pe stuck ho to usse squint karke dekho (ya reference photo blur kar do) jab tak fine detail gayab na ho jaaye aur bas bade shape masses reh jaayein. Ye ek real, widely-used professional trick hai, sirf beginner exercise nahi.",
      "Rough shape blocking ko flat, solid tone se jaldi bhar do, silhouette readability check karne ke liye \u2014 ek bhi detail line add karne se pehle.",
      "Har naye subject pe puchho \"sabse badi shape yahan kya hai?\" Repetition ke saath ye automatic ho jaata hai."
    ],
    practice: {
      warmup: "Around ke paanch random objects ko flat, solid silhouettes ki tarah draw karo \u2014 koi interior lines nahi, koi outline nahi, bas filled shape.",
      daily: "Ek photo reference choose karo aur teen-paanch basic shapes mein simplify karo, sabse badi pehle. Is hafte har din ek naya subject use karo.",
      weekly: "Ek hi reference photo lo aur teen alag shape-simplification passes banao \u2014 ek mostly circles se, ek mostly rectangles se, ek mostly triangles se. Compare karo har ek kitni differently read hoti hai.",
      challenge: "Ek page das-pandrah quick silhouette thumbnails se bhar do, random objects ke, memory ya imagination se \u2014 tees second se zyada har ek pe nahi. Speed shape language pe reliance force karti hai, detail pe nahi."
    },
    quiz: [
      {q:"Shape hierarchy mein sabse pehle kya establish karna chahiye?", options:["Chhoti details jaise eyelashes","Sabse badi, primary shape","Signature ya date","Background color"], correct:1, explain:"Sabse badi shape pehle, phir secondary divisions, phir chhoti details sabse aakhir mein \u2014 is order ko ulta karna sabse common beginner mistake hai."},
      {q:"Silhouette readability sirf cartoon ya simplified art styles ke liye matter karti hai.", options:["True","False"], correct:1, explain:"Realistic work bhi isi pe utna hi rely karta hai; realism bas is step ko final rendering mein achhe se hide karta hai."},
      {q:"Is module mein sikhaayi gayi teen basic shapes kaunsi hain?", options:["Star, heart, arrow","Circle, rectangle, triangle","Hexagon, pentagon, octagon","Line, dot, curve"], correct:1, explain:"Circle, rectangle, aur triangle hi wo alphabet hain jisse almost koi bhi silhouette ban sakti hai."}
    ],
    checklist: [
      "Main ek photo reference ko teen-paanch basic shapes mein simplify kar sakta/sakti hoon, sabse badi pehle.",
      "Main shape hierarchy \u2014 primary, secondary, tertiary \u2014 apne shabdon mein bata sakta/sakti hoon.",
      "Main judge kar sakta/sakti hoon ki koi shape blocking silhouette-readable hai ya nahi, detail add karne se pehle.",
      "Maine kam se kam ek page quick silhouette thumbnails se bhara hai."
    ],
    nextStep: "Forms \u2014 flat shape se solid volume tak ki chalaang, aur wo construction principle jisse roadmap ka baaki har subject banega."
  },

  m7: {
    hook: "Flat shape se solid volume tak ki chalaang, aur wo construction principle jisse roadmap ka baaki har subject banega.",
    whyItMatters: [
      "Ye module Module 6 ki flat shape language ko teen dimensions mein le jaake Foundations ko complete karta hai. Yahan sikhaaye gaye chaar basic forms \u2014 sphere, cube, cylinder, cone \u2014 aage aane wale har arc ke har subject ke building blocks hain: heads spheres se, torsos modified cubes se, limbs cylinders se, trees cones aur spheres se milke bante hain. Ye module skip karo, aur poore roadmap ka baad ka har \"X kaise draw karein\" lesson sirf shapes memorize karne mein badal jaata hai, structure samajhne ke bajaye.",
      "Yahin se construction drawing genuinely copying se alag ban jaati hai. Ek baar kisi object ko 3D form ki tarah samajh lo, to usse kisi bhi angle se draw kar sakte ho jo kabhi nahi dekha, kisi bhi lighting mein jo kabhi nahi dekhi \u2014 poora imagination se \u2014 kyunki tum use bana rahe ho, trace nahi kar rahe."
    ],
    coreIdea: [
      "Chaar basic forms: <b>sphere</b> (koi bhi round volume \u2014 heads, fruit, boulders), <b>cube</b> (koi bhi rigid, angular volume \u2014 boxes, torsos, buildings), <b>cylinder</b> (koi bhi tube-jaisa volume \u2014 limbs, tree trunks, cups), <b>cone</b> (koi bhi volume jo point tak tapering ho \u2014 ek horn, ek stacked skirt). Duniya mein almost har complex object in chaar forms ko combine, stretch, ya cut karke ban sakta hai.",
      "<b>Cross-contour lines:</b> form ki surface ke around banayi gayi lines, jaise globe pe latitude ki lines ya baseball pe seams, jo bina kisi shading ke bhi rotation aur volume dikha deti hain. Inhe apne basic forms pe draw karna genuine 3D understanding banane ka sabse fast tarika hai \u2014 sirf flat outline se, jo bas volume implay karta hai, kahin zyada.",
      "<b>Construction thinking:</b> pehle form ka basic skeleton ya bounding box halka sa sketch karo, phir uske around final volume banao \u2014 same logic jo Module 4 ki Drawabox box-construction exercises mein thi, ab actual solid volume pe apply, sirf lines aur ellipses ke bajaye.",
      "<b>Forms combine aur cut karna:</b> koi bhi real object rarely ek single pure form hoti hai. Ye usually kayi forms ka combination hota hai (ek body jo cylindrical torso aur spherical joints se bani ho) ya ek form jisme se pieces cut ki gayi hon (ek mug ek cylinder hi hai, jisme opening ke liye ek chunk nikala gaya ho, plus handle ke liye ek chhota cylinder). Objects ko is tarah dekhna seekhna hi agle arc ke Construction module ki poori foundation hai.",
      "Module 4 ki ellipses yahan directly kaam aati hain \u2014 kisi bhi cylinder ya cone ke ends ellipses hote hain, aur unka degree aur minor axis samajhna, jo already practice kar chuke ho, exactly wo cheez hai jo ek drawn cylinder ko lagta hai jaise wo space mein rotate kar raha hai, page pe flat lete hone ki jagah."
    ],
    mistakes: [
      "Sirf form ka outline draw karna, koi cross-contour lines ke bina \u2014 isse ek flat shape banti hai jo sirf shading tricks ki wajah se \"3D\" lagti hai, actual structure ki wajah se nahi.",
      "Complex objects pe jump karna, chaar basic forms akele confidently multiple angles se draw kar paane se pehle.",
      "Cylinders aur cones pe perspective ignore karna \u2014 dono ellipse ends ko identical bana dena, viewer se distance ki parwaah kiye bina. Ye constructed drawing ke sabse common aur sabse jaldi dikhne wale beginner mistakes mein se ek hai.",
      "Construction lines bahut jaldi erase kar dena, ye check kiye bina ki underlying form actually 3D mein sahi lag rahi hai ya nahi. Ye ek diagnostic tool hain, chhupaane wali scaffolding nahi."
    ],
    proTips: [
      "Ek hi basic form \u2014 jaise cylinder \u2014 ko kam se kam paanch alag angles se ek hi sitting mein draw karo. Ye paanch alag objects ko ek-ek angle se banane se zyada valuable hai.",
      "Construction lines ko visible aur halka rakho jaise jaise kaam karte ho, jaate jaate erase mat karo. Sirf bilkul aakhir mein erase karo, jab form sahi lagne lage.",
      "Forms combine karte waqt, ek line banane se pehle puchho \"ye actually kis form se bana hai?\" \u2014 same habit jo Module 6 ka \"sabse badi shape yahan kya hai?\" tha."
    ],
    practice: {
      warmup: "Imagination se ek sphere, ek cube, ek cylinder, aur ek cone draw karo, har ek mein visible cross-contour lines ke saath jo rotation dikhayein.",
      daily: "Ek hi simple household object (mug, book, lamp) ko do-teen combined basic forms ki construction ki tarah draw karo, har din ek naye angle se.",
      weekly: "Drawabox ki Lesson 1 se box-construction sequence continue karo \u2014 multiple boxes alag rotations mein banao, check karte hue ki opposite edges perspective mein roughly parallel rehte hain.",
      challenge: "Ek complex object choose karo \u2014 chair, backpack, bicycle \u2014 aur pandrah minute sirf identify aur sketch karne mein lagao ki ye kaunse basic forms se bana hai. Koi final rendering nahi, sirf construction."
    },
    quiz: [
      {q:"In mein se kaunsa is module ke chaar basic 3D forms mein se NAHI hai?", options:["Sphere","Cube","Torus","Cylinder"], correct:2, explain:"Sphere, cube, cylinder, aur cone hi chaar hain. Torus (ring shape) is basic set ka hissa nahi hai."},
      {q:"Cross-contour lines bina kisi shading ke bhi form ki rotation aur volume dikha sakti hain.", options:["True","False"], correct:0, explain:"Ye globe pe latitude lines jaisi kaam karti hain \u2014 volume sirf structure se hi readable ho jaata hai."},
      {q:"Construction lines bahut jaldi erase kyun nahi karni chahiye?", options:["Eraser waste hota hai","Ye diagnostic tool hain \u2014 check karne ke liye ki form commit karne se pehle 3D mein sahi lag rahi hai ya nahi","Convention ke hisaab se visible rehna zaroori hai","Isse drawing jaanbujh kar unfinished dikhti hai"], correct:1, explain:"Construction lines se ek broken form pehle hi pakad mein aa jaati hai, baad mein fix karna mushkil hone se pehle."}
    ],
    checklist: [
      "Main imagination se ek sphere, cube, cylinder, aur cone draw kar sakta/sakti hoon, har ek kam se kam do alag angles se.",
      "Main cross-contour lines add kar sakta/sakti hoon jo form ko 3D space mein rotate karta hua dikhayein.",
      "Main ek simple object dekh ke identify kar sakta/sakti hoon ki wo kaunse basic forms se bana hai.",
      "Main do ya zyada basic forms combine karke ek simple object construction bana sakta/sakti hoon.",
      "Mujhe samajh aata hai ki ellipse ka degree cylinder ki rotation ke hisaab se kyun change hota hai."
    ],
    nextStep: "Foundations complete ho gaya. Next: Perspective & Construction \u2014 one se three-point perspective, gesture drawing, aur poori construction method, home page pe mapped aur likha jaa raha hai."
  },

  m8: {
    hook: "Parallel lines dur jaake kyun milti hain, aur wo vanishing-point logic jisse koi bhi box, room, ya street asal mein space mein recede karti hui dikhti hai.",
    whyItMatters: [
      "Perspective hi wo system hai jo paper pe flat marks ko 3D space mein, viewer se ek specific distance pe existing objects ki tarah dikhata hai. Iske bina, Module 7 ka perfectly constructed form bhi ek ambiguous, inconsistent space mein float karta hua lagta hai. Is roadmap ke aage har environment, har furniture piece, har vehicle yahin ki logic pe depend karta hai.",
      "Beginners usually do extremes pe jaate hain \u2014 ya to perspective ko poora avoid karte hain, sab kuch flat, front-on angle se draw karke, ya har single mark ke liye rigid ruler-and-vanishing-point construction pe over-rely karte hain, jo slow hai aur loose, freehand work ke liye break ho jaata hai. Professionals rigid perspective tabhi use karte hain jab precision chahiye, aur baaki har jagah intuitive, freehand perspective \u2014 lekin freehand tabhi kaam karta hai jab rigid system pehle genuinely internalize ho chuka ho."
    ],
    coreIdea: [
      "Horizon line hamesha tumhari eye level hai \u2014 koi fixed line \"wahan\" nahi, balki jahan bhi viewer ki aankhein hain wahan hai. Ye pehli baar click hone pe genuinely disorienting lagta hai: neeche baitho to horizon tumhare saath neeche aa jaata hai; hill pe chadho to tumhare saath upar.",
      "<b>Vanishing points</b> wo jagah hain jahan parallel lines dur jaate jaate converge hoti hain. One-point perspective ek hi vanishing point use karta hai seedhe aage \u2014 jaise ek hallway ya road ko seedha dekhna. Two-point mein horizon pe do vanishing points hote hain, kisi box ya building ko angle se dekhne ke liye. Three-point mein horizon ke upar ya neeche ek aur vanishing point add hota hai, extreme upward ya downward views ke liye \u2014 jaise ek skyscraper ko uske base se dekhna.",
      "Agar tum ek cube ko perspective mein sahi se draw kar sakte ho, to tum literally kuch bhi draw kar sakte ho \u2014 ye idea, jo almost har achha perspective instructor sikhata hai, wajah hai ki ye course baar baar box construction pe wapas aata hai. Almost har man-made object aur zyada tar natural forms bhi ek perspective-correct box se start hoke ban sakte hain.",
      "Rigid, ruler-plotted perspective pehle seekhni chahiye, taaki samajh aaye ki system kaam kyun karta hai, phir jaanbujh kar usse loosen karke freehand, intuitive perspective mein le jaana chahiye \u2014 kyunki zyada tar real kaam (sketching, comics, animation, concept art) mein har vanishing point precisely plot karne ka time nahi hota, aur freehand accuracy tabhi aati hai jab rigid version enough baar kar liya ho ki wo internalize ho chuka ho.",
      "Kisi receding surface pe lete circles \u2014 ek wheel, ek plate, ek manhole cover \u2014 ellipses ban jaate hain, jinka degree aur angle wahi perspective system decide karta hai jo scene ki baaki har cheez ko decide karta hai. Ye directly Module 4 ke ellipse work se connect hota hai \u2014 isse galat karna sabse fast tarika hai jisse ek otherwise-correct perspective drawing fall apart ho jaati hai."
    ],
    mistakes: [
      "Har object ko flat, front-on \"elevation\" view se draw karna, specifically perspective se deal karne se bachne ke liye.",
      "Vanishing point ko subject ke bahut paas rakh dena, jisse severe, unintended distortion aata hai jo accidental fisheye lens jaisa lagta hai.",
      "Ek hi scene mein inconsistent horizon line ya eye level use karna, jisse objects lagte hain jaise ek hi picture mein alag alag heights se dekhe gaye ho.",
      "Perspective ko sirf mechanical grid-plotting maan lena, aur kabhi freehand, intuitive version practice na karna jo actually fast sketching aur imaginative work mein use hoti hai.",
      "Circular objects pe ellipse ka degree galat karna, chahe box perspective baaki sahi ho."
    ],
    proTips: [
      "Scene mein ek bhi object rakhne se pehle decide karo horizon line kahan hai \u2014 har vanishing point aur har object ki height us ek decision pe depend karti hai.",
      "Poori scenes attempt karne se pehle roz boxes ko perspective mein construct karna practice karo. \"Agar cube draw kar sakte ho, to almost kuch bhi draw kar sakte ho\" \u2014 ye practically surprisingly true hai.",
      "Jab rigid system intuitive lagne lage, to jaanbujh kar wahi simple scene freehand draw karo, koi ruler ya plotted vanishing points ke bina, aur usse constructed version se compare karo."
    ],
    practice: {
      warmup: "Ek horizon line aur ek vanishing point draw karo. Dus boxes alag sizes ke banao, sab correctly usi ek point pe converge karte hue.",
      daily: "Two-point perspective mein box construction continue karo, focus rakhte hue ki vertical edges genuinely vertical rahein aur back edges dono vanishing points pe sahi se converge karein.",
      weekly: "One-point perspective mein ek simple room construct karo \u2014 ek box jisme door, window, aur ek furniture piece ho \u2014 phir wahi room two-point perspective mein corner angle se dobara banao.",
      challenge: "Ek hi simple object one-point, two-point, aur three-point perspective mein draw karo, phir usse ek baar aur poora freehand banao, bina koi vanishing point plot kiye."
    },
    quiz: [
      {q:"Kisi drawing mein horizon line kahan hoga, ye kya decide karta hai?", options:["Hamesha page pe same height","Viewer ki eye level","Sabse badi object ka size","Vanishing point ka color"], correct:1, explain:"Horizon line fixed nahi hai \u2014 jahan viewer ki aankhein hain wahin hai, aur viewer ke saath move karta hai."},
      {q:"One-point perspective mein horizon pe do vanishing points hote hain.", options:["True","False"], correct:1, explain:"One-point perspective mein sirf ek vanishing point hota hai; two-point mein do hote hain."},
      {q:"Perspective drawing mein ek bhi object rakhne se pehle kya decide karna chahiye?", options:["Color palette","Horizon line","Paper size","Pencil grade"], correct:1, explain:"Har vanishing point aur har object ki height horizon (eye level) kahan set hai isi pe depend karti hai."}
    ],
    checklist: [
      "Main kisi scene mein horizon line identify kar sakta/sakti hoon aur bata sakta/sakti hoon ki ye eye level ke barabar kyun hai.",
      "Main ruler aur plotted vanishing points use karke one-point aur two-point perspective mein ek box construct kar sakta/sakti hoon.",
      "Main koi simple box freehand draw kar sakta/sakti hoon, bina ruler ke, jo phir bhi correct perspective jaisa lage.",
      "Main kisi receding surface pe circular object ko perspective-correct ellipse ki tarah draw kar sakta/sakti hoon."
    ],
    nextStep: "Gesture Drawing \u2014 outlines ki tension se pehle movement aur energy capture karna."
  },

  m9: {
    hook: "Pehli line jo tum banate ho, wo movement describe karni chahiye, outline nahi \u2014 aur professionals 30-second sketches pe real time kyun lagate hain.",
    whyItMatters: [
      "Ab tak sab kuch static construction ke baare mein tha \u2014 accurate shapes, correct forms, correct perspective. Gesture alag hai \u2014 ye energy, weight, aur movement capture karta hai, accurate outlines ki tension se pehle. Ek technically perfect lekin stiff figure lifeless lagta hai; ek rough lekin well-gestured figure alive lagta hai, chahe usme proportion errors bhi ho.",
      "Har professional figure aur character workflow \u2014 illustration, animation, comics, concept art \u2014 ek gesture pass se shuru hota hai. Seedha careful, outline-first drawing pe jump karna sabse common wajah hai ki beginner ke figures stiff aur posed lagte hain, alive nahi."
    ],
    coreIdea: [
      "<b>Line of action:</b> ek single sweeping C-curve ya S-curve jo pose ka main thrust summarize karti hai, usually head se leke weight-bearing leg tak, body ke \"stretched\" side ke saath, seedha center ke bajaye.",
      "Rhythm aur flow yahan literal silhouette se zyada matter karte hain \u2014 gesture drawing body masses (rib cage, pelvis) ke beech ka underlying connection dhoondhti hai, exact contour trace karne ke bajaye. Isse pose ki story draw karna samjho, uska outline nahi.",
      "Weight aur balance: ek standing figure ka center of gravity plausibly uske base of support ke upar hona chahiye, warna pose girta hua lagta hai. Gesture practice tumhe ye instantly feel karna sikhati hai, construction volume add karne se bhi pehle.",
      "Alag timed durations alag purpose serve karte hain. Tees-second poses tumhe sirf action line aur sabse badi masses dhoondhne pe force karte hain. Ek-do minute ke poses secondary masses jaise rib cage aur pelvis add karte hain. Paanch-das minute ke poses ek already-alive gesture ke upar construction aur proportion layer karna shuru karte hain. Short warm-ups ke bina seedha long poses pe jump karna ek common beginner shortcut hai jo ulta pad jaata hai."
    ],
    mistakes: [
      "Pehle ek careful outline banana aur baad mein gesture \"dhoondhne\" ki koshish karna, action line se start karne ke bajaye.",
      "Poora time budget outline aur detail pe kharch kar dena, un drills pe time khatam kar dena jo specifically isi ko rokne ke liye bane hain.",
      "Har pose ko symmetrically, straight center line ke around balance karke draw karna, jo stiff lagta hai \u2014 real poses lean karte hain, twist karte hain, weight shift karte hain.",
      "Short gesture warm-ups ke bina seedha long, detailed studies pe jump karna."
    ],
    proTips: [
      "Har session, koi bhi longer study se pehle, 30-second poses ke ek batch se warm up karo \u2014 koi exception nahi.",
      "Pose ke \"stretch side\" aur \"compression side\" dhoondho \u2014 torso ka ek side lambhi hoti hai, doosri compress hoti hai \u2014 aur action line ko stretch side follow karne do.",
      "Gesture drawings ka rough aur unfinished dikhna theek hai, expected hai. Wahi roughness poora point hai."
    ],
    practice: {
      warmup: "Kisi bhi reference source se dus 30-second gesture drawings, sirf ek confident action line per pose dhoondhne pe focus karte hue.",
      daily: "Ek mixed session: kai 30-second poses, phir kai 1-minute poses, phir do-teen 2-minute poses, time badhne ke saath mass aur rhythm build karte hue.",
      weekly: "Ek poori 20-30 minute ki timed gesture session, pose type deliberately vary karte hue \u2014 standing, sitting, dynamic action.",
      challenge: "Ek finished illustration ya photo choose karo aur sirf uska gesture draw karo, ek minute se kam mein, poori pose ko ek action line aur kuch supporting masses mein reduce karte hue."
    },
    quiz: [
      {q:"\"Line of action\" kya hai?", options:["Straight lines ke liye ek ruler","Ek single sweeping curve jo pose ka main thrust summarize karti hai","Ek figure ka outline","Ek type ka eraser"], correct:1, explain:"Ye ek hi line hai, usually C ya S-curve, jo poori pose ka main thrust capture karti hai."},
      {q:"Short 30-second gesture drawings ka rough aur unfinished dikhna expected hai.", options:["True","False"], correct:0, explain:"Wahi roughness poora point hai \u2014 ye drill tumhe pose ki energy fast dhoondhna sikhati hai, polished result banana nahi."},
      {q:"Is module mein kaunsi common beginner mistake ke baare mein warn kiya gaya hai?", options:["Bahut fast draw karna","Pehle ek careful outline banana aur baad mein gesture dhoondhna","Reference images use karna","Roz practice karna"], correct:1, explain:"Gesture pehle aana chahiye \u2014 finished outline pe baad mein energy retrofit karna rarely kaam karta hai."}
    ],
    checklist: [
      "Main ek confident action line se ek pose ek minute se kam mein summarize kar sakta/sakti hoon.",
      "Main ek simple standing pose ka stretch side aur compression side identify kar sakta/sakti hoon.",
      "Maine kam se kam ek poori 20-minute ya usse zyada ki timed gesture session, varied durations use karke, complete ki hai.",
      "Main bata sakta/sakti hoon ki ek technically accurate lekin ungestured figure aksar lifeless kyun lagta hai."
    ],
    nextStep: "Construction Method \u2014 Module 7 ke primitive forms se kisi bhi complex object banane ka professional workflow."
  },

  m10: {
    hook: "Kisi bhi object \u2014 simple ho ya absurdly complex \u2014 ko Module 7 ke primitive forms se banane ka professional workflow.",
    whyItMatters: [
      "Ye module ab tak ki har cheez ka synthesis point hai: shapes, forms, perspective, aur gesture ki loose energy bhi \u2014 sab yahan ek single repeatable process mein combine hote hain jo professionals literally kisi bhi cheez pe use karte hain, ek doorknob se leke ek dragon tak. Ek baar ye workflow internalize ho jaaye, \"X kaise draw karein\" ek memorized answer wala sawaal nahi rehta \u2014 ye ek sawaal ban jaata hai jo tum khud hamesha solve kar sakte ho.",
      "Ye is roadmap ke aage har subject-specific arc ka direct bridge bhi hai \u2014 heads, hands, animals, vehicles, environments. Ye sab isi construction process ke applications ki tarah sikhaye jaate hain, alag alag memorized skills ki tarah nahi."
    ],
    coreIdea: [
      "Construction hierarchy: agar subject ki koi pose hai to gesture ya orientation se start karo, phir sabse badi primitive forms ko roughly perspective mein block karo, phir un forms ko progressively cut, combine, aur refine karke actual subject banao, secondary aur tertiary detail sabse last mein add karte hue \u2014 same big-to-small hierarchy jo Module 6 mein thi, ab poore 3D mein apply.",
      "<b>Forms combine karna</b> matlab ek primitive ko doosre se attach karna \u2014 ek cylinder arm ek sphere shoulder joint se attach karke \u2014 simple parts se ek zyada complex structure banana.",
      "<b>Forms cut karna</b> matlab ek primitive ka chunk hataana taaki ek zyada specific shape reveal ho: ek mug ek cylinder hai jisme rim se ek wedge cut kiya gaya ho opening ke liye; ek doorway ek box ke through ek cut hai.",
      "Professionals forms ko mentally semi-transparent treat karte hain, shape ke far side ko track karte hue chahe wo final line art mein na dikhe, kyunki yahi cheez proportions aur perspective ko poore object mein consistent rakhti hai, sirf visible face pe nahi.",
      "Jab do forms intersect karti hain, to samajhna ki unki surfaces 3D mein actually kahan milti hongi \u2014 sirf outlines flat page pe kahan cross karti hain wahan nahi \u2014 yahi cheez ek construction ko believable banati hai, flat aur pasted-together nahi."
    ],
    mistakes: [
      "Seedha detailed line art pe jump karna, koi construction pass ke bina, jisse details ek coherent 3D form pe convincingly nahi baithte.",
      "Construction lines ko ek one-time step maan ke turant erase kar dena, poori drawing mein use hone wale ek running diagnostic tool ke bajaye.",
      "Forms ko combine karna bina soche ki unki surfaces 3D mein actually kaise intersect hongi, jisse shapes pasted-together lagti hain.",
      "Seedha ek complex final shape cut karne pe jump karna, us simple primitive ko pehle establish kiye bina jisse cut kiya jaa raha hai."
    ],
    proTips: [
      "Characters ya creatures try karne se pehle deliberately mundane objects pe practice karo \u2014 ek stapler, ek shoe, ek kettle. Construction logic simple hard-surface objects pe sikhna sabse aasan hai.",
      "Har construction pass ko jitna ho sake \"see-through\" rakho. Opaque final lines tabhi commit karo jab underlying form correct confirm ho chuka ho.",
      "Kisi complex object pe stuck ho to puchho \"ye kis sabse simple form se start ho sakta hai?\" \u2014 koi cut ya combination add karne se pehle."
    ],
    practice: {
      warmup: "Teen simple household objects \u2014 mug, lamp, shoe \u2014 sirf combined aur cut primitive forms use karke construct karo, paanch minute har ek.",
      daily: "Around se ek object choose karo aur usse poora construct karo: orientation, primitive blocking, combining-cutting, phir light detail \u2014 isi order mein.",
      weekly: "Ek hi object ko teen alag angles se construct karo, teeno mein construction logic consistent rakhte hue.",
      challenge: "Ek aisi object construct karo jo abhi tumhare saamne nahi hai \u2014 memory ya imagination se, jaise ek purana telephone \u2014 sirf construction process use karke, bina kisi reference ke."
    },
    quiz: [
      {q:"Yahan sikhaayi gayi construction hierarchy mein sabse pehle kya aata hai?", options:["Fine detail","Gesture ya orientation, aur sabse badi primitive forms","Saari guide lines erase karna","Color"], correct:1, explain:"Big-to-small: orientation aur primitive forms pehle aate hain, detail sabse aakhir mein."},
      {q:"Construction lines ko banate hi turant erase kar dena chahiye.", options:["True","False"], correct:1, explain:"Ye poori drawing mein use hone wala ek running diagnostic tool hai, turant chhupaane wali scaffolding nahi."},
      {q:"Construction drawing mein form \"cut\" karne ka matlab kya hai?", options:["Poori drawing erase karke dobara shuru karna","Ek primitive form ka chunk hataana ek zyada specific shape reveal karne ke liye","Paper pe scissors use karna","Sharp pencil pe switch karna"], correct:1, explain:"Jaise, ek mug ek cylinder hai jisme opening ke liye ek wedge cut kiya gaya ho."}
    ],
    checklist: [
      "Main do ya zyada primitive forms combine karke ek simple object construct kar sakta/sakti hoon.",
      "Main ek single primitive form se chunk cut karke ek simple object construct kar sakta/sakti hoon.",
      "Main construction lines visible rakhta/rakhti hoon aur unhe ek check ki tarah treat karta/karti hoon, turant erase karne wali scaffolding ki tarah nahi.",
      "Main ek hi simple object ko kam se kam do alag angles se consistent logic ke saath construct kar sakta/sakti hoon."
    ],
    nextStep: "Light & Shadow Logic \u2014 shading pencil uthaane se pehle ye samajhna ki shadows wahin kyun padte hain."
  },

  m11: {
    hook: "Ek shadow render karna seekhne se pehle, ye samajhna ki wo exist kyun karta hai \u2014 jo physics beginners skip karte hain aur baad mein uski keemat chukate hain.",
    whyItMatters: [
      "Ye module jaanbujh kar Shading (Module 12) se alag rakha gaya hai. Light logic samjhe bina rendering technique aisi shading banati hai jo isolation mein plausible lagti hai lekin scrutiny mein fall apart ho jaati hai \u2014 shadows galat direction mein, forms jo actually kisi consistent source se light receive karte hue nahi lagte. Shadow wahan kyun padta hai, ye samajhna, use render kaise karna hai usse pehle aana chahiye.",
      "Har professional rendering workflow, traditional ho ya digital, ek single, consistent light source establish karke aur ek bhi mark shade karne se pehle uski logic through karke shuru hota hai. Ye step skip karna sabse common wajah hai ki beginner ki shading confused lagti hai, convincing nahi."
    ],
    coreIdea: [
      "<b>Core shadow</b> object ke khud pe wo shadow hai jo light se door face pe hoti hai. <b>Cast shadow</b> wo shadow hai jo object doosri surface pe daalta hai. Beginners aksar inhe mix kar dete hain, lekin ye differently behave karte hain aur inke edge quality bhi alag hote hain.",
      "<b>Form shadow terminator</b> wo line hai \u2014 hamesha sharp nahi \u2014 jahan surface lit se shadowed mein turn hoti hai, object ki actual 3D curvature follow karte hue. Yahi cheez shading ko volume ki tarah read karati hai, ek shape ke upar flat gradient ki tarah nahi.",
      "Shadowed areas rarely pure black hote hain \u2014 usually unme faint <b>reflected light</b> aati hai jo nearby surfaces se bounce karke aati hai, sivaye <b>occlusion shadow</b> points ke, jahan do surfaces closely milti hain aur almost saara light block kar deti hain. Occlusion shadows aksar scene ki actual darkest values hoti hain, core shadow se bhi darker.",
      "Shading start karne se pehle ek single, consistent light source direction decide karni hoti hai, aur scene ka har shadow \u2014 core, cast, aur occlusion \u2014 us ek decision ke saath logically consistent rehna chahiye. Multiple inconsistent implied light sources sabse fast tarika hai jisse drawing \"off\" lagti hai, un viewers ko bhi jo bata nahi sakte kyun.",
      "<b>Rim light</b> \u2014 light jo form ke edge ke around peeche se wrap hoti hai, use similar-toned background se separate karti hai \u2014 professional work mein common hai aur overdo karna bahut aasan hai."
    ],
    mistakes: [
      "Form ke shadow side ko flat, uniform gray se shade karna, terminator ki actual curve follow karne ke bajaye.",
      "Shadow side ko pure black bana dena, wo reflected light ignore karke jo almost hamesha usme bounce karke aata hai.",
      "Cast shadows ko galat shape ya angle pe draw karna established light source ke relative, ya koi consistent light source decide hi na karna.",
      "Contact points pe occlusion shadows miss karna \u2014 jahan object surface ko touch karta hai, jahan do forms milti hain \u2014 jo usually scene ki actual darkest values hoti hain."
    ],
    proTips: [
      "Kuch bhi shade karne se pehle, zor se bolo ya likh lo ki light source exactly kahan hai. Agar ye ek sentence mein answer nahi ho sakta, to shading mein ye dikh jaayega.",
      "Kisi real object ko ek single light source ke neeche squint karke dekho aur note karo ki terminator, cast shadow, aur occlusion shadow actually kahan padte hain, imagination se invent karne ki koshish karne se pehle.",
      "Reflected light almost hamesha core shadow ke lightest edge se darker rehni chahiye, warna wo ek accidental second light source jaisi lagti hai."
    ],
    practice: {
      warmup: "Ek single sphere ko ek clear light source ke neeche shade karo, jaanbujh kar core shadow, cast shadow, terminator, reflected light, aur occlusion shadow include karte hue.",
      daily: "Ek simple object dhoondho ya set karo ek strong light source ke neeche aur, abhi shade kiye bina, identify karo ki upar wale paanch shadow elements mein se har ek kahan padega.",
      weekly: "Ek hi simple form \u2014 sphere, cube, ya cylinder \u2014 ko teen alag light directions ke neeche shade karo, compare karte hue ki shadow shapes kaise change hoti hain.",
      challenge: "Ek flat, evenly-lit photo lo aur through karo ki agar ek strong light ek side se introduce ki jaaye to shadows kahan padengi, phir wo lighting form pe sketch karo."
    },
    quiz: [
      {q:"Core shadow aur cast shadow mein kya fark hai?", options:["Koi fark nahi hai","Core shadow object pe khud hoti hai; cast shadow doosri surface pe daali jaati hai","Core shadow hamesha darker hoti hai","Cast shadow sirf outdoors hoti hai"], correct:1, explain:"Core shadow object ki khud ki surface pe rehti hai; cast shadow wo hai jo wo kisi aur cheez pe daalta hai."},
      {q:"Form ke shadow side ko usually pure black hona chahiye, bina kisi reflected light ke.", options:["True","False"], correct:1, explain:"Shadowed areas mein usually faint reflected light aati hai nearby surfaces se, sivaye occlusion points ke."},
      {q:"Scene mein actual darkest values usually kahan milti hain?", options:["Core shadow mein","Occlusion shadows mein, jahan do surfaces closely milti hain","Cast shadow ke edge pe","Rim light areas mein"], correct:1, explain:"Occlusion points almost saara light block karte hain, jisse ye aksar core shadow se bhi darker ho jaate hain."}
    ],
    checklist: [
      "Main ek simple sphere pe core shadow, cast shadow, terminator, reflected light, aur occlusion shadow naam le sakta/sakti hoon aur locate kar sakta/sakti hoon.",
      "Main ek form ko is tarah shade kar sakta/sakti hoon ki shading terminator ki curve follow kare, flat gray patch ki tarah baithne ke bajaye.",
      "Main poori shaded drawing mein ek single, consistent light source logic maintain karta/karti hoon.",
      "Main identify kar sakta/sakti hoon ki ek simple scene mein actual darkest value kahan hogi, aur bata sakta/sakti hoon kyun."
    ],
    nextStep: "Shading Systems \u2014 is module ki light logic ko actually render karne ke liye use hone wali mark-making techniques."
  },

  m12: {
    hook: "Hatching, cross-hatching, aur blending style choices nahi hain \u2014 har ek alag rendering problem solve karta hai, aur professionals deliberately choose karte hain.",
    whyItMatters: [
      "Module 11 ne establish kiya ki shadows kahan padte hain; ye module cover karta hai ki unhe pencil se actually kaise render karein. Beginners usually ek hi technique default use karte hain, usually stump ya finger se blending, har cheez ke liye, bina realize kiye ki har shading technique ke speed, texture, aur control mein real tradeoffs hain jinke beech professionals jaanbujh kar choose karte hain.",
      "Shading technique ko subject ke material aur mood se bhi match karna hota hai \u2014 smooth blended shading confident cross-hatching se bahut alag lagti hai, aur technique ko subject se mismatch karna ek common tarika hai jisse ek otherwise well-constructed drawing \"off\" lagne lagti hai."
    ],
    coreIdea: [
      "<b>Hatching:</b> parallel lines, jinka spacing aur pressure perceived value control karte hain. Fast hai, hand-drawn energy rakhta hai, confident sketch-based rendering ke liye achha kaam karta hai.",
      "<b>Cross-hatching:</b> alag angles pe layered hatching taaki overlap se deeper value bane, useful hai unhe darker values tak pahunchne ke liye jo single-direction hatching cleanly achieve nahi kar sakti.",
      "<b>Contour hatching:</b> hatching lines jo form ki actual curvature follow karti hain, uniformly parallel rehne ke bajaye \u2014 directly Module 7 ki cross-contour idea ko reinforce karta hai. Ye sabse effective techniques mein se ek hai shading ko genuine volume ki tarah read karaane ke liye.",
      "<b>Blending:</b> stump, tissue, ya finger se graphite ko smooth karna smooth gradients ke liye. Realistic rendering mein common hai, lekin default choice ban jaaye to easily overuse hoke ek muddy, textureless result de deta hai.",
      "Professionals typically ek rough value map block karte hain \u2014 light, mid, aur dark masses \u2014 final technique commit karne se pehle, taaki overall value structure detail add hone se pehle bhi correctly read ho. Value structure settle hone se pehle fine detail render karna ek common, fixable beginner mistake hai."
    ],
    mistakes: [
      "Sab kuch default se blend kar dena, jisse flat, muddy shading banti hai bina kisi texture ya hand-drawn energy ke.",
      "Bade value masses correctly establish hone se pehle fine detail add karna, jisse early achha kaam baad mein structural value errors se undermine ho jaata hai.",
      "Aisi hatching lines use karna jo form ki actual curvature ignore karti hain, us curved terminator ko flatten kar deti hain jo Module 11 ne correctly identify kiya tha.",
      "Ek hi drawing mein bina kisi wajah ke randomly shading technique switch karte rehna, jisse final rendering inconsistent lagti hai."
    ],
    proTips: [
      "Final rendering approach commit karne se pehle ek rough value thumbnail karo \u2014 sirf light, mid, dark shapes, koi technique nahi.",
      "Har technique ko ek hi simple form pe practice karo, jaise ek sphere, taaki comparison fair rahe aur tradeoffs clearly dikhein.",
      "Contour hatching ko early deliberately over-practice karna worth hai, kyunki ye Module 7 aur 11 ki volume aur form understanding ko sabse directly reinforce karta hai."
    ],
    practice: {
      warmup: "Ek hi simple sphere ko char baar shade karo \u2014 hatching, cross-hatching, contour hatching, blending \u2014 identical lighting ke saath.",
      daily: "Ek chhota object choose karo aur usse poora render karo: pehle rough value thumbnail, phir ek deliberately choose ki hui technique.",
      weekly: "Ek still life object ko sirf contour hatching se render karo, har line se form ki curvature track karte hue.",
      challenge: "Ek complex lighting wali photo reference lo aur sirf ek three-value rough banao \u2014 light, mid, dark masses, koi technique nahi, koi detail nahi \u2014 aage kuch bhi render karne se pehle."
    },
    quiz: [
      {q:"Contour hatching regular hatching se alag kya karta hai?", options:["Color use karta hai","Form ki actual curvature follow karta hai, uniformly parallel rehne ke bajaye","Hamesha faster hota hai","Blending stump chahiye"], correct:1, explain:"Contour hatching lines form ke around wrap hoti hain, directly uski 3D curvature dikhate hue."},
      {q:"Bade light, mid, aur dark value masses establish karne se pehle fine detail add karna best hai.", options:["True","False"], correct:1, explain:"Value structure pehle settle honi chahiye \u2014 bahut jaldi add ki gayi detail baad mein structural value errors se undermine ho jaati hai."},
      {q:"Har cheez ke liye default blending use karne ka kya risk hai?", options:["Seekhne mein bahut time lagta hai","Flat, muddy shading banti hai bina texture ya energy ke","Sirf color mein kaam karta hai","Expensive tools chahiye"], correct:1, explain:"Zyada blending drawing ki energy aur texture ko mud mein flatten kar deta hai."}
    ],
    checklist: [
      "Main ek hi simple form ko kam se kam teen alag shading techniques use karke render kar sakta/sakti hoon.",
      "Main apne shabdon mein bata sakta/sakti hoon ki hatching versus blending versus contour hatching kab choose karunga/karungi.",
      "Main detailed rendering technique commit karne se pehle ek rough value structure block karta/karti hoon.",
      "Meri hatching lines surface ki parwaah kiye bina uniformly parallel rehne ke bajaye form ki actual curvature follow karti hain."
    ],
    nextStep: "Texture \u2014 is module ki shading systems ke upar baithne wali specific surface qualities render karna."
  },

  m13: {
    hook: "Wood, metal, aur fabric ko identical lighting ke neeche bhi alag mark-making kyun chahiye \u2014 aur wo two-step process jisse texture noise banne se bach jaata hai.",
    whyItMatters: [
      "Texture final layer hai, jo Module 11 aur 12 mein already establish ki gayi light logic aur shading technique ke upar baithta hai. Un foundations ke solid hone se pehle render ki gayi texture visual noise ban jaati hai, ek convincing surface ke bajaye \u2014 yehi wajah hai ki ye module arc mein sabse last mein hai.",
      "Convincing texture ka matlab surface ke har visible detail ko copy karna nahi hai. Ye correctly padhne ke baare mein hai ki light alag surface properties pe kaise differently behave karti hai \u2014 rough versus smooth, hard versus soft, matte versus reflective \u2014 aur usi interaction ko render karna, literal detail count ko nahi."
    ],
    coreIdea: [
      "Har material ka texture asal mein describe karta hai ki us surface pe light kaise behave karti hai. Rough surfaces \u2014 wood, stone, fabric \u2014 light ko unevenly scatter karte hain, Module 11 ke shadow terminator ko chhote, irregular value shifts mein tod dete hain. Smooth surfaces \u2014 metal, glass, polished skin \u2014 sharp, high-contrast highlights rakhte hain aur apne surroundings ko reflect karte hain.",
      "Two-step texture process: pehle, underlying form ko already-covered light logic aur shading systems use karke correctly render karo \u2014 object ko ek solid 3D shape ki tarah read hona chahiye koi bhi texture add karne se pehle. Phir us already-correct value structure ke upar texture cues layer karo, mid-tones mein zyada concentrate karte hue, jahan aankh sabse zyada detail padhti hai, aur darkest shadows aur brightest highlights mein reduce karte hue, jahan extreme values naturally visible detail suppress kar deti hain.",
      "Texture density aur contrast distance ke saath decrease honi chahiye, Module se atmospheric depth logic ko echo karte hue \u2014 foreground mein ek tree individual bark texture dikhata hai; wahi tree background mein far door se ek soft, textureless mass ki tarah read hota hai. Dono ko equal density pe render karna depth ka sense flatten kar deta hai.",
      "Professionals aksar ek repetitive texture ka ek chhota, sharply-focused patch render karte hain \u2014 individual bricks, wood grain, fabric weave \u2014 aur baaki surface ko looser, less detailed marks se wahi texture imply karne dete hain. Poori surface pe har single instance render karna usually zyada mechanical aur kam convincing lagta hai ek well-chosen selective patch se."
    ],
    mistakes: [
      "Poori surface pe texture detail evenly render karna, distance ya focal importance ki parwaah kiye bina, jo flat, busy noise lagta hai, ek receding surface ke bajaye.",
      "Underlying form ki value structure aur light logic correct hone se pehle texture add karna, isliye texture ek aise form ko fix nahi kar sakta jo already solid nahi read hota.",
      "Saari rough ya busy surfaces ko same tarike se treat karna, ye observe karne ke bajaye ki har specific material light ko actually kaise scatter ya reflect karta hai.",
      "Har highlight aur shadow mein texture over-render kar dena, jabki extreme values mein reduced detail usually uniform density se zyada convincing hota hai."
    ],
    proTips: [
      "Ek repetitive texture ka ek chhota, sharply-focused patch render karo, phir baaki surface ko pattern loosely imply karne do \u2014 ye zyada convincing lagta hai aur kaafi kam time leta hai.",
      "Jaise value zyada extreme hoti hai aur distance badhti hai, texture detail kam karo \u2014 matching karte hue ki aankh real surfaces ko actually kaise perceive karti hai.",
      "Jab texture rendering kaam nahi kar rahi, pehle check karo ki underlying form ki shading actually correct hai ya nahi \u2014 texture ek aise form ko rescue nahi kar sakta jo solid nahi read hota."
    ],
    practice: {
      warmup: "Char chhote identical squares ko alag textures mein render karo \u2014 wood, metal, fabric, stone \u2014 sirf value aur mark-making use karke, koi color nahi.",
      daily: "Around se ek textured object choose karo aur uske texture ka ek chhota, focused patch poori detail mein render karo, phir baaki surface ko looser, implied marks se extend karo.",
      weekly: "Ek hi simple form \u2014 sphere ya cube \u2014 ko teen materials mein render karo: rough stone, polished metal, soft fabric, compare karte hue ki light har ek pe kitni differently behave karti hai.",
      challenge: "Ek scene render karo jisme ek hi texture teen alag distances pe ho \u2014 near, mid, far \u2014 distance badhne ke saath deliberately detail aur contrast kam karte hue."
    },
    quiz: [
      {q:"Is module ke hisaab se, drawing mein texture add karne se pehle kya ho chuka hona chahiye?", options:["Kuch nahi, texture pehle aata hai","Underlying form ki value structure aur light logic already correct honi chahiye","Paper sand kiya jaana chahiye","Drawing ink honi chahiye"], correct:1, explain:"Texture ek aise form ke upar baithta hai jo already solid read hota hai \u2014 ye khud se wo solidity create nahi kar sakta."},
      {q:"Texture detail scene mein object ki distance ki parwaah kiye bina same rehni chahiye.", options:["True","False"], correct:1, explain:"Texture density aur contrast distance ke saath decrease honi chahiye, matching karte hue ki aankh real surfaces ko kaise perceive karti hai."},
      {q:"Brick ya wood grain jaisi repetitive texture render karne ka recommended approach kya hai?", options:["Har single instance ko poori detail mein render karna","Texture poori tarah skip karna","Ek chhota focused patch detail mein render karo aur baaki loosely imply karo","Sirf straight lines use karna"], correct:2, explain:"Ek focused, detailed patch plus looser implied surrounding texture zyada convincing lagta hai aur kaafi kam time leta hai."}
    ],
    checklist: [
      "Main bata sakta/sakti hoon ki rough aur smooth surfaces ko identical lighting ke neeche bhi alag mark-making kyun chahiye.",
      "Main ek focused, detailed texture patch render karta/karti hoon aur baaki surface ko usi texture ko loosely imply karne deta/deti hoon.",
      "Main extreme values mein \u2014 deep shadow, bright highlight \u2014 texture detail kam karta/karti hoon, usse uniformly render karne ke bajaye.",
      "Main object ki scene mein distance badhne ke saath texture density aur contrast kam karta/karti hoon."
    ],
    nextStep: "Composition Foundations \u2014 ab tak bana sab kuch ek single image mein arrange karna jo actually aankh ko guide kare."
  },

  m14: {
    hook: "Is poore arc ki har technique, badly arrange ki jaaye, to bhi fail ho jaati hai \u2014 composition decide karta hai ki viewer ki aankh wahin jaaye jahan tum chahte ho.",
    whyItMatters: [
      "Ye module Perspective & Construction arc ko zoom back out karke close karta hai. Ab tak jo kuch seekha \u2014 forms, perspective, gesture, construction, light, shading, texture \u2014 individually excellent ho sakta hai aur phir bhi ek weak image bana sakta hai agar composition use organize na kare. Composition wo layer hai jo decide karta hai viewer pehle kya dekhega, phir kya, aur last mein kya.",
      "Ye module jaanbujh kar arc mein first ke bajaye last rakha gaya hai, kyunki composition decisions \u2014 kya focus mein hai, kya recede kar raha hai, light sabse strong kahan hai \u2014 tabhi sense banate hain jab tumhe pata ho ki perspective, light, aur rendering actually kya kar sakte hain. In tools ke exist karne se pehle composition sikhana sirf abstract theory hai."
    ],
    coreIdea: [
      "<b>Visual hierarchy:</b> ek composition mein ek clear focal point hona chahiye jo pehle read ho, contrast se establish kiya gaya \u2014 value, detail, sharpness, ya color ka \u2014 sirf position se nahi. Image ka \"sabse different\" area aankh ko khinchta hai, isliye focal point ko highest-contrast ya most-detailed area banana usually sirf center karne se zyada reliable hai.",
      "Rule of thirds aur golden ratio simplified placement guides hain, laws nahi. Dono ka existence hai us common beginner default se bachne ke liye jisme subject ko dead-center rakh diya jaata hai even, static space ke saath sabhi sides pe, jo usually visually inert lagta hai.",
      "<b>Leading lines:</b> perspective lines, edges, aur implied lines of sight \u2014 koi figure jo kahin dekh raha ho ya point kar raha ho \u2014 deliberately use ki ja sakti hain viewer ki aankh ko composition ke through focal point tak route karne ke liye, eye movement ko chance pe chhodne ke bajaye.",
      "Negative space filled space jitna hi visual weight carry karta hai. Ek composition technically \"balanced\" ho sakta hai \u2014 left aur right equal visual weight \u2014 aur phir bhi static aur boring lag sakta hai, ya deliberately unbalanced ho sakta hai jo tension aur movement create kare. Balance ek tool hai, hamesha goal nahi.",
      "Foreground, midground, aur background layering, Module 13 ki atmospheric aur texture-density logic ke saath combine hoke, wahi hai jo ek poori scene mein convincing depth ka sense create karta hai, alag alag render kiye gaye objects ka flat arrangement nahi."
    ],
    mistakes: [
      "Subject ko default se center karna, sabhi sides pe perfectly even space ke saath, jisse ek static, visually inert composition banti hai.",
      "Composition ke do ya zyada areas ko equally strong contrast aur detail dena, isliye aankh ko pehle kahan jaana hai koi clear jagah nahi milti.",
      "Scene ke perspective mein already present leading lines ignore karna, aankh ko focal point ki taraf guide karne ke bajaye wander karne dena.",
      "Negative space ko leftover, unplanned area ki tarah treat karna, ek active compositional tool ki jagah."
    ],
    proTips: [
      "Composition ko squint karke dekho, ya usse chhota aur blurred dekho, ye check karne ke liye ki fine detail gayab hone ke baad bhi focal point read hota hai ya nahi \u2014 same trick jo Module 6 mein thi, ab poori image ke level pe apply.",
      "Final layout commit karne se pehle kai chhoti, fast thumbnail composition sketches banao. Professionals routinely paanch ya usse zyada generate karte hain ek choose karne se pehle.",
      "Focal point pe contrast \u2014 value, detail, ya sharpness \u2014 push karo aur deliberately baaki har jagah reduce karo, har area ko equal intensity se render karne ke bajaye."
    ],
    practice: {
      warmup: "Ek hi simple scene ke paanch tiny thumbnail compositions draw karo, kuch inches ke, sirf focal point ki position vary karte hue.",
      daily: "Koi existing drawing ya reference image lo, uska focal point identify karo, phir wo leading lines trace ya describe karo jo aankh ko uski taraf guide karti hain.",
      weekly: "Teen se paanch objects ka ek simple scene scratch se compose karo, deliberately contrast aur leading lines use karke ek clear focal point establish karte hue.",
      challenge: "Ek composition lo jispe tum genuinely unsure ho, aur teen deliberately alag versions banao \u2014 ek rule of thirds follow karte hue, ek jaanbujh kar centered, ek intentionally unbalanced \u2014 aur compare karo ki actually kaunsa best kaam karta hai."
    },
    quiz: [
      {q:"Is module ke hisaab se, viewer ki aankh ko usually focal point ki taraf kya khinchta hai?", options:["Usse exactly center mein rakhna","Contrast \u2014 value, detail, sharpness, ya color ka","Usse hamesha sabse badi object banana","Sirf bright colors"], correct:1, explain:"Image ka sabse different area usually aankh ko pehle khinchta hai."},
      {q:"Rule of thirds aur golden ratio strict laws hain jo hamesha follow karni chahiye.", options:["True","False"], correct:1, explain:"Ye placement guides hain jo default se subject ko dead-center karne se bachane ke liye hain, fixed rules nahi."},
      {q:"Ye module negative space ke baare mein kya kehta hai?", options:["Ye empty, unplanned leftover area hai","Ye real visual weight carry karta hai aur ek active compositional tool hai","Ise hamesha detail se bharna chahiye","Ye sirf black-and-white art mein matter karta hai"], correct:1, explain:"Negative space ko ek deliberate tool ki tarah treat kiya jaata hai, ignore karne wali leftover space ki tarah nahi."}
    ],
    checklist: [
      "Main kisi existing image mein focal point identify kar sakta/sakti hoon aur bata sakta/sakti hoon ki wahan aankh khinchne wala contrast kya create karta hai.",
      "Main final layout commit karne se pehle ek hi scene ke kai fast thumbnail compositions bana sakta/sakti hoon.",
      "Main leading lines ko deliberately use karta/karti hoon aankh ko focal point ki taraf guide karne ke liye, use chance pe chhodne ke bajaye.",
      "Main bata sakta/sakti hoon ki negative space ek active compositional tool kyun hai, empty leftover space nahi."
    ],
    nextStep: "Perspective & Construction complete ho gaya. Next: Head & Portrait \u2014 skull anatomy, Loomis aur Asaro methods, aur kisi bhi angle se ek believable human head construct karna."
  },

  m15: {
    hook: "Face memorize karne se kaam nahi banta \u2014 jab subject human head ho, to \"construction over copying\" ka asli matlab kya hota hai.",
    whyItMatters: [
      "Portraiture mein sabse zyada log isi wajah se fail hote hain: face ek aisi cheez hai jisme har viewer already expert hota hai \u2014 sabne zindagi bhar faces read ki hain. Beginners shortcut lete hain memorized formulas se (\"eyes ek eye-width apart hoti hain\"), bina us 3D structure ko samjhe jo ye formulas actually describe karte hain \u2014 result aisa face hota hai jo paper pe technically theek hai, phir bhi kuch off lagta hai.",
      "Is poori arc ka sirf ek hi goal hai: imagination se, kisi bhi angle ya lighting mein, ek believable head construct karna \u2014 kisi ek reference photo ko reproduce karna nahi. Module 1 wali construction-versus-copying baat yahan is course mein sabse zyada test hoti hai."
    ],
    coreIdea: [
      "Professionals facial features memorize nahi karte. Wo <b>structure</b> (skin ke neeche ki bone landmarks) aur <b>proportion</b> (features ke beech ka relationship) samajhte hain, aur ye bhi jaante hain ki stylization asal mein realistic structure ke upar hi build hoti hai, uski replacement nahi hoti. Ek exaggerated anime ya cartoon face bhi ek underlying realistic structure ka jaanbujh kar kiya gaya distortion hai \u2014 yahi wajah hai ki ye arc skull aur construction methods se start hoti hai, kisi eye ko draw karna sikhane se nahi.",
      "Faces pe ye specifically kaise apply hota hai dekho: ek memorized \"formula face\" har angle se same dikhta hai kyunki wo kabhi ek real 3D object ki tarah bana hi nahi. Ek constructed head, chahe simplified ho, convincingly rotate kar sakta hai kyunki uske peeche actual spatial logic hoti hai \u2014 Module 10 wala hi construction principle, ab drawing ke sabse zyada scrutinize kiye jaane wale subject pe."
    ],
    mistakes: [
      "Memorized proportions se ek generic face bana dena, bina kisi underlying 3D structure ke \u2014 result ek flat, mask jaisa face hota hai jo doosre angles se collapse ho jaata hai.",
      "Individual features \u2014 eyes, nose, mouth \u2014 ko isolation mein study karna, ye samjhe bina ki wo bigger head structure pe actually kaise sit karte hain.",
      "Ek hi reference photo ko baar baar copy karte rehna, iske bajaye genuine 3D understanding build karna jo naye photo ya imagined angle pe bhi transfer ho jaaye."
    ],
    proTips: [
      "Next module mein skull ko optional mat samjho, mandatory samjho \u2014 ye is poori arc ka single highest-leverage lesson hai.",
      "Jab koi portrait \"off\" lage aur pata na chale kyun, feature ke details check karne se pehle structure aur proportion check karo."
    ],
    practice: {
      warmup: "Abhi kuch bhi zaroori nahi \u2014 ye ek short conceptual module hai, drawing session nahi.",
      daily: "Is module ke liye applicable nahi.",
      weekly: "Bina kisi reference ke, purely memory se, paanch faces banao \u2014 bilkul waise jaise tum aaj banaoge. Date karke alag rakh do \u2014 is arc ke end mein inhe apne kaam se compare karoge.",
      challenge: "Same person ki alag angles se li gayi kai photos dekho aur identify karo ki face ke kaunse parts visibly shift hote hain, aur kaunse hisse angle badalne pe bhi proportionally consistent rehte hain."
    },
    quiz: [
      {q:"Ye module kyun kehta hai ki sirf memorized facial proportions usually fail ho jaate hain?", options:["Wo hamesha mathematically galat hote hain","Wo ek 3D structure describe karte hain use actually build kiye bina, isliye result kisi doosre angle se hold nahi hota","Art schools mein memorization allowed nahi hai","Proportions kabhi matter hi nahi karte"], correct:1, explain:"Underlying structure ke bina, ek formula har angle se same dikhta hai kyunki wo kabhi ek real 3D object ki tarah bana hi nahi tha."},
      {q:"Is module ke hisaab se, ye poori arc kis cheez ki taraf le jaati hai?", options:["Ek reference photo ko perfectly copy karna","Imagination se, kisi bhi angle ya lighting mein, ek believable head construct karna","Das generic face templates yaad karna","Seedha facial expressions pe kood jaana"], correct:1, explain:"Poori arc us construction ki taraf aim karti hai jo generalize kare, kisi ek specific image ki reproduction ki taraf nahi."},
      {q:"Ek highly stylized anime ya cartoon face ko is module mein kaise describe kiya gaya hai?", options:["Realistic anatomy se koi lena dena nahi","Ek underlying realistic structure ka jaanbujh kar kiya gaya distortion","Purely random design choices","Construct karna hi impossible"], correct:1, explain:"Stylization ek jaanbujh kar kiya gaya distortion hai jo real structure ke upar build hota hai, use samajhne ka replacement nahi."}
    ],
    checklist: [
      "Main apne shabdon mein explain kar sakta/sakti hoon ki sirf memorized proportions se aisi faces kyun banti hain jo thodi off lagti hain.",
      "Construction-versus-copying wala fark heads pe specifically kaise apply hota hai, ye main samajhta/samajhti hoon.",
      "Maine five-face baseline memory drawing complete kar li hai aur baad mein compare karne ke liye alag rakh di hai.",
      "Main identify kar sakta/sakti hoon ki angle badalne pe face ke kaunse parts shift hote hain aur kaunse proportionally stable rehte hain."
    ],
    nextStep: "The Skull \u2014 wo bone structure jise har facial feature, jo tum kabhi bhi draw karoge, quietly follow karta hai."
  },

  m16: {
    hook: "Jo bhi facial feature tum kabhi draw karoge, wo neeche ki haddi ki hi instructions follow kar raha hota hai.",
    whyItMatters: [
      "Is arc ka baaki har module \u2014 proportions, Loomis, Asaro, individual features \u2014 asal mein skull structure ka hi ek consequence describe kar raha hai. Skull skip karke seedha \"fun parts\" jaise eyes aur expressions pe pahunch jaana sabse common shortcut hai jo ek portrait artist ki ceiling cap kar deta hai \u2014 kyunki phir har agla lesson samjha nahi, sirf memorize kiya jaata hai."
    ],
    coreIdea: [
      "Feel se pehchan mein aane chahiye ye major landmarks: <b>cranium</b> (round braincase), <b>brow ridge</b>, <b>zygomatic arch</b> (cheekbone), <b>eye sockets</b>, <b>nasal cavity</b>, aur <b>jaw / mandible</b>. Har ek directly explain karta hai ki koi facial feature wahin kyun hai, jo warna arbitrary lagta \u2014 brow ridge hi wajah hai ki eyebrows wahan sit karti hain aur eye sockets natural shadow cast karte hain; zygomatic arch hi wajah hai cheekbone highlight aur uske neeche wale hollow ki; jaw hinge hi decide karta hai mouth kaise open hota hai.",
      "Skull shape age ke saath meaningfully badalti hai: ek bachche ki skull mein cranium proportionally bada hota hai aur jaw-face chota, isiliye ek adult face ko bas shrink kar dena kabhi child jaisa convincing nahi lagta. Sex ke hisaab se bhi thoda farak hota hai \u2014 male skulls mein typically brow ridge aur jaw thoda zyada pronounced hote hain, halaanki individual variation itna zyada hai ki isse ek tendency hi kaho, rule nahi.",
      "Skull ko flat anatomy-chart image ki tarah yaad nahi karna hota. Ise ek simplified 3D form ki tarah samjho, bilkul waise jaise Module 7 mein sphere ya cube treat hua tha \u2014 rotate karo, alag angles se check karo \u2014 aur yahi seedha bridge hai kuch modules baad wale Loomis method tak."
    ],
    mistakes: [
      "Skull study poori tarah skip karke seedha eyes aur lips jaisi surface features pe jump kar jaana.",
      "Skull ko ek flat reference image ki tarah treat karna jo copy karni hai, na ki ek 3D form jo alag alag angles se samajhni hai.",
      "Bachche ke face ko bas ek scaled-down adult face ki tarah draw kar dena, real skeletal proportion differences ko ignore karte hue."
    ],
    proTips: [
      "Skull ko same teen-chaar angles se baar baar draw karo \u2014 front, profile, three-quarter, tilted \u2014 jab tak landmarks automatic na feel hone lagein, tabhi aage badho.",
      "Is arc mein aage kabhi bhi koi feature ki placement arbitrary lage, to use wapas kisi skull landmark tak trace karo. Almost kabhi actually arbitrary nahi hoti."
    ],
    practice: {
      warmup: "Ek simplified skull shape banao \u2014 sirf major masses: cranium, jaw, cheekbone \u2014 front se, do minute se kam mein.",
      daily: "Is hafte har din skull ke major landmarks \u2014 cranium, brow ridge, zygomatic arch, jaw \u2014 ek naye angle se draw karo.",
      weekly: "Ek simplified adult skull ko ek child skull ke saath side by side compare karo, kam se kam teen proportional differences label karte hue.",
      challenge: "Same simplified skull ko chaar angles se \u2014 front, profile, three-quarter, tilted up \u2014 ek hi sitting mein draw karo, landmark placement chaaron mein consistent rakhte hue."
    },
    quiz: [
      {q:"Brow ridge eyebrows convincingly draw karne ke liye kyun important hai?", options:["Important nahi hai, eyebrows ka bone structure se lena dena hi nahi","Ye wahi bone landmark hai jo batata hai eyebrows kahan sit karti hain aur eye sockets natural shadow kyun cast karte hain","Sirf older subjects ke liye matter karta hai","Ye hair color affect karta hai"], correct:1, explain:"Eyebrow placement aur eye-socket shadow, dono neeche wale brow ridge tak jaakar trace hote hain."},
      {q:"Bas ek adult face shrink kar dena, ek convincing child face kyun nahi banata?", options:["Children ke faces adults se proportionally alag hote hi nahi","Ek child ki skull mein cranium proportionally bada hota hai aur jaw chota, adult ke comparison mein","Ye sirf ek stylistic preference hai","Scaling se hamesha kaam ban jaata hai"], correct:1, explain:"Actual skeletal proportions alag hote hain, sirf size nahi \u2014 isliye sirf scaling se baat nahi banti."},
      {q:"Ye module skull ko structurally kaise treat karne ko kehta hai?", options:["Ek flat reference image jo ek baar copy kar li jaaye","Ek simplified 3D form jise rotate karke, kai angles se samjha jaaye","Stylized art ke liye unnecessary","Draw nahi, chart ki tarah yaad karo"], correct:1, explain:"Wahi approach jo Module 7 mein basic forms ke saath thi \u2014 rotate karo, angles se check karo, real spatial understanding build karo."}
    ],
    checklist: [
      "Cranium, brow ridge, zygomatic arch, eye sockets, aur jaw \u2014 inhe ek simplified skull pe naam le sakta/sakti hoon aur roughly place kar sakta/sakti hoon.",
      "Main ek simplified skull ko kam se kam teen alag angles se draw kar sakta/sakti hoon.",
      "Ek child aur ek adult ki skull mein kam se kam do proportional differences bata sakta/sakti hoon.",
      "Kam se kam ek facial feature ki placement ko directly kisi skull landmark se connect kar sakta/sakti hoon."
    ],
    nextStep: "Proportions \u2014 features ke beech ke wo relationships jo ek constructed head ko ek specific, believable individual jaisa dikhate hain."
  },

  m17: {
    hook: "\"Eyes ek eye-width apart hoti hain\" wale classical measuring system ke peeche kya hai \u2014 aur ye kyun ek starting average hai, koi rule nahi jise sab follow karte hain.",
    whyItMatters: [
      "Proportion systems ek reliable starting average dete hain construct karne ke liye \u2014 especially jab imagination se kaam ho raha ho, bina kisi reference ke. Iske bina beginners guesswork se features place karte hain, aur chhoti chhoti placement errors mil ke ek aisa face bana deti hain jo \"wrong\" lagta hai, chahe koi ek feature badly drawn na ho.",
      "Proportion system seekhne ka point ye nahi ki use hamesha rigidly follow karna hai \u2014 real faces average se constantly deviate karte hain, aur wahi deviation hi asal mein ek face ko generic template ke bajaye khud jaisa dikhata hai. System beginners ke liye ek scaffold hai aur sabke liye ek diagnostic check, koi cage nahi."
    ],
    coreIdea: [
      "Classical face ko often <b>vertical thirds</b> mein baanta jaata hai: hairline se brow tak, brow se nose ke base tak, aur nose ke base se chin tak \u2014 average adult face mein roughly equal. Isse individual features place karne se pehle bhi ek fast structural check mil jaata hai.",
      "Horizontally, classical guide eyes ko poore head ke roughly vertical midpoint pe rakhta hai (sirf face nahi \u2014 poora head, cranium ko bhi jodkar), do eyes ke beech roughly ek eye-width space, aur head apne widest point pe roughly paanch eye-widths chauda.",
      "Ye sab population averages hain, ek starting construction ke liye useful \u2014 fixed laws nahi. Real faces routinely inse deviate karte hain, aur average se jaanbujh kar kiya gaya deviation hi largely wo cheez hai jo stylization aur individual likeness banati hai. Proportion system bas ye batata hai measure kahan se shuru karo, har face ko kahan end hona chahiye ye nahi.",
      "Module 5 wala comparative measurement yahan seedha kaam aata hai: feature placement outright guess karne ke bajaye, ek relationship ko doosre ke against measure karo \u2014 jaise brow-to-nose distance ko nose-to-chin distance ke against \u2014 bilkul jaise ek still life sight-measure karte."
    ],
    mistakes: [
      "Proportion averages ko strict rules ki tarah apply karna, jaise har face ko exactly match karna hi ho.",
      "Feature placement guess kar lena, comparative measurement se check karne ke bajaye.",
      "Proportion system ek baar seekh lena aur phir kabhi wapas drawing ko usse check hi na karna.",
      "Eyes ko visible face ke midpoint pe rakh dena, poore head ke midpoint pe nahi jisme cranium bhi shaamil ho \u2014 ek bahut common placement error."
    ],
    proTips: [
      "Thirds aur eye-width guides ko drawing ke beech mein ek fast diagnostic check ki tarah use karo, sirf ek starting grid ki tarah nahi.",
      "Jab koi specific face average se \"off\" lage, usually wahi deviation hi us particular person jaisa dikhne ki wajah hoti hai \u2014 default se use wapas average ki taraf correct mat karo.",
      "Proportion system ko invented, imaginary faces pe utna hi practice karo jitna real references pe \u2014 imagination hi wo jagah hai jahan beginner ki guessing habit sabse zyada dikhti hai."
    ],
    practice: {
      warmup: "Ek simple oval banao aur usme classical vertical thirds aur head ke vertical midpoint pe eye-line mark karo, koi feature abhi add kiye bina.",
      daily: "Ek face poore proportion guide se construct karo \u2014 thirds, eye-line, eye-width spacing \u2014 feature detail add karne se pehle.",
      weekly: "Ek real reference photo lo aur measure karo ki wo classical average se har guideline pe actually kitna deviate karta hai. Note karo kaunse deviations us person ki likeness ka hissa lagte hain.",
      challenge: "Same proportion guide se teen alag imagined faces banao, phir jaanbujh kar har ek ki proportions ko alag direction mein push karo taaki teeno distinct individuals jaise dikhein."
    },
    quiz: [
      {q:"Classical proportion system mein eye-line typically kahan sit karti hai?", options:["Chin ke bottom pe","Poore head ke vertical midpoint pe, cranium ko shaamil karke","Hairline ke top pe","Eye placement ke liye koi standard guideline hai hi nahi"], correct:1, explain:"Ek bahut common beginner error eye-line ko visible face ke midpoint pe rakh dena hai, poore head ke bajaye."},
      {q:"Ye module proportion averages ko kaise treat karta hai?", options:["Strict rules jinhe har face exactly match kare","Ek starting scaffold aur diagnostic check, cage nahi","Real drawing ke liye irrelevant","Sirf realistic styles ke liye, stylized ke liye kabhi nahi"], correct:1, explain:"Ye ek reliable starting point aur check-in tool hain \u2014 inse deviation hi often ek face ko ek specific person jaisa dikhata hai."},
      {q:"Module 5 wali kaunsi technique facial proportions check karne mein seedha kaam aati hai?", options:["Blind contour drawing","Comparative measurement \u2014 ek relationship ko doosre ke against measure karna","Sirf negative space drawing","Gesture drawing"], correct:1, explain:"Brow-to-nose ko nose-to-chin ke against measure karna, Module 5 wala hi sighting principle hai, ab ek face pe."}
    ],
    checklist: [
      "Ek simplified head ko classical vertical thirds mein baant sakta/sakti hoon.",
      "Eye-line ko correctly poore head ke vertical midpoint pe rakh sakta/sakti hoon, sirf visible face pe nahi.",
      "Comparative measurement se ek facial relationship ko doosre ke against check kar sakta/sakti hoon.",
      "Explain kar sakta/sakti hoon ki proportion average se deviation often individual likeness kyun banata hai."
    ],
    nextStep: "The Loomis Method \u2014 sabse widely taught head-construction system, jo pichhle do modules ki skull aur proportions ko ek repeatable process mein jod deta hai."
  },

  m18: {
    hook: "Illustration mein sabse widely taught head-construction system \u2014 ek sphere, ek side-plane, aur guidelines ka ek set jo kisi bhi angle se kaam kar jaata hai.",
    whyItMatters: [
      "Andrew Loomis ne apni 1956 ki book Drawing the Head and Hands mein jo method diya, wo aaj bhi illustration instruction mein dominant hai, ek khaas wajah se: ye purely anatomical nahi, geometric hai \u2014 matlab ek beginner sphere aur side-plane place karna zygomatic arch ka naam yaad karne se bahut pehle shuru kar sakta hai. Ek baar underlying logic click ho jaaye, ye kisi bhi angle pe generalize ho jaata hai, har angle ke liye alag template yaad karne ki zaroorat nahi padti.",
      "Yahi wo module hai jahan skull (Module 16) aur proportions (Module 17) alag alag lessons na rehke ek repeatable construction process mein mil jaate hain \u2014 Module 10 wala hi combine-and-cut logic, ab specifically head pe."
    ],
    coreIdea: [
      "Core Loomis construction: cranium ke liye ek <b>sphere</b> se shuru karo, phir face ke liye ek flat <b>side-plane</b> attach karo, jiski position aur angle head kis taraf turn hai us hisaab se ho. Horizontal guidelines \u2014 <b>brow line</b>, <b>eye line</b>, <b>nose line</b>, <b>mouth line</b> \u2014 sphere aur side-plane ke around wrap hoti hain, form ke saath curve karte hue, flat nahi \u2014 aur yahi cheez poore system ko ek angle pe bhi convincingly kaam karwati hai, sirf straight-on se nahi.",
      "<b>Ear-line</b> aur <b>jaw construction</b> side-plane se neeche extend hote hain, cranium sphere ko lower face aur chin se jodte hue \u2014 Module 16 wali skull structure aur Module 17 wale proportion guides ke beech ka loop yahin close hota hai.",
      "Kyunki ye memorized template nahi, geometric scaffolding hai, Loomis sphere ko kisi bhi angle pe rotate kiya ja sakta hai aur guidelines uske saath khud rotate ho jaati hain \u2014 yahi cheez ise imaginative work ke liye kaam ki banati hai, sirf ek reference photo copy karne ke liye nahi.",
      "Loomis ka construction khud drawing nahi hai \u2014 ye scaffolding hai jispe final drawing rest karti hai aur jisse dheere dheere hata diya jaata hai, bilkul wahi relationship jo Module 10 se construction lines ka final drawing se raha hai."
    ],
    mistakes: [
      "Finished Loomis sphere-and-guidelines construction ko hi final drawing samajh lena, uski jagah use scaffolding samajhna jo refine karke uske upar draw karna hai.",
      "Head turned ya tilted hone pe bhi guidelines ko perfectly flat aur straight rakhna, unhe sphere ke rotation ke saath curve karne dene ke bajaye.",
      "Har angle ke liye alag template yaad karne ki koshish karna, sphere-and-side-plane logic samajhne ke bajaye jo kisi bhi angle pe generalize ho jaaye.",
      "Pichle do modules wali skull aur proportion foundation ke bina seedha is module pe aa jaana \u2014 us context ke bina construction bahut kam samajh aata hai."
    ],
    proTips: [
      "Individual head types ke liye adjust karne se pehle, same average head shape pe construction ko baar baar practice karo \u2014 pehle standard system automatic banao.",
      "Head tilted ya turned ho to sabse pehle guideline curves adjust karo, baaki kuch bhi karne se pehle. Curved guidelines pehle sahi ho jaaein to baaki sab kuch aasan ho jaata hai.",
      "Jab tak ye construction naya hai, Loomis construction ka koi physical ya digital 3D reference lo aur use apne intended angle pe rotate karke dekho \u2014 ye scaffolding tool hai, koi shortcut nahi jo learning skip kare."
    ],
    practice: {
      warmup: "Front se basic Loomis sphere aur side-plane draw karo, sirf chaar horizontal guidelines add karke \u2014 brow, eye, nose, mouth.",
      daily: "Har din ek naye angle se \u2014 front, three-quarter, profile, tilted up, tilted down \u2014 ek full Loomis head construct karo, har rotation mein guideline curves consistent rakhte hue.",
      weekly: "Same imagined head ko teen alag angles se ek hi sitting mein construct karo, check karte hue ki proportions teenon mein consistent rahein.",
      challenge: "Standard Loomis construction ko adjust karke jaanbujh kar ek alag head type banao \u2014 notably wider, narrower, ya longer-jawed \u2014 par underlying sphere-and-guideline logic ko intact rakhte hue."
    },
    quiz: [
      {q:"Loomis head construction ke do core building blocks kya hain?", options:["Do overlapping cubes","Cranium ke liye ek sphere aur face ke liye ek flat side-plane","Ek cylinder aur ek cone","Sirf ek flat oval"], correct:1, explain:"Sphere plus side-plane hi wo geometric core hai jisse baaki poora construction banta hai."},
      {q:"Horizontal guidelines (brow, eye, nose, mouth) flat rehne ke bajaye curve kyun karti hain?", options:["Ye bas ek stylistic choice hai","Ye sphere ke actual rotation ke around wrap hoti hain, isi se system kisi bhi angle pe kaam karta hai","Curved lines erase karna aasan hota hai","Ye sirf profile view mein curve karti hain"], correct:1, explain:"Flat guidelines sirf face-on kaam karti hain; form ke saath curve karna hi construction ko kisi bhi angle pe sahi rakhta hai."},
      {q:"Is module ke hisaab se, Loomis construction khud kya hai?", options:["Finished drawing","Scaffolding jispe final drawing rest karti hai aur jisse dheere dheere hata diya jaata hai","Sirf cartoon art ke liye ek style choice","Skull seekhne ka replacement"], correct:1, explain:"Ye construction hai, final line art nahi \u2014 Module 10 se hi jo relationship construction lines ka raha hai, wahi yahan bhi."}
    ],
    checklist: [
      "Front se ek basic Loomis head \u2014 sphere, side-plane, chaar guidelines \u2014 construct kar sakta/sakti hoon.",
      "Same head ko three-quarter aur profile angle se construct kar sakta/sakti hoon, guidelines ko sahi curve karte hue.",
      "Standard construction ko adjust karke ek head type bana sakta/sakti hoon jo average se deviate kare.",
      "Loomis construction ko refine karne wali scaffolding ki tarah treat karta/karti hoon, finished drawing ki tarah nahi."
    ],
    nextStep: "The Asaro Head \u2014 ek doosra, plane-based construction system, specifically iske liye ki head pe light aur shadow kaise behave karte hain."
  },

  m19: {
    hook: "Head ka ek faceted, planar version, banaya hi isliye gaya taaki light aur shadow predictably behave karein \u2014 curves hata do jab tak sirf structure na bache.",
    whyItMatters: [
      "Pichle module wala Loomis method primarily ek proportion aur placement system hai. Asaro head, jise fine artist John Asaro ne 1976 mein banaya, ek alag problem solve karta hai: ye head ki continuous curved surfaces ko flat, faceted planes mein simplify kar deta hai, taaki light aur shadow kahan girega ye predictable ho jaaye \u2014 intuitive guess na rahe.",
      "Ye is arc ke head-construction work ko seedha Module 11 wale light logic se wapas jod deta hai. Ek portrait ko convincingly shade karne ke liye jaanna padta hai ki skin ka koi patch actually 3D space mein kis taraf face kar raha hai \u2014 Asaro head curves hata ke sirf flat, clearly-angled planes chhodta hai, jisse ye baat explicit ban jaati hai."
    ],
    coreIdea: [
      "Asaro head ek real head ki continuous, curved surface ko flat planes ke ek set mein reduce kar deta hai \u2014 forehead, temple, cheek, jaw, waghera \u2014 har ek ek distinct direction face karta hua. Har plane flat hai aur ek clear direction face karta hai, isliye wo ya to fully lit hai, ya fully shadow mein, ya dono ke beech ek predictable gradient mein \u2014 jisse Module 11 wala light logic correctly apply karna kaafi aasan ho jaata hai.",
      "Ek classic aur genuinely useful training exercise: Asaro head ko sirf do values se shade karo \u2014 ek light tone, ek dark tone, koi gradient nahi. Isse har single plane pe ek clear light-versus-shadow decision lena padta hai, middle gray se hedge karne ka option nahi rehta. Ek baar ye two-value version convincingly ek head jaisi read ho jaaye, uske baad zyada confidence ke saath aur values wapas add ki ja sakti hain.",
      "Form shadow (ek plane jo light se door face kare) aur cast shadow (ek shadow jo head ke ek part se doosre pe padti hai \u2014 jaise nose ka shadow cheek pe, ya brow ka eye socket mein) \u2014 dono ek planar Asaro head pe saaf dikh jaate hain, jo Module 11 wale shadow vocabulary ko seedha ek face pe apply karne ka ek accha bridge banata hai.",
      "Official Asaro Head John Asaro ke studio se milne wala ek physical sculpted reference hai, par isse benefit uthane ke liye wo chahiye hi ho, aisa nahi \u2014 wahi planar thinking kisi bhi head reference, photo, ya pichle module wale Loomis construction ko khud flat planes mein simplify karke bhi practice ki ja sakti hai."
    ],
    mistakes: [
      "Planar, two-value version practice kiye bina seedha smooth, blended shading pe jump kar jaana.",
      "Asaro head ko ek style choice samajhna, ek training exercise ki jagah jo internalize karke aage badhna hai.",
      "Face shade karte waqt form shadow (jo bas light se door face karta hai) ko cast shadow (jo ek feature se doosre pe padta hai) se confuse kar dena.",
      "Sirf do values mein light-versus-shadow structure confidently samjhe bina, seedha kai subtle value gradations pe chala jaana."
    ],
    proTips: [
      "Two-value shading exercise same simplified head pe alag alag light directions se karo \u2014 front-lit, side-lit, top-lit \u2014 taaki feel aaye ki same planes ek alag light source pe kitna dramatically respond karte hain.",
      "Ek real photo reference ko Asaro-style flat planes mein simplify karna practice karo shade karne se pehle, chahe koi actual Asaro model reference mein na ho.",
      "Two-value exercise confident feel hone lage to poori continuous gradients pe jump karne se pehle exactly ek middle value add karo \u2014 teen values, pandrah nahi."
    ],
    practice: {
      warmup: "Ek simple head shape ko paanch-chhe flat planes mein simplify karo \u2014 forehead, cheek, jaw, temple, chin \u2014 abhi shading nahi, bas plane divisions.",
      daily: "Ek simplified planar head ko exactly do values se shade karo ek consistent light source ke neeche, har din light direction badalte hue.",
      weekly: "Module 18 wale Loomis construction ko lo aur use Asaro-style flat planes aur do values se shade karo, dono systems ko ek drawing mein jod dete hue.",
      challenge: "Same planar head ko teen alag light directions ke neeche shade karo \u2014 front, side, top \u2014 har baar sirf do values se, aur compare karo same structure kitna alag read hota hai."
    },
    quiz: [
      {q:"Asaro head specifically kaunsa problem solve karne ke liye banaya gaya hai?", options:["Noses ko draw karna aasan bana dena","Curved surfaces ko clear planes mein flatten karke predictable banana ki light aur shadow kahan girenge","Hair rendering sikhana","Skull ko poori tarah replace karna"], correct:1, explain:"Flat, clearly-angled planes light-versus-shadow decision ko explicit bana dete hain, ek intuitive guess ke bajaye."},
      {q:"Asaro head pe two-value shading exercise karne ka point kya hai?", options:["Zyada values se faster hota hai","Har plane pe ek clear light-or-shadow decision force karta hai, gray se hedge karne ke bajaye","Ye copyright ke liye required hai","Sirf female heads pe kaam karta hai"], correct:1, explain:"Middle ground hatane se har plane pe ek real decision lena padta hai, subtlety add karne se pehle confidence build ho jaata hai."},
      {q:"Ek face pe form shadow aur cast shadow mein kya fark hai?", options:["Koi fark nahi","Form shadow ek plane hai jo light se door face karta hai; cast shadow ek feature se doosre pe padta hai, jaise nose ka cheek pe","Cast shadow sirf raat ko hota hai","Form shadow sirf forehead pe apply hota hai"], correct:1, explain:"Module 11 wala hi core distinction, ab specifically nose aur cheek jaisi facial planes pe."}
    ],
    checklist: [
      "Ek head shape ko paanch-chhe clear flat planes mein simplify kar sakta/sakti hoon.",
      "Ek simplified planar head ko ek light source ke neeche exactly do values se shade kar sakta/sakti hoon.",
      "Ek simplified face pe kam se kam ek form shadow aur ek cast shadow identify kar sakta/sakti hoon.",
      "Same planar head ko kam se kam do alag light directions ke neeche convincingly shade kar sakta/sakti hoon."
    ],
    nextStep: "Head Rotation \u2014 is module aur pichle module ke construction systems ko ek space mein turn karti hui head pe apply karna, sirf still baithi hui pe nahi."
  },

  m20: {
    hook: "Jo head sirf ek angle se hi kaam karti hai, wo constructed nahi, memorized hoti hai \u2014 ye module wahi test karta hai.",
    whyItMatters: [
      "Is arc mein ab tak jo bhi seekha, sab ek hi capability ki taraf build ho raha tha: head ko space mein rotate karo aur construction consistent rahe, har naye angle pe face ko scratch se dubara seekhna na pade. Module 18 mein Loomis jaisa geometric system chunne ka asli payoff yahi hai, pure memorization ke bajaye \u2014 geometry predictably rotate karti hai, memorized templates nahi karte."
    ],
    coreIdea: [
      "Rotation teen independent axes mein aata hai, aur inhe combine karne se pehle har ek ko alag alag practice karna worth hai: <b>tilt</b> (chin up ya down, jaise haan mein sar hilana), <b>turn</b> (left ya right, jaise na mein sar hilana), aur <b>roll</b> (sar ko sideways ek shoulder ki taraf tilt karna, jaise curiosity mein). Real poses usually in mein se do-teen ek saath combine karte hain, par pehle isolate karke practice karna, har ek ka effect samajhna aasan bana deta hai.",
      "Jaise Loomis sphere rotate karta hai, uski guidelines \u2014 brow, eye, nose, mouth \u2014 saath mein curve aur shift hoti hain, flat page pe evenly spaced rehne ke bajaye sphere ki actual surface ke along evenly spaced rehte hue. Beginners ka sabse common breakdown point yahi hai: guidelines aise draw kar dete hain jaise page flat ho, na ki jaise wo ek rotating 3D sphere ke around wrapped hon.",
      "Ear-line ek especially reliable rotation check hai, kyunki ears rotation ke bawajood brow aur nose lines ke relative ek consistent height pe hi rehte hain \u2014 agar ears baaki guidelines ke against galat lagne lagein, to usually galti rotation mein hai, ear mein nahi.",
      "Extreme angles \u2014 upar se lagbhag seedha neeche dekhna, ya neeche se seedha upar \u2014 Module 7 wale perspective concepts ke foreshortening ko head pe apni limit tak push karte hain, aur un features ko compress kar dete hain jo warna evenly spaced hote. Inhe avoid karne ke bajaye jaanbujh kar practice karo, kyunki ye construction ki kisi bhi weakness ko turant expose kar dete hain."
    ],
    mistakes: [
      "Guideline spacing ko flat page pe even rakhna, sphere ki actual curved surface ke along even rakhne ke bajaye jaise wo rotate karti hai.",
      "Sirf gentle three-quarter turns practice karna aur extreme angles avoid karna \u2014 isse construction weaknesses fix nahi hoti, bas chhup jaati hai.",
      "Tilt, turn, aur roll ko shuruaat se hi ek saath combine kar dena, pehle har axis ko alag isolate karne ke bajaye.",
      "Rotation ke dauraan ear-line ka track kho dena, jabki ye sabse fast tarika hai ye pakadne ka ki kahin aur rotation galat ho gaya hai."
    ],
    proTips: [
      "Har rotation axis \u2014 tilt, turn, roll \u2014 ko completely alag isolation mein practice karo, do-teen ko combine karne se pehle.",
      "Rotation practice ke dauraan ear-line ko ek running diagnostic ki tarah use karo \u2014 agar wo galat lage, actual error almost hamesha isse upstream hoti hai.",
      "Extreme up aur down angles ko avoid karne ke bajaye jaldi practice mein le aao. Ye shuru mein uncomfortable specifically isliye lagte hain kyunki ye real construction gaps expose karte hain."
    ],
    practice: {
      warmup: "Same Loomis head teen baar draw karo, sirf tilt axis rotate karte hue \u2014 neutral, chin up, chin down \u2014 baaki sab kuch identical rakhte hue.",
      daily: "Har din tilt, turn, aur roll ke ek randomly chosen combination pe ek head construct karo, guideline curvature aur ear-line placement carefully check karte hue.",
      weekly: "Same head ko paanch alag rotations pe ek hi sitting mein draw karo, ek row mein arrange karke, check karo ki proportions genuinely paanchon mein consistent rahein.",
      challenge: "Ek extreme angle pe ek head construct karo \u2014 lagbhag seedha neeche ya seedha upar dekhte hue \u2014 aur exactly batao construction ka kaunsa part consistent rakhna sabse hard tha."
    },
    quiz: [
      {q:"Is module mein cover kiye gaye head rotation ke teen independent axes kaunse hain?", options:["Zoom, pan, rotate","Tilt, turn, aur roll","Light, shadow, aur form","Front, back, aur side"], correct:1, explain:"Tilt (nodding), turn (side to side shake), aur roll (sideways head-tilt) \u2014 in teeno ko isolate karna worth hai."},
      {q:"Ek Loomis construction ko rotate karte waqt beginners ka sabse common breakdown point kya hai?", options:["Bahut slowly draw karna","Guideline spacing ko flat page pe even rakhna, sphere ki actual curved surface ke along rakhne ke bajaye","Galat pencil grade use karna","Ek unrealistic hairstyle choose karna"], correct:1, explain:"Guidelines ko waise hi curve aur compress karna chahiye jaise ek actual rotating sphere pe hote, page pe evenly spaced rehne ke bajaye."},
      {q:"Ear-line ko ek reliable rotation check kyun kaha gaya hai?", options:["Ears rotation ke bawajood kabhi move nahi karte","Ears brow aur nose lines ke relative ek consistent height pe rehte hain, isliye galat lagein to usually galti rotation mein hoti hai","Ears sabse aasan feature hain draw karne ke liye","Ear placement se likeness pe koi farak nahi padta"], correct:1, explain:"Agar ear-line off lage, to usually iska matlab hai rotation logic kahin break ho gayi hai, ear khud galat nahi hai."}
    ],
    checklist: [
      "Ek pure tilt, ek pure turn, aur ek pure roll pe, alag alag, ek head construct kar sakta/sakti hoon.",
      "Do ya zyada rotation axes ko ek saath combine karke ek head construct kar sakta/sakti hoon.",
      "Guideline curvature ko sphere ke actual rotation ke consistent rakhta/rakhti hoon, flat page ke bajaye.",
      "Ear-line ko ek diagnostic check ki tarah use kar sakta/sakti hoon jab koi rotated construction galat lage."
    ],
    nextStep: "Perspective of the Head \u2014 full one-, two-, aur three-point perspective logic ko extreme head angles aur foreshortening pe apply karna."
  },

  m21: {
    hook: "Jab head sirf rotate nahi, balki genuinely viewer ke kaafi kareeb ho, ya kisi dramatic camera angle se dikh rahi ho \u2014 to kya badalta hai, aur ye rotation se alag problem kyun hai.",
    whyItMatters: [
      "Module 20 mein rotation cover hua tha \u2014 head ko space mein ghumana, par viewer se ek consistent, comfortable distance pe rakhte hue. Ye module cover karta hai ki jab perspective khud involve ho jaaye to kya badalta hai: extreme foreshortening, face ke bahut kareeb ka camera, ya ek exaggerated low ya high angle. Ye comics, animation, aur concept art mein hardam dikhte hain, aur wo constructions tod dete hain jo sirf gentle, \"portrait photography\" jaisi distances pe hi kaam karte hain."
    ],
    coreIdea: [
      "Module 8 wale perspective concepts \u2014 horizon line, vanishing points, foreshortening \u2014 head pe bilkul waise hi apply hote hain jaise kisi bhi doosri constructed form pe. Neeche se dekha gaya ek head ka apna local horizon line aur vanishing logic hota hai, bilkul jaise ek building ka hota hai; Module 18 wala Loomis sphere aur guidelines waise hi apply hote hain, bas unhe us perspective logic ke saath banana padta hai, use ignore karke nahi.",
      "Foreshortening features ko unevenly compress karta hai, viewer se distance ke hisaab se: ek extreme close-up mein camera ki taraf lagbhag directly point karti hui nose, ek comfortable middle distance ke comparison mein dramatically chhoti aur chaudi dikhti hai, jabki camera se door wale features (ears, cranium ka peechla hissa) kam compress hote hain. Ye Module 8 wale general foreshortening concept ka head-specific version hai.",
      "Camera distance apparent proportion ko badal deta hai even bina kisi rotation ke bhi \u2014 ek bahut kareeb ka camera jo bhi sabse nazdeek hai (usually nose) uska size, jo door hai (ears) uske relative exaggerate kar deta hai \u2014 yehi wajah hai ki extreme close-up portraits often thoda \"off\" lagte hain agar unhe standard middle-distance proportions se banaya jaaye, us compression ko account kiye bina.",
      "Extreme low-angle aur high-angle head views rotation (Module 20) ko genuine perspective foreshortening ke saath ek saath combine karte hain, yahi wajah hai ki ye is poori arc mein sabse harder skills mein se ek hain \u2014 aur exactly isi wajah se inhe construction half ke end ke paas rakha gaya hai, jab rotation aur perspective fundamentals dono already jagah pe ho chuke hon."
    ],
    mistakes: [
      "Ek extreme close-up pe standard middle-distance proportions apply karna, bina ye account kiye ki camera proximity khud apparent size ko kaise distort karti hai.",
      "Ek extreme low ya high angle ko pure rotation samajh lena, uske upar layered genuine perspective foreshortening ko ignore karte hue.",
      "Is module ki drills skip karna kyunki extreme angles bahut mushkil lagte hain \u2014 ye bilkul wahi angles hain jo dikhate hain ki pichle construction modules actually generalize hue ya sirf comfortable angles ke liye memorize kiye gaye the.",
      "Ye bhool jaana ki head ka apna local horizon aur vanishing logic hota hai, bilkul Module 8 wali kisi bhi perspective-constructed form ki tarah."
    ],
    proTips: [
      "Koi extreme angle draw karne se pehle, camera distance aur vertical angle ko alag alag decide karo \u2014 ye dono head ko alag, combinable tareekon se distort karte hain, aur inhe mix karna construction ko samajhna aur mushkil bana deta hai.",
      "Same head ko pehle ek comfortable middle distance pe draw karo, phir dobara ek extreme close-up ki tarah, aur directly compare karo apparent proportions kitna shift hoti hain.",
      "Jab koi extreme angle kaam na kare, pehle Module 20 wale plain rotation version pe wapas jao, confirm karo ki wo solid hai, phir uske upar perspective distortion add karo."
    ],
    practice: {
      warmup: "Ek simple head shape ek comfortable middle distance pe banao, phir same head ko ek extreme close-up ki tarah dubara banao, proportion shift ko directly compare karte hue.",
      daily: "Har din ek deliberately extreme angle pe ek head construct karo \u2014 sharply neeche se, sharply upar se, extreme close-up \u2014 Module 8 wale perspective logic ko Module 20 wale rotation ke upar apply karte hue.",
      weekly: "Ek simple head construction lo aur use teen camera distances pe banao \u2014 door, medium, extreme close \u2014 same rotation angle se, distance ko akela variable rakhte hue.",
      challenge: "Ek dramatic low angle se ek head construct karo, jaise koi tumhare upar khada dekh raha ho \u2014 rotation, tilt, aur genuine perspective foreshortening teeno ko ek hi drawing mein combine karte hue."
    },
    quiz: [
      {q:"Ye module aisa kya cover karta hai jo Module 20 (Head Rotation) nahi karta?", options:["Facial expressions","Genuine perspective foreshortening jo camera distance aur extreme angles se aata hai, sirf comfortable distance pe rotation nahi","Hair rendering","Color theory"], correct:1, explain:"Sirf rotation ek comfortable, consistent distance assume karta hai; ye module proximity aur extreme angles wali real perspective distortion add karta hai."},
      {q:"Standard proportions se banaya gaya ek extreme close-up portrait thoda \"off\" kyun lag sakta hai?", options:["Standard proportions hamesha galat hoti hain","Camera proximity jo bhi sabse nazdeek hai uska size, door wale ke relative exaggerate kar deti hai, aur standard proportions isse account nahi karti","Close-ups kabhi try hi nahi karne chahiye","Ye effect sirf professional cameras se hota hai"], correct:1, explain:"Proximity-based foreshortening apparent proportion ko badal deta hai, even bina kisi rotation ke bhi."},
      {q:"Extreme low aur high head angles ko is arc mein sabse harder skills mein se kyun mana gaya hai?", options:["Inhe special pencils chahiye","Ye rotation aur genuine perspective foreshortening ko ek saath combine karte hain","Ye actually straight-on views se aasan hain","Ye sirf fantasy art pe apply hote hain"], correct:1, explain:"Do distortions ek saath stack hoti hain \u2014 rotation aur perspective \u2014 yahi wajah hai ki inhe is arc ke construction half ke end ke paas rakha gaya hai."}
    ],
    checklist: [
      "Head ko rotate karne aur usme perspective foreshortening apply karne ka fark explain kar sakta/sakti hoon.",
      "Same head ko do alag camera distances pe construct kar sakta/sakti hoon aur bata sakta/sakti hoon apparent proportions kaise shift hoti hain.",
      "Ek head ko deliberately extreme low ya high angle se construct kar sakta/sakti hoon.",
      "Kisi diye gaye perspective view mein head ka local horizon line aur vanishing logic identify kar sakta/sakti hoon."
    ],
    nextStep: "Planes of the Face \u2014 individual features pe jaane se pehle is arc ke structural half ko complete karna, har major facial plane ko map karke."
  },

  m22: {
    hook: "Face ka complete plane map \u2014 is arc ka aakhri structural module individual features pe jaane se pehle, aur seedha link ki wo sab kaise light hone wale hain.",
    whyItMatters: [
      "Ye module Head & Portrait arc ke structural half ko close kar deta hai. Modules 15 se 21 ne head ki overall structure, proportion, construction method, aur rotation logic build ki; ye module har major facial plane ko detail mein map karta hai, jo agle set of modules \u2014 individual features \u2014 tak ka seedha bridge hai, kyunki har eye, nose, aur mouth yahin map kiye gaye planes pe sit karta hai aur usi ke hisaab se shade hota hai.",
      "Is module ke bina, feature modules ek face pe floating memorized shapes ki list ban jaane ka risk rehta hai. Isse har feature ki placement aur shading logic ek specific, samjhe hue plane se wapas connect ho jaati hai."
    ],
    coreIdea: [
      "Module 19 wale broad Asaro-style planes ke aage, face mein chhote, specific planes bhi hote hain jo individually jaanne worth hain: <b>forehead plane</b>, <b>temple planes</b> (brow se sharply peeche angled), <b>nose bridge plane</b> aur uski side planes, <b>cheek planes</b>, <b>jaw planes</b>, <b>chin plane</b>, aur eye socket ke around ke transitional planes jahan brow ridge, upper lid, aur cheek teeno alag angles pe milte hain.",
      "Har plane ka angle, ek diye gaye light source ke relative, directly decide karta hai ki wo lit hai, core shadow mein hai, ya dono ke beech kisi gradient mein \u2014 wahi Module 11 wala light logic, ab ek generic sphere ya cube ki jagah specific, named facial geography pe map kiya gaya.",
      "Planes ke beech ke transition zones \u2014 jahan forehead plane temple plane se milta hai, jahan nose bridge cheek se milta hai \u2014 yahin par ek portrait ki structural believability ka bada hissa actually rehta hai. Beginners often in transitions ko bahut jaldi smooth kar dete hain, plane change poori tarah kho dete hain aur face ki real structure flatten ho jaati hai.",
      "Ye plane map wo cheez hai jispe agle aath modules \u2014 eyes, eyebrows, nose, mouth, ears, individual features ki proportions, expressions, aur full integration \u2014 sab kuch sit karta hai. Is module ko ek reference ki tarah treat karo jispe baar baar wapas aana hai, ek baar padh ke chhodne wali cheez ki tarah nahi."
    ],
    mistakes: [
      "Plane transitions ko bahut jaldi smooth kar dena, us structural plane change ko kho dena jo face ko flat ki jagah solid dikhata hai.",
      "Agle kai modules mein individual features seekhna bina har ek ko us specific plane se wapas connect kiye jispe wo actually sit karta hai.",
      "Face ko sirf kuch broad planes wala samajhna (jaise simplified Asaro exercise mein), jab actual feature aur shading work shuru ho jaaye, is module wale fuller, zyada specific plane map ki jagah.",
      "Ye ignore karna ki ek single light source paas paas ke multiple planes ko unke apne apne specific angle ke hisaab se alag alag affect karta hai, poore face ko ek flat logic se shade karne ke bajaye."
    ],
    proTips: [
      "Agle kai modules pe kaam karte waqt is plane map ka apna reference sketch paas rakho \u2014 ye baar baar consult karne ke liye hai, ek sitting mein perfectly memorize karne ke liye nahi.",
      "Is arc mein baad mein jab koi specific feature shade karte waqt sahi na lage, check karo wo actually kaunse plane pe sit karta hai aur kya us plane ka light logic respect ho raha hai.",
      "Plane centers hi nahi, plane transitions dhoondhna bhi practice karo \u2014 kyunki wahin par wo structural information hoti hai jo ek viewer actually read karta hai."
    ],
    practice: {
      warmup: "Ek simplified head pe forehead, temple, cheek, jaw, aur chin planes ko straight construction lines se mark karo, abhi koi shading nahi.",
      daily: "Ek facial region \u2014 eye socket transition, nose bridge aur uski sides, cheek-to-jaw transition \u2014 ko ek consistent light source ke neeche shade karo, specifically us region ke plane changes pe focus karte hue.",
      weekly: "Ek full simplified face shade karo, shade karte waqt consciously har plane ka naam lete hue aur uski logic ko Module 11 ke light rules ke against check karte hue.",
      challenge: "Ek real reference photo lo, usme jitne distinct facial planes identify kar sako karo directly ek printout ya overlay pe, aur apna plane map compare karo ki photo mein actual shadows kaise girte hain."
    },
    quiz: [
      {q:"Head & Portrait arc mein is module ka role kya hai?", options:["Ye ek optional bonus module hai","Ye specific facial planes map karta hai jinpe baad ka har feature module sit karega aur unhi ke hisaab se shade hoga","Ye skull module ki zaroorat ko replace kar deta hai","Ye sirf stylized art ke liye matter karta hai"], correct:1, explain:"Ye head structure se individual-feature modules tak ka seedha bridge hai."},
      {q:"Beginners forehead-to-temple jaisi plane transitions pe structural believability kyun kho dete hain?", options:["Wo wahan bahut zyada detail use karte hain","Wo transition ko bahut jaldi smooth kar dete hain, actual plane change kho dete hue","Transitions ka likeness se koi lena dena nahi","Plane transitions hamesha sharp lines honi chahiye"], correct:1, explain:"Plane change ko jaldi smooth kar dena, exactly wahi structural information flatten kar deta hai jise viewer solidity ki tarah read karta."},
      {q:"Is module ke hisaab se, ek portrait ki structural believability actually kahan rehti hai?", options:["Sirf eyes mein","Planes ke beech ke transition zones mein, jaise jahan nose bridge cheek se milta hai","Sirf hair rendering mein","Sirf color choices mein"], correct:1, explain:"Transitions real structural information carry karte hain, sirf har plane ke flat center nahi."}
    ],
    checklist: [
      "Ek simplified head pe forehead, temple, nose, cheek, jaw, aur chin planes identify aur mark kar sakta/sakti hoon.",
      "Ek facial plane transition ko shade kar sakta/sakti hoon bina actual structural change ko smooth kiye.",
      "Module 11 wala light logic kisi specific named facial plane pe apply kar sakta/sakti hoon, sirf generic sphere pe nahi.",
      "Apna plane map ek real reference photo ke actual shadow pattern se compare kar sakta/sakti hoon."
    ],
    nextStep: "Head & Portrait ka structural half complete ho gaya. Next: khud facial features \u2014 eyes, eyebrows, nose, mouth, ears, aur expressions \u2014 har ek ko ek 3D form ki tarah build karna jo is module wale plane map pe sit karta hai."
  },

  m23: {
    hook: "Ek socket mein ek sphere, ek awning ki tarah kaam karta brow ridge, aur glass ke do curved bowls \u2014 beginners jis almond outline se shuru karte hain, wo nahi.",
    whyItMatters: [
      "Doosre kisi bhi feature se zyada attention eyes ko beginners bhi dete hain, aur viewers bhi \u2014 human vision specifically eyes aur eye contact read karne ke liye tuned hai, yahi wajah hai ki ek flat outline ki tarah bana eye, ek real 3D form ki jagah, turant aur uncannily galat lagta hai, chahe kisi ko explain karna na aaye ki kyun.",
      "Is module mein sab kuch already covered structure pe seedha sit karta hai: skull (Module 16) wala brow ridge, Asaro (Module 19) wala eye-socket plane, aur Loomis construction (Module 18) wali eye-line guideline. Ye module wahi jagah hai jahan wo abstractions ek specific, renderable feature mein badal jaate hain."
    ],
    coreIdea: [
      "Eye pehle do simplified forms se banti hai, details baad mein. <b>Brow ridge</b> ek box ki tarah simplify hota hai jo thoda peeche tilted ho \u2014 uska front plane forehead hai, bottom plane eyebrow ke seedha neeche sit karta hai. <b>Eyeball</b> khud bas ek sphere hai, us socket ke andar sit karta hua jise brow ridge ek awning ki tarah protect karta hai.",
      "Eye ka visible \"white\" part (<b>sclera</b>) ek sphere ki surface hai, koi flat white shape nahi \u2014 ise flat treat karna ek common aur bahut visible beginner mistake hai. <b>Iris</b> us sphere mein set ek thoda concave bowl hai, aur use cover karne wala <b>cornea</b> ek convex bowl hai, transparent, jaise contact lens. Kyunki cornea convex hai aur iris concave, dono same light ke neeche <i>opposite</i> directions mein shade hote hain \u2014 ye pair samajhna hi ek rendered eye ko wet aur dimensional dikhata hai, ek painted circle jaisa nahi.",
      "Iris sirf straight-on se ek true circle hai. Eye jaise jaise center se door rotate karta hai, iris utna hi ek oval mein compress hota jaata hai \u2014 Module 4 aur Module 8 wala hi ellipse-degree logic, ab ek wheel ki jagah paanch-millimeter ke circle pe apply.",
      "Eyelid shape ek specific, consistent tareeke se asymmetric hota hai: upper lid heavier hota hai aur lower se zyada cover karta hai, aur upper lid ka peak nose ke kareeb sit karta hai jabki lower lid ka peak ear ke kareeb. Ek symmetric \"almond\" ya \"goldfish cracker\" shape banana yahan ek sabse common beginner error hai. Tear duct lids ke vertical center se neeche sit karta hai, unke beech centered nahi.",
      "Placement: eyes Loomis construction mein established eye-line pe sit karte hain, generally head ke vertical midpoint pe. Do eyes ke beech horizontal spacing, average pe, roughly ek eye-width hoti hai \u2014 aur ek bahut common beginner mistake eyes ko noticeably bada bana dena hai, kyunki hum intuitively eyes ko face ka sabse important feature treat karte hain aur size mein over-compensate kar dete hain, contrast aur detail ke through nahi."
    ],
    mistakes: [
      "Sclera ko ek flat white shape ki tarah treat karna, sphere ki visible surface ki jagah jise apni subtle shading chahiye.",
      "Symmetric, almond-shaped eyelids banana, actual asymmetric peaks ki jagah \u2014 upper lid heavier, peak nose ke kareeb; lower lid peak ear ke kareeb.",
      "Tear duct ko lids ke beech center karna, use lower, bottom lid ki taraf rakhne ke bajaye.",
      "Eyes ko unki importance signal karne ke liye bahut bada bana dena, contrast, sharper edges, aur detail use karke wahan aankh khinchne ke bajaye."
    ],
    proTips: [
      "Ek bhi eyelash add karne se pehle brow ridge aur eye socket ko ek simplified box-and-sphere construction ki tarah banao \u2014 Module 10 wala hi construction-before-detail order.",
      "Same simplified eyeball pe iris ko paanch-chhe alag gaze angles pe draw karna practice karo, dekhte hue ki center se hatte hi ellipse kaise compress hoti hai.",
      "Yaad rakho cornea aur iris opposite directions mein shade hote hain \u2014 convex versus concave \u2014 aur ye specifically check karo jab bhi koi rendered eye flat lage."
    ],
    practice: {
      warmup: "Brow ridge ko ek tilted box ki tarah aur eyeball ko uske neeche ek sphere ki tarah draw karo, abhi koi eyelids nahi, front se.",
      daily: "Har din ek naye gaze direction se ek full eye \u2014 socket, sphere, iris, lids \u2014 draw karo, track karte hue iris ellipse kaise badalta hai.",
      weekly: "Ek simplified head pe Loomis eye-line aur sahi one-eye-width spacing use karke eyes ka ek pair draw karo, Module 5 wale comparative measurement se check karte hue.",
      challenge: "Same eye ko ek extreme close-up mein aur ek normal portrait distance pe draw karo, compare karte hue distance pe details kitne chhote aur schematic ho jaate hain."
    },
    quiz: [
      {q:"Iris aur cornea ka shape kaisa hota hai, aur ye shading ke liye kyun matter karta hai?", options:["Dono flat discs \u2014 shading matter nahi karti","Iris ek concave bowl hai aur cornea ek convex bowl, isliye same light ke neeche dono opposite directions mein shade hote hain","Dono convex, same tarike se shade hote hain","Kisi ka bhi defined shape nahi hota"], correct:1, explain:"Concave versus convex ka matlab hai opposite shading directions \u2014 yahi ek rendered eye ko wet aur three-dimensional dikhata hai."},
      {q:"Tear duct actually eyelids ke relative kahan sit karta hai?", options:["Lids ke bilkul beech mein centered","Lower, bottom lid ki taraf","Higher, top lid ki taraf","Ye kisi bhi angle se visible nahi hota"], correct:1, explain:"Tear duct center se neeche hota hai, symmetrically placed nahi \u2014 use center karna ek common beginner mistake hai."},
      {q:"Eye size ko lekar ek common beginner mistake kya hai?", options:["Unhe itna chhota banana ki notice hi na ho","Unhe unki importance signal karne ke liye bahut bada bana dena","Kabhi pupils na draw karna","Jaanbujh kar dono eyes ko alag heights pe rakhna"], correct:1, explain:"Hum intuitively eyes ko over-size kar dete hain kyunki unhe sabse important treat karte hain \u2014 contrast aur detail size se zyada reliably importance signal karte hain."}
    ],
    checklist: [
      "Ek eye ko ek tilted brow-ridge box aur ek spherical eyeball se shuru karke construct kar sakta/sakti hoon, lid details add karne se pehle.",
      "Asymmetric eyelid shape correctly draw kar sakta/sakti hoon \u2014 heavier upper lid, peaks nose aur ear ki taraf offset.",
      "Gaze angle center se door jaane pe iris ko compress hoti ellipse ki tarah draw kar sakta/sakti hoon.",
      "Loomis eye-line aur roughly one-eye-width spacing use karke eyes ka ek pair place kar sakta/sakti hoon."
    ],
    nextStep: "Eyebrows \u2014 expression ke dauraan sabse zyada move karne wala ek single feature, jo seedha is module wale brow ridge pe sit karta hai."
  },

  m24: {
    hook: "Expression ke dauraan doosre kisi bhi feature se zyada move karne wala feature, aur wo jise beginners bone ke peeche follow karti hui hair ki jagah ek floating line ki tarah draw karte hain.",
    whyItMatters: [
      "Eyebrows do wajahon se disproportionately important hain: wo seedha Module 16 wale brow ridge bone structure ke upar sit karte hain, isliye unki placement koi free artistic choice nahi hai \u2014 ye neeche ki anatomy se dictate hoti hai \u2014 aur wo legible facial expression ke do sabse bade drivers mein se ek hain (mouth, Module 26 mein, doosra hai), yahi wajah hai ki ye module Module 29 ki direct preparation ki tarah rakha gaya hai."
    ],
    coreIdea: [
      "Eyebrows skull wale <b>brow ridge</b> ko follow karte hain \u2014 wo eye ke upar kahin floating shape nahi hain, wo us bone ke curve pe sit karte hain aur usi ko follow karte hain. Yahi wajah hai ki eyebrow placement, hairstyle ke unlike, ek baar underlying skull aur Loomis construction (Modules 16 aur 18) set ho jaayein, to really ek free design choice nahi rehti.",
      "Hair growth direction consistent aur specific hoti hai: brow hair nose ke paas upward aur outward grow karti hai, phir temple ki taraf progressively downward aur outward angle leti hai. Har hair ko same direction mein ya ek uniform arc mein draw karna hi eyebrow ko painted-on dikhata hai, grown nahi.",
      "Thickness, arch height, aur density individual, age, aur gender ke hisaab se almost kisi bhi doosre facial feature se zyada vary karte hain \u2014 jo eyebrows ko characters differentiate karne ya likeness push karne ke sabse fast tareekon mein se ek banata hai, ek baar underlying brow-ridge placement correctly anchor ho jaaye.",
      "Expression work mein, eyebrows largely ek unit ki tarah brow ridge ke relative move karte hain \u2014 surprise ke liye raised, anger ya concentration ke liye lowered aur together drawn, skepticism ke liye asymmetrically raised. Module 29 isse depth mein cover karta hai; is module ka kaam pehle eyebrow ki resting placement aur construction solid karna hai."
    ],
    mistakes: [
      "Eyebrows ko neeche wale brow ridge bone structure se disconnected, ek floating shape ki tarah draw karna.",
      "Har brow hair ko ek uniform direction ya arc mein render karna, actual growth pattern follow karne ke bajaye \u2014 nose ke paas up aur out, temple ki taraf down aur out.",
      "Eyebrow shape ko har character pe apply hone wala ek fixed template treat karna, age, individual, aur intended expression se juda ek variable ki jagah.",
      "Head ke liye already established Loomis brow-line guideline ka reference liye bina eyebrows place karna."
    ],
    proTips: [
      "Pehle brow ridge draw karo, phir uske upar eyebrow \u2014 kabhi ulta nahi.",
      "Hair-direction strokes ko full eyebrow shapes se alag practice karo: inner corner se outward aur downward fan hoti short strokes.",
      "Same simplified head ko teen alag eyebrow thicknesses aur arch heights ke saath sketch karo, dekhne ke liye ki sirf ek feature perceived age aur personality kitna badal sakta hai."
    ],
    practice: {
      warmup: "Module 23 wale brow-ridge box ko paanch baar draw karo, har ek ke upar sirf ek simple eyebrow line add karke placement confirm karte hue.",
      daily: "Har din ek naye simplified head pe correct hair-direction strokes use karke eyebrows ka ek pair draw karo.",
      weekly: "Same head ko teen baar, alag eyebrow thickness aur arch ke saath draw karo, compare karte hue perceived age aur personality kitna shift hoti hai.",
      challenge: "Ek face draw karo sirf eyebrows ke saath \u2014 koi eyes, nose, ya mouth nahi \u2014 aur dekho akele eyebrows kitni emotional information communicate karte hain."
    },
    quiz: [
      {q:"Ek eyebrow kahan sit karega, ye sabse zyada kya decide karta hai?", options:["Bina kisi anatomical basis ke personal artistic choice","Uske neeche ka brow ridge bone structure","Hair color","Nose ki position"], correct:1, explain:"Eyebrows brow ridge ko follow karte hain \u2014 ek baar skull aur Loomis construction set ho jaayein, placement really ek free choice nahi rehti."},
      {q:"Real eyebrow hair growth direction ko sabse achhe se kaunsa describe karta hai?", options:["Poori brow mein ek hi direction mein uniformly","Nose ke paas upward aur outward, temple ki taraf downward aur outward angling","Hamesha seedha neeche","Random, koi consistent pattern nahi"], correct:1, explain:"Direction inner se outer corner tak progressively shift hoti hai \u2014 uniform strokes painted-on lagte hain, grown nahi."},
      {q:"Mouth ke saath, eyebrows ko is module mein kya describe kiya gaya hai?", options:["Sabse least expressive facial feature","Legible facial expression ke do sabse bade drivers mein se ek","Expression se irrelevant","Sirf cartoon styles mein relevant"], correct:1, explain:"Eyebrow aur mouth position mil ke ek expression ka zyada tar legible signal carry karte hain."}
    ],
    checklist: [
      "Main eyebrows ko already-placed brow ridge ke upar draw karta/karti hoon, ek floating independent shape ki tarah nahi.",
      "Main correct inner-to-outer growth direction follow karti hui eyebrow hair strokes render kar sakta/sakti hoon.",
      "Main perceived age ya personality shift karne ke liye eyebrow thickness aur arch ko deliberately vary kar sakta/sakti hoon.",
      "Main identify kar sakta/sakti hoon ki akele ek eyebrow pair kitna expression communicate karta hai, baaki features ke bina."
    ],
    nextStep: "The Nose \u2014 chaar major planes, aur beginner portraits mein sabse zyada flatten hone wala feature."
  },

  m25: {
    hook: "Aadha bone, aadha cartilage, chaar major planes \u2014 aur wo feature jo sabse zyada chances mein ek flat 2D outline aur nostrils ke liye do holes ban ke reh jaata hai.",
    whyItMatters: [
      "Nose ko students often \u2014 including is module ke resources ke peeche wali actual course discussions mein \u2014 sabse hard single feature bataya jaata hai draw karna \u2014 isme eyes ya mouth se kam familiar landmarks hain, aur head rotation aur tilt ke saath iski form doosre kisi bhi feature se zyada dramatically badalti hai. Yahan comfortable ho jaana seedha aage ke har portrait mein kaam aata hai."
    ],
    coreIdea: [
      "Nose <b>chaar major planes</b> mein simplify hoti hai: bridge ke neeche jaate hue ek top plane aur do side planes, aur ek bottom plane. In chaar planes ko sahi proportion aur perspective mein establish karna, kisi bhi anatomical detail se zyada shuru mein matter karta hai \u2014 ek crooked ya galat size wali structure ke upar details refine karne ka koi fayda nahi.",
      "Structurally, nose aadhi bone hai aadhi cartilage: bridge ka upper half <b>nasal bone</b> hai, lower half <b>lateral cartilage</b> hai, jo do pieces mein wedge hoti hai jo nose ki <b>ball</b> banate hain. <b>Nostrils</b> (technically alar fat, cartilage nahi) septum se aur peeche attach hote hain, ball se hanging wings ki tarah.",
      "Jaise head front se profile ki taraf turn hota hai, far side plane patla hota jaata hai aur eventually gayab ho jaata hai, jabki near side plane thick hota jaata hai \u2014 full profile tak, top aur bottom planes bhi visible nahi rehte. Jaise head upar ya neeche tilt hota hai, bottom plane ki visible height dramatically badalti hai, aur nose tip eyes ki taraf ya unse door move hoti hui dikhti hai \u2014 ek common beginner error upward tilt pe nose tip ko lower karna hai, uski jagah use raise karna chahiye.",
      "<b>Glabella</b> \u2014 eyebrows ke beech ka keystone-shaped area, jo skull module mein conceptually already introduce ho chuka hai \u2014 nose ko seedha brow ridge structure se connect karta hai, aur usually ek subtle halftone carry karta hai jo dono eye sockets ko aapas mein jodta hai."
    ],
    mistakes: [
      "Nose ko ek flat 2D outline ki tarah draw karna, ya usse bhi bura, nostrils, wings, aur septum ke liye koi surrounding volume ke bina bas do holes ki tarah.",
      "Chaar major planes ke sahi proportion aur angle mein aane se pehle anatomical detail add karna.",
      "Jab head upar tilt kare to nose tip ko lower karna, uski jagah correctly raise karne ke bajaye jaise bottom plane zyada visible hota jaata hai.",
      "Ye ignore karna ki head profile ki taraf rotate hone pe far side plane kitna dramatically patla hokar gayab ho jaata hai."
    ],
    proTips: [
      "Koi bhi anatomical detail add karne se pehle, chaar major planes ko bahut halki, erasable lines mein block in karo.",
      "Module 10 wala carpenter's-eye check use karo: plane structure ko ek real 3D object ki tarah imagine karo aur socho ki kya dono sides center se equally distant hain aur correctly angled hain.",
      "Same nose ko paanch head rotations pe draw karo \u2014 front, three-quarter, profile, tilted up, tilted down \u2014 taaki ek memorized front view ki jagah real angle-independent understanding bane."
    ],
    practice: {
      warmup: "Ek simplified head pe chaar major nose planes \u2014 top, do sides, bottom \u2014 block in karo, abhi koi anatomical detail nahi.",
      daily: "Har din ek naye angle se ek full nose \u2014 planes, bridge, ball, wings, septum \u2014 construct karo.",
      weekly: "Same nose ko ek hi sitting mein paanch rotations pe draw karo: front, three-quarter, profile, tilted up, tilted down.",
      challenge: "Strong side lighting wali ek reference photo dhoondo aur ek nose ko sirf chaar major planes plus Module 11 wale core aur cast shadow se shade karo, koi fine detail nahi."
    },
    quiz: [
      {q:"Nose ke chaar major planes kaunse hain?", options:["Front, back, left, right","Top, do sides, aur bottom","Bone, cartilage, fat, skin","Sirf ek hi plane hai"], correct:1, explain:"Top, do side planes, aur ek bottom plane \u2014 inhe correctly establish karna shuru mein kisi bhi anatomical detail se zyada matter karta hai."},
      {q:"Jab head upar tilt hota hai to nose tip ke saath kya hota hai?", options:["Wo mouth ki taraf lower hoti dikhti hai","Wo raise hoti hui aur eyes ke kareeb aati hui dikhti hai, jaise bottom plane zyada visible hota jaata hai","Head tilt se kuch nahi badalta","Wo poori tarah gayab ho jaati hai"], correct:1, explain:"Ek common beginner mistake upward tilt pe tip ko lower karna hai \u2014 usse bottom plane ka visible area badhne ke saath raise hona chahiye."},
      {q:"Structurally, nose kaisi hoti hai?", options:["Poori tarah cartilage","Poori tarah bone","Roughly aadhi bone (upper bridge) aur aadhi cartilage (lower bridge aur ball)","Sirf ear jaisa hi tissue"], correct:2, explain:"Nasal bone upper bridge banati hai; lateral cartilage lower bridge banati hai aur nose ki ball mein wedge hoti hai."}
    ],
    checklist: [
      "Koi anatomical detail add karne se pehle chaar major nose planes block in kar sakta/sakti hoon.",
      "Roughly explain kar sakta/sakti hoon ki nose ka kaunsa part bone hai aur kaunsa cartilage.",
      "Kam se kam teen head rotations mein ek nose convincingly draw kar sakta/sakti hoon.",
      "Ek upward head tilt construct karte waqt nose tip ko correctly raise karta/karti hoon, lower nahi."
    ],
    nextStep: "The Mouth \u2014 teeth ke ek cylinder pe based, jo zyada tar beginners ko kabhi pata hi nahi chalta wahan hai."
  },

  m26: {
    hook: "Neeche se lips ko bahar push karta hua ek inflated tuna can bhara hua teeth ka \u2014 beginner mouth drawing mein sabse zyada overlook ki jaane wali idea.",
    whyItMatters: [
      "Mouth, eyebrows (Module 24) ke saath expression equation ka doosra half hai, aur ise often ek flat shape ki tarah seedha skin pe draw kar diya jaata hai, bina ye samjhe ki use uski actual three-dimensional form mein kya push kar raha hai. Wo missing piece \u2014 neeche wale teeth \u2014 hi is module ki sabse zyada overlook ki jaane wali idea hai."
    ],
    coreIdea: [
      "Lips face ke against flat nahi hote. Unke neeche teeth ka ek cylindrical structure hota hai, ek <b>inflated tuna can</b> ki tarah simplified \u2014 ye tooth cylinder peeche se lips ko bahar push karta hai, aur lips ki visible surface forms is underlying cylinder ki shape ka direct consequence hain.",
      "Lips ke major planes nose ke base se chin tak ek <b>three-step staircase</b> ki tarah chalte hain, top-facing aur bottom-facing planes ke beech alternate karte hue \u2014 profile se dekho to poora face hi ek is tarah ke stepped staircase ki tarah read hota hai.",
      "Top lip teen alag rounded forms se bana hota hai, aur bottom lip do se \u2014 top lip ka middle form, jise <b>tubercle</b> kehte hain, bottom lip ke do forms ke beech wedge hota hai. Ek angle se dekho to ye forms ek doosre ke upar visibly overlap karte hain, aur wahi overlap flat page pe depth ki tarah read hota hai.",
      "Lips ke corners, jinhe <b>nodes</b> kehte hain, wahan hi bahut saari expression muscles (<b>orbicularis oris</b> aur kai aur) attach aur overlap hoti hain, yahi wajah hai ki smile ya frown ke dauraan nodes face ke almost kisi bhi doosre part se zyada visibly shape badalte hain \u2014 ye seedha Module 29 wale expression work se connect karta hai.",
      "Local value \u2014 lips surrounding skin ke comparison mein kitni light ya dark read hoti hain \u2014 skin tone pe depend karta hai aur individual ke hisaab se vary karta hai, aur lips typically skin se sharper, brighter highlights dikhati hain unki thodi si moisture ki wajah se."
    ],
    mistakes: [
      "Lips ko face pe ek flat shape ki tarah draw karna, bina isse aware hue ki neeche se tooth cylinder unhe bahar push kar raha hai.",
      "Top aur bottom lip ko flat, undifferentiated shapes ki tarah treat karna, top pe teen aur bottom pe do overlapping forms ki jagah.",
      "Corners ke nodes ko ignore karna, jahan se actually mouth ka zyada tar expressive movement start hota hai.",
      "Lips ko bahut heavily outline karna, unki shape define karne ke liye value aur edge quality pe rely karne ke bajaye \u2014 course community bhi baar baar isi exact mistake pe feedback deti hai."
    ],
    proTips: [
      "Pehle tooth cylinder ko ek simplified rounded form ki tarah draw karo, phir lips ko uske upar stretched skin ki tarah build karo \u2014 is arc ke har doosre feature wala hi construction-before-detail principle.",
      "Three-step staircase of planes ko specifically profile view mein practice karo \u2014 ye dekhne ka sabse clear tarika hai ki mouth actually face se kaise protrude karta hai.",
      "Shade karte waqt, koi bhi halftone nuance add karne se pehle lips ko pehle do value groups mein separate karo \u2014 light aur shadow \u2014 bilkul jaise Module 12 kisi bhi form ke liye sikhata hai."
    ],
    practice: {
      warmup: "Tooth cylinder ko ek simple rounded cylinder shape ki tarah draw karo, abhi koi lips nahi, front se aur profile se.",
      daily: "Har din ek naye angle se ek full mouth \u2014 tooth cylinder, three-step staircase planes, top aur bottom lip forms \u2014 construct karo.",
      weekly: "Same mouth ko ek neutral expression, ek slight smile, aur ek slight frown mein draw karo, specifically ye dekhte hue ki nodes kaise badalte hain.",
      challenge: "Ek mouth ko pehle sirf do values se shade karo \u2014 Module 19 wale Asaro head exercise wala hi two-value discipline \u2014 koi bhi halftone detail add karne se pehle."
    },
    quiz: [
      {q:"Is module ke hisaab se, kaunsa structure neeche se lips ko bahar push karta hai?", options:["Kuch nahi, lips face pe flat sit karte hain","Teeth ka ek simplified cylinder, jaise ek inflated tuna can","Nose","Sirf jaw hinge"], correct:1, explain:"Neeche wala tooth cylinder is module ke hisaab se beginner mouth drawing mein sabse zyada overlook ki jaane wali idea hai."},
      {q:"Top aur bottom lip kitne alag forms se milkar bante hain?", options:["Har ek ek hi flat form","Top pe teen, bottom pe do","Top pe paanch, bottom pe ek","Unke koi distinct forms hote hi nahi"], correct:1, explain:"Top lip ka middle form, tubercle, bottom lip ke do forms ke beech wedge hota hai."},
      {q:"Lips ke corners (nodes) expression ke liye itna zyada kyun matter karte hain?", options:["Wo expression ko affect karte hi nahi","Wahan bahut saari expression muscles attach aur overlap hoti hain, isliye smile ya frown mein wo sabse zyada move karte hain","Wo mouth ka sirf color badalte hain","Wo eyebrow position control karte hain"], correct:1, explain:"Nodes wahan hain jahan multiple muscles khinchti hain, isliye expression ke dauraan mouth ka wo sabse zyada visibly active part hote hain."}
    ],
    checklist: [
      "Ek simplified tooth cylinder se shuru karke mouth construct kar sakta/sakti hoon, lip detail add karne se pehle.",
      "Nose ke base se chin tak planes ka three-step staircase draw kar sakta/sakti hoon, especially profile mein.",
      "Top lip ke teen forms aur bottom lip ke do forms ko correct overlap ke saath draw kar sakta/sakti hoon.",
      "Mouth ke corners ke nodes identify kar sakta/sakti hoon aur bata sakta/sakti hoon wo expression ke liye kyun matter karte hain."
    ],
    nextStep: "Ears \u2014 ek question mark ki shape ke, aur wo feature jise zyada tar beginners poori tarah skip kar dete hain."
  },

  m27: {
    hook: "Ek question mark pehne hua megaphone shape \u2014 aur wo ek feature jiski placement genuinely ek head tilt ko bana ya bigaad deti hai.",
    whyItMatters: [
      "Ears wo feature hain jinhe beginners sabse zyada jaldbaazi mein karte hain ya poori tarah skip kar dete hain, kyunki inme koi obvious expression nahi hoti aur eyes ya mouth ki tarah study karna utna rewarding nahi lagta. Par ear placement sabse fast, sabse reliable checks mein se ek hai ye janne ka ki ek head rotation ya tilt actually sahi read ho raha hai ya nahi \u2014 isse galat karo aur poora construction quietly gir jaata hai, chahe baaki har feature perfect ho."
    ],
    coreIdea: [
      "Ear ka overall volume ek <b>megaphone</b> shape mein simplify hota hai, head ke peeche se dekhna sabse aasan hai: <b>concha</b> wo tubular part hai jo skull se connect hota hai aur outer ear (<b>helix</b>) ko head se door push karta hai, bilkul megaphone ke narrow end se flare hokar uske wide mouth mein badalne jaisa.",
      "Ear ke complex internal shapes ek simple mnemonic se yaad rakhna aasan ho jaata hai: poora ear ek <b>question mark</b> jaisa lagta hai, earlobe uska dot hai. <b>Helix</b> top ke upar se curve karta hai aur andar around jaakar almost ek circle complete kar deta hai; <b>antihelix</b> uske andar ka Y-shaped ridge hai; <b>tragus</b> aur <b>antitragus</b> ek doosre ki taraf point karti do chhoti bead-jaisi forms hain, jinke beech ek U-shaped notch hota hai.",
      "Placement anatomically fixed hai, koi free choice nahi: ear face ke <b>middle third</b> mein sit karta hai (seedha Module 17 wale vertical-thirds proportion system se joda hua), uska top brow ridge se aligned hota hai aur bottom nose ke base se. Ek downward head tilt pe, ears head pe <i>upar</i> place hone chahiye; ek upward tilt pe <i>neeche</i> \u2014 isse ulta karna ek tilted head ke illusion ko todne ka sabse fast tareeka hai, chahe baaki har feature correctly construct kiya gaya ho.",
      "<b>Earlobe</b> ear ka wo ek hi part hai jo cartilage nahi hai, yahi wajah hai ki wo alag tarike se hang karta hai aur shade hota hai \u2014 upar wale cartilage-based helix aur antihelix se softer, zyada rounded. Ye roughly poore ear ki height ka ek-tihai hota hai, halaanki individual ke hisaab se vary karta hai."
    ],
    mistakes: [
      "Ears ko optional ya afterthought ki tarah treat karna kyunki inme eyes ya mouth se kam obvious expression hoti hai.",
      "Head tilt ke bawajood ears ko ek fixed height pe rakhna, downward tilt pe unhe upar aur upward tilt pe neeche rakhne ke bajaye.",
      "Internal ear shapes ko random confused squiggles ki tarah draw karna, unhe organize karne ke liye megaphone-and-question-mark structure use karne ke bajaye.",
      "Poore ear ko uniformly shade karna, earlobe ko ek alag, non-cartilaginous material ki tarah recognize karne ke bajaye jise softer render karna chahiye."
    ],
    proTips: [
      "Koi bhi internal detail try karne se pehle megaphone volume aur question-mark outline sketch karo \u2014 Module 6 wala hi big-shape-first order.",
      "Ear ki brow ridge aur nose ke base ke saath alignment ko kisi bhi head construction pe ek running proportion check ki tarah use karo, tilted ho ya na ho.",
      "Ears ko kabhi kabhar head ke peeche se bhi practice karo, sirf standard three-quarter view se nahi \u2014 ye samajhne ka sabse clear angle hai ki concha actually skull se kaise connect hota hai."
    ],
    practice: {
      warmup: "Ek ear ka megaphone volume draw karo \u2014 koi internal detail nahi \u2014 side se aur peeche se.",
      daily: "Har din ek naye angle se question-mark structure use karke ek full ear \u2014 helix, antihelix, tragus, antitragus, lobe \u2014 construct karo.",
      weekly: "Ek clear up-tilt wala aur ek clear down-tilt wala full head construct karo, har baar ears ko correctly upar ya neeche place karte hue.",
      challenge: "Module 12 wale organic-cylinder logic se ek ear shade karo, uske major volumes ko flat shapes ki jagah rounded forms ki tarah treat karte hue."
    },
    quiz: [
      {q:"Ek downward head tilt pe ear placement ka kya hota hai?", options:["Ears ko head pe neeche place karna chahiye","Ears ko head pe upar place karna chahiye","Tilt se ear placement kabhi nahi badalta","Ears view se gayab ho jaate hain"], correct:1, explain:"Isse ulta karna ek tilted head ke illusion ko todne ka sabse fast tareeka hai, chahe baaki sab kuch correctly construct kiya ho."},
      {q:"Ear ka kaunsa part ek hi part hai jo cartilage nahi hai?", options:["Helix","Tragus","Earlobe","Antihelix"], correct:2, explain:"Earlobe non-cartilaginous hai, yahi wajah hai ki ye ear ke baaki hisso se alag tarike se hang aur shade hota hai \u2014 softer aur zyada rounded."},
      {q:"Ear ka top aur bottom kaunse do landmarks ke saath vertically align hota hai?", options:["Chin aur hairline","Brow ridge (top) aur nose ka base (bottom)","Eyes aur mouth","Koi reliable alignment nahi hoti"], correct:1, explain:"Ye seedha middle-third proportion system se juda hai \u2014 ear nose wala hi vertical zone cover karta hai."}
    ],
    checklist: [
      "Koi internal detail add karne se pehle ear ka overall megaphone volume construct kar sakta/sakti hoon.",
      "Question-mark structure use karke helix, antihelix, tragus, aur antitragus place kar sakta/sakti hoon.",
      "Down-tilt pe ear placement correctly upar aur up-tilt pe neeche karta/karti hoon.",
      "Bata sakta/sakti hoon ki earlobe baaki ear se alag tarike se kyun shade hota hai."
    ],
    nextStep: "Facial Proportions \u2014 is arc mein banaye gaye har feature ko doosre har feature ke against check karna, sirf poore head ke against nahi."
  },

  m28: {
    hook: "Module 17 ne features ko poore head ke against check kiya tha. Ye module unhe ek doosre ke against check karta hai \u2014 jahan actually zyada tar likeness rehti hai.",
    whyItMatters: [
      "Module 17 ne poore head level pe proportion cover kiya tha: thirds, eye-line, overall eye spacing. Ye module ek level aur deep jaata hai, ab jab char major features individually construct ho chuke hain \u2014 eyes, nose, mouth, aur ears ko <i>ek doosre ke against</i> check karna, sirf head ke against nahi. Yahin par zyada tar wo cheez rehti hai jo ek face ko ek generic template ki jagah ek specific individual jaisa dikhati hai."
    ],
    coreIdea: [
      "Feature-to-feature relationships sirf head ke against measure karne se kahin zyada useful checks dete hain. Kuch reliable starting averages: nose ka base pe width roughly wahi hoti hai jitni eyes ke beech ki distance; mouth ki width roughly seedha aage dekhte waqt irises ke inner edges se align hoti hai; ear ki height roughly nose jitni hi vertical distance cover karti hai, kyunki dono Module 27 mein establish hui brow-ridge-to-nose-base zone se anchored hain.",
      "Ye relationships, Module 17 wale head-level proportions ki tarah hi, measure karne ke liye starting averages hain \u2014 fixed rules nahi jinhe har face follow kare. Module 5 wali comparative-measurement technique yahan seedha apply hoti hai: mouth zyada wide hai ya nahi guess karne ke bajaye, use pehle se place kiye gaye eye spacing ke against measure karo.",
      "Features ke beech cross-checking wo errors pakadti hai jo ek feature ko isolation mein check karne se miss ho jaate hain. Apne aap mein correct lagta hua ek nose, eye spacing ke against measure karte hi bahut wide ya bahut narrow reveal ho sakta hai \u2014 yahi wajah hai ki professionals head feature-by-feature banate hain par pehle se placed cheezon ke against baar baar wapas check karte rehte hain, ek feature poori tarah finish karne ke baad hi doosra shuru karne ke bajaye.",
      "In feature-to-feature relationships mein individual variation hi wo bada hissa hai jo ek recognizable, specific face banata hai, generic ki jagah \u2014 is module ka goal measure karne ke liye ek reliable set of starting relationships hona hai, aur jaanbujh kar unse deviate karna, ek rigidly follow karne wali rulebook nahi."
    ],
    mistakes: [
      "Ek feature ko isolation mein perfect karna bina use kabhi doosre already-placed features ke against wapas check kiye.",
      "Feature-to-feature ratios ko strict rules ki tarah treat karna, measure karne aur jaanbujh kar adjust karne ke liye starting averages ki jagah.",
      "Proportions ko sirf drawing ke start mein check karna, jaise jaise features add hote hain continuously re-measure karne ke bajaye.",
      "Feature width aur spacing guess kar lena, pehle se placed features ke against comparative measurement use karne ke bajaye."
    ],
    proTips: [
      "Har naya feature place karne ke baad, use turant page pe pehle se maujood kam se kam ek feature ke against measure karo, sirf head ki overall guidelines ke against nahi.",
      "Jab ek face thoda galat lage aur koi single feature obviously broken na lage, kisi ek feature ko dubara draw karne se pehle feature-to-feature relationships check karo.",
      "Ye mentally (ya literally) note karo ki kaunse feature-to-feature relationships se tum jaanbujh kar deviate kar rahe ho \u2014 usually wahin par kisi subject ki actual likeness ban rahi hoti hai."
    ],
    practice: {
      warmup: "Ek simplified head pe jahan eyes aur nose already place hain, comparative measurement se check karo ki nose ki width eye spacing se match karti hai ya nahi.",
      daily: "Ek full face construct karo \u2014 eyes, eyebrows, nose, mouth, ears \u2014 aage badhte hue har naye feature ko pehle se placed features ke against re-measure karte hue.",
      weekly: "Ek real reference photo lo aur uske actual feature-to-feature relationships ko is module ke averages ke against measure karo, note karte hue individual kahan deviate karta hai.",
      challenge: "Same head proportions se shuru karke do alag imagined faces construct karo, jaanbujh kar sirf feature-to-feature relationships vary karte hue, aur compare karo wo individuals ki tarah kitna alag read hote hain."
    },
    quiz: [
      {q:"Is module ka proportion check Module 17 se kaise alag hai?", options:["Ye identical hai, bas repeat kiya gaya hai","Ye features ko ek doosre ke against check karta hai, sirf poore head ke against nahi","Ye sirf cartoon styles pe apply hota hai","Ye Module 17 ko poori tarah replace kar deta hai"], correct:1, explain:"Module 17 features ko head ke against check karta hai; ye module unhe ek doosre ke against check karta hai, jahan individual likeness rehti hai."},
      {q:"Is module ke hisaab se, base pe nose ki width roughly kis cheez ke comparable hoti hai?", options:["Poore head ki width","Eyes ke beech ki distance","Ear ki height","Chin ki width"], correct:1, explain:"Ye measure karne ke liye ek useful starting average hai, koi fixed rule nahi."},
      {q:"Ek feature ko agle se pehle poori tarah perfect karne ke bajaye, ye module kya recommend karta hai?", options:["Ek session mein sirf ek hi feature pe kaam karna","Har naye feature ko pehle se placed features ke against continuously re-check karna","Measurement poori tarah skip karke instinct pe rely karna","Hamesha mouth se shuru karna"], correct:1, explain:"Pehle se placed features ke against wapas cross-checking wo errors pakadti hai jo ek feature ko isolation mein check karne se miss ho jaate hain."}
    ],
    checklist: [
      "Comparative measurement se nose ki width ko eye spacing ke against measure kar sakta/sakti hoon.",
      "Har naye feature ko sirf head-level guidelines ke against nahi, pehle se placed features ke against bhi re-check karta/karti hoon.",
      "Ek real reference mein kam se kam ek feature-to-feature relationship identify kar sakta/sakti hoon jo average se deviate karti hai.",
      "Explain kar sakta/sakti hoon ki feature-to-feature proportion, sirf head-level proportion se, likeness ke liye zyada kyun matter karti hai."
    ],
    nextStep: "Facial Expressions \u2014 jab in features ke neeche wali muscles actually unhe khinchna shuru karti hain, tab kya hota hai."
  },

  m29: {
    hook: "Memorized \"sad face\" aur \"angry face\" templates ki koi library nahi \u2014 muscles specific points pe khinch rahi hain, aur jab tum result copy karne ke bajaye us khinchne ko samajh lete ho to kya hota hai.",
    whyItMatters: [
      "Beginners typically expressions usi tarike se seekhte hain jaise unhone Module 15 mein pehle pehle faces seekhne ki koshish ki thi: har emotion ke liye ek fixed template memorize karke. Ye same wajah se fail hota hai \u2014 ek memorized \"angry face\" ek three-quarter angle, ek subtler intensity, ya kisi specific individual ke face pe generalize nahi hota. Neeche wali muscles actually kya aur kahan khinchti hain ye samajhna, in sab pe generalize hota hai."
    ],
    coreIdea: [
      "Expression is arc mein already covered specific points pe specific muscles khinchne se aata hai: mouth ke corners ke <b>nodes</b> (Module 26) ek saath kai muscles se khinche jaate hain aur face ke almost kisi bhi doosre point se zyada move karte hain; <b>eyebrows</b> (Module 24) brow ridge ke relative ek unit ki tarah shift hote hain; eye socket ka soft tissue eyeball ke around compress aur stretch hota hai (Module 23).",
      "Professional animation aur portrait instruction expression ko organize karne ke liye commonly <b>Facial Action Coding System</b> (FACS) use karta hai, jise psychologist Paul Ekman ne develop kiya \u2014 individual muscle movements (\"action units\") ka ek systematic catalog jo mil ke har recognizable expression banate hain. Poora system yaad karne ki zaroorat nahi hai iske peeche ki idea se benefit uthane ke liye: ek expression ko uske overall silhouette copy karne ke bajaye, ye dekho ki specifically kaunse points khinche gaye hain.",
      "Poore face mein consistency hi ek convincing expression ko ek unconvincing se alag karti hai. Ek genuine smile mouth ke nodes ko khinchta hai <i>aur</i> eyes ke around ki skin ko bhi visibly compress karta hai (ek authentic smile aur ek purely polite smile ka yahi fark hai, kabhi kabhi specifically eyes ke saath kiya jaana \"smizing\" bhi kehlata hai) \u2014 ek sirf-mouth wali smile jisme eyes unaffected rahein, false lagti hai, even un viewers ko bhi jo exactly explain nahi kar sakte ki kyun.",
      "Subtlety utni hi matter karti hai jitni intensity. Ek halka sa raised eyebrow skepticism utni hi clearly communicate karta hai jitna ek poora furrowed brow anger communicate karta hai \u2014 aur exaggeration ek jaanbujh kar liya gaya storytelling choice hona chahiye (cartoon aur anime styles mein common), na ki wo ek hi intensity jo ek beginner ko draw karni aati hai."
    ],
    mistakes: [
      "Har emotion ke liye ek fixed expression template memorize karna, ye samajhne ke bajaye ki kaunsi muscles kaunse points khinchti hain.",
      "Ek aisi smile draw karna jo sirf mouth ko affect kare, eyes ko unaffected chhod ke \u2014 jo insincere lagti hai, viewer ko exactly wajah pata na hote hue bhi.",
      "Hamesha sirf maximum-intensity expressions draw karna, un subtle, low-intensity versions ko practice karne ke bajaye jo utni hi information carry karte hain.",
      "Kisi reference se ek expression ka overall outline copy karna, bina ye samjhe ki use banane ke liye specifically kaunse points khinche gaye the."
    ],
    proTips: [
      "Mirror mein dekho aur slowly ek expression banao, specifically dekhte hue ki change kahan se start hota hai \u2014 usually nodes, eyebrows, ya eye socket \u2014 baaki face tak spread hone se pehle.",
      "Same expression ko teen intensities pe draw karna practice karo: barely perceptible, moderate, aur full \u2014 barely perceptible wala version usually sabse hard aur sabse useful hota hai.",
      "Jab koi expression unconvincing lage, check karo ki kya eyes aur mouth actually ek doosre se agree karte hain, sirf ye nahi ki mouth ki shape apne aap mein correct hai."
    ],
    practice: {
      warmup: "Mirror mein, paanch alag expressions slowly banao aur note karo har ek mein pehle kaunsa single point move karta hai.",
      daily: "Har din same simplified face pe ek expression draw karo, specifically mouth nodes aur eyebrows ko consistently saath mein move karne pe focus karte hue.",
      weekly: "Same expression ko teen intensities \u2014 subtle, moderate, full \u2014 par same face pe draw karo.",
      challenge: "Ek face draw karo jisme mouth ek emotion express kare aur eyes ek contradicting emotion \u2014 phir use ek aise version se compare karo jisme dono agree karte hon \u2014 dekho mismatched version kitna kam convincing lagta hai."
    },
    quiz: [
      {q:"Har emotion ke liye ek fixed template memorize karne ke bajaye, ye module kya recommend karta hai?", options:["Reference photos ko exactly copy karna","Ye samajhna ki kaunsi specific muscles kaunse points khinchti hain, aur usse expression build karna","Sirf exaggerated expressions draw karna","Fully advanced hone tak expressions avoid karna"], correct:1, explain:"Underlying pull samajhna naye angles aur intensities pe generalize hota hai; ek memorized template nahi hota."},
      {q:"Ek sirf-mouth wali smile often insincere kyun lagti hai?", options:["Aisa hota hi nahi \u2014 sirf mouth position matter karti hai","Ek genuine smile eyes ko bhi visibly affect karti hai, aur mouth aur eyes ke beech mismatch false lagta hai","Insincere smiles hamesha jaanbujh kar galat draw ki jaati hain","Expression read karne mein eyes ka koi role nahi hota"], correct:1, explain:"Eyes aur mouth ke beech consistency hi ek convincing expression ko ek unconvincing se alag karti hai."},
      {q:"Facial Action Coding System (FACS) kya hai?", options:["Ek drawing app","Individual muscle movements ka ek systematic catalog jo mil ke expressions banate hain, Paul Ekman dwara develop kiya gaya","Ek pencil grade ka type","Poore body ke liye ek proportion system"], correct:1, explain:"FACS expressions ko specific muscle-driven action units mein todta hai, har emotion ko ek fixed shape treat karne ke bajaye."}
    ],
    checklist: [
      "Identify kar sakta/sakti hoon ki ek real expression shuru hote waqt kaunse points \u2014 mouth nodes, eyebrows, eye socket \u2014 sabse pehle move karte hain.",
      "Ek aisi smile draw kar sakta/sakti hoon jo mouth aur eyes dono ko visibly affect kare, sirf mouth ko nahi.",
      "Same expression ko subtle, moderate, aur full intensity pe draw kar sakta/sakti hoon.",
      "Apne shabdon mein explain kar sakta/sakti hoon ki eyes aur mouth ke beech mismatch ek unconvincing expression jaisa kyun lagta hai."
    ],
    nextStep: "Head + Features Integration \u2014 is poori arc ki sab cheezein ek coherent, constructed head mein combine karna."
  },

  m30: {
    hook: "Is poori arc ka har system, ek saath, ek head pe chalte hue \u2014 iska actual test ki kya inme se kuch bhi genuinely seekha gaya tha.",
    whyItMatters: [
      "Ye Head & Portrait arc ka capstone hai. Ab tak ka har module \u2014 skull, proportions, Loomis, Asaro, rotation, perspective, planes, aur har individual feature \u2014 relative isolation mein practice hua hai. Integration wahi jagah hai jahan ye sab kuch ek saath, ek single, coherent head pe chalna hai, jo kisi bhi ek piece ko akela execute karne se genuinely alag aur harder skill hai.",
      "Ye module jaanbujh kar kuch naya seekhne ke baare mein nahi hai. Ye practice ke through ye prove karne ke baare mein hai ki pieces actually connect hote hain \u2014 bilkul Module 15 mein set kiya gaya standard: construction jo kisi bhi angle, kisi bhi lighting, aur kisi bhi individual pe generalize ho, imagination se banaya gaya, ek single reference se copy kiya gaya nahi."
    ],
    coreIdea: [
      "Full integrated workflow, order mein, is arc ke har pichle module se seedha aata hai: gesture ya orientation decision, Loomis sphere-and-guideline construction (Module 18) jo intended rotation (Module 20) aur perspective (Module 21) ke liye adjust ho, poore face mein map kiye gaye planes (Module 22), phir har feature \u2014 eyes, eyebrows, nose, mouth, ears (Modules 23\u201327) \u2014 us structure ke upar build hoke ek doosre ke against cross-checked (Module 28), aur expression (Module 29) sabse last apply hota hai kyunki ye is baat pe depend karta hai ki har feature already correctly place ho chuka ho.",
      "Consistency hi integration ka poora point hai. Ek single light source ko har plane aur har feature pe ek saath sense banana padta hai \u2014 ek eye socket shadow jo nose ke cast shadow se agree nahi karta poori drawing ki credibility tod deta hai, chahe har feature apni alag assumed lighting mein isolation mein correct dikhta ho.",
      "Feature-by-feature-to-completion ke bajaye back-to-front kaam karna hi wo professional habit hai jo ye module reinforce karta hai: pehle sabhi major features ko loosely, low detail mein block karo, overall proportion aur rotation check karte hue, kisi ek ko fully render karne se pehle \u2014 bilkul wahi shapes-before-forms-before-detail hierarchy jo Module 6 se poore course mein chalti aayi hai.",
      "Ye module Module 15 wali baseline drawing pe wapas jaane ka bhi natural point hai \u2014 memory se banaye gaye paanch faces, is arc shuru hone se pehle date karke alag rakhe hue. Us baseline ko ek current construction ke saath honestly compare karna, is course ka sabse clear, sabse motivating evidence hai ki construction-based learning actually kaam karti hai."
    ],
    mistakes: [
      "Ek feature ko poori tarah render karna baaki sabko roughly block karne se pehle, poore face pe ek saath loose-to-detailed kaam karne ke bajaye.",
      "Multiple features ek saath render hote waqt ek single consistent light source ka track kho dena.",
      "Integration ko bas already-practiced features ko ek doosre ke bagal mein rakhna samajh lena, Module 28 ki tarah unhe continuously ek doosre ke against cross-check karne ke bajaye.",
      "Module 15 wale baseline drawings se comparison skip kar dena, jo isi baat ka sabse clear evidence hai ki actually kitna badla hai."
    ],
    proTips: [
      "Poore head pe passes mein loose-to-detailed kaam karo \u2014 ek pass overall construction aur rotation ke liye, ek feature placement aur proportion ke liye, ek planes aur light logic ke liye, ek final detail ke liye \u2014 har feature ko sequence mein finish karne ke bajaye.",
      "Drawing se baar baar peeche hato aur squint karo, Module 6 wala hi silhouette check, ab ek complete integrated head pe apply karte hue.",
      "Ab Module 15 wale baseline drawings nikaalo, unke bagal mein ek naya set date karo, aur comparison ke baare mein honest raho \u2014 yehi actual point hai unhe pehle jagah pe banane ka."
    ],
    practice: {
      warmup: "Paanch minute se kam mein ek poora head loosely block karo \u2014 Loomis construction, sabhi major features roughly placed, koi detail nahi.",
      daily: "Imagination se ek complete head construct karo, poore face pe loose-to-detailed kaam karte hue, feature-by-feature-to-completion ke bajaye.",
      weekly: "Same imagined character ke head ko teen alag angles pe construct karo, har feature ki proportion aur light source ko teeno mein poori tarah consistent rakhte hue.",
      challenge: "Apne paanch Module 15 baseline drawings nikaalo, same paanch subjects ko ab dubara draw karo, aur dono sets ko honestly, side by side, compare karo."
    },
    quiz: [
      {q:"Is module ka central point kya hai?", options:["Ek bilkul nayi construction technique sikhana","Practice ke through ye prove karna ki har pehle se alag module actually ek coherent head mein connect hota hai","Loomis method ko ek naye system se replace karna","Seedha advanced shading pe kood jaana"], correct:1, explain:"Integration test karta hai ki is poori arc ke individually-practiced pieces actually saath mein kaam karte hain ya nahi, koi naya content nahi."},
      {q:"Ek fully integrated head ke liye ye module kaunsa order recommend karta hai?", options:["Ek feature poori tarah finish karo, phir agle pe jaao","Poore head pe loose-to-detailed passes: construction, phir feature placement, phir planes aur light, phir final detail","Hamesha eyes ke fine detail se shuru karo","Har baar random order"], correct:1, explain:"Poore face pe loose-to-detailed kaam karna us common mistake se bachata hai jisme ek feature baaki ke place hone se pehle hi over-finish ho jaata hai."},
      {q:"Ye module Module 15 wale baseline drawings ke saath kya karne ki recommend karta hai?", options:["Unhe fenk do, ab wo relevant nahi hain","Unhe ab same subjects ki ek nayi koshish ke against honestly compare karo","Unhe grade ke liye submit karo","Unhe exactly same tarike se dubara draw karo"], correct:1, explain:"Wo honest side-by-side comparison hi is course ka sabse clear evidence hai ki construction-based learning actually kaam karti hai."}
    ],
    checklist: [
      "Ek complete head \u2014 rotation, planes, aur sabhi major features \u2014 construct kar sakta/sakti hoon, feature-by-feature ke bajaye loose-to-detailed kaam karke.",
      "Ek single integrated drawing mein har feature aur plane pe ek consistent light source rakhta/rakhti hoon.",
      "Apna current kaam Module 15 baseline drawings ke against honestly compare kar chuka/chuki hoon.",
      "Ek chosen angle pe, bina kisi single reference photo ko directly copy kiye, imagination se ek full head construct kar sakta/sakti hoon."
    ],
    nextStep: "Head & Portrait complete ho gaya. Next: Body & Anatomy \u2014 hair, neck, shoulders, torso, arms aur hands."
  },

  m31: {
    hook: "Hazaaron individual strands nahi \u2014 teen ya chaar value masses, ek aisi form ke upar sit karte hue jiska apna volume skull se alag hota hai.",
    whyItMatters: [
      "Hair ek aisi cheez hai jise beginners bahut pehle se hi strand-by-strand render karne ki koshish karte hain, aur ye almost kabhi convincing nahi lagta \u2014 result ek scratchy tangle hota hai jisme overall shape ka koi sense nahi hota. Real hair pehle large value masses ki tarah read hota hai; individual strands sirf ek already-correct structure ke upar accents ki tarah kaam karte hain.",
      "Ye module seedha construction (Module 10, combine-and-cut forms) aur shading systems (Module 12, value massing before detail) ke upar sit karta hai \u2014 hair basically inhi do ideas ka ek specific, highly variable material pe apply hona hai."
    ],
    coreIdea: [
      "Hair ka apna <b>volume</b> hota hai, us skull se alag jisse ye grow karte hain. Ye head ko ek painted-on cap ki tarah hug nahi karte \u2014 ye scalp se thoda door sit karte hain, shuru mein head ke cross-contour (Module 7) ko guide ki tarah follow karte hue, phir apni thickness aur gravity ke saath bahar push karte hue.",
      "Real hair ko squint karke dekhna (Module 6 aur Module 12 wala hi trick) do ya teen large value masses reveal karta hai \u2014 lightest, mid, darkest \u2014 kisi bhi individual strand visible hone se bahut pehle. In masses ko pehle block karna, bilkul Module 19 wale two-value Asaro exercise ki tarah, hi rendered hair ko ek coherent shape ki tarah read karwata hai, noise ki jagah.",
      "Hair scalp se ek consistent direction mein grow karta hai, ek ya do <b>whorl points</b> (commonly crown pe) se radiate karte hue, aur ek section ke andar har strand generally usi shared flow ko follow karta hai \u2014 yahi wajah hai ki koi bhi value ya detail se pehle draw ki gayi direction lines, zyada tar beginners ki expectation se zyada matter karti hain.",
      "Individual strand detail \u2014 flyaways, stray highlights, kuch crisp accent lines \u2014 <i>sabse last</i> mein, sparingly add hoti hai, aur sirf un mid-tone areas mein jahan aankh actually detail read karti hai (Module 13 wala hi texture-density principle). Har strand ko equally detail karna, especially sabse dark shadow mass ke andar, exactly wahi value structure flatten kar deta hai jisne hair ko solid dikhaya tha."
    ],
    mistakes: [
      "Kisi bhi overall value mass ya shape establish hone se pehle, bilkul first mark se hi individual strands draw karna.",
      "Hair ko ek flat 2D silhouette ki tarah treat karna jo seedha skull pe painted ho, bina apne volume ya thickness ke.",
      "Scalp ki growth direction aur whorl point ko ignore karna, isliye strands inconsistent ya arbitrary directions mein jaate hue dikhte hain.",
      "Har strand ko equal sharpness aur density mein render karna, sabse darkest shadow areas ke andar bhi, jo us value hierarchy ko erase kar deta hai jisne mass ko solid dikhaya tha."
    ],
    proTips: [
      "Ek reference (real hair ya photo) ko tab tak squint karo jab tak sirf do-teen value masses na bachein, aur ek bhi strand line touch karne se pehle unhe block karo.",
      "Pehle ek simplified head pe crown se radiate karti kuch direction arrows draw karo, kisi bhi mass lay-in karne se pehle.",
      "Individual strand accents ko bilkul end ke liye save karo, aur unhe mid-tones mein concentrate karo \u2014 sabse deep shadows mein nahi, sabse bright highlights mein bhi nahi."
    ],
    practice: {
      warmup: "Ek simplified head pe, ek simple hairstyle ke liye teen value masses draw karo \u2014 light, mid, dark \u2014 koi strand lines bilkul nahi.",
      daily: "Har din mass-first, strands-last order use karke ek naya hairstyle draw karo: growth direction arrows, phir value masses, phir kuch accent strands.",
      weekly: "Hair ki ek reference photo lo aur do versions banao: ek shuru se strand-by-strand, ek mass-first jisme accents sabse last add ho. Compare karo kaunsa ek image ki tarah zyada convincingly read hota hai, sirf close-up nahi.",
      challenge: "Same hairstyle ko teen alag lighting directions mein render karo, har baar mass-first order rakhte hue, aur compare karo value masses kaise shift hoti hain."
    },
    quiz: [
      {q:"Is module ke hisaab se, koi bhi individual hair strand draw karne se pehle kya establish hona chahiye?", options:["Exact hair color","Do ya teen large value masses","Character ka naam","Ek full ink outline"], correct:1, explain:"Value masses pehle aati hain \u2014 real hair ko squint karke dekhna kisi bhi strand visible hone se bahut pehle sirf do-teen masses reveal karta hai."},
      {q:"Individual strand accents kahan concentrate hone chahiye?", options:["Sabse deep shadows sameet, har value mein equally","Zyada tar mid-tones mein, sparingly","Sirf sabse bright highlights mein","Farak nahi padta, har jagah equally detail karo"], correct:1, explain:"Har strand ko equally detail karna, especially shadow mein, us value structure ko flatten kar deta hai jo hair ko solid dikhata hai."},
      {q:"Ye module hair ka neeche wale skull ke saath relationship ke baare mein kya kehta hai?", options:["Hair ka apna koi volume nahi hota aur ise skull ko exactly hug karna chahiye","Hair ka apna volume hota hai, skull se alag, jo uske cross-contour ko sirf ek starting guide ki tarah follow karta hai","Hair ko hamesha ek flat silhouette ki tarah draw karna chahiye","Hair sirf stylized art mein matter karta hai"], correct:1, explain:"Hair scalp se thoda door apni thickness aur gravity ke saath sit karta hai, ek flat cap ki tarah painted nahi."}
    ],
    checklist: [
      "Koi bhi strand detail add karne se pehle do-teen hair value masses block kar sakta/sakti hoon.",
      "Ek simplified head pe whorl point se radiate karti growth-direction arrows draw kar sakta/sakti hoon.",
      "Strand accents last mein add karta/karti hoon, evenly hote hue everywhere ki jagah mid-tones mein concentrated.",
      "Hair ko uske apne volume ke saath draw karta/karti hoon, skull ki surface se alag aur thoda door."
    ],
    nextStep: "Neck \u2014 head aur torso ke beech ka connector, aur wo diagonal muscle landmark jo zyada tar beginners kabhi draw hi nahi karte."
  },

  m32: {
    hook: "Ek vertical pole nahi jispe head sit karta hai \u2014 ek leaning cylinder ek diagonal muscle ke saath jo iski almost poori visible structure define karta hai.",
    whyItMatters: [
      "Neck, Module 20 wale head-rotation work aur do modules baad wale torso construction ke beech ka connector hai. Beginners frequently ise ek perfectly vertical, symmetrical cylinder ki tarah draw karte hain bina kisi defining structure ke \u2014 jo stiff lagta hai chahe uske dono taraf head aur shoulders achhe se construct kiye gaye hon."
    ],
    coreIdea: [
      "Neck ek cylinder mein simplify hota hai, par ye vertical nahi hota: ye torso se thoda aage lean karta hai head ka weight support karne ke liye, aur iska exact angle posture ke saath shift hota hai \u2014 ek perfectly upright neck, shoulders ke seedha upar centered, ek figure ko artificially stiff dikhane ke sabse fast tareekon mein se ek hai.",
      "Sabse useful single landmark <b>sternocleidomastoid</b> (SCM) hai, ek muscle jo ear ke seedha peeche se collarbone aur sternum tak ek clear diagonal ki tarah chalta hai. Ye diagonal side aur three-quarter view se neck ke zyada tar visible silhouette ko define karta hai, aur baaki kuch bhi draw karne se pehle ek guideline ki tarah draw karna worth hai.",
      "<b>Trapezius</b> neck ke base se neeche aur bahar shoulders mein chalti sloped sides banata hai \u2014 agle module mein zyada construction depth ke saath cover hoga, par yahan note karna worth hai neck ke doosre major silhouette-defining edge ki tarah.",
      "Head aur neck ko ek single rigid fused unit ki tarah move karne ki zaroorat nahi \u2014 neck ek taraf lean kar sakta hai jabki head doosri taraf tilt kare, bilkul jaise poori spine (Module 34) alag alag points pe independently bend kar sakti hai. Head-plus-neck ko ek single stiff block ki tarah treat karna ek common aur bahut fixable beginner habit hai."
    ],
    mistakes: [
      "Neck ko ek perfectly vertical cylinder ki tarah draw karna, torso se uske natural forward lean ko ignore karte hue.",
      "SCM diagonal ko poori tarah omit kar dena, neck ko bina kisi defining structural landmark ke chhodte hue.",
      "Neck ko exactly shoulders aur torso ke center pe attach karna, uski jagah thoda aage jahan ye actually sit karta hai.",
      "Head aur neck ko ek rigid unit ki tarah treat karna jo hamesha saath mein tilt aur rotate kare."
    ],
    proTips: [
      "Kisi bhi neck pe SCM diagonal ko apni pehli guideline ki tarah draw karo, cylinder ke outline se pehle.",
      "Check karo ki neck torso ki vertical line ke relative aage, peeche, ya ek taraf lean kar raha hai \u2014 ye ek natural pose mein almost kabhi perfectly plumb sit nahi karta.",
      "Head ko neck ke apne lean se independently tilt karna practice karo, unhe fused treat karne ki habit todne ke liye."
    ],
    practice: {
      warmup: "Front se ek simple head-neck-shoulder unit draw karo, dono sides pe SCM diagonal mark karte hue kisi doosri detail se pehle.",
      daily: "Har din same head-neck-shoulder unit ko ek naye neck lean aur head tilt pe construct karo, dono ko ek doosre se independent rakhte hue.",
      weekly: "Neck ko front, three-quarter, aur profile se draw karo, track karte hue SCM ka visible angle viewpoint ke saath kaise badalta hai.",
      challenge: "Ek figure construct karo jo ek shoulder ke upar se dekh raha ho, jahan neck neeche wale torso se kaafi zyada rotate karta hai \u2014 independent head/neck/torso movement ka ek genuinely useful stress-test."
    },
    quiz: [
      {q:"Is module ke hisaab se sabse useful single neck landmark kya hai?", options:["Adam's apple, hamesha","Sternocleidomastoid (SCM), jo ear ke peeche se collarbone tak diagonally chalta hai","Sirf trapezius","Koi useful neck landmark hota hi nahi"], correct:1, explain:"SCM diagonal neck ke zyada tar visible silhouette ko define karta hai aur baaki kuch bhi draw karne se pehle draw karna worth hai."},
      {q:"Kya neck ek natural pose mein shoulders ke perfectly vertical sit karta hai?", options:["Haan, natural look ke liye hamesha vertical","Nahi, ye typically torso se thoda aage lean karta hai, aur exact angle posture ke saath shift hota hai","Sirf profile view mein","Sirf children mein"], correct:1, explain:"Ek perfectly vertical neck ek figure ko artificially stiff dikhane ke sabse fast tareekon mein se ek hai."},
      {q:"Kya head neck ke apne lean se independently tilt kar sakta hai?", options:["Nahi, wo hamesha ek rigid unit ki tarah move karte hain","Haan \u2014 unhe fused treat karna ek common, fixable beginner habit hai","Sirf profile views mein","Sirf seedha aage dekhte waqt"], correct:1, explain:"Head aur neck kuch had tak independently move kar sakte hain, bilkul jaise spine alag alag points pe bend kar sakti hai."}
    ],
    checklist: [
      "Neck ke outline se pehle SCM diagonal ko ek guideline ki tarah draw karta/karti hoon.",
      "Neck ko ek natural forward lean ke saath construct karta/karti hoon, ek perfectly vertical cylinder ki jagah.",
      "Neck ko torso pe thoda aage attach karta/karti hoon, dead-center ki jagah.",
      "Ek head ko neck ke apne lean se independently tilt karte hue construct kar sakta/sakti hoon."
    ],
    nextStep: "Shoulders \u2014 ek collarbone jo beginners ki expectation se zyada bend karta hai, aur ek shoulder blade jo back ke across slide karta hai."
  },

  m33: {
    hook: "Collarbone ek straight bar nahi hai \u2014 ye ek lazy double-curve hai jo swivel kar sakta hai, aur uske neeche wala shoulder blade actually ribs ke across slide karta hai jaise jaise arm move karta hai.",
    whyItMatters: [
      "Shoulders torso (do modules baad) ko arms (uske agle module) se connect karte hain, aur inhe kaise construct kiya jaata hai ye directly affect karta hai ki har baad wala arm pose believable lagega ya pasted-on. Beginners commonly shoulders ko ek single rigid horizontal bar ki tarah draw karte hain bina kisi internal movement ke, jo cap kar deta hai ki uske upar built koi bhi arm gesture kitna convincing ho sakta hai."
    ],
    coreIdea: [
      "<b>Clavicle</b> (collarbone) straight nahi hota \u2014 iska ek gentle double-curve hota hai, jaise ek shallow S apni side pe lying \u2014 sternum se shoulder tak chalta hua. Ye shrug karte hue upar-neeche move kar sakta hai aur thoda aage-peeche rotate kar sakta hai, apne move hote hi poori upper-chest silhouette badalte hue.",
      "<b>Scapula</b> (shoulder blade) rib cage ke peeche sit karta hai aur genuinely uski curved surface ke across slide karta hai jaise arm move karta hai \u2014 ye ek jagah fixed nahi hota. Jab arm raise hota hai, scapula ribs ke across upar aur bahar rotate aur glide karta hai; same rib cage position purely arm position ke hisaab se bahut alag back silhouettes produce kar sakti hai.",
      "<b>Deltoid</b> shoulder joint ko cap karta hai aur arm position ke saath shape badalta hai \u2014 rounder aur fuller jab arm relaxed hang kare, flatter aur zyada stretched jab arm raise ho. Ye seedha agle module ke arm construction se connect karta hai.",
      "Ek natural, weighted pose mein shoulders rarely level ya symmetrical hote hain \u2014 ek commonly higher, lower, aage, ya peeche hota hai weight shift, torso ke through ek twist, ya ek gestural lean ki wajah se. Default se dono shoulders ko perfectly level draw karna, ek unobserved, generic pose ka ek reliable sign hai."
    ],
    mistakes: [
      "Clavicle ko ek straight, rigid bar ki tarah draw karna, uski actual gentle double-curve ki jagah.",
      "Arm ke pose ke chahe jo bhi ho, scapula ko ek hi position pe fixed rakhna, use rib cage ke across slide karne dene ke bajaye.",
      "Default se dono shoulders ko perfectly level aur symmetrical banana, ek clearly weighted ya twisting pose mein bhi.",
      "Deltoid ki shape ek relaxed, hanging arm aur ek raised arm ke beech kaise badalti hai, ye ignore karna."
    ],
    proTips: [
      "Clavicle ke double-curve ko deliberately sketch karo, ek quick gesture mein bhi \u2014 ek straight collarbone line ek unconsidered shoulder ke sabse fast tells mein se ek hai.",
      "Jab pose mein arm raise ho, scapula ki position ko actively rib cage pe match karne ke liye move karo \u2014 use wahin mat chhodo jahan wo arm rest pe hone se sit karta.",
      "Casual, weighted poses mein genuine shoulder asymmetry ke liye reference check karo, ek level, symmetrical bar ko default samajhne ke bajaye."
    ],
    practice: {
      warmup: "Ek simplified rib cage draw karo jisme clavicle ka double-curve aur scapula placement mark ho, front se aur back se.",
      daily: "Same shoulder construction ko arm rest pe, phir overhead raised, draw karo, track karte hue scapula aur deltoid ki shape kaise badalti hai.",
      weekly: "Ek figure construct karo jisme clearly weight-shifted, asymmetrical shoulder line ho \u2014 ek shoulder doosre se higher aur zyada forward.",
      challenge: "Same torso aur shoulder girdle ko front, back, aur side se draw karo, clavicle curve aur scapula placement teeno mein consistent rakhte hue."
    },
    quiz: [
      {q:"Is module ke hisaab se clavicle actually kaisi shape ki hoti hai?", options:["Ek perfectly straight bar","Ek gentle double-curve, jaise ek shallow S apni side pe lying","Ek tight zigzag","Ek perfect semicircle"], correct:1, explain:"Ise ek straight rigid bar ki tarah draw karna uski actual gentle double-curve miss kar deta hai."},
      {q:"Jab arm raise hoti hai to scapula ka kya hota hai?", options:["Kuch nahi, wo completely fixed rehta hai","Wo rib cage ke across upar aur bahar rotate aur glide karta hai","Wo rib cage se poori tarah detach ho jaata hai","Wo sirf tab move karta hai jab head turn kare"], correct:1, explain:"Scapula genuinely ribs ke across slide karta hai jaise arm move karta hai \u2014 ye ek jagah fixed nahi hota."},
      {q:"Kya ek natural, weighted pose mein dono shoulders typically level aur symmetrical hote hain?", options:["Haan, hamesha perfectly level","Usually nahi \u2014 weight shift, twisting, ya gesture commonly ek shoulder ko higher, lower, forward, ya back kar dete hain","Sirf professional models mein","Sirf attention pe khade hone pe"], correct:1, explain:"Default se perfectly level, symmetrical shoulders ek unobserved, generic pose ka common sign hai."}
    ],
    checklist: [
      "Clavicle ka actual double-curve draw kar sakta/sakti hoon, ek straight bar ki jagah.",
      "Raised versus resting arm ke hisaab se scapula ki position rib cage pe move karta/karti hoon.",
      "Ek genuinely asymmetrical, weight-shifted shoulder line construct kar sakta/sakti hoon.",
      "Ek relaxed aur ek raised arm position ke beech deltoid ki shape adjust karta/karti hoon."
    ],
    nextStep: "Torso \u2014 do simple oval masses jo ek flexible spine se connected hain, ek rigid block nahi."
  },

  m34: {
    hook: "Ek rigid block nahi \u2014 do overlapping ovals ek flexible spine pe, aur wo kitna overlap karte hain hi tumhara main tool hai bend, twist, aur lean dikhane ka.",
    whyItMatters: [
      "Torso wo core mass hai jisse is arc ki baaki har cheez attach hoti hai \u2014 upar head, neck, aur shoulders; sides pe arms; neeche legs aur pelvis. Iska construction decide karta hai ki poora figure alive lagega ya ek stiff mannequin \u2014 yahi wajah hai ki ye module ab tak ke poore Body & Anatomy arc ka load-bearing lesson hai."
    ],
    coreIdea: [
      "Torso <b>do masses</b> mein simplify hota hai \u2014 rib cage ek egg-shaped oval ki tarah, pelvis ek chota bucket-shaped oval ki tarah \u2014 ek flexible spine se connected, ek approach jise widely \"the Bean\" ki tarah sikhaya jaata hai. Ye ek deliberate simplification hai: iska matlab seedha ek realistic figure produce karna nahi hai, balki us underlying concept ko sikhana hai jo do masses ek flexible connector pe hote hain, jispe har baad wala detailed torso build hota hai.",
      "Rib cage ki true shape ek perfect oval nahi hoti (iska curve actually 10th rib ke around ruk jaata hai, phir wapas sternum tak swing karta hai), par construction purposes ke liye ise ek oval ki tarah treat karna kaafi accurate hai build karne ke liye aur alag alag angles mein consistent rakhna kahin zyada aasan.",
      "Jaise torso bend, twist, ya lean karta hai, do ovals ke beech ka relationship badalta hai: aage bend karna ya twist karna unhe ek doosre ke kareeb le aata hai aur unka overlap badhata hai; peeche arch karna unhe aur separate kar deta hai. Ye overlap-versus-separation relationship torso movement dikhane ka primary tool hai, aur ise kisi bhi muscle ya surface detail se pehle establish hona chahiye.",
      "Ek genuinely useful real proportion check: ek relaxed standing pose mein, rib cage ke bottom aur pelvis ke top ke beech ka gap roughly standing figure ki apni fist ki width jitna hota hai \u2014 ek fast, portable sanity check jise exact measurements yaad karne ki zaroorat nahi."
    ],
    mistakes: [
      "Torso ko ek single rigid box ya cylinder ki tarah treat karna, rib cage aur pelvis masses ke beech koi distinction na rakhte hue.",
      "Pose chahe jo bhi ho, do ovals ke beech same overlap ya gap rakhna, bend, twist, ya lean dikhane ke liye use badalne ke bajaye.",
      "Pelvis oval ko rib cage oval ke same size ya usse bada draw karna, jabki ye generally dono mein se chota hota hai.",
      "Standing poses pe fist-width rib-to-pelvis proportion check skip kar dena, jisse ek stretched ya compressed midsection ban jaata hai."
    ],
    proTips: [
      "Koi bhi torso detail, muscle, ya clothing se pehle hamesha do ovals aur connecting spine line draw karo.",
      "Ovals ke overlap ya separation ko torso movement dikhane ke apne primary tool ki tarah use karo, ek bhi muscle form upar add karne se pehle.",
      "Standing reference poses pe rib cage aur pelvis ke beech fist-width gap check karo, ek fast, repeatable proportion sanity check ki tarah."
    ],
    practice: {
      warmup: "Ek neutral standing pose ke liye rib cage oval, pelvis oval, aur connecting spine line draw karo, koi doosri detail nahi.",
      daily: "Same two-oval torso ko aage bend karte hue, phir ek side twist karte hue construct karo, exactly track karte hue ovals ka overlap har baar kaise badalta hai.",
      weekly: "Fist-width rib-to-pelvis gap ko ek real photo reference ya mirror mein apni khud ki standing pose ke against check karo.",
      challenge: "Ek dynamic action pose construct karo \u2014 reach karte hue, twist karte hue, ek side bahut aage lean karte hue \u2014 sirf two-oval-and-spine method use karke, koi doosra body part add karne se pehle."
    },
    quiz: [
      {q:"Torso ke do main simplified masses kaunse hain?", options:["Do identical cubes","Ek egg-shaped rib cage oval aur ek chota bucket-shaped pelvis oval","Ek single cylinder","Teen stacked spheres"], correct:1, explain:"Ye two-mass approach, kabhi kabhi \"the Bean\" kehlata hai, iska foundation hai jispe poora module build hota hai."},
      {q:"Jab figure aage bend kare ya twist kare to do torso ovals ke beech overlap ka kya hota hai?", options:["Overlap kam ho jaata hai","Overlap badh jaata hai, ovals ko ek doosre ke kareeb la deta hai","Kuch nahi badalta","Ovals apni positions swap kar lete hain"], correct:1, explain:"Bend karna ya twist karna rib cage aur pelvis masses ko ek doosre ke kareeb le aata hai; peeche arch karna unhe aur separate karta hai."},
      {q:"Ek standing pose mein rib-to-pelvis gap ke liye ek genuinely useful proportion check kya hai?", options:["Ye hamesha exactly ek head-height jitna hona chahiye","Ye roughly figure ki apni fist ki width jitna hota hai","Ye hamesha zero hona chahiye, directly touching","Koi reliable check hai hi nahi"], correct:1, explain:"Ye fist-width relationship ek fast, portable sanity check hai jise exact measurements yaad karne ki zaroorat nahi."}
    ],
    checklist: [
      "Torso ko do ovals se, ek flexible spine se connected, construct kar sakta/sakti hoon, kisi bhi doosri detail se pehle.",
      "Bending, twisting, ya leaning dikhane ke liye ovals ka overlap badalta/badalti hoon, ek fixed relationship rakhne ke bajaye.",
      "Pelvis oval ko rib cage oval se chota draw karta/karti hoon.",
      "Ek standing pose ke rib-to-pelvis gap ko fist-width proportion ke against check kar sakta/sakti hoon."
    ],
    nextStep: "Arms \u2014 do cylinders aur ek hinge, plus ek forearm jisme secretly do bones ek doosre ke around twist karti hain."
  },

  m35: {
    hook: "Do cylinders aur ek hinge, sivaay iske ki forearm mein secretly do bones hoti hain jo ek doosre ke around twist karti hain \u2014 yahi poori wajah hai ki tumhari palm upar ya neeche face kar sakti hai.",
    whyItMatters: [
      "Arms do modules pehle wale shoulder construction ko agle module ke hands se connect karte hain. Elbow hinge ko, aur specifically forearm ki internal rotation ko, sahi karna hi ek gesture ko loose aur alive read karwane aur ek stiff, single-piece tube jaisa lagne ke beech ka fark hai."
    ],
    coreIdea: [
      "Upper arm aur forearm elbow hinge pe connected <b>do cylinders</b> mein simplify hote hain. Upper arm cylinder sirf us ek hinge pe bend karta hai \u2014 seedha saada. Forearm genuinely zyada complex hai: isme <b>do bones</b> hoti hain, radius aur ulna, jo ek doosre ke around rotate karti hain. Yahi hai jo hand ko palm-up se palm-down (<b>supination</b> aur <b>pronation</b>) turn karne deta hai, bina elbow joint khud rotate kiye \u2014 ek distinction jo beginners commonly miss karte hain, poore forearm ko ek rigid, non-twisting tube ki tarah treat karte hue.",
      "Is internal rotation ka ek visible consequence hai: biceps zyada prominently bulge karta hai jab forearm supinated ho (palm up), aur flatter ya rotated away dikhta hai jab pronated ho (palm down) \u2014 ek subtle cue jo seedha isse juda hai ki abhi do forearm bones kis taraf crossed hain.",
      "Elbow ka bony point (<b>olecranon</b>, ulna ka part) ek reliable, easily observed landmark hai, especially jab arm bend kare to visible.",
      "Beginners arm length ko commonly underestimate karte hain: ek fully extended arm typically same figure pe roughly mid-thigh tak pahunchta hai \u2014 pichle module wale torso construction ke against run karne worth ek fast proportion check."
    ],
    mistakes: [
      "Forearm ko ek single rigid cylinder ki tarah treat karna bina kisi internal twist capacity ke, supination aur pronation ko poori tarah miss karte hue.",
      "Ye bhool jaana ki biceps ki visible shape isse depend karti hai ki palm upar face kare ya neeche.",
      "Arms ko unki real proportion se noticeably chota draw karna, especially torso aur legs ke relative.",
      "Arm bend hote hi elbow ka bony landmark poori tarah kho dena, ek smooth, uninformative joint chhodte hue."
    ],
    proTips: [
      "Forearm ki do bones sketch karo, chahe simplified do offset guide lines ki tarah, isse yaad rakhne ke liye ki ye elbow joint se independently khud twist kar sakta hai.",
      "Ek drawn arm ki length ko torso ke fist-width proportion aur figure ki overall height ke against ek fast sanity check ki tarah check karo.",
      "Same arm pose ko do baar draw karo \u2014 palm up, phir palm down \u2014 aur compare karo poore forearm ki silhouette kitni badalti hai, sirf hand nahi."
    ],
    practice: {
      warmup: "Arm ko do simple cylinders ki tarah draw karo ek clear elbow hinge ke saath, teen alag bend angles se.",
      daily: "Same arm pose draw karo har din palm ko ek nayi position pe rotate karte hue, track karte hue forearm ki shape aur biceps kaise respond karte hain.",
      weekly: "Ek full gesture drawing ki arm length ko torso aur poori figure height ke against check karo, adjust karte hue agar ye bahut chhota read ho.",
      challenge: "Ek arm construct karo jo body ke across reach kar raha ho, motion ke through jaise jaise hand ki orientation badalti hai forearm ko realistically twist karte hue."
    },
    quiz: [
      {q:"Forearm ko upper arm se structurally kya alag banata hai?", options:["Kuch nahi, dono identical hain","Isme do bones (radius aur ulna) hoti hain jo ek doosre ke around rotate karti hain, jisse palm upar ya neeche turn kar sakti hai","Isme koi bones hoti hi nahi","Ye sirf bend kar sakta hai, kabhi twist nahi"], correct:1, explain:"Ye two-bone rotation, elbow joint nahi, hi palm ko upar ya neeche face karwati hai."},
      {q:"Palm orientation ke hisaab se upper arm pe visibly kya badalta hai?", options:["Kuch nahi badalta","Biceps zyada bulge karta hai jab supinated ho (palm up) aur flatter dikhta hai jab pronated ho (palm down)","Elbow poori tarah position badal deta hai","Hand size badal jaata hai"], correct:1, explain:"Ye subtle cue seedha isse juda hai ki abhi do forearm bones kis taraf crossed hain."},
      {q:"Ek rough proportion check ki tarah, ek fully extended arm same figure pe typically kahan tak pahunchta hai?", options:["Sirf waist tak","Roughly mid-thigh tak","Poori tarah ankle tak","Knee se aage shin tak"], correct:1, explain:"Beginners arm length ko commonly underestimate karte hain \u2014 mid-thigh torso ke against run karne worth ek useful check hai."}
    ],
    checklist: [
      "Arm ko do cylinders aur ek clear elbow hinge se construct kar sakta/sakti hoon.",
      "Same arm pose ko palm up versus palm down draw kar sakta/sakti hoon, forearm ki shape change dikhate hue.",
      "Arm length ko guess karne ke bajaye torso ki proportions ke against check karta/karti hoon.",
      "Arm bend hone pe elbow ka bony landmark visible rakhta/rakhti hoon."
    ],
    nextStep: "Hands \u2014 drawing mein sabse buri reputation wala feature, ek actual learnable structure mein break down kiya hua."
  }

};
