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
    hook: "Face memorize karne se kaam kyun nahi chalta, aur \"construction over copying\" ka matlab jab subject human head ho, to actually kya hota hai.",
    whyItMatters: [
      "Portraiture mein \"lagbhag sahi hai par kuch off hai\" wala failure rate sabse zyada hota hai, kyunki face ek aisi cheez hai jisme har viewer already expert hai \u2014 sabne poori zindagi faces read ki hain. Beginners isse shortcut karte hain memorized formulas se (\"eyes ek eye-width apart hoti hain\") bina us 3D structure ko samjhe jo ye formulas actually describe karte hain, jisse aisi faces banti hain jo paper pe technically correct hain phir bhi subtly wrong lagti hain.",
      "Is poore arc ka ek hi goal hai: imagination se, kisi bhi angle se, kisi bhi lighting mein, ek believable head construct karna \u2014 kisi ek specific reference photo ko reproduce nahi karna. Module 1 wali construction-versus-copying wali baat yahan is course mein ab tak kahin bhi se zyada test hoti hai."
    ],
    coreIdea: [
      "Professionals facial features memorize nahi karte; wo <b>structure</b> (skin ke neeche ke bone landmarks), <b>proportion</b> (features ke beech ke relationships) samajhte hain, aur ye bhi samajhte hain ki stylization realistic structure ke upar build hoti hai, uski replacement ki tarah nahi. Even ek exaggerated anime ya cartoon face bhi ek underlying realistic structure ka jaanbujh kar kiya gaya distortion hai \u2014 isiliye ye arc skull aur construction methods se start hoti hai, kisi eye ko draw karna sikhane se nahi.",
      "Faces pe specifically apply karke dekho: ek memorized \"formula face\" har angle se same dikhti hai kyunki wo kabhi ek real 3D object ki tarah build hi nahi hui thi. Ek constructed head, chahe simplified hi ho, convincingly rotate kar sakta hai kyunki use actual spatial logic ke saath banaya gaya tha \u2014 wahi construction principle Module 10 wala, ab drawing ke sabse zyada scrutinize kiye jaane wale subject pe apply."
    ],
    mistakes: [
      "Memorized proportions se ek \"generic\" face banana bina kisi underlying 3D structure ke, jisse ek flat, mask jaisa result milta hai jo dusre angles se collapse ho jaata hai.",
      "Individual features \u2014 eyes, nose, mouth \u2014 ko isolation mein study karna, ye samajhne se pehle ki wo actually bigger head structure pe kaise sit karte hain.",
      "Ek hi reference photo ko baar baar copy karna, iske bajaye genuine 3D understanding build karne ke, jo naye photo ya imagined angle pe bhi transfer ho."
    ],
    proTips: [
      "Next module, skull ko, optional nahi balki mandatory treat karo \u2014 ye is poore arc ka single highest-leverage lesson hai.",
      "Jab koi portrait \"off\" lage aur pata na chale kyun, to individual feature details check karne se pehle structure aur proportion check karo."
    ],
    practice: {
      warmup: "Abhi kuch bhi required nahi \u2014 ye ek short conceptual module hai, drawing session nahi.",
      daily: "Is module ke liye applicable nahi.",
      weekly: "Bina kisi reference ke, purely memory se, paanch faces draw karo \u2014 bilkul waise jaise tum aaj draw karoge. Unhe date karo aur alag rakh do \u2014 is arc ke end mein tum inhe apne kaam se compare karoge.",
      challenge: "Same person ki alag alag angles se li gayi kai photos dekho aur identify karo ki face ke kaunse parts visibly shift hote hain aur kaunse angles ke across proportionally consistent rehte hain."
    },
    quiz: [
      {q:"Ye module kyun kehta hai ki sirf memorized facial proportions fail hone ki tendency rakhte hain?", options:["Wo hamesha mathematically galat hote hain","Wo ek 3D structure describe karte hain use build kiye bina, isliye result dusre angles se hold nahi karta","Art schools mein memorization illegal hai","Proportions kabhi matter nahi karte"], correct:1, explain:"Underlying structure ke bina ek formula har angle se same dikhta hai kyunki wo kabhi ek real 3D object ki tarah build hi nahi hui thi."},
      {q:"Is module ke hisaab se, ye arc kis cheez ki taraf build karta hai?", options:["Ek reference photo ko perfectly copy karna","Imagination se, kisi bhi angle se, kisi bhi lighting mein, ek believable head construct karna","Das generic face templates memorize karna","Seedha facial expressions pe skip karna"], correct:1, explain:"Poori arc us construction ke liye aimed hai jo generalize kare, ek specific image ki reproduction ke liye nahi."},
      {q:"Is module mein ek highly stylized anime ya cartoon face ko kaise describe kiya gaya hai?", options:["Realistic anatomy se unrelated","Ek underlying realistic structure ka jaanbujh kar kiya gaya distortion","Purely random design choices","Construct karna impossible"], correct:1, explain:"Stylization ek jaanbujh kar kiya gaya distortion hai jo real structure ke upar build hota hai, use samajhne ki replacement nahi."}
    ],
    checklist: [
      "Main apne shabdon mein explain kar sakta/sakti hoon ki sirf memorized proportions se aisi faces kyun banti hain jo subtly wrong lagti hain.",
      "Main construction-versus-copying wali distinction samajhta/samajhti hoon jaisi wo specifically heads pe apply hoti hai.",
      "Maine ek five-face baseline memory drawing complete kar li hai aur use baad mein compare karne ke liye alag rakh diya hai.",
      "Main identify kar sakta/sakti hoon ki face ke kaunse parts angles ke across shift hote hain aur kaunse proportionally stable rehte hain."
    ],
    nextStep: "The Skull \u2014 wo bone structure jise har facial feature jo tum kabhi draw karoge, quietly follow kar raha hota hai."
  }


};
