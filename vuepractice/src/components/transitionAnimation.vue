<link href="httpscdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
<!-- <script src="httpscdn.bootcss.com/vue/2.5.9/vue.min.js"></script> -->
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script> -->
<template>
  <div>
    <remote-js src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></remote-js>
    <div id="example-4">
      <button @click="show = !show">
        Toggle
      </button>
      <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
        <p v-if="show">
          Demo
        </p>
      </transition>
    </div>
    <div>
      <transition>
        <table v-if="items.length > 0">
        </table>
        <p v-else>Sorry, no items found.</p>
      </transition>
    </div>
    <div>
      <transition>
        <button v-if="isEditing" key="save">
          Save
        </button>
        <button v-else key="edit">
          Edit
        </button>
      </transition>
    </div>
    <div>
      <transition>
        <button v-bind:key="isEditing">
          {{ isEditing ? 'Save' : 'Edit' }}
        </button>
      </transition>
    </div> -->
  </div>
</template>
<script>
export default {

  components: {
    'remote-js': {
      render(createElement) {
        return createElement('script', { attrs: { type: 'text/javascript', src: this.src } });
      },
      props: {
        src: { type: String, required: true },
      },
    },
  },

  data() {
    return {
      show: false,
      isEditing: 'true',
      items: [],
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0 el.style.transformOrigin = 'left'
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function(el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, { rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0 }, { complete: done })
    }
  }


}

</script>
