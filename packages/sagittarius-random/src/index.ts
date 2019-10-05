import { TRandom } from '../@types'

const random: TRandom = (min, max) => Math.random() * (max - min) + min

export default random
