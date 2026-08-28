const CURRICULUM_1 = [
{
    id:'foundations', title:'Foundations', status:'live', order:1,
    desc:'How to see, how to hold a pencil, and how to make a mark you meant to make. Everything else in drawing is built on these seven modules.',
    modules:[
      {
        id:'m1', plate:'01', title:'Mindset & Introduction', difficulty:'Beginner',
        studyTime:'25 min', practiceTime:'Ongoing', prereq:[],
        hook:'Why "talent" is the wrong question, and what to track instead.',
        whyItMatters:[
          "Every professional artist you admire produced years of drawings that looked exactly like your first ones will. Drawing is a learned visual-motor skill — closer to learning an instrument than to being tall — and the research on skill acquisition backs this up directly: psychologist Anders Ericsson's decades of study on expert performers found that deliberate, feedback-driven practice explains skill gaps far better than innate talent does.",
          "Most beginners quit for one specific, avoidable reason: they compare their week-one drawings to a professional's ten-thousandth drawing, decide they \"can't draw,\" and stop. That comparison is the single most common failure mode in this entire curriculum, and it happens before the hand has anything to do with it — it's a mindset failure, not a skill failure."
        ],
        coreIdea:[
          "Drawing is the act of translating three-dimensional, spatial understanding into two-dimensional marks. That means two separate skills are involved: <b>seeing</b> (accurately perceiving proportion, shape, and light) and <b>executing</b> (making your hand put down the mark you intended). Beginners usually assume the problem is execution — a shaky hand — when it's almost always seeing. You can't draw an eye accurately if you're drawing your mental symbol for \"eye\" instead of the specific shape in front of you. Module 5 (Observation) deals with this directly.",
          "\"Seeing\" versus \"naming\" is the core idea of this entire module. From childhood, your brain builds quick symbols for common objects — a circle for a head, two dots for eyes — so it can process the visual world fast. Those symbols are efficient for recognition and terrible for drawing, because they replace what's actually in front of you with a generic stand-in. Training yourself to override that shortcut is most of what early art education is actually teaching, even when it's labeled \"gesture\" or \"proportion.\"",
          "Copying a photo or another artist's drawing trains your hand to reproduce lines, but it doesn't teach you why those lines exist. That's the difference between <b>copying</b> and <b>construction</b>: construction means understanding an object as a three-dimensional form in space, so you could draw it from any angle, in any lighting, from memory. This course is built around construction from Module 6 onward — shapes and forms are the alphabet you'll use for everything that follows, all the way through anatomy, environments, and creature design."
        ],
        mistakes:[
          "Judging month-1 work against a professional's current output instead of their month-1 work.",
          "Practicing only subjects that are already fun (usually faces or favorite characters) and skipping the \"boring\" structural drills that make those subjects possible.",
          "Copying finished drawings without ever asking why a line is there — which caps your skill at whatever you've directly copied.",
          "Practicing in unpredictable bursts (a weekend binge, then three weeks off) rather than short, consistent sessions — consistency builds motor memory; volume alone does not.",
          "Never showing work to anyone, which removes the feedback loop that turns practice into improvement."
        ],
        proTips:[
          "Date every page, even bad ones. In three months, your own sketchbook becomes the only proof you need that this works.",
          "Track hours of focused practice, not days attended — twenty minutes of genuine attention beats two distracted hours.",
          "After every drawing, name one specific thing you'd change. That single habit turns passive repetition into deliberate practice.",
          "Seek out critique, even if it's uncomfortable. A drawing you can't get feedback on is a drawing you can't learn from efficiently."
        ],
        practice:{
          warmup:"None required yet — this module is a short read, not a drawing session. Save your hand for Module 4.",
          daily:"Start a dated sketchbook today, even if you don't draw in it yet. The habit of opening it matters more than what's on the first page.",
          weekly:"Do a \"baseline drawing\": draw a face, a hand, and a full figure from memory right now, exactly as you would today, with no research or reference. Date it and don't look at it again until you finish Module 14. This is the single most motivating exercise in the entire course — nothing proves progress like your own baseline.",
          challenge:"Write down, in one sentence, what you think is currently stopping you from drawing well. Re-read that sentence after Module 7 and see if it's still true."
        },
        resources:[
          {type:'Read', title:'"I\'m teaching myself to draw. Now what?"', creator:'Ctrl+Paint — Matt Kohr', url:'https://www.ctrlpaint.com/blog/im-teaching-myself-to-draw-now-what', why:'A short, honest post on how to structure self-taught practice and what to draw when there\'s no assignment telling you what to do — exactly the gap this module is meant to fill.', verified:true},
          {type:'Book', title:'Peak: Secrets from the New Science of Expertise', creator:'Anders Ericsson & Robert Pool', url:'', why:'The actual research behind "deliberate practice," written by the psychologist whose studies are cited (often secondhand and garbled) in nearly every "talent is a myth" art video on YouTube. Worth reading the primary source once.', verified:true},
          {type:'Site', title:'Drawabox — How the course works', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:'You\'ll be using Drawabox heavily starting Module 4. Its homework-and-critique structure is itself a model of deliberate practice worth understanding before you start.', verified:true}
        ],
        quiz:[
          {q:"What does \"deliberate practice\" mean, based on this module?", options:["Drawing for as many hours as possible","Focused, feedback-driven repetition rather than passive volume","Only practicing subjects you already enjoy","Copying finished professional artwork exactly"], correct:1, explain:"Volume alone doesn't build skill efficiently \u2014 focused practice with feedback does."},
          {q:"Comparing your first drawings to a professional's current work is a useful way to set goals.", options:["True","False"], correct:1, explain:"It compares your month one to their year ten. Compare to their month one instead."},
          {q:"What's the key difference between copying and construction?", options:["Construction is faster","Copying uses better paper","Construction means understanding a subject as a 3D form you could draw from any angle; copying only reproduces lines","There is no real difference"], correct:2, explain:"Construction transfers to new angles and lighting; pure copying doesn't."}
        ],
        checklist:[
          'I can explain, in my own words, the difference between "seeing" and "naming."',
          'I understand why copying alone doesn\'t build transferable skill.',
          'I\'ve started a dated sketchbook.',
          'I\'ve completed a baseline drawing and put it away for later.'
        ],
        nextStep:"Materials — what you actually need before you make your first mark, and why most beginner supply lists are longer than they should be."
      },
      {
        id:'m2', plate:'02', title:'Materials & Tools', difficulty:'Beginner',
        studyTime:'20 min', practiceTime:'One-time setup', prereq:['m1'],
        hook:"What you actually need before your first mark, and why most beginner supply lists are longer than they should be.",
        whyItMatters:[
          "Beginners tend to either buy nothing and fight bad tools, or buy everything and get overwhelmed (and broke) before drawing a single confident line. Neither serves you. A short, correct list removes decision fatigue so your energy goes toward the actual skill, not tool anxiety.",
          "At the beginner stage, specific brands rarely matter. What matters is having the right <b>range</b> of tools — a hard-to-soft spread of pencils, a surface that takes graphite cleanly, an eraser that lifts rather than smears. Understanding why each tool exists means you can substitute confidently with whatever is actually in front of you."
        ],
        coreIdea:[
          "Graphite is graded on a scale from H (hard, light, precise — used for construction lines you will partly erase) to B (soft, dark, rich tone — used for expressive marks and shading), with HB or F as the all-purpose middle. For this whole Foundations arc, an HB or 2B is enough; you will not need a 4B or 6B until Module 12 (Shading) later in the roadmap.",
          "Paper has two jobs. Cheap copy paper or a newsprint pad is correct for volume practice — the line, ellipse, and box drills ahead will fill dozens of pages, and precious paper produces precious, hesitant marks. A proper sketchbook, with slightly heavier paper, is for work you actually want to date and keep, especially your Module 7 baseline comparison and any mastery-checklist pieces.",
          "Erasers come in two useful types: a kneaded eraser (moldable, lifts graphite gently without damaging the paper's tooth, good for soft highlights) and a vinyl or plastic eraser (cleaner, more complete erasure). One vinyl eraser is enough to start.",
          "The only other tools this course needs immediately are a sharpener and a simple ruler. Skip blending stumps, colored pencils, charcoal, and specialty paper until a later module actually calls for them — nothing here is front-loaded.",
          "Workspace and lighting matter more than beginners expect. Use one consistent light source, ideally coming from a single side (daylight or one desk lamp), so you can judge your own graphite values accurately later and avoid your own hand casting a shadow over what you just drew. Angling the paper to match your natural hand arc, rather than sitting square to the desk, is a small change that noticeably improves line quality."
        ],
        mistakes:[
          "Buying a full 12+ grade pencil set before knowing whether the habit will stick — two or three grades genuinely cover this entire arc.",
          "Doing warm-up drills on \"good\" sketchbook paper, which makes every page feel too precious to mess up and makes lines timid as a result.",
          "Relying on a pencil's built-in eraser instead of a real one, which smears more than it lifts.",
          "Working in inconsistent or backlit lighting, which makes it hard to judge values accurately later in the course.",
          "Buying a drawing tablet or software before finishing traditional fundamentals. Digital Art is deliberately the last arc in this roadmap — software is a much faster learning curve once construction skill already exists."
        ],
        proTips:[
          "Keep one pencil sharp for line work and one slightly duller for broad tonal blocking, rather than resharpening constantly.",
          "Buy plain copy paper in bulk specifically for warm-ups and treat it as disposable on purpose.",
          "Rotate the page itself as you draw, not just your hand — this alone measurably improves line quality for most beginners."
        ],
        practice:{
          warmup:"No drawing warm-up for this module. Instead, spend five minutes doing a materials audit: lay out what you actually own and check it against the list above.",
          daily:"Not applicable this module — it is a one-time setup step. Move to Module 3 once your basic kit is ready.",
          weekly:"Set up a consistent drawing space this week: same surface, same light direction, every session. Notice whether that consistency changes how your lines feel by the end of the week.",
          challenge:"Draw the same simple circle with every pencil grade you own, or at three different pressures if you only own one. Compare how the tone and precision shift."
        },
        resources:[
          {type:'Site', title:'Lesson 1 — required tools', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:"States the exact tools needed for the course you will lean on heavily starting Module 4 (specifically felt-tip fineliners for the ink-based drills). Worth reading before buying anything.", verified:true},
          {type:'Video Library', title:'Free Library — Traditional Drawing primer', creator:'Ctrl+Paint (Matt Kohr)', url:'https://www.ctrlpaint.com/library', why:"Section 2 of the free library is a short primer aimed at people without prior traditional drawing experience, including basic setup and tool use.", verified:true}
        ],
        quiz:[
          {q:"Which pencil grade range is recommended for this entire Foundations arc?", options:["6H\u20138H","HB\u20132B","6B\u20139B","You need all 12 grades"], correct:1, explain:"HB or 2B covers everything here \u2014 4B and 6B don't come in until Shading, later in the roadmap."},
          {q:"You should do warm-up drills on your best sketchbook paper.", options:["True","False"], correct:1, explain:"Precious paper produces precious, hesitant marks. Cheap paper is correct for warm-ups on purpose."},
          {q:"Why does this module recommend setting up digital tools last?", options:["Digital tools are worse overall","Software is a much faster learning curve once construction fundamentals are solid","Traditional tools are always cheaper","Digital tools require a subscription"], correct:1, explain:"Fundamentals transfer to any tool; software without fundamentals just moves the same struggle to a screen."}
        ],
        checklist:[
          "I can name at least two pencil grades and explain when I would use each.",
          "I have a basic kit ready: pencil(s), an eraser, plain paper for warm-ups, and a sketchbook for keeping work.",
          "I have a consistent light source and workspace set up.",
          "I understand why cheap paper is correct for warm-up drills, not a downgrade."
        ],
        nextStep:"How to Hold a Pencil — the grip your handwriting taught you covers about half of what drawing actually needs."
      },
      {
        id:'m3', plate:'03', title:'How to Hold a Pencil', difficulty:'Beginner',
        studyTime:'15 min', practiceTime:'10 min/day', prereq:['m1','m2'],
        hook:"The grip you learned for handwriting is wrong for about half of what drawing requires. Here is the other half.",
        whyItMatters:[
          "Most people only know the writing grip — pencil near the tip, hand resting on the page, tripod hold between thumb, index, and middle finger. It is excellent for small, controlled, detailed marks, and nearly useless for the big, confident, gestural strokes that most early construction drawing (Module 4 onward) actually requires. Beginners who never leave writing grip end up with small, cramped, overworked drawings, because it is the only motion their hand knows.",
          "Professionals switch grips constantly within a single drawing: a loose overhand grip to block in gesture and big shapes, a tighter writing grip for final detail work. Learning both, and learning to feel which one a given mark calls for, is a real and teachable skill — not a personality trait some artists happen to have."
        ],
        coreIdea:[
          "<b>Writing (tripod) grip:</b> pencil held close to the tip, hand and wrist resting on the page. High precision over small marks, at the cost of range of motion, since you are essentially only using your fingers, which have a small natural arc.",
          "<b>Overhand (extended) grip:</b> pencil held further back, balanced across the palm or over the top of the hand, wrist lifted off the page. This connects the pencil to your shoulder and elbow instead of just your fingers, giving a longer, smoother, more confident stroke. This is the grip Module 4's line and ellipse drills assume by default.",
          "<b>Underhand grip:</b> a looser variant, pencil held from underneath, common for very loose gesture blocking. Not something to master immediately, just useful to know exists for later.",
          "<b>Pressure control:</b> light pressure for construction lines that are meant to be built over and partly erased later, firmer pressure for final, committed lines. Beginners consistently press far harder than they need to, which prevents layering tone later (Module 12) and makes mistakes harder to lift cleanly."
        ],
        mistakes:[
          "Using writing grip for every mark, including large gestural blocking-in strokes, which produces small, timid, cramped drawings.",
          "White-knuckling the pencil out of nervousness, which telegraphs directly into shaky, hesitant lines.",
          "Pressing hard enough to dent the paper on construction lines that are supposed to be built over and erased later.",
          "Resting the whole forearm heavily on the page, which restricts movement to the wrist alone even when technically holding overhand grip."
        ],
        proTips:[
          "If a line needs to be longer than about three inches, it almost always needs overhand grip, not writing grip.",
          "Hold the pencil loosely enough that someone could gently slide it out of your hand without much resistance. A genuinely relaxed grip is looser than it feels like it should be.",
          "Grip, posture, and arm movement work as one system, not in isolation — how you sit changes how you hold the pencil more than most beginners expect."
        ],
        practice:{
          warmup:"Hold a pencil in writing grip and draw ten short lines. Switch to overhand grip and draw ten more. You are not judging quality yet, just feeling the difference in range and confidence.",
          daily:"Spend the first two minutes of every practice session on loose, slow loops and lines in overhand grip before switching to writing grip for anything detailed. This becomes your standing warm-up for the rest of the course.",
          weekly:"Draw the same small object (a mug, a shoe) three times: once entirely in writing grip, once entirely in overhand grip, once switching between them naturally as the drawing calls for it. Compare all three.",
          challenge:"Block in a simple object's gesture in overhand grip, then finish its details in writing grip, in one continuous sitting without stopping to think about the switch."
        },
        resources:[
          {type:'Book', title:'Pen and Ink Drawing: A Simple Guide', creator:'Alphonso Dunn', url:'https://alphonsodunn.com/free-video-tutorials/', why:"Covers grip, posture, and arm movement together as one system and their direct effect on stroke quality and consistency — exactly this module's core idea, from an illustrator who teaches line work professionally.", verified:true},
          {type:'Channel', title:'Alphonso Dunn — YouTube channel', creator:'Alphonso Dunn', url:'https://www.youtube.com/c/ALPHONSODUNN/videos', why:"Free video demonstrations of grip and stroke technique in motion, which is easier to absorb visually than from text alone.", verified:true}
        ],
        quiz:[
          {q:"Which grip connects the pencil to your shoulder and elbow for longer, smoother strokes?", options:["Writing (tripod) grip","Overhand grip","There's no difference between grips","Grip has no effect on stroke length"], correct:1, explain:"Overhand grip moves from the shoulder, giving a much longer natural arc than finger-only writing grip."},
          {q:"A genuinely relaxed grip should feel looser than most beginners expect.", options:["True","False"], correct:0, explain:"If someone could gently slide the pencil out of your hand, that's close to correct."},
          {q:"When should you generally reach for overhand grip?", options:["Only for tiny detail work","For lines longer than about three inches","Never \u2014 writing grip is always better","Only when using a ruler"], correct:1, explain:"Past a few inches, wrist-only motion starts to wobble; overhand grip covers the distance cleanly."}
        ],
        checklist:[
          "I can demonstrate both writing grip and overhand grip on request.",
          "I can explain when I would use each grip.",
          "I can draw a three-inch-plus line using overhand grip without my wrist doing most of the work.",
          "I am using noticeably lighter pressure for construction lines than for final lines."
        ],
        nextStep:"Hand Control — the most important motor-skill module in the whole course: confident lines, clean ellipses, and the ghosting method professionals actually use."
      },
      {
        id:'m4', plate:'04', title:'Hand Control', difficulty:'Beginner',
        studyTime:'20 min', practiceTime:'20\u201330 min/day', prereq:['m1','m2','m3'],
        hook:"The single most important motor-skill module in this course: confident lines, clean ellipses, and the method professionals use to plan a mark before committing to it.",
        whyItMatters:[
          "Every skill after this module — perspective, construction, rendering, anatomy — assumes your hand can put a line where your eye wants it, at the length and curve you intend, in one confident pass. Jumping straight to \"fun\" subjects without this foundation is the most common reason self-taught artists plateau: their understanding outpaces what their hand can actually execute, and every drawing feels like a fight against their own tools.",
          "This is not about being naturally steady. It is a specific, teachable technique — practiced through repetition the same way scales are practiced on an instrument — and professional illustrators still warm up with these exact drills before starting real work."
        ],
        coreIdea:[
          "<b>The ghosting method</b>, central to Drawabox's teaching: before committing a line for real, trace the intended path in the air just above the paper several times, planning the start point, end point, and arc, so your arm already knows the motion before it happens on paper. Then execute it in one confident, continuous stroke.",
          "Draw from the shoulder, not the wrist, for anything longer than a couple of inches — this directly builds on Module 3's overhand grip. Wrist-only motion has a small, curved natural arc that makes long straight lines wobble no matter how careful you are.",
          "<b>\"Drawing through\":</b> when practicing circles or ellipses, go around the shape two or three times in one continuous motion before lifting the pencil, rather than trying to nail it in a single slow pass. The repeated passes build muscle memory and let the shape settle into something smooth, even if the first pass wobbles.",
          "Ellipses have a <b>degree</b> (how narrow or wide they appear, based on their rotation relative to the viewer) and a <b>minor axis</b> (the line through the ellipse's narrowest point). This sets up Module 7 directly: ellipses become the ends of cylinders, one of the four basic 3D forms everything else in this course is eventually built from.",
          "A single confident line, even an imperfect one, teaches your hand more and looks more resolved than five overlapping, hesitant \"searching\" lines hunting for the right path. Loose, searching construction is fine during early blocking-in; final lines should be committed."
        ],
        mistakes:[
          "Drawing exclusively from the wrist, producing short, curved, uncontrolled lines instead of long straight ones.",
          "Skipping the ghosting step and just going for it — which is exactly what produces the wobbly, uncertain lines this method exists to prevent.",
          "Trying to draw a \"perfect\" ellipse in one slow, careful pass instead of drawing through it. Slow and careful produces wobble here, not precision.",
          "Scribbling back and forth over a line repeatedly trying to \"find\" it, instead of committing to a single confident stroke, even a flawed one.",
          "Practicing once a week for a long session instead of most days for a short one. This is a motor-memory skill, and motor memory needs frequent, short repetition far more than occasional marathon sessions."
        ],
        proTips:[
          "Warm up with thirty seconds of loose, goal-less scribbling before any precision drill — starting cold straight into careful lines produces worse results than a proper warm-up.",
          "If a line comes out wrong, do not fix it by going over it again. Draw the corrected line right next to it and move on. Overworking a single line is a losing battle.",
          "Treat ghosting as the default habit for every mark in this module, even simple ones, not as an occasional technique for hard lines only."
        ],
        practice:{
          warmup:"Two minutes of loose scribbling with no goal, purely to loosen the arm and shoulder.",
          daily:"A page of superimposed lines (drawing the same straight line repeatedly, aiming to land exactly on the previous pass), a page of ghosted straight lines between two dots, and a page of circles and ellipses drawn through two or three times each.",
          weekly:"Complete a full page of Drawabox's ellipse-in-a-grid drill: fill a grid of boxes with ellipses that touch all four edges of each box, using ghosting and draw-through together.",
          challenge:"Draw fifty confident straight lines of varying length and angle on one page in under ten minutes, with no ghosting pause longer than two seconds each. Speed forces genuine commitment to the stroke."
        },
        resources:[
          {type:'Course', title:'Lesson 1 — Lines, Ellipses and Boxes', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:"The primary resource for this module. Free, extremely well structured, and built around exactly the ghosting and draw-through methods taught above, with homework and a written explanation for each drill.", verified:true},
          {type:'Video', title:'7 Basic Lines of Drawing', creator:'Alphonso Dunn', url:'https://www.youtube.com/watch?v=8k1zbULdBRs', why:"A short, focused video demonstration of foundational line control, good as a visual companion to Drawabox's written lesson.", verified:true},
          {type:'Playlist', title:'Tutorials on Drawing Basics & Fundamentals', creator:'Alphonso Dunn', url:'https://www.youtube.com/playlist?list=PLhBKkQX9XSgeVEGuevcUrnxWYhyB31rZG', why:"A free, ordered playlist covering line control and fundamentals beyond the single video above.", verified:true}
        ],
        quiz:[
          {q:"What is the \"ghosting method\"?", options:["Drawing very lightly so lines are invisible","Tracing the intended line path in the air before committing to it on paper","Erasing a line immediately after drawing it","Drawing with your eyes closed"], correct:1, explain:"Planning the motion in the air first means your arm already knows the path before it hits the page."},
          {q:"When drawing an ellipse, you should aim to get it perfect in one slow, careful pass.", options:["True","False"], correct:1, explain:"Drawing through it two or three times builds the smoothness that a single slow pass can't."},
          {q:"What does an ellipse's \"degree\" describe?", options:["The temperature of the paper","How narrow or wide it appears based on its rotation relative to the viewer","The pencil grade used","How many times you traced it"], correct:1, explain:"Degree is what makes a drawn cylinder look like it's actually rotating in space."}
        ],
        checklist:[
          "I can draw a straight line between two points confidently in one pass, using the ghosting method.",
          "I can draw an ellipse by drawing through it two or three times, keeping it smooth and even.",
          "I am drawing from the shoulder for lines longer than a few inches, not just the wrist.",
          "I have completed at least one full page of the superimposed-lines exercise.",
          "I can explain the difference between a confident line and a searching, sketchy line."
        ],
        nextStep:"Observation — why you're drawing a symbol for \"eye\" instead of the eye in front of you, and the exercises that break the habit."
      },
      {
        id:'m5', plate:'05', title:'Observation', difficulty:'Beginner',
        studyTime:'25 min', practiceTime:'20\u201330 min/day', prereq:['m1','m4'],
        hook:"Why you're drawing a symbol for \"eye\" instead of the eye actually in front of you, and the specific exercises that break the habit.",
        whyItMatters:[
          "This is arguably the most important module in the entire Foundations arc, and the one beginners are most likely to skip, because some of its exercises are deliberately not meant to produce good-looking results. But nearly every proportion, likeness, and accuracy problem in a beginner's work traces back to seeing symbolically instead of observing directly — this module is where that gets fixed.",
          "Betty Edwards' research-backed framing (drawn from decades as an art educator studying the psychology of perception) is that drawing accurately is less about hand skill and more about temporarily overriding your brain's habit of substituting fast, efficient symbols for careful looking."
        ],
        coreIdea:[
          "<b>Symbolic seeing versus observation:</b> from childhood, your brain builds efficient shorthand for common objects — a circle-plus-dot for an eye — so it can recognize things quickly. That shorthand actively works against drawing, because it replaces the specific shape in front of you with a generic stand-in. Edwards demonstrated this directly with an exercise where a line drawing, flipped upside-down, becomes dramatically easier to copy accurately than right-side up — upside-down removes your brain's ability to recognize and substitute symbols for the parts.",
          "<b>Negative space:</b> instead of drawing an object itself, draw the shape of the empty space around and between it. This forces real observation, because there is no learned symbol for \"the gap between someone's arm and their torso\" — you have to actually look.",
          "<b>Sighting and comparative measurement:</b> holding a pencil at arm's length (kept at a fixed extension every time) to compare the relative size of one part of your subject against another, then transferring that ratio to the page. This is literally how professional figure and portrait artists check proportions instead of guessing.",
          "<b>Angles and plumb lines:</b> holding a pencil vertically or horizontally against your subject to check whether a line in it tilts relative to true vertical or horizontal. Beginners consistently misjudge angles when eyeballing them without any reference.",
          "<b>Contour drawing</b>, including \"blind contour\" (drawing an edge without looking at the page at all), trains your eye and hand to move together at the same slow, careful speed, further breaking the habit of drawing fast symbols instead of what's actually there."
        ],
        mistakes:[
          "Drawing what you know a thing looks like — the symbol — instead of what is actually in front of you.",
          "Skipping negative-space and blind-contour drills because the results look messy. The point of these drills is training your eye, not producing a finished piece.",
          "Eyeballing proportions and angles instead of sighting and measuring them, especially early on when instincts are not yet calibrated.",
          "Measuring once at the very start of a drawing and never rechecking. Proportions should be verified continuously as a drawing develops, not just at the beginning."
        ],
        proTips:[
          "Keep your sighting arm fully extended and consistent, using the same eye each time, for an entire drawing. Changing arm length invalidates every comparison you've made so far.",
          "Try copying a reference image upside-down exactly once, the way Edwards describes. Most people are genuinely startled by how much more accurate it is than their right-side-up attempt.",
          "Negative-space drawing is especially effective on tricky overlapping subjects — interlocked hands, a chair, a bicycle — where the positive shapes are hard to judge directly."
        ],
        practice:{
          warmup:"Five minutes of pure contour drawing on any object nearby: draw only its outer edge, moving your pencil at the same slow speed your eye traces the edge.",
          daily:"One blind contour drawing (outline only, without looking at the page) and one negative-space drawing (the gaps around an object, such as a chair or your own hand) each session.",
          weekly:"A full sighting-and-measuring study of a simple still life of three or four objects, comparing heights, widths, and angles with a pencil at arm's length before placing any marks.",
          challenge:"Copy a simple reference image upside-down, then flip it right-side-up and compare the result to how the drawing would likely have gone the normal way. Write down what changed."
        },
        resources:[
          {type:'Book', title:'Drawing on the Right Side of the Brain', creator:'Betty Edwards', url:'https://www.drawright.com/', why:"The definitive source for the upside-down drawing and symbolic-seeing exercises this module is built on. A multi-million-copy bestseller and still the clearest explanation available of why observation training works the way it does.", verified:true},
          {type:'Video Library', title:'Free Library — Traditional Drawing, Visual Measuring', creator:'Ctrl+Paint (Matt Kohr)', url:'https://www.ctrlpaint.com/library', why:"Section 2 of the free library includes a visual-measuring and sighting primer aimed specifically at beginners without prior traditional training.", verified:true}
        ],
        quiz:[
          {q:"What is \"symbolic seeing\"?", options:["Drawing symbols instead of real objects on purpose","Your brain's habit of substituting a fast, generic shorthand for what you're actually looking at","A style of abstract art","A way of signing your artwork"], correct:1, explain:"It's efficient for recognition and bad for drawing, since it replaces the specific shape with a generic stand-in."},
          {q:"Blind contour drawing is meant to produce a polished, accurate final image.", options:["True","False"], correct:1, explain:"It's a training drill for your eye-hand connection \u2014 messy results are expected and fine."},
          {q:"What does sighting with a pencil at arm's length help you do?", options:["Sharpen the pencil evenly","Compare relative proportions between parts of your subject","Test if the paper is too shiny","Mix graphite tones"], correct:1, explain:"It's how you check proportions by measurement instead of guessing."}
        ],
        checklist:[
          "I can complete a blind contour drawing without looking at the page.",
          "I can draw the negative space around an object rather than the object itself.",
          "I can use a pencil at arm's length to compare proportions between two parts of a subject.",
          "I can explain, in my own words, why symbolic seeing interferes with accurate drawing.",
          "I have tried copying a reference upside-down and noticed a difference in accuracy."
        ],
        nextStep:"Shapes — the three-shape alphabet professionals use to simplify literally everything they draw, before a single detail goes down."
      },
      {
        id:'m6', plate:'06', title:'Shapes', difficulty:'Beginner',
        studyTime:'20 min', practiceTime:'20 min/day', prereq:['m4','m5'],
        hook:"The three-shape alphabet professionals use to simplify literally everything they draw, before a single detail goes down.",
        whyItMatters:[
          "Every object in existence, however complex, can be simplified into combinations of a small number of basic shapes. This is not a beginner's crutch — it is the actual professional workflow. Concept artists, illustrators, and animators all block a subject in as flat basic shapes before adding a single detail, because getting the big shapes right first makes everything after easier to fix, and getting them wrong first makes everything after harder, no matter how well the details are rendered.",
          "This module is the bridge between Module 5 (observation, which trains accurate seeing) and Module 7 (forms, which adds the third dimension). Shapes are flat; the next module turns them into solid volume."
        ],
        coreIdea:[
          "The three basic shapes — circle, rectangle, triangle — act as an alphabet almost any silhouette can be built from, in combination. A circle simplifies round or organic masses (heads, fruit, boulders). A rectangle simplifies blocky, rigid masses (torsos, boxes, buildings). A triangle simplifies tapering or directional masses (a dress, a mountain, a beak).",
          "<b>Shape hierarchy:</b> when simplifying a subject, identify the single largest shape first — the primary shape, usually the overall silhouette or biggest mass — then secondary shapes (the major divisions within it), then tertiary shapes (small details) last. Beginners tend to jump straight to tertiary detail, which is why their drawings often have accurate-looking parts that never add up to a coherent whole.",
          "<b>Silhouette thinking:</b> if your drawing were filled entirely solid black, would it still read clearly as its subject? This is a genuine professional check — strong character and object designs are often recognizable from silhouette alone, and it is a fast way to judge whether the big shapes work before investing time in detail.",
          "Organic versus geometric shape language is a deliberate design choice as much as an observational one: rounder, organic shapes tend to read as softer, friendlier, or older; sharper, geometric shapes read as harder, more mechanical, or more dangerous. This becomes a direct, deliberate tool later, in Character Design."
        ],
        mistakes:[
          "Starting a drawing with an eye, a button, or another small detail before establishing any of the larger shapes it belongs to.",
          "Copying a subject's outline directly instead of simplifying it into underlying shape language first, which produces a stiff tracing rather than an understood drawing.",
          "Ignoring silhouette readability, so the drawing only makes sense once fully rendered and falls apart as a flat shape.",
          "Assuming shape simplification is only for cartoon or simple styles. Realistic work relies on it equally; realism just hides the step better in the final rendering."
        ],
        proTips:[
          "When stuck on a complex subject, squint at it (or blur a reference photo) until fine detail disappears and only the big shape masses remain. This is a real, widely used professional trick, not just a beginner exercise.",
          "Fill rough shape blocking with flat, solid tone early, to check silhouette readability before adding a single line of detail.",
          "Ask \"what's the biggest shape here?\" every time you start a new subject. It becomes automatic with repetition."
        ],
        practice:{
          warmup:"Draw five random objects around you as flat, solid silhouettes only — no interior lines, no outline, just the filled shape.",
          daily:"Pick one photo reference and simplify it into three to five basic shapes, largest first. Use a new subject each day this week.",
          weekly:"Take a single reference photo and produce three separate shape-simplification passes: one using mostly circles, one mostly rectangles, one mostly triangles. Compare how differently each one reads.",
          challenge:"Fill a page with ten to fifteen quick silhouette thumbnails of random objects, from memory or imagination, no more than thirty seconds each. Speed forces reliance on shape language instead of detail."
        },
        resources:[
          {type:'Course', title:'Lesson 1 — organic and geometric shapes', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:"Its shape exercises build directly on the line and ellipse control practiced in Module 4, with the same ghosting and construction discipline applied to shape blocking.", verified:true},
          {type:'Course Bundle', title:'Drawing Basics course bundle', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/browse/courses', why:"Proko's beginner bundle covers shape-based blocking-in as a first step, from an instructor whose figure drawing courses are widely used across the industry.", verified:true}
        ],
        quiz:[
          {q:"In shape hierarchy, what should you establish first?", options:["Tiny details like eyelashes","The single largest, primary shape","The signature or date","The background color"], correct:1, explain:"Biggest shape first, then secondary divisions, then small details last \u2014 reversing this order is the most common beginner mistake here."},
          {q:"Silhouette readability only matters for cartoon or simplified art styles.", options:["True","False"], correct:1, explain:"Realistic work relies on it equally; realism just hides the step better in the final rendering."},
          {q:"The three basic shapes taught in this module are:", options:["Star, heart, arrow","Circle, rectangle, triangle","Hexagon, pentagon, octagon","Line, dot, curve"], correct:1, explain:"Circle, rectangle, and triangle are the alphabet almost any silhouette can be built from."}
        ],
        checklist:[
          "I can simplify a photo reference into three to five basic shapes, largest first.",
          "I can explain shape hierarchy — primary, secondary, tertiary — in my own words.",
          "I can judge whether a shape blocking is silhouette-readable before adding detail.",
          "I have filled at least one page of quick silhouette thumbnails."
        ],
        nextStep:"Forms — the leap from flat shape to solid volume, and the construction principle every subject in the rest of this roadmap is built from."
      },
      {
        id:'m7', plate:'07', title:'Forms', difficulty:'Beginner',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m4','m6'],
        hook:"The leap from flat shape to solid volume, and the construction principle every subject in the rest of this roadmap is built from.",
        whyItMatters:[
          "This module closes out Foundations by taking the flat shape language from Module 6 into three dimensions. The four basic forms taught here — sphere, cube, cylinder, cone — are the literal building blocks for every subject in every arc that follows: heads are built from spheres, torsos from modified cubes, limbs from cylinders, trees from cones and spheres combined. Skip this module and every later \"how to draw X\" lesson in the full roadmap turns into memorizing shapes instead of understanding structure.",
          "This is also where construction drawing becomes genuinely different from copying. Once you understand an object as a 3D form, you can draw it from an angle you've never seen it at, under lighting you've never seen it in, entirely from imagination — because you are building it, not tracing it."
        ],
        coreIdea:[
          "The four basic forms: <b>sphere</b> (any round volume — heads, fruit, boulders), <b>cube</b> (any rigid, angular volume — boxes, torsos, buildings), <b>cylinder</b> (any tube-like volume — limbs, tree trunks, cups), <b>cone</b> (any volume that tapers to a point — a horn, a stacked skirt). Nearly every complex object in existence can be built by combining, stretching, or cutting these four forms.",
          "<b>Cross-contour lines:</b> lines drawn around a form's surface, like lines of latitude on a globe or the seams on a baseball, that reveal its rotation and volume even with zero shading. Drawing these on your own basic forms is one of the fastest ways to build genuine 3D understanding, rather than a flat outline that merely implies volume.",
          "<b>Construction thinking:</b> lightly sketching a form's basic skeleton or bounding box first, then building the final volume around it — the same underlying logic as Drawabox's box-construction exercises from Module 4, now applied to actual solid volume instead of just lines and ellipses.",
          "<b>Combining and cutting forms:</b> a real object is rarely a single pure form. It is usually several forms combined (a body built from a cylindrical torso and spherical joints) or a single form with pieces cut away (a mug is a cylinder with a chunk removed for the opening, plus a smaller cylinder for the handle). Learning to see objects this way is the entire foundation of the Construction module in the next arc.",
          "Ellipses, from Module 4, become directly functional here: the ends of any cylinder or cone are ellipses, and understanding their degree and minor axis — which you already practiced — is exactly what makes a drawn cylinder look like it is rotating in space instead of lying flat on the page."
        ],
        mistakes:[
          "Drawing only a form's outline, with no cross-contour lines, which produces a flat shape that only reads as \"3D\" because of shading tricks rather than actual structural understanding.",
          "Jumping to complex objects before being able to confidently draw the four basic forms alone, from multiple angles, with construction lines visible.",
          "Ignoring perspective on cylinders and cones — drawing both ellipse ends as identical ellipses regardless of distance from the viewer — one of the most common and most immediately visible beginner mistakes in constructed drawing.",
          "Erasing construction lines too early, before checking whether the underlying form actually reads correctly in 3D. They are a diagnostic tool, not scaffolding to hide as fast as possible."
        ],
        proTips:[
          "Draw the same basic form — a cylinder, say — from at least five different angles in one sitting. This is more valuable than drawing five different objects from one angle each.",
          "Leave construction lines visible and lightly drawn as you work, rather than erasing as you go. Erase only at the very end, once the form reads correctly.",
          "When combining forms, ask \"which form is this actually made of?\" before drawing a single line — the same habit as Module 6's \"what's the biggest shape here?\""
        ],
        practice:{
          warmup:"Draw one sphere, one cube, one cylinder, and one cone from imagination, each with visible cross-contour lines showing its rotation.",
          daily:"Draw the same simple household object (a mug, a book, a lamp) as a construction of two or three combined basic forms, from a new angle each day.",
          weekly:"Continue Drawabox's box-construction sequence from Lesson 1: build multiple boxes in different rotations, checking that opposite edges stay roughly parallel in perspective.",
          challenge:"Pick one complex object — a chair, a backpack, a bicycle — and spend fifteen minutes only identifying and sketching which basic forms it's built from. No final rendering, just the construction."
        },
        resources:[
          {type:'Course', title:'Lesson 1 — box construction', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:"The box-construction sequence begun here continues in later Drawabox lessons and is the most widely used free resource for this exact skill.", verified:true},
          {type:'Course Bundle', title:'Drawing Basics course bundle', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/browse/courses', why:"Covers basic form construction as a bridge into the figure and portrait courses Proko is best known for.", verified:true}
        ],
        quiz:[
          {q:"Which of these is NOT one of the four basic 3D forms taught in this module?", options:["Sphere","Cube","Torus","Cylinder"], correct:2, explain:"Sphere, cube, cylinder, and cone are the four. A torus (a ring shape) isn't part of this basic set."},
          {q:"Cross-contour lines help show a form's rotation and volume even without any shading.", options:["True","False"], correct:0, explain:"They work like lines of latitude on a globe \u2014 volume becomes readable from structure alone."},
          {q:"Why shouldn't you erase construction lines too early?", options:["It wastes eraser","They're a diagnostic tool for checking whether the form reads correctly in 3D before committing","They're required to stay visible by convention","They make the drawing look unfinished on purpose"], correct:1, explain:"Construction lines let you catch a broken form before it's too late to fix easily."}
        ],
        checklist:[
          "I can draw a sphere, cube, cylinder, and cone from imagination, each from at least two different angles.",
          "I can add cross-contour lines that make a form read as rotating in 3D space.",
          "I can look at a simple object and identify which basic forms it is built from.",
          "I can combine two or more basic forms into a single simple object construction.",
          "I understand why an ellipse's degree changes based on a cylinder's rotation."
        ],
        nextStep:"Foundations is complete. Next: Perspective & Construction — one through three-point perspective, gesture drawing, and full construction method, mapped on the home page and being written next."
      }
    ]
  },
{
    id:'perspective', title:'Perspective & Construction', status:'live', order:2,
    desc:'One-, two-, and three-point perspective, gesture drawing, full construction method, light logic, shading systems, texture, and composition — the toolkit that turns forms into believable drawings.',
    modules:[
      {
        id:'m8', plate:'08', title:'Perspective Fundamentals', difficulty:'Beginner\u2013Intermediate',
        studyTime:'30 min', practiceTime:'25\u201330 min/day', prereq:['m6','m7'],
        hook:"Why parallel lines meet in the distance, and the vanishing-point logic that makes any box, room, or street look like it actually recedes in space.",
        whyItMatters:[
          "Perspective is the system that makes flat marks on paper read as objects existing in 3D space at a specific distance from the viewer. Without it, even a perfectly constructed form from Module 7 floats in an ambiguous, inconsistent space. Every environment, every piece of furniture, every vehicle in every later arc of this roadmap depends on the logic taught here.",
          "Beginners tend to either avoid perspective entirely, drawing everything from a flat, front-on angle that sidesteps the problem, or over-rely on rigid ruler-and-vanishing-point construction for every single mark, which is slow and breaks down for loose, freehand work. Professionals use rigid perspective when precision matters and intuitive, freehand perspective almost everywhere else \u2014 but the freehand version only works once the rigid system has been genuinely internalized first."
        ],
        coreIdea:[
          "The horizon line is always your eye level \u2014 not a fixed line \"out there,\" but wherever the viewer's eyes are. This is genuinely disorienting the first time it clicks: crouch down and the horizon drops with you; climb a hill and it rises with you.",
          "<b>Vanishing points</b> are where sets of parallel lines converge as they recede into the distance. One-point perspective uses a single vanishing point directly ahead \u2014 think of looking straight down a hallway or road. Two-point uses two vanishing points on the horizon, for viewing a box or building at an angle. Three-point adds a vanishing point above or below the horizon for extreme upward or downward views, like a skyscraper seen from its base.",
          "If you can draw a cube correctly in perspective, you can draw practically anything \u2014 this idea, taught by nearly every perspective instructor worth listening to, is why so much of this course keeps returning to box construction. Almost every man-made object and most natural forms can be built starting from a perspective-correct box.",
          "Rigid, ruler-plotted perspective should be learned first, to internalize why the system works, then deliberately loosened into freehand, intuitive perspective \u2014 because most real work (sketching, comics, animation, concept art) can't afford to plot every vanishing point precisely, and freehand accuracy only comes from having done the rigid version enough times to internalize it.",
          "Circles lying on a receding surface \u2014 a wheel, a plate, a manhole cover \u2014 become ellipses whose degree and angle are dictated by the same perspective system as everything else in the scene. This connects directly back to the ellipse work from Module 4: getting this wrong is one of the fastest ways a otherwise-correct perspective drawing falls apart."
        ],
        mistakes:[
          "Drawing every object from a flat, front-on \"elevation\" view specifically to avoid dealing with perspective at all.",
          "Placing a vanishing point far too close to the subject, causing severe, unintended distortion that looks like an accidental fisheye lens.",
          "Using an inconsistent horizon line or eye level across a single scene, so objects read as if viewed from different heights within the same picture.",
          "Treating perspective as purely mechanical grid-plotting and never practicing the freehand, intuitive version that actually gets used in fast sketching and imaginative work.",
          "Getting the ellipse degree wrong on circular objects even when the surrounding box perspective is otherwise correct."
        ],
        proTips:[
          "Decide where the horizon line sits before placing a single object in a scene \u2014 every vanishing point and every object's height depends on that one decision.",
          "Practice constructing boxes in perspective daily before attempting full scenes. \"If you can draw a cube, you can draw almost anything\" holds up surprisingly well in practice.",
          "Once the rigid system feels intuitive, deliberately draw the same simple scene freehand with no ruler or plotted vanishing points, and compare it to the constructed version."
        ],
        practice:{
          warmup:"Draw a horizon line and a single vanishing point. Draw ten boxes of different sizes, all converging correctly to that one point.",
          daily:"Continue box construction in two-point perspective, focused on keeping vertical edges genuinely vertical and back edges converging correctly to both vanishing points.",
          weekly:"Construct a simple room in one-point perspective \u2014 a box with a door, a window, one piece of furniture \u2014 then redraw the same room in two-point perspective from a corner angle.",
          challenge:"Draw the same simple object in one-point, two-point, and three-point perspective, then draw it once more entirely freehand, with no plotted vanishing points at all."
        },
        resources:[
          {type:'Video', title:'Introduction to Perspective Drawing (1994 Chalkboard Lecture)', creator:'Marshall Vandruff', url:'https://www.youtube.com/watch?v=R60e9_ofV68', why:"A free introduction from the perspective course widely recommended across the self-taught art community (Drawabox links to it directly). Explains what perspective is and why it's difficult before getting technical.", verified:true},
          {type:'Course', title:'Drawing Basics \u2014 Structure & Perspective section', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course/drawing-basics', why:"Covers one-, two-, and three-point perspective, then deliberately transitions into freehand \"intuitive perspective\" without grids \u2014 exactly the progression this module teaches. Partly free, extends further as a paid course.", verified:true},
          {type:'Course', title:'Lesson 1 \u2014 continuing box construction', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:"Its rough and plotted perspective exercises are the same one-point and two-point construction this module covers, with a structured critique system attached.", verified:true}
        ],
        quiz:[
          {q:"What determines where the horizon line sits in a drawing?", options:["It's always the same height on the page","The viewer's eye level","The size of the largest object","The color of the vanishing point"], correct:1, explain:"The horizon line isn't fixed \u2014 it's wherever the viewer's eyes are, and it moves as the viewer does."},
          {q:"One-point perspective uses two vanishing points on the horizon.", options:["True","False"], correct:1, explain:"One-point perspective uses a single vanishing point; two-point perspective uses two."},
          {q:"What should you decide before placing a single object in a perspective drawing?", options:["The color palette","The horizon line","The paper size","The pencil grade"], correct:1, explain:"Every vanishing point and every object's height depends on where the horizon (eye level) is set first."}
        ],
        checklist:[
          "I can identify the horizon line in a scene and explain why it equals eye level.",
          "I can construct a box in one-point and two-point perspective using a ruler and plotted vanishing points.",
          "I can draw a simple box freehand, with no ruler, that still reads as correct perspective.",
          "I can draw a circular object on a receding surface as a perspective-correct ellipse."
        ],
        nextStep:"Gesture Drawing \u2014 capturing movement and energy before worrying about outlines at all."
      },
      {
        id:'m9', plate:'09', title:'Gesture Drawing', difficulty:'Beginner\u2013Intermediate',
        studyTime:'20 min', practiceTime:'20\u201330 min/day', prereq:['m4','m7'],
        hook:"Why the first line you draw should describe movement, not outline \u2014 and why professionals spend real time on 30-second sketches.",
        whyItMatters:[
          "Everything so far has been about static construction: accurate shapes, correct forms, correct perspective. Gesture is different \u2014 it captures energy, weight, and movement before worrying about accurate outlines at all. A technically perfect but stiff figure reads as lifeless; a rough but well-gestured figure reads as alive, even with proportion errors still in it.",
          "Every professional figure and character workflow \u2014 illustration, animation, comics, concept art \u2014 starts with a gesture pass. Skipping straight to careful, outline-first drawing is one of the most common reasons a beginner's figures come out stiff and posed rather than alive."
        ],
        coreIdea:[
          "The <b>line of action</b>: a single sweeping C-curve or S-curve summarizing a pose's main thrust, usually running from the head down through the weight-bearing leg, along the \"stretched\" side of the body rather than straight down the center.",
          "Rhythm and flow matter more here than literal silhouette \u2014 gesture drawing looks for the underlying connection between body masses (rib cage, pelvis) rather than tracing the exact contour. Think of it as drawing the story of the pose, not its outline.",
          "Weight and balance: a standing figure's center of gravity has to plausibly sit over its base of support, or the pose reads as falling over. Gesture practice trains you to feel this instantly, before construction ever adds volume on top.",
          "Different timed durations serve different purposes. Thirty-second poses force you to find only the action line and the biggest masses. One- to two-minute poses add secondary masses like the rib cage and pelvis. Five- to ten-minute poses start layering construction and proportion on top of a gesture that's already alive. Skipping straight to long poses without short warm-ups first is a common beginner shortcut that backfires."
        ],
        mistakes:[
          "Drawing a careful outline first and trying to \"find\" the gesture afterward, instead of starting with the action line.",
          "Spending the whole time budget on outline and detail, running out of time on drills specifically designed to prevent that.",
          "Drawing every pose symmetrically balanced down a straight center line, which reads as stiff \u2014 real poses lean, twist, and shift weight.",
          "Jumping straight into long, detailed studies without a foundation of short gesture warm-ups first."
        ],
        proTips:[
          "Warm up with a batch of 30-second poses before any longer study, every single session, no exceptions.",
          "Look for the \"stretch side\" and \"compression side\" of a pose \u2014 one side of the torso lengthens, the other compresses \u2014 and let the action line follow the stretch side.",
          "It's fine, and expected, for gesture drawings to look rough and unfinished. That roughness is the entire point."
        ],
        practice:{
          warmup:"Ten 30-second gesture drawings from any reference source, focused purely on finding one confident action line per pose.",
          daily:"A mixed session: several 30-second poses, then several 1-minute poses, then two or three 2-minute poses, building up mass and rhythm as time increases.",
          weekly:"A full 20\u201330 minute timed gesture session, deliberately varying pose type \u2014 standing, sitting, dynamic action \u2014 across the session.",
          challenge:"Pick one finished illustration or photo and draw its gesture only, in under a minute, reducing the whole pose to a single action line and a few supporting masses."
        },
        resources:[
          {type:'Tool', title:'Figure Drawing practice tool', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"A free, configurable timed pose-reference tool \u2014 set duration, model type, and session length, and it runs the timed drill for you. Built specifically for this exercise.", verified:true},
          {type:'Video', title:'How to Draw Gesture', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-gesture', why:"Part of Proko's free \"Learning How to Draw\" series, covering the line of action and gesture fundamentals directly from a figure-drawing specialist.", verified:true}
        ],
        quiz:[
          {q:"What is the \"line of action\"?", options:["A ruler used for straight lines","A single sweeping curve summarizing a pose's main thrust","The outline of a figure","A type of eraser"], correct:1, explain:"It's a single line, usually a C- or S-curve, that captures the main thrust of the whole pose."},
          {q:"Short 30-second gesture drawings are meant to look rough and unfinished.", options:["True","False"], correct:0, explain:"That roughness is the point \u2014 the drill trains you to find a pose's energy fast, not to produce a polished result."},
          {q:"What's a common beginner mistake this module warns against?", options:["Drawing too quickly","Drawing a careful outline first and trying to find the gesture afterward","Using reference images","Practicing daily"], correct:1, explain:"Gesture has to come first \u2014 trying to retrofit energy onto a finished outline rarely works."}
        ],
        checklist:[
          "I can draw a single confident action line summarizing a pose in under a minute.",
          "I can identify the stretch side and compression side of a simple standing pose.",
          "I have completed at least one full timed gesture session of 20 minutes or more, using varied durations.",
          "I can explain why a technically accurate but ungestured figure often reads as lifeless."
        ],
        nextStep:"Construction Method \u2014 the professional workflow for building any complex object out of the primitive forms from Module 7."
      },
      {
        id:'m10', plate:'10', title:'Construction Method', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m7','m9'],
        hook:"The professional workflow for building any object \u2014 simple or absurdly complex \u2014 out of nothing but the primitive forms from Module 7.",
        whyItMatters:[
          "This module is the synthesis point for everything so far: shapes, forms, perspective, and even the loose energy of gesture all combine here into a single repeatable process professionals use on literally anything, from a doorknob to a dragon. Once this workflow is internalized, \"how do I draw X\" stops being a question with a memorized answer and becomes a question you can always work out yourself.",
          "This is also the direct bridge into every subject-specific arc later in this roadmap \u2014 heads, hands, animals, vehicles, environments. All of them are taught as applications of this same construction process, not as separate memorized skills."
        ],
        coreIdea:[
          "The construction hierarchy: start with gesture or orientation if the subject has a pose, then block in the largest primitive forms roughly in perspective, then progressively cut, combine, and refine those forms into the actual subject, adding secondary and tertiary detail last \u2014 the same big-to-small hierarchy from Module 6, now applied in full 3D.",
          "<b>Combining forms</b> means attaching one primitive to another \u2014 a cylinder arm attached to a sphere shoulder joint \u2014 to build a more complex structure from simple parts.",
          "<b>Cutting forms</b> means removing a chunk of a primitive to reveal a more specific shape: a mug is a cylinder with a wedge cut from the rim for the opening; a doorway is a cut through a box.",
          "Professionals mentally treat forms as semi-transparent, tracking the far side of a shape even though it won't appear in the final line art, because that's what keeps proportions and perspective consistent all the way around an object, not just on the visible face.",
          "When two forms intersect, understanding where their surfaces would actually meet in 3D \u2014 not just where their outlines cross on the flat page \u2014 is what makes a construction believable rather than flat and pasted-together."
        ],
        mistakes:[
          "Jumping straight to detailed line art with no construction pass underneath, so details don't sit convincingly on a coherent 3D form.",
          "Treating construction lines as a one-time step to erase immediately, rather than a running diagnostic tool used throughout the drawing.",
          "Combining forms without considering how their surfaces would actually intersect in 3D, producing shapes that look pasted together.",
          "Skipping straight to cutting a complex final shape without first establishing the simple primitive the cut is being made from."
        ],
        proTips:[
          "Practice on deliberately mundane objects \u2014 a stapler, a shoe, a kettle \u2014 before attempting characters or creatures. Construction logic is easiest to learn on simple hard-surface objects first.",
          "Keep every construction pass \"see-through\" as long as possible. Only commit to opaque final lines once the underlying form is confirmed correct.",
          "When stuck on a complex object, ask \"what's the single simplest form this could start as?\" before adding a single cut or combination."
        ],
        practice:{
          warmup:"Construct three simple household objects \u2014 a mug, a lamp, a shoe \u2014 using only combined and cut primitive forms, five minutes each.",
          daily:"Pick one object from your surroundings and construct it fully: orientation, primitive blocking, combining and cutting, then light detail, in that order.",
          weekly:"Construct the same object from three different angles, keeping the construction logic consistent across all three.",
          challenge:"Construct an object you cannot currently see \u2014 something from memory or imagination, like an old telephone \u2014 using only the construction process, with no reference."
        },
        resources:[
          {type:'Course', title:'Structure Basics \u2014 Making Things Look 3D', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course/drawing-basics', why:"A free lesson within Proko's Drawing Basics course covering exactly this combine-and-cut construction process.", verified:true},
          {type:'Course', title:'Lesson 1 and onward', creator:'Drawabox (Uncomfortable)', url:'https://drawabox.com/lesson/1', why:"Its organic and box construction exercises are the same underlying discipline this module names explicitly, continuing past Lesson 1 into more complex form combination.", verified:true}
        ],
        quiz:[
          {q:"In the construction hierarchy taught here, what comes first?", options:["Fine detail","Gesture or orientation and the largest primitive forms","Erasing all guide lines","Color"], correct:1, explain:"Big-to-small: orientation and primitive forms come first, detail comes last."},
          {q:"Construction lines should be erased immediately after they're drawn.", options:["True","False"], correct:1, explain:"They're a running diagnostic tool used throughout the drawing, not scaffolding to hide right away."},
          {q:"What does \"cutting\" a form mean in construction drawing?", options:["Erasing the whole drawing and starting over","Removing a chunk of a primitive form to reveal a more specific shape","Using scissors on the paper","Switching to a sharper pencil"], correct:1, explain:"A mug, for example, is a cylinder with a wedge cut out for the opening."}
        ],
        checklist:[
          "I can construct a simple object by combining two or more primitive forms.",
          "I can construct a simple object by cutting a chunk out of a single primitive form.",
          "I keep construction lines visible and treat them as a check, not just scaffolding to erase immediately.",
          "I can construct the same simple object from at least two different angles with consistent logic."
        ],
        nextStep:"Light & Shadow Logic \u2014 understanding why shadows fall where they do, before ever picking up a shading pencil."
      },
      {
        id:'m11', plate:'11', title:'Light & Shadow Logic', difficulty:'Intermediate',
        studyTime:'30 min', practiceTime:'20\u201325 min/day', prereq:['m7','m10'],
        hook:"Why a shadow exists before you ever learn how to render one \u2014 the physics beginners skip and pay for later.",
        whyItMatters:[
          "This module is deliberately separated from Shading (Module 12). Rendering technique without understanding light logic produces shading that looks plausible in isolation but falls apart under scrutiny \u2014 shadows pointing the wrong way, forms that don't actually read as receiving light from a consistent source. Understanding why a shadow falls where it does has to come before how to render it.",
          "Every professional rendering workflow, traditional or digital, starts by establishing a single, consistent light source and reasoning through its logic before a single mark is shaded. Skipping this step is the most common reason beginner shading looks confused rather than convincing."
        ],
        coreIdea:[
          "<b>Core shadow</b> is the shadow on the object itself, on the side facing away from the light. <b>Cast shadow</b> is the shadow the object throws onto another surface. Beginners frequently merge these, but they behave differently and have different edge qualities.",
          "The <b>form shadow terminator</b> is the line, not always sharp, where a surface turns from lit to shadowed, following the object's actual 3D curvature. This is what makes shading read as volume rather than a flat gradient sitting on top of a shape.",
          "Shadowed areas are rarely pure black \u2014 they usually pick up faint <b>reflected light</b> bounced from nearby surfaces, except at <b>occlusion shadow</b> points, where two surfaces meet closely and block almost all light. Occlusion shadows are often the actual darkest values in a scene, darker than the core shadow itself.",
          "A single, consistent light source direction has to be decided before shading starts, and every shadow in the scene \u2014 core, cast, and occlusion \u2014 has to stay logically consistent with that one decision. Multiple inconsistent implied light sources is one of the fastest ways a drawing reads as \"off,\" even to viewers who can't say why.",
          "<b>Rim light</b> \u2014 light wrapping around a form's edge from behind, separating it from a similarly-toned background \u2014 is common in professional work and easy to overdo."
        ],
        mistakes:[
          "Shading a form's shadow side as flat, uniform gray instead of following the terminator's actual curve across the form.",
          "Making the shadow side pure black, ignoring the reflected light that almost always bounces back into it.",
          "Drawing cast shadows at the wrong shape or angle relative to the established light source, or with no consistent light source decided at all.",
          "Missing occlusion shadows at contact points \u2014 where an object touches a surface, where two forms meet \u2014 which are usually the actual darkest values in a scene."
        ],
        proTips:[
          "Before shading anything, say out loud or write down exactly where the light source is. If that can't be answered in one sentence, the shading will show it.",
          "Squint at a real object under a single light source and note where the terminator, cast shadow, and occlusion shadow actually fall, before trying to invent it from imagination.",
          "Reflected light should almost always stay darker than the core shadow's lightest edge, or it reads as an accidental second light source."
        ],
        practice:{
          warmup:"Shade a single sphere under one clear light source, deliberately including core shadow, cast shadow, terminator, reflected light, and occlusion shadow.",
          daily:"Find or set up a simple object under one strong light source and identify, without shading yet, where each of the five shadow elements above would fall.",
          weekly:"Shade the same simple form \u2014 sphere, cube, or cylinder \u2014 under three different light directions, comparing how the shadow shapes change.",
          challenge:"Take a flat, evenly-lit photo and reason through where shadows would fall if a single strong light were introduced from one side, then sketch that lighting onto the form."
        },
        resources:[
          {type:'Video', title:'Shading Light and Form \u2014 Basics', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/shading-light-and-form-basics', why:"One of 32 free lessons in Proko's Figure Drawing Fundamentals course, taught directly by Stan Prokopenko and covering this exact terminology and logic.", verified:true},
          {type:'Video Series', title:'The Illusion of Depth (Contrast, Cast Shadow, Edge)', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/learning-how-to-draw', why:"A free video series covering how contrast, cast shadow, and edge quality work together as depth cues \u2014 directly relevant to reading light logic correctly. Linked via Proko's free-lessons hub page.", verified:true}
        ],
        quiz:[
          {q:"What's the difference between core shadow and cast shadow?", options:["There is no difference","Core shadow is on the object itself; cast shadow is thrown onto another surface","Core shadow is always darker","Cast shadow only happens outdoors"], correct:1, explain:"Core shadow lives on the object's own surface; cast shadow is what it throws onto something else."},
          {q:"The shadow side of a form is usually pure black, with no reflected light.", options:["True","False"], correct:1, explain:"Shadowed areas usually pick up faint reflected light bounced from nearby surfaces, except at occlusion points."},
          {q:"Where are the actual darkest values in a scene usually found?", options:["The core shadow","Occlusion shadows, where two surfaces meet closely","The cast shadow's edge","Rim light areas"], correct:1, explain:"Occlusion points block almost all light, often making them darker than the core shadow itself."}
        ],
        checklist:[
          "I can name and locate core shadow, cast shadow, terminator, reflected light, and occlusion shadow on a simple sphere.",
          "I can shade a form so its shadow follows the terminator's curve rather than sitting as a flat gray patch.",
          "I keep a single, consistent light source logic across an entire shaded drawing.",
          "I can identify where the darkest actual value in a simple scene would be, and explain why."
        ],
        nextStep:"Shading Systems \u2014 the actual mark-making techniques used to render the light logic from this module."
      },
      {
        id:'m12', plate:'12', title:'Shading Systems', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m11'],
        hook:"Hatching, cross-hatching, and blending aren't style choices \u2014 each solves a different rendering problem, and professionals pick deliberately.",
        whyItMatters:[
          "Module 11 established where shadows fall; this module covers how to actually render them with a pencil. Beginners often default to one technique, usually blending with a stump or finger, for everything, without realizing each shading technique has real tradeoffs in speed, texture, and control that professionals choose between on purpose.",
          "Shading technique also has to match the material and mood of a subject \u2014 smooth blended shading reads very differently from confident cross-hatching, and mismatching technique to subject is a common way an otherwise well-constructed drawing ends up looking \"off.\""
        ],
        coreIdea:[
          "<b>Hatching:</b> parallel lines, with spacing and pressure controlling perceived value. Fast, keeps a hand-drawn energy, works well for confident sketch-based rendering.",
          "<b>Cross-hatching:</b> layered hatching at different angles to build deeper value through overlap, useful for reaching darker values than single-direction hatching can cleanly achieve.",
          "<b>Contour hatching:</b> hatching lines that follow the form's actual curvature rather than staying uniformly parallel, directly reinforcing the cross-contour idea from Module 7 \u2014 one of the most effective techniques for making shading read as genuine volume.",
          "<b>Blending:</b> smoothing graphite with a stump, tissue, or finger for smooth gradients. Common in realistic rendering, but easy to overuse into a muddy, textureless result if it becomes a default instead of a deliberate choice.",
          "Professionals typically block in a rough value map \u2014 light, mid, and dark masses \u2014 before committing to final technique, so the overall value structure reads correctly even before detail is added. Rendering fine detail before value structure is settled is a common, correctable beginner mistake."
        ],
        mistakes:[
          "Blending everything by default, producing flat, muddy shading with no texture or hand-drawn energy.",
          "Adding fine detail before the big value masses are correctly established, so early good work gets undermined by structural value errors discovered too late.",
          "Using hatching lines that ignore the form's actual curvature, flattening what Module 11 correctly identified as a curved terminator.",
          "Switching shading technique randomly within one drawing with no reason, producing an inconsistent final rendering."
        ],
        proTips:[
          "Do a rough value thumbnail \u2014 light, mid, dark shapes only, no technique \u2014 before committing to a final rendering approach.",
          "Practice each technique on the exact same simple form, like a sphere, so the comparison between them is fair and the tradeoffs become obvious.",
          "Contour hatching is worth deliberately over-practicing early, since it most directly reinforces the volume and form understanding from Modules 7 and 11."
        ],
        practice:{
          warmup:"Shade the same simple sphere four times \u2014 hatching, cross-hatching, contour hatching, blending \u2014 under identical lighting.",
          daily:"Pick one small object and render it fully: rough value thumbnail first, then one deliberately chosen technique.",
          weekly:"Render one still life object using contour hatching exclusively, tracking the form's curvature with every line.",
          challenge:"Take a photo reference with complex lighting and produce only a three-value rough \u2014 light, mid, dark masses, no technique, no detail \u2014 before rendering anything further."
        },
        resources:[
          {type:'Video', title:'How to Shade a Drawing', creator:'Proko (Stan Prokopenko)', url:'https://www.classcentral.com/course/youtube-drawing-basics-proko-130372', why:"A free video walking through the actual shading process step by step, listed on the confirmed free-lesson index for Proko's Drawing Basics course.", verified:true},
          {type:'Video', title:'Top 5 Shading Mistakes', creator:'Proko (Stan Prokopenko)', url:'https://www.classcentral.com/course/youtube-drawing-basics-proko-130372', why:"Free, focused directly on the failure modes this module warns about \u2014 a good check after practicing the techniques above. Same free-lesson index.", verified:true},
          {type:'Video Library', title:'Free Video Library', creator:'Ctrl+Paint (Matt Kohr)', url:'https://www.ctrlpaint.com/library', why:"Its structured free fundamentals progression includes rendering and value logic that builds directly on this module.", verified:true}
        ],
        quiz:[
          {q:"What does contour hatching do that regular hatching doesn't?", options:["Uses color","Follows the form's actual curvature instead of staying uniformly parallel","Is always faster","Requires a blending stump"], correct:1, explain:"Contour hatching lines wrap around the form, directly showing its 3D curvature."},
          {q:"It's best to add fine detail before establishing the big light, mid, and dark value masses.", options:["True","False"], correct:1, explain:"Value structure should be settled first \u2014 detail added too early gets undermined by structural value errors found later."},
          {q:"What's a risk of defaulting to blending for everything?", options:["It takes too long to learn","It produces flat, muddy shading with no texture or energy","It only works in color","It requires expensive tools"], correct:1, explain:"Overused blending tends to flatten a drawing's energy and texture into mud."}
        ],
        checklist:[
          "I can render the same simple form using at least three different shading techniques.",
          "I can explain, in my own words, when I'd choose hatching versus blending versus contour hatching.",
          "I block in a rough value structure before committing to detailed rendering technique.",
          "My hatching lines follow the form's actual curvature rather than staying uniformly parallel regardless of the surface."
        ],
        nextStep:"Texture \u2014 rendering the specific surface qualities that sit on top of the shading systems from this module."
      },
      {
        id:'m13', plate:'13', title:'Texture', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m12'],
        hook:"Why wood, metal, and fabric all need different mark-making under identical lighting \u2014 and the two-step process that keeps texture from turning into noise.",
        whyItMatters:[
          "Texture is the final layer, sitting on top of the light logic and shading technique already established in Modules 11 and 12. Texture rendered before those foundations are solid tends to become visual noise instead of a convincing surface, which is exactly why this module is sequenced last in the arc.",
          "Convincing texture isn't about copying every visible detail of a surface. It's about correctly reading how light behaves differently on different surface properties \u2014 rough versus smooth, hard versus soft, matte versus reflective \u2014 and rendering that interaction, not the literal detail count."
        ],
        coreIdea:[
          "Every material's texture is really a description of how light behaves on that surface. Rough surfaces \u2014 wood, stone, fabric \u2014 scatter light unevenly, breaking the shadow terminator from Module 11 into smaller, irregular value shifts. Smooth surfaces \u2014 metal, glass, polished skin \u2014 keep sharp, high-contrast highlights and reflect their surroundings.",
          "The two-step texture process: first, render the underlying form correctly using the light logic and shading systems already covered \u2014 the object has to read as a solid 3D shape before any texture is added. Then layer texture cues on top of that already-correct value structure, concentrated more heavily in mid-tones, where the eye reads detail most, and reduced in the darkest shadows and brightest highlights, where extreme values naturally suppress visible detail.",
          "Texture density and contrast should decrease with distance, echoing atmospheric depth logic \u2014 a tree in the foreground shows individual bark texture; the same tree far in the background reads as a soft, textureless mass. Rendering both at equal density flattens the sense of depth.",
          "Professionals often render one small, sharply-focused patch of a repetitive texture \u2014 individual bricks, wood grain, fabric weave \u2014 and let the rest of the surface imply the same texture with looser, less detailed marks. Rendering every single instance across an entire surface usually reads as more mechanical and less convincing than a well-chosen selective patch."
        ],
        mistakes:[
          "Rendering texture detail evenly across an entire surface regardless of distance or focal importance, which reads as flat, busy noise instead of a receding surface.",
          "Adding texture before the underlying form's value structure and light logic are correct, so the texture can't fix a form that doesn't already read as solid.",
          "Treating all rough or busy surfaces the same way, rather than observing how each specific material actually scatters or reflects light.",
          "Over-rendering texture into every highlight and shadow, when reduced detail in extreme values is usually more convincing than uniform density."
        ],
        proTips:[
          "Render one small, sharply-focused patch of a repetitive texture, then let the rest of the surface imply the pattern more loosely \u2014 it reads as more convincing and takes far less time.",
          "Reduce texture detail as value gets more extreme and as distance increases, matching how the eye actually perceives real surfaces.",
          "When texture rendering isn't working, check whether the underlying form's shading is actually correct first \u2014 texture can't rescue a form that doesn't read as solid."
        ],
        practice:{
          warmup:"Render four small identical squares in different textures \u2014 wood, metal, fabric, stone \u2014 using only value and mark-making, no color.",
          daily:"Pick one textured object nearby and render a small, focused patch of its texture in full detail, then extend the rest of the surface with looser, implied marks.",
          weekly:"Render the same simple form \u2014 a sphere or cube \u2014 in three materials: rough stone, polished metal, soft fabric, comparing how differently light behaves on each.",
          challenge:"Render a scene with the same texture at three different distances \u2014 near, mid, far \u2014 deliberately reducing detail and contrast as distance increases."
        },
        resources:[
          {type:'Video Library', title:'Free Video Library', creator:'Ctrl+Paint (Matt Kohr)', url:'https://www.ctrlpaint.com/library', why:"Its structured fundamentals progression includes surface and material rendering logic that builds directly on the shading systems from Module 12.", verified:true},
          {type:'Course', title:'The Illusion of Depth \u2014 Edge, Line, Cast Shadow', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course/drawing-basics', why:"Covers how edge quality shifts with material and distance, directly relevant to how texture should behave across a scene.", verified:true}
        ],
        quiz:[
          {q:"What should happen before texture is added to a drawing, according to this module?", options:["Nothing, texture comes first","The underlying form's value structure and light logic should already be correct","The paper should be sanded","The drawing should be inked"], correct:1, explain:"Texture sits on top of a form that already reads as solid \u2014 it can't create that solidity on its own."},
          {q:"Texture detail should stay the same regardless of an object's distance in a scene.", options:["True","False"], correct:1, explain:"Texture density and contrast should decrease with distance, matching how the eye perceives real surfaces."},
          {q:"What's the recommended approach to rendering a repetitive texture like brick or wood grain?", options:["Render every single instance in full detail","Skip texture entirely","Render one small focused patch in detail and imply the rest more loosely","Use only straight lines"], correct:2, explain:"A focused, detailed patch plus looser implied surrounding texture reads as more convincing and takes far less time."}
        ],
        checklist:[
          "I can explain why rough and smooth surfaces need different mark-making even under identical lighting.",
          "I render a focused, detailed texture patch and let the rest of a surface imply the same texture more loosely.",
          "I reduce texture detail in extreme values \u2014 deep shadow, bright highlight \u2014 rather than rendering it uniformly.",
          "I reduce texture density and contrast as an object's distance in a scene increases."
        ],
        nextStep:"Composition Foundations \u2014 arranging everything built so far into a single image that actually guides the eye."
      },
      {
        id:'m14', plate:'14', title:'Composition Foundations', difficulty:'Intermediate',
        studyTime:'30 min', practiceTime:'20\u201325 min/day', prereq:['m8','m11'],
        hook:"Every technique in this arc, arranged badly, still fails \u2014 composition decides whether a viewer's eye goes where you meant it to.",
        whyItMatters:[
          "This module closes the Perspective & Construction arc by zooming back out. Everything learned so far \u2014 forms, perspective, gesture, construction, light, shading, texture \u2014 can be individually excellent and still add up to a weak image if the composition doesn't organize it. Composition is the layer that decides what a viewer looks at first, second, and last.",
          "This module is deliberately last in the arc rather than first, because composition decisions \u2014 what's in focus, what recedes, where the light is strongest \u2014 only make sense once you understand what perspective, light, and rendering can actually do. Composition taught before those tools exist is just abstract theory."
        ],
        coreIdea:[
          "<b>Visual hierarchy:</b> a composition should have one clear focal point that reads first, established through contrast \u2014 of value, detail, sharpness, or color \u2014 rather than through position alone. The \"most different\" area of an image draws the eye, so making the focal point the highest-contrast or most-detailed area is usually more reliable than simply centering it.",
          "The rule of thirds and the golden ratio are simplified placement guides, not laws. Both exist to avoid the common beginner default of placing a subject dead-center with even, static space on all sides, which usually reads as visually inert.",
          "<b>Leading lines:</b> perspective lines, edges, and implied lines of sight \u2014 a figure looking or pointing somewhere \u2014 can be used deliberately to route the viewer's eye through a composition toward the focal point, rather than leaving eye movement to chance.",
          "Negative space carries as much visual weight as filled space. A composition can be technically \"balanced\" \u2014 equal visual weight left and right \u2014 while still being static and boring, or deliberately unbalanced in a way that creates tension and movement. Balance is a tool, not always the goal.",
          "Foreground, midground, and background layering, combined with the atmospheric and texture-density logic from Module 13, is what creates a convincing sense of depth in a full scene rather than a flat arrangement of separately-rendered objects."
        ],
        mistakes:[
          "Centering the subject with perfectly even space on all sides by default, producing a static, visually inert composition.",
          "Giving two or more areas of a composition equally strong contrast and detail, so the eye has no clear place to land first.",
          "Ignoring leading lines already present in a scene's perspective, letting the eye wander instead of guiding it toward the focal point.",
          "Treating negative space as leftover, unplanned area instead of an active compositional tool."
        ],
        proTips:[
          "Squint at a composition, or view it small and blurred, to check whether the focal point still reads once fine detail disappears \u2014 the same trick from Module 6, now applied at the whole-image level.",
          "Do several small, fast thumbnail composition sketches before committing to a final layout. Professionals routinely generate five or more before picking one.",
          "Push contrast \u2014 value, detail, or sharpness \u2014 at the focal point and deliberately reduce it everywhere else, rather than rendering every area with equal intensity."
        ],
        practice:{
          warmup:"Draw five tiny thumbnail compositions, a few inches each, of the same simple scene, varying only where the focal point sits.",
          daily:"Take one existing drawing or reference image, identify its focal point, then trace or describe the leading lines guiding the eye toward it.",
          weekly:"Compose a simple scene of three to five objects from scratch, deliberately using contrast and leading lines to establish one clear focal point.",
          challenge:"Take a composition you're genuinely unsure about and produce three deliberately different versions \u2014 one following the rule of thirds, one centered on purpose, one intentionally unbalanced \u2014 and compare which actually works best."
        },
        resources:[
          {type:'Video', title:'Effective Composition Using Shapes', creator:'Sycra', url:'https://www.youtube.com/watch?v=SNmwQumlvbQ', why:"A free, well-regarded explanation of using shape and value contrast to build a focal point \u2014 directly matching this module's core idea.", verified:true},
          {type:'Video Series', title:'Composition for Artists, Episode 1: Visualization', creator:'Sycra', url:'https://www.youtube.com/watch?v=Q7qonaAIDUk', why:"A free multi-part series expanding on composition fundamentals beyond the single video above.", verified:true}
        ],
        quiz:[
          {q:"What usually draws a viewer's eye to a focal point, according to this module?", options:["Placing it exactly in the center","Contrast \u2014 of value, detail, sharpness, or color","Making it the largest object always","Bright colors only"], correct:1, explain:"The most different area of an image is what tends to draw the eye first."},
          {q:"The rule of thirds and golden ratio are strict laws that must always be followed.", options:["True","False"], correct:1, explain:"They're placement guides meant to avoid dead-centering a subject by default, not fixed rules."},
          {q:"What does this module say about negative space?", options:["It's empty, unplanned leftover area","It carries real visual weight and is an active compositional tool","It should always be filled with detail","It only matters in black-and-white art"], correct:1, explain:"Negative space is treated as a deliberate tool, not leftover space to ignore."}
        ],
        checklist:[
          "I can identify the focal point in an existing image and explain what creates the contrast that draws the eye there.",
          "I can produce several fast thumbnail compositions of the same scene before committing to a final layout.",
          "I use leading lines deliberately to guide the eye toward a focal point rather than leaving it to chance.",
          "I can explain why negative space is an active compositional tool rather than empty leftover space."
        ],
        nextStep:"Perspective & Construction is complete. Next: Head & Portrait \u2014 skull anatomy, the Loomis and Asaro methods, and constructing a believable human head from any angle."
      }
    ]
  }
];
