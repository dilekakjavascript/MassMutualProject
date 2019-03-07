require("../Utilities/CustomLocators.js");



var TestElementPage = function(){
    this.formlabelsTexts= element.all(by.id('ibl_text'));
    this.formlabelsValues= element.all(by.id('ibl_val'));
    this.value1 = element(by.id('Ibl_val_1'));
    this.value2 = element(by.id('Ibl_val_2'));
    this.value3 = element(by.id('Ibl_val_3'));
    this.value4 = element(by.id('Ibl_val_4'));
    this.value5 = element(by.id('Ibl_val_5'));
    this.valueTotal = element(by.id('Ibl_ttl_val'));
    this.valueTxt1 = element(by.id('txt_val_1'));
    this.valueTxt2 = element(by.id('txt_val_2'));
    this.valueTxt4 = element(by.id('txt_val_4'));
    this.valueTxt5 = element(by.id('txt_val_5'));
    this.valueTxt6 = element(by.id('txt_val_6'));
    this.valueTxtTotal = element(by.id('txt_ttl_val'));

}

module.exports = new TestElementPage();