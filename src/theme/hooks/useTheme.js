import { Font } from '../Font'
import { Variables } from '../Variables'
import { Layout } from '../Layout'
import { Images } from '../Images'

export const useTheme = () => {
  return {
    Font: Font,
    Layout: Layout(),
    Colors: Variables().colors,
    Images: Images()
  }
}
