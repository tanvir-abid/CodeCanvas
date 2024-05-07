document.addEventListener('DOMContentLoaded', function() {
  // Create the page-loading-container div
  const pageLoadingContainer = document.createElement('div');
  pageLoadingContainer.classList.add('page-loading-container');

  const iconsContainer = document.createElement('div');
  iconsContainer.classList.add('icons-container')

  // Create the three spans
  const span1 = document.createElement('span');
  span1.textContent = '<';
  const span2 = document.createElement('span');
  span2.textContent = '/';
  const span3 = document.createElement('span');
  span3.textContent = '>';

  // Append spans to the page-loading-container div
  iconsContainer.appendChild(span1);
  iconsContainer.appendChild(span2);
  iconsContainer.appendChild(span3);
  pageLoadingContainer.appendChild(iconsContainer);
  // Append the page-loading-container div to the document body or another desired location
  document.body.appendChild(pageLoadingContainer);

  setTimeout(() => {
    pageLoadingContainer.classList.add('change');
    setTimeout(() => {
      pageLoadingContainer.remove();

      callNavAndMainElementFunction();
    }, 500);
  }, 2000);

});

function callNavAndMainElementFunction(){
  const container = document.querySelector('main');
  container.innerHTML = '';

  const navbarContents = createNavbar();
  container.appendChild(navbarContents);

  fetch('data/appData.json')
  .then(response => response.json())
  .then(data => {
    let mainContainer = createMainElements(data);
    container.appendChild(mainContainer);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    createModal("Something went wrong in connection", true);
  });

  // Call the function to create the button
  createScrollToTopButton();
};

