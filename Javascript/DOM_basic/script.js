// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau

// 1. Một tính năng mới vào gói Pro: '24/7 Phone support'
let li = document.createElement("li");
li.innerText = "24/7 Phone Support";
document.querySelector("#pro-plan ul").appendChild(li);
// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
let cards = document.querySelectorAll(".col-md-4");
let row = document.querySelector(".row");
row.innerHTML = "";
row.appendChild(cards[1]);
row.appendChild(cards[0]);
// 3. Trong gói Pro hãy cập nhật nút 'Get Started' hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ 'Buy Now'
let btnPro = document.querySelector("#pro-plan button");
btnPro.style.backgroundColor = "#0984e3";
btnPro.style.color = "#fff";
btnPro.innerText = "Buy Now";
// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
let basicPlanStorage = document.querySelector("#basic-plan .storage-amount");
let proPlanStorage = document.querySelector("#pro-plan .storage-amount");
basicPlanStorage.innerText *= 1.5;
proPlanStorage.innerText *= 1.25;
