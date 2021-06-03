document.querySelector(".menu_boutton").addEventListener("click",()=>{
	console.log("aaaaa")
	if(document.querySelector(".menu_mobile").style.display=="flex"){
	document.querySelector(".menu_mobile").style.display="none"}
	else document.querySelector(".menu_mobile").style.display="flex"

})

let my_products=[
	{
		prix: 10, nom: "chemise"
	},
	{
		prix: 20, nom: "Veste"
	},
	{
		prix: 30, nom: "chaussure"
	},
	{
		prix: 40, nom: "chaussette"
	},
	{
		prix: 50, nom: "gilet"
	},
	{
		prix: 60, nom: "shampoing"
	},
]

let vm=Vue.createApp(
	{
		data(){
			return{ 
				menu1 : "first item",
				menu2 : "second item",
				menu3 : "third item",
				menu4 : "fourth item",
				produits : my_products
			}
		}
	}
)

vm.component("produit", 
	{
		props:["nom", "prix"],
		template:`<div class="element">
		<div><img src="https://source.unsplash.com/random/30x30" alt="img">
		<b> {{prix}} </b></div>
		
		<div><h2>{{nom}}</h2>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloribus quia rerum maiores, dolorum enim.</p></div>
		
	</div>`
	}
)

vm.mount("#conteneur")