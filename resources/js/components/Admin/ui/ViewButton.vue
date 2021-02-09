<template>
<div class="btn-wrapper" v-if="haveRight(name)">
    <button :class="classes" @click="click(data)" title="Update">
        <span>
            <i class="fa fa-eye" aria-hidden="true"></i>
        </span>
        &nbsp;
        {{ __('message.view') }}
    </button>
</div>
</template>
<script>
export default {
    props: {
        data: {},
        name: {},
        click: {
            type: Function,
            default: () => {
                return 'edit-user/' + this.data
            }
        },
        classes: {
            type: Object,
            default: () => ({
                'btn': true,
                'btn-primary': true,
                'btn-sm': true,
            }),
        },
    }
}
</script>
