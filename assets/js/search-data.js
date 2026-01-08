// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "publications in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-news",
          title: "news",
          description: "news in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "dropdown-canadian-daily-climate",
              title: "Canadian Daily Climate",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://github.com/minnzc/Canada_Daily_Climate";
              },
            },{id: "dropdown-canada-covid-19-dashboard",
              title: "Canada COVID-19 Dashboard",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://mhcui.shinyapps.io/Canada_COVID/";
              },
            },{id: "news-i-received-the-canadian-economics-association-best-undergraduate-paper-award",
          title: 'I received the Canadian Economics Association Best Undergraduate Paper Award!',
          description: "",
          section: "News",},{id: "news-i-received-the-boc-master-s-scholarship-for-women-in-economics",
          title: 'I received the BoC Master’s Scholarship for Women in Economics!',
          description: "",
          section: "News",},{id: "news-i-m-proud-to-announce-that-i-will-be-a-recipient-of-the-sshrc-doctoral-fellowship",
          title: 'I’m proud to announce that I will be a recipient of the SSHRC...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%69%6E%6E%69%65.%63%75%69@%77%69%73%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/minniecui", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
