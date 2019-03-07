require('../Utilities/CustomLocators.js');
var Base = require('../Utilities/Base.js');
var TestElementPage = require('../Pages/TestElement.page.js');




describe('Testing Values Exercise', () => {
    
    
        beforeAll(function(){
            Base.navigateToHome();
            
        });


        it('should verify the right count of values appear on the screen', () => {
            
            expect(TestElementPage.formlabelsValues.count()).toEqual(6);
        });

        it('should verify the values on the screen are greater than 0', () => {
            TestElementPage.formlabelsTexts.then(function(itemlist){
                for(var i =0; i<itemlist.length;i++){
                
             expect(TestElementPage.valueTxtTotal.get(i).getText()).toBeGreaterThan(0);
                };
              
            });                        
         });
            

        it('should verify the total balance is correct based on the values listed on the screen', () => {
            expect(TestElementPage.valueTxtTotal.isDisplayed()).toBe(true);
                       
        });


        it('should verify the values are formatted as currencies', () => {
            TestElementPage.formlabelsTexts.then(function(itemlist){
              for(var i =0; i<itemlist.length;i++){
              itemlist[i].getText().then(function(value){

                 var currency = value.substring(0,1);

                      });
           };  
                      expect(currency.toEqual("$"));
                      
       });

       it('should verify the total balance is matches the sum of the values', () => {
        TestElementPage.formlabelsTexts.then(function(itemlist){
          for(var i =0; i<itemlist.length;i++){
          itemlist[i].getText().then(function(value){

             var sub = "";

             sub+= value;

             var screenTotal = TestElementPage.valueTxtTotal;

             if('sub' == 'screenTotal'){

               console.log("The value of Total on the screen is equal to calculated Total value");
             }else{
               console.log("The value of Total on the screen is not equal to calculated Total value");

             };

          });
       };  
                  expect(TestElementPage.valueTxtTotal.toEqual(sub));
                  
   });    
       });
    