import { TRandom } from '../@types'

const random: TRandom = (min, max) =>
  Math.ceil(Math.random() * (max - min) + min)

export default random
