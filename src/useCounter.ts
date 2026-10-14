// build 2bbf0bb17c
// (auto) 6e8384
import { ref } from 'vue';
export function useCounter(init = 0) {
  const n = ref(init);
  return { n, inc: () => n.value++, dec: () => n.value-- };
}
