#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"/source

yarn write-translations --locale zh-CN

cp -rn docs/** i18n/zh-CN/docusaurus-plugin-content-docs/current
cp -rn blog/** i18n/zh-CN/docusaurus-plugin-content-blog

