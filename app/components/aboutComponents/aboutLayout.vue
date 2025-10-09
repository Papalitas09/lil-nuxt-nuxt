<template>
<layout>
        <div class="min-h-screen overflow-x-hidden w-full">
            <div class="w-full h-24 bg-[rgb(59,123,132)]"></div>
            <div class="0 w-full h-full flex flex-col items-center ">
                <div class="h-screen w-8xl flex flex-col  items-center  py-5">
                    <another-green-buttons :links="navItems"/>
                    <slot />
                </div>
            </div>
        </div>
    </layout>
</template>

<script setup lang="ts">
import layout from '~/layout/layout.vue';

const navItems = [
    {label: "About Us", page: "aboutinfo"},
    {label: "The Visions and missions", page: "visimissions", extraclass: "w-84"},
    {label: "Project", page: "ef"},
]
</script>