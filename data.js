const flowersData = [
    {
        id: 1,
        name_ar: "بَخُورُ مَرْيَم (قَرْنُ الغَزَال / الزَّعْمَطُوط)",
        scientific_name: "Cyclamen persicum",
        audio_ar: "audio/arabic/cyclamen_persicum_ar.mp3",
        audio_lat: "audio/latin/cyclamen_persicum_lat.mp3",
        season: "الشتاء والربيع (كانون الثاني - نيسان)",
        environment: "الموائل الظليلة، شقوق الصخر الكلسي، وتحت أشجار السنديان والأحراج الجبلية",
        story: "من أروع الزهور البرية الأصيلة في بيئتنا الجبلية. تعبر عن الصمود والجمال البري الهادئ، وتتميز ببتلاتها المرتدة لأعلى كتاج وردي أو أبيض ساحر. تنمو من درنات أرضية معمرة تستطيع البقاء في التربة لسنوات طويلة، وتعد رمزاً للذاكرة والأرض في التراث المحلي الأصيل.",
        growth_stages: [
            { 
                stage_name: "طور الأوراق المخملية الموشاة", 
                img_path: "images/cyclamen_persicum_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التزهير تحت ظلال السنديان", 
                img_path: "images/cyclamen_persicum_st2.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التفتح الكامل وسط الأعشاب", 
                img_path: "images/cyclamen_persicum_st3.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 2, 
        name_ar: "البَيْقِيَّة البَرِّيَّة (بَيْقِيَّة شَائِعَة / بَسِيلَة بَرِّيَّة)",
        scientific_name: "Vicia sativa",
        audio_ar: "audio/arabic/vicia_sativa_ar.mp3",
        audio_lat: "audio/latin/vicia_sativa_lat.mp3",
        season: "فصل الربيع وأوائل الصيف (آذار - حزيران)",
        environment: "المنحدرات العشبية، حواف الجلول الصخرية القديمة، وبين الحقول في العزونية",
        story: "نبتة عشبية حوليّة متسلقة من الفصيلة البقولية. تستخدم محاليقها الخيطية بدقة فائقة لامتطاء السيقان المجاورة والارتفاع نحو الضوء. تتألق في منتصف الربيع بأزهار فراشية جذابة ذات لون أرجواني فاقع مائل للوردي. تلعب دوراً بيئياً حيوياً في أراضي بلدة العزونية كونهَا مخصباً طبيعياً يثبت النيتروجين في التربة ويغذي النحل البري.",
        growth_stages: [
            { 
                stage_name: "طور التزهير الكامل (الزهرة الفراشية الأرجوانية)", 
                img_path: "images/vicia_sativa_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور النمو الخضري وظهور المحاليق المتسلقة وسط الأعشاب", 
                img_path: "images/vicia_sativa_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 3,
        name_ar: "بَرْسِيمٌ أُرْجُوانِيٌّ بَرِّيٌّ",
        scientific_name: "trifolium purpureum",
        audio_ar: "audio/arabic/trifolium_purpureum_ar.mp3",
        audio_lat: "audio/latin/trifolium_purpureum_lat.mp3",
        season: "أوج الربيع (آذار - أيار)",
        environment: "المراعي الجبلية المفتوحة، حقول القمح، وجوانب التلال البرية",
        image: "images/trifolium_purpureum.jpg",
        story: "زهرة برية ملفتة للنظر تنتمي لعائلة البقوليات، وتتميز برأسها الزهري المخروطي أو المستطيل الفاخر. النورة محاطة بشعيرات حريرية ناعمة جداً تحمي الزهيرات الأرجوانية الصغيرة من الجفاف وأشعة الشمس الساخنة، وتعتبر من المصادر الأساسية لرحيق النحل البري في منتصف فصل الربيع."
    },
    {
        id: 4,
        name_ar: "السَّحْلَبُ الهَرَمِيُّ (أُورْكِيد بَرِّيٌّ)",
        scientific_name: "anacamptis pyramidalis",
        audio_ar: "audio/arabic/anacamptis_pyramidalis_ar.mp3",
        audio_lat: "audio/latin/anacamptis_pyramidalis_lat.mp3",
        season: "منتصف الربيع (آذار - أيار)",
        environment: "المنحدرات الكلسية، المروج الجبلية المشمسة، والأحراج المفتوحة",
        image: "images/anacamptis_pyramidalis.jpg",
        story: "أحد أبهى وأنقى أنواع الأوركيد البري المحلي. يتميز بنورة زهرية ممتلئة تتخذ شكلاً هرمياً دقيقاً يتدرج لونه من الوردي الفاتح إلى البنفسجي المخملي. تفرز هذه الزهرة الفاتنة رائحة عطرية حلوة في ساعات النهار لجذب الفراشات والملقحات، وهي محمية بيئياً لمنع تعرضها للانقراض."
    },
    {
        id: 5,
        name_ar: "جُرَيْسُ السَّنَابِل (جُرَيْسٌ بَرِّيٌّ عَمُودِيٌّ)",
        scientific_name: "campanula rapunculus",
        audio_ar: "audio/arabic/campanula_rapunculus_ar.mp3",
        audio_lat: "audio/latin/campanula_rapunculus_lat.mp3",
        season: "أواخر الربيع ومطلع الصيف (نيسان - حزيران)",
        environment: "الشقوق الصخرية الظليلة، التلال المرتفعة، وحواف الغابات الجبلية",
        image: "images/campanula_rapunculus.jpg",
        story: "زهرة برية رشيقة شاهقة الارتفاع تنمو بشكل عمودي يحاكي السنبلة الممتدة. تتوزع عليها بالتناوب أجراس صغيرة هادئة ذات لون بنفسجي لافندري فائق النعومة. تاريخياً، كانت جذور هذه النبتة وأوراقها الغنية بفيتامين سي تُستخدم في الوصفات الغذائية البرية القديمة في مناطق حوض البحر الأبيض المتوسط."
    },
    {
        id: 6,
        name_ar: "الجُلْبَانُ الوَرْدِيُّ المُتَسَلِّقُ",
        scientific_name: "lathyrus carthaginensis",
        audio_ar: "audio/arabic/lathyrus_carthaginensis_ar.mp3",
        audio_lat: "audio/latin/lathyrus_carthaginensis_lat.mp3",
        season: "الربيع المعتدل (آذار - أيار)",
        environment: "الأسيجة النباتية البرية، الشجيرات الكثيفة، وجوانب السلاسل الحجرية",
        image: "images/lathyrus_carthaginensis.jpg",
        story: "نبتة متسلقة ساحرة تستعين بمحاليقها الورقية الذكية للارتفاع فوق الأعشاب والشجيرات المجاورة بحثاً عن الضوء. تتميز بزهورها الوردية الرقيقة التي تشبه الفراشات الصغيرة في أول تفتحها، وتعتبر من العناصر البصرية الجذابة التي تضفي تبايناً لونياً بديعاً على الأسيجة النباتية."
    },
    {
        id: 7,
        name_ar: "القُرَيْضَة (الغَبَّارُ / الرَّوْثُ الكِرِيتِي)",
        scientific_name: "Cistus creticus",
        audio_ar: "audio/arabic/cistus_creticus_ar.mp3",
        audio_lat: "audio/latin/cistus_creticus_lat.mp3",
        season: "الربيع ومطلع الصيف (آذار - حزيران)",
        environment: "تلال الماكي المتوسطية، التربة الجافة الصخرية، والأحراج المشمسة في العزونية",
        story: "شجيرة عطرية برية شهيرة جداً بصمودها أمام الجفاف والحرائق. تتميز بزهورها الوردية البديعة ذات البتلات الخمس المجعدة التي تشبه الورق الرقيق التالف، ويتوسطها قلب ذهبي شعاعي من الأسدية. تفرز أوراقها مادة صمغية عطرية تُعرف بـ 'اللاذن' ولها استخدامات طبية وعطرية قديمة جداً.",
        growth_stages: [
            { 
                stage_name: "طور النمو البري العام للشجيرة العطرية", 
                img_path: "images/cistus_creticus_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "لقطة مقربة ممتازة تظهر تجعد البتلات الخمس والقلب الشعاعي الذهبي", 
                img_path: "images/cistus_creticus_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 8,
        name_ar: "دُمْيَةُ الغَزَال (الخُلُودُ الدَّمَوِيُّ)",
        scientific_name: "helichrysum sanguineum",
        audio_ar: "audio/arabic/helichrysum_sanguineum_ar.mp3",
        audio_lat: "audio/latin/helichrysum_sanguineum_lat.mp3",
        season: "أوج الربيع (آذار - أيار)",
        environment: "المنحدرات الجبلية الجافة، الصخور المشمسة، والتربة الفقيرة الكلسية",
        image: "images/helichrysum_sanguineum.jpg",
        story: "من أثمن زهور الجبال الأيقونية التراثية. تتميز بسيقانها المكسوة بوبر صوفي كثيف بلون فضي لحمايتها من تبخر المياه، ورؤوسها الزهرية الحمراء القرمزية الشمعية القاسية التي لا تذبل أو تفقد لونها الدموي الجذاب حتى بعد قطفها وتجفيفها لسنوات، ولذلك سميت بزهرة الخلود."
    },
    {
        id: 9, 
        name_ar: "المُنْتَنَة الجَبَلِيَّة (الحَشِيشَةُ المَثْقُوبَة / الهِيْفَارِيقُون)",
        scientific_name: "Hypericum triquetrifolium",
        audio_ar: "audio/arabic/hypericum_triquetrifolium_ar.mp3",
        audio_lat: "audio/latin/hypericum_triquetrifolium_lat.mp3",
        season: "أواخر الربيع وكامل الصيف (أيار - أيلول)",
        environment: "المنحدرات الجبلية المشمسة، التربة الحصوية الجافة, وحواف الأراضي البائرة",
        story: "نبات عشبي بري معمر صلب ينتمي للفصيلة الهيفاريقونية (عشبة سيدي يحيى). يتميز بسيقانه المتفرعة ذات اللون المحمر الناتئة عمودياً، وتترتب أوراقه الرمحية الصغيرة بشكل متقالب ومصالب دقيق يمنحها مظهراً هندسياً فريداً. تنمو صيفاً لتتوج بأزهار صفراء ذهبية نجمية براقة، وتفرز أوراقها زيوت الطيارة عند فركها.",
        growth_stages: [
            { 
                stage_name: "طور استطالة السيقان والترتيب الورقي المتقابل", 
                img_path: "images/hypericum_triquetrifolium_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 10,
        name_ar: "المُرَيْرُ البَرِّيُّ (عَضِيدُ الجَبَلِ الأَصْفَر)",
        scientific_name: "urospermum picroides",
        audio_ar: "audio/arabic/urospermum_picroides_ar.mp3",
        audio_lat: "audio/latin/urospermum_picroides_lat.mp3",
        season: "الربيع ومطلع الصيف (آذار - حزيران)",
        environment: "المنحدرات الجبلية المشمسة، التربة الصخرية، وجوانب الحقول المهملة",
        image: "images/urospermum_picroides.jpg",
        story: "زهرة برية مبهجة قوية الاحتمال تنتمي للعائلة النجمية (Asteraceae). تتميز برؤوسها الزهرية الصفراء الفاقعة المشعة كقرص الشمس وسط الصخور، وبراعمها المخروطية المحاطة بقنابات ذات خطوط وشعيرات كثيفة تحمي الزهرة قبل التفتح الكامل في الصباح الباكر."
    },
    {
        id: 11,
        name_ar: "القَنْدُول الشَّعْرِيّ (الوَزَّالُ البَرِّيُّ الشَّوْكِيُّ)",
        scientific_name: "Calicotome villosa",
        audio_ar: "audio/arabic/calicotome_villosa_ar.mp3",
        audio_lat: "audio/latin/calicotome_villosa_lat.mp3",
        season: "الربيع الممتد (آذار - حزيران)",
        environment: "المنحدرات الجبلية الصخرية، الأحراج المفتوحة، وتلال حوض المتوسط الجافة في العزونية",
        story: "شجيرة شوكية معمرة بالغة الأهمية لتوازن الحياة البرية ومكافحة الانجراف. تتألق في فصل الربيع بكساء كثيف جداً من الأزهار الصفراء الفراشية ذات الرائحة العطرية القوية الفواحة التي تمتد لمسافات، وتتحول الأزهار لاحقاً إلى قرون ثمرية داكنة مغطاة بزغب فضي يحميها.",
        growth_stages: [
            { 
                stage_name: "طور التزهير المبكر وظهور البتلات الفراشية الصفراء", 
                img_path: "images/calicotome_villosa_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور النمو الخضري المتقدم والأوراق ثلاثية الوريقات والأشواك الحادة", 
                img_path: "images/calicotome_villosa_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 12,
        name_ar: "الجُلْبَانُ الكُرَوِيُّ (البازِلَّاءُ الخَوْخِيَّة)",
        scientific_name: "lathyrus sphaericus",
        audio_ar: "audio/arabic/lathyrus_sphaericus_ar.mp3",
        audio_lat: "audio/latin/lathyrus_sphaericus_lat.mp3",
        season: "أوج الربيع (نيسان - أيار)",
        environment: "المراعي العشبية الكثيفة، والتلال الجبلية وسط السنابل والنباتات البرية",
        image: "images/lathyrus_sphaericus.jpg",
        story: "زهرة برية مميزة للغاية ونادرة التدرج اللوني في بيئتنا الجبلية الحلية. تتألق بتويجات صغيرة فريدة ذات لون برتقالي خوخي دافئ (المشمشي النادر)، تساهم بذكاء في دعم التنوع البيولوجي وحيوية التربة من خلال تثبيت المغذيات الطبيعية في الأرض الجبلية."
    },
    {
        id: 13,
        name_ar: "الكَتَّانُ البَرِّيُّ الوَرْدِيُّ",
        scientific_name: "linum pubescens",
        audio_ar: "audio/arabic/linum_pubescens_ar.mp3",
        audio_lat: "audio/latin/linum_pubescens_lat.mp3",
        season: "الربيع الممتد (آذار - أيار)",
        environment: "المراعي المشمسة، الهضاب العشبية المفتوحة والتربة الكلسية الجافة",
        image: "images/linum_pubescens.jpg",
        story: "زهرة برية حَوْلية رقيقة وفاتنة جداً تنمو في مجموعات متناسقة تزين المروج العشبية المفتوحة. تتميز ببتلاتها الخمس الوردية الناعمة المتناظرة بدقة هندسية مذهلة، وينتهي عمق الزهرة بمركز أرجواني داكن مائل للزرقة يعمل كمرشد بصري للملقحات البرية."
    },
    {
        id: 14,
        name_ar: "إِبْرَةُ الرَّاعِي البَرِّيَّة (دَوَامُ الغَزَال)",
        scientific_name: "geranium molle",
        audio_ar: "audio/arabic/geranium_molle_ar.mp3",
        audio_lat: "audio/latin/geranium_molle_lat.mp3",
        season: "الربيع المعتدل (آذار - حزيران)",
        environment: "المنحدرات الظليلة، المروج العشبية الرطبة، وتحت ظلال الأشجار الحرجية",
        image: "images/geranium_molle.jpg",
        story: "نبتة عشبية برية لطيفة ومحبوبة جداً في التراث وعلم النبات المحلي. سُميت بإبرة الراعي بسبب الشكل الهندسي الفريد لثمارها الطولية المدببة التي تشبه الإبرة الطويلة بعد نضجها وسقوط البتلات الوردية المقصوصة الأطراف، ولها حضور لافت في المراعي العشبية الرطبة."
    },
    {
        id: 15,
        name_ar: "الفُوَّةُ البَرِّيَّةُ البَيْضَاءُ (المِظَلَّةُ الفِضِّيَّة)",
        scientific_name: "cruciata pedemontana",
        audio_ar: "audio/arabic/cruciata_pedemontana_ar.mp3",
        audio_lat: "audio/latin/cruciata_pedemontana_lat.mp3",
        season: "أوج الربيع ومطلع الصيف (نيسان - حزيران)",
        environment: "التربة الصخرية الكلسية، بجانب شجيرات العليق، والمراعي المفتوحة",
        image: "images/cruciata_pedemontana.jpg",
        story: "نبتة عشبية برية متميزة بنموها الكثيف على هيئة تجمعات أو مظلات قطنية بيضاء فخمة. تتألف نورتها المركبة من مئات الأزهار النجمية الرباعية البتلات والدقيقة جداً، المتراصة بدقة هندسية ساحرة تعكس تباينات بصرية فائقة النقاء وسط المنحدرات الجبلية."
    },
    {
        id: 16,
        name_ar: "المُرَّارُ البَرِّيُّ (القَنْطَرْيُونُ السُّورِِيُّ)",
        scientific_name: "centaurea cyanoides",
        audio_ar: "audio/arabic/centaurea_cyanoides_ar.mp3",
        audio_lat: "audio/latin/centaurea_cyanoides_lat.mp3",
        season: "أواخر الربيع ومطلع الصيف (أيار - أيلول)",
        environment: "المراعي الجبلية المفتوحة، جوانب الطرق البرية، والمنحدرات الجبلية المشمسة",
        image: "images/centaurea_cyanoides.jpg",
        story: "زهرة برية جذابة وساحرة تنتمي للعائلة النجمية، وتتميز برؤوسها الزهرية المستديرة المليئة بالبتلات الخيطية البنفسجية المشعة كالنجمة وسط الأعشاب الطويلة الجافة. تعتبر هذه الزهرة من أواخر علامات إزهار الربيع في الميدان الجبلي، وتتحمل درجات الحرارة المرتفعة بكفاءة."
    },
    {
        id: 17,
        name_ar: "العَيْنُ الذَّهَبِيَّةُ الشَّوْكِيَّةُ (بَبُونَق الجَبَلِ الشَّوْكِي)",
        scientific_name: "pallenis spinosa",
        audio_ar: "audio/arabic/pallenis_spinosa_ar.mp3",
        audio_lat: "audio/latin/pallenis_spinosa_lat.mp3",
        season: "مطلع الصيف وأوجه (أيار - تموز)",
        environment: "المنحدرات الجافة، الأراضي الصخرية الكلسية المكشوفة، وجوانب المسالك الجبلية المشمسة",
        image: "images/pallenis_spinosa.jpg",
        story: "نبتة عشبية برية حولية صلبة تنتمي للفصيلة النجمية، وتشتهر بقدرتها الفائقة على تحمل الجفاف الهضابي. تتميز بنورتها الذهبية المشرقة المحاطة بصفين من البتلات الصفراء الشعاعية، يتوجها إطار هندسي فريد من الأوراق الخضراء الصلبة والمستدقة بنهايات شوكية حادة تحمي قلب الزهرة، لتبدو كالنجمة المتوهجة وسط بيئتها الجبلية الجافة."
    },
    {
        id: 18,
        name_ar: "عَيْنُ الجَمَلِ الحَقْلِيَّة (أَنَاغَالِيس المُرُوجِ المُنْمَنَمَة)",
        scientific_name: "Anagallis arvensis",
        audio_ar: "audio/arabic/anagallis_arvensis_ar.mp3",
        audio_lat: "audio/latin/anagallis_arvensis_lat.mp3",
        season: "الربيع الممتد وأوائل الصيف (آذار - حزيران)",
        environment: "التربة الرملية والحصوية المكشوفة، حواف الصخور المشمسة، والأراضي المتروكة في العزونية",
        story: "نبات عشبي حولي صغير وزاحف ينتمي للفصيلة الربيعية، ويشتهر بحساسيته العالية للضوء؛ حيث تفتح أزهاره في الأيام المشمسة وتغلق عند غيابها. يمتاز هذا النوع بتباين لوني طبيعي ساحر في الحقول؛ حيث يظهر بتنوعين: الأول هو التنوع الكلاسيكي ذو الأزهار البرتقالية الآجرية (var. arvensis)، والثاني هو التنوع الأزرق النيلي الأخاذ (var. caerulea)، وكلاهما يحمل مركزاً أرجوانياً دقيقاً يزين التربة الحصوية الدافئة.",
        growth_stages: [
            { 
                stage_name: "التنوع اللوني البرتقالي الكلاسيكي (var. arvensis)", 
                img_path: "images/anagallis_arvensis_arvensis.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "التنوع اللوني الأزرق النيلي النادر (var. caerulea)", 
                img_path: "images/anagallis_arvensis_caerulea.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 19,
        name_ar: "الأُقْحُوانُ البَرِّيُّ (بَابُونجُ الحُقُولِ النَّاصِع)",
        scientific_name: "Anthemis arvensis",
        audio_ar: "audio/arabic/anthemis_arvensis_ar.mp3",
        audio_lat: "audio/latin/anthemis_arvensis_lat.mp3",
        season: "ربيع كامل ومطلع الصيف (آذار - حزيران)",
        environment: "المراعي المفتوحة، السفوح الجبلية العشبية، وبمحاذاة حقول القمح والمسالك الترابية في العزونية",
        story: "نبتة عشبية برية حولية تنتمي للفصيلة النجمية، وتعد من أكثر أزهار الربيع ألفة وبهجة في الطبيعة الجبلية. تتألق بنوراتها الرأسية الجذابة المكونة من قرص مركزي أصفر ذهبي كثيف يحوي الأزهار الأنبوبية، تحيط به بتلات شعاعية بيضاء ناصعة الثلج. مع تقدم الموسم ونضج البذور، تسقط البتلات البيضاء تاركة الأقراص الذهبية وحدها على السيقان الممتدة.",
        growth_stages: [
            { 
                stage_name: "طور التزهير المقرب والمكتمل للبتلات البيضاء والقرص الذهبي", 
                img_path: "images/anthemis_arvensis_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور الإثمار المتأخر وسقوط البتلات الشعاعية البيضاء", 
                img_path: "images/anthemis_arvensis_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 20,
        name_ar: "الغَاصُولُ الأَصْفَرُ (بُصَيْلُ المُرْتَفَعَاتِ الأُنْبُوبِي / البُرْوَاق الجَبَلِي)",
        scientific_name: "Asphodeline lutea",
        audio_ar: "audio/arabic/asphodeline_lutea_ar.mp3",
        audio_lat: "audio/latin/asphodeline_lutea_lat.mp3",
        season: "أواسط الربيع ومطلع الصيف (نيسان - حزيران)",
        environment: "المنحدرات الصخرية الكلسية، المراعي الجبلية الجافة، والمساحات المفتوحة بين الصخور في العزونية",
        story: "نبتة عشبية برية معمرة فخمة تنتمي للفصيلة المصفورية (وكانت تُصنف سابقاً مع الزنبقيات). تمتاز بسيقانها الطويلة القوية التي ترتفع نحو السماء لتنتهي بنورة غنية بالأزهار الصفراء الجذابة، والتي تتحول عند نضجها وإثمارها إلى كبسولات مغزلية برتقالية جافة خشبيّة متوزعة على السيقان. تتناغم سيقانها النحيلة مع الرياح الجبلية وتضفي هيبة بصرية خاصة على التلال الصخرية المشمسة.",
        growth_stages: [
            { 
                stage_name: "طور التزهير الأصفر النجمي الكامل والأوراق الأنبوبية", 
                img_path: "images/asphodeline_lutea_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور الإثمار المتقدم وجفاف الكبسولات المغزلية البرتقالية", 
                img_path: "images/asphodeline_lutea_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 21, 
        name_ar: "الخُرْفَيْشُ (العكّوب البَرِّي / الخُرْشُف البَرِّي)",
        scientific_name: "Cynara cardunculus",
        audio_ar: "audio/arabic/cynara_cardunculus_ar.mp3",
        audio_lat: "audio/latin/cynara_cardunculus_lat.mp3",
        season: "أول الربيع ومنتصفه (شباط - أيار)",
        environment: "المنحدرات الجبلية المشمسة، الأودية البور، وحواف البساتين المفتوحة",
        story: "نبتة برية شوكية معمرة وضخمة تنتمي للفصيلة النجمية. تتميز بأوراقها الوبرية الخضراء المائلة للرمادي، والمفصصة بعمق مع عروق محورية بيضاء سميكة. تعتبر صيداً ثميناً في المطبخ القروي اللبناني التقليدي في طورها المبكر قبل تجمد أشواكها وظهور زهرتها البنفسجية الحرشفية الكبيرة.",
        growth_stages: [
            { 
                stage_name: "طور السيقان الطرية (القطاف والطهي)", 
                img_path: "images/cynara_cardunculus_st1.jpg",
                is_primary: true 
            },
            { 
                stage_name: "طور التزهير الشوكي (الزهرة البنفسجية)", 
                img_path: "images/cynara_cardunculus_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 22,
        name_ar: "نَفَلُ النُّجُومِ البَرِّيّ (بَرْسِيمُ المُرْتَعَاتِ النَّجْمِي)",
        scientific_name: "trifolium stellatum",
        audio_ar: "audio/arabic/trifolium_stellatum_ar.mp3",
        audio_lat: "audio/latin/trifolium_stellatum_lat.mp3",
        season: "كامل الربيع ومطلع الصيف (آذار - حزيران)",
        environment: "المراعي العشبية الجافة، شقوق الصخر الكلسي، والمنحدرات الجبلية المشمسة",
        image: "images/trifolium_stellatum.jpg",
        story: "نبتة عشبية برية صغيرة تنتمي للفصيلة البقولية، وتعتبر من ألطف أزهار المنحدرات الجبلية. تتفتح أولاً ككرات زهرية فروية ناعمة ذات لمسات وردية وبيضاء، وعند النضج والجفاف، تتسع كؤوسها لتتحول إلى نجوم خماسية الأطراف ذات لون وردي مخملي ساحر يحمل في وسطه البذور. يمنحها هذا التحول الهندسي الفريد مظهراً غاية في الجمال والتميز بين الأعشاب البرية."
    },
    {
        id: 23,
        name_ar: "نَفَلُ المَرَاعِي البَرِّيُّ (بَرْسِيمُ الشُّقُوقِ الزَّاحِف)",
        scientific_name: "trifolium resupinatum",
        audio_ar: "audio/arabic/trifolium_resupinatum_ar.mp3",
        audio_lat: "audio/latin/trifolium_resupinatum_lat.mp3",
        season: "طوال فصل الربيع (آذار - أيار)",
        environment: "التربة الحصوية، المنحدرات الكلسية بجانب الصخور, والمراعي الجبلية الرطبة",
        story: "نبتة عشبية برية زاحفة معمرة تنتمي للفصيلة البقولية. تشتهر بأوراقها الخضراء المكونة من ثلاث وريقات بيضاوية دقيقة، وتنتج رؤوساً زهرية كروية مضغوطة ذات لون وردي أرجواني ناعم مخملي. تمتلك قدرة رائعة على التمدد والفرش فوق التربة الفقيرة والحصوية الكلسية بين شقوق الصخور، مما يساهم في تثبيت التربة الجبلية وإغنائها طبيعياً بالتناغم مع النباتات المجاورة.",
        growth_stages: [
            { stage_name: "الطور المخملي الرطب", img_path: "images/trifolium_resupinatum_st1.jpg", is_primary: true },
            { stage_name: "طور تماثل الحقول النجمي", img_path: "images/trifolium_resupinatum_st2.jpg", is_primary: false }
        ]
    },
    {
        id: 24,
        name_ar: "شَقِيقُ النُّعْمَانِ المُرَقَّطُ (خَشْخَاشُ المَرَاعِي الداكِن)",
        scientific_name: "papaver hybridum",
        audio_ar: "audio/arabic/papaver_hybridum_ar.mp3",
        audio_lat: "audio/latin/papaver_hybridum_lat.mp3",
        season: "أوائل الربيع إلى منتصفه (آذار - أيار)",
        environment: "الحقول العشبية المفتوحة، جوانب مسالك الأحراج، والمنحدرات الجبلية قليلة الصخور",
        image: "images/papaver_hybridum.jpg",
        story: "نبتة برية حولية رقيقة وشهيرة تنتمي للفصيلة الخشخاشية، وتعد من أروع علامات حيوية الربيع الجبلي. تتألق ببتلاتها الأربع الحريرية ذات اللون الأحمر الناري الفاتن، وتتفرد بوجود بقع داكنة سوداء مخملية ومحددة بدقة عند قاعدة كل بتلة تحيط بمركز مآبرها الدقيقة. تتمايل سيقانها الوبرية النحيلة بخفة مع النسمات البرية، لتضفي لمسات لونية دافئة وتناقضاً بصرياً مذهلاً وسط بساط الحقول الأخضر."
    },
    {
        id: 25,
        name_ar: "شَقِيقُ النُّعْمَانِ القَانِي (خَشْخَاشُ الحُقُولِ النَّارِي)",
        scientific_name: "Papaver rhoeas",
        audio_ar: "audio/arabic/papaver_rhoeas_ar.mp3",
        audio_lat: "audio/latin/papaver_rhoeas_lat.mp3",
        season: "أوج الربيع (آذار - أيار)",
        environment: "الحقول المفتوحة، المراعي العشبية المشمسة، وجوانب الطرقات والمسالك الجبلية في العزونية",
        image: "images/papaver_rhoeas.jpg",
        story: "نبتة برية حولية ساحرة تنتمي للفصيلة الخشخاشية، وتعتبر الرمز الأشهر لجمال وحيوية السهول الربيعية. تتميز ببتلاتها الأربع الحريرية الرقيقة ذات اللون الأحمر القاني الصافي والناصع، والتي تحيط بمركز غني بالمآبر الداكنة المتراصة. ترتفع أزهارها فوق سيقان وبرية نحيلة ومرنة تتمايل بمرونة مع نسمات الرياح، مغطيةً الحقول ببساط أحمر متوهج يبعث البهجة والدفء في الطبيعة.",
        growth_stages: [
            { 
                stage_name: "طور تشكل البراعم الوبرية الكثيفة المنحنية قبل التفتح", 
                img_path: "images/papaver_rhoeas_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التزهير الكامل والبتلات الحريرية الحمراء المتوهجة", 
                img_path: "images/papaver_rhoeas_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 26,
        name_ar: "مُضَادُّ الشُّقُوقِ الأَصْفَر (عُشْبَةُ الجُرُوحِ المُرَافِقَةِ لِلصَّخْر)",
        scientific_name: "Scrophularia peregrina",
        audio_ar: "audio/arabic/scrophularia_peregrina_ar.mp3",
        audio_lat: "audio/latin/scrophularia_peregrina_lat.mp3",
        season: "كامل الربيع ومطلع الصيف (آذار - حزيران)",
        environment: "شقوق الجدران الصخرية الكلسية العمودية، والمغاور الظليلة الرطبة",
        story: "نبات عشبي بري متسلق أو ممتد ينتمي للفصيلة الخنازيرية (Scrophulariaceae)، وهو متخصص في استيطان البيئات الصخرية القاسية. يتميز بأوراقه الخضراء الوبرية الفاتحة ذات الحواف المسننة، وبأزهاره الأنبوبية الصغيرة ذات اللون الأصفر المشرق التي تبرز على سيقان رفيعة مرنة. يوثق هذا الطور تعايشه المشترك واقتسامه المساحة البيئية مع أوراق نبات بخور مريم فوق الصخر الأصم.",
        growth_stages: [
            { 
                stage_name: "طور التزهير الأصفر والتعايش البيئي الصخري", 
                img_path: "images/scrophularia_peregrina_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 27,
        name_ar: "مُرَّارُ المُرْتَفَعَاتِ الأَرْجُوانِيُّ (الشَّوْكَةُ القُرْمُزِيَّةُ)",
        scientific_name: "centaurea ibérica",
        audio_ar: "audio/arabic/centaurea_ibérica_ar.mp3",
        audio_lat: "audio/latin/centaurea_ibérica_lat.mp3",
        season: "أواخر الربيع ومطلع الصيف (أيار - تموز)",
        environment: "المراعي الجبلية المفتوحة، الأراضي الحصوية الجافة، وجوانب المسالك الصخرية المشمسة",
        image: "images/centaurea_ibérica.jpg",
        story: "نبتة عشبية برية شوكية صلبة تنتمي للفصيلة النجمية (جنس المرّار)، وتعتبر من أكثر نباتات المفتوحات قدرة على حماية نفسها. تتفرد بنشوء رؤوس زهرية يطوقها طوق هندسي دفاعي من الأشواك المستقيمة الطويلة والحادة ذات اللون الأرجواني أو الوردي القرمزي الساحر الذي يتناقض بقوة مع اخضرار أوراقها الممتدة. تضفي هذه الأشواك الملونة هيبة بصرية فريدة على قمم السيقان وسط الأعشاب الجبلية الجافة."
    },
    {
        id: 28,
        name_ar: "المَرَّار البَرِّيّ (المَرَّار النَّجْمِي)",
        scientific_name: "Centaurea calcitrapa",
        audio_ar: "audio/arabic/centaurea_calcitrapa_ar.mp3",
        audio_lat: "audio/latin/centaurea_calcitrapa_lat.mp3",
        season: "الربيع ومطلع الصيف (نيسان - تموز)",
        environment: "المنحدرات الجبلية المشمسة، جوانب الطرق البرية، والأراضي البائرة والجافة",
        story: "نبات عشبي بري شوكي ينتمي للفصيلة النجمية (المركبة). يمتد في مراحله الأولى كبساط أوراق خضراء منشارية منبسطة على الأرض لحمايته واختزان الطاقة، وفي الصيف يرتفع بساق متفرعة وقوية تحمل رؤوساً زهرية شوكية ذات لون أرجواني أو زهري لافت. يُعرف بقدرته العالية على تحمل الجفاف ومقاومة الرعي بفضل أشواكه الحادة المحيطة بالزهرة.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري (الوردة الرأسية الأرضية)", 
                img_path: "images/centaurea_calcitrapa_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور استطالة الساق المتقدم والتسنن الشوكي", 
                img_path: "images/centaurea_calcitrapa_st2.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور التفرع الشوكي قبل التزهير", 
                img_path: "images/centaurea_calcitrapa_st3.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التفرع الكثيف واشتداد الأشواك الورقية", 
                img_path: "images/centaurea_calcitrapa_st4.jpg", 
                is_primary: true 
            }
        ]
    }, 
    {
        id: 29, 
        name_ar: "السَّيلِينَة المَنْفُوخَة (قَلِيقِلَة / أُمَّ الصَّفَاق)",
        scientific_name: "Silene vulgaris",
        audio_ar: "audio/arabic/silene_vulgaris_ar.mp3",
        audio_lat: "audio/latin/silene_vulgaris_lat.mp3",
        season: "الربيع وأول الصيف (نيسان - تموز)",
        environment: "المنحدرات الجبلية الظليلة، حواف الغابات، وشقوق الصخور الرطبة",
        story: "عشبة برية معمرة فريدة تنتمي للفصيلة القرنفلية. تشتهر بكؤوس أزهارها المنتفخة التي تشبه المصابيح الورقية الصغيرة أو البالونات الخضراء المصفرة، وتتوجها أزهار بيضاء رقيقة ذات بتلات مجنحة. تعتبر من النباتات التي تضفي مظهراً هندسياً ساحراً في أحراج السنديان والأماكن الظليلة.",
        growth_stages: [
            { 
                stage_name: "طور التزهير المبكر (البتلات البيضاء)", 
                img_path: "images/silene_vulgaris_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور الكؤوس المنتفخة (المصابيح الورقية)", 
                img_path: "images/silene_vulgaris_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 30, 
        name_ar: "Gالجَزَرُ البَرِّيّ (قِثَّاءُ البَقَر / الدَّوْقَسْ)",
        scientific_name: "Daucus carota",
        audio_ar: "audio/arabic/daucus_carota_ar.mp3",
        audio_lat: "audio/latin/daucus_carota_lat.mp3",
        season: "الربيع وكامل الصيف (نيسان - أيلول)",
        environment: "المراعي الجبلية المفتوحة، جوانب الطرق البرية، والسهول الحصوية الجافة",
        story: "نبات عشبي بري ثنائي الحول ينتمي للفصيلة الخيمية، وهو الأصل التاريخي للجزر الذي نعرفه اليوم. يمتد في موسمه الأول كبساط من الأوراق الخضراء الوبرية والمقسمة بدقة فائقة تشبه الدانتيل أو السرخس، وفي الصيف يرتفع صاعداً بسيقان متينة تتوجها مظلات خيمية بديعة من الأزهار البيضاء الصغيرة التي تتوسطها زهرة واحدة داكنة مجنحة.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري المبكر (الأوراق الوبرية)", 
                img_path: "images/daucus_carota_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 31, 
        name_ar: "عُشْبُ الخِصَالِ الجَبَلِيّ (الثَّيِّلُ البَرِّيّ)",
        scientific_name: "Piptatherum miliaceum",
        audio_ar: "audio/arabic/piptatherum_miliaceum_ar.mp3",
        audio_lat: "audio/latin/piptatherum_miliaceum_lat.mp3",
        season: "كامل الربيع ومطلع الصيف (آذار - تموز)",
        environment: "المحاضر الصخرية، حواف الأحراج الظليلة، والمنحدرات الجبلية الكلسية",
        story: "نبات عشبي بري معمر ينتمي للفصيلة النجيلية، ينمو على شكل خصال أو كتل دائرية كثيفة الأوراق. تتميز أوراقه بنحافتها واستطالتها المرنة وتمايلها مع الرياح، حيث تخرج من وسطها سيقان رفيعة جداً تحمل السنابل الدقيقة. يلعب دوراً بيئياً هاماً في تثبيت التربة المنحدرة بين شجيرات الغَضَر الوردية والسنبل البري.",
        growth_stages: [
            { 
                stage_name: "طور الكتلة الخضرية وبدء الاستنبال", 
                img_path: "images/piptatherum_miliaceum_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 32, 
        name_ar: "دَوْسَر ثُلَاثِي البُوصَات (القَمْح البَرِّي / الشَّيْلَم البَرِّي)",
        scientific_name: "Aegilops triuncialis",
        audio_ar: "audio/arabic/aegilops_triuncialis_ar.mp3",
        audio_lat: "audio/latin/aegilops_triuncialis_lat.mp3",
        season: "الربيع وأول الصيف (نيسان - حزيران)",
        environment: "المنحدرات الصخرية، المراعي الجبلية المفتوحة، والأراضي العشبية الجافة في العزونية",
        story: "نبات عشبي حولي ينتمي للفصيلة النجيلية، ويعتبر من الأقارب البرية الأساسية لمحصول القمح العالمي. يتميز بسنابله الفريدة ذات الأشواك الإبرية الطويلة الممتدة التي تحمي بذوره وتساعدها على التعلق بالفراء والملابس للانتقال. يكسو الهضاب الخضراء في العزونية خلال الربيع، ويتحول تدريجياً إلى اللون الذهبي مع جفاف الطقس في الصيف.",
        growth_stages: [
            { 
                stage_name: "طور السنابل الخضراء المكتملة والأشواك الإبرية", 
                img_path: "images/aegilops_triuncialis_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 33, 
        name_ar: "الشِّبْرِقُ البَرِّيّ (العَقُولُ الجَبَلِيّ / لِصَّاقُ الخَيْل)",
        scientific_name: "Ononis antiquorum",
        audio_ar: "audio/arabic/ononis_antiquorum_ar.mp3",
        audio_lat: "audio/latin/ononis_antiquorum_lat.mp3",
        season: "أواخر الربيع وكامل الصيف (أيار - أيلول)",
        environment: "المنحدرات الجبلية المشمسة، التربة الكلسية الجافة، وجوانب الطرق الحصوية البرية",
        story: "شجيرة عشبية برية معمرة شوكية تنتمي للفصيلة البقولية، وتعتبر من النباتات الأصيلة في غطاء البحر الأبيض المتوسط. تتميز بفروعها المتشعبة بكثافة وأوراقها الثلاثية الصغيرة ذات الحواف المسننة بدقة، وتتحول سيقانها تدريجياً إلى أشواك حادة صلبة مع تقدم الصيف لتتوج بأزهار فراشية وردية بديعة. تلعب دوراً هاماً في حماية التربة الجافة ومقاومة الجفاف الممتد.",
        growth_stages: [
            { 
                stage_name: "طور التشعب الخضري الكثيف وبدء التسنن الورقي", 
                img_path: "images/ononis_antiquorum_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 34, 
        name_ar: "العَكُّوب البَرِّي (العَكُّوب / السَّلْبِين)",
        scientific_name: "Gundelia tournefortii",
        audio_ar: "audio/arabic/gundelia_tournefortii_ar.mp3",
        audio_lat: "audio/latin/gundelia_tournefortii_lat.mp3",
        season: "الربيع المتأخر وأول الصيف (نيسان - حزيران)",
        environment: "المنحدرات الصخرية الجافة، التلال المكشوفة، والأودية شديدة المشمسة في العزونية",
        story: "نبتة شوكية برية شهيرة جداً في التراث الجبلي اللبناني تنتمي للفصيلة النجمية. تنمو في البداية على شكل أوراق غضة قريبة من الأرض (وهي المرحلة التي تجمع فيها كأكلة تراثية فاخرة)، ثم تتحول سريعاً مع اشتداد حرارة الشمس إلى ساق عمودية شاهقة مدججة بأشواك حادة متداخلة لحماية كرتها الزهرية المركزية التي تتفتح بلون أصفر مائل للخضرة أو أرجواني باهت.",
        growth_stages: [
            { 
                stage_name: "طور الكعوب الأرضية الغضة (مرحلة القطاف والتنظيف)", 
                img_path: "images/gundelia_tournefortii_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التزهير العمودي والتحول الشوكي الكامل", 
                img_path: "images/gundelia_tournefortii_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 35, 
        name_ar: "شَوْك الجَمَل (الخُرفيش الأزْهَر / سَلْبِين مَرْيَم)",
        scientific_name: "Silybum marianum",
        audio_ar: "audio/arabic/silybum_marianum_ar.mp3",
        audio_lat: "audio/latin/silybum_marianum_lat.mp3",
        season: "منتصف الربيع إلى أول الصيف (نيسان - تموز)",
        environment: "المراعي الجبلية المفتوحة، حواف الطرقات، والمساحات العشبية في العزونية",
        story: "من أبهى النباتات الشوكية البرية في جبال لبنان وتنتمي للفصيلة النجمية. تشتهر برؤوسها الزهرية الكبيرة ذات اللون البنفسجي الفاقع المحاطة بأشواك حامية قوية، وتعتبر جاذباً رئيسياً للنحل والحشرات البرية. أوراقها القاعدية الكبيرة تتميز بعروق بيضاء حليبية متفرعة تعطيها مظهراً رخامياً ساحراً في الطبيعة.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري والأوراق Mمبرقشة", 
                img_path: "images/silybum_marianum_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التزهير البنفسجي الكامل (جذب الملقحات)", 
                img_path: "images/silybum_marianum_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 36, 
        name_ar: "السِّنْدِيان العادي (بَلُّوط فِلَسْطِين / السِّنْدِيان الأخْضَر)",
        scientific_name: "Quercus calliprinos",
        audio_ar: "audio/arabic/quercus_calliprinos_ar.mp3",
        audio_lat: "audio/latin/quercus_calliprinos_lat.mp3",
        season: "دائمة الخضرة (تثمر الجوز/البلوط في الخريف)",
        environment: "الأحراج الجبلية المتماسكة، المنحدرات الصخرية، وحواف الأودية في العزونية",
        story: "الشجرة الرمز والأكثر انتشاراً وصموداً في المدى الحيوي لجبال لبنان وتتبع الفصيلة الزانية. تتميز بأوراقها الجلدية القاسية ذات الحواف الشوكية الصغيرة والمسننة التي تحميها من الجفاف والرعي. تلعب دوراً محورياً في حماية تربة جبال العزونية من الانجراف، وتعتبر مظلاتها الطبيعية ملاذاً للتنوع البيولوجي ومكاناً مثالياً لتجمع العائلات في الطبيعة.",
        growth_stages: [
            { 
                stage_name: "المظهر العام للمظلة الشجرية (البيئة الطبيعية والدروب)", 
                img_path: "images/quercus_calliprinos_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "تفاصيل الأوراق الكثيفة وهيكل الأغصان", 
                img_path: "images/quercus_calliprinos_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 37, 
        name_ar: "اللُّوف البَرِّي (لُوف الجَبَل / السَّبْجَة)",
        scientific_name: "Arum palaestinum",
        audio_ar: "audio/arabic/arum_palaestinum_ar.mp3",
        audio_lat: "audio/latin/arum_palaestinum_lat.mp3",
        season: "أواخر الشتاء إلى منتصف الصيف (شباط - تموز)",
        environment: "المنحدرات الرطبة، الأماكن الظليلة تحت الأشجار، وشقوق الصخور والأودية في العزونية",
        story: "عشبة برية معمرة فريدة تنتمي للفصيلة القلقاسية. تكون سامة وحارقة جداً في حالتها الطازجة بسبب بلورات أكسالات الكالسيوم، وتتحول في أوائل الصيف إلى عناقيد ثمرية خضراء لولبية تشبه سنابل الخرز، وهي المرحلة التي تلي جفاف زهرتها المخملية السوداء الشهيرة.",
        growth_stages: [
            { 
                stage_name: "طور العناقيد الثمرية الخضراء (ما بعد التزهير)", 
                img_path: "images/arum_palaestinum_field.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 38, 
        name_ar: "لِحْيَة التَّيْس المَشْرِقِيَّة (ذَقْن الشَّيْخ / دَبْح)",
        scientific_name: "Tragopogon orientalis",
        audio_ar: "audio/arabic/tragopogon_orientalis_ar.mp3",
        audio_lat: "audio/latin/tragopogon_orientalis_lat.mp3",
        season: "أواخر الربيع وأول الصيف (أيار - تموز)",
        environment: "المراعي الجبلية المفتوحة، المساحات العشبية المشمسة، وجوانب الطرقات في العزونية",
        story: "نبتة عشبية برية ملفتة تنتمي للفصيلة النجمية. تزهر في البداية أزهاراً شعاعية صفراء زاهية تتفتح مع أشعة الصباح وتغلق عند الظهيرة. بعد التلقيح، تتحول هذه الأزهار بشكل هندسي ساحر إلى كرات قطنية هوائية ضخمة جداً ومكتملة التناظر، تحمل البذور المزودة بمظلات ريشية دقيقة تنتظر هبوب الرياح لتهاجر وتستعمر مساحات جديدة من الجبل.",
        growth_stages: [
            { 
                stage_name: "طور البراعم الخضراء المغلقة (قبل التزهير)", 
                img_path: "images/tragopogon_orientalis_st1.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور التزهير الشمسي (البتلات الصفراء)", 
                img_path: "images/tragopogon_orientalis_st2.jpg", 
                is_primary: false 
            },
            { 
                stage_name: "طور انتشار البذور (المظلات القطنية الهوائية)", 
                img_path: "images/tragopogon_orientalis_st3.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 39, 
        name_ar: "العُلَّيْق البَرِّي (عُلَّيْق الغَوْر / التُّوت البَرِّي)",
        scientific_name: "Rubus sanctus",
        audio_ar: "audio/arabic/rubus_sanctus_ar.mp3",
        audio_lat: "audio/latin/rubus_sanctus_lat.mp3",
        season: "النمو في الربيع، ويثمر في أواخر الصيف (تموز - أيلول)",
        environment: "أطراف الأودية الرطبة، قنوات المياه، وجوانب الدروب المشمسة في العزونية",
        story: "شجيرة شوكية معمرة ودائمة الخضرة تنتمي للفصيلة الوردية، وتعتبر من أكثر النباتات البرية حيوية في جبالنا. تتميز بأغصانها الممتدة التي تحمل أشواكاً حامية، وتنتج في نهاية الصيف ثماراً عنقودية تبدأ باللون الأخضر، ثم تحمر، لتنضج أخيراً وتصبح سوداء داكنة حلوة المذاق، حيث يجمعها أبناء القرى لصناعة المربيات التراثية أو تناولها طازجة.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري والأغصان الشوكية المتشابكة", 
                img_path: "images/rubus_sanctus_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور التزهير وعقد الثمار الصيفية (البلاكبيري البري)", 
                img_path: "images/rubus_sanctus_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 40, 
        name_ar: "الخُبَّيْزَة البَرِّيَّة (الخُبَّيْزَة الكَبِيرَة / الخيرُّو)",
        scientific_name: "Malva sylvestris",
        audio_ar: "audio/arabic/malva_sylvestris_ar.mp3",
        audio_lat: "audio/latin/malva_sylvestris_lat.mp3",
        season: "أواخر الشتاء إلى منتصف الصيف (شباط - تموز)",
        environment: "المدى العشبي، حواف البساتين، الأراضي الزراعية المتروكة، وجوانب الطرقات في العزونية",
        story: "من أشهر الأعشاب البرية الحولية أو المعمرة في التراث الغذائي والطبي لجبال لبنان وتنتمي للفصيلة الخبازية. تشتهر بأوراقها الغنية بالمعادن والمواد الهلامية المفيدة، حيث تُجمع في الشتاء والربيع لطهيها كطبق قروي تقليدي بالزيت والبصل المكرمل. تنتج النبتة لاحقاً أزهاراً بنفسجية وردية ساحرة مخططة باللون الداكن تجذب النحل بكثافة.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري والأوراق الراحية", 
                img_path: "images/malva_sylvestris_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور التزهير البنفسجي وعقد الثمار (الخبيزات الصغيرة)", 
                img_path: "images/malva_sylvestris_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 41, 
        name_ar: "سِنْدِيان المَلُول (البَلُّوط الفَارِسِيّ / بَلُّوط المَلُول)",
        scientific_name: "Quercus brantii",
        audio_ar: "audio/arabic/quercus_brantii_ar.mp3",
        audio_lat: "audio/latin/quercus_brantii_lat.mp3",
        season: "متساقطة الأوراق جزئياً (تثمر الجوز في الخريف والشتاء)",
        environment: "المنحدرات الجبلية المشمسة، والأحراج المفتوحة في العزونية",
        story: "نوع مميز وضخم من أشجار البلوط التي تزين جبالنا، وتنتمي للفصيلة الزانية. تختلف عن السنديان العادي بأن أوراقها أكبر حجماً، وأقل قساوة وشوكية، وتتحول لألوان خريفية دافئة قبل أن تتساقط في الشتاء القارس لتجدد نموها في الربيع. تشكل جذوعها القوية ومظلاتها الكثيفة ركيزة أساسية للنظام البيئي الحرج وتوفر ظلاً ممتازاً في الطبيعة.",
        growth_stages: [
            { 
                stage_name: "المظهر العام للشجرة والتاج الخضري الكامل", 
                img_path: "images/quercus_brantii_st1.jpg", 
                is_primary: true
            }
        ]
    },
    {
        id: 42, 
        name_ar: "الشَّيْخَة الشَّائِعَة (مُرِير / جُلَيْجُوان / شِيخَة الأَرْض)",
        scientific_name: "Senecio vulgaris",
        audio_ar: "audio/arabic/senecio_vulgaris_ar.mp3",
        audio_lat: "audio/latin/senecio_vulgaris_lat.mp3",
        season: "طوال أواخر الشتاء والربيع وحتى أول الصيف",
        environment: "المنحدرات الحجرية، جوانب الدروب الترابية، والبساتين الندية في العزونية",
        story: "نبتة عشبية حولية تنتمي للفصيلة النجمية (المركبة). سميت 'الشيخة' بسبب كراتها القطنية البيضاء الناصعة التي تظهر بعد ذبول الأزهار الصفراء الصغيرة، حيث تشبه شعر الرأس الأبيض للشيخ الطاعن في السن. تنتشر بكثافة في طبيعة البلدة وتعتبر بذورها الطائرة غذاءً مفضلاً للعديد من الطيور البرية الصغيرة خلال فصل الربيع.",
        growth_stages: [
            { 
                stage_name: "طور البراعم والكرة القطنية لنضج وانتشار البذور", 
                img_path: "images/senecio_vulgaris_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 43, 
        name_ar: "إِكْلِيل الجَبَل (حَصَى البَان / رُوزْمَارِي)",
        scientific_name: "Salvia rosmarinus",
        audio_ar: "audio/arabic/salvia_rosmarinus_ar.mp3",
        audio_lat: "audio/latin/salvia_rosmarinus_lat.mp3",
        season: "مستديمة الخضرة (تزهر من أواخر الشتاء إلى الربيع)",
        environment: "المنحدرات الصخرية الجافة، حواف الجلول التقليدية، والحدائق الجبلية في العزونية",
        story: "شجيرة عطرية معمرة مستديمة الخضرة تحظى بمكانة خاصة في البيئة الجبلية. تمتاز بأوراقها الإبرية المتراصة الغنية بالزيوت الطيارة المفيدة. تنمو بكفاءة عالية بين الصخور وتتحمل قسوة الطقس، وتعتبر أزهارها الزرقاء أو البنفسجية الصغيرة (عند تفتحها) مقصداً حيوياً ومفضلاً للنحل البري لإنتاج عسل جبلي فاخر.",
        growth_stages: [
            { 
                stage_name: "المظهر العام للشجيرة والنمو الخضري الكثيف للأوراق الإبرية", 
                img_path: "images/salvia_rosmarinus_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 44, 
        name_ar: "الشَّمَر البَرِّي (الشَّومَر البَرِّي / الشَّمْر)",
        scientific_name: "Foeniculum vulgare",
        audio_ar: "audio/arabic/foeniculum_vulgare_ar.mp3",
        audio_lat: "audio/latin/foeniculum_vulgare_lat.mp3",
        season: "أواخر الربيع والصيف (أيار - آب)",
        environment: "المنحدرات الجبلية الجافة, حواف الحقول، والمساحات العشبية المفتوحة في العزونية",
        story: "نبات عشبي معمر عطري شاهق الارتفاع ينتمي للفصيلة الخيمية. يشتهر بمظلاته الزهرية الصفراء الكثيفة التي تجذب أعداداً هائلة من الحشرات الملقحة والفراشات في الصيف. تمتاز أوراقه الخيطية الدقيقة وبذوره اللاحقة برائحة عطرية نفاذة تشبه اليانسون، وهو جزء أصيل من النباتات الطبية والبرية التاريخية في جبال البلدة.",
        growth_stages: [
            { 
                stage_name: "المظهر العام للنبات الشاهق وسط المراعي الجبلية المفتوحة", 
                img_path: "images/foeniculum_vulgare_st1.jpg", 
                is_primary: true 
            },
            { 
                stage_name: "طور التزهير الكامل وظهور المظلات الزهرية الصفراء المفتوحة",
                img_path: "images/foeniculum_vulgare_st2.jpg", 
                is_primary: false 
            }
        ]
    },
    {
        id: 45, 
        name_ar: "العُلَّيق الأَسْوَد البَرِّي (الكَرمَة السَّودَاء / الفَاصِلِيَاء البَرِّيَّة)",
        scientific_name: "Dioscorea communis",
        audio_ar: "audio/arabic/dioscorea_communis_ar.mp3",
        audio_lat: "audio/latin/dioscorea_communis_lat.mp3",
        season: "الربيع وأول الصيف (نيسان - حزيران)",
        environment: "البيئات الغابوية الندية، تحت ظلال أشجار السنديان، والأحراج الكثيفة في العزونية",
        story: "نبتة عشبية معمرة متسلقة فريدة تنتمي لفصيلة اليام (Dioscoreaceae). تمتاز بأوراقها المصقولة اللامعة ذات الشكل القلبي أو السهمي المتناسق هندسياً، وسيقانها المرنة التي تلتف بذكاء حول جذوع الشجر والشجيرات المجاورة للارتفاع نحو الضوء المنتشر. تعتبر من النباتات المميزة لأرضية الأحراج الندية المحمية في البلدة.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري وظهور الأوراق السهمية اللامعة المتسلقة", 
                img_path: "images/dioscorea_communis_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 46, 
        name_ar: "الشَّعِير البَرِّي (السَّبَل / شَعِير الفَأْر)",
        scientific_name: "Hordeum murinum",
        audio_ar: "audio/arabic/hordeum_murinum_ar.mp3",
        audio_lat: "audio/latin/hordeum_murinum_lat.mp3",
        season: "الربيع المتأخر وبداية الصيف (نيسان - حزيران)",
        environment: "المراعي المفتوحة، التلال المشمسة، وحواف السلاسل الحجرية في العزونية",
        story: "نبات عشبي حولي يتبع الفصيلة النجيلية، يكسو تلال البلدة ومراعيها ببساط أخضر يتحول إلى الذهبي عند النضج. تمتاز سنابله بنتوءات وسفا إبرية طويلة تمنحه مظهراً هندسياً مميزاً وسط الأعشاب. يعتبر من المكونات الأساسية لغطاء المراعي الطبيعية ودورة الحياة البرية في المنطقة.",
        growth_stages: [
            { 
                stage_name: "الطور المتقدم واكتمال نمو السنابل البرية ذات السفا الإبرية الطويلة", 
                img_path: "images/hordeum_murinum_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 47, 
        name_ar: "الحِلاب الشَّوْكِيّ (الفَرْبِيُّون المتَرَاص / المَلْبَنَة)",
        scientific_name: "Euphorbia acanthothamnos",
        audio_ar: "audio/arabic/euphorbia_acanthothamnos_ar.mp3",
        audio_lat: "audio/latin/euphorbia_acanthothamnos_lat.mp3",
        season: "الربيع (آذار - حزيران)",
        environment: "المنحدرات الجبلية الصخرية شديدة التعرض للشمس والأحراج المفتوحة في العزونية",
        story: "شجيرة برية قوية معمرة ومقاومة للجفاف تنتمي للفصيلة الفربيونية. تمتاز بهيكلها الكروي المتراص وأزهارها الفريدة ذات اللون الأخضر المصفر التي تكسو أطراف السيقان في الربيع. تحتوي النبتة على عصارة لبنية بيضاء واقية، وتلعب دوراً رئيسياً في تثبيت التربة بين الصخور البرية الوعرة للبلدة.",
        growth_stages: [
            { 
                stage_name: "طور التزهير المبكر واكتساء أطراف الشجيرة بالأزهار الفنجانية المصفرّة", 
                img_path: "images/euphorbia_acanthothamnos_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 48, 
        name_ar: "المَيْرَمِيَّة البَرِّيَّة (القَصْعِين الثُّلَاثِي / القُوَيْصَة الجَبَلِيَّة)",
        scientific_name: "Salvia fruticosa",
        audio_ar: "audio/arabic/salvia_fruticosa_ar.mp3",
        audio_lat: "audio/latin/salvia_fruticosa_lat.mp3",
        season: "مستديمة الخضرة (تزهر في الربيع بين نيسان وحزيران)",
        environment: "المنحدرات الكلسية الجافة، حواف الأحراج المشمسة، والشقوق الصخرية في العزونية",
        story: "شجيرة عشبية معمرة عطرية بالغة الشهرة في التراث الطبي والغذائي لجبالنا وتنتمي للفصيلة الشفوية. تمتاز بأوراقها المخملية ذات اللون الأخضر الفضي الفواحة برائحة كافورية عطرية قوية جداً ونفاذة. تحظى بمكانة دافئة في كل منزل قروي حيث تُجمع وتُجفف لتُشرب كشاي ساخن مهدئ ومضاد للالتهابات.",
        growth_stages: [
            { 
                stage_name: "طور النمو الخضري المتقدم والأوراق المخملية الفضية الفواحة", 
                img_path: "images/salvia_fruticosa_st2.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 49, 
        name_ar: "مَدَّادُ الحُقُولِ الأَبْيَض (لَبْلَابُ المُرُوجِ البُوقِي)",
        scientific_name: "Convolvulus arvensis",
        audio_ar: "audio/arabic/convolvulus_arvensis_ar.mp3",
        audio_lat: "audio/latin/convolvulus_arvensis_lat.mp3",
        season: "أواخر الربيع وطوال أشهر الصيف (أيار - أيلول)",
        environment: "التربة الحصوية الجافة، حواف المسالك الترابية، والأراضي المفترشة المشمسة في العزونية",
        story: "نبات عشبي بري معمر ويمتاز بساقه الزاحفة الممتدة على الأرض أو المتسلقة بمرونة على النباتات المجاورة. يتألق بأزهاره القمعية البيضاء الناصعة التي تفتح مع شروق الشمس وتغلق في المساء. يمثل عنصراً صامداً وجذاباً يكسو المساحات الترابية المكشوفة خلال فترات الجفاف الممتدة.",
        growth_stages: [
            { 
                stage_name: "طور التزهير الكامل والامتداد الزاحف على التربة الحصوية", 
                img_path: "images/convolvulus_arvensis_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 50, 
        name_ar: "الخَشْخَاشُ البَرِّيُّ (دَيْدَحَانُ المُرُوجِ الـمُنْحَنِي)",
        scientific_name: "Papaver rhoeas",
        audio_ar: "audio/arabic/papaver_rhoeas_ar.mp3",
        audio_lat: "audio/latin/papaver_rhoeas_lat.mp3",
        season: "الربيع وأوائل الصيف (آذار - حزيران)",
        environment: "المنحدرات الجبلية المشمسة، حواف البساتين، والمروج العشبية المفتوحة في العزونية",
        story: "نبات عشبي حولي بري ساحر ينتمي للفصيلة الخشخاشية، ويشتهر بأزهاره الحمراء الفاقعة التي ترمز لقدوم الصيف. يظهر النبات في هذا الطور غابة من السيقان الوبرية الخشنة التي تحمل براعم بيضاوية مغلقة تنحني برؤوسها نحو الأرض برقة مذهلة، لتنتصب فجأة وتتحرر عند التفتح كأعلام حمراء تتراقص مع نسمات الجبل.",
        growth_stages: [
            { 
                stage_name: "طور تشكل البراعم الوبرية المتدلية قبل تفتح البتلات الحمراء", 
                img_path: "images/papaver_rhoeas_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 51,
        name_ar: "الشَّعِيرُ البُرِّيُّ الأُرْجُوانِيُّ (سَبَلُ المُرُوجِ النَّحِيلُ)",
        scientific_name: "Bromus madritensis",
        audio_ar: "audio/arabic/bromus_madritensis_ar.mp3",
        audio_lat: "audio/latin/bromus_madritensis_lat.mp3",
        season: "أواخر الربيع ومطلع الصيف (أيار - تموز)",
        environment: "الحقول الجافة، حواف الطرقات الصخرية، والمساحات المكشوفة المعرضة للشمس الكاملة في العزونية",
        story: "نبات عشبي حولي ينتمي للفصيلة النجيلية. يمتاز بسنابله المصغرة المتضامة النحيلة مقارنة بأنواع الشوفان البري الأخرى، وتأخذ هذه السنابل مظهراً رأسياً رشيقاً يتحول بالكامل إلى درجات الأرجواني والأحمر النبيذي الداكن عند النضج وبدء الجفاف الصيفي، مكسيةً التلال الجافة ببساط لوني دافئ وفاتن.",
        growth_stages: [
            { 
                stage_name: "طور نضوج السنابل النحيلة وتحولها للون الأرجواني الصيفي", 
                img_path: "images/bromus_madritensis_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 52,
        name_ar: "قُرُونُ الحَمَلِ المَحَارِيَّة (نَفَلُ الأَقْرَاصِ الحَلَزُونِي)",
        scientific_name: "Medicago orbicularis",
        audio_ar: "audio/arabic/medicago_orbicularis_ar.mp3",
        audio_lat: "audio/latin/medicago_orbicularis_lat.mp3",
        season: "أواخر الربيع ومطلع الصيف (نيسان - حزيران)",
        environment: "المنحدرات الكلسية الجافة، التربة الحصوية المكشوفة، والمراعي المشمسة في العزونية",
        story: "نبات عشبي بري حولي زاحف ينتمي للفصيلة البقولية. يشتهر هذا النبات بطور إثماره الفريد والمثير للدهشة؛ حيث تتحول أزهاره الصفراء المنمنمة بعد التلقيح إلى قرون بذرية مستديرة ومفلطحة تلتف حلزونياً على شكل أقراص ملساء تشبه التروس المصغرة، مكسيةً سطح الأرض الجافة بنسيج نباتي هندسي غاية في التناسق والجمال.",
        growth_stages: [
            { 
                stage_name: "طور تشكل القرون البذرية القرصية الحلزونية فوق الحصى", 
                img_path: "images/medicago_orbicularis_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 53,
        name_ar: "خافِضُ الحَرَارَةِ الجَبَلِيُّ (بُقَيْعَةُ القُرُونِ الطَّوِيلَة)",
        scientific_name: "Arabis turrita",
        audio_ar: "audio/arabic/arabis_turrita_ar.mp3",
        audio_lat: "audio/latin/arabis_turrita_lat.mp3",
        season: "الربيع وأوائل الصيف (نيسان - حزيران)",
        environment: "المنحدرات الترابية الجافة، شقوق الصخور الكلسية، وحواف المسالك الجبلية في العزونية",
        story: "نبات بري معمر ينتمي للفصيلة الصليبية. يبرز النبات في الطبيعة بعد انقضاء فترة تزهيره الباكر، حيث تتشكل على سيقانه النحيلة قرون بذرية خضراء أسطوانية وممتدة بشكل طولي لافت. تمثل هذه القرون آلية النبتة الذكية لحفظ البذور وحمايتها من حرارة الصيف القادمة حتى تنضج وتتطاير مع الرياح الجبلية.",
        growth_stages: [
            { 
                stage_name: "طور نضوج القرون البذرية الأسطوانية الطويلة وسط المنحدر الحصوي", 
                img_path: "images/arabis_turrita_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 54,
        name_ar: "الخِطْمِيَّةُ البَرِّيَّةُ (خُبَّازَى الأوراقِ الـمُفَصَّصَة)",
        scientific_name: "Malva alcea",
        audio_ar: "audio/arabic/malva_alcea_ar.mp3",
        audio_lat: "audio/latin/malva_alcea_lat.mp3",
        season: "أواخر الربيع ومطلع الصيف (أيار - آب)",
        environment: "المنحدرات الصخرية المشمسة، أطراف الأحراج، وحواف الجدران الكلسية في العزونية",
        story: "نبات عشبي بري معمر جذاب ينتمي للفصيلة الخبازية. يتمايز هذا النوع بوضوح في الحقول من خلال أوراقه العلوية المقسمة بعمق إلى فصوص مستطيلة ونحيلة، وأزهاره الوردية القرنفلية الزاهية التي تتألق فوق السيقان المنتصبة، معلنةً ذروة الجمال النباتي في الفترات الجافة من مطلع الصيف الجبلي.",
        growth_stages: [
            { 
                stage_name: "طور التزهير الكامل والأوراق الراحية العميقة الفصوص", 
                img_path: "images/malva_alcea_st1.jpg", 
                is_primary: true 
            }
        ]
    },
    {
        id: 55,
        name_ar: "الحِمْحِمُ المَخْرُوطِيُّ (لِسَانُ الثَّوْرِ الإِيطَالِيُّ / إِيطَالِيان بُوغْلُوس)",
        scientific_name: "Echium italicum",
        audio_ar: "audio/arabic/echium_italicum_ar.mp3",
        audio_lat: "audio/latin/echium_italicum_lat.mp3",
        season: "مطلع الصيف وأواسطه (أيار - آب)",
        environment: "المنحدرات الحجرية، حواف الجدران الدبشية، والأراضي الجافة المكشوفة في العزونية",
        story: "نبات بري ثنائي الحول قوي وبارز ينتمي للفصيلة الحِمحِمية، ويُعرف عالمياً باسم Italian Bugloss. يتميز بنموه العمودي الصارم وسيقانه المخروطية الشاهقة المكسوة بشعيرات وبرية فضية تحميه من التبخر. يشكل النبات في حقولنا أبراجاً هندسية لافتة قبل أن تتفتح على طول سيقانه أزهار منمنمة باهتة، مما يجعله معلماً بارزاً في طبيعة الصيف الجبلية.",
        growth_stages: [
            { 
                stage_name: "طور تشكل الأبراج والشماريخ الزهرية المخروطية الفضية (Italian Bugloss)", 
                img_path: "images/echium_italicum_st1.jpg", 
                is_primary: true 
            }
       ]
    },
   {
        id: 56,
        name_ar: "شَوْكُ الْحُقُولِ الْبَرِّيُّ (الْقُرْصُعْنَةُ الْكَنَدِيَّةُ)",
        scientific_name: "Cirsium arvense",
        audio_ar: "audio/arabic/cirsium_arvense_ar.mp3",
        audio_lat: "audio/latin/cirsium_arvense_lat.mp3",
        season: "أواخر الربيع وطوال الصيف (أيار - أيلول)",
        environment: "الحقول الزراعية المهملة، جوانب الطرقات، والمراعي المشمسة ذات التربة الرطبة أو الطينية",
        story: "نبات عشبي معمر قوي الانتشار ينتمي للعائلة النجمية (Asteraceae). يتميز بسيقانه المضلعة ذات الخطوط الأرجوانية والحمراء الداكنة، وأورافه الخضراء الناعمة ذات الحواف المتموجة والمسلحة بأشواك إبرية صفراء حادة جداً، وينتج لاحقاً رؤوساً زهرية صغيرة الحجم بألوان تتراوح بين الوردي والبنفسجي الفاتح.",
        growth_stages: [
          { 
            stage_name: "الطور الخضري والشوكي المبكر وتلون السيقان باللون الأرجواني الداكن", 
            img_path: "images/cirsium_arvense_st1.jpg", 
            is_primary: true 
          },
          { 
            stage_name: "طور التزهير الكامل وظهور الرؤوس الزهرية الأنبوبية الوردية والبنفسجية", 
            img_path: "images/cirsium_arvense_st2.jpg", 
            is_primary: false 
          }
        ]
      },
   {
    id: 57,
    name_ar: "الْوَزَالُ الْبَرِّيُّ (رَتِيمَةٌ / وَزَالٌ فِتْنِيٌّ)",
    scientific_name: "Spartium junceum",
    audio_ar: "audio/arabic/spartium_junceum_ar.mp3",
    audio_lat: "audio/latin/spartium_junceum_lat.mp3",
    season: "منتصف الربيع ومطلع الصيف (نيسان - حزيران)",
    environment: "المنحدرات الجبلية الجافة، الأحراج المشمسة، وحواف الطرق البرية الصخرية",
    story: "شجيرة برية معمرة شاهقة وتفرعية، تتميز بأغصانها الخضراء الأسطوانية الشبيهة بالقصب والتي تكاد تخلو من الأوراق. تتفجر في الربيع بكثافة مذهلة من الأزهار الفراشية ذات اللون الأصفر الذهبي الفاقع، ناشرة في الأرجاء عبقاً عسلياً فواحاً. تُعد من رموز الصمود في البيئات الجافة، واستُخدمت أغصانها المرنة قديماً في أعمال الحرف اليدوية وصناعة السلال المتينة في قرى البحر الأبيض المتوسط.",
    growth_stages: [
      {
        stage_name: "طور التزهير الكامل والانفجار اللوني الأصفر الذهبي",
        img_path: "images/spartium_junceum.jpg",
        is_primary: true
      }
    ]
  }
];
