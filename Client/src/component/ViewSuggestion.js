import React from 'react'

function ViewSuggestion() {
  return (
    <div className='pt-[90px] min-h-screen'>
      <div className='ml-[10%] mb-5'>
        <h1 className='text-2xl font-bold sm:text-lg sm:font-semibold'>View Suggestion</h1>
      </div>
      <div className='w-full flex justify-center'>
        <div class="h-56 w-96 relative cursor-pointer mb-5 group overflow-hidden">
          <div class="absolute inset-0 bg-red-200 rounded-lg shadow-2xl pt-5 pl-5">
            <h3 class="text-xl font-bold text-gray-900 sm:text-xl">Name</h3>
            <h3 class="text-base font-bold text-gray-900 sm:text-xl">Email</h3>
            <h3 class="text-base font-bold text-gray-900 sm:text-xl">Phone</h3>
            <p class="w-80 text-sm text-gray-500 pb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
              provident a, ipsa maiores deleniti consectetur nobis et eaque.
            </p>
            <div className='grid justify-end align-bottom'>
              <p class="text-sm font-medium text-gray-600">Published</p>
              <div class="flex items-center gap-1 text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p class="text-xs font-medium">48:32 minutes</p>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 transform group-hover:-translate-x-96 transition duration-700">
            <div class="h-full w-full bg-red-800 rounded-lg shadow-2xl flex justify-center items-center">
              <h3 class="text-xl font-bold text-gray-900 sm:text-xl">Name</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewSuggestion
