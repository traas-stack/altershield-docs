#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"/source

# Check if node and npm are installed
if ! command -v node &> /dev/null; then
    echo "Error: node is not installed." >&2
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed." >&2
    exit 1
fi

# Check if docusaurus is installed
if npm ls docusaurus | grep -q 'docusaurus'; then
  echo "docusaurus is already installed"
else
  echo "docusaurus is not installed, installing..."
  npm install --global docusaurus
fi


# execute npm order
npm run build

# 检查编译是否成功
if [ $? -eq 0 ]; then
    echo "Build successful."
else
    echo "Error: Build failed." >&2
    exit 1
fi


# 拷贝 build 目录下的内容到指定目录并覆盖原先的内容
if [ -d "build" ]; then
    cp -rf build/* "$PROJECT_DIR"/docs
    echo "Build files have been copied to "$PROJECT_DIR"/docs."
else
    echo "Error: build directory not found." >&2
    exit 1
fi




