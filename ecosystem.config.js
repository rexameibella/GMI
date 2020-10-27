module.exports = {
    apps : [{
      name: 'Test',
      script: 'bin/www',
      watch: true,
      max_memory_restart: '1G',
      instances: 1,
      instance_var: "INSTANCE_ID",
      exec_mode: "cluster",
      out_file: "~/.pm2/logs/testLog.log",
      error_file: "~/.pm2/logs/testError.log",
      env: {
        NODE_ENV: 'local',
        PORT: 4001,
        PORT_CHAT :5000
      }
    }]
  };
  