//==============================//
function createNavbar() {
  // Create navbar container
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');

  // Create logo container
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  // Create logo heading
  const logoHeading = document.createElement('h1');
  logoHeading.innerHTML = '<i class="bx bxs-hot"></i> CodeCanvas';
  logoContainer.appendChild(logoHeading);

  // Create button
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('toggle-btn-container');

  const button = document.createElement('button');
  button.type = 'button';
  button.innerHTML = '<i class="bx bx-user-circle"></i> <span>Who I am</span>';
  button.id = 'toggleBtn';

  // Append logo container and button to navbar
  navbar.appendChild(logoContainer);
  btnContainer.appendChild(button);
  navbar.appendChild(btnContainer);

  const codeRunBtn = document.createElement('button');
  codeRunBtn.type = 'button';
  codeRunBtn.innerHTML = "<i class='bx bx-play-circle'></i> <span>Run Code</span>";
  btnContainer.appendChild(codeRunBtn);
  codeRunBtn.addEventListener('click', ()=>{
    createCodeModal();
  });

  if(window.innerWidth <= 768){
    let navToggle = document.createElement('button');
    navToggle.type = 'button';
    navToggle.id = 'category-toggle-btn';
    navToggle.innerHTML = `<i class='bx bx-menu'></i>`;
    btnContainer.appendChild(navToggle);
  }

  // Create mega-div
  const megaDiv = document.createElement('div');
  megaDiv.classList.add('mega-div');

  // Create profile-img-container
  const profileImgContainer = document.createElement('div');
  profileImgContainer.classList.add('profile-img-container');

  // Create profile image
  const profileImg = document.createElement('img');
  profileImg.src = 'img/tanvir.jpg';
  profileImg.alt = 'Profile Image';

  // Append profile image to profile-img-container
  profileImgContainer.appendChild(profileImg);

  // Create profile-detail-container
  const profileDetailContainer = document.createElement('div');
  profileDetailContainer.classList.add('profile-detail-container');

  // Create profile-details
  const profileDetails = document.createElement('div');
  profileDetails.classList.add('profile-details');

  // Create profile heading
  const profileHeading = document.createElement('h2');
  profileHeading.textContent = 'Khondoker Abid Hasan Tanvir';

  // Create profile detail paragraphs
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');

  const detailsIdentity = document.createElement('div');
  detailsIdentity.classList.add('details-identity');

  const detail1 = document.createElement('p');
  detail1.innerHTML = '<i class="bx bx-envelope"></i> Web Designer & Developer | Professional Content Writer';
  const detail2 = document.createElement('p');
  detail2.innerHTML = '<i class="bx bxs-map-pin"></i> Location: Dhaka, Bangladesh';
  // Add more details as needed
  const detailContact = document.createElement('div');
  detailContact.className = 'details-Contact';
  detailContact.innerHTML = `
  <p><i class='bx bxs-phone-call'></i> Mobile: <a href="tel:+8801521200315">+8801521200315</a>, <a href="tel:+8801854702384">+8801854702384</a></p>
  <p><i class='bx bx-envelope' ></i> Email: <a href="mailto:Tanviraht1997@gmail.com">Tanviraht1997@gmail.com</a></p>
`;

  // Append profile heading and details to profile-details
  profileDetails.appendChild(profileHeading);
  detailsIdentity.appendChild(detail1);
  detailsIdentity.appendChild(detail2);
  detailsDiv.appendChild(detailsIdentity);
  detailsDiv.appendChild(detailContact);


  profileDetails.appendChild(detailsDiv);
  // Append other detail paragraphs as needed

  // Array of skills
  const skills = [
    {icon: '<i class="bx bxl-html5"></i>', name: 'HTML5', percentage: 90},
    {icon: '<i class="bx bxl-css3"></i>',name: 'CSS3',percentage: 85},
    {icon: '<i class="bx bxl-bootstrap"></i>',name: 'Bootstrap',percentage: 75},
    {icon: '<i class="bx bxl-javascript"></i>',name: 'JavaScript',percentage: 80},
    {icon: '<i class="bx bxl-python"></i>',name: 'Python',percentage: 75},
    {icon: '<i class="bx bxl-github"></i>',name: 'Github',percentage: 70},
    {icon: '<i class="bx bx-search-alt"></i>',name: 'Niche&Keyword',percentage: 90},
    {icon: '<i class="bx bx-list-check"></i>',name: 'SEO Audit',percentage: 90},
    {icon: '<i class="bx bxs-book-content"></i>',name: 'On/Off-page SEO',percentage: 95},
    {icon: '<i class="bx bxs-pen"></i>',name: 'Content Writing',percentage: 95},
    {icon: '<i class="bx bx-line-chart"></i>',name: 'Affiliate Marketing',percentage: 80},
    // Add more skills as needed
  ];

  // Create skills-container
  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('skills-container');

  // Generate skill cards from skills array
  skills.forEach(skill => {
    // Create skill-card div
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');

    // Create skill-icon div
    const skillIcon = document.createElement('div');
    skillIcon.classList.add('skill-icon');
    skillIcon.innerHTML = skill.icon;

    // Create skill-content div
    const skillContent = document.createElement('div');
    skillContent.classList.add('skill-content');

    // Create name (h3) and percentage (span) elements
    const nameHeading = document.createElement('h4');
    nameHeading.textContent = skill.name;

    const percentageSpan = document.createElement('div');
    percentageSpan.innerHTML = `<span class='progress-bar' style='width:${skill.percentage}%'></span>`;
    percentageSpan.classList.add('progress');
    percentageSpan.setAttribute('data-label', `${skill.percentage}%`)

    // Append name and percentage to skill-content
    skillContent.appendChild(nameHeading);
    skillContent.appendChild(percentageSpan);

    // Append skill-icon and skill-content to skill-card
    skillCard.appendChild(skillIcon);
    skillCard.appendChild(skillContent);

    // Append skill-card to skills-container
    skillsContainer.appendChild(skillCard);
  });



  // Create profile-synopsis
  const profileSynopsis = document.createElement('div');
  profileSynopsis.classList.add('profile-synopsis');

  const synopsisText = document.createElement('div');
  synopsisText.innerHTML = `
    <p>My professional journey spans diverse skills from data cleaning to front-end Web development, intertwined with expertise in search engine optimization, earning me recognition as <strong>the best SEO expert</strong>. With six months of content writing experience in various areas like Amazon affiliate marketing and blog posts, I've also established myself as <strong>the best content writer</strong>, delivering engaging narratives.</p>
    <p>In web development, I'm recognized as <strong>the best developer</strong>, specializing in JavaScript, for designing intuitive <strong>screen-responsive</strong> interfaces and developing <strong>SEO-friendly</strong> web structures. Academically, I hold a master's in applied linguistics and TESOL with honors, complemented by certifications in tools like Microsoft Office. My commitment to excellence drives me, and I seek roles in web development and SEO to apply my multidisciplinary expertise for organizational success.</p>
  `;

  profileSynopsis.appendChild(synopsisText);

  // Create profile-social-media
  const profileSocialMedia = document.createElement('div');
  profileSocialMedia.classList.add('profile-social-media');

  // Array of social media icons
  const socialMediaIcons = [
    {icon: '<i class="bx bxl-facebook-square"></i>',url: 'https://www.facebook.com/yourusername'},
    {icon: '<i class="bx bxl-messenger"></i>', url: 'https://twitter.com/yourusername'},
    {icon: '<i class="bx bxl-linkedin-square"></i>',url: 'https://www.linkedin.com/in/yourusername'},
    {icon: '<i class="bx bxl-whatsapp"></i>',url: 'https://wa.me/yourphonenumber'},
    {icon: '<i class="bx bxl-github"></i>',url: 'https://github.com/yourusername'},
    {icon: '<i class="bx bxl-upwork"></i>', url: "https://upwork.com"}
  ];
  
  // Create and append icon elements using forEach loop
  socialMediaIcons.forEach(iconData => {
    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = iconData.icon;
    const iconLink = document.createElement('a');
    iconLink.href = iconData.url;
    iconLink.target = '_blank'; 
    iconLink.appendChild(iconSpan);
    profileSocialMedia.appendChild(iconLink);
  });

  // Create icon span
  const portfolioIconSpan = document.createElement('span');
  portfolioIconSpan.innerHTML = "<i class='bx bxs-folder-open' ></i> Portfolios <i class='bx bx-right-arrow-alt anime'></i>";
  // Create portfolio link
  const portfolioLink = document.createElement('a');
  portfolioLink.className = 'portfolio-btn';
  portfolioLink.href = 'https://tanvir-abid.github.io/Portfolio/';
  portfolioLink.target = '_blank';
  portfolioLink.appendChild(portfolioIconSpan);
  // Append portfolio link to profileSocialMedia container
  profileSocialMedia.appendChild(portfolioLink);


  // Append profile-details, profile-synopsis, and profile-social-media to profile-detail-container
  profileDetailContainer.appendChild(profileDetails);

  profileDetailContainer.appendChild(profileSynopsis);
  profileDetailContainer.appendChild(skillsContainer);
  profileDetailContainer.appendChild(profileSocialMedia);

  // Append profile-img-container and profile-detail-container to mega-div
  megaDiv.appendChild(profileImgContainer);
  megaDiv.appendChild(profileDetailContainer);

  const megaCloseBtn = document.createElement('span');
  megaCloseBtn.classList.add('mega-close-btn');
  megaCloseBtn.innerHTML = "<i class='bx bx-x'></i>";
  megaDiv.appendChild(megaCloseBtn);
  megaCloseBtn.addEventListener('click', ()=>{
    if (megaDiv.classList.contains('active')) {
      megaDiv.classList.remove('active');
    }
  })

  // Append navbar and mega-div to navbar-contents
  const navbarContents = document.createElement('div');
  navbarContents.classList.add('navbar-contents');
  navbarContents.appendChild(navbar);
  navbarContents.appendChild(megaDiv);

  button.addEventListener('click', function() {
    // Check the current display style and toggle accordingly
    if (megaDiv.classList.contains('active')) {
      megaDiv.classList.remove('active');
    } else {
      megaDiv.classList.add('active');
    }
  });

  // Return the navbar-contents div
  return navbarContents;
}

