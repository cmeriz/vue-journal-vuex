<template>
    <svg
        :width="width"
        :height="height"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <use :href="`feather-sprite.svg#${icon}`" />
    </svg>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            default: 24,
        },
        height: {
            type: Number,
            default: 24,
        },
    },
};
</script>
