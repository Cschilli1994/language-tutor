<script>
import { createCategory, fetchCategories } from "../../stores/categories";



    let show = false;
    let name = null;
    $: name = name?.toLowerCase()

    function handleSubmit() {
        createCategory({name}).then(async (res) => {
           await fetchCategories()
           show = false;
           name = null;
        })
    }
</script>
<button class="border-2 border-gray-700 hover:border-rose-400 drop-shadow w-5 h-5 text-gray-700 hover:text-rose-400 flex justify-center items-center font-semibold rounded-full" on:click|preventDefault={()=> show=!show}><span>+</span></button>
{#if show}
<div class="absolute">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="flex justify-center items-center w-full">
                  
                  <div class="mt-3 text-center">
                    <h3 class="text-lg leading-6 font-medium text-gray-900 text-2xl font-bold" id="modal-title">Add a new category</h3>
                    <div class="py-4 flex justify-center items-center">
                        <label class="block text-gray-700 text-md font-bold mb-2 flex justify-center items-center px-2" for="name">
                          Name
                        </label>
                        <input bind:value={name} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Food">
                      </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" on:click|preventDefault={()=>show = !show}>Cancel</button>
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-rose-400 text-base font-medium text-white hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" on:click|preventDefault={handleSubmit}>Add</button> 
              </div>
            </div>
          </div>
        </div>
        </div>
</div>
{/if}