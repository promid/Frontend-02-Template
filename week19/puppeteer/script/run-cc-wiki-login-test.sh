i=0
while [ $i -lt 50 ]
do
    echo "No.$i"
    node "../src/cc-wiki-login.js"
    ((i++))
done

