import './../css/tooltip.css'
import './../css/nav.css'
import './../css/app.css'

import { tooltip } from './tooltip'
import { nav } from './nav'
import { themeToggler } from './themeToggler'
import { Dropdown } from './Dropdown'

tooltip({ theme: 'dark' })
nav()
themeToggler()

new Dropdown()