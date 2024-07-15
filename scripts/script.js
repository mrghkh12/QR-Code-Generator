const $ = document

const inputBox = $.querySelector('.inputBox')
const imgBox = $.querySelector('#imgBox')
const QR_ImageElem = $.querySelector('#QR-Image')
const generatorBtn = $.querySelector('.generatorBtn')

function generateQrCodeImg() {
    if(inputBox.value.length > 0){
        QR_ImageElem.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`
        imgBox.classList.add('show-Qr-img')
    }else{
        inputBox.classList.add('emptyInputError')
        inputBox.addEventListener("animationend" , () => inputBox.classList.remove('emptyInputError'))
    }
}

generatorBtn.addEventListener('click', generateQrCodeImg)