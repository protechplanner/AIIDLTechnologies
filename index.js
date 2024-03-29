import logoLight from "@/images/logo3.png";
import logoDark from "@/images/logo3.png";7



export const LogoImage = {
  light: logoLight,
  dark: logoDark
};

export const NavLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Services",
    url: "/service",
    subItems: [
      {
        name: "IT Services",
        url: "/service"
      },
      {
        name: "Training & Placement",
        url: "/service-details"
      }
    ]
  },
  // {
  //   name: "Portfolio",
  //   url: "/portfolio",
  //   subItems: [
  //     {
  //       name: "Portfolio 01",
  //       url: "/portfolio"
  //     },
  //     {
  //       name: "Portfolio Details",
  //       url: "/portfolio-details"
  //     }
  //   ]
  // },

  // {
  //   name: "Courses",
  //   url: "/courses",
  // },

  {
    name: "Blog",
    url: "/blog",
    // subItems: [
    //   // {
    //   //   name: "Blog 01",
    //   //   url: "/blog"
    //   // },
    //   // {
    //   //   name: "Blog 02",
    //   //   url: "/blog-2"
    //   // },
    //   {
    //     name: "Blog 01",
    //     url: "/blog-3"
    //   },
    //   {
    //     name: "Blog Details",
    //     url: "/blog-single"
    //   }
    // ]
  },
  {
    name: "Contact",
    url: "/contact"
  }
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "WELCOME TO AIIDL TECHNOLOGIES ",
    title: "SMART WEB \n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderOne02,
    subTitle: "WELCOME TO AIIDL TECHNOLOGIES",
    title: "SMART WEB \n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

