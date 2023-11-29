// Exercise #2: Promotion Conditions

// Start coding here
let memberLevel = "Gold";
let lastMonthPaid = 4001;

let lastMonthPaidMoreThan4000 = lastMonthPaid > 4000;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = memberLevel == "Platinum";

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    !hasBoughtProductFromITCategory &&
    !hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);
