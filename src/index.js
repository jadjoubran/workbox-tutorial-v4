fetch("https://api.exchangeratesapi.io/latest")
  .then(response => response.json())
  .then(data => {
    const main = document.querySelector("#main");
    if (!data || !data.rates) {
      main.innerHTML = "There was an error. Please try again.";
      return false;
    }
    let html = "";

    for (const [currency, rate] of Object.entries(data.rates)) {
      html += `<article class="card card-currency">
            <div class="currency">${currency}</div>
            <div class="rate">${rate}</div>
        </article>`;
    }
    main.innerHTML = html;
  });