import sliderTwo01 from "@/images/slider/carosel1.jpg";
import sliderTwo02 from "@/images/slider/carosel2.jpg";
import sliderTwo03 from "@/images/slider/carosel3.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "EMPOWERING IT SOLUTIONS AND DIGITAL MARKETING STRATEGIES",
    title: "SEAMLESS INTEGRATION OF \n CUTTING-EDGE IT AND\n MARKETING EXPERTISE.",
    button: {
      label: "ELEVATE YOUR BUSINSS WITH US",
      url: "/about"
    }
  },
  {
    image: sliderTwo02,
    subTitle: "BECOME A GLOBALLY RECOGNIZED DIGITAL MARKETING EXPERT",
    title: "UNLOCK YOUR POTENTIAL \nAND LEAD IN THE \nDIGITAL LANDSCAPE.",
    button: {
      label: "JOIN US FOR UNPARALLELED TRAINING",
      url: "/about"
    }
  },
  {
    image: sliderTwo03,
    subTitle: "WELCOME TO AIIDL TECHNOLOGIES",
    title: "DIGITAL\nMARKETING & IT \n TRAINING INSTITUTE",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

import sliderThree01 from "@/images/slider/3_1.jpg";
import sliderThree02 from "@/images/slider/3_2.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO AIIDL TECHNOLOGIES",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO AIIDL TECHNOLOGIES",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

export const ContactInfosBlock = {
  subTitle: "our offices",
  title: "offices near you",
  description:
    "If you're in the vicinity, we'd love to welcome you to our premises. Feel free to drop by, say hello, and let's discuss how AIIDL Technology can be a catalyst for your digital journey."
};

export const ContactInfosList = [
  {
    title: "India",
    infos: [
      {
        name: "Mukhiya Complex, 4th Floor Noida Sector 35, Uttarpradesh 201301"
      },
      {
        name: "info@protechplanner.us....................."
      },
      {
        name: "+91-8377963214 56"
      }
    ]
  },
  {
    title: "USA",
    infos: [
      {
        name: "2123 Bluewillow dr Houston Texas 77042 USA"
      },
      {
        name: "info@protechplanner.us"
      },
      {
        name: "+1(843)888-4894"
      }
    ]
  },


];

export const ContactFormTitle = {
  subTitle: "Contact with us",
  title: "write us a message",
  description:
    "We are committed to providing our customers with exceptional service while \n      offering our employees the best training. "
};

import blogImage1 from "@/images/home_1/dm-01.png";
import blogImage2 from "@/images/home_1/dm-02.png";
import blogImage3 from "@/images/home_1/dm-03.png";
import blogImage4 from "@/images/home_1/dm-04.png";
import blogImage5 from "@/images/home_1/dm-05.png";
import blogImage6 from "@/images/home_1/dm-06.png";

export const BlogData = [
  {
    title: "Mastering the Digital Landscape: Aiidl Institute's Comprehensive Training Programs",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1
  },
  {
    title: "Digital Transformation Unleashed: Aiidl Technologies' Service Offerings",
    date: "20 nov",
    url: "/blog-single-1",
    image: blogImage2
  },
  {
    title: "The Future of Work: Virtual Employee Staffing by 9amc",
    date: "20 nov",
    url: "/blog-single-2",
    image: blogImage3
  },
  {
    title: "Navigating Global Markets: Protech Planner's Triumphs in International Digital Services",
    date: "20 nov",
    url: "/blog-single-3",
    image: blogImage4
  },
  {
    title: "Unlocking Career Potential: Aiidl Institute's Lifelong Impact",
    date: "20 nov",
    url: "/blog-single-4",
    image: blogImage5
  },
  {
    title: "Digital Resilience: Aiidl Technologies' Adaptive Solutions",
    date: "20 nov",
    url: "/blog-single-5",
    image: blogImage6
  }
];

import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

export const BlogHomeSection = {
  subTitle: "our news & articles",
  title: "latest blog posts",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

import blogS1 from "@/images/home_1/dm-01.png";
import blogS2 from "@/images/home_1/dm-02.png";
import blogS3 from "@/images/home_1/dm-03.png";
import blogS4 from "@/images/home_1/dm-04.png";
import blogS5 from "@/images/home_1/dm-05.png";
import blogS6 from "@/images/home_1/dm-06.png";

export const BlogSidebarPost = [
  {
    title: "Mastering the Digital Landscape",
    image: blogS1,
    url: "/blog-single"
  },
  {
    title: "Digital Transformation Unleashed",
    image: blogS2,
    url: "/blog-single-1"
  },
  {
    title: "The Future of Work: Virtual Employee Staffing by 9amc",
    image: blogS3,
    url: "/blog-single-2"
  },
  {
    title: "Navigating Global Markets: Protech Planner's Triumphs in International Digital Services",
    image: blogS4,
    url: "/blog-single-3"
  },
  {
    title: "Unlocking Career Potential: Aiidl Institute's Lifelong Impact",
    image: blogS5,
    url: "/blog-single-4"
  },
  {
    title: "Digital Resilience: Aiidl Technologies' Adaptive Solutions",
    image: blogS6,
    url: "/blog-single-5"
  }
];

import commentImage1 from "@/images/home_1/blogc-1.png";
import commentImage2 from "@/images/home_1/blogc-2.png";

export const BlogComments = [
  {
    image: commentImage1,
    name: "Bhavana Taneja",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Impressive digital marketing services! Your blog highlights the essentials with clarity. Excited to explore how your expertise can enhance online presence. Kudos!"
  },
  {
    image: commentImage2,
    name: "Ravi Tomar c",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Your digital marketing insights are on point! Practical tips and trends discussed concisely. Eagerly anticipating your next post. Thanks for sharing your expertise!"
  }
];

import portfolio01 from "@/images/portfolio/1.png";
import portfolio02 from "@/images/portfolio/2.png";
import portfolio03 from "@/images/portfolio/3.png";
import portfolio04 from "@/images/portfolio/4.png";
import portfolio05 from "@/images/portfolio/5.png";
import portfolio06 from "@/images/portfolio/6.png";

export const PortfolioData = [
  {
    title: "Website design and maintenance",
    categories: ["all", "graphic"],
    image: portfolio01,
    url: "/service"
  },
  {
    title: "IOS and Android app design",
    categories: ["all", "graphic"],
    image: portfolio02,
    url: "/service"
  },
  {
    title: "Social media management",
    categories: ["all", "graphic"],
    image: portfolio03,
    url: "/service"
  },
  {
    title: "Email marketing, WhatsApp marketing, and SMS",
    categories: ["all", "graphic"],
    image: portfolio04,
    url: "/service"
  },
  {
    title: "Marketing",
    categories: ["all", "graphic"],
    image: portfolio05,
    url: "/service"
  },
  {
    title: "Content creation",
    categories: ["all", "graphic"],
    image: portfolio06,
    url: "/service"
  }
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" }
];

import portfolioD01 from "@/images/portfolio/7.jpg";
import portfolioD02 from "@/images/portfolio/8.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Showcasing Our Digital Success Stories",
  text:
    " Welcome to the AIIDL Technology Portfolio – Where Innovation is Showcased and Success is Defined, Welcome to the AIIDL Technology Portfolio, where innovation, technology, and creativity converge to create digital success stories, Explore our carefully curated selection of projects that highlight our prowess in IT solutions and digital marketing, Each project exemplifies our commitment to excellence, innovation, and client satisfaction, Explore our portfolio, and witness the impact AIIDL Technology can have on your digital aspirations. Join us on the path to redefining success in the digital age. ",
  client: "Jessica Brown",
  categories: [
    {
      name: "Graphic,",
      url: "#"
    },
    {
      name: "Illustrations,",
      url: "#"
    }
  ],
  date: "8 Nov, 2018",
  socials: [
    {
      name: "Facebook",
      url: "#"
    },
    {
      name: "Twitter",
      url: "#"
    },
    {
      name: "Linkedin",
      url: "#"
    }
  ]
};

export const ServicePostData = [
  {
    title: "Modren Design",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-settings",
    url: "/service-details"
  },
  {
    title: "Digital products",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-transfer",
    url: "/seo"
  },
  {
    title: "Marketing Strategy",
    text:
      "Phaseus sit amet tristique lorem ipsum is simply free text ligua donec culis leo sus cipit.",
    iconName: "mei-pie-chart",
    url: "/digital"
  }
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to AIIDL TECHNOLOGIES",
  title: "We design digital products that \n help grow businesses.",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServiceHomeThreeData = {
  subTitle: "Services we are offering",
  title: "Our Services",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "We design digital products that \n help grow businesses.",
    subTitle: "Services we are offering",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  posts: [
    {
      title: "Website Development",
      iconName: "mei-web-design",
      url: "/service-details"
    },
    {
      title: "Graphic Designing",
      iconName: "mei-computer-graphic",
      url: "/graphic"
    },
    {
      title: "Digital Marketing",
      iconName: "mei-development-1",
      url: "/digital"
    },
    {
      title: "SEo & Content Writing",
      iconName: "mei-development",
      url: "/seo"
    },
    {
      title: "App Development",
      iconName: "mei-app-development",
      url: "/appdev"
    }
  ]
};

import serviceOne01 from "@/images/home_1/wd.png";
import serviceOne02 from "@/images/home_1/dm.png";
import serviceOne03 from "@/images/home_1/pro.png";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Let’s create something",
    subTitle: "what we do",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  posts: [
    {
      title: "web development",
      image: serviceOne01,
      url: "/service-details"
    },
    {
      title: "digital marketing",
      image: serviceOne02,
      url: "/digital"
    },
    {
      title: "product branding",
      image: serviceOne03,
      url: "/seo"
    }
  ]
};

export const FunfactData = [
  {
    title: "Projects Completed",
    countNumber: 705
  },
  {
    title: "Active Clients",
    countNumber: 480
  },
  {
    title: "Cups of Coffee",
    countNumber: 626
  },
  {
    title: "Happy Clients",
    countNumber: 774
  }
];

import trustClient01 from "@/images/home_1/clientnew.png";

export const TrustClientData = {
  image: trustClient01,
  title: "We are trusted by many clients",
  text:
    "AIIDL Technologies excels in delivering top-notch client services that are second to none. Our dedicated team is committed to understanding and addressing your unique needs, ensuring unparalleled satisfaction. With a customer-centric approach, we offer seamless communication, timely assistance, and tailored solutions. Your success is our priority, and we go the extra mile to exceed expectations. From project inception to completion, we provide expert guidance, transparent collaboration, and reliable support. Trust AIIDL Technologies for a partnership built on trust, reliability, and exceptional service. Your goals are our goals, and together, we pave the way for your continued growth and achievement.",
  url: "/about"
};

import ClientCarousel01 from "@/images/home_1/wri.png";
import ClientCarousel02 from "@/images/home_1/azone.png";
import ClientCarousel03 from "@/images/home_1/prof.png";
import ClientCarousel04 from "@/images/home_1/aal.png";
import ClientCarousel05 from "@/images/home_1/credit.png";
import ClientCarousel06 from "@/images/home_1/nitya.png";
import ClientCarousel07 from "@/images/home_1/rest.png";
import ClientCarousel08 from "@/images/home_1/jfta.png";
import ClientCarousel09 from "@/images/home_1/fta.png";
import ClientCarousel10 from "@/images/home_1/fresh.png";
import ClientCarousel11 from "@/images/home_1/kfp.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "they trust us",
    subTitle: "our clients",
    text:
      "We are committed to providing our customers with exceptional service \n while offering our employees the best training."
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01
    },
    {
      url: "#",
      image: ClientCarousel02
    },
    {
      url: "#",
      image: ClientCarousel03
    },
    {
      url: "#",
      image: ClientCarousel04
    },
    {
      url: "#",
      image: ClientCarousel05
    },
    {
      url: "#",
      image: ClientCarousel06
    },
    {
      url: "#",
      image: ClientCarousel07
    },
    {
      url: "#",
      image: ClientCarousel08
    },
    {
      url: "#",
      image: ClientCarousel09
    },
    {
      url: "#",
      image: ClientCarousel10
    },
    {
      url: "#",
      image: ClientCarousel11
    }
  ]
};

