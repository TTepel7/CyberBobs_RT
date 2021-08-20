@echo off
echo [92m..Starting containers..[0m

docker-compose up -d

cls

echo ----------------------------------------------
echo --      [92mDOCKER UP AND RUNNING[0m               --
echo ----------------------------------------------
echo -  APP URL: http://localhost:8080            -
echo -  ADMINER: http://localhost:6080            -
echo ----------------------------------------------
echo - Run [93mdocker-compose stop[0m to stop containers -
echo ----------------------------------------------