<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Julio</span>
            <span class="mx-2 fs-4 fw-light">2021, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <FeatherIcon icon="trash-2" :height="16" />
            </button>

            <button class="btn btn-primary">
                Subir foto
                <FeatherIcon icon="upload" :height="16" />
            </button>
        </div>
    </div>
    <hr />
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedió hoy?"></textarea>
    </div>
    <Fab icon="save" />
    <img
        src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
        alt="entry-picture"
        class="img-thumbnail"
    />
</template>

<script>
import FeatherIcon from "@/components/FeatherIcon.vue";
import { defineAsyncComponent } from "vue";
export default {
    components: {
        FeatherIcon,
        Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
    },
};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
        outline: none;
    }
}

img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px, 5px 10px rgba(#000000, 0.2);
}
</style>
