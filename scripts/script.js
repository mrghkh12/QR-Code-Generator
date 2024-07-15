const $ = document

const inputBox = $.querySelector('.inputBox')
const imgBox = $.querySelector('#imgBox')
const QR_ImageElem = $.querySelector('#QR-Image')
const generatorBtn = $.querySelector('.generatorBtn')

function generateQrCodeImg() {
    QR_ImageElem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`
    imgBox.classList.add('show-Qr-img')
}

generatorBtn.addEventListener('click', generateQrCodeImg)