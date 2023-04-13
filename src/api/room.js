
import { httpRequestGet } from '../utils/AxiosInstance'

export const FETCH_ROOM = {
  getRoomList: ({ ...data }) => httpRequestGet('/api/room/room/getRoomList', { params: { ...data } })
}
