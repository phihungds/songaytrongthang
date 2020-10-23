function tinhSoNgay() {
    let month = Number(document.getElementById("month").value)
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("hienthi").innerText = "Tháng " + month +" có 31 ngày."
        break
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("hienthi").innerText = "Tháng " + month + " có 30 ngày."
        break
        case 2:
            document.getElementById("hienthi").innerText = "Tháng 2 có 28 ngày (29 ngày nếu là năm nhuận)."
        break
        default:
            document.getElementById("hienthi").innerText = "Không tồn tại tháng này."
            
    }
}