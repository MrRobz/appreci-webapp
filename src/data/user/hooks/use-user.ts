import { useQuery } from '@tanstack/react-query'
import { UserApi } from '../api'

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => UserApi.getUser(),
  })
}
