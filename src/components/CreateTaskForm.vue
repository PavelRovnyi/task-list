<template>
  <div class="flex items-center justify-between mb-2">
    <input
      type="text"
      name="search"
      id="search"
      autocomplete="off"
      placeholder="Enter task name to search"
      class="mr-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-teal-500 block w-full rounded-md sm:text-sm invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
    /><button
      title="Add"
      class=""
    >
      <svg
        class="svg-inline--fa fa-circle-plus fa-xl"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="circle-plus"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          class=""
          fill="currentColor"
          d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts"></script>
