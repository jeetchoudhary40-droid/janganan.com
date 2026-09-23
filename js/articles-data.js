/**
 * जनगणना (Janganana) - Census of India Assistance Portal
 * Master Data Repository: Articles, Tutorials, Official Updates, & FAQs (Bilingual: HI / EN)
 */

const JANGANANA_DATA = {
  // Live India Population Baseline Parameters (Projected for dynamic real-time counter)
  populationStats: {
    baseCount: 1441719852, // Current base estimate
    growthPerSecond: 0.48, // Net births - deaths per second
    lastCensus2011: 1210854977,
    sexRatioEstimate: "948 females per 1000 males",
    literacyRateEstimate: "77.7%",
    statesAndUTs: "28 States & 8 UTs",
    districtsCovered: "780+ Districts"
  },

  // Breaking Announcements Ticker
  tickerItems: [
    {
      id: "t1",
      title_en: "Gazette Notification: Digital Census Self-Enumeration Portal opens for citizens across all states.",
      title_hi: "राजपत्र अधिसूचना: सभी राज्यों के नागरिकों के लिए डिजिटल जनगणना स्व-गणना पोर्टल खुला।",
      link: "article.html?id=digital-census-self-enumeration-guide",
      isBreaking: true
    },
    {
      id: "t2",
      title_en: "National Census Toll-Free Helpline 1800-180-2026 now active 24x7 in 16 official languages.",
      title_hi: "राष्ट्रीय जनगणना टोल-फ्री हेल्पलाइन 1800-180-2026 अब 16 आधिकारिक भाषाओं में 24x7 सक्रिय है।",
      link: "article.html?id=census-helpline-directory",
      isBreaking: false
    },
    {
      id: "t3",
      title_en: "Phase 1: Houselisting & Housing Census schedule notified. Know the 31 questions list.",
      title_hi: "चरण 1: मकान सूचीकरण एवं आवास जनगणना कार्यक्रम अधिसूचित। 31 प्रश्नों की सूची जानें।",
      link: "article.html?id=house-listing-31-questions-guide",
      isBreaking: false
    }
  ],

  // Articles & Tutorials
  articles: [
    {
      id: "digital-census-self-enumeration-guide",
      category: "tutorial",
      categoryName_en: "Tutorial",
      categoryName_hi: "मार्गदर्शिका (ट्यूटोरियल)",
      title_en: "Complete Guide: How to Complete Census Self-Enumeration Online (Step-by-Step)",
      title_hi: "संपूर्ण गाइड: ऑनलाइन जनगणना स्व-गणना (Self-Enumeration) कैसे पूरी करें (चरण-दर-चरण)",
      slug: "digital-census-self-enumeration-guide",
      publishDate: "2026-09-15",
      modifiedDate: "2026-09-22",
      author: "National Census Guidance Team",
      readTime_en: "6 min read",
      readTime_hi: "6 मिनट पठन",
      wordCount: 1250,
      image: "assets/images/self-enumeration-banner.svg",
      imageCaption_en: "Citizen Self-Enumeration via Digital Portal & Mobile App",
      imageCaption_hi: "डिजिटल पोर्टल एवं मोबाइल ऐप द्वारा नागरिक स्व-गणना",
      excerpt_en: "Learn how citizens can fill out their household census form online using Aadhaar OTP verification or mobile registration prior to the enumerator's physical visit.",
      excerpt_hi: "जानें कि प्रगणक के भौतिक दौरे से पहले नागरिक आधार ओटीपी सत्यापन या मोबाइल पंजीकरण के माध्यम से अपने परिवार का जनगणना फॉर्म ऑनलाइन कैसे भर सकते हैं।",
      tags: ["Self-Enumeration", "Online Portal", "Citizen Guide", "Digital Census", "Tutorial"],
      content_en: `
        <p>For the first time in the history of Indian Census operations, citizens have been empowered to complete their household enumeration online through the dedicated <strong>Digital Census Self-Enumeration Portal</strong>.</p>
        
        <div class="info-alert">
          <div>
            <strong>Important Notice:</strong> Self-enumeration is completely free of charge. You will receive a unique Reference Identification Number (RID) upon submission, which you only need to show to the enumerator during physical verification.
          </div>
        </div>

        <h2>Prerequisites for Online Self-Enumeration</h2>
        <p>Before beginning the online filling process, ensure you have the following information ready:</p>
        <ul>
          <li>Active Mobile Number linked with an OTP facility.</li>
          <li>Head of Household's identification and family member count.</li>
          <li>Basic details of the residential building (ownership status, source of drinking water, electricity, toilet facility).</li>
          <li>Educational qualification and occupation details of all household members.</li>
        </ul>

        <h2>Step-by-Step Instructions to Fill the Form</h2>
        
        <div class="step-box">
          <span class="step-number">Step 1</span>
          <h3>User Registration & Mobile Login</h3>
          <p>Visit the official Census web portal or download the Janganana Mobile App. Click on <strong>'Citizen Login'</strong> and enter your 10-digit mobile number. Enter the 6-digit OTP received via SMS to securely authenticate your session.</p>
        </div>

        <div class="step-box">
          <span class="step-number">Step 2</span>
          <h3>Location & House Address Identification</h3>
          <p>Select your State/UT, District, Sub-district (Tehsil/Taluk), Village/Town, and Ward number from the pre-populated dropdowns. Enter your postal PIN code and current house address clearly.</p>
        </div>

        <div class="step-box">
          <span class="step-number">Step 3</span>
          <h3>Entering House Listing & Amenities Data</h3>
          <p>Provide answers to the standardized housing condition questions:</p>
          <ul>
            <li>Predominant material of the floor, wall, and roof.</li>
            <li>Number of dwelling rooms exclusively in possession of the household.</li>
            <li>Main source of lighting, cooking fuel (LPG/PNG), and drinking water.</li>
            <li>Availability of internet connection, smartphone, television, and vehicles (two-wheeler / four-wheeler).</li>
          </ul>
        </div>

        <div class="step-box">
          <span class="step-number">Step 4</span>
          <h3>Adding Family Members Details</h3>
          <p>Add all individuals normally residing in the household starting with the Head of Household. Detail their full name, relationship with head, gender, date of birth, marital status, religion, mother tongue, literacy status, and major economic activity.</p>
        </div>

        <div class="step-box">
          <span class="step-number">Step 5</span>
          <h3>Review, Submit & Obtain RID Code</h3>
          <p>Carefully review all preview screens. Once verified, click <strong>'Final Submit'</strong>. The portal will generate a 12-digit <em>Reference Identification Number (RID)</em> and send a confirmation SMS to your phone.</p>
        </div>

        <h2>What Happens After Online Submission?</h2>
        <p>When the local Census Enumerator visits your house during the designated field schedule, simply provide them with your 12-digit RID number. The enumerator will quickly verify the record on their official mobile device without requiring you to re-answer all 31+ questions manually.</p>
      `,
      content_hi: `
        <p>भारतीय जनगणना के इतिहास में पहली बार नागरिकों को समर्पित <strong>डिजिटल जनगणना स्व-गणना पोर्टल</strong> के माध्यम से अपने परिवार की गणना ऑनलाइन पूरी करने की सुविधा प्रदान की गई है।</p>
        
        <div class="info-alert">
          <div>
            <strong>महत्वपूर्ण सूचना:</strong> स्व-गणना पूरी तरह से निःशुल्क है। फॉर्म जमा करने पर आपको एक अद्वितीय संदर्भ पहचान संख्या (RID) प्राप्त होगी, जिसे आपको केवल भौतिक सत्यापन के दौरान प्रगणक को दिखाना होगा।
          </div>
        </div>

        <h2>ऑनलाइन स्व-गणना के लिए आवश्यक पूर्व-आवश्यकताएं</h2>
        <p>ऑनलाइन फॉर्म भरने की प्रक्रिया शुरू करने से पहले सुनिश्चित करें कि आपके पास निम्नलिखित विवरण तैयार हैं:</p>
        <ul>
          <li>सक्रिय मोबाइल नंबर (ओटीपी प्राप्त करने के लिए)।</li>
          <li>परिवार के मुखिया का विवरण एवं परिवार के कुल सदस्यों की संख्या।</li>
          <li>आवासीय भवन के बुनियादी विवरण (स्वामित्व स्थिति, पेयजल स्रोत, बिजली, शौचालय सुविधा)।</li>
          <li>परिवार के सभी सदस्यों की शैक्षणिक योग्यता और व्यवसाय संबंधी विवरण।</li>
        </ul>

        <h2>फॉर्म भरने के लिए चरण-दर-चरण निर्देश</h2>
        
        <div class="step-box">
          <span class="step-number">चरण 1</span>
          <h3>उपयोगकर्ता पंजीकरण एवं मोबाइल लॉगिन</h3>
          <p>आधिकारिक जनगणना वेब पोर्टल पर जाएं या जनगणना मोबाइल ऐप डाउनलोड करें। <strong>'नागरिक लॉगिन'</strong> पर क्लिक करें और अपना 10 अंकों का मोबाइल नंबर दर्ज करें। अपने सत्र को सुरक्षित रूप से सत्यापित करने के लिए एसएमएस के माध्यम से प्राप्त 6 अंकों का ओटीपी दर्ज करें।</p>
        </div>

        <div class="step-box">
          <span class="step-number">चरण 2</span>
          <h3>स्थान एवं मकान का पता चयन</h3>
          <p>ड्रॉपडाउन मेनू से अपना राज्य/केंद्र शासित प्रदेश, जिला, तहसील/तालुका, गांव/शहर और वार्ड नंबर चुनें। अपना पिन कोड और वर्तमान मकान का पता स्पष्ट रूप से दर्ज करें।</p>
        </div>

        <div class="step-box">
          <span class="step-number">चरण 3</span>
          <h3>मकान सूचीकरण और सुविधाओं का विवरण दर्ज करना</h3>
          <p>मानकीकृत आवास स्थिति संबंधी प्रश्नों के उत्तर दें:</p>
          <ul>
            <li>फर्श, दीवार और छत की प्रमुख सामग्री।</li>
            <li>परिवार के अनन्य कब्जे में रहने वाले कमरों की संख्या।</li>
            <li>प्रकाश व्यवस्था, रसोई ईंधन (एलपीजी/पीएनजी) और पेयजल का मुख्य स्रोत।</li>
            <li>इंटरनेट कनेक्शन, स्मार्टफोन, टेलीविजन और वाहनों की उपलब्धता।</li>
          </ul>
        </div>

        <div class="step-box">
          <span class="step-number">चरण 4</span>
          <h3>परिवार के सदस्यों का विवरण जोड़ना</h3>
          <p>परिवार के मुखिया से शुरू करते हुए सामान्य रूप से निवास करने वाले सभी व्यक्तियों का विवरण जोड़ें। उनका पूरा नाम, मुखिया से संबंध, लिंग, जन्म तिथि, वैवाहिक स्थिति, मातृभाषा, साक्षरता स्थिति और मुख्य आर्थिक गतिविधि दर्ज करें।</p>
        </div>

        <div class="step-box">
          <span class="step-number">चरण 5</span>
          <h3>समीक्षा करें, सबमिट करें और RID कोड प्राप्त करें</h3>
          <p>सभी पूर्वावलोकन विवरणों की सावधानीपूर्वक समीक्षा करें। सत्यापन के बाद <strong>'अंतिम सबमिट'</strong> पर क्लिक करें। पोर्टल 12 अंकों का <em>संदर्भ पहचान नंबर (RID)</em> तैयार करेगा और आपके फोन पर पुष्टिकरण एसएमएस भेजेगा।</p>
        </div>

        <h2>ऑनलाइन सबमिशन के बाद क्या होगा?</h2>
        <p>जब स्थानीय जनगणना प्रगणक आपके घर आएंगे, तो आपको केवल अपना 12 अंकों का RID नंबर दिखाना होगा। प्रगणक अपने आधिकारिक मोबाइल डिवाइस पर रिकॉर्ड को तुरंत सत्यापित कर लेंगे।</p>
      `
    },
    {
      id: "house-listing-31-questions-guide",
      category: "tutorial",
      categoryName_en: "Questionnaire Guide",
      categoryName_hi: "प्रश्नावली मार्गदर्शिका",
      title_en: "Phase 1 Census: Understanding the 31 House Listing & Housing Questions",
      title_hi: "चरण 1 जनगणना: मकान सूचीकरण और आवास संबंधी 31 प्रश्नों को समझें",
      slug: "house-listing-31-questions-guide",
      publishDate: "2026-09-18",
      modifiedDate: "2026-09-21",
      author: "Census Statistical Wing",
      readTime_en: "8 min read",
      readTime_hi: "8 मिनट पठन",
      wordCount: 1600,
      image: "assets/images/houselisting-banner.svg",
      imageCaption_en: "Standard Houselisting & Housing Census Schedule Parameters",
      imageCaption_hi: "मानक मकान सूचीकरण और आवास जनगणना अनुसूची पैरामीटर",
      excerpt_en: "A comprehensive breakdown of all 31 parameters asked during Phase 1 Houselisting operations, covering building materials, living amenities, asset ownership, and household size.",
      excerpt_hi: "चरण 1 मकान सूचीकरण संचालन के दौरान पूछे जाने वाले सभी 31 मापदंडों का विस्तृत विवरण, जिसमें निर्माण सामग्री, रहन-सहन की सुविधाएं, संपत्ति स्वामित्व और परिवार का आकार शामिल है।",
      tags: ["House Listing", "Phase 1", "31 Questions", "Questionnaire", "Census 2026"],
      content_en: `
        <p>The Census of India is conducted in two distinct phases: <strong>Phase 1: House Listing and Housing Census</strong>, followed by <strong>Phase 2: Population Enumeration</strong>.</p>
        
        <h2>Why is Phase 1 Conducted First?</h2>
        <p>The primary goal of the Houselisting phase is to map every single residential and commercial building across urban and rural India, creating an exhaustive framework so that no individual is missed during the subsequent population head count.</p>

        <h2>The Key Question Groups in Phase 1</h2>
        
        <h3>1. Building Identification & Structural Characteristics</h3>
        <ul>
          <li><strong>Building Number & Census House Number:</strong> Unique identifier assigned by the municipal or village authority.</li>
          <li><strong>Predominant Material of Floor:</strong> Mud, wood/bamboo, brick, stone, cement, mosaic/tiles, etc.</li>
          <li><strong>Predominant Material of Wall:</strong> Grass/thatch, mud/unburnt brick, wood, burnt brick, stone, concrete, etc.</li>
          <li><strong>Predominant Material of Roof:</strong> Thatch, tiles, slate, corrugated sheet, RCC/concrete, etc.</li>
          <li><strong>Use of Census House:</strong> Wholly residential, partly residential, commercial shop, workshop, school, healthcare, religious, vacant, etc.</li>
          <li><strong>Condition of House:</strong> Good, Livable, or Dilapidated.</li>
        </ul>

        <h3>2. Household Characteristics & Living Amenities</h3>
        <ul>
          <li><strong>Ownership Status of House:</strong> Owned, Rented, or Other arrangement.</li>
          <li><strong>Number of Living Rooms:</strong> Number of dwelling rooms occupied by the household.</li>
          <li><strong>Main Source of Drinking Water:</strong> Tap water from treated source, un-treated tap water, covered well, tube-well/borehole, hand-pump, etc.</li>
          <li><strong>Source of Lighting:</strong> Electricity, Solar energy, Kerosene, Other oil, No lighting.</li>
          <li><strong>Access to Latrine / Toilet Facility:</strong> Flush/pour-flush latrine connected to piped sewer, septic tank, twin leach pit, open pit, public toilet.</li>
          <li><strong>Type of Drainage Facility:</strong> Closed drainage, Open drainage, No drainage.</li>
          <li><strong>Availability of Bathing Facility:</strong> Enclosed bathroom with roof, without roof.</li>
          <li><strong>Kitchen & Cooking Fuel:</strong> LPG/PNG connection, Firewood, Crop residue, Cow dung cake, Biogas, Kerosene, Electricity.</li>
        </ul>

        <h3>3. Ownership of Specified Digital & Physical Assets</h3>
        <ul>
          <li>Radio / Transistor.</li>
          <li>Television set.</li>
          <li>Internet facility availability (Broadband / Mobile internet).</li>
          <li>Laptop / Computer.</li>
          <li>Telephone / Mobile Phone (Smart phone / Feature phone).</li>
          <li>Bicycle, Scooter / Motorcycle / Moped.</li>
          <li>Car / Jeep / Van.</li>
          <li>Main cereal consumed by the household (Rice, Wheat, Jowar, Bajra, Maize, etc.).</li>
        </ul>

        <h2>Privacy & Confidentiality Guarantee</h2>
        <p>Under the provisions of the <strong>Census Act, 1948</strong>, all information collected by the enumerator is strictly confidential. Individual details cannot be used as evidence in courts of law nor shared with commercial entities. It is utilized exclusively for socio-economic policy planning, allocation of public resources, and administrative development.</p>
      `,
      content_hi: `
        <p>भारतीय जनगणना दो अलग-अलग चरणों में आयोजित की जाती है: <strong>चरण 1: मकान सूचीकरण और आवास जनगणना</strong>, जिसके बाद <strong>चरण 2: जनसंख्या गणना</strong> होती है।</p>
        
        <h2>चरण 1 पहले क्यों आयोजित किया जाता है?</h2>
        <p>मकान सूचीकरण चरण का प्राथमिक उद्देश्य शहरी और ग्रामीण भारत में प्रत्येक आवासीय और वाणिज्यिक भवन का नक्शा तैयार करना है, ताकि बाद में जनसंख्या गणना के दौरान कोई भी व्यक्ति छूट न जाए।</p>

        <h2>चरण 1 में पूछे जाने वाले प्रमुख प्रश्न समूह</h2>
        
        <h3>1. भवन पहचान एवं संरचनात्मक विशेषताएं</h3>
        <ul>
          <li><strong>भवन संख्या एवं जनगणना मकान नंबर:</strong> स्थानीय निकाय द्वारा आवंटित विशिष्ट पहचान संख्या।</li>
          <li><strong>फर्श की प्रमुख सामग्री:</strong> मिट्टी, लकड़ी/बांस, पक्की ईंट, पत्थर, सीमेंट, मोज़ेक/टाइल्स।</li>
          <li><strong>दीवार की प्रमुख सामग्री:</strong> घास/फूस, कच्ची ईंट, पक्की ईंट, पत्थर, कंक्रीट (RCC)।</li>
          <li><strong>छत की प्रमुख सामग्री:</strong> खपरैल, स्लेट, नालीदार चादर, आरसीसी/कंक्रीट।</li>
          <li><strong>जनगणना मकान का उपयोग:</strong> पूर्ण आवासीय, आंशिक आवासीय, दुकान, कार्यशाला, स्कूल, अस्पताल, खाली आदि।</li>
          <li><strong>मकान की स्थिति:</strong> अच्छी, रहने योग्य, या जीर्ण-शीर्ण।</li>
        </ul>

        <h3>2. परिवार की विशेषताएं एवं जीवन सुविधाएं</h3>
        <ul>
          <li><strong>मकान का स्वामित्व:</strong> स्वयं का, किराए का, या अन्य।</li>
          <li><strong>कमरों की संख्या:</strong> परिवार के रहने के लिए उपलब्ध कमरों की कुल संख्या।</li>
          <li><strong>पेयजल का मुख्य स्रोत:</strong> उपचारित नल का पानी, कुआं, हैंडपंप, ट्यूबवेल/बोरवेल आदि।</li>
          <li><strong>प्रकाश का मुख्य स्रोत:</strong> बिजली, सौर ऊर्जा, केरोसिन, आदि।</li>
          <li><strong>शौचालय सुविधा की उपलब्धता:</strong> सीवर नेटवर्क से जुड़ा फ्लश शौचालय, सेप्टिक टैंक, ट्विन पिट, सार्वजनिक शौचालय।</li>
          <li><strong>जल निकासी (ड्रेनेज) सुविधा:</strong> बंद नाली, खुली नाली, कोई नाली नहीं।</li>
          <li><strong>रसोई ईंधन:</strong> एलपीजी/पीएनजी कनेक्शन, जलाऊ लकड़ी, बायो-गैस, सौर/बिजली।</li>
        </ul>

        <h3>3. डिजिटल एवं भौतिक परिसंपत्तियों का स्वामित्व</h3>
        <ul>
          <li>रेडियो / ट्रांजिस्टर।</li>
          <li>टेलीविजन सेट।</li>
          <li>इंटरनेट सुविधा की उपलब्धता (ब्रॉडबैंड / मोबाइल इंटरनेट)।</li>
          <li>लैपटॉप / कंप्यूटर।</li>
          <li>टेलीफोन / स्मार्टफोन।</li>
          <li>साइकिल, स्कूटर / मोटरसाइकिल।</li>
          <li>कार / जीप / वैन।</li>
        </ul>

        <h2>गोपनीयता की कानूनी गारंटी</h2>
        <p><strong>जनगणना अधिनियम, 1948</strong> के प्रावधानों के तहत प्रगणक द्वारा एकत्र की गई सभी जानकारी पूर्णतः गोपनीय होती है। इसका उपयोग केवल राष्ट्रीय नीतियों के निर्माण, सामाजिक-आर्थिक विकास और सार्वजनिक संसाधनों के आवंटन के लिए किया जाता है।</p>
      `
    },
    {
      id: "official-gazette-digital-census-rollout",
      category: "update",
      categoryName_en: "Official Update",
      categoryName_hi: "आधिकारिक सूचना",
      title_en: "Union Cabinet Approves Digital Architecture for India's 16th National Census",
      title_hi: "केंद्रीय मंत्रिमंडल ने भारत की 16वीं राष्ट्रीय जनगणना के डिजिटल ढांचे को मंजूरी दी",
      slug: "official-gazette-digital-census-rollout",
      publishDate: "2026-09-20",
      modifiedDate: "2026-09-20",
      author: "Press Information Bureau (PIB) / MHA",
      readTime_en: "4 min read",
      readTime_hi: "4 मिनट पठन",
      wordCount: 850,
      image: "assets/images/cabinet-decision-banner.svg",
      imageCaption_en: "Official Digital Census Framework Press Release",
      imageCaption_hi: "डिजिटल जनगणना ढांचे संबंधी आधिकारिक प्रेस विज्ञप्ति",
      excerpt_en: "The Ministry of Home Affairs announces a multi-mode digital census framework incorporating mobile data collection, dynamic validation, and self-enumeration for over 1.4 billion citizens.",
      excerpt_hi: "गृह मंत्रालय ने 1.4 अरब से अधिक नागरिकों के लिए मोबाइल डेटा संग्रह, गतिशील सत्यापन और स्व-गणना की सुविधा वाले डिजिटल जनगणना ढांचे की घोषणा की।",
      tags: ["Cabinet Decision", "Gazette", "MHA", "Digital India", "Census 2026"],
      content_en: `
        <p>In a historic landmark decision, the Union Government has officially notified the roadmap for conducting India's first fully digital Census. The massive national undertaking will leverage modern geospatial tagging, indigenous mobile application infrastructure, and cloud-native secure servers to capture, validate, and publish demographic data with unprecedented speed and accuracy.</p>

        <h2>Key Highlights of the Cabinet Notification</h2>
        <ul>
          <li><strong>Paperless Enumeration:</strong> Over 3.3 million field enumerators and supervisors will be equipped with specialized secured mobile applications operating in offline-first mode.</li>
          <li><strong>Citizen Self-Enumeration Portal:</strong> Citizens will have a 15 to 30 days advance window in each phase to submit household data digitally from anywhere in the world.</li>
          <li><strong>Encrypted Multi-Tier Security:</strong> All collected data packets will be encrypted end-to-end using AES-256 standards with zero local caching on field devices after transmission.</li>
          <li><strong>Multilingual Interface:</strong> The mobile applications and citizen portals will be fully operational in all 22 Eighth Schedule Indian languages.</li>
        </ul>

        <h2>Budgetary Allocation & Resource Deployment</h2>
        <p>The total financial outlay approved for the National Census operations encompasses training modules for teachers and government personnel, technology infrastructure deployment, public awareness campaigns (IEC), and multi-tier monitoring dashboards up to the district magistrate level.</p>
      `,
      content_hi: `
        <p>एक ऐतिहासिक निर्णय में केंद्र सरकार ने भारत की पहली पूर्ण डिजिटल जनगणना के संचालन के रोडमैप को आधिकारिक रूप से अधिसूचित किया है। यह विशाल राष्ट्रीय अभियान आधुनिक भू-स्थानिक टैगिंग, स्वदेशी मोबाइल एप्लिकेशन और सुरक्षित क्लाउड सर्वर का उपयोग करेगा।</p>

        <h2>मंत्रिमंडल अधिसूचना की प्रमुख विशेषताएं</h2>
        <ul>
          <li><strong>कागज रहित गणना:</strong> 33 लाख से अधिक फील्ड प्रगणकों और पर्यवेक्षकों को ऑफलाइन-फर्स्ट मोड में काम करने वाले सुरक्षित मोबाइल एप्लिकेशन से लैस किया जाएगा।</li>
          <li><strong>नागरिक स्व-गणना पोर्टल:</strong> नागरिकों को प्रत्येक चरण में दुनिया के किसी भी कोने से डिजिटल रूप से पारिवारिक डेटा दर्ज करने के लिए 15 से 30 दिनों की अग्रिम अवधि मिलेगी।</li>
          <li><strong>एन्क्रिप्टेड बहुस्तरीय सुरक्षा:</strong> एकत्र किए गए सभी डेटा पैकेट एंड-टू-एंड AES-256 एन्क्रिप्शन से सुरक्षित रहेंगे।</li>
          <li><strong>बहुभाषी इंटरफेस:</strong> मोबाइल एप्लिकेशन और नागरिक पोर्टल सभी 22 संविधान सम्मत भारतीय भाषाओं में कार्य करेंगे।</li>
        </ul>
      `
    },
    {
      id: "census-helpline-directory",
      category: "update",
      categoryName_en: "Public Notice",
      categoryName_hi: "सार्वजनिक सूचना",
      title_en: "National Census Helpline 1800-180-2026 & State Nodal Helpdesks Directory",
      title_hi: "राष्ट्रीय जनगणना हेल्पलाइन 1800-180-2026 एवं राज्य नोडल हेल्पडेस्क निर्देशिका",
      slug: "census-helpline-directory",
      publishDate: "2026-09-12",
      modifiedDate: "2026-09-22",
      author: "Office of the Registrar General & Census Commissioner",
      readTime_en: "3 min read",
      readTime_hi: "3 मिनट पठन",
      wordCount: 650,
      image: "assets/images/helpline-banner.svg",
      imageCaption_en: "24x7 Multi-lingual Citizen Census Support Helpline",
      imageCaption_hi: "24x7 बहुभाषी नागरिक जनगणना सहायता हेल्पलाइन",
      excerpt_en: "Access state-wise toll-free numbers, email support, WhatsApp query bot, and grievance redressal channels for all census-related inquiries.",
      excerpt_hi: "जनगणना से संबंधित सभी प्रश्नों के लिए राज्यवार टोल-फ्री नंबर, ईमेल सहायता, व्हाट्सएप क्वेरी बॉट और शिकायत निवारण चैनलों की जानकारी प्राप्त करें।",
      tags: ["Helpline", "Toll Free", "Support", "State Nodal Officers", "Contact"],
      content_en: `
        <p>To assist citizens, enumerators, and field supervisors with seamless queries, technical assistance, and grievance redressal, the Office of the Registrar General & Census Commissioner of India (ORGI) has launched an integrated multi-channel support ecosystem.</p>

        <h2>Primary National Assistance Channels</h2>
        <ul>
          <li><strong>National Toll-Free Number:</strong> <span style="font-size: 1.25rem; font-weight: bold; color: #046A38;">1800-180-2026</span> (Toll-Free, 24x7)</li>
          <li><strong>Official Support Email:</strong> <a href="mailto:support.census@nic.in">support.census@nic.in</a></li>
          <li><strong>WhatsApp AI Assistance Bot:</strong> +91-11-2345-2026 (Send 'Hi' or 'नमस्ते' to begin)</li>
          <li><strong>Self-Service Web Portal:</strong> <a href="https://janganana.gov.in" target="_blank" rel="noopener">janganana.gov.in</a></li>
        </ul>

        <h2>Assistance Offered</h2>
        <p>The helpdesk executives are trained to assist with:</p>
        <ul>
          <li>Resolving OTP issues during online self-enumeration.</li>
          <li>Verifying the credentials of visiting field enumerators.</li>
          <li>Clarifying questionnaire terminology (e.g., definition of household, main worker vs marginal worker).</li>
          <li>Reporting missed residences or scheduling repeat enumerator visits.</li>
        </ul>
      `,
      content_hi: `
        <p>नागरिकों, प्रगणकों और फील्ड पर्यवेक्षकों की सहायता के लिए भारत के महारजिस्ट्रार एवं जनगणना आयुक्त कार्यालय (ORGI) ने एक एकीकृत सहायता प्रणाली शुरू की है।</p>

        <h2>प्रमुख राष्ट्रीय सहायता चैनल</h2>
        <ul>
          <li><strong>राष्ट्रीय टोल-फ्री नंबर:</strong> <span style="font-size: 1.25rem; font-weight: bold; color: #046A38;">1800-180-2026</span> (निःशुल्क, 24 घंटे उपलब्ध)</li>
          <li><strong>आधिकारिक सहायता ईमेल:</strong> support.census@nic.in</li>
          <li><strong>व्हाट्सएप सहायता बॉट:</strong> +91-11-2345-2026 ('नमस्ते' लिखकर भेजें)</li>
        </ul>
      `
    },
    {
      id: "enumerator-supervisor-training-handbook",
      category: "tutorial",
      categoryName_en: "Official Training",
      categoryName_hi: "प्रशिक्षण मार्गदर्शिका",
      title_en: "Enumerator & Supervisor Field Handbook: Best Practices & Mobile App Guide",
      title_hi: "प्रगणक एवं पर्यवेक्षक फील्ड हैंडबुक: सर्वोत्तम कार्यप्रणाली एवं मोबाइल ऐप गाइड",
      slug: "enumerator-supervisor-training-handbook",
      publishDate: "2026-09-08",
      modifiedDate: "2026-09-19",
      author: "Directorate of Census Operations",
      readTime_en: "7 min read",
      readTime_hi: "7 मिनट पठन",
      wordCount: 1400,
      image: "assets/images/enumerator-handbook.svg",
      imageCaption_en: "Field Enumeration Manual & Mobile App Instructions",
      imageCaption_hi: "फील्ड गणना नियमावली एवं मोबाइल ऐप निर्देश",
      excerpt_en: "Essential operational guide for school teachers, Anganwadi workers, and government staff designated as Census Enumerators and Supervisors for field data collection.",
      excerpt_hi: "फील्ड डेटा संग्रह के लिए जनगणना प्रगणक एवं पर्यवेक्षक के रूप में नामित शिक्षकों, आंगनवाड़ी कार्यकर्ताओं और सरकारी कर्मचारियों के लिए आवश्यक परिचालन गाइड।",
      tags: ["Enumerator Guide", "Supervisor", "Training", "Field Operations", "Mobile App"],
      content_en: `
        <p>Census Enumerators and Supervisors are the fundamental pillars of the national enumeration exercise. This handbook summarizes the core operational protocols, mobile app syncing workflows, and communication etiquettes required during house-to-house enumeration.</p>

        <h2>Core Responsibilities of an Enumerator</h2>
        <ul>
          <li>Delineate and update the Enumeration Block (EB) layout sketch map before beginning visits.</li>
          <li>Visit every building and household assigned within your designated EB without omission or duplication.</li>
          <li>Politely introduce yourself and display your official Government Identity Card and Census Authority Badge.</li>
          <li>Record responses accurately without subjective assumptions or judgments.</li>
          <li>Sync encrypted data to the central server whenever network connectivity becomes available.</li>
        </ul>

        <h2>Handling Common Field Situations</h2>
        <h3>1. Locked Houses</h3>
        <p>If a household is temporarily locked, inquire with neighbors regarding when the residents are typically present. Note the house number and make at least two revisit attempts before marking as temporarily away.</p>

        <h3>2. Institutional Households</h3>
        <p>Hostels, boarding houses, hospitals, jails, and ashrams are classified as institutional households and are enumerated using specialized institutional schedules.</p>
      `,
      content_hi: `
        <p>जनगणना प्रगणक एवं पर्यवेक्षक राष्ट्रीय गणना अभियान के मुख्य आधार हैं। यह हैंडबुक फील्ड संचालन प्रोटोकॉल, मोबाइल ऐप सिंकिंग और संचार शिष्टाचार का सारांश प्रस्तुत करती है।</p>

        <h2>प्रगणक के मुख्य उत्तरदायित्व</h2>
        <ul>
          <li>दौरे शुरू करने से पहले गणना ब्लॉक (EB) लेआउट मैप को अपडेट करें।</li>
          <li>अपने ब्लॉक के प्रत्येक भवन और परिवार का दौरा करें।</li>
          <li>विनम्रता से अपना परिचय दें और अपना आधिकारिक पहचान पत्र दिखाएं।</li>
          <li>बिना किसी पूर्वाग्रह के उत्तर सही-सही दर्ज करें।</li>
        </ul>
      `
    }
  ],

  // Master FAQs for Schema.org and Interactive UI
  faqs: [
    {
      id: "faq-1",
      question_en: "What is the Census of India and why is it conducted?",
      question_hi: "भारत की जनगणना क्या है और यह क्यों आयोजित की जाती है?",
      answer_en: "The Census of India is the single largest statistical exercise in the country, conducted under the Census Act, 1948. It provides vital demographic, economic, and socio-cultural data of all residents. The data serves as the foundational benchmark for national planning, resource allocation, constituency delimitation, and welfare scheme targeting.",
      answer_hi: "भारत की जनगणना देश का सबसे बड़ा सांख्यिकीय अभियान है, जो जनगणना अधिनियम, 1948 के तहत आयोजित किया जाता है। यह सभी निवासियों का जनसांख्यिकीय, आर्थिक और सामाजिक-सांस्कृतिक डेटा प्रदान करता है, जो राष्ट्रीय योजनाओं और कल्याणकारी नीतियों का आधार बनता है।"
    },
    {
      id: "faq-2",
      question_en: "Is participation in the Census mandatory for all residents in India?",
      question_hi: "क्या भारत में सभी निवासियों के लिए जनगणना में भाग लेना अनिवार्य है?",
      answer_en: "Yes. Under Section 8(1) of the Census Act, 1948, every citizen and resident residing in India is legally obligated to answer all questions truthfully to the best of their knowledge.",
      answer_hi: "हाँ। जनगणना अधिनियम, 1948 की धारा 8(1) के तहत, भारत में रहने वाले प्रत्येक नागरिक और निवासी के लिए सभी प्रश्नों का सत्यतापूर्वक उत्तर देना कानूनी रूप से अनिवार्य है।"
    },
    {
      id: "faq-3",
      question_en: "How does the Digital Self-Enumeration work?",
      question_hi: "डिजिटल स्व-गणना (Self-Enumeration) कैसे काम करती है?",
      answer_en: "Citizens can visit the official Census portal or mobile app, log in using their mobile number with OTP verification, fill in their household details, and generate a 12-digit Reference ID (RID). When the enumerator visits your residence, simply show them the RID number for instant verification.",
      answer_hi: "नागरिक आधिकारिक जनगणना पोर्टल या मोबाइल ऐप पर मोबाइल ओटीपी से लॉगिन करके अपने परिवार का विवरण भर सकते हैं और 12 अंकों का संदर्भ पहचान नंबर (RID) प्राप्त कर सकते हैं। प्रगणक के आने पर केवल यह नंबर दिखाना होता है।"
    },
    {
      id: "faq-4",
      question_en: "Is my personal census information confidential and safe from misuse?",
      question_hi: "क्या मेरी व्यक्तिगत जनगणना जानकारी गोपनीय और दुरुपयोग से सुरक्षित है?",
      answer_en: "Yes, 100% confidential. Under Section 15 of the Census Act, 1948, individual census records are confidential and cannot be accessed by police, tax authorities, private companies, or courts of law. All digital transmissions are secured using military-grade end-to-end encryption.",
      answer_hi: "हाँ, 100% गोपनीय। जनगणना अधिनियम, 1948 की धारा 15 के तहत व्यक्तिगत रिकॉर्ड गोपनीय होते हैं और इनका उपयोग किसी भी कानूनी या व्यावसायिक उद्देश्य के लिए नहीं किया जा सकता। डेटा पूर्णतः एन्क्रिप्टेड रहता है।"
    },
    {
      id: "faq-5",
      question_en: "Do I need to show physical documents (Aadhaar, Passport, Land deeds) to the enumerator?",
      question_hi: "क्या मुझे प्रगणक को भौतिक दस्तावेज (आधार, पासपोर्ट, भूमि दस्तावेज) दिखाने की आवश्यकता है?",
      answer_en: "No. The Census of India relies primarily on self-declaration. You are not required to submit or show any documentary proof like property papers, birth certificates, or income proofs to the enumerator.",
      answer_hi: "नहीं। भारतीय जनगणना मुख्य रूप से स्व-घोषणा पर आधारित है। आपको प्रगणक को कोई भी भौतिक दस्तावेज (जैसे जमीन के कागज या आय प्रमाण पत्र) दिखाने की आवश्यकता नहीं होती है।"
    },
    {
      id: "faq-6",
      question_en: "What should I do if my house was locked when the enumerator visited?",
      question_hi: "यदि प्रगणक के आने पर मेरा मकान बंद था तो मुझे क्या करना चाहिए?",
      answer_en: "Enumerators are instructed to make at least three visits. If your house was missed, you can call the toll-free helpline 1800-180-2026 or self-enumerate online through the citizen portal to register your schedule.",
      answer_hi: "प्रगणक कम से कम तीन बार दौरा करने के लिए निर्देशित हैं। यदि आपका घर छूट गया है, तो आप टोल-फ्री नंबर 1800-180-2026 पर कॉल कर सकते हैं या ऑनलाइन स्व-गणना कर सकते हैं।"
    }
  ],

  // Official Downloads & Circulars
  downloads: [
    {
      id: "d1",
      title_en: "Phase 1: Official Houselisting & Housing Census Questionnaire (English/Hindi PDF)",
      title_hi: "चरण 1: आधिकारिक मकान सूचीकरण एवं आवास जनगणना प्रश्नावली (अंग्रेजी/हिंदी पीडीएफ)",
      size: "2.4 MB",
      format: "PDF",
      category: "Questionnaires",
      date: "2026-09-01"
    },
    {
      id: "d2",
      title_en: "Census Instruction Manual for Field Enumerators & Supervisors (Version 2.0)",
      title_hi: "फील्ड प्रगणकों एवं पर्यवेक्षकों के लिए जनगणना निर्देश पुस्तिका (संस्करण 2.0)",
      size: "6.8 MB",
      format: "PDF",
      category: "Manuals",
      date: "2026-08-25"
    },
    {
      id: "d3",
      title_en: "Official Gazette Notification on Census Methodology & Timelines",
      title_hi: "जनगणना पद्धति एवं समय-सीमा पर आधिकारिक राजपत्र अधिसूचना",
      size: "1.1 MB",
      format: "PDF",
      category: "Gazette",
      date: "2026-09-10"
    },
    {
      id: "d4",
      title_en: "Citizen Self-Enumeration Mobile Application Quick Reference Guide",
      title_hi: "नागरिक स्व-गणना मोबाइल एप्लिकेशन त्वरित संदर्भ गाइड",
      size: "3.2 MB",
      format: "PDF",
      category: "Citizen Guides",
      date: "2026-09-14"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = JANGANANA_DATA;
}