//============================//
function createMainElements(data) {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';

  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'category-container';

  const problemContainer = document.createElement('div');
  problemContainer.classList.add('problems-container');

  const organiseBtnContainer = document.createElement('div');
  organiseBtnContainer.classList.add('organise-btn-container');
  const showAllBtn = document.createElement('button');
  showAllBtn.innerHTML = "<i class='bx bx-expand' ></i> <span>Exapnd All</span>";
  const hideAllBtn = document.createElement('button');
  hideAllBtn.innerHTML = "<i class='bx bx-collapse' ></i> <span>Hide All</span>";
  organiseBtnContainer.appendChild(showAllBtn);
  organiseBtnContainer.appendChild(hideAllBtn);
  problemContainer.appendChild(organiseBtnContainer);

  const problemContents = document.createElement('div');

  if(window.innerWidth <= 768){
    categoryDiv.classList.add('disappear');

    const toggleBtn = document.getElementById('category-toggle-btn');
    toggleBtn.addEventListener('click', ()=>{

      if(categoryDiv.classList.contains('disappear')){
        categoryDiv.classList.remove('disappear');
        toggleBtn.innerHTML = `<i class='bx bx-x'></i>`;
      }else{
        categoryDiv.classList.add('disappear');
        toggleBtn.innerHTML = `<i class='bx bx-menu' ></i>`;
      }
    })
    problemContainer.addEventListener('click', ()=>{
      if(!(categoryDiv.classList.contains('disappear'))){
        categoryDiv.classList.add('disappear');
        toggleBtn.innerHTML = `<i class='bx bx-menu' ></i>`;
      }
    })

    const threshold = 100; // Threshold for slide distance
    // Touch start coordinates
    let startX = 0;
    let startY = 0;
  
    // Touch move handler
    const touchMoveHandler = (event) => {
      const touch = event.touches[0];
      const deltaX = touch.pageX - startX;
      const deltaY = touch.pageY - startY;
  
      // Check if touch movement is primarily horizontal and to the right
      if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > threshold) {
        categoryDiv.classList.remove('disappear');
        toggleBtn.innerHTML = `<i class='bx bx-x'></i>`;
      }
    };
  
    // Touch start event listener
    problemContainer.addEventListener('touchstart', (event) => {
      const touch = event.touches[0];
      startX = touch.pageX;
      startY = touch.pageY;
    });
  
    // Touch move event listener
    problemContainer.addEventListener('touchmove', touchMoveHandler);
  }
  

  const divHeading = document.createElement('h3');
  divHeading.innerHTML = "<i class='bx bx-category-alt' ></i> Category";
  categoryDiv.appendChild(divHeading);

  const uniqueCategories = new Set();
  // Initialize an object to store category counts
  const categoryCounts = {};

  data.forEach(obj => {
    // Add category to uniqueCategories set
    uniqueCategories.add(obj.category);

    // Increment count for each category in categoryCounts object
    if (categoryCounts[obj.category]) {
      categoryCounts[obj.category]++;
    } else {
      categoryCounts[obj.category] = 1;
    }
  });
  // Convert Set to array, sort alphabetically (case-insensitive)
  const sortedCategories = Array.from(uniqueCategories).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

  const ul = document.createElement('ul');

  // Create list items for unique categories
  for (let category of sortedCategories) {
    const li = document.createElement('li');
    li.innerHTML = `<span>${category}</span> <span>${categoryCounts[category]}</span>`;

    li.addEventListener('click', () => {
      // Remove 'selected' class from all list items
      ul.querySelectorAll('li').forEach(item => {
        item.classList.remove('selected');
      });

      // Add 'selected' class to clicked list item
      li.classList.add('selected');


      const filteredData = data.filter(obj => obj.category === category);
      problemContents.innerHTML = '';
      let cardsDiv = populateProblemsContainer(filteredData);
      problemContents.appendChild(cardsDiv);
    });
    if (ul.children.length === 0) {
      li.classList.add('selected');
      li.click();
    }
    ul.appendChild(li);
  };

  categoryDiv.appendChild(ul);

  const creditDiv = document.createElement('div');
  creditDiv.classList.add('credit');

  const creditContent = document.createElement('p');
  creditContent.innerHTML = `Khondoker Abid Hasan Tanvir`;
  creditDiv.appendChild(creditContent);

  const creditRight = document.createElement('p');
  creditRight.innerHTML = `© ${new Date().getFullYear()} All Rights Reserved`;
  creditDiv.appendChild(creditRight);
  // Append the credit div to the body or another desired location
  categoryDiv.appendChild(creditDiv);

  creditContent.addEventListener('click', ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });

    let megaDiv = document.querySelector('.mega-div');
    if (megaDiv.classList.contains('active')) {
      megaDiv.classList.remove('active');
    } else {
      megaDiv.classList.add('active');
    }
  });

  showAllBtn.addEventListener('click', function() {
    const problemHeaders = document.querySelectorAll('.problem-statement');
    problemHeaders.forEach((problemHeader,index) => {
      setTimeout(() => {
        if (!problemHeader.classList.contains('toggle')) {
          problemHeader.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the problem header
        problemHeader.click();
        }
      }, index * 500);
    });
  });

  hideAllBtn.addEventListener('click', function() {
    const problemHeaders = document.querySelectorAll('.problem-statement');
    problemHeaders.forEach((problemHeader, index) => {
      setTimeout(() => {
        if(problemHeader.classList.contains('toggle')){
          problemHeader.click();
        }
      }, index*500);
    });
  });
  //----------------------------//
  problemContainer.appendChild(problemContents);

  mainContainer.appendChild(categoryDiv);
  mainContainer.appendChild(problemContainer);

  return mainContainer;
}

