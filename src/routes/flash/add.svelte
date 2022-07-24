<script>
import Card from "$lib/cards/Card.svelte";
import { fade } from "svelte/transition";

    let original, translation, image;
    let phrase = {original, translation, image};
    $: phrase = {original, translation, image}
</script>


<div transition:fade class="w-full flex flex-col justify-center items-center p-4">
    <Card phrase={phrase} onComplete={()=>{}}/>
        <div class="w-96 p-3">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="english">
                  Phrase in English
                </label>
                <input bind:value={translation} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="english" type="text" placeholder="Horse">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="portuguese">
                  Phrase in Portuguese
                </label>
                <input bind:value={ original} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="portuguese" type="text" placeholder="Cavalo">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Image URL
                </label>
                <input bind:value={image} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="http://www.image.img">
              </div>
              <div class="flex items-center justify-center w-full">
                <button class="bg-rose-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>

</div>
