const CURRICULUM_3 = [
{
    id:'anatomy', title:'Body & Anatomy', status:'live', order:4,
    desc:'Hair, neck, shoulders, torso, arms and hands, then legs, feet, full-body construction, clothing physics, body language, and character design.',
    modules:[
      {
        id:'m31', plate:'31', title:'Hair', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m22','m12'],
        hook:"Not thousands of individual strands — three or four value masses, sitting on top of a form that has its own volume separate from the skull underneath.",
        whyItMatters:[
          "Hair is one of the first things beginners try to render strand-by-strand from the very first mark, which almost never looks convincing — it produces a scratchy tangle with no sense of overall shape. Real hair reads as large value masses first; individual strands only ever function as accents layered on top of a structure that's already correct.",
          "This module sits directly on top of construction (Module 10, combine-and-cut forms) and shading systems (Module 12, value massing before detail) — hair is really just those two ideas applied to a specific, highly variable material."
        ],
        coreIdea:[
          "Hair has its own <b>volume</b>, separate from the skull it grows from. It doesn't hug the head like a painted-on cap — it sits slightly away from the scalp, following the head's cross-contour (Module 7) as a starting guide, then pushing outward with its own thickness and gravity.",
          "Squinting at real hair (the same trick from Module 6 and Module 12) reveals two or three large value masses — lightest, mid, darkest — well before any individual strand is visible. Blocking in those masses first, exactly like the two-value Asaro exercise from Module 19, is what makes rendered hair read as a coherent shape instead of noise.",
          "Hair grows from the scalp in a consistent direction, radiating out from one or two <b>whorl points</b> (commonly at the crown), and every strand within a section generally follows that shared flow — which is why direction lines, drawn before any value or detail, matter more than most beginners expect.",
          "Individual strand detail — flyaways, stray highlights, a few crisp accent lines — gets added <i>last</i>, sparingly, and only within the mid-tone areas where the eye actually reads detail (the same texture-density principle from Module 13). Detailing every strand equally, especially inside the darkest shadow mass, flattens exactly the value structure that made the hair read as solid in the first place."
        ],
        mistakes:[
          "Drawing individual strands from the very first mark, before any overall value mass or shape has been established.",
          "Treating hair as a flat 2D silhouette painted directly onto the skull, with no volume or thickness of its own.",
          "Ignoring the scalp's growth direction and whorl point, so strands appear to go in inconsistent or arbitrary directions.",
          "Rendering every strand at equal sharpness and density, including inside the darkest shadow areas, which erases the value hierarchy that made the mass read as solid."
        ],
        proTips:[
          "Squint at a reference (real hair or a photo) until only two or three value masses remain, and block those in before touching a single strand line.",
          "Draw a handful of direction arrows on a simplified head first, radiating from the crown, before laying in any mass at all.",
          "Save individual strand accents for the very end, and concentrate them in mid-tones — not the deepest shadows, not the brightest highlights."
        ],
        practice:{
          warmup:"On a simplified head, draw three value masses for a simple hairstyle — light, mid, dark — with no strand lines at all.",
          daily:"Draw a new hairstyle each day using the mass-first, strands-last order: growth direction arrows, then value masses, then a handful of accent strands.",
          weekly:"Take one reference photo of hair and do two versions: one strand-by-strand from the start, one mass-first with accents added last. Compare which reads more convincingly as an image, not just up close.",
          challenge:"Render the same hairstyle in three different lighting directions, keeping the mass-first order each time, and compare how the value masses shift."
        },
        resources:[
          {type:'Article', title:'How to Draw Hair (Realistically!)', creator:'The Drawing Source', url:'https://www.thedrawingsource.com/how-to-draw-hair.html', why:"A detailed, step-by-step walkthrough of exactly this module's value-massing approach — finding general shapes first, then increasingly specific ones, rather than starting with strands.", verified:true},
          {type:'Video + Workbook', title:'Learn to Draw Hair from Beginner to Pro in Just One Video!', creator:'Kirsty Partridge', url:'https://www.youtube.com/watch?v=n_Vj22oKXJA', why:"Comes with a genuinely free downloadable hair workbook (linked in the video description) to practice alongside — not just a video to watch passively.", verified:true}
        ],
        quiz:[
          {q:"According to this module, what should be established before any individual hair strand is drawn?", options:["The exact hair color","Two or three large value masses","The character's name","A full ink outline"], correct:1, explain:"Value masses come first — squinting at real hair reveals only two or three masses well before any strand is visible."},
          {q:"Where should individual strand accents be concentrated?", options:["Evenly across every value, including the deepest shadows","Mostly in mid-tones, sparingly", "Only in the very brightest highlights","It doesn't matter, detail everywhere equally"], correct:1, explain:"Detailing every strand equally, especially in shadow, flattens the value structure that makes hair read as solid."},
          {q:"What does this module say about hair's relationship to the skull underneath?", options:["Hair has no volume of its own and should hug the skull exactly","Hair has its own volume, separate from the skull, following its cross-contour as a starting guide only","Hair should always be drawn as a flat silhouette","Hair only matters in stylized art"], correct:1, explain:"Hair sits away from the scalp with its own thickness and gravity, not painted on as a flat cap."}
        ],
        checklist:[
          "I can block in two or three hair value masses before adding any strand detail.",
          "I can draw growth-direction arrows radiating from a whorl point on a simplified head.",
          "I add strand accents last, concentrated in mid-tones rather than evenly everywhere.",
          "I draw hair with its own volume, separate from and slightly away from the skull's surface."
        ],
        nextStep:"Neck — the connector between head and torso, and the diagonal muscle landmark most beginners never draw."
      },
      {
        id:'m32', plate:'32', title:'Neck', difficulty:'Intermediate',
        studyTime:'15 min', practiceTime:'15\u201320 min/day', prereq:['m16','m22'],
        hook:"Not a vertical pole the head sits on — a leaning cylinder with one diagonal muscle that defines almost its entire visible structure.",
        whyItMatters:[
          "The neck is the connector between the head-rotation work from Module 20 and the torso construction two modules from now. Beginners frequently draw it as a perfectly vertical, symmetrical cylinder with no defining structure — which reads as stiff even when the head and shoulders on either side of it are constructed well."
        ],
        coreIdea:[
          "The neck simplifies to a cylinder, but it isn't vertical: it leans slightly forward from the torso to support the head's weight, and its exact angle shifts with posture — a neck drawn perfectly upright, centered directly over the shoulders, is one of the fastest ways to make a figure look artificially stiff.",
          "The single most useful landmark is the <b>sternocleidomastoid</b> (SCM), a muscle running as a clear diagonal from just behind the ear down to the collarbone and sternum. This diagonal defines most of the neck's visible silhouette from the side and three-quarter view, and is worth drawing as a guideline before anything else on the neck.",
          "The <b>trapezius</b> forms the sloped sides running from the base of the neck down and out into the shoulders — covered in more construction depth in the next module, but worth noting here as the neck's other major silhouette-defining edge.",
          "Head and neck don't have to move as one rigid fused unit: the neck can lean one way while the head tilts another, the same way the whole spine (Module 34) can bend independently at different points. Treating head-plus-neck as a single stiff block is a common and very fixable beginner habit."
        ],
        mistakes:[
          "Drawing the neck as a perfectly vertical cylinder, ignoring its natural forward lean from the torso.",
          "Omitting the SCM diagonal entirely, leaving the neck with no defining structural landmark.",
          "Attaching the neck exactly centered on the shoulders and torso rather than slightly forward, where it actually sits.",
          "Treating the head and neck as one rigid unit that always tilts and rotates together."
        ],
        proTips:[
          "Draw the SCM diagonal as your first guideline on any neck, before the cylinder's outline.",
          "Check whether the neck is leaning forward, back, or to one side relative to the torso's vertical line — it almost never sits perfectly plumb in a natural pose.",
          "Practice tilting the head independently of the neck's own lean, to break the habit of treating them as fused."
        ],
        practice:{
          warmup:"Draw a simple head-neck-shoulder unit from the front, marking the SCM diagonal on both sides before adding any other detail.",
          daily:"Construct the same head-neck-shoulder unit at a new neck lean and head tilt each day, keeping the two independent of each other.",
          weekly:"Draw the neck from front, three-quarter, and profile, tracking how the SCM's visible angle changes with viewpoint.",
          challenge:"Construct a figure looking over one shoulder, where the neck rotates significantly more than the torso beneath it — a genuinely useful stress-test of independent head/neck/torso movement."
        },
        resources:[
          {type:'Course', title:'Landmarks of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/landmarks-of-the-human-body', why:"Free lesson from Proko's Figure Drawing Fundamentals course covering the SCM and other neck/shoulder landmarks as part of a full-body landmark system.", verified:true}
        ],
        quiz:[
          {q:"What is the single most useful neck landmark according to this module?", options:["The Adam's apple, always","The sternocleidomastoid (SCM), running diagonally from behind the ear to the collarbone","The trapezius alone","There are no useful neck landmarks"], correct:1, explain:"The SCM diagonal defines most of the neck's visible silhouette and is worth drawing before anything else."},
          {q:"Does the neck sit perfectly vertical over the shoulders in a natural pose?", options:["Yes, always vertical for a natural look","No, it typically leans slightly forward from the torso, and the exact angle shifts with posture","Only in profile view","Only in children"], correct:1, explain:"A perfectly vertical neck is one of the fastest ways to make a figure read as artificially stiff."},
          {q:"Can the head tilt independently of the neck's own lean?", options:["No, they always move as one rigid unit","Yes — treating them as fused is a common, fixable beginner habit","Only in profile views","Only when looking straight ahead"], correct:1, explain:"Head and neck can move somewhat independently, similar to how the spine can bend at different points."}
        ],
        checklist:[
          "I draw the SCM diagonal as a guideline before the neck's outline.",
          "I construct the neck with a natural forward lean rather than a perfectly vertical cylinder.",
          "I attach the neck slightly forward on the torso rather than dead-center.",
          "I can construct a head tilting independently of the neck's own lean."
        ],
        nextStep:"Shoulders — a collarbone that bends more than beginners expect, and a shoulder blade that slides across the back."
      },
      {
        id:'m33', plate:'33', title:'Shoulders', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m32','m22'],
        hook:"The collarbone isn't a straight bar — it's a lazy double-curve that can swivel, and the shoulder blade underneath it actually slides across the ribs as the arm moves.",
        whyItMatters:[
          "Shoulders connect the torso (two modules from now) to the arms (the module after that), and how they're constructed directly affects whether every subsequent arm pose reads as believable or pasted-on. Beginners commonly draw shoulders as a single rigid horizontal bar with no internal movement, which caps how convincing any arm gesture built on top of it can be."
        ],
        coreIdea:[
          "The <b>clavicle</b> (collarbone) isn't straight — it has a gentle double-curve, like a shallow S lying on its side, running from the sternum out to the shoulder. It can shrug up and down and rotate slightly forward and back, changing the whole upper-chest silhouette as it moves.",
          "The <b>scapula</b> (shoulder blade) sits on the back of the rib cage and genuinely slides across its curved surface as the arm moves — it isn't fixed in one spot. When the arm raises, the scapula rotates and glides upward and outward across the ribs; the same rib cage position can produce very different back silhouettes depending purely on arm position.",
          "The <b>deltoid</b> caps the shoulder joint and changes shape with arm position — rounder and fuller when the arm hangs relaxed, flatter and more stretched when the arm raises. This connects directly to the arm construction in the next module.",
          "Shoulders are rarely level or symmetrical in a natural, weighted pose — one is commonly higher, lower, forward, or back due to weight shift, a twist through the torso, or a gestural lean. Drawing both shoulders perfectly level by default is a reliable sign of an unobserved, generic pose."
        ],
        mistakes:[
          "Drawing the clavicle as a straight, rigid bar instead of its actual gentle double-curve.",
          "Keeping the scapula fixed in one position regardless of the arm's pose, instead of letting it slide across the rib cage.",
          "Making both shoulders perfectly level and symmetrical by default, even in a clearly weighted or twisting pose.",
          "Ignoring how the deltoid's shape changes between a relaxed, hanging arm and a raised one."
        ],
        proTips:[
          "Sketch the clavicle's double-curve deliberately, even in a quick gesture — a straight collarbone line is one of the fastest tells of an unconsidered shoulder.",
          "When the arm raises in a pose, actively move the scapula's position on the rib cage to match — don't leave it where it would sit with the arm at rest.",
          "Check reference for genuine shoulder asymmetry in casual, weighted poses rather than defaulting to a level, symmetrical bar."
        ],
        practice:{
          warmup:"Draw a simplified rib cage with the clavicle's double-curve and scapula placement marked, from the front and from the back.",
          daily:"Draw the same shoulder construction with the arm at rest, then raised overhead, tracking how the scapula and deltoid shape change.",
          weekly:"Construct a figure with a clearly weight-shifted, asymmetrical shoulder line — one shoulder higher and more forward than the other.",
          challenge:"Draw the same torso and shoulder girdle from the front, back, and side, keeping the clavicle curve and scapula placement consistent across all three."
        },
        resources:[
          {type:'Course', title:'Landmarks of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/landmarks-of-the-human-body', why:"Free lesson covering scapula and shoulder landmarks directly, including how they shift with different arm positions.", verified:true}
        ],
        quiz:[
          {q:"What shape is the clavicle actually, according to this module?", options:["A perfectly straight bar","A gentle double-curve, like a shallow S lying on its side","A tight zigzag","A perfect semicircle"], correct:1, explain:"Drawing it as a straight rigid bar misses its actual gentle double-curve."},
          {q:"What happens to the scapula when the arm raises?", options:["Nothing, it stays completely fixed","It rotates and glides upward and outward across the rib cage","It detaches from the rib cage entirely","It only moves when the head turns"], correct:1, explain:"The scapula genuinely slides across the ribs as the arm moves — it isn't fixed in one spot."},
          {q:"Are both shoulders typically level and symmetrical in a natural, weighted pose?", options:["Yes, always perfectly level","Not usually — weight shift, twisting, or gesture commonly make one shoulder higher, lower, forward, or back","Only in professional models","Only when standing at attention"], correct:1, explain:"Perfectly level, symmetrical shoulders by default is a common sign of an unobserved, generic pose."}
        ],
        checklist:[
          "I can draw the clavicle's actual double-curve instead of a straight bar.",
          "I move the scapula's position on the rib cage to match a raised versus resting arm.",
          "I can construct a genuinely asymmetrical, weight-shifted shoulder line.",
          "I adjust the deltoid's shape between a relaxed and a raised arm position."
        ],
        nextStep:"Torso — two simple oval masses connected by a flexible spine, not one rigid block."
      },
      {
        id:'m34', plate:'34', title:'Torso', difficulty:'Intermediate',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m33','m10'],
        hook:"Not one rigid block — two overlapping ovals on a flexible spine, and the amount they overlap is your main tool for showing bend, twist, and lean.",
        whyItMatters:[
          "The torso is the core mass everything else in this arc attaches to — head, neck, and shoulders above; arms to the sides; legs and pelvis below. Its construction determines whether a whole figure reads as alive or as a stiff mannequin, which is why this module is the load-bearing lesson of the entire Body & Anatomy arc so far."
        ],
        coreIdea:[
          "The torso simplifies to <b>two masses</b> — the rib cage as an egg-shaped oval, the pelvis as a smaller bucket-shaped oval — connected by a flexible spine, an approach widely taught as \"the Bean.\" This is a deliberate simplification: it isn't meant to produce a realistic figure directly, but to teach the underlying concept of two masses on a flexible connector, which every more detailed torso later builds on.",
          "The rib cage's true shape isn't a perfect oval (its curve actually stops around the 10th rib, then swings back up to the sternum), but treating it as one for construction purposes is accurate enough to build from and far easier to keep consistent across angles.",
          "As the torso bends, twists, or leans, the relationship between the two ovals changes: bending forward or twisting brings them closer together and increases their overlap; arching back separates them further. This overlap-versus-separation relationship is the primary tool for showing torso movement, and it should be established before any muscle or surface detail.",
          "A genuinely useful real proportion check: in a relaxed standing pose, the gap between the bottom of the rib cage and the top of the pelvis is roughly the width of the standing figure's own fist — a fast, portable sanity check that doesn't require memorizing exact measurements."
        ],
        mistakes:[
          "Treating the torso as a single rigid box or cylinder, with no distinction between the rib cage and pelvis masses.",
          "Keeping the same overlap or gap between the two ovals regardless of the pose, instead of changing it to show bend, twist, or lean.",
          "Drawing the pelvis oval the same size as or larger than the rib cage oval, when it's generally the smaller of the two.",
          "Skipping the fist-width rib-to-pelvis proportion check on standing poses, leading to a stretched or compressed midsection."
        ],
        proTips:[
          "Always draw the two ovals and the connecting spine line before any torso detail, muscle, or clothing.",
          "Use the ovals' overlap or separation as your primary tool for showing torso movement, before adding a single muscle form on top.",
          "Check the fist-width gap between rib cage and pelvis on standing reference poses as a fast, repeatable proportion sanity check."
        ],
        practice:{
          warmup:"Draw the rib cage oval, pelvis oval, and connecting spine line for a neutral standing pose, no other detail.",
          daily:"Construct the same two-oval torso bending forward, then twisting to one side, tracking exactly how the ovals' overlap changes each time.",
          weekly:"Check the fist-width rib-to-pelvis gap against a real photo reference or your own standing pose in a mirror.",
          challenge:"Construct a dynamic action pose — reaching, twisting, leaning far to one side — using only the two-oval-and-spine method, before adding any other body part."
        },
        resources:[
          {type:'Course', title:'The Torso', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/the-torso', why:"Free lesson teaching exactly this module's oval-based simplification of the rib cage and pelvis.", verified:true},
          {type:'Course', title:'How to Simplify the Motion of the Torso — The Bean', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-simplify-the-motion-of-the-torso-the-bean', why:"Free follow-up lesson covering exactly how the two ovals' overlap changes as the torso bends, twists, and turns.", verified:true},
          {type:'Course', title:'Mannequinization — Structure of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/mannequinization-structure-of-the-human-body', why:"Free lesson extending the two-oval torso into a full simplified mannequin figure, useful for inventing poses from imagination.", verified:true}
        ],
        quiz:[
          {q:"What are the torso's two main simplified masses?", options:["Two identical cubes","An egg-shaped rib cage oval and a smaller bucket-shaped pelvis oval","A single cylinder","Three stacked spheres"], correct:1, explain:"This two-mass approach, sometimes called \"the Bean,\" is the foundation this entire module builds from."},
          {q:"What happens to the overlap between the two torso ovals when the figure bends forward or twists?", options:["The overlap decreases","The overlap increases, bringing the ovals closer together","Nothing changes","The ovals swap positions"], correct:1, explain:"Bending or twisting brings the rib cage and pelvis masses closer together; arching back separates them further."},
          {q:"What's a genuinely useful proportion check for the rib-to-pelvis gap in a standing pose?", options:["It should always be exactly one head-height","It's roughly the width of the figure's own fist","It should always be zero, touching directly","There is no reliable check"], correct:1, explain:"This fist-width relationship is a fast, portable sanity check that doesn't require memorizing exact measurements."}
        ],
        checklist:[
          "I can construct a torso as two ovals connected by a flexible spine, before adding any other detail.",
          "I change the ovals' overlap to show bending, twisting, or leaning, rather than keeping a fixed relationship.",
          "I draw the pelvis oval smaller than the rib cage oval.",
          "I can check a standing pose's rib-to-pelvis gap against the fist-width proportion."
        ],
        nextStep:"Arms — two cylinders and a hinge, plus a forearm that secretly contains two bones twisting around each other."
      },
      {
        id:'m35', plate:'35', title:'Arms', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m33','m7'],
        hook:"Two cylinders and a hinge, except the forearm secretly contains two bones that twist around each other — which is the whole reason your palm can face up or down.",
        whyItMatters:[
          "Arms connect the shoulder construction from two modules ago to the hands in the next module. Getting the elbow hinge and, specifically, the forearm's internal rotation right is what separates a gesture that reads as loose and alive from one that reads as a stiff, single-piece tube."
        ],
        coreIdea:[
          "The upper arm and forearm simplify to <b>two cylinders</b> connected at the elbow hinge. The upper arm cylinder only bends at that one hinge — straightforward. The forearm is genuinely more complex: it contains <b>two bones</b>, the radius and ulna, that rotate around each other. This is what lets the hand turn palm-up to palm-down (<b>supination</b> and <b>pronation</b>) without the elbow joint itself rotating at all — a distinction beginners commonly miss, treating the whole forearm as one rigid, non-twisting tube.",
          "This internal rotation has a visible consequence: the biceps bulges more prominently when the forearm is supinated (palm up) and appears flatter or rotated away when pronated (palm down) — a subtle cue directly tied to which way the two forearm bones are currently crossed.",
          "The elbow's bony point (the <b>olecranon</b>, part of the ulna) is a reliable, easily observed landmark, especially visible when the arm bends.",
          "Arm length is commonly underestimated by beginners: a fully extended arm typically reaches to roughly mid-thigh on the same figure — a fast proportion check worth running against the torso construction from the last module."
        ],
        mistakes:[
          "Treating the forearm as a single rigid cylinder with no internal capacity to twist, missing supination and pronation entirely.",
          "Forgetting that the biceps' visible shape changes depending on whether the palm faces up or down.",
          "Drawing arms noticeably shorter than their real proportion, especially relative to the torso and legs.",
          "Losing the elbow's bony landmark entirely once the arm bends, leaving a smooth, uninformative joint."
        ],
        proTips:[
          "Sketch the forearm's two bones, even simplified as two offset guide lines, as a reminder that it can twist independently of the elbow joint itself.",
          "Check a drawn arm's length against the torso's fist-width proportion and the figure's overall height as a fast sanity check.",
          "Draw the same arm pose twice — palm up, then palm down — and compare how much the whole forearm's silhouette changes, not just the hand."
        ],
        practice:{
          warmup:"Draw the arm as two simple cylinders with a clear elbow hinge, from three different bend angles.",
          daily:"Draw the same arm pose with the palm rotated to a new position each day, tracking how the forearm's shape and the biceps respond.",
          weekly:"Check a full gesture drawing's arm length against the torso and full figure height, adjusting if it reads as too short.",
          challenge:"Construct an arm reaching across the body, twisting realistically at the forearm as the hand's orientation changes through the motion."
        },
        resources:[
          {type:'Course', title:'Mannequinization — Structure of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/mannequinization-structure-of-the-human-body', why:"Free lesson covering simplified arm construction as part of the full mannequin figure, a useful base before adding forearm-rotation detail.", verified:true},
          {type:'Book', title:'Figure Drawing: Design and Invention', creator:'Michael Hampton', url:'', why:"A widely used, still-in-print figure drawing book covering arm and forearm construction, including bone rotation, in more depth than most free video content.", verified:true}
        ],
        quiz:[
          {q:"What makes the forearm structurally different from the upper arm?", options:["Nothing, they're identical","It contains two bones (radius and ulna) that rotate around each other, allowing the palm to turn up or down","It has no bones at all","It can only bend, never twist"], correct:1, explain:"This two-bone rotation, not the elbow joint, is what lets the palm face up or down."},
          {q:"What visibly changes on the upper arm depending on palm orientation?", options:["Nothing changes","The biceps bulges more when supinated (palm up) and appears flatter when pronated (palm down)","The elbow moves position entirely","The hand changes size"], correct:1, explain:"This subtle cue is directly tied to which way the two forearm bones are currently crossed."},
          {q:"As a rough proportion check, how far does a fully extended arm typically reach on the same figure?", options:["Only to the waist","Roughly to mid-thigh","All the way to the ankle","Past the knee to the shin"], correct:1, explain:"Arm length is commonly underestimated by beginners — mid-thigh is a useful check to run against the torso."}
        ],
        checklist:[
          "I can construct an arm as two cylinders with a clear elbow hinge.",
          "I can draw the same arm pose with the palm up versus palm down, showing the forearm's shape change.",
          "I check arm length against the torso's proportions rather than guessing.",
          "I keep the elbow's bony landmark visible when the arm is bent."
        ],
        nextStep:"Hands — the feature with the worst reputation in drawing, broken down into an actual learnable structure."
      },
      {
        id:'m36', plate:'36', title:'Hands', difficulty:'Intermediate\u2013Advanced',
        studyTime:'30 min', practiceTime:'25\u201330 min/day', prereq:['m35','m10'],
        hook:"Famously the hardest thing to draw — for specific, fixable reasons, not because hands are cursed.",
        whyItMatters:[
          "Hands have a genuine cultural reputation as the hardest body part to draw — enough that hiding them in pockets or behind backs is a running joke among artists. This module exists specifically to dismantle that reputation into an actual, learnable structure, the same way Module 15 dismantled \"faces are impossible\" at the start of the Head & Portrait arc."
        ],
        coreIdea:[
          "The <b>box method</b>: before drawing a single finger, simplify the whole hand — palm plus fingers held together — into one basic box or wedge shape, angled to match the intended pose and rotation. This establishes the big proportional relationship between palm size and finger length before the much harder job of individual fingers begins.",
          "A genuinely useful proportion: the palm and the middle finger are roughly the same length. Each finger tapers, and each segment (phalange) gets shorter moving toward the fingertip. The <b>thumb</b> has its own separate range of motion and attaches noticeably lower and further back on the hand than beginners typically assume — not from the same knuckle row as the other four fingers.",
          "The four knuckles at the base of the fingers don't sit in a flat row — they arc, and that arc becomes more pronounced as the hand curls toward a fist. Beginners who draw the knuckle line flat produce a stiff, mechanical-looking hand even with otherwise reasonable proportions.",
          "Fingers are tapered cylinders with visible joints, not flat, uniform-width sausages — and the fleshy pads at the base of the thumb and pinky (sometimes called \"hand butts\" in Proko's teaching) have their own soft volume, separate from the bone structure underneath, worth accounting for once the basic box and fingers are in place.",
          "Hands can genuinely be constructed from imagination once the box-plus-knuckle-arc-plus-tapered-fingers structure is internalized — but your own hand is always available as a free, always-in-perspective reference, and using it directly (rather than only copying stylized photos) is one of the fastest ways to build real confidence here."
        ],
        mistakes:[
          "Drawing fingers as flat, uniform-width sausages with no tapering or visible volume.",
          "Attaching the thumb from the same knuckle row as the other fingers, instead of its actual lower, further-back position.",
          "Ignoring the knuckle arc entirely, producing a flat, robotic-looking row of finger bases.",
          "Skipping the box or wedge blocking stage and drawing finger outlines directly, which lets proportion drift unnoticed until the hand is nearly finished."
        ],
        proTips:[
          "Always block the whole hand as one box or wedge shape first, and only divide it into individual fingers once that box's proportions feel right.",
          "Use your own hand as an always-available reference — hold it in the actual pose you're trying to draw and look at it directly, rather than relying purely on memory or a photo.",
          "Practice at least a few hands entirely from imagination using the box method, since that's the real test of whether the structure has been learned rather than just copied."
        ],
        practice:{
          warmup:"Block five different hand poses as simple boxes or wedges only — no fingers yet, just the overall proportion and rotation.",
          daily:"Add tapered, jointed fingers with a visible knuckle arc to one blocked hand each day, checking the palm-to-middle-finger length ratio each time.",
          weekly:"Draw your own hand from life in three different poses — relaxed, gripping, pointing — using the box method throughout.",
          challenge:"Construct one full hand pose entirely from imagination, no reference at all, using only the box-and-knuckle-arc structure from this module."
        },
        resources:[
          {type:'Video', title:'How to Draw Hand Bones — Anatomy for Artists', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-hand-bones-anatomy-for-artists/', why:"Free lesson introducing the box-based simplification of the hand's bone structure — the starting point this whole module is built on.", verified:true},
          {type:'Video', title:'How to Draw HANDS — Muscle Anatomy of the Hand', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-hands-muscle-anatomy-of-the-hand/', why:"Free follow-up covering the fleshy pads and muscle forms visible on the hand's surface, building on the bone lesson above.", verified:true},
          {type:'Video', title:'How to Draw Hands from IMAGINATION — Step-by-Step', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/how-to-draw-hands-from-imagination-step-by-step', why:"Free lesson walking through constructing a hand pose entirely from imagination — directly matches this module's stretch challenge.", verified:true},
          {type:'Reference Tool', title:'Hand pose reference', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"The same free, configurable timed reference tool from Module 9, useful here for a steady supply of varied hand poses to construct from.", verified:true}
        ],
        quiz:[
          {q:"What should be drawn before any individual finger, according to the box method?", options:["The fingernails","A single box or wedge shape for the whole hand, matching the pose's rotation","The palm lines","A full ink outline"], correct:1, explain:"Blocking the whole hand's proportion first prevents the finger-by-finger proportion drift that happens when fingers are drawn directly."},
          {q:"Where does the thumb actually attach relative to the other four fingers?", options:["From the exact same knuckle row","Noticeably lower and further back on the hand","Higher than the other fingers","It doesn't attach to the hand directly"], correct:1, explain:"Beginners commonly attach the thumb from the same row as the fingers, which is anatomically incorrect."},
          {q:"What happens to the finger-base knuckle line as the hand curls into a fist?", options:["It stays perfectly flat","Its natural arc becomes more pronounced","It disappears entirely","It only matters for cartoon hands"], correct:1, explain:"The knuckles arc rather than sitting in a flat row, and that arc increases as the hand curls."}
        ],
        checklist:[
          "I block the whole hand as a box or wedge before drawing individual fingers.",
          "I can draw tapered, jointed fingers rather than flat, uniform-width shapes.",
          "I attach the thumb at its correct lower, further-back position rather than the finger knuckle row.",
          "I have constructed at least one hand pose entirely from imagination using the box method."
        ],
        nextStep:"Hand Gestures — what hands communicate, and why memorizing a library of poses fails the same way memorizing facial expressions does."
      },
      {
        id:'m37', plate:'37', title:'Hand Gestures', difficulty:'Intermediate',
        studyTime:'15 min', practiceTime:'15\u201320 min/day', prereq:['m36','m29'],
        hook:"Hands communicate almost as much as faces do — and get drawn just as generically, for the same fixable reason.",
        whyItMatters:[
          "This closes out the upper-body unit of Body & Anatomy by connecting the hand structure from the last module to actual storytelling. The same principle from Module 29 (facial expressions come from specific muscles pulling specific points, not a memorized template) applies directly here: a memorized library of \"hand poses\" doesn't generalize to a new gesture or angle the way understanding the underlying tension and relaxation does."
        ],
        coreIdea:[
          "Hands are a major nonverbal communication channel: an open, relaxed hand reads as calm or inviting; a clenched fist reads as tension or aggression; pointing, steepled fingers, and an open palm each carry specific, culturally legible social meaning. Understanding <i>why</i> a pose reads a certain way — which tendons are taut, which muscles are gripping versus relaxed — generalizes better than memorizing a fixed set of \"reference\" hand poses.",
          "Natural hand poses are rarely perfectly symmetrical or evenly spaced. Relaxed fingers fall at slightly different, cascading angles rather than curling uniformly — a hand where every finger bends at the exact same angle is one of the most common and most visible signs of a stiff, under-observed drawing.",
          "A hand shown holding an object should visibly respond to that object's actual shape and weight — fingers wrapping and pressure concentrating differently around a pen than around a cup. Drawing a generic open hand and placing an object near it, rather than building the grip around the object's specific form, is a common shortcut that reads as unconvincing.",
          "Observing your own hand directly — in a mirror, or simply held up and looked at — in a specific communicative pose is more valuable at this stage than copying stylized reference photos, since it forces the same genuine observation habit from Module 5 rather than passive copying."
        ],
        mistakes:[
          "Curling every finger at the exact same uniform angle, producing a stiff, mechanical-looking hand even with otherwise correct proportions.",
          "Treating hand poses as a memorized library rather than understanding the underlying tension-versus-relaxation logic that generalizes to new poses.",
          "Drawing a hand \"holding\" an object without the grip actually wrapping around and responding to that object's real shape and weight.",
          "Relying only on stylized reference photos instead of observing your own hand directly in a genuine pose."
        ],
        proTips:[
          "Look at your own hand relaxed, then gently tensed, and note precisely which parts of its shape change and which stay the same.",
          "When drawing a hand holding something, draw the object first, then build the hand's grip around it, rather than drawing a generic hand and placing an object nearby afterward.",
          "Deliberately vary finger angles slightly even in a resting pose — perfect uniformity is one of the fastest tells of an unobserved hand."
        ],
        practice:{
          warmup:"Draw your own relaxed hand from life, noting the natural, slightly cascading angle of the fingers rather than a uniform curl.",
          daily:"Draw your own hand in a new deliberate, communicative pose each day — pointing, an open stop gesture, a loose fist — and note exactly what changes each time.",
          weekly:"Draw a hand gripping a specific object (a pen, a cup, a phone), making sure the grip visibly responds to that object's real shape and weight.",
          challenge:"Draw the same simple scene with two versions of a hand gesture that should communicate opposite emotional states (relaxed and welcoming versus tense and closed off), keeping the rest of the pose identical."
        },
        resources:[
          {type:'Reference Tool', title:'Hand pose reference', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"The same free reference tool used in the previous module, useful here specifically for a steady supply of varied, natural hand gestures to observe and construct from.", verified:true},
          {type:'Video', title:'The Secret to Creating Clear Expressions (Art Tips #12)', creator:'Aaron Blaise', url:'https://www.youtube.com/watch?v=S94VIlQyFWo', why:"Revisited from Module 29 — the same clarity-through-specific-muscle-pull principle it covers for faces applies directly to reading and constructing hand gestures.", verified:true}
        ],
        quiz:[
          {q:"Why does this module compare hand gestures to Module 29's facial expressions?", options:["They're unrelated topics placed together by coincidence","Both fail the same way when memorized as a fixed template instead of understood through underlying muscle tension and relaxation","Hands and faces use identical muscles","Facial expressions don't actually matter for hands"], correct:1, explain:"Understanding the underlying pull, in both cases, generalizes to new poses far better than a memorized library does."},
          {q:"What's a common and very visible sign of a stiff, under-observed hand drawing?", options:["Slightly different finger angles in a relaxed pose","Every finger curling at the exact same uniform angle","Using reference photos","Drawing the thumb separately from the fingers"], correct:1, explain:"Natural hands rarely curl with perfect uniformity — that uniformity itself is what reads as artificial."},
          {q:"What does this module recommend when drawing a hand holding an object?", options:["Draw a generic open hand and place the object nearby afterward","Draw the object first, then build the hand's grip around its actual shape and weight","Objects should never be shown with hands","Always draw the hand in a fist regardless of the object"], correct:1, explain:"The grip should visibly respond to the specific object being held, not float near a generic hand shape."}
        ],
        checklist:[
          "I can draw a relaxed hand with naturally cascading, non-uniform finger angles.",
          "I can identify which parts of my own hand's shape change between a relaxed and a tensed pose.",
          "I can draw a hand gripping a specific object so the grip responds to its actual shape.",
          "I observe my own hand directly at least as often as I copy stylized reference photos."
        ],
        nextStep:"The upper-body unit of this arc is complete. Next: Pelvis, Legs, Feet, full-body construction, movement, foreshortening, clothing, body language, and character design — mapped on the home page and being written next."
      },
      {
        id:'m38', plate:'38', title:'Pelvis', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20 min/day', prereq:['m34'],
        hook:"A tilting bucket, not a flat oval — and its tilt is the actual mechanical reason legs attach believably or look like they're floating.",
        whyItMatters:[
          "The Torso module introduced the pelvis as a simple oval mass. This module goes deeper because pelvis <b>tilt</b> is the single biggest factor in whether legs attach to a figure believably — a flat, untilted pelvis is one of the fastest ways to produce the classic \"floating legs\" problem, even when the legs themselves are constructed correctly."
        ],
        coreIdea:[
          "The pelvis is better understood as a <b>bucket or basin</b> shape than a flat oval — it has real depth, a front rim, and it can tilt forward, back, and side to side independently of the rib cage above it, the same independence the torso's two-oval system already established.",
          "The <b>ASIS</b> (anterior superior iliac spine) — two bony points visible at the front of the hips — is a genuinely useful, checkable landmark pair. Connecting them with an imaginary line gives a fast, reliable way to read the bucket's current tilt and rotation in any pose.",
          "The hip joints, where the legs attach, sit at the base of this bucket, and their effective angle is set directly by the bucket's tilt. This is the actual mechanical source of <b>contrapposto</b> — the classic weight-shifted standing pose — not an arbitrary stylistic curve.",
          "When weight shifts onto one leg, that leg's hip rises and the pelvis tilts — the ASIS line on the weight-bearing side lifts higher than on the relaxed side. This single mechanical fact is what produces the S-curve associated with a relaxed standing pose."
        ],
        mistakes:[
          "Treating the pelvis as a flat oval with no tilt or rotation of its own, independent from the rib cage.",
          "Ignoring the ASIS landmark pair when checking a drawn pelvis's angle, relying on guesswork instead.",
          "Attaching legs straight down from a flat, untilted pelvis regardless of weight shift, producing a stiff or floating stance.",
          "Forgetting that the weight-bearing side's hip rises during a weight-shifted pose, rather than staying level with the other side."
        ],
        proTips:[
          "Mark the two ASIS points first on any pelvis construction, and use the line between them as a running tilt gauge.",
          "When a standing pose isn't reading correctly, check pelvis tilt before troubleshooting the legs themselves.",
          "Keep tilting the pelvis independently from the rib cage above it — the same relationship the torso's two ovals already established."
        ],
        practice:{
          warmup:"Draw the pelvis bucket with both ASIS points marked, from the front, side, and back.",
          daily:"Draw the same pelvis tilted for a new weight-shifted standing pose each day, tracking how the ASIS line's angle changes.",
          weekly:"Construct a full standing figure, focused only on getting the pelvis tilt correct, before adding legs in any detail.",
          challenge:"Draw the same standing pose twice — once with a flat, untilted pelvis and once with correct contrapposto tilt — and compare how differently the two read."
        },
        resources:[
          {type:'Course', title:'Landmarks of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/landmarks-of-the-human-body', why:"Free lesson covering the ASIS and other pelvis landmarks as part of Proko's full-body landmark system, the same free resource already used for Neck and Shoulders.", verified:true},
          {type:'Course', title:'Mannequinization — Structure of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/mannequinization-structure-of-the-human-body', why:"Free lesson covering pelvis tilt as part of building a full simplified mannequin figure.", verified:true}
        ],
        quiz:[
          {q:"What is the ASIS, and why does it matter for drawing the pelvis?", options:["A muscle in the lower back, irrelevant to the pelvis","Two bony landmark points at the front of the hips, useful for reading the pelvis's current tilt","A type of pencil grade","The name for the hip socket itself"], correct:1, explain:"Connecting the two ASIS points with an imaginary line is a fast, reliable way to check pelvis tilt and rotation."},
          {q:"What is the actual mechanical source of a contrapposto (weight-shifted) standing pose?", options:["Pure artistic stylization with no anatomical basis","The pelvis tilting as weight shifts onto one leg, raising that side's hip","The rib cage tilting, unrelated to the pelvis","Both legs bending equally"], correct:1, explain:"The weight-bearing hip rises as the pelvis tilts — this is the mechanical cause of the classic S-curve pose."},
          {q:"According to this module, what shape better describes the pelvis than a flat oval?", options:["A flat plank","A bucket or basin with real depth and its own independent tilt","A perfect sphere","A flat triangle"], correct:1, explain:"Treating the pelvis as a bucket that can tilt independently of the rib cage is what makes legs attach believably."}
        ],
        checklist:[
          "I can construct the pelvis as a bucket shape with the ASIS landmark points marked.",
          "I can tilt the pelvis independently from the rib cage above it.",
          "I can construct a weight-shifted standing pose showing the correct hip rise on the weight-bearing side.",
          "I check pelvis tilt before troubleshooting legs when a standing pose isn't reading correctly."
        ],
        nextStep:"Legs — a tapering column widest at the hip, not a uniform tube, with a femur that angles inward toward the knee."
      },
      {
        id:'m39', plate:'39', title:'Legs', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m38','m7'],
        hook:"Widest at the hip, narrowest at the ankle, with a bare shinbone on one side and a padded calf on the other — not a uniform tube.",
        whyItMatters:[
          "Legs connect the pelvis tilt from the last module to the feet in the next one, and they bear the body's full weight — their construction directly determines whether a standing or walking figure reads as genuinely grounded or subtly floating."
        ],
        coreIdea:[
          "The leg simplifies to a <b>tapering column</b> — widest at the hip and thigh, narrowest at the ankle — matching the real fact that upper-leg bone and muscle mass genuinely exceeds lower-leg mass. This isn't a single smooth taper, though: the calf creates a secondary bulge partway down before the leg narrows again toward the ankle.",
          "The <b>femur</b> (thighbone) angles inward from hip to knee rather than hanging as a perfectly vertical column — this inward angle is why two standing legs don't read as parallel tubes, and it becomes more pronounced with a wider pelvis.",
          "The <b>knee</b> is a genuinely complex joint. Rather than attempting full anatomical detail immediately, treat it as a wedge or box connector between the two leg cylinders — the same combine-and-cut logic from Module 10 — and refine from there.",
          "A specific, checkable asymmetry: the <b>tibia</b>'s shin bone sits directly under the skin along the leg's inner-front edge, with no muscle padding over that line, while the outer and back of the lower leg carries the meaty calf muscle. Feeling your own shin confirms this immediately, and it's what keeps a drawn lower leg from reading as a uniform, padded tube."
        ],
        mistakes:[
          "Drawing the leg as one uniformly tapering shape, ignoring the calf's distinct secondary bulge lower down.",
          "Drawing both legs as perfectly parallel vertical columns, ignoring the femur's real inward angle from hip to knee.",
          "Skipping a genuine wedge or box knee construction and merging the two leg cylinders directly at a point.",
          "Treating the whole lower leg as uniformly padded with muscle, ignoring the tibia's bare, bony inner edge."
        ],
        proTips:[
          "Block legs as two tapering cylinders connected by a wedge or box knee, before any muscle refinement.",
          "Check the femur's inward angle from hip to knee rather than defaulting to straight, parallel legs.",
          "Feel your own shin with your hand to internalize the tibia's bare edge before drawing a lower leg."
        ],
        practice:{
          warmup:"Block a leg as two tapering cylinders with a wedge knee connector, from the front and from the side.",
          daily:"Draw a standing leg pair each day, checking the femur's inward angle from hip to knee against the pelvis width.",
          weekly:"Draw a lower leg tracking the bare tibia edge on one side against the padded calf bulge on the other, from multiple angles.",
          challenge:"Construct a full pair of legs supporting a weight-shifted pose, connecting directly to the pelvis tilt from the last module."
        },
        resources:[
          {type:'Article', title:'How to Draw Legs, the Easy Step-by-Step Guide with Simplified Anatomy', creator:'GVAAT\u2019S WORKSHOP', url:'https://gvaat.com/blog/how-to-draw-legs-the-easy-step-by-step-guide/', why:"A free, detailed, illustrated tutorial covering exactly this module's simplified leg construction.", verified:true},
          {type:'Course (paid)', title:'Anatomy of the Human Body — Legs', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course/anatomy-of-the-human-body', why:"For anyone wanting full bone-and-muscle depth beyond construction basics: a dedicated 107-lesson paid course. Worth knowing it exists, but not required for this module.", verified:true}
        ],
        quiz:[
          {q:"Why doesn't the leg taper as one smooth, uniform shape from hip to ankle?", options:["It does taper perfectly uniformly","The calf creates a distinct secondary bulge partway down before the leg narrows again toward the ankle","Legs have no real taper at all","Only female legs have this feature"], correct:1, explain:"The calf's bulge breaks up what would otherwise be a single uniform taper."},
          {q:"What does the femur's real angle from hip to knee look like?", options:["Perfectly vertical, parallel to the other leg","Angled inward, which is why two standing legs aren't parallel tubes","Angled outward away from the body","There is no consistent angle"], correct:1, explain:"This inward angle becomes more pronounced with a wider pelvis and prevents legs from reading as parallel columns."},
          {q:"What's the recommended way to initially construct the knee?", options:["Full anatomical muscle detail immediately","A wedge or box connector between the two leg cylinders, refined from there","Skip the knee entirely and merge the cylinders directly","Always draw it as a perfect sphere"], correct:1, explain:"The same combine-and-cut construction logic from Module 10 applies directly to the knee joint."}
        ],
        checklist:[
          "I can block a leg as two tapering cylinders connected by a wedge knee.",
          "I construct the femur's inward angle from hip to knee rather than drawing parallel vertical legs.",
          "I can draw a lower leg showing the bare tibia edge distinct from the padded calf side.",
          "I connect a constructed leg pair correctly to the pelvis tilt from the previous module."
        ],
        nextStep:"Feet — the same box-before-detail method that broke hands open, applied to the other famously tricky extremity."
      },
      {
        id:'m40', plate:'40', title:'Feet', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20 min/day', prereq:['m39'],
        hook:"A wedge, a toe box, and an ankle circle — the same block-before-detail discipline that made hands learnable, applied to the other extremity with a bad reputation.",
        whyItMatters:[
          "Feet complete the leg's construction and, much like hands, carry a reputation for being especially hard to draw. The good news, established directly by the Hands module, is that the same box-before-detail method works just as well here."
        ],
        coreIdea:[
          "The foot simplifies to three forms established before any organic refinement: a <b>wedge</b> for the main foot mass (taller at the heel, tapering down toward the toes), a separate <b>toe block</b> at the front, and a <b>circle</b> marking the ankle joint where the leg connects.",
          "The wedge's base needs to follow the actual direction the foot is pointing — easy to get wrong when a foot is drawn at an angle rather than straight-on, and worth checking deliberately each time.",
          "The two <b>ankle bones</b> (malleoli) are not level with each other: the inner one sits noticeably higher than the outer one. This is a genuinely useful, checkable landmark pair — the foot's equivalent of the hand's knuckle arc or the pelvis's ASIS line — and easy to confirm on your own foot directly.",
          "The foot has a real, visible <b>arch</b> along its inner side, running from heel to ball, which is a major part of what keeps the wedge from reading as a flat plank. For dynamic poses — tip-toe, mid-stride — splitting the wedge into three sub-sections (heel, bridge, toes) makes the joint bending between them much easier to show convincingly."
        ],
        mistakes:[
          "Skipping the wedge, toe-box, and ankle-circle blocking stage and drawing the foot's outline and toes directly.",
          "Drawing both ankle bones at the same height, instead of the inner one sitting higher than the outer.",
          "Treating the foot as a flat, uniformly thick plank with no visible arch.",
          "Failing to adjust the wedge's base direction to match the actual angle the foot is pointing in a given pose."
        ],
        proTips:[
          "Block wedge, toe box, and ankle circle before any detail — exactly the hand's box method, applied here.",
          "Check your own ankle directly: the inner bone sits higher than the outer one, every time.",
          "For a dynamic pose, split the wedge into heel, bridge, and toe sub-sections to show the joint bending between them."
        ],
        practice:{
          warmup:"Block a foot as a wedge, toe box, and ankle circle from three different angles.",
          daily:"Mark both ankle bones on a simplified foot each day, checking that the inner one consistently sits higher.",
          weekly:"Draw a foot on tip-toe, splitting the wedge into heel, bridge, and toe sub-sections to show the bend.",
          challenge:"Construct a full leg-and-foot pair supporting a weight-shifted standing pose, connecting the foot's wedge direction to the leg above it."
        },
        resources:[
          {type:'Article', title:'How to Draw Feet — the Easy Step-by-Step Guide', creator:'GVAAT\u2019S WORKSHOP', url:'https://gvaat.com/blog/how-to-draw-feet-the-easy-step-by-step-method/', why:"A free, illustrated tutorial covering exactly the wedge-and-ankle-landmark construction this module is built on, from the same source as the Legs and Clothing tutorials in this arc.", verified:true},
          {type:'Article', title:'How To Draw Feet', creator:'The Virtual Instructor', url:'https://thevirtualinstructor.com/how-to-draw-feet.html', why:"A second, independently written explanation of the same three-basic-forms wedge method, useful for seeing the same idea explained a different way.", verified:true}
        ],
        quiz:[
          {q:"What are the foot's three main construction forms?", options:["Two identical circles and a square","A wedge for the main mass, a toe block, and an ankle circle","A single cylinder","Four separate triangles"], correct:1, explain:"These three forms are established before any organic refinement, the same discipline used for hands."},
          {q:"Which ankle bone sits higher, the inner or the outer?", options:["They sit at exactly the same height","The inner ankle bone sits higher than the outer one","The outer ankle bone always sits higher","Neither ankle bone is a reliable landmark"], correct:1, explain:"This is a genuinely useful, checkable landmark pair, confirmable directly on your own foot."},
          {q:"What does splitting the foot's wedge into heel, bridge, and toe sub-sections help show?", options:["Nothing, it's an unnecessary step","Joint bending in dynamic poses like tip-toe or mid-stride","Only the color of the shoe","The exact bone count in the foot"], correct:1, explain:"This sub-division makes the joint bending between sections much easier to show convincingly."}
        ],
        checklist:[
          "I can block a foot as a wedge, toe box, and ankle circle before adding detail.",
          "I can mark the ankle bones with the inner one correctly sitting higher than the outer.",
          "I draw the foot with a visible arch rather than as a flat plank.",
          "I can split the foot's wedge into sub-sections to construct a dynamic, bent pose."
        ],
        nextStep:"Complete Body Construction — every part built so far, run in the actual professional order of operations on one figure."
      },
      {
        id:'m41', plate:'41', title:'Complete Body Construction', difficulty:'Advanced',
        studyTime:'30 min', practiceTime:'30\u201345 min/day', prereq:['m34','m39','m40','m9'],
        hook:"Every system from this whole arc, run in the actual professional order, on one figure — the same capstone test Module 30 ran for the head, now for the entire body.",
        whyItMatters:[
          "This is the first true capstone of the Body & Anatomy arc, mirroring what Module 30 (Head + Features Integration) did for the head. Torso, pelvis, arms, hands, legs, and feet have all been practiced separately — integration is where all of it has to run together on one coherent, moving figure, which is a genuinely different and harder skill than executing any single part alone."
        ],
        coreIdea:[
          "The professional construction order, pulling directly from every module in this arc so far: <b>gesture</b> or action line first (Module 9), to establish the pose's energy before any volume exists at all; then the <b>torso's two ovals and spine</b> (Module 34), with <b>pelvis tilt</b> (Module 38) established relative to that gesture; then <b>limbs</b> blocked as simplified tapering cylinders (arms from Module 35, legs from Module 39) attached at the correct shoulder and hip sockets; <b>hands and feet</b> blocked last as their own simplified box and wedge forms (Modules 36 and 40), since they're the most detailed parts and benefit from the whole skeleton's proportion already being locked in first.",
          "Working <b>loose to detailed</b> across the whole figure in successive passes — the same approach Module 30 used for the head — rather than fully finishing one body part before starting the next. Perfecting one hand while the rest of the figure remains unblocked is a reliable way to end up with a beautifully rendered hand attached to a proportionally broken body.",
          "A fast, genuinely useful whole-figure sanity check: a <b>plumb line</b> dropped straight down from the base of the skull, or the pit of the neck, should generally fall through the weight-bearing foot in a standing pose. If it doesn't, the figure will read as subtly falling over, even if every individual part was constructed correctly in isolation."
        ],
        mistakes:[
          "Fully rendering one body part in detail before any other part is even blocked in, instead of working loose to detailed across the whole figure.",
          "Skipping the gesture and action-line step and going straight to construction, producing a technically correct but lifeless figure.",
          "Forgetting the balance and plumb-line check, resulting in a standing figure that reads as about to topple over.",
          "Blocking limbs before the torso and pelvis's core gesture and tilt are established, so the limbs have nothing coherent to attach to."
        ],
        proTips:[
          "Always start with the gesture or action line, even a fast few-second one, before any construction begins.",
          "Work every part of the figure loosely in a first pass, then return for a second, more detailed pass, rather than finishing sequentially.",
          "Check balance with an imaginary plumb line from the neck through the weight-bearing foot on any standing pose."
        ],
        practice:{
          warmup:"Draw a five-second gesture line, then a loose full-body blocking pass — torso, limbs, hands and feet — in under five minutes total.",
          daily:"Construct one full figure from a reference pose, working loose-to-detailed in two full passes rather than finishing any single part first.",
          weekly:"Construct a standing figure and check its balance with a plumb line from the neck through the weight-bearing foot, adjusting if it fails the check.",
          challenge:"Construct the same pose twice — once finishing each part sequentially, once working loose-to-detailed across the whole figure — and compare which reads more coherently."
        },
        resources:[
          {type:'Reference Tool', title:'Figure drawing practice tool', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"The same free, configurable timed pose tool used since Module 9, ideal for practicing full-figure construction against a steady stream of real poses.", verified:true},
          {type:'Course', title:'Mannequinization — Structure of the Human Body', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/mannequinization-structure-of-the-human-body', why:"Free lesson specifically covering how to combine all the body's masses into one simplified mannequin figure, the free foundation this module's synthesis builds on.", verified:true}
        ],
        quiz:[
          {q:"What is the recommended first step in the professional construction order this module describes?", options:["Detailed hands and feet","Gesture or action line, before any volume is added","Full facial detail","Choosing clothing"], correct:1, explain:"Gesture establishes the pose's energy before any construction volume exists, the same principle from Module 9."},
          {q:"What does \"loose to detailed\" mean in this module's recommended workflow?", options:["Finishing each body part completely before moving to the next","Working every part of the figure loosely first, then returning for detailed passes across the whole figure","Skipping detail entirely","Only detailing the face"], correct:1, explain:"This avoids ending up with one beautifully rendered part attached to an otherwise unblocked, broken body."},
          {q:"What does the plumb-line balance check test?", options:["Whether the pencil is sharp enough","Whether a line from the neck falls through the weight-bearing foot in a standing pose","The exact height of the figure","Whether the gesture line is straight"], correct:1, explain:"If the plumb line doesn't pass through the weight-bearing foot, the figure will read as falling over."}
        ],
        checklist:[
          "I start every full-figure construction with a gesture or action line before adding volume.",
          "I work loose-to-detailed across a whole figure rather than finishing one part before starting the next.",
          "I can check a standing figure's balance using a plumb line from the neck through the weight-bearing foot.",
          "I can construct hands and feet as their own simplified forms only after the whole skeleton's proportion is blocked in."
        ],
        nextStep:"Body Movement — what happens to this construction once the figure actually starts walking."
      },
      {
        id:'m42', plate:'42', title:'Body Movement', difficulty:'Advanced',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m41'],
        hook:"Contact, passing, contact again — nearly the entire walk cycle, repeating forever.",
        whyItMatters:[
          "This takes the static full-body construction from the last module and adds time. Walking, running, and other repeated actions are the real proving ground for whether a constructed figure can hold together across a sequence, not just survive a single frozen pose."
        ],
        coreIdea:[
          "Human walking breaks down into a small number of repeating key poses, commonly taught in animation as <b>contact, down, passing, up</b>: contact is the leading foot just touching the ground; passing is the moving leg swinging directly under the body in single-leg support, the highest point of the body's vertical movement; the cycle then repeats with the opposite leg.",
          "The body's center of gravity genuinely rises and falls slightly with each step — highest during the passing pose, lowest during contact. This small vertical bob, tied directly to the balance and plumb-line logic from the last module, is a major part of what makes a walk read as alive rather than gliding.",
          "Arms and legs move in <b>opposition</b>: as the right leg swings forward, the left arm swings forward too, not the same-side limb. This is a real, checkable rule that's easy to get backward without noticing, and doing so is one of the fastest ways to make a walking figure look wrong.",
          "Weight shift, tied directly to the pelvis tilt from Module 38, happens continuously through a walk rather than only in a static standing pose — the weight-bearing hip rises at each contact pose, the same mechanism from that module now playing out in motion.",
          "Running exaggerates all of the above: a larger vertical bob, a moment where both feet leave the ground entirely, and a more pronounced forward lean through the whole figure."
        ],
        mistakes:[
          "Drawing a walking figure with the same-side arm and leg swinging forward together, instead of the correct opposition.",
          "Ignoring the vertical bob entirely, producing a figure that appears to glide rather than genuinely walk.",
          "Treating a walk cycle as one static pose repeated identically, rather than a sequence of genuinely distinct key poses.",
          "Forgetting that pelvis tilt shifts continuously through a walk, rather than staying fixed as in a static standing pose."
        ],
        proTips:[
          "Memorize the four-pose walk breakdown — contact, down, passing, up — as a checklist for any walking figure.",
          "Check arm-leg opposition specifically on any walking pose, since it's easy to get backward without noticing.",
          "Even a single frozen walking pose should clearly represent one of the four key poses, so its weight and balance make sense on their own."
        ],
        practice:{
          warmup:"Draw the four key walk poses — contact, down, passing, up — for one leg cycle, in a row.",
          daily:"Draw one walking figure each day, deliberately checking arm-leg opposition before moving on.",
          weekly:"Draw a full walk cycle's vertical bob by marking the head's height at each of the four key poses, comparing the difference.",
          challenge:"Draw the same figure walking and running, exaggerating the vertical bob, forward lean, and moment of full airborne suspension for the run."
        },
        resources:[
          {type:'Reference Tool', title:'Figure drawing practice tool', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"The same free timed-pose tool used throughout this arc, useful here for varied action and movement references beyond static standing poses.", verified:true},
          {type:'Historical Reference', title:'Animal Locomotion (1887)', creator:'Eadweard Muybridge', url:'', why:"Muybridge's stop-motion photography of human and animal movement, now well over a century old and in the public domain, remains the foundational reference nearly every modern walk-cycle tutorial still traces back to.", verified:true}
        ],
        quiz:[
          {q:"What are the four key poses commonly used to break down a walk cycle?", options:["Jump, land, crouch, stand","Contact, down, passing, up","Start, middle, end, repeat","Left, right, forward, back"], correct:1, explain:"These four poses, repeating with each leg, form the backbone of nearly every walk-cycle breakdown."},
          {q:"How do arms and legs move relative to each other during a normal walk?", options:["Same-side arm and leg swing forward together","In opposition — the opposite arm swings forward as a given leg does","Arms don't move during a normal walk","Both arms swing forward at the same time"], correct:1, explain:"Getting this opposition backward is one of the fastest ways to make a walking figure look wrong."},
          {q:"What happens to the body's center of gravity during a walk cycle?", options:["It stays perfectly level throughout","It rises and falls slightly, highest at the passing pose and lowest at contact","It only changes during running, never walking","It moves side to side but never up or down"], correct:1, explain:"This vertical bob is a major part of what makes a walk read as alive rather than gliding."}
        ],
        checklist:[
          "I can draw the four key walk poses — contact, down, passing, up — for a single leg cycle.",
          "I check arm-leg opposition on any walking figure I construct.",
          "I can show a walk cycle's vertical bob by comparing head height across the key poses.",
          "I can exaggerate a walk into a run using a larger bob, forward lean, and a moment of full suspension."
        ],
        nextStep:"Foreshortening — what happens when a limb points mostly toward the viewer instead of across the picture plane."
      },
      {
        id:'m43', plate:'43', title:'Foreshortening', difficulty:'Advanced',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m41','m21'],
        hook:"An arm pointing straight at the viewer isn't just short — it's compressed, and construction is what keeps that compression from turning into the classic \"T-rex arm\" mistake.",
        whyItMatters:[
          "Module 21 introduced foreshortening specifically for the head. This module extends the same perspective logic from Module 8 to whole limbs and the full figure, which is where it becomes genuinely difficult — and where most beginners' dynamic action poses quietly fall apart."
        ],
        coreIdea:[
          "Foreshortening happens whenever a form — an arm, a leg, a whole figure — is oriented mostly toward or away from the viewer rather than across the picture plane. It's the same vanishing-point perspective logic from Module 8, now applied to organic cylinders instead of boxes.",
          "A foreshortened cylinder doesn't just get shorter: its near end appears larger, its far end appears smaller, and its visible length compresses dramatically, sometimes to a small fraction of its actual proportional length.",
          "<b>Overlapping</b> is the single most important cue for reading foreshortening correctly. A forearm reaching toward the viewer will overlap and partially hide the upper arm behind it — getting these overlaps right often matters more than getting the exact compressed proportions right.",
          "A very common beginner mistake, sometimes called \u201cT-rex arm,\u201d is under-compressing a foreshortened limb out of an instinct to preserve its \u201ccorrect\u201d length — producing an arm that reads as too long and floats disconnected from the body instead of genuinely pointing at the viewer.",
          "Construction is what makes foreshortening survivable: building the underlying cylinder forms first, already in the compressed perspective, using the same combine-and-cut logic from Module 10, makes it far easier to keep proportions consistent than trying to foreshorten an already-finished outline after the fact."
        ],
        mistakes:[
          "Under-compressing a foreshortened limb (the T-rex arm problem), producing something that reads as too long rather than pointing at the viewer.",
          "Ignoring overlap cues, so a foreshortened limb doesn't actually hide the parts of the body it should.",
          "Attempting to foreshorten a finished outline directly, instead of building the underlying construction cylinders first, in perspective.",
          "Avoiding foreshortened poses altogether because they're difficult, rather than treating them as a deliberate test of this whole arc's construction skills."
        ],
        proTips:[
          "When foreshortening a limb, exaggerate the compression more than instinct suggests — the T-rex arm mistake comes from under-compressing, almost never from over-compressing.",
          "Check overlaps first, before worrying about exact proportion — correct overlap does most of the work of reading as foreshortened.",
          "Always build the underlying construction cylinders in perspective before attempting a foreshortened outline directly."
        ],
        practice:{
          warmup:"Draw a simple cylinder pointed directly at the viewer, deliberately exaggerating the near-end and far-end size difference.",
          daily:"Draw an arm reaching toward the viewer, focusing on the overlap between forearm and upper arm rather than exact proportion.",
          weekly:"Find one genuinely foreshortened reference pose and construct it using cylinders in perspective before adding any outline detail.",
          challenge:"Draw the same reaching arm pose twice — once under-compressed (the T-rex arm mistake, on purpose) and once correctly compressed — and compare them side by side."
        },
        resources:[
          {type:'Video', title:'Introduction to Perspective Drawing (1994 Chalkboard Lecture)', creator:'Marshall Vandruff', url:'https://www.youtube.com/watch?v=R60e9_ofV68', why:"Revisited from Module 8 — foreshortening is fundamentally the same perspective logic covered there, now applied to organic forms instead of boxes.", verified:true},
          {type:'Reference Tool', title:'Figure drawing practice tool', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"Useful for finding genuinely foreshortened poses to practice constructing, beyond the gentler angles most beginner references default to.", verified:true}
        ],
        quiz:[
          {q:"What actually happens to a cylinder pointed directly at the viewer, beyond just \"getting shorter\"?", options:["Nothing else changes","Its near end appears larger and its far end appears smaller, in addition to compressing dramatically","It becomes perfectly circular","It disappears from view entirely"], correct:1, explain:"This near-large, far-small relationship is the same perspective logic from Module 8, applied to an organic form."},
          {q:"What is the \"T-rex arm\" mistake?", options:["Drawing an arm too short","Under-compressing a foreshortened limb, making it read as too long instead of pointing at the viewer","Drawing too many overlaps","Forgetting to draw a hand"], correct:1, explain:"The instinct to preserve a limb's \"correct\" length is exactly what causes under-compression."},
          {q:"What cue does this module say often matters more than exact compressed proportion?", options:["Color","Overlapping — whether the near part of a limb correctly hides the part behind it","Line thickness","Shading direction"], correct:1, explain:"Correct overlap does much of the work of reading a limb as genuinely foreshortened."}
        ],
        checklist:[
          "I can draw a simple cylinder foreshortened toward the viewer, with correct near-large, far-small proportions.",
          "I prioritize overlap accuracy when constructing a foreshortened limb.",
          "I build underlying construction cylinders in perspective before attempting a foreshortened outline directly.",
          "I can recognize and correct a \"T-rex arm\" under-compression mistake in my own work."
        ],
        nextStep:"Clothing & Fabric — how fabric folds actually respond to the body construction underneath, rather than being drawn as a separate decorative layer."
      },
      {
        id:'m44', plate:'44', title:'Clothing & Fabric', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m41'],
        hook:"Fabric doesn't fold randomly — it responds to gravity, tension, and the body underneath in a small number of repeatable patterns.",
        whyItMatters:[
          "This is the first module in the arc to cover something other than the body directly, but it depends entirely on everything built so far. Clothing folds are a direct consequence of the body construction underneath, not a separate decorative layer — which is exactly why this module comes after, not before, whole-body construction."
        ],
        coreIdea:[
          "Fabric folds are driven by three physical forces: <b>gravity</b> pulling fabric straight down wherever it isn't supported, <b>tension</b> where fabric is pulled taut between two points (a fastened button, a stretched elbow, a belt), and <b>compression</b> where fabric bunches at a point the body compresses it (a bent knee, a bent elbow).",
          "A small number of repeatable fold types account for most real clothing: folds radiating outward from a tension point, folds bunching at a compressed joint, and folds hanging in relatively straight vertical lines wherever fabric drapes freely with nothing supporting it.",
          "Clothing reads far more convincingly when the body's construction is drawn underneath <i>first</i> — leaning directly on the whole-body construction from earlier in this arc — with fabric then added as a layer that responds to that specific pose, rather than designing folds abstractly with no body reference underneath.",
          "Folds should be simplified and edited for visual clarity, not copied with total photographic accuracy. Real fabric produces far more small folds than a drawing needs; part of the actual skill is choosing which folds communicate the pose and underlying form, and deliberately dropping the rest."
        ],
        mistakes:[
          "Drawing clothing without constructing the body's pose underneath first, producing folds that don't correspond to any real joint or tension point.",
          "Copying every visible fold from a reference with no editing, producing visual clutter that obscures the pose instead of clarifying it.",
          "Ignoring gravity, drawing folds that seem to defy which direction is actually down.",
          "Treating all folds as the same type, rather than recognizing tension folds, compression folds, and hanging folds as genuinely different patterns with different causes."
        ],
        proTips:[
          "Always construct the body's pose first, then drape fabric over it, rather than designing clothing in isolation.",
          "Identify a garment's actual tension points and compression points before drawing a single fold line.",
          "When in doubt, draw fewer, larger, clearer folds rather than many small, accurate ones — clarity beats total fidelity."
        ],
        practice:{
          warmup:"Construct a simple standing figure, then drape a plain shirt over it, identifying at least one tension fold and one compression fold.",
          daily:"Draw the same garment on a figure in a new pose each day, tracking how the folds change with the body's construction underneath.",
          weekly:"Take a clothing reference photo and do an editing pass — redraw it with roughly half as many fold lines while keeping the pose fully readable.",
          challenge:"Draw the same figure in two different fabrics — a stiff jacket and a loose t-shirt — on the identical pose, comparing how differently each material's folds behave."
        },
        resources:[
          {type:'Article', title:'How to Draw Folds in Clothing and Fabric', creator:'GVAAT\u2019S WORKSHOP', url:'https://gvaat.com/blog/how-to-draw-folds-in-clothing-and-fabric/', why:"A free, detailed, illustrated tutorial covering exactly the tension, compression, and gravity fold logic this module is built on, including downloadable reference material.", verified:true}
        ],
        quiz:[
          {q:"What are the three physical forces driving fabric folds, according to this module?", options:["Heat, light, and color","Gravity, tension, and compression","Wind, water, and pressure","There are no consistent forces — folds are random"], correct:1, explain:"These three forces account for most real clothing fold patterns."},
          {q:"What should be drawn before clothing, according to this module?", options:["Nothing, clothing can be designed in isolation","The body's construction and pose underneath, first","The background scene","The character's face"], correct:1, explain:"Clothing folds are a consequence of the body underneath, not an independent decorative layer."},
          {q:"What does this module recommend regarding fold accuracy versus clarity?", options:["Copy every visible fold from a reference with total accuracy","Choose fewer, larger, clearer folds that communicate the pose, rather than copying every real fold","Avoid drawing folds entirely","Only draw folds in stylized art"], correct:1, explain:"Real fabric produces more folds than a drawing needs — editing for clarity is part of the actual skill."}
        ],
        checklist:[
          "I construct the body's pose before draping and drawing clothing over it.",
          "I can identify a garment's tension points and compression points before drawing folds.",
          "I draw folds that respect gravity's direction consistently.",
          "I can edit down a reference's real folds into a smaller, clearer set without losing the pose's readability."
        ],
        nextStep:"Body Language — the same specific-muscle-pull principle from facial expressions and hand gestures, now applied to the whole body's posture."
      },
      {
        id:'m45', plate:'45', title:'Body Language', difficulty:'Intermediate',
        studyTime:'20 min', practiceTime:'20 min/day', prereq:['m41','m37'],
        hook:"The same lesson from facial expressions and hand gestures, one size bigger — posture communicates before a single facial feature is even visible.",
        whyItMatters:[
          "This closes the loop on the \u201cmuscles pulling specific points, not memorized templates\u201d principle that ran through Facial Expressions (Module 29) and Hand Gestures (Module 37), now applied to the whole body's posture — often the very first thing a viewer reads about a figure, before any facial detail is even visible."
        ],
        coreIdea:[
          "Posture alone, even reduced to silhouette with no facial detail visible at all, communicates a great deal: an open, expanded chest with a raised head reads as confident; a curled, closed posture with shoulders forward reads as defensive or sad; weight distributed evenly on both feet reads as neutral or alert, while weight collapsed onto one hip reads as relaxed or bored.",
          "This connects directly to the pelvis tilt and weight-shift mechanics from Modules 38 and 42 — the same physical mechanism that makes a walk cycle read as alive is what makes a static standing pose read as a specific emotional state.",
          "Just like faces and hands, body language shouldn't be memorized as a fixed pose-per-emotion library. Understanding which parts of the body open up versus close in, and where tension concentrates versus where it releases, generalizes to new poses the same way understanding facial muscle pulls did in Module 29.",
          "A figure's gesture line and head tilt (Module 9, Module 20) can either agree with or deliberately conflict with the rest of the body's posture — a figure whose body reads as confident but whose head turns slightly away can communicate something far more specific and interesting than one where every part points in the same direction uniformly."
        ],
        mistakes:[
          "Memorizing a fixed library of \u201cconfident pose\u201d or \u201csad pose\u201d templates instead of understanding which parts of the body open versus close for a given emotional read.",
          "Ignoring weight distribution and pelvis tilt when trying to convey mood through standing posture.",
          "Making every part of a figure's body language agree in the same direction, producing a generic, uninteresting read instead of a more specific one.",
          "Forgetting that posture reads clearly even in silhouette, with no facial detail visible at all."
        ],
        proTips:[
          "Test a pose's body language by reducing it to silhouette — the same check from Module 6, now applied to emotional readability.",
          "Before drawing, decide specifically which parts of the body should look open and expanded versus closed and contracted for the intended feeling.",
          "Try deliberately making the head or gesture line disagree slightly with the rest of the body's posture, and compare how much more specific the result feels."
        ],
        practice:{
          warmup:"Draw the same simple figure in an open, confident posture and a closed, defensive posture, using silhouette only — no internal detail.",
          daily:"Reduce a posed figure to solid silhouette each day and judge whether its intended emotional read is still clear.",
          weekly:"Draw a figure whose head or gesture-line direction deliberately disagrees with the rest of its body's posture, and compare it to a version where everything agrees.",
          challenge:"Draw the same character in five different emotional states using posture and weight distribution alone, with an identical neutral facial expression on all five."
        },
        resources:[
          {type:'Video', title:'The Secret to Creating Clear Expressions (Art Tips #12)', creator:'Aaron Blaise', url:'https://www.youtube.com/watch?v=S94VIlQyFWo', why:"Revisited from Modules 29 and 37 — the same clarity-through-specific-pull principle he teaches for faces extends directly to whole-body posture.", verified:true, videoId:'S94VIlQyFWo'},
          {type:'Reference Tool', title:'Figure drawing practice tool', creator:'Line of Action', url:'https://line-of-action.com/practice-tools/app/figure-drawing', why:"Useful here for a steady supply of varied real postures to analyze for their emotional read.", verified:true}
        ],
        quiz:[
          {q:"Can body posture communicate emotion even with no facial detail visible?", options:["No, facial detail is required to read any emotion","Yes — posture alone, even in silhouette, communicates a great deal", "Only in cartoon styles","Only when the figure is facing the viewer directly"], correct:1, explain:"An open, expanded posture versus a closed, curled one reads clearly even as a flat silhouette."},
          {q:"What does this module recommend instead of memorizing a fixed pose-per-emotion library?", options:["Copying reference photos exactly","Understanding which parts of the body open versus close, and where tension concentrates versus releases","Avoiding emotional poses until advanced","Only using facial expression, never posture"], correct:1, explain:"This generalizes to new poses the same way understanding facial muscle pulls did in Module 29."},
          {q:"What can happen when a figure's head or gesture line deliberately disagrees with the rest of its body's posture?", options:["The drawing always reads as broken or wrong","It can communicate something more specific and interesting than everything pointing in the same direction","It has no effect on the read","It only works for villains"], correct:1, explain:"A slight disagreement between head direction and body posture often reads as more specific than uniform agreement."}
        ],
        checklist:[
          "I can draw open versus closed body language using silhouette alone, with no facial detail.",
          "I connect weight distribution and pelvis tilt to a pose's intended emotional read.",
          "I can deliberately make a figure's head direction disagree with its body posture for a more specific effect.",
          "I check a pose's emotional readability by reducing it to silhouette."
        ],
        nextStep:"Character Design — the circle-triangle-rectangle alphabet from Module 6, now used on purpose to build personality before a single detail is drawn."
      },
      {
        id:'m46', plate:'46', title:'Character Design', difficulty:'Advanced',
        studyTime:'25 min', practiceTime:'25\u201330 min/day', prereq:['m45','m6'],
        hook:"The circle-rectangle-triangle alphabet from Module 6, used deliberately this time — to encode personality into a silhouette before a single detail exists.",
        whyItMatters:[
          "This module takes the \u201ccircle, rectangle, triangle as an alphabet\u201d idea from Module 6 and turns it into a deliberate design tool rather than just an observational simplification technique — the actual professional practice of shape language, used to encode a character's personality into their silhouette before any surface detail exists."
        ],
        coreIdea:[
          "<b>Shape language</b> is the practice of using a character's dominant underlying shapes to communicate personality even before detail is added. Rounded, circular dominant shapes tend to read as friendly, soft, harmless, or young; angular, triangular shapes tend to read as dangerous, dynamic, or aggressive; blocky, rectangular shapes tend to read as stable, reliable, strong, or stubborn.",
          "These associations are strong defaults, not absolute rules — skilled designers sometimes deliberately subvert them (a round, harmless-looking villain, for instance) precisely because the default expectation is what makes the subversion land.",
          "A character's silhouette should be checked in solid black, exactly like Module 6's silhouette-readability test. A strong design should remain recognizable and distinct from other characters in a cast purely from its outline, before any color or internal detail is added.",
          "<b>Proportional exaggeration</b> — stretching or shrinking specific proportions from the realistic baseline established across this entire arc, such as a larger head-to-body ratio for a young or comedic character, or longer limbs for a graceful or sinister one — is a second major design tool that works alongside shape language."
        ],
        mistakes:[
          "Designing a character's costume and surface detail before establishing a clear dominant shape language, leaving the design with no coherent read even once fully detailed.",
          "Using a shape language that accidentally contradicts the character's intended personality, with no deliberate reason.",
          "Skipping the silhouette check, producing a design that only reads correctly with color and detail added, and falls apart as a flat shape.",
          "Giving every character in a cast the same dominant shape language, making them difficult to visually distinguish from one another."
        ],
        proTips:[
          "Block a character's dominant shape language in solid silhouette before adding any surface detail, exactly like Module 6's shape-blocking exercise.",
          "Deliberately design a full cast with genuinely different dominant shapes, so each member stays distinguishable in silhouette alone.",
          "If subverting a shape-language expectation on purpose, make sure it reads as a deliberate choice rather than an accident."
        ],
        practice:{
          warmup:"Design three simple characters using only a circle, a triangle, and a rectangle as their dominant shape, checked in silhouette.",
          daily:"Design one new character each day starting from shape language first, adding surface detail only after the silhouette reads clearly.",
          weekly:"Design a small cast of three to four characters, checking that each remains distinguishable from the others in silhouette alone.",
          challenge:"Take one existing simple design and deliberately swap its dominant shape language, comparing how the perceived personality changes."
        },
        resources:[
          {type:'Course', title:'Character Design Track — Lesson 1: Shape Language', creator:'Art Prof (Clara Lieu)', url:'https://artprof.org/character-design-track/#shape-language', why:"A free, structured lesson from a full character design curriculum, with a concrete sketching prompt covering exactly this module's core idea.", verified:true},
          {type:'Article', title:'Character Shape Language', creator:'CGWire', url:'https://www.cg-wire.com/blog/character-shape-language', why:"Uses real animated film examples to illustrate how dominant shapes communicate personality, a useful applied companion to the Art Prof lesson.", verified:true}
        ],
        quiz:[
          {q:"What personality associations do rounded, circular dominant shapes tend to carry?", options:["Dangerous and aggressive","Friendly, soft, harmless, or young","Stable and stubborn","No consistent association exists"], correct:1, explain:"These are strong defaults — useful for design, though skilled designers sometimes deliberately subvert them."},
          {q:"Why does this module recommend checking a character design in silhouette?", options:["Silhouette checks are outdated and unnecessary","A strong design should remain recognizable and distinct purely from its outline, before color or detail is added","Silhouettes are only relevant for villains","Color always matters more than shape"], correct:1, explain:"This is the same readability check from Module 6, now applied to a full character design."},
          {q:"What's a risk of giving every character in a cast the same dominant shape language?", options:["No risk, consistency is always good","The characters become difficult to visually distinguish from one another","It makes the cast look more professional","It has no effect on readability"], correct:1, explain:"A cast needs genuinely different dominant shapes to stay distinguishable in silhouette alone."}
        ],
        checklist:[
          "I can design a character starting from a dominant shape — circle, triangle, or rectangle — before adding surface detail.",
          "I check a character design's readability in solid silhouette.",
          "I can design a small cast where each character remains distinguishable by silhouette alone.",
          "I can use proportional exaggeration alongside shape language to reinforce a character's intended personality."
        ],
        nextStep:"Stylization — the final module in this arc, on why every stylized art style is a deliberate distortion of everything built so far, not a shortcut around it."
      },
      {
        id:'m47', plate:'47', title:'Stylization', difficulty:'Advanced',
        studyTime:'20 min', practiceTime:'20\u201325 min/day', prereq:['m46','m22'],
        hook:"Not a simplified shortcut — a deliberate, informed distortion of the exact same realistic structure this whole arc has been building.",
        whyItMatters:[
          "This closes out the Body & Anatomy arc by directly addressing something implied since Module 15 (Understanding the Human Head): stylized art — anime, cartoon, chibi, any non-photorealistic approach — isn't a shortcut around anatomy. It's a deliberate, informed distortion of it. This module makes that relationship explicit as the arc's final lesson."
        ],
        coreIdea:[
          "Every stylized approach is best understood as a set of deliberate distortions applied on top of the realistic structure covered across this entire Head & Portrait and Body & Anatomy journey — not a simplified alternative that skips learning it.",
          "Common, genuinely useful stylization moves: exaggerating proportions (larger eyes and a smaller nose and mouth in most anime-adjacent styles; a bigger head-to-body ratio in chibi or cartoon styles) while <i>keeping</i> the underlying construction — the Loomis sphere and guidelines, box-method hands, tapering limb cylinders — fully intact underneath the exaggeration.",
          "Simplifying rendering (fewer distinct planes than the full Asaro-style mapping from Module 22, flatter color, reduced texture detail from Module 13) while still respecting the underlying light logic from Module 11, so the simplified forms still read as solid rather than flat.",
          "Different stylized traditions push different specific distortions: anime commonly exaggerates the eyes heavily while simplifying the nose and mouth; Western cartoon styles often push exaggerated, elastic proportions tied directly to the gesture and squash-and-stretch energy from Module 9.",
          "A genuinely informed stylized artist can always explain which specific realistic structure they chose to distort and why, and can typically still construct the same subject realistically if asked. That reversibility is the actual test of whether stylization was learned as a deliberate skill, versus arrived at by never learning construction in the first place — which is exactly the standard this whole course has been building toward since Module 1."
        ],
        mistakes:[
          "Treating stylization as a way to skip learning construction and anatomy, rather than a deliberate, informed distortion built on top of it.",
          "Copying a stylized reference's surface look without understanding which specific realistic proportions or structures were exaggerated to produce it.",
          "Applying stylized proportions inconsistently across a single figure — a stylized head on an otherwise fully realistic body, with no coherent overall distortion logic.",
          "Losing the underlying construction entirely once working in a simplified style, causing the same floating-limb and inconsistent-rotation problems this whole arc has worked to prevent."
        ],
        proTips:[
          "Before stylizing a subject, identify specifically which realistic proportions or structures you intend to exaggerate, rather than distorting everything uniformly by instinct.",
          "Keep the underlying construction — Loomis head, box-method hands and feet, tapering limb cylinders — active even in a heavily simplified style. It still governs rotation and volume underneath the stylization.",
          "Periodically test yourself by constructing the same subject realistically, to confirm a stylized version is a deliberate choice rather than an unlearned shortcut."
        ],
        practice:{
          warmup:"Construct the same simple head both realistically and in a stylized (anime or cartoon) proportion, using the same Loomis construction for both.",
          daily:"Design one stylized character each day, writing down in one sentence which specific realistic proportion or structure was exaggerated to create the look.",
          weekly:"Take one stylized reference image and reverse-engineer, on paper, which realistic structure it's most likely built on top of.",
          challenge:"Construct the same full-body pose both fully realistically and in a heavily stylized proportion, keeping every underlying construction step — gesture, torso ovals, box-method hands — identical between the two."
        },
        resources:[
          {type:'Course', title:'The Loomis Method (revisited)', creator:'Proko (Stan Prokopenko)', url:'https://www.proko.com/course-lesson/quickly-draw-heads-with-the-loomis-method-part-1', why:"Worth revisiting from Module 18 as the realistic foundation this module's stylized distortions are explicitly built on top of.", verified:true},
          {type:'Article', title:'How to Draw Anime Girl Hair for Beginners', creator:'GVAAT\u2019S WORKSHOP', url:'https://gvaat.com/blog/how-to-draw-anime-hair/', why:"A concrete example of a stylized convention built directly on top of the realistic hair-massing principles from Module 31, from the same source already used for Legs, Feet, and Clothing.", verified:true}
        ],
        quiz:[
          {q:"According to this module, what is stylized art actually built on top of?", options:["Nothing — it's a way to skip learning anatomy entirely","A deliberate, informed distortion of the same realistic structure covered throughout this course","Random personal preference with no underlying logic","Only color choices, not structure"], correct:1, explain:"Stylization is a distortion applied on top of realistic construction, not a shortcut around learning it."},
          {q:"What is the actual test of whether stylization was learned as a deliberate skill?", options:["How popular the resulting art style becomes","Whether the artist can typically still construct the same subject realistically if asked","How many YouTube tutorials the artist has watched","Whether the style uses bright colors"], correct:1, explain:"That reversibility — being able to explain and demonstrate the underlying realistic structure — is the real marker of deliberate, informed stylization."},
          {q:"What should stay intact even in a heavily simplified, stylized figure?", options:["Nothing needs to stay consistent","The underlying construction — Loomis head, box-method hands, tapering limb cylinders — still governing rotation and volume", "Only the facial features","Realistic muscle detail specifically"], correct:1, explain:"Losing the underlying construction entirely, even in a simplified style, causes the same floating-limb problems this course has worked to prevent."}
        ],
        checklist:[
          "I can construct the same subject both realistically and in a stylized proportion, using the same underlying construction for both.",
          "I can name specifically which proportions or structures I exaggerated to create a stylized design.",
          "I keep Loomis, box-method, and cylinder construction active even in a simplified, stylized style.",
          "I can reverse-engineer a stylized reference to identify the realistic structure it's likely built on."
        ],
        nextStep:"Body & Anatomy is complete. Next: Nature & Architecture — trees, plants, rocks, water, sky, weather, then buildings, interiors, and cities, mapped on the home page and being written next."
      }
    ]
  },
{id:'nature-arch', title:'Nature & Architecture', status:'soon', order:5,
    desc:'Trees, plants, rocks, water, sky and weather — then buildings, interiors, and cities, built with the same construction logic as everything before it.',
    moduleCount:22, sample:['Trees','Water','Clouds & Sky','Building Construction','Interiors','Cityscapes']},
{id:'creatures-hardsurface', title:'Creatures & Hard Surface', status:'soon', order:6,
    desc:'Comparative animal anatomy, birds, aquatic life, insects and original creature design, then vehicles, weapons, machines, and mecha.',
    moduleCount:21, sample:['Mammal Anatomy','Birds in Flight','Creature Design','Vehicles','Robotics & Mecha']},
{id:'worldbuilding', title:'World Building & Concept Art', status:'soon', order:7,
    desc:'Biomes, environmental storytelling, cinematic composition, color scripting, lighting, and the professional concept-art production pipeline.',
    moduleCount:10, sample:['Biome Design','Cinematic Composition','Color Scripting','Concept Art Pipeline','Mood Design']},
{id:'digital-fundamentals', title:'Digital Art Fundamentals', status:'soon', order:8,
    desc:'Software-agnostic digital basics — workspace, tablets, brush engines, layers, selections, transforms, and clean digital line art — built so the skill transfers across any application.',
    moduleCount:8, sample:['Digital Workspace','Drawing Tablets','Brushes','Layers','Selection Tools','Digital Line Art']},
{id:'digital-painting', title:'Digital Painting & Rendering', status:'soon', order:9,
    desc:'Color theory, value control, lighting, material rendering, edge control, atmospheric effects, and a complete professional illustration workflow.',
    moduleCount:10, sample:['Color Theory','Values','Lighting','Material Rendering','Edge Control','Illustration Workflow']},
{id:'advanced-digital', title:'Advanced Digital Art', status:'soon', order:10,
    desc:'Non-destructive workflow, blend modes, adjustment layers, photobashing, 3D-assisted painting, responsible AI-assisted workflow, speed painting, and master studies.',
    moduleCount:10, sample:['Non-Destructive Workflow','Blend Modes','Photobashing','3D-Assisted Art','AI-Assisted Workflow','Speed Painting']},
{id:'professional-production', title:'Professional Production & Specializations', status:'soon', order:11,
    desc:'Editorial illustration, comics, manga, webtoon, visual development, concept art, game art, animation pre-production, print production, and client work.',
    moduleCount:11, sample:['Comic Art','Manga','Webtoon','Concept Art','Game Art Pipeline','Animation Pre-Production']},
{id:'portfolio-branding', title:'Portfolio & Personal Branding', status:'soon', order:12,
    desc:'Building a studio-quality portfolio, case studies, online presence across ArtStation/Behance/Instagram, and a coherent personal brand.',
    moduleCount:10, sample:['Building a Portfolio','Case Studies','Online Portfolios','Personal Branding','Social Media Strategy']},
{id:'freelancing-business', title:'Freelancing & Business', status:'soon', order:13,
    desc:'Finding clients, pricing, contracts, project management, finances, marketing, and avoiding the scams that target working artists.',
    moduleCount:10, sample:['Finding Clients','Pricing Artwork','Contracts & Legal Basics','Finance for Artists','Marketing & Sales']},
{id:'careers-growth', title:'Professional Careers & Lifelong Growth', status:'soon', order:14,
    desc:'How studio pipelines and hiring actually work, career specializations, teamwork, ethics and copyright, and a realistic long-term growth plan.',
    moduleCount:10, sample:['Art Specializations','Studio Pipelines','Recruitment & Hiring','Professional Ethics','Lifelong Artist Roadmap']}
];
