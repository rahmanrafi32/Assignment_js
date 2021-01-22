function kilometerToMeter(n) {
    if (n >= 0) {
        var meter = n * 1000;
    }
    else {
        return "Please enter a valid input.";
    }
    return meter;
}

function budgetCalculator(x, y, z) {
    var n;
    if (n < 0) {
        return "Items can't be write in negative number."

    }

    else {
        var watch = 50;
        var phone = 100;
        var laptop = 500;
        var budget = (x * watch) + (y * phone) + (z * laptop);
    }
    return budget;
}

function hotelCost(n) {
    var cost = 0;
    if (n > 0) {

        if (n <= 10) {
            cost = n * 100;
        } else if (n <= 20) {
            var firstTenDays = 10 * 100;
            var extraDays = n - 10;
            var secondTenDays = extraDays * 80;
            cost = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            extraDays = n - 20;
            var lastDays = extraDays * 50;
            cost = firstTenDays + secondTenDays + lastDays;
        }

    }
    else {
        return "Please enter valid input!"
    }
    return cost;
}

function megaFriend(n) {
    if (n < 0) {
        return "Please enter valid input"
    }
    else {
        var i, largest = x[0];
        for (i = 0; i < x.length; i++) {
            temp = x[i];
            if (temp.length > largest.length) {
                largest = temp;
            }
        }
    }
    return largest
}
var x = ["rafi", "rafsan", "ratul", "ridhayy", "ramisha", "hia", "dhrubo", "kabbo", 'ddhjdhdhfhfffufffuyfffryf'];

var result = megaFriend(x);
console.log(result);