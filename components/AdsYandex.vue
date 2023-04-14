<template>
  <div v-if="this.show" :id="'yandex_rtb_' + id"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    refresh: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      show: true,
      timerCount: 31,
    }
  },

  mounted() {
    this.showAd();
  },

  watch: {
    $route(to, from) {
      let changed = false
      if (to.path !== from.path) {
        changed = true
      }
      if (changed) {
        this.updateAd()
      }
    },
    timerCount: {  // рефрешить рекламу
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        } else {
          this.timerCount = 31
          if(this.refresh){
            this.updateAd()
          }
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  },

  methods: {

    updateAd() {
      if (this.isServer) {
        return
      }
      // Reset the INS element
      this.show = false
      // Show new ad on nextTick
      this.$nextTick(this.showAd)
    },

    showAd() {
      this.show = true
      this.$nextTick(() => {
        try {

          window.yaContextCb.push(()=>{
            Ya.Context.AdvManager.render({
              renderTo: 'yandex_rtb_' + this.id,
              blockId: this.id
            })
          })

        } catch (error) {
          console.error(error);
        }
      });
    }

  }

};
</script>

<style>

</style>