function populateProblemsContainer(data) {
  const problemsContainer = document.createElement('div');
  problemsContainer.classList.add('problem-cards-container');

  // Loop through the data array
  data.forEach((problemObj, index) => {
    // Create card div
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.style.animationDelay = `${index * 200}ms`;

    // Create problem-statement div with problem parameter in h3 tag
    const problemStatementDiv = document.createElement('div');
    problemStatementDiv.classList.add('problem-statement');

    const problemText = problemObj.problem.replace(/\n/g, '<br>'); 
    const problemHeading = document.createElement('h3');

    const problemTextSpan = document.createElement('span');
    problemTextSpan.innerHTML = `${index + 1}. ${problemText}`; 
    problemHeading.appendChild(problemTextSpan);

    const problemToggleSpan = document.createElement('span');
    problemToggleSpan.id = "problem-toggle-icon";
    problemToggleSpan.innerHTML = "<i class='bx bxs-chevron-down'></i>";
    problemHeading.appendChild(problemToggleSpan);

    problemStatementDiv.appendChild(problemHeading);
    

    // Create solution div with 'pre' and 'code' elements
    const solutionDiv = document.createElement('div');
    solutionDiv.classList.add('solution');

    problemStatementDiv.addEventListener('click', function() {
      problemStatementDiv.classList.toggle('toggle');
      solutionDiv.classList.toggle('visible');
    });

    if(index === 0){
      problemStatementDiv.click();
    }
    const codeActionBtnContainer = document.createElement('div');
    codeActionBtnContainer.className = 'action-btn-container';

    const feedbackSpan = document.createElement('span');
    feedbackSpan.className = 'feedbackBtn';
    feedbackSpan.innerHTML = "<i class='bx bx-message-square-dots' ></i>";
    codeActionBtnContainer.appendChild(feedbackSpan);
    feedbackSpan.addEventListener('click', ()=>{
      createFeedbackModal(problemObj)
    });
    
    const copySpan = document.createElement('span');
    copySpan.className = 'copyBtn';
    copySpan.innerHTML = "<i class='bx bx-copy'></i>";
    codeActionBtnContainer.appendChild(copySpan);
    solutionDiv.appendChild(codeActionBtnContainer);

    const preElement = document.createElement('pre');
    const codeElement = document.createElement('code');
    codeElement.textContent = problemObj.solution.trim(); 
    codeElement.classList.add('language-javascript'); 
    preElement.appendChild(codeElement);
    solutionDiv.appendChild(preElement);

    // Add event listener to copy button
    copySpan.addEventListener('click', () => {
      const textarea = document.createElement('textarea');
      textarea.value = problemObj.solution.trim();
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      const originalText = copySpan.innerHTML;
      copySpan.textContent = 'Copied';
      
      setTimeout(() => {
        copySpan.innerHTML = originalText;
      }, 1000);

      createModal('Code copied to clipboard!');
    });

    // Append problem-statement and solution to card div
    cardDiv.appendChild(problemStatementDiv);
    cardDiv.appendChild(solutionDiv);

    // Append card to problemsContainer
    problemsContainer.appendChild(cardDiv);
  });

  // Highlight code syntax after appending to DOM
  setTimeout(() => {
    Prism.highlightAll();
  }, 0); 

  return problemsContainer;
}



