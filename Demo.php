<!DOCTYPE html>
<html>
    <head>
        <title>Jarosh-l10n</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="Jarosh-l10n.js"></script>
        <script type="text/javascript">
            // normally you may want (and honestly should) to load
            // required language pack dynamically either on page initial loading
            // by checking against 'Accept-Language' HTTP header or something,
            // or after some actions performed by user on an already loaded page
            var LOC = {
                en_US: <?= json_encode(require('Demo-l10n/en_US.php')); ?>,
                es_ES: <?= json_encode(require('Demo-l10n/es_ES.php')); ?>,
                ru_RU: <?= json_encode(require('Demo-l10n/ru_RU.php')); ?>
            };
        </script>
        <script type="text/javascript" src="Demo.js"></script>
    </head>
    <body onLoad="demo('en_US');">
        <ul>
            <li><a href="#" onClick="demo('en_US');">en_US</a></li>
            <li><a href="#" onClick="demo('es_ES');">es_ES</a></li>
            <li><a href="#" onClick="demo('ru_RU');">ru_RU</a></li>
        </ul>
        <div id="demo">
        </div>
    </body>
</html>
