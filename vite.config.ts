import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: If you deploy to https://<USERNAME>.github.io/, keep base as '/'.
  // If you deploy to https://<USERNAME>.github.io/<REPO_NAME>/, change base to '/<REPO_NAME>/'.
  base: '/',
})