function createModal(message, warning = false) {
  // Create modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');

  if(warning){
    modalContainer.classList.add('warning');
  }

  // Create modal header
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalHeader.innerHTML = `<i class='bx bxs-info-circle'></i>`;

  // Create modal body
  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.textContent = message;

  // Append header and body to modal container
  modalContainer.appendChild(modalHeader);
  modalContainer.appendChild(modalBody);

  // Append modal container to the document body
  document.body.appendChild(modalContainer);

  setTimeout(() => {
    modalContainer.classList.add('slideIn');
    setTimeout(() => {
        modalContainer.classList.remove('slideIn');
        setTimeout(() => {
          modalContainer.remove();
        }, 1200);
    }, 2500);
  }, 400);

}

function createScrollToTopButton() {
  // Create a button element
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = "<i class='bx bx-chevron-up'></i>";
  scrollToTopBtn.classList.add('scroll-to-top-btn'); 
  // scrollToTopBtn.style.display = 'none';

  // Add click event listener to scroll to top when clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  });

  // Append the button to the document body or a specific container
  document.body.appendChild(scrollToTopBtn); 
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      scrollToTopBtn.classList.add('show');
    } else {
      if(scrollToTopBtn.classList.contains('show')){
        scrollToTopBtn.classList.remove('show');
      }
    }
  });
}
//--------------------------//
function createCodeModal() {
  // Create modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-code');

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.classList.add('mContent');

  // Create modal header with title
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('mHeader');
  modalHeader.innerHTML = `<h4>Copy And Run Code Here</h4>`;
  modalContent.appendChild(modalHeader);

  // Create modal body with content
  const modalBody = document.createElement('div');
  modalBody.classList.add('mBody');
  // modalBody.innerHTML = `<iframe width="100%" height="300" src="//jsfiddle.net/tanvir_abid/ctbw9aej/embedded/js,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>`;
  modalContent.appendChild(modalBody);

  const codePenIframe = document.createElement('iframe');
  codePenIframe.src = 'https://www.programiz.com/javascript/online-compiler/';
  codePenIframe.style.width = '100%';
  codePenIframe.style.height = '100%'; // Adjust height as needed
  modalBody.appendChild(codePenIframe);

  const closeBtn = document.createElement('span')
  closeBtn.innerHTML = "<i class='bx bx-x'></i>";
  modalHeader.appendChild(closeBtn);

  // Append modal content to modal container
  modalContainer.appendChild(modalContent);

  // Append modal container to the body
  document.body.appendChild(modalContainer);

  // Close the modal when close button is clicked
  closeBtn.addEventListener('click', function() {
    modalContainer.remove();
  });
}

