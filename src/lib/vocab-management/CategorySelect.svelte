<script>
import { fetchCategories, categories } from '../../stores/categories';

    import { createEventDispatcher } from 'svelte';
import AddCategory from './AddCategory.svelte';
    
    const dispatch = createEventDispatcher();

    let show = false;
    let selectedIndex = null;
    
  
    function selectCategory(index) {
        selectedIndex = index;
        show = false;
        dispatch("selectCategory", $categories[index])
    }
</script>


<div class="py-2">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label id="listbox-label" class="block text-gray-700 text-sm font-bold mb-2 flex justify-between"> Category <AddCategory /> </label>
    <div class="mt-1 relative">
      <button on:click={()=>show = !show} type="button" class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
        <span class="flex items-center">
          <span class={`block truncate capitalize ${selectedIndex === null && "text-gray-400"} font-normal text-base`}>{selectedIndex !== null ? $categories[selectedIndex].name: "Select Category"} </span>
        </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      {#await fetchCategories()}
        
      {:then res} 
      {#if show}
      <ul class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
         
          {#each $categories as category, index}
              <li on:click={()=>selectCategory(index)} class="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-slate-200" id="listbox-option-0" role="option">
                  <div class="flex items-center">
                      <span class={`${index === selectedIndex ? "font-semibold":"font-normal"}  block truncate capitalize`}> {category.name} </span>
                  </div>
              {#if index === selectedIndex}
                  <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                  </span>
              {/if}
              </li>
          {/each}
      </ul>
    {/if}
      {/await}
    </div>
  </div>