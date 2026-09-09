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
  }

};
