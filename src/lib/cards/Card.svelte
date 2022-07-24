<script>
import { fade } from "svelte/transition";


   
    export let phrase;
    export let onComplete;
    export let original = "english";
    export let translation = "portuguese"
    let show = false;

    const showTranslation = () => {
        show = true
    }
    const transitionCard = () => {
        show = false
        onComplete()
    }
</script>

   
  
          {#if show}
          <button  on:click={transitionCard}   class="group w-80  rounded-3xl overflow-hidden shadow-lg border-white border-8">
            <div class="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={phrase.image} alt="" class="w-full h-96 object-center object-cover group-hover:opacity-75">
            </div>
            <div class={`bg-rose-400 rounded-b-lg h-24 flex flex-col justify-center items-center`}>
                <h3 class=" text-2xl font-extrabold text-gray-700">{phrase[translation]}</h3>
                {#if show}
                <h3 class=" text-xl  text-gray-200">{phrase[original]}</h3>
                {/if}
            </div>
            </button>
          {:else}
          <button   on:click={showTranslation} class="group w-80 rounded-3xl overflow-hidden shadow-lg border-white border-8">
            <div class="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={phrase.image} alt="" class="w-full  h-96 object-center object-cover group-hover:opacity-75">
            </div>
            <div class={`bg-amber-400 rounded-b-lg h-24 flex flex-col justify-center items-center`}>
                <h3 class=" text-2xl font-extrabold text-gray-700">{phrase[original]}</h3>
                {#if show}
                <h3 class=" text-xl  text-gray-200">{phrase.translation}</h3>
                {/if}
            </div>
            </button>
          {/if}
      
    
 
  