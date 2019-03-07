var Base = function(){
    this.homeUrl= 'http://www.exercise1.com/values';
    
    this.navigateToHome = function(){
        browser.get(this.homeUrl);
    };



}
module.exports=new Base();