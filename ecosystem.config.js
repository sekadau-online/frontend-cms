module.exports = {
  apps: [
    {
      name: 'frontend-cms',
      error_file: "./frontend-cms/logs/web.err.log",
      out_file: "./frontend-cms/logs/web.out.log",
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      instances: 1, // Ubah ke dalam bentuk angka
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start --hostname 127.0.0.1', // Menambahkan alamat IP di sini
      env: {
        NODE_ENV: "development",
        PORT: 3000 // Menentukan port di sini
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000 // Menentukan port di sini
      }
    }
  ],
  deploy: {
    production: {
      //user: "fauzan",
      host: "127.0.0.1",
      //key: "./id_rsa",
      ref: "origin/master",
      repo: "https://github.com/sekadau-online/frontend-cms.git",
      path: "./private/frontend-cms", // Ubah path sesuai struktur proyek Anda
      "pre-deploy": "git fetch --all",
      "post-deploy": "npm install && npm run build && pm2 reload ecosystem.config.ts --env production"
    }
  }
}
