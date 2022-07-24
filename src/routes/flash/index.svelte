<script>
	 import { DoubleBounce } from 'svelte-loading-spinners'
	import Card from '$lib/cards/Card.svelte';
	import { cards, fetchCards } from '../../stores/cards';
	
	
	console.log($cards)
	let currentCard = 0
	

	const cycleCard = () => currentCard >= $cards.length -1 ? currentCard = 0 : currentCard = ++currentCard
</script>

<div class="min-h-screen flex flex-col py-16 ">
  
	<div class="h-full flex flex-col justify-center items-center">
		{#await fetchCards()}
		<div class="fixed top-1/2">
			<DoubleBounce size="60" color="#FF3E00" unit="px" duration="1s"/>
		</div>
		{:then res} 
			<Card  phrase={$cards[currentCard]} onComplete={cycleCard}/>
		{/await}
        
    </div>
	
</div>