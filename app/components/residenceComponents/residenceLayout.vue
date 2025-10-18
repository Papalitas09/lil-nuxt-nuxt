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

const route = useRoute()
const viewName = route.params.viewName as string

const navItems = [
    {label: 'Floor Plan', page: `/residence/${viewName}/floorplan`, id: "Floor"}, //kaalu pengen passing  props, pake string yang `` sama ${namavar}
    {label: 'Stock Unit', page: `/residence/${viewName}/stockunit`},
    {label: 'Technical Spesification', page: `/residence/${viewName}/technical`, extraclass: 'w-54'},
    {label: 'About Us', page: ''}
]

</script>