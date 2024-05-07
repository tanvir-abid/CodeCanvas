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
  .catch(error => console.error('Error fetching data:', error));

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

  const synopsisText = document.createElement('p');
  synopsisText.textContent = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to.';

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

  if(window.innerWidth <= 768){
    categoryDiv.classList.add('disappear');

    const toggleBtn = document.getElementById('category-toggle-btn');
    toggleBtn.addEventListener('click', ()=>{
      console.log('clicked.');

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
      problemContainer.innerHTML = '';
      let cardsDiv = populateProblemsContainer(filteredData);
      problemContainer.appendChild(cardsDiv);
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
  })
  //----------------------------//
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
    
    const problemText = problemObj.problem.replace(/\n/g, '<br>'); // Replace '\n' with '<br>'
    const problemHeading = document.createElement('h3');
    problemHeading.innerHTML = `${index + 1}. ${problemText}`; // Use innerHTML to render '<br>' tags
    problemStatementDiv.appendChild(problemHeading);
    

    // Create solution div with 'pre' and 'code' elements
    const solutionDiv = document.createElement('div');
    solutionDiv.classList.add('solution');

    const codeActionBtnContainer = document.createElement('div');
    codeActionBtnContainer.className = 'action-btn-container';

    const feedbackSpan = document.createElement('span');
    feedbackSpan.className = 'feedbackBtn';
    feedbackSpan.innerHTML = "<i class='bx bx-message-square-dots' ></i>";
    codeActionBtnContainer.appendChild(feedbackSpan);
    feedbackSpan.addEventListener('click', ()=>{
      console.log(problemObj);
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



function createModal(message) {
  // Create modal container
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal');

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
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    Object.assign(formDataObject, data);

    console.log(formDataObject); 
    createModal('Success !!')
  });
}