import aboutOne01 from "@/images/about/1.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "build better website alot quicker with aiidl agency",
    subTitle: "get to know us"
  },
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Company Started",
    number: 1990
  }
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "expert people",
    subTitle: "Join the AIIDL Community",
    text:
      "AIIDL Technology isn't just a company – it's a community united by a passion for technology, a thirst for innovation, and a commitment to driving digital progress. We invite you to be a part of this journey, to explore the frontiers of possibility, and to shape a future where AIIDL Technology is synonymous with digital transformation."
  },
  posts: [
    {
      image: team01,
      name: "Herman Fisher",
      designation: "General Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team02,
      name: "Charlie Kennedy",
      designation: "Brand Designer",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team03,
      name: "Helena Adkins",
      designation: "Seinor Designer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team04,
      name: "Virginia Farmer",
      designation: "Marketing Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team05,
      name: "Philip Hansen",
      designation: "Co Founder",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    }
  ]
};

import image from "@/images/home_1/aboutnew-2.png";

export const VideoOneData = {
  sectionContent: {
    title: " Co-Creating Digital Success with AIIDL Technology",
    subTitle: "Connect With Us",
    text:
      "Ready to embark on a journey fueled by innovation and technology? Reach out to AIIDL Technology and let's co-create a digital narrative that defines success in the digital age.Welcome to AIIDL Technology – Where Innovation Meets Vision and Technology Shapes Tomorrow."
  },
  video: {
    image: image,
  }
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Subscribe us",
    subTitle: "don’t miss out our latest updates"
  }
};

