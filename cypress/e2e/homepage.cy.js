/* Testing titles and links */

const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist');
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap);
}
describe('Exit iframe', () => {
  it('exit from iframe if any',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

//
const rightButton = '.ebyHomePanel.joinTheMovementPanel .over_text.middle_align a';
const leftButton = '.ebyHomePanel.shopAllUnderwearPanel  .over_text.middle_align a';
const giveSubscriptionTry = 'a.textLink.textLinkBtn.btn.hidden_cause';

describe('1st. hero image', () => {

  it(rightButton,() => {
    cy.get(rightButton).click()
  });

  it('back to homepage',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

describe('2nd Hero image', () => {

  it(leftButton ,() => {
    cy.get(leftButton).click()
  });

  it('back to homepage',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

describe('Give Subscription a try', () => {

  it(giveSubscriptionTry,() => {
    cy.get(giveSubscriptionTry).click()
  });
  it('back to homepage',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});

const bennerLayout = '.banner_section.layoutTwo.desktop-only .over_text a';

describe('Bottom Banner image', () => {

  it(bennerLayout,() => {
    cy.get(bennerLayout).click({ force: true })
  });

  it('back to homepage',() => {
    cy.visit('/');
      // getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click();
  });
});


// const paginationHeight = 667
// const totalHeight = 41; //  *********** max 41
// 
// let skus = []
// const pdpName = []
// 
// let pdps = [6975557566508,6975567495212,5304592629804,5297140596780,6773504376876,5308088614956,5304595480620,5327776809004,6664648458284,6591621234732,6944000180268,6793219244076,6793220358188,6793262530604,6773511553068,6773513846828,6935334748204,5408793952300,5408808173612,5408810795052,6916255252524,6916254203948,6916252074028,6916254105644,6915712974892,6935428366380,6916254433324,6916252270636,6935429677100,6841303597100,6841295994924,6841305530412,6793224224812,6793227960364,6793230614572,6916251549740,6916255350828,6916252631084,6916251287596,6916255088684,6916251779116,6569006432300,6598944227372,6670188806188,6591645024300,6543109226540,6785782743084,6673054728236,6673058398252,6673051189292,5304595382316,5304605671468,6773499789356,6773500084268,6598933282860,6598934724652,6598929580076,6598936985644,5408808501292,5441467547692,5408803061804,5304863096876,6673032937516,6673036607532,6673029169196,5408840482860,6793270558764,6793276096556,6793267413036,6773510733868,5320532590636,5304608817196,5304598691884,5327841558572,5327529902124,6599108558892,6599105839148,6599107313708,6599097778220,6599095910444,6599094173740,6793199419436,6793212493868,6793215901740,6793216360492,6793217277996,6773865119788,6543108898860,6773865742380,6773864955948,5308118171692,6785213333548,6758604996652,6758609748012,6673083629612,5304606720044,5307437383724,5320343945260,5304568414252,6599017005100,6599021101100,6935320494124,5304608555052,5307181826092,6793221144620,6793218097196,6916253319212,6673038835756,6673040998444,6773501886508,6773503164460,5403032256556,5306929315884,5305242845228,6626878586924,5408806731820,5408843104300,5437828169772,6627392225324,5327905685548,5328034791468,5320544714796,5307109408812,5304600690732,5408843169836,5308108374060,5437827940396,6591644729388,6598918438956,5306945962028,5308101623852,5304863359020,5307166359596,5307239333932,5307230650412,5307244445740,5437827776556,6552036835372,6552037261356,5408810991660,5441467842604,5307242381356,6921319514156]
// 
// describe('Data is in console log', () => {
//     it(`It loops 40 times`, () => {
//         let h = 2;
//         while( h < 1){ 
//             cy.wait(1000);
//             cy.scrollTo(0, paginationHeight * h);
//             expect(h, 'to be less than', totalHeight);
//             h++;
//         }
//     })
// 
//     it('copy and past data if prefer', () => {
// 
//         console.clear()
//         console.log('%c ---------Copy This Data---------', 'background: #023535; color: #fff')
//         console.log('-------------------------------------')
//         console.log('%c' + JSON.stringify(skus),'background: #023535; color: #fff')
//         console.log('%c' + JSON.stringify(pdpName),'background: #023535; color: #fff')
//         console.log('-------------------------------------')
//         console.log(' /\_/\ ')
//         console.log('( o.o ) ')
//         console.log(' > ^ <')    
//     })
// })
// 
// const quickAddSelectr = '.pcsContainer .quickadd.carousel-item .quick_btn .productQuickAdd button.btnProductQuickAdd';
// const selectorSize = '.swatch.clearfix .swatch-element.sm'
// const wrapper = '.ebyGuideChartWrapper.selection-wrapper'
// describe('QuickAdd homepage', () => {
// 
//   it(`Click on quick add`, { scrollBehavior: false } ,() => {
//         
//       cy.scrollTo(0, 2700);
//       cy.wait(1000);
//       cy.get(quickAddSelectr).each( (el,i) => {
//           // cy.scrollTo(0, 0);
//           // cy.scrollTo(0, 50);
//           cy.wrap(el).click({ force: true });
//           cy.get(wrapper).find(selectorSize).then( ($size) => {
//           
//           if($size.hasClass('soldout')){
//               cy.get('.colz_pop_qa.size_guid_qa').click()
//               expect('available').to.equal('soldout')
//           } 
//           else if($size.hasClass('available')) {
//               cy.wrap($size).click()
//               cy.get(`.btn.btnAddToCart`).click({ force: true })
//           } else {
//               throw new Error('did not see available or solout ')
//           }
//         });
//       });
//       // grab the swatch lg or w.e
//       cy.wait(3000);
//       cy.get(selectorSize).each( ($size, j) => {
//           
//           if($size.hasClass('soldout')){
//               cy.get('.colz_pop_qa.size_guid_qa').click()
//               expect('available').to.equal('soldout')
//           } 
//           else if($size.hasClass('available')) {
//               cy.wrap($size).click()
//               cy.get(`.btn.btnAddToCart`).click({ force: true })
//           } else {
//               throw new Error('did not see available or solout ')
//           }
//       });
//   });
// });
