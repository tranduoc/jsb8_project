let hocVien = {
  hoten: "An",
  lop: "LT1 k8",
  laythongtin: function () {
    // let _bind = this;
    function hienthithongtin() {
      console.log(`name: ${this.hoten} - class: ${this.lop}`);
    }
    let boun = hienthithongtin();
    let unboun = boun.bind(hocVien);
    unboun();
  },
};

let hocVien2 = {
  hoten: "Anh",
  lop: "LT1 k8 2020",
  laythongtin2: function () {
    // let _bind = this;
    const hienthithongtin = () => {
      console.log(`name: ${this.hoten} - class: ${this.lop}`);
    };
    hienthithongtin();
    // let unboun = boun.bind(hocVien);
    // unboun();
  },
};

// hocVien.laythongtin()-------------------------;
hocVien2.laythongtin2();

const sum = (a, b, c) => {
  let total = a + b + c;
  console.log(total);
};
sum(1, 2, 3);
// ----------resparam
const tong1 = (...tong) => {
  let total = 0;

  tong.forEach((item) => {
    total += item;
  });
  return total;
};

console.log(tong1(1, 2, 3, 900));

const tong2 = (...number) => {
  return number.reduce((x, y) => {
    return x + y;
  }, 0);
};

console.log(tong2(456, 4));

const tong3 = (...number) => {
  return number.reduce((x, y) => {
    return x + y;
  });
};

console.log(tong2(456, 6));
// -----------------------

// default params

const getInfo = (name = "an") => {
  console.log(name);
};
