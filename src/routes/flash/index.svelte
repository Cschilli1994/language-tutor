<script>
	 import { DoubleBounce } from 'svelte-loading-spinners'
	import Card from '$lib/cards/Card.svelte';
	import CategorySelect from '$lib/vocab-management/CategorySelect.svelte';
	import { cards, fetchCards } from '../../stores/cards';

	console.log($cards)
	let currentCard = 0
	let category = null;

	const cycleCard = () => currentCard >= $cards.length -1 ? currentCard = 0 : currentCard = ++currentCard
</script>

<div class="min-h-screen flex flex-col py-16 justify-center items-center relative ">
	<div class="w-80 py-6 absolute top-0 bg-white rounded-xl px-4 mt-6"><CategorySelect on:selectCategory={(e) => category = e.detail.id} /></div>
	<div class="h-full flex flex-col justify-center items-center">
		{#await fetchCards(category)}
		<div class="fixed top-1/2">
			<DoubleBounce size="60" color="#FF3E00" unit="px" duration="1s"/>
		</div>
		{:then res} 
			<Card  phrase={$cards[currentCard]} onComplete={cycleCard}/>
		{/await}
        
    </div>
	
</div>