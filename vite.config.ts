import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        open: true,
    },
    plugins: [react()]
})
