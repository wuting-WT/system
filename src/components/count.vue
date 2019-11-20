
<script>

export default {
  name: 'Counter',
  template: `<div>{{count}}</div>`,
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