import testimonial01 from "@/images/home_1/test-3.png";
import testimonial02 from "@/images/home_1/test-1.png";
import testimonial03 from "@/images/home_1/test-4.png";
import testimonial04 from "@/images/home_1/test-2.png";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "our testimonials",
    title: "happy customers"
  },
  posts: [
    {
      name: "Abhilasha",
      designation: "D.W.P Client",
      image: testimonial01,
      content:
        "Digital Web Planet's services have elevated our online presence significantly. Their strategic digital marketing and IT solutions have led to remarkable growth in our business.",
    },
    {
      name: "Rahul 2",
      designation: "Aiidl Student",
      image: testimonial02,
      content:
        "Thanks to Aiidl Institute, I gained invaluable insights into digital marketing and IT. The practical approach and supportive mentors have been instrumental in boosting my career.",
    },
    {
      name: "Samiksha 2",
      designation: "Aiidl Student",
      image: testimonial03,
      content:
        "Aiidl Institute transformed my understanding of digital marketing and IT. The hands-on training empowered me to excel in the industry. Grateful for their expert guidance!",
    },
    {
      name: "Mushakil 2",
      designation: "USA Client",
      image: testimonial04,
      content:
        "Protech Planner's global perspective and seamless IT solutions have been a game-changer for us. Their digital marketing strategies have expanded our reach, making them an essential partner for success.",
    },
   
  ]
};


