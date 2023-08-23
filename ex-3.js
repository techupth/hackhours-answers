let productSales = [
  { id: 1, menu: "ลาเต้เย็น", amount: 120, sales: 1200000.22 },
  { id: 2, menu: "คาปูชิโน่", amount: 1, sales: 32000 },
  { id: 3, menu: "ข้าวผัดอเมริกัน", amount: 20, sales: 1000 },
  { id: 4, menu: "แพนเค้กช็อกโกแลต", amount: 50, sales: 2000 },
  { id: 5, menu: "ไอศกรีมชาไทย", amount: 50, sales: 222200 },
  { id: 6, menu: "ลาเต้เย็น", amount: 120, sales: 12000 },
  { id: 7, menu: "คาปูชิโน่", amount: 1, sales: 32000 },
  { id: 8, menu: "ข้าวผัดอเมริกัน", amount: 20, sales: 1000 },
  { id: 9, menu: "แพนเค้กช็อกโกแลต", amount: 50, sales: 2000 },
  { id: 10, menu: "ไอศกรีมชาไทย", amount: 50, sales: 222200 },
  { id: 11, menu: "ลาเต้เย็น", amount: 120, sales: 12000 },
  { id: 12, menu: "คาปูชิโน่", amount: 1, sales: 32000 },
  { id: 13, menu: "ข้าวผัดอเมริกัน", amount: 20, sales: 1000 },
  { id: 14, menu: "แพนเค้กช็อกโกแลต", amount: 50, sales: 2000 },
  { id: 15, menu: "ไอศกรีมชาไทย", amount: 50, sales: 222200 },
];

function calculateTotalSales(items) {
  let total = 0;
  for (let item of items) {
    total = total + item.sales;
  }
  return total;
}

let total = calculateTotalSales(productSales);

console.log("Total sales: ", total);
