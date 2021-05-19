var app = new Vue({
  el: '#app',
  data() {
    return {
      nav: [
        { 
          class: 'active',
          icon: 'fa-home',
          name: 'Home'
        },
        { 
          class: 'disabled',
          icon: 'fa-users',
          name: 'About'
        },
        { 
          class: 'disabled',
          icon: 'fa-map',
          name: 'Contact'
        }
      ],
      hero: {
        companyname: 'COMPANY NAME TBK',
        companymotto: 'What will your slogan be? How will you design your logo? Whats your mission statement? Nows the time to unleash your creative powers and give the public a first impression theyll never forget.'
      },
      story: 'Brand stories activate emotions and communicate values. Your brand story is a complete picture of various elements from website copy to social media, to traditional ads. It’s the way your brand presents itself to the world and the way the public perceives you. We need narratives for our CEOs to inspire others to join their cause, for our sales team to convince people to buy, and for our customer support centers to convey a positive experience.',
      storyIcon: [
        { 
          class: 'fa-hard-hat',
          title: 'Safety'
        },
        { 
          class: 'fa-users',
          title: 'Community'
        },
        { 
          class: 'fa-chart-line',
          title: 'Sustanbility'
        },
        { 
          class: 'fa-check-circle',
          title: 'Integrity'
        }
      ],
      storyForm: [
        { 
          type: 'text',
          id: 'form1',
          label: 'Name'
        },
        { 
          type: 'email',
          id: 'form2',
          label: 'Email'
        },
        { 
          type: 'tel',
          id: 'form3',
          label: 'Phone Number'
        }
      ],
      services: 'If you want people to look at your services and find you credible, you must invest in web design for services pages to provide your audience with a positive experience. By looking at some web design examples for service pages, you’ll get inspiration for building an impactful service page.',
      designTab: {
        img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/construction3.jpg',
        number: '01',
        title: 'Design And Building',
        descA: 'While tile is primarily used for flooring, it can also be utilized for shower stalls, back splashes and outdoor rooms. We fully understand how important your home investment is, which is why we strive to do all we can to protect this investment through worthwhile upgrades. Our company is widely known as one of the very best contractors in the area.',
        descB: 'When it comes to interior house painting, our talented painting crew makes sure to involve you throughout the entirety of the project, from the moment you contact us to the passing of the full inspection. Our process is a rigid one, so as to ensure that each project is handled with the same amount of care and quality. Before starting, we will cover all of your belongings and make sure that nothing is in the way. All flooring will be covered as well. No matter the size of the project, it’s our job to make sure that your home is left as clean as it was when we first arrived. If any cracks or holes exist in the areas we’re painting, we fill these in. Once the work is completed, everything is moved back to where it was and floors are vacuumed before the final inspection takes place.'
      },
      tileTab: {
        img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/construction1.jpg',
        number: '02',
        title: 'Tiling And Painting',
        descA: 'First, I found this definition on mathforum.org and found it appropriate for the definition of the tiling method with paint.   “When you fit individual tiles together with no gaps or overlaps to fill a flat space like a ceiling, wall, or floor, you have a tiling. You can imagine that you can use a variety of shapes to do this.',
        descB: 'I like this definition because of the additional comment at the end that you can imagine that a variety of shapes can do this, because so many of my students have thought that tiles are square, mechanical and rigid.  They can be any size and any shape, and they snap together like tetris to complete a grid space (painting) of whatever size and shape you choose.'
      },
      woodTab: {
        img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/construction4.jpg',
        number: '03',
        title: 'Wood Flooring',
        descA: 'If you’re thinking of putting in wood floors, you can’t go wrong. All types of hardwood floors have unmatched natural beauty and go with any decor — modern, traditional, country, you name it. Hardwood flooring goes in any room, although kitchens and basements warrant special considerations.',
        descB: 'The enduring good looks of hardwood flooring come in many types and styles to fit different needs and budgets.'
      },
      renovTab: {
        img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/construction2.jpg',
        number: '04',
        title: 'Renovation',
        descA: 'Most builders focus on building new homes, so renovating is typically a part-time activity for such tradespeople. The processes and services required for renovations are quite specific and, once plans are signed off, building a new home is relatively predictable. Renovations usually require all of the sub-trades that are needed for the construction of a new building. During renovation projects, flexibility is often required from renovation companies to respond to unexpected issues that arise. Projects involving renovation require not just flexibility, but a plan that had been agreed upon by multiple parties. The planning process will involve feedback from financial investors of the project, and from the designer. Part of planning will also entail the collection of data for the completion of the project and then the project plan will be revised and given consent before continuing with renovations.',
        descB: 'Many people renovate homes to create a new appearance for their home, or so another person can live in the residence.[2] Builders often renovate homes because it is a stable source of income.[3] Homeowners often renovate their homes to increase the re-sale value and to turn a profit when selling.'
      },
      interiorTab: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/interior1.jpg',
          title: 'Interior Description'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/interior2.jpg',
          title: 'Interior Description'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/interior3.jpg',
          title: 'Interior Description'
        }
      ],
      renovationTab: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/renovation1.jpg',
          title: 'Renovation Description'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/renovation2.jpg',
          title: 'Renovation Description'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/renovation3.jpg',
          title: 'Renovation Description'
        }
      ],
      acrhitectureTab: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/architecture1.jpg',
          title: 'Architecture Description'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/architecture2.jpg',
          title: 'Architecture Description'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/architecture3.jpg',
          title: 'Architecture Description'
        }
      ],
      landscapingTab: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/landscaping1.jpg',
          title: 'Landscaping Description'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/landscaping2.jpg',
          title: 'Landscaping Description'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/landscaping3.jpg',
          title: 'Landscaping Description'
        }
      ],
      gardenTab: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/garden1.jpg',
          title: 'Gardening Description'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/garden2.jpg',
          title: 'Gardening Description'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/garden3.jpg',
          title: 'Gardening Description'
        }
      ],
      testimonial: [
        {
          id: 1,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/profil1.jpg',
          commen: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
          name: 'Client Name',
          job: 'Client Job'
        },
        {
          id: 2,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/profil2.jpg',
          commen: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
          name: 'Client Name',
          job: 'Client Job'
        },
        {
          id: 3,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/profil3.jpg',
          commen: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
          name: 'Client Name',
          job: 'Client Job'
        },
        {
          id: 4,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/profil4.jpg',
          commen: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
          name: 'Client Name',
          job: 'Client Job'
        },
        {
          id: 5,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/profil5.jpg',
          commen: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
          name: 'Client Name',
          job: 'Client Job'
        },
        {
          id: 6,
          img: 'https://raw.githubusercontent.com/ihmwhydn/company-profile/master/img/profil6.jpg',
          commen: 'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all',
          name: 'Client Name',
          job: 'Client Job'
        }
      ],
      clients: [
        {
          icon: 'fab fa-react fa-5x'
        },
        {
          icon: 'fab fa-vuejs fa-5x'
        },
        {
          icon: 'fab fa-angular fa-5x'
        },
        {
          icon: 'fab fa-adobe fa-5x'
        },
        {
          icon: 'fab fa-bootstrap fa-5x'
        },
        {
          icon: 'fab fa-github fa-5x'
        }
      ]
    }
  }
})