import featureTab01 from "@/images/home_1/latest-1.png";
import featureTab02 from "@/images/home_1/support-1.png";
import featureTab03 from "@/images/home_1/demo-1.png";
import featureTab04 from "@/images/home_1/IT-01.png";
import featureTab05 from "@/images/home_1/DB-01.png";
import featureTab06 from "@/images/home_1/ED-01.png";

export const FeatureTabDataAbout = {
  sectionContent: {
    title: "Our Story",
    subTitle: "About AIIDL Technology: Pioneering Innovation for a Digitally Empowered Future",
    text:
      "Founded with a passion for technology and a vision for a digitally transformed world, AIIDL Technology has emerged as a beacon of innovation in the realms of IT solutions and digital marketing. Our journey began with a singular focus: to harness the power of artificial intelligence, fuel innovation, and provide holistic solutions that empower businesses and individuals to thrive in the digital age."
  },
  posts: [
    {
      title: "The AIIDL Approach",
      content:
        "We harness the potential of AI to drive efficiency, automate processes, and uncover valuable insights that shape strategic decisions. Our DNA thrives on innovation. We explore new horizons, experiment with emerging technologies, and challenge conventions to deliver solutions that push the boundaries of possibility.",
      image: featureTab01,
      lists: [
        {
          item: "Artificial Intelligence"
        },
        {
          item: "Innovation Hub"
        },
        {
          item: "Digital Mastery"
        },
        {
          item: "Process Automation"
        },
        {
          item: "Learning Ecosystem"
        },
        {
          item: "Strategic Decision-Making"
        }
      ]
    },
    {
      title: "Our Vision",
      content:
        "At AIIDL Technology, we envision a future where technology isn't just a tool but a transformative force. A future where businesses harness data-driven insights to make informed decisions, where brands seamlessly connect with their audiences across digital landscapes, and where individuals possess the skills to navigate and thrive in a rapidly evolving digital world.",
      image: featureTab02,
      lists: [
        {
          item: "Transformative Impact"
        },
        {
          item: "Data-Powered Decisions"
        },
        {
          item: "Seamless Digital Engagement"
        },
        {
          item: "Digital Empowerment"
        },
        {
          item: "Adaptive Agility"
        },
        {
          item: "Positive Future"
        }
      ]
    },
    {
      title: "Our Mission",
      content:
        "We are committed to understanding your unique needs and crafting solutions that resonate with your goals, resulting in real-world impact. From concept to deployment, we adhere to the highest standards of quality, ensuring every solution we deliver is a testament to our dedication to excellence. Through our Digital Marketing Institute, we empower individuals to embrace digital literacy and master the art of online engagement.",
      image: featureTab03,
      lists: [
        {
          item: "Client-Centric Solutions"
        },
        {
          item: "Excellence in Execution"
        },
        {
          item: "Empowerment Through Knowledge"
        },
        {
          item: "Continuous Innovation"
        },
        {
          item: "Knowledge Empowerment"
        },
        {
          item: "Global Digital Leadership"
        }
      ]
    }
  ]
};




