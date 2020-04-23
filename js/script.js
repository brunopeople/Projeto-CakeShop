//mostrando o carrinho 

(function(){
	const cartInfo = document.getElementById("cart-info");
	const cart = document.getElementById("cart");

	cartInfo.addEventListener("click", function(){
		cart.classList.toggle("show-cart");

	});
})();

// adicionar itens ao carro

(function(){
	const cartBtn = document .querySelectorAll('.store-item-icon');

	cartBtn.forEach(function(btn){
		btn.addEventListener('click', function(event){
			console.log(event.target)

			if(event.target.parentElement.classList.contains
			  ("store-item-icon")){
			  let fullPath = 
			  event.target.parentElement.previousElementSibling.scr;
			  let pos = fullPath.indexOf("img") + 3;
			  let partPath = fullPath.slice(pos);

			  const item = {};
			  item.img = `img-cart{partPath}`;

			  let name = 
			  	event.target.parentElement.parentElement.nextElementSibling.
			  		children[0].children[0].textContent;

			  		item.name = name;

			  		let price = 
			  		event.target.parentElement.parentElement.nextElementSibling
			  		.children[0].children[1].textContent;

			  		let finalPrice = price.slice(1).trim();
			  		
			  		item.price = finalPrice;

			  		console.log(price);

			 		console.log(name);

			 		console.log(finalPrice);

			  console.log(item);

			  const cartItem = document.createElement('div');
			  	cartItem.classList.add(
			  		"cart-item", 
			  		"d-flex", 
			  		"justify-content-between",
			  		"text-capitalize",
			  		"my-3"
			  		);

			  	cartItem.innerHTML = `
			  		<img src="${item.img}" class="img-fluid
			  		roudnded-circle" id="item-img" alt="">
			  		<div class="item-text">

			  			<p id="cart-item-title" class="font-weight-bold mb-0">${item.price}</p>
			  			<span>$</span>
			  			<span id="cart-item-price" class="cart-item-price" 
			  			class="mb-0">10.99</span>
			  		</div>
			  		<a href="#" id='cart-item-remove' class="cart-item-remove">

			  		</a>
			  	</div>
			  	`;

			  	//Selecionar o item e adicionar o item para o carrinho
			  	const cart = document.getElementById("cart");
			  	const total = document.querySelectorAll(".cart-total-container");

			  	cart.insertBefore(cartItem, total);
			  	alert("Item adicionado ao carro");
			  	

			  


			  	
			}
		});
	});
	
	//Mostrar o preço total dos itens adicionandos ao carrinho
	function showTotals(){
	 
	 const total = [];
	 const items = document.querySelectorAll('.cart-item-price');

	 items.forEach(function(item){
	 	total.push(parseFloat(item.textContent));
	 });

	 const totalMoney = total.reduce(function(total, item){
	 	total += item;
	 	return total;
	 }, 0)

	 const finalMoney = totalMoney.toFixed(2);
	 console.log(totalMoney);

	 document.getElementById('cart-total').textContent = finalMoney;
	 document.querySelector('item-total').textContent = finalMoney;
	 document.getElementById('item-count').textContent = total.length;

    }

})();

