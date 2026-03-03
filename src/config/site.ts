const logo = "//q.qlogo.cn/headimg_dl?dst_uin=3020766045&spec=640&img_type=jpg";
const site = {
  // --- Site Metadata ---
  meta: {
    title: "Yunyize's Blog",
    description: "Show your love for life and yourself.",
    author: "Yunyize",
    logo: logo,
    ogImage: logo,
    lang: "zh-CN",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    // { name: "Friends", subtitle: "Links", href: "/friends" },
    { name: "Projects", subtitle: "Goods", href: "/projects" },
    { name: "About", subtitle: "Me", href: "/about" },
    { name: "Tools", subtitle: "Coding", href: "/tools" },
  ],

  // --- Social Links ---
  social: [
    // {
    //   name: "GitHub",
    //   href: "https://github.com/your-username",
    //   icon: "mdi:github",
    // },
    { name: "Email", href: "mailto:yunyizea@gmail.com", icon: "mdi:email" },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "Hi~ 欢迎来到我的博客",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description: `<span class="font-medium text-foreground underline decoration-primary/30">Hello World!</span><br/>这里主要是记录一些自己的 Coding 过程和一些思考, 偶尔也会分享一些生活中的小确幸和一些有趣的项目以及感想.<br /><br />好好热爱你的生活，好好爱自己。`,
    cards: [
      {
        icon: "mdi:explore",
        label: "Status",
        value: "正在做一些很酷的事情.",
      },
      { icon: "mdi:location", label: "Location", value: "湖南" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2025-2026 Yunyize",
    builtWith: "Built with Astro",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: true,
  },

  // --- Tools Page Data ---
  tools: [
    {
      name: "编程语言",
      items: ["Golang", "Python", "JavaScript", "TypeScript", "Java"],
    },
    {
      name: "编程框架",
      items: [
        "GoFrame",
        "Gin",
        "GORM",
        "Vue2/3",
        "PostgresSQL",
        "MySQL",
        "Redis",
        "Kafka",
        "MQTT",
      ],
    },
    { name: "设计工具", items: ["莫高设计 | MasterGo", "墨刀 | MoDao"] },
    {
      name: "开发工具",
      items: [
        "Trae",
        "Claude Cli",
        "VS Code",
        "Terminal",
        "Chrome",
        "Git",
        "GoLand",
        "ApiFox",
        "Postman",
      ],
    },
    { name: "操作系统", items: ["Linux Ubuntu", "Windows 10/11", "MacOS"] },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "博客",
    postsDescription: "记录一些自己的 Coding 过程和一些思考",
    projectsTitle: "项目",
    projectsDescription:
      "一些自己构建的小工具，用于解决实际问题或只是为了好玩。",
    friendsTitle: "好友",
    friendsDescription: "与我分享相同爱好的人。",
    toolsTitle: "技术栈",
    aboutTitle: "关于我的",
    aboutDescription: "关于这个博客和它的作者",
    backToPosts: "返回博客",
    goHome: "返回首页",
    notFoundTitle: "页面不存在",
    notFoundDescription: "你访问的页面可能已经被删除或链接已损坏。",
    endOfPost: "文章结束",
    tableOfContents: "目录",
    searchPlaceholder: "搜索博客、标签或命令...",
    searchNavigate: "导航",
    commentSuccess: "评论已提交",
  },

  ogImage: logo,
} as const;

export default site;
