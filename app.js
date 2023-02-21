var calculateBtn = document.querySelector('#calculate')
function calculateTip() {
    var tongBill = document.querySelector('#billamt').value
   
    var haiLongVaTip = document.querySelector('#serviceQual').value
    var soNguoiShare = document.querySelector('#peopleamt').value
    
    // validation
    if(tongBill === "" || haiLongVaTip == 0 ) {
        alert('vui lòng chọn giá trị')
        return
    }
    // Kiểm tra có nhập vào số người share hay không
    if(soNguoiShare === "" || soNguoiShare <= 1) {
        soNguoiShare = 1;
       document.querySelector('#each').style.display = "none"
    } else {
        document.querySelector('#each').style.display = "block"
    }

    // tính toán 
    var tongTip = (tongBill*haiLongVaTip) / soNguoiShare
    // làm tròn đến 2 chữ số
    tongTip = Math.round (tongTip*100)/100
    // Đảm bảo lúc nào cũng có 2 chữ số ở hàng thập phân
    tongTip = tongTip.toFixed(2)
    // hiển thị div tiền tiếp
    document.querySelector('#totalTip').style.display = 'block'
    document.querySelector('#tip').innerHTML = tongTip
}

//
document.querySelector('#totalTip').style.display = 'none'
document.querySelector('#each').style.display = 'none'

calculateBtn.onclick = function () {
    calculateTip()
}
