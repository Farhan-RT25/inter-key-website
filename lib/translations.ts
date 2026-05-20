// All UI strings for English and Arabic.
// To update any translation: find the section below and edit the "ar" block.

export type Lang = "en" | "ar"

export const translations = {
  // ─── Header ───────────────────────────────────────────────────────────────
  header: {
    en: {
      home: [
        { label: "Who It Serves", href: "#use-cases" },
        { label: "Solution", href: "#solution" },
        { label: "Get Started", href: "#contact" },
      ],
      features: [
        { label: "Challenges", href: "#challenges" },
        { label: "Features", href: "#features" },
        { label: "Live View", href: "#live-view" },
        { label: "Why Interkey DPI", href: "#why-interkey" },
      ],
      cta: "Request Demo",
    },
    ar: {
      home: [
        { label: "من نخدم", href: "#use-cases" },
        { label: "الحل", href: "#solution" },
        { label: "ابدأ الآن", href: "#contact" },
      ],
      features: [
        { label: "التحديات", href: "#challenges" },
        { label: "الميزات", href: "#features" },
        { label: "العرض المباشر", href: "#live-view" },
        { label: "لماذا إنتركي DPI", href: "#why-interkey" },
      ],
      cta: "طلب عرض توضيحي",
    },
  },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    en: {
      badge: "AI-Powered Network Intelligence",
      h1pre: "Redefining Control for",
      h1highlight: "Ultra-Large Traffic",
      h1post: "Networks",
      sub: "Interkey Intelligent DPI integrates a breakthrough AI Traffic Large Model to achieve 99% recognition accuracy on encrypted and adversarial applications, enabling precise, real-time control at carrier scale.",
      requestDemo: "Request a Demo",
      exploreFeatures: "Explore Features",
      scrollHint: "Scroll to explore",
      stats: [
        { value: "99", suffix: "%", label: "Recognition Accuracy" },
        { value: "99.999", suffix: "%", label: "Availability" },
        { value: "≤2", suffix: "hr", label: "App Blocking SLA" },
        { value: "1", suffix: "s", label: "Real-Time Reporting" },
      ],
    },
    ar: {
      badge: "ذكاء الشبكة المدعوم بالذكاء الاصطناعي",
      h1pre: "إعادة تعريف التحكم في",
      h1highlight: "شبكات حركة المرور الضخمة",
      h1post: "",
      sub: "يدمج Interkey Intelligent DPI نموذجًا ثوريًا للذكاء الاصطناعي لحركة المرور يحقق دقة تعرف بنسبة 99% على التطبيقات المشفرة والمعادية، مما يتيح التحكم الدقيق الفوري على مستوى مشغلي الاتصالات.",
      requestDemo: "طلب عرض توضيحي",
      exploreFeatures: "استكشف الميزات",
      scrollHint: "مرر للاستكشاف",
      stats: [
        { value: "99", suffix: "%", label: "دقة التعرف" },
        { value: "99.999", suffix: "%", label: "التوفر" },
        { value: "≤2", suffix: "ساعة", label: "اتفاقية حجب التطبيقات" },
        { value: "1", suffix: "ث", label: "التقارير الفورية" },
      ],
    },
  },

  // ─── Use Cases ────────────────────────────────────────────────────────────
  useCases: {
    en: {
      label: "Who It Serves",
      heading: "Built for Network Operators and Governance Teams",
      cases: [
        {
          title: "National Telecom Operators",
          desc: "Operators managing fixed and mobile networks at national scale, requiring unified, high-reliability content governance.",
        },
        {
          title: "Internet Service Providers",
          desc: "ISPs needing precise application classification and content filtering to meet national regulatory requirements.",
        },
        {
          title: "Regulatory Bodies",
          desc: "Government and regulatory agencies responsible for enforcing digital safety laws, including online minor protection mandates.",
        },
        {
          title: "Enterprise Network Teams",
          desc: "Large enterprise and campus network operators requiring advanced traffic visibility, application control, and security governance.",
        },
      ],
    },
    ar: {
      label: "من نخدم",
      heading: "مصمم لمشغلي الشبكات وفرق الحوكمة",
      cases: [
        {
          title: "مشغلو الاتصالات الوطنيون",
          desc: "المشغلون الذين يديرون شبكات ثابتة ومتنقلة على المستوى الوطني، ويحتاجون إلى حوكمة محتوى موحدة وعالية الموثوقية.",
        },
        {
          title: "مزودو خدمة الإنترنت",
          desc: "مزودو خدمة الإنترنت الذين يحتاجون إلى تصنيف دقيق للتطبيقات وتصفية المحتوى لتلبية المتطلبات التنظيمية الوطنية.",
        },
        {
          title: "الجهات التنظيمية",
          desc: "الوكالات الحكومية والتنظيمية المسؤولة عن تطبيق قوانين السلامة الرقمية، بما في ذلك تفويضات حماية القاصرين عبر الإنترنت.",
        },
        {
          title: "فرق شبكات المؤسسات",
          desc: "مشغلو شبكات المؤسسات والحرم الجامعية الكبيرة الذين يحتاجون إلى رؤية متقدمة لحركة المرور والتحكم في التطبيقات وحوكمة الأمان.",
        },
      ],
    },
  },

  // ─── Challenges ───────────────────────────────────────────────────────────
  challenges: {
    en: {
      label: "The Problem",
      heading: "Three Critical Challenges Facing Carrier-Grade Networks",
      sub: "As digital transformation accelerates, telecom operators managing Tbps-scale traffic face challenges that traditional DPI technologies simply cannot solve.",
      items: [
        {
          num: "CHALLENGE 01",
          title: "Encrypted & Adversarial Traffic",
          desc: "VPN applications continuously evolve to evade detection, with 300+ variants in Android markets alone. They disguise traffic to mimic legitimate services, rendering traditional blocking methods ineffective.",
        },
        {
          num: "CHALLENGE 02",
          title: "Ultra-Large Network Scale",
          desc: "Carrier-grade networks carry traffic ranging from Tbps to dozens of Tbps. Effective governance demands network architectures with high performance, elastic scalability, and carrier-grade reliability.",
        },
        {
          num: "CHALLENGE 03",
          title: "Real-Time Policy Control",
          desc: "Massive, highly concurrent traffic requires control policies capable of real-time deployment and dynamic adjustment, with live feedback loops to enable closed-loop governance and continuous optimization.",
        },
      ],
    },
    ar: {
      label: "المشكلة",
      heading: "ثلاثة تحديات حرجة تواجه شبكات مستوى مشغلي الاتصالات",
      sub: "مع تسارع التحول الرقمي، يواجه مشغلو الاتصالات الذين يديرون حركة مرور بحجم التيرابت في الثانية تحديات لا تستطيع تقنيات DPI التقليدية حلها.",
      items: [
        {
          num: "التحدي 01",
          title: "حركة المرور المشفرة والمعادية",
          desc: "تتطور تطبيقات VPN باستمرار لتفادي الكشف، مع أكثر من 300 نوع في متاجر Android وحدها. إنها تخفي حركة المرور لتحاكي الخدمات الشرعية، مما يجعل أساليب الحجب التقليدية غير فعّالة.",
        },
        {
          num: "التحدي 02",
          title: "حجم الشبكة الضخم للغاية",
          desc: "تحمل شبكات مستوى مشغلي الاتصالات حركة مرور تتراوح بين التيرابت في الثانية وعشرات التيرابت في الثانية. تتطلب الحوكمة الفعّالة بنى شبكية ذات أداء عالٍ وقابلية توسع مرنة وموثوقية بمستوى مشغلي الاتصالات.",
        },
        {
          num: "التحدي 03",
          title: "التحكم الفوري في السياسات",
          desc: "تتطلب حركة المرور الضخمة عالية التزامن سياسات تحكم قادرة على النشر الفوري والتعديل الديناميكي، مع حلقات تغذية راجعة مباشرة لتفعيل الحوكمة المغلقة والتحسين المستمر.",
        },
      ],
    },
  },

  // ─── Solution ─────────────────────────────────────────────────────────────
  solution: {
    en: {
      label: "The Solution",
      heading: "Introducing Interkey Intelligent DPI Solution",
      p1: "Deep Packet Inspection (DPI) is an advanced network detection technology that analyzes packet payloads and application-layer data in real time, accurately identifying network protocols and application traffic across any traffic mix.",
      p2: "Interkey Intelligent DPI takes this further by embedding an AI Traffic Large Model at its core. The result is 99% recognition accuracy on encrypted and adversarial applications, backed by multi-modal feature extraction and continuous automated model training.",
      p3: "Widely deployed for traffic control and network security threat detection, Interkey Intelligent DPI helps operators and enterprises ensure stable, safe, and efficient network operation, at carrier scale, in real time.",
      aiModelTitle: "AI Traffic Large Model",
      aiModelSub: "Multi-modal feature extraction + automated model training",
      recognitionLabel: "Recognition Accuracy",
      availabilityLabel: "Availability",
      appsLabel: "Apps/Protocols Identified",
      urlLibLine1: "100 million-level",
      urlLibLine2: "URL library",
      urlLibLabel: "Supporting 3rd party interconnection",
    },
    ar: {
      label: "الحل",
      heading: "تقديم حل Interkey Intelligent DPI",
      p1: "فحص الحزم العميق (DPI) هو تقنية كشف شبكي متقدمة تحلل حمولات الحزم وبيانات طبقة التطبيقات في الوقت الفعلي، وتحدد بدقة بروتوكولات الشبكة وحركة مرور التطبيقات عبر أي مزيج من حركة المرور.",
      p2: "يأخذ Interkey Intelligent DPI هذا أبعد من ذلك من خلال تضمين نموذج ذكاء اصطناعي لحركة المرور في صميمه. والنتيجة دقة تعرف بنسبة 99% على التطبيقات المشفرة والمعادية، مدعومة باستخراج الميزات متعدد الأوضاع والتدريب الآلي المستمر للنماذج.",
      p3: "المنشور على نطاق واسع للتحكم في حركة المرور والكشف عن تهديدات أمان الشبكة، يساعد Interkey Intelligent DPI المشغلين والمؤسسات على ضمان تشغيل شبكة مستقر وآمن وفعّال، على مستوى مشغلي الاتصالات، في الوقت الفعلي.",
      aiModelTitle: "نموذج الذكاء الاصطناعي لحركة المرور",
      aiModelSub: "استخراج الميزات متعدد الأوضاع + التدريب الآلي للنماذج",
      recognitionLabel: "دقة التعرف",
      availabilityLabel: "التوفر",
      appsLabel: "التطبيقات/البروتوكولات المحددة",
      urlLibLine1: "على مستوى 100 مليون",
      urlLibLine2: "مكتبة روابط URL",
      urlLibLabel: "دعم الربط البيني مع الطرف الثالث",
    },
  },

  // ─── Features ─────────────────────────────────────────────────────────────
  features: {
    en: {
      label: "Core Capabilities",
      heading: "Four Pillars of Intelligent Network Control",
      items: [
        {
          title: "AI Traffic Large Model",
          desc: "The AI Traffic Large Model is built into the core of the DPI engine, not an add-on. An automated online probing system continuously extracts multi-modal features from live traffic, feeds them into professional model training cycles, and achieves a 99% recognition rate for VPN and other adversarial encrypted applications.",
          tags: ["Multi-modal Feature Extraction", "Automated Model Training", "99% Accuracy"],
        },
        {
          title: "VPN User Profiling System",
          desc: "To counter frequently disguised VPN applications, the solution innovatively constructs a user profiling system based on usage frequency and behavioral patterns. This dramatically reduces misjudgment and false-blocking rates, allowing governance teams to act with confidence and precision.",
          tags: ["Behavioral Analysis", "Usage Frequency Profiling", "Reduced False Positives"],
        },
        {
          title: "Carrier-Grade High Reliability",
          desc: "Built on cloud network architecture with full-mesh interconnection between the control plane and user plane. A multi-level disaster recovery mechanism spans from VM-level to resource pool-level, delivering 99.999% (five nines) uptime, meeting the most stringent core network stability requirements.",
          tags: ["Full-Mesh Architecture", "99.999% Uptime SLA", "Multi-Level Disaster Recovery"],
        },
        {
          title: "Agile Service Expansion",
          desc: "The cloud-native intelligent O&M platform enables fast launch of new services through flexible service chain chaining. Combined with flexible deployment of user-plane nodes, it supports agile rollout and smooth iteration of new services in live networks, adapting to any network upgrade or business change.",
          tags: ["Cloud-Native Architecture", "Service Chain Chaining", "Elastic Scalability"],
        },
      ],
    },
    ar: {
      label: "القدرات الأساسية",
      heading: "الركائز الأربع للتحكم الذكي في الشبكات",
      items: [
        {
          title: "نموذج الذكاء الاصطناعي لحركة المرور",
          desc: "نموذج الذكاء الاصطناعي لحركة المرور مدمج في صميم محرك DPI، وليس إضافة خارجية. يستخرج نظام استطلاع آلي عبر الإنترنت ميزات متعددة الأوضاع من حركة المرور المباشرة باستمرار، ويغذيها في دورات تدريب نماذج احترافية، ويحقق معدل تعرف بنسبة 99% لتطبيقات VPN والتطبيقات المشفرة المعادية الأخرى.",
          tags: ["استخراج الميزات متعدد الأوضاع", "التدريب الآلي للنماذج", "دقة 99%"],
        },
        {
          title: "نظام تحديد ملف تعريف مستخدمي VPN",
          desc: "لمواجهة تطبيقات VPN المتنكرة باستمرار، يبني الحل بشكل مبتكر نظام تحديد ملف تعريف المستخدم استنادًا إلى تكرار الاستخدام والأنماط السلوكية. يقلل هذا بشكل كبير من معدلات سوء التقدير والحجب الخاطئ، مما يتيح لفرق الحوكمة التصرف بثقة ودقة.",
          tags: ["التحليل السلوكي", "تحديد ملف تعريف تكرار الاستخدام", "تقليل الإيجابيات الكاذبة"],
        },
        {
          title: "موثوقية عالية بمستوى مشغلي الاتصالات",
          desc: "مبني على بنية شبكة سحابية مع ربط بيني كامل الشبكة بين مستوى التحكم ومستوى المستخدم. تمتد آلية التعافي من الكوارث متعددة المستويات من مستوى الآلات الافتراضية إلى مستوى مجمع الموارد، مقدمةً وقت تشغيل بنسبة 99.999% (خمسة تسعات).",
          tags: ["بنية الشبكة الكاملة", "اتفاقية مستوى خدمة 99.999%", "التعافي من الكوارث متعدد المستويات"],
        },
        {
          title: "توسع الخدمات السريع",
          desc: "تتيح منصة التشغيل والصيانة السحابية الذكية الإطلاق السريع للخدمات الجديدة من خلال تسلسل سلسلة الخدمات المرن. بالاقتران مع النشر المرن لعقد مستوى المستخدم، تدعم الطرح الرشيق والتكرار السلس للخدمات الجديدة في الشبكات المباشرة.",
          tags: ["بنية سحابية أصلية", "تسلسل سلسلة الخدمات", "قابلية التوسع المرن"],
        },
      ],
    },
  },

  // ─── Live View ────────────────────────────────────────────────────────────
  liveView: {
    en: {
      label: "Live View Reporting",
      heading: "Second-Level Real-Time Traffic Visibility",
      sub: "The Live View real-time reporting system provides a complete, live picture of your network, from global traffic flows to individual user data streams.",
      items: [
        {
          title: "Global Traffic Visualization",
          desc: "Full-network view of user traffic with drill-down capability to individual data flows and application-level analysis.",
        },
        {
          title: "Traffic Trend Insights",
          desc: "Network-level and application-level traffic trend analysis with refined IP-level breakdowns for precise situational awareness.",
        },
        {
          title: "Policy Execution Feedback",
          desc: "Real-time feedback on control policy execution, enabling continuous optimization and precise closed-loop governance.",
        },
        {
          title: "Second-Level Latency",
          desc: "Monitoring latency measured in seconds, not minutes, ensuring no governance gap in the face of fast-moving threats.",
        },
      ],
      dashTitle: "Network Monitor Simulation",
      dashLab: "Interkey Lab",
      dashBlocked: "Blocked / sec",
      dashTraffic: "Traffic Vol.",
      dashAccuracy: "Accuracy",
    },
    ar: {
      label: "تقارير العرض المباشر",
      heading: "رؤية حركة المرور الفورية بمستوى الثانية",
      sub: "يوفر نظام التقارير الفورية Live View صورة كاملة ومباشرة لشبكتك، من تدفقات حركة المرور العالمية إلى تدفقات بيانات المستخدم الفردية.",
      items: [
        {
          title: "تصور حركة المرور العالمية",
          desc: "عرض كامل للشبكة لحركة مرور المستخدم مع إمكانية التعمق في تدفقات البيانات الفردية والتحليل على مستوى التطبيق.",
        },
        {
          title: "رؤى اتجاهات حركة المرور",
          desc: "تحليل اتجاهات حركة المرور على مستوى الشبكة والتطبيقات مع تفصيلات دقيقة على مستوى IP للوعي الظرفي الدقيق.",
        },
        {
          title: "تغذية راجعة لتنفيذ السياسات",
          desc: "تغذية راجعة فورية على تنفيذ سياسات التحكم، مما يتيح التحسين المستمر والحوكمة المغلقة الدقيقة.",
        },
        {
          title: "زمن استجابة بمستوى الثانية",
          desc: "زمن استجابة المراقبة يُقاس بالثواني لا بالدقائق، مما يضمن عدم وجود فجوات في الحوكمة في مواجهة التهديدات سريعة الحركة.",
        },
      ],
      dashTitle: "محاكاة مراقب الشبكة",
      dashLab: "مختبر إنتركي",
      dashBlocked: "محجوب / ث",
      dashTraffic: "حجم الحركة",
      dashAccuracy: "الدقة",
    },
  },

  // ─── How It Works ─────────────────────────────────────────────────────────
  howItWorks: {
    en: {
      label: "Process Flow",
      heading: "How Interkey DPI Works",
      sub: "From packet ingestion to closed-loop governance: a seamless, AI-driven pipeline.",
      steps: [
        {
          title: "Traffic Ingestion",
          desc: "Full carrier-grade traffic intake at Tbps scale across fixed and mobile networks",
        },
        {
          title: "AI Classification",
          desc: "Multi-modal feature extraction and AI large model inference for 99% accurate app identification",
        },
        {
          title: "Policy Execution",
          desc: "Dynamic, real-time policy deployment with flexible service chain control and precise blocking",
        },
        {
          title: "Closed-Loop Feedback",
          desc: "Live View monitoring feeds real-time data back for continuous model and policy optimization",
        },
      ],
    },
    ar: {
      label: "تدفق العملية",
      heading: "كيف يعمل Interkey DPI",
      sub: "من استيعاب الحزم إلى الحوكمة المغلقة: خط أنابيب سلس مدفوع بالذكاء الاصطناعي.",
      steps: [
        {
          title: "استيعاب حركة المرور",
          desc: "استيعاب كامل لحركة المرور بمستوى مشغلي الاتصالات على حجم التيرابت في الثانية عبر الشبكات الثابتة والمتنقلة",
        },
        {
          title: "التصنيف بالذكاء الاصطناعي",
          desc: "استخراج الميزات متعدد الأوضاع واستدلال النموذج الكبير للذكاء الاصطناعي لتحديد التطبيقات بدقة 99%",
        },
        {
          title: "تنفيذ السياسات",
          desc: "نشر السياسات الديناميكي الفوري مع التحكم المرن في سلسلة الخدمات والحجب الدقيق",
        },
        {
          title: "التغذية الراجعة المغلقة",
          desc: "تغذية مراقبة Live View بالبيانات الفورية مرة أخرى للتحسين المستمر للنموذج والسياسات",
        },
      ],
    },
  },

  // ─── Why Interkey ─────────────────────────────────────────────────────────
  whyInterkey: {
    en: {
      label: "Why Interkey DPI",
      heading: "Built Different. Proven at Scale.",
      sub: "Interkey Intelligent DPI isn't a feature-matched competitor; it's a fundamentally different approach to network governance.",
      cards: [
        {
          title: "AI-Native, Not AI-Bolted-On",
          desc: "The AI Traffic Large Model is the core engine, not an afterthought. Every classification decision flows through a continuously learning, multi-modal model trained on live traffic.",
        },
        {
          title: "Designed for Carrier Scale",
          desc: "Purpose-built for the realities of ultra-large telecom networks: Tbps throughput, full-mesh architecture, and five-nines reliability from day one.",
        },
        {
          title: "Closed-Loop Governance Model",
          desc: "Interkey's pipeline doesn't stop at blocking; it feeds real-time data back into model training and policy refinement, creating a continuously improving governance loop.",
        },
        {
          title: "Proven Accuracy at the Edge",
          desc: "99% recognition accuracy on the hardest category of adversarial traffic: VPN variants that disguise themselves as legitimate services. Not theoretical. Measured on live networks.",
        },
      ],
    },
    ar: {
      label: "لماذا إنتركي DPI",
      heading: "مبني باختلاف. مثبت على النطاق الواسع.",
      sub: "Interkey Intelligent DPI ليس منافسًا متطابق الميزات؛ إنه نهج مختلف جوهريًا في حوكمة الشبكات.",
      cards: [
        {
          title: "ذكاء اصطناعي أصلي، لا مضاف لاحقًا",
          desc: "نموذج الذكاء الاصطناعي لحركة المرور هو المحرك الأساسي، وليس فكرة لاحقة. كل قرار تصنيف يتدفق عبر نموذج متعدد الأوضاع يتعلم باستمرار ومدرب على حركة المرور المباشرة.",
        },
        {
          title: "مصمم لمستوى مشغلي الاتصالات",
          desc: "مبني خصيصًا لواقعيات شبكات الاتصالات الضخمة: إنتاجية بالتيرابت في الثانية، وبنية شبكة كاملة، وموثوقية خمسة تسعات من اليوم الأول.",
        },
        {
          title: "نموذج الحوكمة المغلقة",
          desc: "لا يتوقف خط أنابيب Interkey عند الحجب؛ بل يغذي البيانات الفورية مرة أخرى في تدريب النماذج وتحسين السياسات، مما يخلق حلقة حوكمة تتحسن باستمرار.",
        },
        {
          title: "دقة مثبتة عند الحافة",
          desc: "دقة تعرف 99% على أصعب فئات حركة المرور المعادية: أنواع VPN التي تتنكر كخدمات شرعية. ليست نظرية. مقاسة على شبكات مباشرة.",
        },
      ],
    },
  },

  // ─── Contact / CTA ────────────────────────────────────────────────────────
  contact: {
    en: {
      label: "Get Started",
      heading: "Ready to Take Control of Your Network?",
      sub: "Talk to our team about how Interkey Intelligent DPI can transform your network governance capability.",
      emailBtn: "Email Our Team",
      phone: "+966-11-2180999",
      firstName: "First Name",
      firstPlaceholder: "Ahmad",
      lastName: "Last Name",
      lastPlaceholder: "Al-Rashidi",
      email: "Business Email",
      emailPlaceholder: "you@company.com",
      org: "Organization",
      orgPlaceholder: "Telecom company, ISP, regulator…",
      role: "What best describes you?",
      rolePlaceholder: "Select your role…",
      roles: [
        "National Telecom Operator",
        "Internet Service Provider",
        "Government / Regulatory Body",
        "Enterprise Network Team",
        "Other",
      ],
      message: "Message",
      messagePlaceholder: "Tell us about your network scale, key challenges, or what you'd like to see in a demo…",
      submit: "Request a Demo",
      successTitle: "Request Received",
      successMsg: "Thank you! Our team will reach out within 1 business day.",
    },
    ar: {
      label: "ابدأ الآن",
      heading: "هل أنت مستعد للسيطرة على شبكتك؟",
      sub: "تحدث مع فريقنا حول كيفية تحويل Interkey Intelligent DPI لقدرات حوكمة شبكتك.",
      emailBtn: "راسل فريقنا",
      phone: "+966-11-2180999",
      firstName: "الاسم الأول",
      firstPlaceholder: "أحمد",
      lastName: "اسم العائلة",
      lastPlaceholder: "الراشدي",
      email: "البريد الإلكتروني للعمل",
      emailPlaceholder: "you@company.com",
      org: "المؤسسة",
      orgPlaceholder: "شركة اتصالات، مزود خدمة إنترنت، جهة تنظيمية…",
      role: "ما الذي يصفك بشكل أفضل؟",
      rolePlaceholder: "اختر دورك…",
      roles: [
        "مشغل اتصالات وطني",
        "مزود خدمة الإنترنت",
        "جهة حكومية / تنظيمية",
        "فريق شبكات المؤسسات",
        "أخرى",
      ],
      message: "الرسالة",
      messagePlaceholder: "أخبرنا عن حجم شبكتك، والتحديات الرئيسية، أو ما تريد رؤيته في العرض التوضيحي…",
      submit: "طلب عرض توضيحي",
      successTitle: "تم استلام طلبك",
      successMsg: "شكراً لك! سيتواصل معك فريقنا خلال يوم عمل واحد.",
    },
  },

  // ─── Footer ───────────────────────────────────────────────────────────────
  footer: {
    en: {
      brand: "AI-powered Deep Packet Inspection for ultra-large carrier-grade networks. A product of Interkey, Saudi Arabia's trusted ICT partner.",
      homeLabel: "Home",
      productLabel: "Product",
      companyLabel: "Company",
      homeLinks: [
        { label: "Overview", href: "/#hero" },
        { label: "Who It Serves", href: "/#use-cases" },
        { label: "Solution", href: "/#solution" },
        { label: "Get in Touch", href: "/#contact" },
      ],
      productLinks: [
        { label: "Core Features", href: "/features#features" },
        { label: "Live View", href: "/features#live-view" },
        { label: "How It Works", href: "/features#how-it-works" },
        { label: "Why Interkey DPI", href: "/features#why-interkey" },
      ],
      companyLinks: [
        { label: "Get in Touch", href: "#contact", external: false },
        { label: "interkey.com.sa", href: "https://www.interkey.com.sa", external: true },
      ],
      copyright: "© 2026 Interkey. All rights reserved.",
      address: "6897, King Fahd Road, Al Olaya District, 3388, Riyadh, Saudi Arabia",
    },
    ar: {
      brand: "فحص الحزم العميق المدعوم بالذكاء الاصطناعي لشبكات مستوى مشغلي الاتصالات الضخمة. منتج من إنتركي، الشريك الموثوق لتقنية المعلومات والاتصالات في المملكة العربية السعودية.",
      homeLabel: "الرئيسية",
      productLabel: "المنتج",
      companyLabel: "الشركة",
      homeLinks: [
        { label: "نظرة عامة", href: "/#hero" },
        { label: "من نخدم", href: "/#use-cases" },
        { label: "الحل", href: "/#solution" },
        { label: "تواصل معنا", href: "/#contact" },
      ],
      productLinks: [
        { label: "الميزات الأساسية", href: "/features#features" },
        { label: "العرض المباشر", href: "/features#live-view" },
        { label: "كيف يعمل", href: "/features#how-it-works" },
        { label: "لماذا إنتركي DPI", href: "/features#why-interkey" },
      ],
      companyLinks: [
        { label: "تواصل معنا", href: "#contact", external: false },
        { label: "interkey.com.sa", href: "https://www.interkey.com.sa", external: true },
      ],
      copyright: "© 2026 إنتركي. جميع الحقوق محفوظة.",
      address: "6897، طريق الملك فهد، حي العليا، 3388، الرياض، المملكة العربية السعودية",
    },
  },
}
