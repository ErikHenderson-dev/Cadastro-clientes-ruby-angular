#!/bin/bash
docker-compose build --force-rm
docker-compose up -d
docker-compose exec backend bundle
docker-compose exec backend rails db:migrate
docker-compose exec backend rails s -b 0.0.0.0
