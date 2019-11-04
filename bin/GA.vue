<template></template>

<script>
export default {
  name: 'GA',
<<<<<<< HEAD
  data () {
    return {
      GAID
    }
  },
  mounted () {
    const GAID = this.GAID || this.$themeConfig.GAID
    if (GAID !== undefined) {
=======
  mounted () {
    const GAID = this.$themeConfig.GAID
    if (GAID) {
>>>>>>> d5a6f9a7d4f29d87168723aad0dde8004f09ef50
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GAID}`
      document.body.append(script)
      script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', `${GAID}`);
      }
    }
  }
}
</script>