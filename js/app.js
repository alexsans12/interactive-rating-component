/*

You selected
<!-- Add rating here -->
out of 5 Thank you! We appreciate you taking the time to give a rating.
If you ever need more support, don’t hesitate to get in touch!

*/
const form = document.querySelector('#form-rate');
form.addEventListener('submit', checkRate);

function checkRate(evt) {
    evt.preventDefault();
    
    const radioBtn = document.querySelector('.card-rate__radio:checked');

    if(radioBtn) {
        const cardRate = document.querySelector('.card-rate');
        cardRate.classList.add('animation-out');

        const card = document.createElement('article');
        card.classList.add('card-rate','card-rate--center');

        card.innerHTML = `
            <header class="card-rate__header">
                <img class="card-rate__header-img" src="./images/illustration-thank-you.svg" alt="star icon"/>
                <label class="card_rate__badge">You selected ${radioBtn.value} out of 5</label>
                <h2 class="card-rate__title">Thank you!</h2>
            </header>
            <main class="card-rate__main">
                <p class="card-rate__paragraph">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </main>
        `;

        
        setTimeout(() => {
            document.querySelector('body').appendChild(card);
            card.classList.add('animation-in');
            cardRate.remove();
        }, 100);
    }
}