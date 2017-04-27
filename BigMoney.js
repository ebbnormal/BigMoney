var BigMoney = class BigMoney {
   const MAX_POSITIVE_FLOAT_BITS = 64;
   constructor(number){
      this.numberArray = readNumberIntoArray(number);
   }
    
   readNumberIntoArray(number) {
      if numberCannotBeRepresentedPerfectlyAsFloat64(number) {

      } else {
          var buffer = new ArrayBuffer(8); 
      }
   }
    
    
  numberCannotBeRepresentedPerfectlyAsFloat64(number) {
    return numberIsDivisible64TimesBy2(number, 1);
  }
    
  numberIsDivisible63TimesBy2(number, count) {
      if (count == (MAX_POSITIVE_FLOAT_BITS + 1)) {
          return number > 0;
      }
      return numberIsDivisible63TimesBy2(number / 2, count +1 );
  }
   
    
   static multiply(a, b) {
     if a isinstanceof BigMoney && b isinstanceof BigMoney {
   
   
     } else {
       return;
     }
   }
}
