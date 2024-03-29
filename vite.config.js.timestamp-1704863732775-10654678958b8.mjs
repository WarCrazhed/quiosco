// vite.config.js
import { defineConfig } from "file:///D:/Respaldo/cursos/Laravel/quiosco/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/Respaldo/cursos/Laravel/quiosco/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///D:/Respaldo/cursos/Laravel/quiosco/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel(["resources/js/app.jsx"]),
    react()
  ],
  server: {
    hmr: {
      host: "localhost"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxSZXNwYWxkb1xcXFxjdXJzb3NcXFxcTGFyYXZlbFxcXFxxdWlvc2NvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxSZXNwYWxkb1xcXFxjdXJzb3NcXFxcTGFyYXZlbFxcXFxxdWlvc2NvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9SZXNwYWxkby9jdXJzb3MvTGFyYXZlbC9xdWlvc2NvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKFsncmVzb3VyY2VzL2pzL2FwcC5qc3gnXSksXG4gICAgICAgIHJlYWN0KCksXG4gICAgXSxcblxuICAgIHNlcnZlcjoge1xuICAgICAgICBobXI6IHtcbiAgICAgICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnXG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1MsU0FBUyxvQkFBb0I7QUFDL1QsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sV0FBVztBQUVsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRLENBQUMsc0JBQXNCLENBQUM7QUFBQSxJQUNoQyxNQUFNO0FBQUEsRUFDVjtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0QsTUFBTTtBQUFBLElBQ1Y7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
