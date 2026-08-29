const CURRICULUM_2 = [
{
    id:'portrait', title:'Head & Portrait', status:'live', order:3,
    desc:'Skull anatomy, the Loomis and Asaro methods, head rotation in perspective, and every facial feature built as a 3D form — eyes, nose, lips, ears, and expression.',
    modules:[
      {
        id:'m15', plate:'15', title:'Understanding the Human Head', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'One-time reading + baseline', prereq:['m7'],
        hook:"Why memorizing a face never works, and what \"construction over copying\" actually means once the subject is a human head.",
        whyItMatters:[
          "Portraiture has the highest \"looks almost right but something's off\" failure rate of any drawing subject, because faces are the one category where every viewer is already an expert \u2014 everyone has spent a lifetime reading them. Beginners try to shortcut this with memorized formulas (\"eyes are one eye-width apart\") without understanding the 3D structure those formulas actually describe, which produces faces that are technically correct on paper and still read as subtly wrong.",
          "Every module in this arc builds toward one goal: constructing a believable head from imagination, from any angle, under any lighting \u2014 not reproducing one specific reference photo. The construction-versus-copying distinction from Module 1 gets tested harder here than anywhere else in the course so far."
        ],
        coreIdea:[
          "Professionals don't memorize facial features; they understand structure (the bone landmarks under the skin), proportion (the relationships between features), and how stylization is built on top of realistic structure rather than as a replacement for it. Even an exaggerated anime or cartoon face is a deliberate distortion of an underlying realistic structure — which is exactly why this arc starts with the skull and construction methods, not with drawing an eye.",
          "Applied to faces specifically: a memorized \"formula face\" looks identical from every angle because it was never built as a real 3D object. A constructed head, even a simplified one, can rotate convincingly because it was built with actual spatial logic — the same construction principle from Module 10, now applied to the most scrutinized subject in drawing."
        ],
        mistakes:[
          "Drawing a \"generic\" face from memorized proportions with no underlying 3D structure, producing a flat, mask-like result that falls apart from other angles.",
          "Studying individual features — eyes, nose, mouth — in isolation before understanding how they actually sit on the larger head structure.",
          "Copying one reference photo repeatedly instead of building genuine 3D understanding that transfers to a new photo or an imagined angle."
        ],
        proTips:[
          "Treat the skull, next module, as mandatory rather than optional — it's the single highest-leverage lesson in this entire arc.",
          "When a portrait \"looks off\" and it's not obvious why, check structure and proportion before checking individual feature details."
        ],
        practice:{
          warmup:"None required yet — this is a short conceptual module, not a drawing session.",
          daily:"Not applicable this module.",
          weekly:"Draw five faces entirely from memory, no reference, exactly as you'd draw them today. Date them and set them aside — you'll compare them to your work at the end of this arc.",
          challenge:"Look at several photos of the same person from different angles and identify which parts of the face visibly shift and which stay proportionally consistent across angles."
        },
        resources:[
          {type:'Course', title:'Draw the Head From Any Angle (free series overview)', creator:'Proko (Stan Prokopenko)', url:'https://www.classcentral.com/course/youtube-draw-the-head-from-any-angle-proko-55059', why:"An orientation page listing Proko's full free head-drawing series in order — the resource this entire arc draws from repeatedly, worth bookmarking now.", verified:true},
          {type:'Video', title:'How to Draw the Head / Face / Portrait — Part 1 (3 hours)', creator:'Steve Huston, via New Masters Academy', url:'https://www.youtube.com/watch?v=2T7cDY7YDsg', why:"A free, substantial lecture explicitly framing the head as structure plus gesture — the same big-picture idea this module opens with, from a different well-respected instructor.", verified:true}
        ],
        quiz:[
          {q:"Why does this module say memorized facial proportions alone tend to fail?", options:["They're always mathematically wrong","They describe a 3D structure without building it, so the result doesn't hold up from other angles","Memorization is illegal in art schools","Proportions never matter"], correct:1, explain:"A formula without underlying structure looks the same from every angle because it was never built as a real 3D object."},
          {q:"What does this arc build toward, according to this module?", options:["Copying one reference photo perfectly","Constructing a believable head from imagination, from any angle, under any lighting","Memorizing ten generic face templates","Skipping straight to facial expressions"], correct:1, explain:"The whole arc is aimed at construction that generalizes, not reproduction of one specific image."},
          {q:"Even a highly stylized anime or cartoon face is described in this module as:", options:["Unrelated to realistic anatomy","A deliberate distortion of an underlying realistic structure","Purely random design choices","Impossible to construct"], correct:1, explain:"Stylization is a deliberate distortion built on top of real structure, not a replacement for understanding it."}
        ],
        checklist:[
          "I can explain, in my own words, why memorized proportions alone tend to produce faces that look subtly wrong.",
          "I understand the construction-versus-copying distinction as it applies specifically to heads.",
          "I have completed a five-face baseline memory drawing and set it aside for later comparison.",
          "I can identify which parts of a face tend to shift across viewing angles and which stay proportionally stable."
        ],
        nextStep:"The Skull — the bone structure every facial feature you'll ever draw is quietly following instructions from."
      },
      {
        id:'m16', plate:'16', title:'The Skull', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'20\u201325 min/day', prereq:['m15','m7'],
        hook:"Every facial feature you'll ever draw is following instructions written by the bone underneath it.",
        whyItMatters:[
          "Every subsequent module in this arc — proportions, Loomis, Asaro, individual features — is describing a consequence of skull structure. Skipping the skull to get faster to the \"fun parts\" like eyes and expressions is the most common shortcut that caps a portrait artist's ceiling, because it means every later lesson gets memorized instead of understood."
        ],
        coreIdea:[
          "Major landmarks worth knowing by feel: the <b>cranium</b> (the rounded braincase), <b>brow ridge</b>, <b>zygomatic arch</b> (cheekbone), <b>eye sockets</b>, <b>nasal cavity</b>, and <b>jaw / mandible</b>. Each one directly explains a facial feature's placement that would otherwise seem arbitrary — the brow ridge is why eyebrows sit where they do and why eye sockets cast a natural shadow; the zygomatic arch is why cheekbone highlights and the hollow beneath them exist; the jaw hinge is why mouths open the way they do.",
          "Skull shape varies meaningfully with age: a child's skull has a proportionally larger cranium and smaller jaw and face than an adult's, which is exactly why simply shrinking an adult face never reads as a convincing child. It varies to a lesser degree by sex too, typically a somewhat more pronounced brow ridge and jaw in male skulls, though individual variation is large enough that this is a tendency, not a rule.",
          "The skull isn't memorized as a flat anatomy-chart image. It's understood as a simplified 3D form, the same way Module 7 treated a sphere or a cube, meant to be rotated and checked from any angle — which is exactly the bridge into the Loomis method a couple of modules from now."
        ],
        mistakes:[
          "Skipping skull study entirely to jump straight to surface features like eyes and lips.",
          "Treating the skull as a flat reference image to copy rather than a 3D form to rotate and understand from multiple angles.",
          "Drawing a child's face as a simple scaled-down adult face, ignoring the real skeletal proportion differences."
        ],
        proTips:[
          "Draw the skull from the same three or four angles repeatedly — front, profile, three-quarter, tilted — until its landmarks feel automatic before moving on.",
          "Whenever a feature's placement feels arbitrary later in this arc, trace it back to a skull landmark. It almost never actually is arbitrary."
        ],
        practice:{
          warmup:"Draw a simplified skull shape — just the major masses: cranium, jaw, cheekbone — from the front, in under two minutes.",
          daily:"Draw the skull's major landmarks — cranium, brow ridge, zygomatic arch, jaw — from a new angle each day this week.",
          weekly:"Compare a simplified adult skull to a simplified child skull side by side, labeling at least three proportional differences.",
          challenge:"Draw the same simplified skull from four angles — front, profile, three-quarter, tilted up — in one sitting, keeping landmark placement consistent across all four."
        },
        resources:[
          {type:'Video', title:'How to Draw the Head / Face / Portrait — Part 1 (3 hours)', creator:'Steve Huston, via New Masters Academy', url:'https://www.youtube.com/watch?v=2T7cDY7YDsg', why:"A free sample from NMA's paid library that opens with exactly this module's subject — basic skull and head structure using simple forms — before moving into individual features.", verified:true}
        ],
        quiz:[
          {q:"Why does the brow ridge matter for drawing eyebrows convincingly?", options:["It doesn't, eyebrows are unrelated to bone structure","It's the bone landmark that explains where eyebrows sit and why eye sockets cast a natural shadow","It only matters for older subjects","It affects hair color"], correct:1, explain:"Eyebrow placement and eye-socket shadow both trace back to the brow ridge underneath."},
          {q:"Why doesn't simply shrinking an adult face produce a convincing child's face?", options:["Children's faces have no proportional differences from adults","A child's skull has a proportionally larger cranium and smaller jaw than an adult's","It's a stylistic preference only","Scaling always works fine"], correct:1, explain:"The actual skeletal proportions differ, not just the overall size — scaling alone misses that."},
          {q:"How does this module recommend treating the skull, structurally?", options:["As a flat reference image to copy once","As a simplified 3D form to be rotated and understood from multiple angles","As unnecessary for stylized art","As something to memorize as a chart, not draw"], correct:1, explain:"Same approach as Module 7's basic forms — rotate it, check it from angles, build real spatial understanding."}
        ],
        checklist:[
          "I can name and roughly place the cranium, brow ridge, zygomatic arch, eye sockets, and jaw on a simplified skull.",
          "I can draw a simplified skull from at least three different angles.",
          "I can describe at least two proportional differences between a child's and an adult's skull.",
          "I can connect at least one facial feature's placement directly back to a specific skull landmark."
        ],
        nextStep:"Proportions — the relationships between features that make a constructed head read as a specific, believable individual."
      },
      {
        id:'m17', plate:'17', title:'Proportions', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20 min/day', prereq:['m16'],
        hook:"The classical measuring system behind \"the eyes are one eye-width apart\" — and why it's a starting average, not a rule everyone actually follows.",
        whyItMatters:[
          "Proportion systems give you a reliable starting average to construct from, especially when working from imagination with no reference. Without one, beginners tend to place features by guesswork, and small placement errors compound into a face that reads as \"wrong\" even when no single feature is badly drawn.",
          "The point of learning a proportion system isn't to apply it rigidly forever — real individual faces deviate from the average constantly, and that deviation is exactly what makes a specific face look like itself rather than a generic template. The system is a scaffold for beginners and a diagnostic check for everyone, not a cage."
        ],
        coreIdea:[
          "The classical face is often divided into <b>vertical thirds</b>: hairline to brow, brow to base of nose, and base of nose to chin, roughly equal in an average adult face. This gives a fast structural check even before individual features are placed.",
          "Horizontally, the classical guide places the eyes at roughly the vertical midpoint of the whole head (not the face — the whole head, including the cranium above), with roughly one eye-width of space between the two eyes, and the head reading as roughly five eye-widths across at its widest point.",
          "These are population averages useful as a starting construction, not fixed laws — real faces routinely deviate, and deliberate deviation from the average is a large part of what stylization and individual likeness actually are. A proportion system tells you where to start measuring from, not where every face must end up.",
          "Comparative measurement, from Module 5, applies directly here: rather than guessing feature placement outright, measure one relationship against another (brow-to-nose distance against nose-to-chin distance, for example) the same way you'd sight-measure a still life."
        ],
        mistakes:[
          "Applying proportion averages as if they were strict rules that every individual face must match exactly.",
          "Guessing feature placement instead of using comparative measurement to check it.",
          "Learning the proportion system once and never rechecking a drawing against it as work progresses.",
          "Placing the eyes at the midpoint of the visible face instead of the midpoint of the whole head including the cranium — a very common placement error."
        ],
        proTips:[
          "Use the thirds and eye-width guides as a fast diagnostic check partway through a drawing, not just as a starting grid.",
          "When a specific face looks \"off\" from the average, that deviation is usually part of what makes it look like that particular person — don't correct it back toward the average by default.",
          "Practice the proportion system on invented, imaginary faces as much as on real references, since imagination is where a beginner's guessing habit shows up hardest."
        ],
        practice:{
          warmup:"Draw a simple oval and mark the classical vertical thirds and the eye-line at the head's vertical midpoint, without adding any features yet.",
          daily:"Construct one face using the full proportion guide — thirds, eye-line, eye-width spacing — before adding any feature detail.",
          weekly:"Take a real reference photo and measure how much it actually deviates from the classical average at each guideline. Note which deviations feel like they define that person's likeness.",
          challenge:"Construct three different imagined faces using the same proportion guide as a starting point, then deliberately push each one's proportions in a different direction to make them read as distinct individuals."
        },
        resources:[
          {type:'Course', title:'Quickly Draw Heads with the Loomis Method — Part 1', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/quickly-draw-heads-with-the-loomis-method-part-1', why:"Teaches the same thirds-and-eye-width proportion system this module covers, as part of a complete construction method rather than an isolated measuring chart.", verified:true}
        ],
        quiz:[
          {q:"In the classical proportion system, where does the eye-line typically sit?", options:["At the bottom of the chin","At the vertical midpoint of the whole head, including the cranium","At the top of the hairline","There's no standard guideline for eye placement"], correct:1, explain:"A very common beginner error is placing the eye-line at the midpoint of the visible face instead of the whole head."},
          {q:"How does this module recommend treating proportion averages?", options:["As strict rules every face must match exactly","As a starting scaffold and diagnostic check, not a cage","As irrelevant to real drawing","As only useful for realistic styles, never stylized ones"], correct:1, explain:"They're a reliable starting point and a check-in tool — deviation from them is often what makes a face look like a specific person."},
          {q:"What technique from Module 5 applies directly to checking facial proportions?", options:["Blind contour drawing","Comparative measurement — measuring one relationship against another","Negative space drawing only","Gesture drawing"], correct:1, explain:"Measuring brow-to-nose against nose-to-chin, for example, is the same sighting principle from Module 5 applied to a face."}
        ],
        checklist:[
          "I can divide a simplified head into the classical vertical thirds.",
          "I can correctly place the eye-line at the vertical midpoint of the whole head, not just the visible face.",
          "I can use comparative measurement to check one facial relationship against another.",
          "I can explain why deviation from the proportion average is often what creates individual likeness."
        ],
        nextStep:"The Loomis Method — the single most widely taught head-construction system, combining the skull and proportions from these last two modules into one repeatable process."
      },
      {
        id:'m18', plate:'18', title:'The Loomis Method', difficulty:'Intermediate',
        studyTime:'35 min', practiceTime:'25\u201330 min/day', prereq:['m16','m17'],
        hook:"The single most widely taught head-construction system in illustration — a sphere, a side-plane, and a set of guidelines that work from any angle.",
        whyItMatters:[
          "The Loomis method, published by Andrew Loomis in his 1956 book Drawing the Head and Hands, has remained the dominant head-construction system in illustration instruction for a specific reason: it's geometric rather than purely anatomical, which means a beginner can start placing a sphere and a side-plane long before they've memorized the zygomatic arch by name. It generalizes to any angle once the underlying logic clicks, rather than requiring a separate memorized template per angle.",
          "This is the module where the skull (Module 16) and proportions (Module 17) stop being separate lessons and combine into one repeatable construction process — the same combine-and-cut logic from Module 10, applied specifically to the head."
        ],
        coreIdea:[
          "The core Loomis construction: start with a <b>sphere</b> for the cranium, then carve or attach a flat <b>side-plane</b> for the face, positioned and angled based on where the head is turned. Horizontal guidelines — <b>brow line</b>, <b>eye line</b>, <b>nose line</b>, <b>mouth line</b> — wrap around the sphere and side-plane, curving with the form rather than staying flat, which is what makes the whole system work convincingly at an angle rather than only from straight-on.",
          "The <b>ear-line</b> and <b>jaw construction</b> extend down from the side-plane, connecting the cranium sphere to the lower face and chin, closing the loop between the skull structure from Module 16 and the proportion guides from Module 17.",
          "Because it's geometric scaffolding rather than a memorized template, the Loomis sphere can be rotated to any angle, and the guidelines rotate with it — which is exactly what makes it useful for imaginative work, not just copying a reference photo directly.",
          "Loomis's own construction isn't the drawing itself — it's scaffolding the final drawing rests on and gets refined away from, the same relationship construction lines have had to a finished drawing since Module 10."
        ],
        mistakes:[
          "Treating the finished Loomis sphere-and-guidelines construction as the final drawing instead of scaffolding to refine and eventually draw over.",
          "Keeping guidelines perfectly flat and straight even when the head is turned or tilted, instead of letting them curve around the sphere's rotation.",
          "Trying to memorize a separate template per angle instead of understanding the sphere-and-side-plane logic that generalizes to any angle.",
          "Skipping straight to this module without the skull and proportion foundation from the previous two — the construction makes far less sense without that context."
        ],
        proTips:[
          "Practice the construction on the same average head shape repeatedly before adjusting it for individual head types — get the standard system automatic first.",
          "When a head is tilted or turned, adjust the guideline curves before adjusting anything else. Getting the curved guidelines right first makes everything that follows easier.",
          "A physical or digital 3D reference of the Loomis construction, rotated to match your intended angle, is a legitimate aid while this is still new — it's a scaffolding tool, not a shortcut that skips learning."
        ],
        practice:{
          warmup:"Draw the basic Loomis sphere and side-plane from the front, adding only the four horizontal guidelines — brow, eye, nose, mouth.",
          daily:"Construct a full Loomis head from a new angle each day — front, three-quarter, profile, tilted up, tilted down — keeping the guideline curves consistent with each rotation.",
          weekly:"Construct the same imagined head from three different angles in one sitting, checking that proportions stay consistent across all three.",
          challenge:"Adjust the standard Loomis construction to build a deliberately different head type — notably wider, narrower, longer-jawed — while keeping the underlying sphere-and-guideline logic intact."
        },
        resources:[
          {type:'Course', title:'Quickly Draw Heads with the Loomis Method — Part 1', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/quickly-draw-heads-with-the-loomis-method-part-1', why:"A free, direct introduction to the full construction taught in this module, from the course most commonly credited with popularizing Loomis's method for a new generation.", verified:true},
          {type:'Course', title:'Draw ANY Head Type with the Loomis Method — Part 2', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/draw-any-head-type-with-the-loomis-method-part-2', why:"Free continuation covering how to adjust the standard construction for head types that don't match the average — directly matches this module's stretch challenge.", verified:true},
          {type:'Book', title:'Drawing the Head and Hands', creator:'Andrew Loomis', url:'', why:"The original 1956 source. Still under active copyright, so this is worth borrowing from a library or buying a legitimate reprint (Titan Books publishes an official edition) rather than a scanned copy — not worth reading in a version that isn't legitimately licensed.", verified:true}
        ],
        quiz:[
          {q:"What are the two core building blocks of the Loomis head construction?", options:["Two overlapping cubes","A sphere for the cranium and a flat side-plane for the face","A cylinder and a cone","A single flat oval"], correct:1, explain:"The sphere plus side-plane combination is the geometric core the rest of the construction builds from."},
          {q:"Why do the horizontal guidelines (brow, eye, nose, mouth) curve rather than stay flat?", options:["It's just a stylistic choice","They wrap around the sphere's actual rotation, which is what makes the system work at an angle","Curved lines are easier to erase","They only curve in profile view"], correct:1, explain:"Flat guidelines only work face-on; curving them with the form is what makes the construction hold up at any angle."},
          {q:"According to this module, what is the Loomis construction itself?", options:["The finished drawing","Scaffolding the final drawing rests on and gets refined away from","A style choice for cartoon art only","A replacement for learning the skull"], correct:1, explain:"It's construction, not the final line art — the same relationship as any construction lines since Module 10."}
        ],
        checklist:[
          "I can construct a basic Loomis head — sphere, side-plane, four guidelines — from the front.",
          "I can construct the same head from a three-quarter and a profile angle, curving the guidelines correctly.",
          "I can adjust the standard construction to build a head type that deviates from the average.",
          "I treat the Loomis construction as scaffolding to refine, not as the finished drawing."
        ],
        nextStep:"The Asaro Head — a second, plane-based construction system focused specifically on how light and shadow behave on the head."
      },
      {
        id:'m19', plate:'19', title:'The Asaro Head', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'20\u201325 min/day', prereq:['m16','m18'],
        hook:"A faceted, planar version of the head built specifically to make light and shadow behave predictably — and to strip away curves until only structure is left.",
        whyItMatters:[
          "The Loomis method, from the last module, is primarily a proportion and placement system. The Asaro head, created by fine artist John Asaro in 1976, solves a different problem: it simplifies the head's continuous curved surfaces into flat, faceted planes specifically so that where light and shadow fall becomes predictable and easy to reason about, rather than an intuitive guess.",
          "This connects the head-construction work in this arc directly back to the light logic from Module 11. Shading a portrait convincingly requires knowing which direction a given patch of skin is actually facing in 3D space — the Asaro head makes that explicit by removing the curves and leaving only flat, clearly-angled planes."
        ],
        coreIdea:[
          "The Asaro head reduces the continuous, curved surface of a real head into a set of flat planes — forehead, temple, cheek, jaw, and so on — each facing a distinct direction. Because each plane is flat and faces one clear direction, it's either fully lit, fully in shadow, or somewhere in a predictable gradient between the two, which makes the light logic from Module 11 far easier to apply correctly.",
          "A classic training exercise, and a genuinely useful one to actually do, is shading an Asaro head using only two values — one light tone, one dark tone, no gradient — which forces a clear light-versus-shadow decision on every single plane instead of hedging with a middle gray. Once that two-value version reads convincingly as a head, more values can be reintroduced with much more confidence.",
          "Form shadow (a plane turned away from the light) and cast shadow (shadow thrown by one part of the head onto another — the nose casting onto the cheek, the brow casting into the eye socket) both appear clearly on a planar Asaro head, making it a useful bridge back to Module 11's shadow vocabulary applied specifically to a face.",
          "The official Asaro Head is a physical sculpted reference sold by John Asaro's studio; it isn't required to benefit from the concept, since the same planar thinking can be practiced by simplifying any head reference, photo, or the Loomis construction from the previous module into flat planes yourself."
        ],
        mistakes:[
          "Jumping straight to smooth, blended shading on a portrait without ever practicing the planar, two-value version first.",
          "Treating the Asaro head as a style choice rather than a training exercise meant to be internalized and then moved past.",
          "Confusing form shadow (a plane simply facing away from light) with cast shadow (a shadow thrown by one feature onto another) when shading a face.",
          "Skipping straight to many subtle value gradations before the underlying light-versus-shadow structure is confidently understood in just two values."
        ],
        proTips:[
          "Do the two-value shading exercise on the same simplified head from multiple light directions — front-lit, side-lit, top-lit — to feel how dramatically the same planes respond to a different light source.",
          "Practice simplifying a real photo reference into Asaro-style flat planes before shading it, even without an actual Asaro model to reference.",
          "Once the two-value exercise feels confident, add exactly one middle value before jumping to full continuous gradients — three values, not fifteen."
        ],
        practice:{
          warmup:"Simplify a simple head shape into five or six flat planes — forehead, cheek, jaw, temple, chin — with no shading yet, just the plane divisions.",
          daily:"Shade a simplified planar head using exactly two values under one consistent light source, alternating the light direction each day.",
          weekly:"Take the Loomis construction from Module 18 and shade it using Asaro-style flat planes and two values, connecting both systems in one drawing.",
          challenge:"Shade the same planar head under three different light directions — front, side, top — using only two values each time, and compare how differently the same structure reads."
        },
        resources:[
          {type:'Article', title:'The Asaro Head: How to Master the Planes of the Head', creator:'Buesken Art', url:'https://bueskenart.com/asaro-head/', why:"A free, specific walkthrough of the two-value shading exercise and the form-shadow/cast-shadow distinction this module covers, with the actual reasoning behind each step.", verified:true}
        ],
        quiz:[
          {q:"What problem is the Asaro head specifically designed to solve?", options:["Making noses easier to draw","Making it predictable where light and shadow fall, by flattening curved surfaces into clear planes","Teaching hair rendering","Replacing the skull entirely"], correct:1, explain:"Flat, clearly-angled planes make the light-versus-shadow decision explicit instead of an intuitive guess."},
          {q:"What's the point of the two-value shading exercise on an Asaro head?", options:["It's faster than using more values","It forces a clear light-or-shadow decision on every plane instead of hedging with gray", "It's required by copyright","It only works on female heads"], correct:1, explain:"Removing the middle ground forces a real decision on each plane, building confidence before adding subtlety."},
          {q:"What's the difference between form shadow and cast shadow on a face?", options:["There is no difference","Form shadow is a plane facing away from light; cast shadow is thrown by one feature onto another, like the nose onto the cheek","Cast shadow only happens at night","Form shadow only applies to the forehead"], correct:1, explain:"Same core distinction from Module 11, now applied specifically to facial planes like the nose and cheek."}
        ],
        checklist:[
          "I can simplify a head shape into five or six clear flat planes.",
          "I can shade a simplified planar head using exactly two values under one light source.",
          "I can identify at least one form shadow and one cast shadow on a simplified face.",
          "I can shade the same planar head convincingly under at least two different light directions."
        ],
        nextStep:"Head Rotation — applying both construction systems from this module and the last to a head turning through space, not just sitting still."
      },
      {
        id:'m20', plate:'20', title:'Head Rotation', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'25\u201330 min/day', prereq:['m18','m19'],
        hook:"A head that only works from one angle isn't constructed, it's memorized — this module is where that gets tested.",
        whyItMatters:[
          "Everything in this arc so far has been building toward one specific capability: rotating a head through space with the construction staying consistent, rather than having to re-learn the face from scratch at every new angle. This is the actual payoff of choosing a geometric system like Loomis over pure memorization back in Module 18 — geometry rotates predictably; memorized templates don't."
        ],
        coreIdea:[
          "Rotation breaks down into three independent axes, and it's worth practicing each one in isolation before combining them: <b>tilt</b> (chin up or down, nodding), <b>turn</b> (left or right, like shaking the head), and <b>roll</b> (tilting the head sideways toward a shoulder, like a curious head-tilt). Real poses usually combine two or three of these at once, but isolating them first makes each one's effect easier to actually see and internalize.",
          "As the Loomis sphere rotates, its guidelines — brow, eye, nose, mouth — curve and shift together, staying evenly spaced along the sphere's actual surface rather than staying evenly spaced on the flat page. This is the single most common breakdown point for beginners attempting rotation: the guidelines get drawn as if the page were flat rather than as if they were wrapped around a rotating 3D sphere.",
          "The ear-line is an especially reliable rotation check, since the ears sit at a consistent height relative to the brow and nose lines regardless of rotation — if the ears end up looking obviously wrong relative to the other guidelines, the rotation itself is usually the actual error, not the ear.",
          "Extreme angles — looking almost straight down from above, or straight up from below — push foreshortening (from Module 7's perspective concepts) to its limit on the head specifically, compressing features that would otherwise be evenly spaced. These are worth deliberately practicing rather than avoided, since they expose any weakness in the underlying construction immediately."
        ],
        mistakes:[
          "Keeping guideline spacing even on the flat page instead of even along the sphere's actual curved surface as it rotates.",
          "Practicing only gentle three-quarter turns and avoiding extreme angles, which hides construction weaknesses instead of fixing them.",
          "Combining tilt, turn, and roll all at once from the very start instead of isolating each axis individually first.",
          "Losing track of the ear-line during rotation, which is usually the fastest way to catch that a rotation has gone wrong somewhere else."
        ],
        proTips:[
          "Practice each rotation axis — tilt, turn, roll — completely in isolation before ever combining two or three together.",
          "Use the ear-line as a running diagnostic during rotation practice — if it looks wrong, the actual error is almost always upstream of it.",
          "Deliberately practice extreme up and down angles early rather than avoiding them. They're uncomfortable at first specifically because they expose real construction gaps."
        ],
        practice:{
          warmup:"Draw the same Loomis head three times, rotating only the tilt axis — neutral, chin up, chin down — keeping everything else identical.",
          daily:"Construct one head at a randomly chosen combination of tilt, turn, and roll each day, checking guideline curvature and ear-line placement carefully.",
          weekly:"Draw the same head at five different rotations in a single sitting, arranged in a row, checking that proportions stay genuinely consistent across all five.",
          challenge:"Construct a head at an extreme angle — looking almost straight down or straight up — and identify exactly which part of the construction was hardest to keep consistent."
        },
        resources:[
          {type:'Course', title:'Intuitive Portrait Sketching with the Loomis Method — Part 3', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/intuitive-portrait-sketching-with-the-loomis-method-part-3', why:"Continues directly from the two Loomis lessons in Module 18, specifically covering tilt, turn, and roll as the head moves through space.", verified:true}
        ],
        quiz:[
          {q:"What are the three independent axes of head rotation covered in this module?", options:["Zoom, pan, rotate","Tilt, turn, and roll","Light, shadow, and form","Front, back, and side"], correct:1, explain:"Tilt (nodding), turn (shaking side to side), and roll (sideways head-tilt) are the three axes worth isolating."},
          {q:"What's the most common beginner breakdown point when rotating a Loomis construction?", options:["Drawing too slowly","Keeping guideline spacing even on the flat page instead of along the sphere's actual curved surface","Using the wrong pencil grade","Choosing an unrealistic hairstyle"], correct:1, explain:"Guidelines need to curve and compress the way they would on an actual rotating sphere, not stay evenly spaced on paper."},
          {q:"Why is the ear-line described as a reliable rotation check?", options:["Ears never move regardless of rotation","Ears sit at a consistent height relative to brow and nose lines, so if they look wrong, the rotation itself is usually the actual error","Ears are the easiest feature to draw","Ear placement doesn't matter for likeness"], correct:1, explain:"If the ear-line looks off, that's usually a signal the rotation logic broke down somewhere, not that the ear specifically is wrong."}
        ],
        checklist:[
          "I can construct a head at a pure tilt, a pure turn, and a pure roll, in isolation.",
          "I can construct a head combining two or more rotation axes at once.",
          "I keep guideline curvature consistent with the sphere's actual rotation rather than the flat page.",
          "I can use the ear-line as a diagnostic check when a rotated construction looks wrong."
        ],
        nextStep:"Perspective of the Head — applying full one-, two-, and three-point perspective logic to extreme head angles and foreshortening."
      },
      {
        id:'m21', plate:'21', title:'Perspective of the Head', difficulty:'Intermediate\u2013Advanced',
        studyTime:'25 min', practiceTime:'20\u201325 min/day', prereq:['m8','m20'],
        hook:"What happens when a head isn't just rotated but genuinely close to the viewer, or seen from a dramatic camera angle — and why that's a different problem than rotation alone.",
        whyItMatters:[
          "Module 20 covered rotation — turning a head through space while keeping it at a consistent, comfortable distance from the viewer. This module covers what changes when perspective itself gets involved: extreme foreshortening, a camera very close to the face, or an exaggerated low or high angle. These show up constantly in comics, animation, and concept art, and they break constructions that only work at gentle, \"portrait photography\" distances."
        ],
        coreIdea:[
          "The perspective concepts from Module 8 — horizon line, vanishing points, foreshortening — apply to the head exactly the way they apply to any other constructed form. A head viewed from below has its own local horizon line and vanishing logic, the same way a building does; the Loomis sphere and guidelines from Module 18 still apply, they just have to be built with that perspective logic active rather than assumed away.",
          "Foreshortening compresses features unevenly depending on distance from the viewer: a nose pointing almost directly at the camera in an extreme close-up appears dramatically shorter and wider than it would from a comfortable middle distance, while features further from the camera (the ears, the back of the cranium) compress less. This is the head-specific version of the general foreshortening concept from Module 8.",
          "Camera distance changes apparent proportion even without any rotation at all — a very close camera exaggerates the size of whatever's nearest (often the nose) relative to what's further away (the ears), which is why extreme close-up portraits often look subtly \"off\" if drawn with standard middle-distance proportions instead of accounting for the compression.",
          "Extreme low-angle and high-angle head views combine rotation (Module 20) with genuine perspective foreshortening at the same time, which is why they're one of the harder skills in this whole arc — and exactly why they're placed near the end of the construction half, after both rotation and perspective fundamentals are already in place."
        ],
        mistakes:[
          "Applying standard middle-distance proportions to an extreme close-up without accounting for how camera proximity itself distorts apparent size.",
          "Treating an extreme low or high angle as pure rotation, ignoring the genuine perspective foreshortening layered on top of it.",
          "Skipping this module's drills because extreme angles feel too difficult — they're exactly the angles that expose whether the earlier construction modules actually generalized or were just memorized for comfortable angles.",
          "Forgetting that the head has its own local horizon and vanishing logic, just like any other perspective-constructed form from Module 8."
        ],
        proTips:[
          "Before drawing an extreme angle, decide the camera distance and the vertical angle separately — they distort the head in different, combinable ways, and conflating them makes the construction harder to reason through.",
          "Practice the same head at a comfortable middle distance and then again as an extreme close-up, comparing directly how much the apparent proportions shift.",
          "When an extreme angle isn't working, step back to the plain rotation version from Module 20 first, confirm that's solid, then add the perspective distortion on top."
        ],
        practice:{
          warmup:"Draw a simple head shape at a comfortable middle distance, then redraw the same head as an extreme close-up, comparing the proportion shift directly.",
          daily:"Construct one head at a deliberately extreme angle each day — sharply from below, sharply from above, extreme close-up — applying Module 8's perspective logic on top of Module 20's rotation.",
          weekly:"Take one simple head construction and draw it at three camera distances — far, medium, extreme close — from the same rotation angle, isolating distance as the only variable.",
          challenge:"Construct a head from a dramatic low angle, as if looking up at someone standing over you, combining rotation, tilt, and genuine perspective foreshortening in one drawing."
        },
        resources:[
          {type:'Video', title:'How to Draw the Head from Extreme Angles', creator:'Proko (Stan Prokopenko)', url:'https://www.classcentral.com/course/youtube-draw-the-head-from-any-angle-proko-55059', why:"Part of Proko's free head series, specifically addressing the extreme foreshortened angles this module covers, building directly on the Loomis and rotation lessons already used in this arc.", verified:true}
        ],
        quiz:[
          {q:"What does this module cover that Module 20 (Head Rotation) doesn't?", options:["Facial expressions","Genuine perspective foreshortening from camera distance and extreme angles, not just rotation at a comfortable distance","Hair rendering","Color theory"], correct:1, explain:"Rotation alone assumes a comfortable, consistent distance; this module adds real perspective distortion from proximity and extreme angles."},
          {q:"Why can an extreme close-up portrait look subtly \"off\" if drawn with standard proportions?", options:["Standard proportions are always wrong","Camera proximity exaggerates the size of whatever's nearest relative to what's further away, and standard proportions don't account for that", "Close-ups should never be attempted","Only professional cameras cause this effect"], correct:1, explain:"Proximity-based foreshortening changes apparent proportion even without any rotation at all."},
          {q:"Why are extreme low and high head angles considered one of the harder skills in this arc?", options:["They require special pencils","They combine rotation and genuine perspective foreshortening at the same time","They're actually easier than straight-on views","They only apply to fantasy art"], correct:1, explain:"Two distortions stack at once — rotation and perspective — which is exactly why they're placed near the end of this arc's construction half."}
        ],
        checklist:[
          "I can explain the difference between rotating a head and applying perspective foreshortening to it.",
          "I can construct the same head at two different camera distances and describe how the apparent proportions shift.",
          "I can construct a head from a deliberately extreme low or high angle.",
          "I can identify the head's local horizon line and vanishing logic in a given perspective view."
        ],
        nextStep:"Planes of the Face — completing the structural half of this arc by mapping every major facial plane before moving on to individual features."
      },
      {
        id:'m22', plate:'22', title:'Planes of the Face', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'20\u201325 min/day', prereq:['m19','m11'],
        hook:"The complete plane map of the face — the last structural module before this arc moves on to individual features, and the direct link to how they'll all be lit.",
        whyItMatters:[
          "This module closes out the structural half of the Head & Portrait arc. Modules 15 through 21 built the head's overall structure, proportion, construction method, and rotation logic; this module maps every major facial plane in detail, which is the direct bridge into the next set of modules — individual features — since every eye, nose, and mouth sits on, and is shaded according to, the planes mapped here.",
          "Without this module, feature modules risk becoming a list of memorized shapes floating on a face. With it, each feature's placement and shading logic connects back to a specific, understood plane."
        ],
        coreIdea:[
          "Beyond the broad Asaro-style planes from Module 19, the face has smaller, specific planes worth knowing individually: the <b>forehead plane</b>, the <b>temple planes</b> (angled sharply back from the brow), the <b>nose bridge plane</b> and its side planes, the <b>cheek planes</b>, the <b>jaw planes</b>, the <b>chin plane</b>, and the transitional planes around the eye socket where the brow ridge, upper lid, and cheek all meet at different angles.",
          "Each plane's angle relative to a given light source directly determines whether it reads as lit, in core shadow, or somewhere in a gradient between — the exact same light logic from Module 11, now mapped onto specific, named facial geography instead of a generic sphere or cube.",
          "The transition zones between planes — where the forehead plane meets the temple plane, where the nose bridge meets the cheek — are where a lot of a portrait's structural believability actually lives. Beginners often smooth through these transitions too early, losing the plane change entirely and flattening the face's real structure.",
          "This plane map is what the next eight modules — eyes, eyebrows, nose, mouth, ears, proportions of individual features, expressions, and full integration — all sit on top of. Treat this module as the reference you'll keep returning to, not a one-time read."
        ],
        mistakes:[
          "Smoothing through plane transitions too early, losing the structural plane change that makes the face read as solid rather than flat.",
          "Learning individual features in the next several modules without connecting each one back to the specific plane it actually sits on.",
          "Treating the face as having only a few broad planes (as in the simplified Asaro exercise) once real feature and shading work begins, rather than the fuller, more specific plane map from this module.",
          "Ignoring how a single light source affects multiple adjacent planes differently based on each one's specific angle, rather than shading the whole face with one flat logic."
        ],
        proTips:[
          "Keep a personal reference sketch of this plane map nearby while working through the next several modules — it's meant to be consulted repeatedly, not memorized perfectly in one sitting.",
          "When shading a specific feature later in this arc and it isn't reading correctly, check which plane it actually sits on and whether that plane's light logic is being respected.",
          "Practice locating plane transitions — not just the plane centers — since that's where most of the structural information a viewer actually reads is concentrated."
        ],
        practice:{
          warmup:"On a simplified head, mark the forehead, temple, cheek, jaw, and chin planes with straight construction lines, no shading yet.",
          daily:"Shade one facial region — the eye socket transition, the nose bridge and its sides, the cheek-to-jaw transition — under one consistent light source, focused specifically on that region's plane changes.",
          weekly:"Shade a full simplified face, consciously naming each plane as you shade it and checking its logic against Module 11's light rules.",
          challenge:"Take a real reference photo, identify as many distinct facial planes as you can directly on a printout or overlay, and compare your plane map to how the actual shadows fall in the photo."
        },
        resources:[
          {type:'Article', title:'The Asaro Head: How to Master the Planes of the Head', creator:'Buesken Art', url:'https://bueskenart.com/asaro-head/', why:"Extends the broad plane thinking from Module 19 into the more specific transition areas this module focuses on, with concrete shading exercises.", verified:true},
          {type:'Video', title:'Shading Light and Form — Basics', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/shading-light-and-form-basics', why:"The light-logic fundamentals from Module 11, worth revisiting here specifically applied to facial planes rather than a generic sphere.", verified:true}
        ],
        quiz:[
          {q:"What is this module's role in the Head & Portrait arc?", options:["It's an optional bonus module","It maps the specific facial planes that every feature module afterward will sit on and be shaded according to","It replaces the need for the skull module","It only matters for stylized art"], correct:1, explain:"It's the direct bridge from head structure into the individual-feature modules that follow."},
          {q:"Why do beginners often lose structural believability at plane transitions, like forehead-to-temple?", options:["They use too much detail there","They smooth through the transition too early, losing the actual plane change","Transitions don't matter for likeness","Plane transitions should always be sharp lines"], correct:1, explain:"Smoothing away the plane change too soon flattens exactly the structural information a viewer reads as solidity."},
          {q:"According to this module, where does a lot of a portrait's structural believability actually live?", options:["Only in the eyes","In the transition zones between planes, like where the nose bridge meets the cheek","Only in hair rendering","Only in color choices"], correct:1, explain:"The transitions carry real structural information, not just the flat centers of each plane."}
        ],
        checklist:[
          "I can identify and mark the forehead, temple, nose, cheek, jaw, and chin planes on a simplified head.",
          "I can shade a facial plane transition without smoothing away the actual structural change.",
          "I can apply Module 11's light logic to a specific named facial plane, not just a generic sphere.",
          "I can compare my own plane map against a real reference photo's actual shadow pattern."
        ],
        nextStep:"The structural half of Head & Portrait is complete. Next: the facial features themselves — eyes, eyebrows, nose, mouth, ears, and expressions — each built as a 3D form sitting on the plane map from this module."
      },
      {
        id:'m23', plate:'23', title:'The Human Eye', difficulty:'Intermediate',
        studyTime:'30 min', practiceTime:'25\u201330 min/day', prereq:['m19','m22'],
        hook:"A sphere in a socket, a brow ridge acting as an awning, and two curved bowls of glass — not the almond outline most beginners start with.",
        whyItMatters:[
          "Eyes get more attention from beginners than any other feature, and more attention from viewers too — human vision is specifically tuned to read eyes and eye contact, which is exactly why an eye built as a flat outline instead of a real 3D form reads as instantly, uncannily wrong, even to someone who couldn't explain why.",
          "Everything in this module sits directly on structure already covered: the brow ridge from the skull (Module 16), the eye-socket plane from Asaro (Module 19), and the eye-line guideline from the Loomis construction (Module 18). This module is where those abstractions turn into a specific, renderable feature."
        ],
        coreIdea:[
          "The eye is built from two simplified forms first, details second. The <b>brow ridge</b> simplifies to a box tilted slightly back — its front plane is the forehead, its bottom plane sits directly beneath the eyebrow. The <b>eyeball</b> itself is simply a sphere, sitting inside the socket the brow ridge protects like an awning.",
          "The visible \"white\" of the eye (the <b>sclera</b>) is a sphere's surface, not a flat white shape — treating it as flat is a common and very visible beginner mistake. The <b>iris</b> is a slightly concave bowl set into that sphere, and the <b>cornea</b> covering it is a convex bowl, transparent, like a contact lens. Because the cornea is convex and the iris concave, they shade in <i>opposite</i> directions under the same light — understanding this pair is what makes a rendered eye look wet and dimensional instead of like a painted circle.",
          "The iris is only a true circle from straight-on. The further it rotates from center as the eye looks around, the more it compresses into an oval — the same ellipse-degree logic from Module 4 and Module 8, now applied to a five-millimeter circle instead of a wheel.",
          "Eyelid shape is asymmetric in a specific, consistent way: the upper lid is heavier and covers more than the lower, and the peak of the upper lid sits closer to the nose while the peak of the lower lid sits closer to the ear — drawing a symmetric \"almond\" or \"goldfish cracker\" shape is one of the most common beginner errors here. The tear duct sits lower than the vertical center of the lids, not centered between them.",
          "Placement: eyes sit on the eye-line established in Loomis construction, generally at the head's vertical midpoint. The horizontal spacing between the two eyes is, on average, about one eye-width — and a very common beginner mistake is drawing the eyes noticeably too large, since we intuitively treat eyes as the face's most important feature and over-compensate in size rather than through contrast and detail."
        ],
        mistakes:[
          "Treating the sclera as a flat white shape instead of the visible surface of a sphere, which needs its own subtle shading.",
          "Drawing symmetric, almond-shaped eyelids instead of the actual asymmetric peaks — upper lid heavier, peak closer to the nose; lower lid peak closer to the ear.",
          "Centering the tear duct between the lids instead of placing it lower, toward the bottom lid.",
          "Making the eyes too large to signal their importance, instead of using contrast, sharper edges, and detail to draw the eye there."
        ],
        proTips:[
          "Draw the brow ridge and eye socket as a simplified box-and-sphere construction before adding a single eyelash — the same construction-before-detail order from Module 10.",
          "Practice drawing the iris at five or six different gaze angles on the same simplified eyeball, watching the ellipse compress as it moves from center.",
          "Remember the cornea and iris shade in opposite directions — convex versus concave — and check this specifically whenever a rendered eye looks flat."
        ],
        practice:{
          warmup:"Draw the brow ridge as a tilted box and the eyeball as a sphere beneath it, no eyelids yet, from the front.",
          daily:"Draw one full eye — socket, sphere, iris, lids — from a new gaze direction each day, tracking how the iris ellipse changes.",
          weekly:"Draw a pair of eyes on a simplified head using the Loomis eye-line and correct one-eye-width spacing, checked with comparative measurement from Module 5.",
          challenge:"Draw the same eye in extreme close-up and at a normal portrait distance, comparing how much smaller and more schematic the details become at distance."
        },
        resources:[
          {type:'Video', title:'How to Draw Eyes — Anatomy and Structure', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-eyes-anatomy-and-structure', videoId:'u6-bCgRmcko', why:"A free, detailed lesson covering exactly this module's construction: brow ridge as a box, eyeball as a sphere, and the iris/cornea bowl relationship.", verified:true},
          {type:'Course', title:'How to Draw Facial Features (free series)', creator:'Proko (Stan Prokopenko)', url:'https://www.classcentral.com/course/youtube-how-to-draw-facial-features-proko-55060', why:"The free hub for this entire run of feature modules — eyes, nose, lips, and ears are all covered here in sequence.", verified:true}
        ],
        quiz:[
          {q:"What are the iris and cornea shaped like, and why does that matter for shading?", options:["Both flat discs — shading doesn't matter","The iris is a concave bowl and the cornea a convex bowl, so they shade in opposite directions under the same light","Both convex, shading the same way","Neither has a defined shape"], correct:1, explain:"Concave versus convex means opposite shading directions — this is what makes a rendered eye look wet and three-dimensional."},
          {q:"Where does the tear duct actually sit relative to the eyelids?", options:["Exactly centered between the lids","Lower, toward the bottom lid","Higher, toward the top lid","It isn't visible from any angle"], correct:1, explain:"The tear duct is lower than center, not symmetrically placed — centering it is a common beginner mistake."},
          {q:"A common beginner mistake with eye size is:", options:["Drawing them too small to be noticed","Drawing them too large, to signal their importance","Never drawing pupils","Placing both eyes at different heights on purpose"], correct:1, explain:"We intuitively over-size eyes because we treat them as most important — contrast and detail signal importance more reliably than size."}
        ],
        checklist:[
          "I can construct an eye starting from a tilted brow-ridge box and a spherical eyeball, before adding lid details.",
          "I can draw the asymmetric eyelid shape correctly — heavier upper lid, peaks offset toward nose and ear.",
          "I can draw the iris as a compressing ellipse as the gaze angle moves away from center.",
          "I can place a pair of eyes using the Loomis eye-line and roughly one-eye-width spacing."
        ],
        nextStep:"Eyebrows — the single feature that moves the most during expression, sitting directly on the brow ridge this module already covers."
      },
      {
        id:'m24', plate:'24', title:'Eyebrows', difficulty:'Intermediate',
        studyTime:'15 min', practiceTime:'15\u201320 min/day', prereq:['m23','m16'],
        hook:"The feature that moves more than any other during expression, and the one beginners draw as a floating line instead of hair following bone.",
        whyItMatters:[
          "Eyebrows are disproportionately important for two reasons: they sit directly on top of the brow ridge bone structure from Module 16, so their placement isn't a free artistic choice — it's dictated by anatomy underneath — and they are one of the two biggest drivers of legible facial expression (the mouth, in Module 26, is the other), which is why this module is placed as direct preparation for Module 29."
        ],
        coreIdea:[
          "Eyebrows follow the <b>brow ridge</b> from the skull — they aren't a floating shape drawn somewhere above the eye, they sit on and follow the curve of that bone. This is why eyebrow placement, unlike hairstyle, isn't really a free design choice once the underlying skull and Loomis construction (Modules 16 and 18) are set.",
          "Hair growth direction is consistent and specific: brow hair grows upward and outward near the nose, then angles progressively downward and outward toward the temple. Drawing every hair in the same direction, or in a uniform arc, is what makes an eyebrow look painted-on instead of grown.",
          "Thickness, arch height, and density vary by individual, age, and gender more than almost any other facial feature — which makes eyebrows one of the fastest ways to differentiate characters or push a likeness, once the underlying brow-ridge placement is correctly anchored.",
          "In expression work, eyebrows move largely as a unit relative to the brow ridge — raised for surprise, lowered and drawn together for anger or concentration, asymmetrically raised for skepticism. Module 29 covers this in depth; this module's job is making sure the eyebrow's resting placement and construction is solid first."
        ],
        mistakes:[
          "Drawing eyebrows as a floating shape disconnected from the brow ridge bone structure underneath.",
          "Rendering every brow hair in a uniform direction or arc instead of following the actual growth pattern — up and out near the nose, angling down and out toward the temple.",
          "Treating eyebrow shape as a fixed template applied to every character instead of a variable tied to age, individual, and intended expression.",
          "Placing eyebrows without reference to the Loomis brow-line guideline already established for the head."
        ],
        proTips:[
          "Draw the brow ridge first, then the eyebrow on top of it — never the reverse.",
          "Practice hair-direction strokes separately from full eyebrow shapes: short strokes fanning from the inner corner outward and down.",
          "Sketch the same simplified head with three different eyebrow thicknesses and arch heights to see how much a single feature can change perceived age and personality."
        ],
        practice:{
          warmup:"Draw the brow-ridge box from Module 23 five times, adding only a simple eyebrow line on top of each to confirm placement.",
          daily:"Draw one pair of eyebrows using correct hair-direction strokes, on a new simplified head each day.",
          weekly:"Draw the same head three times with different eyebrow thickness and arch, comparing how much the perceived age and personality shifts.",
          challenge:"Draw a face with the eyebrows only — no eyes, nose, or mouth — and see how much emotional information the eyebrows alone communicate."
        },
        resources:[
          {type:'Video', title:'How to Draw Eyes — Anatomy and Structure', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-eyes-anatomy-and-structure', videoId:'u6-bCgRmcko', why:"Covers the brow ridge in detail as part of the eye lesson — there isn't a separate free Proko lesson for eyebrows alone, so this is the most relevant free source for the underlying bone structure eyebrows sit on.", verified:true}
        ],
        quiz:[
          {q:"What determines where an eyebrow sits, more than anything else?", options:["Personal artistic choice with no anatomical basis","The brow ridge bone structure underneath it","Hair color","The nose's position"], correct:1, explain:"Eyebrows follow the brow ridge — placement isn't really a free choice once the skull and Loomis construction are set."},
          {q:"Which best describes real eyebrow hair growth direction?", options:["Uniformly in one direction across the whole brow","Upward and outward near the nose, angling downward and outward toward the temple","Always straight down","Random with no consistent pattern"], correct:1, explain:"The direction shifts progressively from inner to outer corner — uniform strokes read as painted-on rather than grown."},
          {q:"Along with the mouth, eyebrows are described in this module as:", options:["The least expressive facial feature","One of the two biggest drivers of legible facial expression","Irrelevant to expression","Only relevant in cartoon styles"], correct:1, explain:"Eyebrow and mouth position together carry most of the legible signal in an expression."}
        ],
        checklist:[
          "I draw eyebrows on top of an already-placed brow ridge, not as a floating independent shape.",
          "I can render eyebrow hair strokes following the correct inner-to-outer growth direction.",
          "I can vary eyebrow thickness and arch deliberately to shift perceived age or personality.",
          "I can identify how much expression an eyebrow pair alone communicates, without other features."
        ],
        nextStep:"The Nose — four major planes and the most commonly flattened feature in beginner portraits."
      },
      {
        id:'m25', plate:'25', title:'The Nose', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m22'],
        hook:"Half bone, half cartilage, four major planes — and the feature most likely to end up as a flat 2D outline with two holes for nostrils.",
        whyItMatters:[
          "The nose is frequently named by students, including in the actual course discussions behind this module's resources, as the hardest single feature to draw — it has fewer familiar landmarks than eyes or mouth, and its form changes more dramatically with head rotation and tilt than any other feature. Getting comfortable with it here pays off directly in every future portrait."
        ],
        coreIdea:[
          "The nose simplifies to <b>four major planes</b>: a top plane and two side planes running down the bridge, and a bottom plane. Establishing these four planes correctly, in the right proportion and perspective, matters more at first than any anatomical detail — there's no point refining details on top of a structure that's crooked or the wrong size.",
          "Structurally, the nose is half bone and half cartilage: the upper half of the bridge is the <b>nasal bone</b>, the lower half is <b>lateral cartilage</b>, wedging into the two pieces that form the <b>ball</b> of the nose. The <b>nostrils</b> (technically the alar fat, not cartilage) attach further back than the septum, like wings hanging off the ball.",
          "As the head turns from front to profile, the far side plane thins and eventually disappears, while the near side plane thickens — by full profile, even the top and bottom planes stop being visible. As the head tilts up or down, the bottom plane's visible height changes dramatically, and the nose tip appears to move toward or away from the eyes — a common beginner error is lowering the nose tip on an upward tilt instead of raising it.",
          "The <b>glabella</b> — the keystone-shaped area between the eyebrows, already introduced conceptually in the skull module — connects the nose directly to the brow ridge structure, and usually carries a subtle halftone linking the two eye sockets together."
        ],
        mistakes:[
          "Drawing the nose as a flat 2D outline, or worse, as two holes with no surrounding volume for the nostrils, wings, and septum.",
          "Adding anatomical detail before the four major planes are correctly proportioned and angled.",
          "Lowering the nose tip when the head tilts upward, instead of correctly raising it as the bottom plane becomes more visible.",
          "Ignoring how dramatically the far side plane thins and disappears as the head rotates toward profile."
        ],
        proTips:[
          "Block in the four major planes first, in very light lines you can erase, before adding a single anatomical detail.",
          "Use a carpenter's-eye check from Module 10: imagine the plane structure as a real 3D object and ask whether both sides are equally distant from center and correctly angled.",
          "Draw the same nose at five head rotations — front, three-quarter, profile, tilted up, tilted down — to build real angle-independent understanding rather than one memorized front view."
        ],
        practice:{
          warmup:"Block in the four major nose planes — top, two sides, bottom — on a simplified head, no anatomical detail yet.",
          daily:"Construct one full nose — planes, bridge, ball, wings, septum — from a new angle each day.",
          weekly:"Draw the same nose at five rotations in one sitting: front, three-quarter, profile, tilted up, tilted down.",
          challenge:"Find a reference photo with strong side lighting and shade a nose using only the four major planes plus core and cast shadow from Module 11, no fine detail."
        },
        resources:[
          {type:'Video', title:'How to Draw a Nose — Anatomy and Structure', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-a-nose-anatomy-and-structure', videoId:'nWZZ3SFmDS8', why:"Free lesson covering the exact four-plane construction and bone-versus-cartilage structure this module is built on.", verified:true},
          {type:'Video', title:'How to Draw a Nose — Step by Step', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-a-nose-step-by-step', why:"Follows directly from the anatomy lesson with a full rendering walkthrough: lay-in, two-value, dark accents, halftones, details.", verified:true}
        ],
        quiz:[
          {q:"What are the nose's four major planes?", options:["Front, back, left, right","Top, two sides, and bottom","Bone, cartilage, fat, skin","There's only one plane"], correct:1, explain:"Top, two side planes, and a bottom plane — establishing these correctly matters more at first than any anatomical detail."},
          {q:"What happens to the nose tip when the head tilts upward?", options:["It appears to lower toward the mouth","It appears to raise and get closer to the eyes, as the bottom plane becomes more visible","Nothing changes with head tilt","It disappears entirely"], correct:1, explain:"A common beginner mistake is lowering the tip on an upward tilt — it should rise as the bottom plane's visible area increases."},
          {q:"Structurally, the nose is:", options:["Entirely cartilage","Entirely bone","Roughly half bone (upper bridge) and half cartilage (lower bridge and ball)","Made of the same tissue as the ear only"], correct:2, explain:"The nasal bone forms the upper bridge; lateral cartilage forms the lower bridge and wedges into the ball of the nose."}
        ],
        checklist:[
          "I can block in the four major nose planes before adding any anatomical detail.",
          "I can explain, roughly, which parts of the nose are bone and which are cartilage.",
          "I can draw a nose convincingly across at least three head rotations.",
          "I correctly raise the nose tip, not lower it, when constructing an upward head tilt."
        ],
        nextStep:"The Mouth — built on a cylinder of teeth most beginners never realize is there."
      },
      {
        id:'m26', plate:'26', title:'The Mouth', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m22'],
        hook:"An inflated tuna can of teeth pushing the lips outward from underneath — the single most overlooked idea in beginner mouth drawing.",
        whyItMatters:[
          "The mouth is the other half of the expression equation alongside eyebrows (Module 24), and it's frequently drawn as a flat shape sitting directly on the skin, with no understanding of what's pushing it into its actual three-dimensional form. That missing piece — the teeth underneath — is the single most overlooked idea covered in this module."
        ],
        coreIdea:[
          "The lips are not flat against the face. Underneath them sits a cylindrical structure of teeth, simplified as an <b>inflated tuna can</b> — this tooth cylinder pushes the lips outward from behind, and the visible surface forms of the lips are a direct consequence of that underlying cylinder's shape.",
          "The lips' major planes run like a <b>three-step staircase</b> from the base of the nose down to the chin, alternating between top-facing and bottom-facing planes — in fact, viewed from profile, the entire front of the face reads as this same kind of stepped staircase.",
          "The top lip is made of three separate rounded forms, and the bottom lip of two — the middle form of the top lip, called the <b>tubercle</b>, wedges between the two forms of the bottom lip. Viewed at an angle, these forms visibly overlap each other, and that overlap is what reads as depth on a flat page.",
          "The corners of the lips, called <b>nodes</b>, are where a large number of expression muscles (the <b>orbicularis oris</b> and several others) attach and overlap, which is why the nodes visibly change shape more than almost any other part of the face during a smile or frown — this connects directly into Module 29's work on expression.",
          "Local value — how light or dark the lips read compared to surrounding skin — depends on skin tone and varies by individual, and lips typically show sharper, brighter highlights than skin does because of their slight moisture."
        ],
        mistakes:[
          "Drawing lips as a flat shape on the face with no awareness of the tooth cylinder pushing them outward from underneath.",
          "Treating the top and bottom lip as flat, undifferentiated shapes instead of three overlapping forms on top and two on the bottom.",
          "Ignoring the nodes at the corners, which is where most of a mouth's expressive movement actually originates.",
          "Outlining the lips too heavily instead of relying on value and edge quality to define their shape, per feedback the course community repeatedly gives on this exact mistake."
        ],
        proTips:[
          "Draw the tooth cylinder as a simplified rounded form first, then build the lips as skin stretched over it — the same construction-before-detail principle as every other feature in this arc.",
          "Practice the three-step staircase of planes in profile view specifically — it's the clearest way to see how the mouth actually protrudes from the face.",
          "When shading, separate the lips into two value groups first — light and shadow — before adding any halftone nuance, exactly as Module 12 teaches for any form."
        ],
        practice:{
          warmup:"Draw the tooth cylinder as a simple rounded cylinder shape, no lips yet, from the front and from profile.",
          daily:"Construct one full mouth — tooth cylinder, three-step staircase planes, top and bottom lip forms — from a new angle each day.",
          weekly:"Draw the same mouth in a neutral expression, a slight smile, and a slight frown, focused specifically on how the nodes change.",
          challenge:"Shade a mouth using only two values first — the same two-value discipline from the Asaro head exercise in Module 19 — before adding any halftone detail."
        },
        resources:[
          {type:'Video', title:'How to Draw Lips — Anatomy and Structure', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-lips-anatomy-and-structure', videoId:'Xq3aHSuKRyg', why:"Free lesson covering the tooth cylinder, staircase planes, and node anatomy this module is built directly from.", verified:true},
          {type:'Video', title:'How to Draw Lips — Step by Step', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-lips-step-by-step', why:"A full rendering walkthrough following the anatomy lesson, covering lay-in through final halftone detail.", verified:true}
        ],
        quiz:[
          {q:"What structure pushes the lips outward from underneath, according to this module?", options:["Nothing, lips sit flat on the face","A simplified cylinder of teeth, like an inflated tuna can","The nose","The jaw hinge alone"], correct:1, explain:"The tooth cylinder underneath is the single most overlooked idea in beginner mouth drawing, per this module."},
          {q:"How many separate forms make up the top and bottom lip?", options:["One flat form each","Three on top, two on the bottom","Five on top, one on the bottom","They have no distinct forms"], correct:1, explain:"The top lip's middle form, the tubercle, wedges between the bottom lip's two forms."},
          {q:"Why do the corners of the lips (the nodes) matter so much for expression?", options:["They don't affect expression at all","A large number of expression muscles attach and overlap there, so they move the most during a smile or frown","They're the only part of the mouth that changes color","They control eyebrow position"], correct:1, explain:"The nodes are where multiple muscles pull, making them the most visibly active part of the mouth during expression."}
        ],
        checklist:[
          "I can construct a mouth starting from a simplified tooth cylinder before adding lip detail.",
          "I can draw the three-step staircase of planes from the base of the nose to the chin, especially in profile.",
          "I can draw the top lip's three forms and bottom lip's two forms with correct overlap.",
          "I can identify the nodes at the mouth's corners and explain why they matter for expression."
        ],
        nextStep:"Ears — shaped like a question mark, and the feature most beginners skip entirely."
      },
      {
        id:'m27', plate:'27', title:'Ears', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m22'],
        hook:"A megaphone shape wearing a question mark — and the one feature whose placement genuinely makes or breaks a head tilt.",
        whyItMatters:[
          "Ears are the feature beginners are most likely to rush or skip, since they carry little obvious expression and feel less rewarding to study than eyes or a mouth. But ear placement is one of the fastest, most reliable checks for whether a head rotation or tilt actually reads correctly — get it wrong and the whole construction quietly falls apart even if every other feature is perfect."
        ],
        coreIdea:[
          "The ear's overall volume simplifies to a <b>megaphone</b> shape, easiest to see from behind the head: the <b>concha</b> is the tubular part that connects to the skull and pushes the outer ear (the <b>helix</b>) away from the head, like the narrow end of a megaphone flaring out into its wide mouth.",
          "The complex internal shapes of the ear are easier to remember with a simple mnemonic: the whole ear resembles a <b>question mark</b>, with the earlobe as the dot. The <b>helix</b> curves over the top and around into the inside almost completing a circle; the <b>antihelix</b> is the Y-shaped ridge inside it; the <b>tragus</b> and <b>antitragus</b> are two small bead-like forms pointing at each other, separated by a U-shaped notch.",
          "Placement is anatomically fixed, not a free choice: the ear sits in the <b>middle third</b> of the face (tying directly back to the vertical-thirds proportion system from Module 17), with its top aligned to the brow ridge and its bottom aligned to the base of the nose. On a downward head tilt, the ears should be placed <i>higher</i> on the head; on an upward tilt, <i>lower</i> — getting this backward is one of the fastest ways to break the illusion of a tilted head, even when every other feature is constructed correctly.",
          "The <b>earlobe</b> is the only part of the ear that isn't cartilage, which is why it hangs differently and shades differently — softer, more rounded — than the cartilage-based helix and antihelix above it. It's roughly one-third the height of the whole ear, though this varies by individual."
        ],
        mistakes:[
          "Treating ears as optional or an afterthought because they carry less obvious expression than eyes or mouth.",
          "Placing the ears at a fixed height regardless of head tilt, instead of raising them for a downward tilt and lowering them for an upward tilt.",
          "Drawing the internal ear shapes as random confused squiggles instead of using the megaphone-and-question-mark structure to organize them.",
          "Shading the whole ear uniformly instead of recognizing the earlobe as a different, non-cartilaginous material that should render more softly."
        ],
        proTips:[
          "Sketch the megaphone volume and the question-mark outline before attempting any internal detail — the same big-shape-first order from Module 6.",
          "Use the ear's alignment with the brow ridge and base of the nose as a running proportion check on any head construction, tilted or not.",
          "Practice ears from the back of the head occasionally, not just the standard three-quarter view — it's the clearest angle for understanding how the concha actually connects to the skull."
        ],
        practice:{
          warmup:"Draw the megaphone volume of an ear — no internal detail — from the side and from behind.",
          daily:"Construct one full ear — helix, antihelix, tragus, antitragus, lobe — using the question-mark structure, from a new angle each day.",
          weekly:"Construct a full head with a clear up-tilt and a full head with a clear down-tilt, placing the ears correctly higher or lower each time.",
          challenge:"Shade an ear using the organic-cylinder logic from Module 12, treating its major volumes as rounded forms rather than flat shapes."
        },
        resources:[
          {type:'Video', title:'How to Draw Ears — Anatomy and Structure', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-ears-anatomy-and-structure', videoId:'Yqgw_iMWwlw', why:"Free lesson covering the megaphone volume, question-mark mnemonic, and tilt-based placement rules this module is built on.", verified:true},
          {type:'Video', title:'How to Draw Ears — Step by Step', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-ears-step-by-step', why:"A full rendering walkthrough covering linear lay-in through shadow mapping and final highlights.", verified:true}
        ],
        quiz:[
          {q:"What happens to ear placement on a downward head tilt?", options:["The ears should be placed lower on the head","The ears should be placed higher on the head","Ear placement never changes with tilt","The ears disappear from view"], correct:1, explain:"Getting this backward is one of the fastest ways to break the illusion of a tilted head, even with everything else constructed correctly."},
          {q:"Which part of the ear is the only part that isn't cartilage?", options:["The helix","The tragus","The earlobe","The antihelix"], correct:2, explain:"The earlobe is non-cartilaginous, which is why it hangs and shades differently — softer and more rounded — than the rest of the ear."},
          {q:"The ear's top and bottom vertically align with which two landmarks?", options:["The chin and the hairline","The brow ridge (top) and the base of the nose (bottom)","The eyes and the mouth","There is no reliable alignment"], correct:1, explain:"This ties directly back to the middle-third proportion system — the ear spans the same vertical zone as the nose."}
        ],
        checklist:[
          "I can construct an ear's overall megaphone volume before adding internal detail.",
          "I can use the question-mark structure to place the helix, antihelix, tragus, and antitragus.",
          "I correctly raise ear placement on a down-tilt and lower it on an up-tilt.",
          "I can explain why the earlobe shades differently than the rest of the ear."
        ],
        nextStep:"Facial Proportions — checking every feature built in this arc against every other, not just against the head as a whole."
      },
      {
        id:'m28', plate:'28', title:'Facial Proportions', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20 min/day', prereq:['m23','m25','m26','m27'],
        hook:"Module 17 checked features against the whole head. This module checks them against each other — where most likeness actually lives.",
        whyItMatters:[
          "Module 17 covered proportion at the level of the whole head: thirds, the eye-line, overall eye spacing. This module goes one level deeper, now that all four major features have been individually constructed — checking eyes, nose, mouth, and ears against <i>each other</i>, not just against the head. This is where most of what actually makes a face look like a specific individual, rather than a generic template, lives."
        ],
        coreIdea:[
          "Feature-to-feature relationships give far more useful checks than measuring against the head alone. Some reliable starting averages: the width of the nose at its base is roughly the same as the distance between the eyes; the width of the mouth roughly aligns with the inner edges of the irises when looking straight ahead; the ear's height roughly spans the same vertical distance as the nose, since both are anchored to the brow-ridge-to-nose-base zone established in Module 27.",
          "These relationships are starting averages to measure from, exactly like the head-level proportions in Module 17 — not fixed rules every face obeys. The comparative-measurement technique from Module 5 applies directly here: instead of guessing whether a mouth is too wide, measure it against the eye spacing you've already placed.",
          "Cross-checking between features catches errors that checking one feature in isolation misses. A nose that looks correct on its own can reveal itself as too wide or too narrow the moment it's measured against the eye spacing already established — this is why professionals build a head feature by feature but keep re-checking backward against what's already placed, rather than finishing one feature completely before starting the next.",
          "Individual variation in these feature-to-feature relationships is a major part of what creates a recognizable, specific face rather than a generic one — the goal of this module is having a reliable set of starting relationships to measure from and knowingly deviate from, not a rulebook to follow rigidly."
        ],
        mistakes:[
          "Perfecting one feature in isolation without ever re-checking it against the other features already placed on the same face.",
          "Treating feature-to-feature ratios as strict rules rather than starting averages meant to be measured from and deliberately adjusted.",
          "Only ever checking proportions at the start of a drawing instead of continuously re-measuring as more features are added.",
          "Guessing feature width and spacing instead of using comparative measurement against features already placed."
        ],
        proTips:[
          "After placing each new feature, immediately measure it against at least one feature already on the page, not just against the head's overall guidelines.",
          "When a face looks subtly wrong and no single feature seems obviously broken, check feature-to-feature relationships before assuming a single feature needs to be redrawn.",
          "Keep a mental (or literal) note of which feature-to-feature relationships you deviate from on purpose — that's usually where a subject's actual likeness is being built."
        ],
        practice:{
          warmup:"On a simplified head with eyes and nose already placed, measure whether the nose width matches the eye spacing using comparative measurement.",
          daily:"Construct a full face — eyes, eyebrows, nose, mouth, ears — re-measuring each new feature against the ones already placed as you go.",
          weekly:"Take a real reference photo and measure its actual feature-to-feature relationships against the averages in this module, noting where the individual deviates.",
          challenge:"Construct two different imagined faces starting from the same head proportions, deliberately varying only the feature-to-feature relationships, and compare how different they read as individuals."
        },
        resources:[
          {type:'Course', title:'Quickly Draw Heads with the Loomis Method — Part 1', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/quickly-draw-heads-with-the-loomis-method-part-1', why:"Revisits the head-level proportion system from Module 17, worth reviewing again now that all four features sit on top of it.", verified:true}
        ],
        quiz:[
          {q:"How does this module's proportion check differ from Module 17's?", options:["It's identical, just repeated","It checks features against each other, not just against the whole head","It only applies to cartoon styles","It replaces Module 17 entirely"], correct:1, explain:"Module 17 checks features against the head; this module checks them against each other, which is where individual likeness lives."},
          {q:"According to this module, nose width at the base is roughly comparable to:", options:["The width of the whole head","The distance between the eyes","The height of the ear","The width of the chin"], correct:1, explain:"This is a useful starting average to measure from, not a fixed rule."},
          {q:"What does this module recommend instead of perfecting one feature before starting the next?", options:["Only ever work on one feature per session","Continuously re-check each new feature against features already placed", "Skip measurement entirely and rely on instinct","Always start with the mouth"], correct:1, explain:"Cross-checking backward against already-placed features catches errors that checking one feature in isolation misses."}
        ],
        checklist:[
          "I can measure a nose's width against eye spacing using comparative measurement.",
          "I re-check each new feature against features already placed, not just against head-level guidelines.",
          "I can identify at least one feature-to-feature relationship in a real reference that deviates from the average.",
          "I can explain why feature-to-feature proportion matters more for likeness than head-level proportion alone."
        ],
        nextStep:"Facial Expressions — what happens when the muscles underneath these features actually start pulling on them."
      },
      {
        id:'m29', plate:'29', title:'Facial Expressions', difficulty:'Intermediate\u2013Advanced',
        studyTime:'25 min', practiceTime:'20\u201325 min/day', prereq:['m24','m26','m28'],
        hook:"Not a library of memorized \"sad face\" and \"angry face\" templates — muscles pulling on specific points, and what happens when you understand the pull instead of copying the result.",
        whyItMatters:[
          "Beginners typically learn expressions the same way they initially tried to learn faces in Module 15: by memorizing a fixed template per emotion. This fails for the same reason — a memorized \"angry face\" doesn't generalize to a three-quarter angle, a subtler intensity, or a specific individual's face. Understanding what the underlying muscles actually pull, and where, generalizes to all of those."
        ],
        coreIdea:[
          "Expression comes from specific muscles pulling on specific points already covered in this arc: the <b>nodes</b> at the mouth's corners (Module 26) are pulled by several muscles simultaneously and move more than almost any other point on the face; the <b>eyebrows</b> (Module 24) shift as a unit relative to the brow ridge; the eye socket's soft tissue compresses and stretches around the eyeball (Module 23).",
          "Professional animation and portrait instruction commonly organizes expression using the <b>Facial Action Coding System</b> (FACS), developed by psychologist Paul Ekman — a systematic catalog of individual muscle movements (\"action units\") that combine to produce every recognizable expression. You don't need to memorize the full system to benefit from the idea behind it: break an expression into which specific points are pulled, rather than copying its overall silhouette.",
          "Consistency across the whole face is what separates a convincing expression from an unconvincing one. A genuine smile pulls at the mouth's nodes <i>and</i> visibly compresses the skin around the eyes (the difference between an authentic smile and a purely polite one, sometimes called \"smizing\" when done with the eyes specifically) — a mouth-only smile with unaffected eyes reads as false, even to viewers who couldn't explain exactly why.",
          "Subtlety matters as much as intensity. A slightly raised eyebrow communicates skepticism as clearly as a fully furrowed brow communicates anger — and exaggeration should be a deliberate storytelling choice (common in cartoon and anime styles) rather than the only intensity a beginner knows how to draw."
        ],
        mistakes:[
          "Memorizing a fixed expression template per emotion instead of understanding which muscles pull which points.",
          "Drawing a smile that only affects the mouth, leaving the eyes unaffected, which reads as insincere even without the viewer knowing exactly why.",
          "Only ever drawing maximum-intensity expressions instead of practicing the subtle, low-intensity versions that carry just as much information.",
          "Copying an expression's overall outline from a reference without understanding which specific points were pulled to create it."
        ],
        proTips:[
          "Look in a mirror and make an expression slowly, watching specifically where the change starts — usually the nodes, the eyebrows, or the eye socket — before it spreads to the rest of the face.",
          "Practice drawing the same expression at three intensities: barely perceptible, moderate, and full — the barely perceptible version is usually the hardest and the most useful.",
          "When an expression looks unconvincing, check whether the eyes and mouth actually agree with each other, not just whether the mouth shape is correct on its own."
        ],
        practice:{
          warmup:"In a mirror, make five different expressions slowly and note which single point moves first in each one.",
          daily:"Draw the same simplified face with one expression each day, focused on moving the mouth nodes and eyebrows together consistently.",
          weekly:"Draw the same expression at three intensities — subtle, moderate, full — on the same face.",
          challenge:"Draw a face expressing one emotion with the mouth and a contradicting emotion with the eyes, then compare it to a version where both agree — notice how much less convincing the mismatched version reads."
        },
        resources:[
          {type:'Video', title:'The Secret to Creating Clear Expressions (Art Tips #12)', creator:'Aaron Blaise', url:'https://www.youtube.com/watch?v=S94VIlQyFWo', why:"A free video from a 21-year Disney animator (The Lion King, Mulan, Brother Bear) on building legible expressions — his dedicated paid expressions course covers this in far more depth, but this free entry covers the core idea well.", verified:true}
        ],
        quiz:[
          {q:"What does this module recommend instead of memorizing a fixed template per emotion?", options:["Copying reference photos exactly","Understanding which specific muscles pull which points, and building the expression from that","Only drawing exaggerated expressions","Avoiding expressions until fully advanced"], correct:1, explain:"Understanding the underlying pull generalizes to new angles and intensities; a memorized template doesn't."},
          {q:"Why does a mouth-only smile often read as insincere?", options:["It doesn't — mouth position is all that matters","A genuine smile also visibly affects the eyes, and a mismatch between mouth and eyes reads as false", "Insincere smiles are always drawn incorrectly on purpose","Eyes have no role in reading expressions"], correct:1, explain:"Consistency between the eyes and mouth is what separates a convincing expression from an unconvincing one."},
          {q:"What is the Facial Action Coding System (FACS)?", options:["A drawing app","A systematic catalog of individual muscle movements that combine to form expressions, developed by Paul Ekman","A type of pencil grade","A proportion system for the whole body"], correct:1, explain:"FACS breaks expressions into specific muscle-driven action units rather than treating each emotion as one fixed shape."}
        ],
        checklist:[
          "I can identify which points — mouth nodes, eyebrows, eye socket — move first when a real expression begins.",
          "I can draw a smile that visibly affects both the mouth and the eyes, not the mouth alone.",
          "I can draw the same expression at subtle, moderate, and full intensity.",
          "I can explain in my own words why a mismatch between eyes and mouth reads as an unconvincing expression."
        ],
        nextStep:"Head + Features Integration — combining everything from this entire arc into one coherent, constructed head."
      },
      {
        id:'m30', plate:'30', title:'Head + Features Integration', difficulty:'Advanced',
        studyTime:'30 min', practiceTime:'30\u201345 min/day', prereq:['m22','m29'],
        hook:"Every system from this entire arc, running at once, on one head — the actual test of whether any of it was really learned.",
        whyItMatters:[
          "This is the capstone of the Head & Portrait arc. Every module so far — skull, proportions, Loomis, Asaro, rotation, perspective, planes, and every individual feature — has been practiced in relative isolation. Integration is where all of it has to run simultaneously on a single, coherent head, which is a genuinely different and harder skill than executing any one piece alone.",
          "This module is deliberately not about learning anything new. It's about proving, through practice, that the pieces actually connect — exactly the standard set back in Module 15: construction that generalizes to any angle, any lighting, and any individual, built from imagination rather than copied from a single reference."
        ],
        coreIdea:[
          "The full integrated workflow, in order, pulls directly from every prior module in this arc: gesture or orientation decision, Loomis sphere-and-guideline construction (Module 18) adjusted for the intended rotation (Module 20) and perspective (Module 21), planes mapped across the whole face (Module 22), then each feature — eyes, eyebrows, nose, mouth, ears (Modules 23\u201327) — built on top of that structure and cross-checked against each other (Module 28), with expression (Module 29) applied last since it depends on every feature already being correctly placed.",
          "Consistency is the entire point of integration. A single light source has to make sense across every plane and every feature at once — an eye socket shadow that doesn't agree with the nose's cast shadow breaks the whole drawing's credibility, even if each feature would look correct in isolation under its own separate assumed lighting.",
          "Working back-to-front rather than feature-by-feature-to-completion is the professional habit this module reinforces: block all major features in loosely first, at low detail, checking overall proportion and rotation, before fully rendering any single one — exactly the shapes-before-forms-before-detail hierarchy that's run through this entire course since Module 6.",
          "This module is also the natural point to revisit the baseline drawing from Module 15 — five faces drawn from memory, dated and set aside before this arc began. Comparing that baseline honestly against a current construction is the clearest, most motivating evidence this course produces that construction-based learning actually works."
        ],
        mistakes:[
          "Fully rendering one feature to completion before roughly blocking in all the others, instead of working loose-to-detailed across the whole face at once.",
          "Losing track of a single consistent light source once multiple features are being rendered simultaneously.",
          "Treating integration as just placing already-practiced features next to each other, rather than continuously cross-checking them against each other as in Module 28.",
          "Skipping the comparison back to the Module 15 baseline drawings, which is the single clearest evidence of how much has actually changed."
        ],
        proTips:[
          "Work the entire head loose-to-detailed in passes — one pass for overall construction and rotation, one for feature placement and proportion, one for planes and light logic, one for final detail — rather than finishing each feature in sequence.",
          "Step back from the drawing frequently and squint, the same silhouette check from Module 6, now applied to a complete integrated head.",
          "Retrieve the Module 15 baseline drawings now, date a new set next to them, and be honest about the comparison — it's the actual point of having made them in the first place."
        ],
        practice:{
          warmup:"Loosely block an entire head — Loomis construction, all major features roughly placed, no detail — in under five minutes.",
          daily:"Construct one complete head from imagination, working loose-to-detailed across the whole face rather than feature-by-feature to completion.",
          weekly:"Construct the same imagined character's head at three different angles, keeping every feature's proportion and the light source fully consistent across all three.",
          challenge:"Pull out your five Module 15 baseline drawings, draw the same five subjects again now, and compare the two sets honestly, side by side."
        },
        resources:[
          {type:'Course', title:'How to Draw Facial Features (free series)', creator:'Proko (Stan Prokopenko)', url:'https://www.classcentral.com/course/youtube-how-to-draw-facial-features-proko-55060', why:"Worth revisiting as a complete hub now that every individual feature lesson in it connects to a specific module you've already completed.", verified:true}
        ],
        quiz:[
          {q:"What is this module's central point?", options:["Teaching a brand-new construction technique","Proving, through practice, that every previously separate module actually connects into one coherent head","Replacing the Loomis method with a new system","Skipping straight to advanced shading"], correct:1, explain:"Integration tests whether the individually-practiced pieces from this whole arc actually work together, not new content."},
          {q:"What order does this module recommend for a fully integrated head?", options:["Finish one feature completely, then move to the next","Loose-to-detailed passes across the whole head: construction, then feature placement, then planes and light, then final detail","Always start with fine detail on the eyes","Random order each time"], correct:1, explain:"Working loose-to-detailed in passes across the whole face avoids the common mistake of over-finishing one feature before others are even placed."},
          {q:"What does this module recommend doing with the Module 15 baseline drawings?", options:["Throwing them away, they're no longer relevant","Comparing them honestly against a new attempt at the same subjects now","Submitting them for a grade","Redrawing them exactly the same way"], correct:1, explain:"That honest side-by-side comparison is the clearest evidence this course produces that construction-based learning actually worked."}
        ],
        checklist:[
          "I can construct a complete head — rotation, planes, and all major features — working loose-to-detailed rather than feature-by-feature.",
          "I keep one consistent light source across every feature and plane in a single integrated drawing.",
          "I have compared my current work honestly against my Module 15 baseline drawings.",
          "I can construct a full head from imagination, at a chosen angle, without copying a single reference photo directly."
        ],
        nextStep:"Head & Portrait is complete. Next: Body & Anatomy — hair, neck, shoulders, torso, arms and hands, mapped on the home page and being written next."
      }
    ]
  }
];
