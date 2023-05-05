<template>
    <button class="btn btn-primary">
        <FeatherIcon :icon="icon" />
    </button>
</template>

<script>
import FeatherIcon from "@/components/FeatherIcon.vue";

export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
    },

    components: {
        FeatherIcon,
    },
};
</script>

<style lang="scss" scoped>
button {
    border-radius: 100%;
    bottom: 20px;
    height: 80px;
    position: fixed;
    right: 20px;
    width: 80px;
}
</style>
