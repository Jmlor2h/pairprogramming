var a = ['a', 'e', 'i', 'o', 'u'];
function vowelChecker(x){
    if (x.startsWith(a[0])){
        return true
    } else if (x.startsWith(a[1])){
        return true
    } else if (x.startsWith(a[2])){
        return true
    } else if (x.startsWith(a[3])){
        return true
    } else if (x.startsWith(a[4])){
        return true
    } else {
        return false
    }
    }


console.log(vowelChecker('a'))