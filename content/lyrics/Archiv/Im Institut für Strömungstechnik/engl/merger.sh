#!/bin/bash

# Create a new Markdown file
output_file="joined.md"
echo "" > $output_file

# Loop over all RTF files in the current directory
for file in *.rtf
do
  # Get the file name without the extension
  filename=$(basename "$file" .rtf)

  # Convert the RTF file to Markdown
  textutil -convert html -stdout "$file" | pandoc -f html -t markdown_strict -o "${filename}.md"

  # Add a header with the file name to the output file
  echo "# $filename" >> $output_file

  # Append the contents of the Markdown file to the output file
  cat "${filename}.md" >> $output_file

  # Add a new line to the output file
  echo "" >> $output_file

  # Remove the temporary Markdown file
  rm "${filename}.md"
done