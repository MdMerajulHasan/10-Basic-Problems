let input9 = 5;

function FindPalindrome(input){
    if(input>0){
        let product = 1;
        for(let i = input; i >=2; i-- ){
            product = product * i;
        }
        return product;
    }
}

const output9 = FindPalindrome(input9);
console.log(output9);