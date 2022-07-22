<script>
import { fade } from "svelte/transition";


   
    export let phrase;
    export let onComplete;
    let show = false;

    const showTranslation = () => {
        show = true
    }
    const transitionCard = () => {
        show = false
        onComplete()
    }
</script>
<div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">  
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
          {#if show}
          <button on:click={transitionCard} class="group">
            <div class="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={phrase.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <div class={`${show ? "bg-blue-400" : "bg-yellow-200"} rounded-b-lg h-24 flex flex-col justify-center items-center`}>
                <h3 class=" text-2xl font-extrabold text-gray-700">{phrase.original}</h3>
                {#if show}
                <h3 class=" text-xl  text-gray-200">{phrase.translation}</h3>
                {/if}
            </div>
            </button>
          {:else}
          <button in:fade="{{duration: 1000}}" on:click={showTranslation} class="group">
            <div class="w-full aspect-w-5 aspect-h-5 bg-gray-200 rounded-t-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src={phrase.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <div class={`${show ? "bg-blue-400" : "bg-yellow-200"} rounded-b-lg h-24 flex flex-col justify-center items-center`}>
                <h3 class=" text-2xl font-extrabold text-gray-700">{phrase.original}</h3>
                {#if show}
                <h3 class=" text-xl  text-gray-200">{phrase.translation}</h3>
                {/if}
            </div>
            </button>
          {/if}
        </div>
    </div>
  </div>
  