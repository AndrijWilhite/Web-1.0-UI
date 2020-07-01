import { UserCard } from './components/userCard/userCard.js'
import { Button } from './components/button/button.js'
import { List } from './components/list/list.js'
import { Progress } from './components/progress/progress.js'
import { Form } from './components/form/form.js'
import { Code } from './components/code/code.js'
import { Big } from './components/big/big.js'
import { TeleType } from './components/tt/tt.js'
import { Marquee } from './components/marquee/marquee.js'
import { FlashBanner } from './components/flashBanner/flashBanner.js'
import { SlowImage } from './components/slowImage/slowImage.js'
import { Scrollable } from './components/scrollable/scrollable.js'
import { ShowPage } from './components/showPage/showPage.js'
import { LinkToUs } from './components/linkToUs/linkToUs.js'

window.customElements.define('user-card', UserCard)
window.customElements.define('wo-btn', Button)
window.customElements.define('wo-list', List)
window.customElements.define('wo-progress', Progress)
window.customElements.define('wo-form', Form)
window.customElements.define('wo-code', Code)
window.customElements.define('wo-tt', TeleType)
window.customElements.define('wo-marquee', Marquee)
window.customElements.define('wo-flash', FlashBanner)
window.customElements.define('wo-img', SlowImage)

// better name for these?
window.customElements.define('wo-page', ShowPage)
window.customElements.define('wo-scrollbar', Scrollable)
window.customElements.define('wo-big', Big)
window.customElements.define('wo-linkus', LinkToUs)
