import { useRouter, useRoute } from 'vue-router'

export function useRouterOrRoute() {
  const router = useRouter()
  const route = useRoute()
  return {
    route,
    router
  }
}
