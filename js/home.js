// Navbar
// Mobile menu
try {
  const mobileMenu = document.querySelector('.menuMobileBtn');
  const barsMenuList = Array.prototype.slice.call(
    document.querySelectorAll('.menuMobileBars')
  );
  const navbarMenuMobile = document.querySelector('.navbarMenu');
  let clickOnMenu = true;

  mobileMenu.addEventListener('click', () => {
    console.log(clickOnMenu);
    if (clickOnMenu) {
      // clickOnMenu = false;
      navbarMenuMobile.style.display = 'flex';
      barsMenuList.forEach((bar, idx) => {
        if (idx === 0) {
          bar.style.cssText =
            'transform: rotate(-50deg); margin-top: 0px;transition: 0.6s;width: 130%;';
        } else if (idx === 1) {
          bar.style.display = 'none';
        } else if (idx === 2) {
          bar.style.cssText =
            'transform: rotate(50deg); margin-top: -10px;transition: 0.6s;width: 130%;';
        }
      });
      setTimeout(() => (clickOnMenu = false), 600);
    } else {
      // clickOnMenu = false;
      navbarMenuMobile.style.display = 'none';
      barsMenuList.forEach((bar, idx) => {
        if (idx === 0) {
          bar.style.cssText =
            'transform: rotate(0deg); transition: 0.6s; width: 100%;';
        } else if (idx === 1) {
          setTimeout(() => (bar.style.display = 'block'), 350);
        } else if (idx === 2) {
          bar.style.cssText =
            'transform: rotate(0deg); transition: 0.6s;width: 100%;';
        }
      });
      setTimeout(() => (clickOnMenu = true), 600);
    }
  });
} catch (er) {
  console.warn(er);
}

// let mapImgList = [
//   'https://www.guiageografico.com/mapas/mapa/imagem-mundo.jpg',
//   'https://portaldiplomatico.mne.gov.pt/images/politica_externa/Africa_Subsariana.jpg?47974c0dd017fe03ac68b2582b714c76',
// ];
// // let techMap =
// //   'https://implantnewsperio.com.br/wp-content/uploads/2020/02/implacil-de-bortoli-nos-eua_27-02-2020.png';
// let correntImgIdx = 0;
// let globe = document.querySelector('.globe');

// function updateBackgroundImage() {
//   globe.style.backgroundImage = `url(${mapImgList[correntImgIdx]})`;
//   correntImgIdx = (correntImgIdx + 1) % mapImgList.length;
//   console.log(correntImgIdx);
// }
// setInterval(updateBackgroundImage, 2000);
// End of Navbar

// Popup form
function popupForm() {
  const formSection = document.querySelector('.formSection');
  const closedForm = document.querySelector('.formSectionClosed');
  const toCartBtn = document.querySelector('.registerNewButton');
  toCartBtn.addEventListener('click', () => {
    formSection.style.display = 'flex';
  });
  closedForm.addEventListener('click', function () {
    formSection.style.display = 'none';
  });
  formSection.addEventListener('click', function (e) {
    const elementClicked = e.target;
    if (elementClicked.classList.contains('formSection')) {
      formSection.style.display = 'none';
    }
  });
}
// popupForm();
// End of Popup form

//Fly windows
function flyWindow() {
  let labelCheck = document.querySelector('.form-check-label');
  labelCheck.innerHTML += ` <a href="/comofunciona" target="_blank" class="refundPage">Política de Reembolso</a>`;
  const formSection = document.querySelector('.formSection');
  const closedForm = document.querySelector('.formSectionClosed');
  const toCartBtn = document.querySelector('.registerNewButton');
  toCartBtn.addEventListener('click', function () {
    formSection.style.right = '85px';
    // console.log('teste');
  });
  closedForm.addEventListener('click', function () {
    formSection.style.right = '-435px';
  });

  document.addEventListener('click', function (e) {
    const elementClicked = e.target;
    if (
      !(
        elementClicked.classList.contains('formSectionContainer') ||
        elementClicked.classList.contains('formSectionTitle') ||
        elementClicked.classList.contains('formSectionContent') ||
        elementClicked.classList.contains('form-check-input') ||
        elementClicked.classList.contains('form-check-label') ||
        elementClicked.classList.contains('form-check') ||
        elementClicked.classList.contains('formFields') ||
        elementClicked.classList.contains('newButtonText') ||
        elementClicked.classList.contains('refundPage') ||
        elementClicked.id === 'formCadastro' ||
        elementClicked.id === 'lblMsg' ||
        elementClicked.id === 'btnEnviarLead'
      )
    ) {
      formSection.style.right = '-435px';
    }
  });
}
flyWindow();
// End of Fly windows

console.log('if');

// ↓ Para o cliente https://unigr6.com.br/
(function () {
  function removeBePartnerLinkFooter() {
    try {
      const linksFooterList = [
        ...document.querySelectorAll('.infoBoxLeftFooter a'),
      ];
      linksFooterList.forEach((e) => {
        if (e.textContent === 'Seja Parceiro') e.style.display = 'none';
        return;
      });
    } catch (e) {
      console.warn(e);
    }
  }

  removeBePartnerLinkFooter();
})();
