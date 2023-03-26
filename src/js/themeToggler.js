import { Settings } from './Settings'

export function themeToggler() {
    const parent = document.querySelector('#theme-toggler')
    const settings = new Settings()

    if (settings.get('theme') === 'dark') {
        document.documentElement.classList.add('dark')
    }

    parent.addEventListener('click', toggleTheme)

    function toggleTheme(event) {
        const btn = event.target.closest('button')

        if (! btn) return

        if (btn.dataset.theme === 'dark') {
            settings.set('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            settings.remove('theme')
            document.documentElement.classList.remove('dark')
        }
    }
}
