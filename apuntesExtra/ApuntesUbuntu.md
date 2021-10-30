Configurar HOST virtual
https://ourcodeworld.co/articulos/leer/302/como-configurar-un-host-virtual-localmente-con-xampp-en-ubuntu

#CONSTRUCCIÓN DE HOST {example}
<VirtualHost *:80>
    ServerAdmin webmaster@NAME
    DocumentRoot "/opt/lampp/htdocs/NAMECARP"
    ServerName NAME
    ErrorLog "logs/NAME-error_log"
    CustomLog "logs/NAME-access_log" common
</VirtualHost>
