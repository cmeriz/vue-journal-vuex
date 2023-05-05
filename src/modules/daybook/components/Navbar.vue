<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img
                src="@/assets/logo.png"
                alt="Vue Logo"
                height="24"
                class="d-inline-block align-text-top mx-2"
            />
            Daybook
        </a>
        <div class="d-flex">
            <button class="btn btn-outline-info">
                <FeatherIcon icon="log-out" :width="16" :height="16" />
            </button>
        </div>
    </nav>
</template>

<script>
import FeatherIcon from "@/components/FeatherIcon.vue";

export default {
    components: { FeatherIcon },
};
</script>
