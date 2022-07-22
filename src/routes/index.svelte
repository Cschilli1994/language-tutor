<script>
	
	import Card from '$lib/cards/Card.svelte';
	
	
	let phrase = {
		image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
		original: "Cavalo",
		translation: "Horse"
	}
	const phrase2 = {
		image: "https://media.istockphoto.com/photos/sloth-in-costa-rica-picture-id1068395160?k=20&m=1068395160&s=612x612&w=0&h=vn2GlQ1e9DwzYMra3tZ8adG_vA7IpZ3MLGdBhYuDQsU=",
		original: "Preguiça",
		translation: "Sloth"
	}
	let selectedPhrase = 0
	let phrases = [
		{
		image: 'https://chriskresser.com/wp-content/uploads/raw-milk-1-e1563894986431.jpg',
		original: 'Leite',
		translation: 'Milk'
	},
	{
		image: "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
		original: "Cavalo",
		translation: "Horse"
	},
	{
		image: "https://media.istockphoto.com/photos/sloth-in-costa-rica-picture-id1068395160?k=20&m=1068395160&s=612x612&w=0&h=vn2GlQ1e9DwzYMra3tZ8adG_vA7IpZ3MLGdBhYuDQsU=",
		original: "Preguiça",
		translation: "Sloth"
	}
	]
	const cycleCard = () => selectedPhrase >= phrases.length -1 ? selectedPhrase = 0 : selectedPhrase = ++selectedPhrase
</script>

<Card  phrase={phrases[selectedPhrase]} onComplete={cycleCard}/>
