#!/bin/bash
set -e

SOURCE_DIR="contents"
TARGET_DIR="public"

echo "Copying images files from $SOURCE_DIR to $TARGET_DIR..."

find "$SOURCE_DIR" -type f -name "*.webp" | while read -r file; do
    relative_path="${file#$SOURCE_DIR/}"
    target_file="$TARGET_DIR/$relative_path"
    target_dir=$(dirname "$target_file")
    mkdir -p "$target_dir"
    cp "$file" "$target_file"
done