export const FeatureTabDataHome = {
  sectionContent: {
    title: "why choose us",
    subTitle: "our benefits",
    text:
      "At AIIDL Technology, we aren't just a run-of-the-mill IT solutions and digital marketing company – we are your partners in innovation, architects of digital transformation, and navigators of your journey to success. With a name that encapsulates Artificial Intelligence, Innovation, Digital, and Learning, we embody the spirit of modern technology and forward-thinking strategies."
  },
  posts: [
    {
      title: "Holistic IT Solutions",
      content:
        "AIIDL Technology isn't bound by limits; we break boundaries. Our seasoned experts are adept at crafting tailor-made software, dynamic web applications, and interactive mobile apps. By synergizing creativity and technology, we empower your business with tools that redefine efficiency and elevate user experiences. ",
      image: featureTab04,
      lists: [
        {
          item: "Unleashing Tomorrow's Innovations"
        },
        {
          item: "Harnessing Tech for Business Triumph"
        },
        {
          item: "Where Dreams Inspire Tech Reality"
        },
        {
          item: "Navigating Success with Digital Prowess"
        },
        {
          item: "Empowerment through Tech Evolution"
        },
        {
          item: "Innovate. Progress. Lead."
        }
      ]
    },
    {
      title: "Masters of Digital Branding",
      content:
        "In a world fueled by pixels and algorithms, brand prominence is paramount. AIIDL Technology excels in orchestrating impactful digital narratives. From optimizing online visibility through SEO and social media prowess to curating engaging content and launching high-impact campaigns, we ensure your brand shines brightly in the digital constellation.",
      image: featureTab05,
      lists: [
        {
          item: "Igniting Brands with Digital Magic"
        },
        {
          item: "Creating Waves in Online Visibility"
        },
        {
          item: "Where Ideas Reshape Digital Horizons"
        },
        {
          item: "Navigating Brands to Digital Success"
        },
        {
          item: "Empowering Brands with Online Brilliance"
        },
        {
          item: "Innovate. Captivate. Triumph"
        }
      ]
    },
    {
      title: "Empowerment through Education",
      content:
        "Digital Marketing Institute: There are many variations of passages of lorem ipsum available, but the majority have  suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ",
      image: featureTab06,
      lists: [
        {
          item: "Empowering Dreams through Education"
        },
        {
          item: "Knowledge: Your Key to Digital Heights"
        },
        {
          item: "Where Learning Ignites Digital Futures"
        },
        {
          item: "Navigating Success via Education"
        },
        {
          item: "Empowering Futures through Knowledge"
        },
        {
          item: "Innovate. Educate. Elevate."
        }
      ]
    }
  ]
};




export const ParallaxOneData = {
  iconName: "mei-team",
  title: "Great things in business are never done by one person.",
  specialText: "They’re done by a team of people.",
  text:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training."
};

export const PortfolioHomeData = {
  sectionContent: {
    title: "work showcase",
    subTitle: "our portfolio",
    text:
      "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
  }
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "Digital Experience",
    subTitle: "how do we works",
    text:
      "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
  },
  video: {
    title: "Watch Video",
    ID: "y2Eqx6ys1hQ",
    image: video02
  }
};

import aboutTwo01 from "@/images/home_1/abt-01.png";
import aboutTwo02 from "@/images/home_1/abt-01.png";

export const AboutTwoData = {
  sectionContent: {
    title: "We are the Best Website agency in The World",
    subTitle: "Welcome to AIIDL Technologies",
    text:
      "Pioneering Website Excellence Worldwide. We combine visionary design, cutting-edge technology, and strategic digital marketing to deliver unmatched web solutions. Our global reputation, built on client satisfaction and innovation, sets us apart as the premier website agency, shaping the future of online success."
  },
  button: {
    label: "Learn More",
    url: "#"
  },
  gallery: [aboutTwo01, aboutTwo02]
};

import featureTwo01 from "@/images/home_1/5.png";

export const FeatureTwoData = {
  sectionContent: {
    title: "Empowering Digital Excellence with Aiidl Technologies.",
    subTitle: "our core features",
    text:
      ""
  },
  posts: [
    {
      title: "Nurturing Future Talent with the AIIDL Institute",
      text:
        "Students, business owners, and entrepreneurs receive thorough digital marketing and IT training from the Aiidl Institute with the goal of preparing them for a successful future in the digital age."
    },
    {
      title: "Driving Growth with IT and Digital Marketing Services",
      text:
        ` <a target="_blank" href="https://digitalwebplanet.com/" ><strong>Digital Web Planet:</strong></a> Advancing Indian enterprises with state-of-the-art IT and digital marketing solutions, maximising online potential for impressive growth. \n <a target="_blank" href="https://protechplanner.us/" ><strong>Protech Planner:</strong></a>: Supporting worldwide success and innovation by enhancing international businesses with specialised IT and digital marketing solutions.`,

    },
    {
      title: "Connecting Global Teams with Virtual Employee Staffing",
      text:
        `By providing virtual staffing services to overseas businesses, <a target="_blank" href="https://9amc.com/" ><strong>9amc</strong></a> bridges borders by linking them with qualified individuals from a variety of professions, promoting effective teamwork and increasing productivity.`
    }

  ],
  image: {
    text: "Total design freedom \n for everyone.",
    path: featureTwo01
  }
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio"
  },
  {
    label: "Reqeust a free quote",
    url: "/contact"
  }
];
