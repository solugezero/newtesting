<template>
    <div class="ui-button" :class="neonButtonClass" :style="{...getButtonStyles}">
        <slot v-if="icon" name="icon" />
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    neon?: boolean,
    width?: string,
    height?: string,
    background?: string,
    borderRadius?: string,
    border?: string,
    color?: string,
    icon?: boolean,
    direction?: string,
    padding?: string,
    gap?: string,
    iconOptions?: object,
    fontSize?: string,
    fontWeight?: string,
}

const props = withDefaults(defineProps<Props>(), {
  direction: "column",
  color: "#000",
  background: "#6FEB42",
  borderRadius: "12px",
  width: "fit-content",
  height: "fit-content",
  border: "1px solid #6FEB42",
  padding: "10px 20px",
  gap: "6px",
  fontSize: "16px",
  fontWeight: "400",
  neon: false
})

const getButtonStyles = computed((): any => {
    const {width, height, background, borderRadius, border, color, direction, padding, gap, fontSize, fontWeight} = props;
    return {
        width,
        height,
        background,
        "border-radius": borderRadius,
        border,
        color,
        "flex-direction": direction,
        padding,
        gap,
        "font-size": fontSize,
        "font-weight": fontWeight
    }
})

const neonButtonClass = computed((): any => {
    const {neon} = props;
    if(neon) return "neon"
})
</script>

<style scoped lang="scss">
.ui-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    
}

.neon {
    box-shadow: 0px 15px 45px rgba(111, 235, 66, 0.25), 0px 5px 10px rgba(111, 235, 66, 0.15), 0px 2px 2px rgba(111, 235, 66, 0.1);
}
</style>