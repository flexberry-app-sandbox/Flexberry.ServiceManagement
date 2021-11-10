docker build --no-cache -f SQL\Dockerfile.PostgreSql -t service_management/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t service_management/app ../..
