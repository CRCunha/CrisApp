
clear
echo DIGITE A MENSAGEM DO SEU COMMIT:
read message

date +"%FORMAT"
var=$(date)
var=`date`

PS3='Escolha o tipo do seu commit: '
options=("BugFix" "HotFix" "Feature" "Lint")
select opt in "${options[@]}"
do
    case $opt in
        "BugFix")
            variable="BugFix"
            emoji=":wrench:"
            break
            ;;
        "HotFix")
            variable="HotFix"
            emoji=":fire:"
            break
            ;;
        "Feature")
            variable="Feature"
            emoji=":rocket:"
            break
            ;;
        "Lint")
            variable="Lint"
            emoji=":hammer:"
            break
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

git add .

git commit -m "( $variable $emoji ) - $var - $message"
git push

