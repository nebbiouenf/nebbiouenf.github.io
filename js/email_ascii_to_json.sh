#expects file with three cols TABS separated .
#	subscription_id	goglefileID	email_ascii_sum

inp=$1

echo "'{"'\'
for l in `cat $inp|sed 's/\t/;/g'`
do
 l=(`echo $l|sed 's/;/ /g'`)
 echo -e '"'${l[0]}'": {"ascii":' ${l[2]}', "id" :"'${l[1]}'" },\'
done
echo "}'"
