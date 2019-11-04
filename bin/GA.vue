<template></template>

<script>
export default {
  name: 'GA',
  data () {
    return {
      GAID
    }
  },
  mounted () {
    const GAID = this.GAID || this.$themeConfig.GAID
    if (GAID !== undefined) {
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