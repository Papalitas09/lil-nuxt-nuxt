<template>
    <layout>
        <div class="w-full h-24 bg-[rgb(59,123,132)]"></div>
            <div class="w-full h-fit  flex flex-col items-center gap-2 p-10">
                <another-green-buttons :links="navItems"/>
                <slot />
            </div>
    </layout>
</template>

<script setup lang="ts">
import layout from '~/layout/layout.vue';
const navItems = [
    {label: 'Floor Plan', page: 'floorplan'},
    {label: 'Stock Unit', page: 'stockunitparent'},
    {label: 'Technical Spesification', extraclass: 'w-54'},
    {label: 'About Us', page: 'hr'}
]
</script>