//-------------------------//
function createFeedbackModal(data) {
  // Create modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-code','feedback-modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('mContent');

  // Create modal header
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('mHeader');
  modalHeader.innerHTML = `<h3>Send Us Your Feedback</h3>`;
  
  // Create close button
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = "<i class='bx bx-x'></i>";
  closeBtn.classList.add('close-btn');
  closeBtn.addEventListener('click', () => modalContainer.remove());
  modalHeader.appendChild(closeBtn);

  // Create modal body
  const modalBody = document.createElement('div');
  modalBody.classList.add('mBody','mBody-two-columns');

  // Create display container
  const displayContainer = document.createElement('div');
  displayContainer.classList.add('display-container');

  // Create h4 for problem
  const problemHeading = document.createElement('h4');
  problemHeading.textContent = `Concern: ${data.problem}`;
  if (problemHeading.textContent.length > 120) {
    problemHeading.textContent = problemHeading.textContent.substring(0, 120) + ' ...';
  }

  // Create pre and code elements for solution
  const solutionPre = document.createElement('pre');
  solutionPre.className = 'language-javascript';
  const solutionCode = document.createElement('code');
  solutionCode.className = 'language-javascript';
  solutionCode.textContent = data.solution.trim();
  solutionPre.appendChild(solutionCode);

  // Append problem and solution to display container
  displayContainer.appendChild(problemHeading);
  displayContainer.appendChild(solutionPre);

  // Create form container
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');

  const heading3 = document.createElement('h3');
  heading3.textContent = 'Your Feedback Matters!';
  const paragraph = document.createElement('p');
  paragraph.textContent = "We value your input! Whether it's a bug report, code suggestion, or general feedback, we'd love to hear from you.";

  formContainer.appendChild(heading3);
  formContainer.appendChild(paragraph);

  // Create form
  const form = document.createElement('form');
  form.method = 'POST';
  // Create a hidden input element
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'apikey';
  hiddenInput.value = 'c8fb6cf0-85ce-49d9-be34-cbe21e1f7c9b';
  form.appendChild(hiddenInput);

  const formNameInput = document.createElement('input');
  formNameInput.type = 'hidden';
  formNameInput.name = 'from_name';
  formNameInput.value = 'CodeCanvas';
  form.appendChild(formNameInput);

  const subject = document.createElement('input');
  subject.type = 'hidden';
  subject.name = 'subject';
  subject.value = 'New Feedback';
  form.appendChild(subject);

  // Create fieldset for name
  const nameFieldset = document.createElement('fieldset');
  const nameLabel = document.createElement('legend');
  nameLabel.innerHTML = '<i class="bx bx-user"></i> Name';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Type your name here.',
  nameInput.setAttribute('name','name');
  nameFieldset.appendChild(nameLabel);
  nameFieldset.appendChild(nameInput);

  // Create fieldset for email
  const emailFieldset = document.createElement('fieldset');
  const emailLabel = document.createElement('legend');
  emailLabel.innerHTML = '<i class="bx bx-envelope"></i> Email';
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.setAttribute('name','email');
  emailInput.placeholder = 'Type your email here.',
  emailFieldset.appendChild(emailLabel);
  emailFieldset.appendChild(emailInput);

  // Create fieldset for message
  const messageFieldset = document.createElement('fieldset');
  const messageLabel = document.createElement('legend');
  messageLabel.innerHTML = '<i class="bx bx-edit"></i> Message';
  const messageTextarea = document.createElement('textarea');
  messageTextarea.setAttribute('name','message');
  messageTextarea.placeholder = 'Start typing....',
  messageFieldset.appendChild(messageLabel);
  messageFieldset.appendChild(messageTextarea);

  // Create submit button
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerHTML = '<i class="bx bx-paper-plane"></i> Submit';

  // Append fieldsets and submit button to form
  form.appendChild(nameFieldset);
  form.appendChild(emailFieldset);
  form.appendChild(messageFieldset);
  form.appendChild(submitBtn);
  formContainer.appendChild(form);

  // Append display container and form to modal body
  modalBody.appendChild(displayContainer);
  modalBody.appendChild(formContainer);

  // Append modal header and body to modal container
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContainer.appendChild(modalContent);

  // Append modal container to body
  document.body.appendChild(modalContainer);

  setTimeout(() => {
    Prism.highlightAll();
  }, 0); 

  // Add submit event listener to form
  form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    submitBtn.innerHTML = `<i class='bx bx-loader bx-spin' ></i>`;

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    // Validate form data
    if (!object.name.trim() || !object.email.trim() || !object.message.trim()) {
      // Show error message or alert
      createModal("Please fill in all fields!", true);
      submitBtn.innerHTML = `<i class="bx bx-paper-plane"></i> Submit`;
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(object.email.trim())) {
      createModal("Please enter a valid email address!", true);
      submitBtn.innerHTML = `<i class="bx bx-paper-plane"></i> Submit`;
      return;
    }

    Object.assign(object, data);
    object.subject = `New Feedback From ${object.name}`;
    const json = JSON.stringify(object);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          submitBtn.innerHTML = `<i class="bx bx-paper-plane"></i> Submit`;
          createModal('Your feedback has sent successfully !!');
        } else {
          submitBtn.innerHTML = `<i class="bx bx-paper-plane"></i> Submit`;
          createModal(json.message, true);
        }
    })
    .catch(error => {
      submitBtn.innerHTML = `<i class="bx bx-paper-plane"></i> Submit`;
        createModal("Something went wrong!", true);
    });
  });
}


