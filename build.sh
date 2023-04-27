#!/bin/bash

cd ./source

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
if ! command -v docusaurus &> /dev/null
then
    echo "docusaurus is not installed, installing..."
    npm install --global docusaurus
else
    echo "docusaurus is already installed"
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
    cp -rf build/* ../altershield-site
    echo "Build files have been copied to ../altershield-site."
else
    echo "Error: build directory not found." >&2
    exit 1
fi




