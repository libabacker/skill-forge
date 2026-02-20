export const initialSkillTree = [
  {
    id: "1",
    name: "Frontend Development",
    completed: false,
    expanded: true,
    videoLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    resources: [{ name: "MDN Web Docs — HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }],
    children: [
      {
        id: "1-1",
        name: "HTML & CSS",
        completed: false,
        expanded: true,
        videoLink: "https://www.youtube.com/watch?v=HcOc7P5BMi4",
        resources: [{ name: "CSS Tricks Reference", url: "https://css-tricks.com" }],
        children: [
          { id: "1-1-1", name: "Semantic HTML", completed: true, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "1-1-2", name: "Flexbox & Grid", completed: true, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "1-1-3", name: "CSS Animations", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
        ],
      },
      {
        id: "1-2",
        name: "JavaScript",
        completed: false,
        expanded: true,
        videoLink: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
        resources: [{ name: "javascript.info", url: "https://javascript.info" }],
        children: [
          { id: "1-2-1", name: "ES6+ Features", completed: true, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "1-2-2", name: "Promises & Async/Await", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "1-2-3", name: "DOM Manipulation", completed: true, expanded: false, videoLink: "", resources: [], children: [] },
        ],
      },
      {
        id: "1-3",
        name: "React",
        completed: false,
        expanded: true,
        videoLink: "https://www.youtube.com/watch?v=bMknfKXIFA8",
        resources: [{ name: "React Official Docs", url: "https://react.dev" }],
        children: [
          { id: "1-3-1", name: "Hooks", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "1-3-2", name: "State Management", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Backend Development",
    completed: false,
    expanded: true,
    videoLink: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    resources: [{ name: "Node.js Docs", url: "https://nodejs.org/en/docs" }],
    children: [
      {
        id: "2-1",
        name: "Node.js",
        completed: false,
        expanded: true,
        videoLink: "",
        resources: [],
        children: [
          { id: "2-1-1", name: "Express.js", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "2-1-2", name: "REST APIs", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
        ],
      },
      {
        id: "2-2",
        name: "Databases",
        completed: false,
        expanded: false,
        videoLink: "",
        resources: [],
        children: [
          { id: "2-2-1", name: "SQL Basics", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
          { id: "2-2-2", name: "MongoDB", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "DevOps",
    completed: false,
    expanded: false,
    videoLink: "https://www.youtube.com/watch?v=j5Zsa_eOXeY",
    resources: [{ name: "Docker Getting Started", url: "https://docs.docker.com/get-started/" }],
    children: [
      { id: "3-1", name: "Git & GitHub", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
      { id: "3-2", name: "Docker", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
      { id: "3-3", name: "CI/CD Pipelines", completed: false, expanded: false, videoLink: "", resources: [], children: [] },
    ],
  },
  {
    id: "4",
    name: "Data Science",
    completed: false,
    expanded: false,
    videoLink: "",
    resources: [],
    children: [
      {
        id: "4-1",
        name: "Python",
        completed: false,
        expanded: false,
        videoLink: "",
        resources: [],
        children: [
          {
            id: "4-1-1",
            name: "Python Basics",
            completed: false,
            expanded: false,
            videoLink: "",
            resources: [],
            children: [],
          },
          {
            id: "4-1-2",
            name: "Python Advanced",
            completed: false,
            expanded: false,
            videoLink: "",
            resources: [],
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "Certification Courses",
    completed: false,
    expanded: true,
    videoLink: "https://www.youtube.com/watch?v=kYI901W9M_A",
    resources: [{ name: "Professional Certifications Overview", url: "https://www.coursera.org/professional-certificates" }],
    children: [
      {
        id: "5-1",
        name: "AWS Certified Cloud Practitioner",
        completed: false,
        expanded: false,
        videoLink: "https://www.youtube.com/watch?v=3hLmDS179YE",
        resources: [
          { name: "AWS Cloud Practitioner Exam Guide", url: "https://d1.awsstatic.com/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide.pdf" },
          { name: "AWS Free Tier", url: "https://aws.amazon.com/free/" }
        ],
        children: []
      },
      {
        id: "5-2",
        name: "Google Data Analytics",
        completed: false,
        expanded: false,
        videoLink: "https://www.youtube.com/watch?v=vV1pSInAhaU",
        resources: [
          { name: "Google Data Analytics Certificate", url: "https://grow.google/certificates/data-analytics/" }
        ],
        children: []
      },
      {
        id: "5-3",
        name: "Meta Front-End Developer",
        completed: false,
        expanded: false,
        videoLink: "https://www.youtube.com/watch?v=yPzW8Yv7pX4",
        resources: [
          { name: "Meta Front-End Developer Certificate", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer" }
        ],
        children: []
      }
    ]
  }
];
