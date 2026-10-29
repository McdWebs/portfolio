import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Serve the standalone sub-sites in /public (e.g. /halo/) the way Vercel does.
const subSites = ['fernwood', 'ledgerly', 'rook', 'mare', 'terra', 'wavelength']
const subSiteIndex = (): Plugin => ({
  name: 'sub-site-index',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = (req.url ?? '').split('?')[0]
      const name = subSites.find((s) => path === `/${s}` || path === `/${s}/`)
      if (name) req.url = `/${name}/index.html`
      next()
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), subSiteIndex()],
})
