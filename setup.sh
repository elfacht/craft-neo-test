#!/bin/bash
#
# Basic boilerplate setup
#
if cd cms && composer install
then
  composer update
  printf -- "Create .htaccess and .env\n"
  cp .env.example .env
  cp web/.htaccess.example web/.htaccess
  php craft setup/security-key

  if [ -d '../source' ]
  then
    printf -- "Create source config file.\n"
    cp ../source/config.json.default ../source/config.json
  fi
fi
