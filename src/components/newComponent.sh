# Ask user to enter component name
echo "Enter the component's name to continue:"
# Read component name
read component
# Create a component with the given name
mkdir $component
cd $component
touch index.js
touch styles.js
