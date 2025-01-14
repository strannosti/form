document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const order = document.getElementById("order").value;


    const message = `Заказ от: ${name}%0AТелефон: ${phone}%0AДетали заказа:%0A${order}`;

    const whatsappURL = `https://wa.me/996700480840?text=${message}`; 

   
    window.open(whatsappURL, "_blank");
  });
