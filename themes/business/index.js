import BusinessLayout from './layout'
import CONFIG from './config'

// 导出所有布局组件
export const LayoutIndex = props => <BusinessLayout layoutName="marketing" {...props} />
export const LayoutSearch = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutArchive = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutSlug = props => <BusinessLayout layoutName="blog" {...props} />
export const Layout404 = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutCategoryIndex = props => <BusinessLayout layoutName="blog" {...props} />
export const LayoutTagIndex = props => <BusinessLayout layoutName="blog" {...props} />

export { CONFIG }