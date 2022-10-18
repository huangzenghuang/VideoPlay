<script lang="ts">
import { h, ref } from 'vue'
export default{
  setup() {
    const count = ref(0)
    function add(){
        count.value++
    }

    return () => h('div', { 
        innerHTML:count.value,
        onClick: add
    })
  }
}
</script>