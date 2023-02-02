const form = document.querySelector('#form-rate');
form.addEventListener('submit', checkRate);

const cardRate = document.querySelector('.card-rate');
const cardTy = document.querySelector('.card-rate--center');


function checkRate(evt) {
    evt.preventDefault();
    
    const radioBtn = document.querySelector('.card-rate__radio:checked');

    if(radioBtn) {
        cardRate.classList.add('hidden');

        document.querySelector('.card_rate__badge').textContent = `You selected ${radioBtn.value} out 5`;

        cardTy.classList.remove('hidden');
        cardTy.classList.add('animation-in');
    }
}