# presale-backend
Backend code for receive USD token and withdraw Solmate token

### Configuration
mv ormconfig.prod.json ormconfig.json


### Start or stop daemon
pm2 start npm --name "solmate_presale" -- start
pm2 start "solmate_presale"
pm2 stop "solmate_presale"