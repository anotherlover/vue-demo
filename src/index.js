import CountTo from './Vue-CountTo.vue';
export default CountTo;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('count-to', CountTo);
}
